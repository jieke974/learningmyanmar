import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
const ReactIntro = () => {
  return (
    <div className="min-h-screen bg-[#0c1117] text-slate-300 font-sans selection:bg-cyan-500/20">
      {/* Background Radial Glow (React Cyan Theme) */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-15%] right-[-10%] w-[700px] h-[700px] bg-cyan-600/10 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-[-15%] left-[-10%] w-[600px] h-[600px] bg-blue-700/10 rounded-full blur-[150px]" />
      </div>

      <nav className="relative z-10 max-w-7xl mx-auto px-8 py-8 flex justify-between items-center">
        <div className="flex items-center gap-3">
          {/* React Logo Icon */}
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="w-10 h-10 text-cyan-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <circle cx="12" cy="12" r="3" />
            <ellipse cx="12" cy="12" rx="10" ry="4" />
            <ellipse
              cx="12"
              cy="12"
              rx="10"
              ry="4"
              transform="rotate(60 12 12)"
            />
            <ellipse
              cx="12"
              cy="12"
              rx="10"
              ry="4"
              transform="rotate(120 12 12)"
            />
          </motion.svg>
          <span className="text-2xl font-black tracking-tighter text-white">
            REACT_FRAMEWORK
          </span>
        </div>
        <div className="hidden md:flex gap-6 text-[11px] font-bold tracking-[0.3em] text-slate-500">
          <span>COMPONENTS</span>
          <span>HOOKS_API</span>
          <span>VIRTUAL_DOM</span>
        </div>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-8 pt-16 pb-28 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="px-4 py-1.5 bg-cyan-950/50 border border-cyan-800 rounded-full text-cyan-300 text-xs font-bold tracking-wider">
                User Interface Library
              </span>
            </div>

            <h1 className="text-7xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none">
              RE
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 animate-text-glow">
                ACT
              </span>
              <span className="text-cyan-400">.</span>
            </h1>

            <p className="text-xl text-slate-400 leading-relaxed mb-14 max-w-xl">
              Component-based တည်ဆောက်ပုံဖြင့် Web UI များကို အလွယ်တကူ ဖန်တီးပါ။{" "}
              <br />
              <span className="text-white font-medium">
                Hooks, State Management
              </span>{" "}
              နှင့်{" "}
              <span className="text-white font-medium">
                Component Lifecycle
              </span>{" "}
              တို့ကို စနစ်တကျ လေ့လာပြီး Dynamic Web App များ တည်ဆောက်ပါ။
            </p>

            <div className="flex flex-wrap gap-5">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(34, 211, 238, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-5 bg-cyan-500 text-[#0c1117] font-extrabold rounded-2xl shadow-lg shadow-cyan-900/30 hover:bg-cyan-400 transition-all uppercase tracking-wider text-sm"
              >
                <Link to={"/react/video/0"}>Learn React</Link> 
              </motion.button>
            </div>
          </motion.div>

          {/* Right Side: Component Visual Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 50, rotate: 5 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 1, type: "spring" }}
            className="relative lg:pl-10 flex justify-center lg:justify-end"
          >
            {/* Main 'Component' Box */}
            <div className="bg-[#161b22] border-2 border-slate-800 p-8 rounded-[3rem] shadow-2xl relative w-[380px] group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex justify-between items-center mb-8 pb-4 border-b border-slate-800/50 relative z-10">
                <span className="font-mono text-xs font-black text-cyan-400">
                  &lt;App /&gt;
                </span>
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-slate-700 group-hover:bg-cyan-500 transition-colors" />
                  <div className="w-2 h-2 rounded-full bg-slate-700" />
                </div>
              </div>

              {/* Nested Components Visual */}
              <div className="space-y-5 relative z-10">
                <div className="p-5 bg-[#0c1117] border border-slate-800 rounded-2xl">
                  <span className="font-mono text-[11px] text-slate-500">
                    &lt;Header /&gt;
                  </span>
                  <div className="h-2 w-2/3 bg-slate-800 rounded mt-3animate-pulse" />
                </div>
                <div className="p-5 bg-[#0c1117] border border-cyan-900 rounded-2xl shadow-lg shadow-cyan-950/30">
                  <span className="font-mono text-[11px] text-cyan-400">
                    &lt;Content Data=&#123;json&#125; /&gt;
                  </span>
                  <div className="h-2 w-full bg-cyan-900/50 rounded mt-3" />
                </div>
                <div className="p-5 bg-[#0c1117] border border-slate-800 rounded-2xl">
                  <span className="font-mono text-[11px] text-slate-500">
                    &lt;Footer /&gt;
                  </span>
                </div>
              </div>

              {/* Floating State Badge */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                }}
                className="absolute -top-6 -left-6 px-5 py-3 bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl shadow-2xl"
              >
                <p className="text-xs font-mono text-slate-400">useState( )</p>
                <p className="text-xl font-bold text-white">
                  count: <span className="text-cyan-400">5</span>
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Dynamic Section (Myanmar Context) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          className="mt-40 p-12 bg-[#161b22] border border-slate-800 rounded-[3rem] shadow-2xl relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
            {[
              {
                title: "မြန်မာဘာသာဖြင့် လေ့လာရန်",
                desc: "React ၏ အခြေခံမှစ၍ အဆင့်မြင့် Hooks များအထိ မြန်မာလို ရှင်းလင်းချက်များ။",
              },
              {
                title: "JSON Data ချိတ်ဆက်ပုံ",
                desc: "သင့် HSK data များကဲ့သို့ JSON data များကို React App တွင် fetch လုပ်ပြီး ပြသပုံ။",
              },
              {
                title: "Component architecture",
                desc: "UI များကို Component များအဖြစ် စနစ်တကျ ခွဲခြမ်းစိတ်ဖြာ တည်ဆောက်နည်း။",
              },
            ].map((item, i) => (
              <motion.div key={i} whileHover={{ y: -5 }} className="space-y-3">
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-base leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>

      <footer className="text-center py-12 border-t border-slate-900 text-slate-700 text-[10px] tracking-[0.5em] font-mono">
        REACT_JS | COMPONENT_UI_LIBRARY | 2026
      </footer>
    </div>
  );
};

export default ReactIntro;
