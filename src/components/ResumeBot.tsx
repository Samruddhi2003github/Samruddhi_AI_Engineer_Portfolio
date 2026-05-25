import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, Bot, User, X, Sparkles, MessageSquare, Key } from "lucide-react";
import { GoogleGenAI } from "@google/genai";
import ReactMarkdown from "react-markdown";
import { resumeData } from "../lib/resumeData";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

export default function ResumeBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [apiKey, setApiKey] = useState(() => {
    return GEMINI_API_KEY || localStorage.getItem("SAMRUDDHI_PORTFOLIO_GEMINI_KEY") || "";
  });
  const [showKeyInput, setShowKeyInput] = useState(false);
  const [tempKey, setTempKey] = useState("");

  const [messages, setMessages] = useState<{ role: 'user' | 'assistant', content: string }[]>(() => {
    const defaultWelcome = "Hi! I'm Samruddhi's AI Assistant. Ask me anything about her projects, skills, or experience!";
    const activeKey = GEMINI_API_KEY || localStorage.getItem("SAMRUDDHI_PORTFOLIO_GEMINI_KEY") || "";
    if (!activeKey) {
      return [
        { role: 'assistant', content: defaultWelcome },
        { role: 'assistant', content: "⚠️ Note: I am currently in offline mode because no API key was configured during deployment. Click the 🔑 Key icon in the top header to enter your own Gemini API Key temporarily, or refer to the README to configure it on Netlify!" }
      ];
    }
    return [{ role: 'assistant', content: defaultWelcome }];
  });

  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSaveKey = () => {
    const trimmed = tempKey.trim();
    if (trimmed) {
      localStorage.setItem("SAMRUDDHI_PORTFOLIO_GEMINI_KEY", trimmed);
      setApiKey(trimmed);
      setShowKeyInput(false);
      setMessages(prev => [...prev, { role: 'assistant', content: "✨ Your Gemini API Key has been saved successfully in your browser's local storage! I am now fully online. Ask me anything!" }]);
    }
  };

  const handleClearKey = () => {
    localStorage.removeItem("SAMRUDDHI_PORTFOLIO_GEMINI_KEY");
    setApiKey("");
    setTempKey("");
    setShowKeyInput(false);
    setMessages(prev => [...prev, { role: 'assistant', content: "🔄 API Key cleared. Switched back to offline fallback mode." }]);
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const activeKey = apiKey.trim();
    if (!activeKey) {
      const userMsg = input;
      setInput("");
      setMessages(prev => [
        ...prev, 
        { role: 'user', content: userMsg },
        { role: 'assistant', content: "I am unable to connect to the brain because no Gemini API Key is configured. Click the 🔑 Key icon in the top right to paste a free Gemini API Key, or configure it on your hosting dashboard." }
      ]);
      return;
    }

    const userMessage = input;
    setInput("");
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: activeKey });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
          { role: 'user', parts: [{ text: `
            You are an AI assistant representing Samruddhi Bansode, an AI Engineer. 
            Here is her resume data: ${JSON.stringify(resumeData)}
            
            Instructions:
            - Answer professionally based ONLY on the provided data.
            - DO NOT mention being 'powered by Gemini' or any other AI model.
            - DO NOT use markdown bold stars (**) for styling. Use plain text or bullet points (-).
            - Keep responses concise and focused on recruiter needs.
            - If you don't know the answer, say "I don't have that specific information, but please reach out to her at samruddhipb@gmail.com".
            
            Question: ${userMessage}
          ` }] }
        ]
      });

      setMessages(prev => [...prev, { role: 'assistant', content: response.text || "I'm sorry, I couldn't process that." }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'assistant', content: "Something went wrong while communicating with Gemini. Please make sure the API key is active and correct." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          onClick={() => setIsOpen(true)}
          className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary text-white shadow-[0_0_20px_rgba(139,92,246,0.5)] flex items-center justify-center z-[100] group overflow-hidden"
        >
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform" />
          <MessageSquare className="relative z-10 group-hover:scale-110 transition-transform" />
          <Sparkles className="absolute top-2 right-2 w-4 h-4 text-white animate-pulse" />
        </motion.button>
      )}

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            className="fixed bottom-8 right-8 w-80 sm:w-96 h-[500px] glass z-[100] rounded-3xl flex flex-col overflow-hidden shadow-2xl border border-white/10"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-primary/80 to-secondary/80 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-primary">
                  <Bot size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white leading-tight">Ask about Samruddhi’s work</h4>
                  <p className="text-[10px] text-white/70">Expertise in RAG, CV & MLOps</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {!GEMINI_API_KEY && (
                  <button 
                    onClick={() => setShowKeyInput(!showKeyInput)} 
                    className={`p-1.5 rounded-full hover:bg-white/15 transition-colors ${showKeyInput ? 'text-yellow-300 bg-white/10' : 'text-white/80'}`}
                    title="Configure API Key"
                  >
                    <Key size={16} />
                  </button>
                )}
                <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* API Key Drawer */}
            <AnimatePresence>
              {showKeyInput && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="bg-slate-900 border-b border-white/10 p-4 space-y-3 shrink-0 text-slate-200"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold">Set Custom Gemini API Key</span>
                    <span className="text-[10px] text-yellow-400 font-mono bg-yellow-400/10 px-1.5 py-0.5 rounded">Saved in Browser</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-normal">
                    To make this chatbot work, either paste a temporary <a href="https://aistudio.google.com/" target="_blank" rel="noreferrer" className="text-secondary hover:underline">Gemini key</a> below, or add `GEMINI_API_KEY` to your hosting platform's environment variables and re-trigger a deployment.
                  </p>
                  <div className="flex gap-2">
                    <input
                      type="password"
                      value={tempKey}
                      onChange={(e) => setTempKey(e.target.value)}
                      placeholder="AIzaSy..."
                      className="flex-grow bg-slate-800 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-secondary"
                    />
                    <button
                      onClick={handleSaveKey}
                      className="bg-secondary text-white text-xs px-3 py-1.5 rounded-lg font-semibold hover:bg-secondary/80 transition-colors"
                    >
                      Save
                    </button>
                    {apiKey && (
                      <button
                        onClick={handleClearKey}
                        className="bg-slate-700 text-slate-300 text-xs px-2 py-1.5 rounded-lg hover:bg-slate-600 transition-colors"
                      >
                        Clear
                      </button>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Messages */}
            <div ref={scrollRef} className="flex-grow overflow-y-auto p-4 space-y-4 hide-scrollbar bg-slate-950/20">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                    msg.role === 'user' 
                      ? 'bg-secondary text-white rounded-tr-none' 
                      : 'bg-slate-800 text-slate-200 rounded-tl-none border border-slate-700/50'
                  }`}>
                    <div className="markdown-body">
                      {msg.role === 'assistant' ? (
                        <p>{msg.content.replace(/\*\*/g, '')}</p>
                      ) : (
                        <ReactMarkdown>{msg.content}</ReactMarkdown>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-slate-800 p-3 rounded-2xl rounded-tl-none animate-pulse flex gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-500 animate-bounce" />
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-500 animate-bounce delay-100" />
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-500 animate-bounce delay-200" />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 bg-slate-900/50 border-t border-slate-800">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about her projects..."
                  className="w-full bg-slate-800 border border-slate-700 rounded-full py-3 pl-5 pr-12 text-sm focus:outline-none focus:border-secondary transition-colors"
                />
                <button 
                  onClick={handleSend}
                  disabled={isLoading}
                  className="absolute right-2 top-1.5 p-2 text-secondary hover:text-white transition-colors disabled:opacity-50"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
