import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {Link} from "react-router"
const JSIntro = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans overflow-hidden">
      {/* Background Glows (JS Yellow Theme) */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-amber-600/10 rounded-full blur-[100px]" />
      </div>

      <nav className="relative z-10 max-w-6xl mx-auto px-8 py-8 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#f7df1e] text-black font-black flex items-center justify-center rounded-lg shadow-[0_0_20px_rgba(247,223,30,0.3)]">
            JS
          </div>
          <span className="text-xl font-bold tracking-tighter italic">
            V8_ENGINE
          </span>
        </div>
        <div className="flex gap-6 text-[10px] font-bold tracking-[0.2em] text-slate-500">
          <span className="hover:text-yellow-400 transition-colors cursor-pointer">
            ECMASCRIPT+
          </span>
          <span className="hover:text-yellow-400 transition-colors cursor-pointer">
            DOM_API
          </span>
        </div>
      </nav>

      <main className="relative z-10 max-w-6xl mx-auto px-8 pt-16 pb-20">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          {/* Left: Content */}
          <div className="flex-1 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-block px-3 py-1 bg-yellow-500/10 border border-yellow-500/20 rounded text-yellow-500 text-[10px] font-black uppercase tracking-widest mb-6"
            >
              The Language of the Web
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-7xl md:text-8xl font-black mb-8 leading-none"
            >
              JAVA
              <br />
              <span className="text-[#f7df1e]">SCRIPT</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-slate-400 leading-relaxed mb-12 max-w-lg font-light"
            >
              ဝဘ်ဆိုဒ်တွေကို အသက်ဝင်စေတဲ့ အဓိက စွမ်းအားစု။ <br />
              <span className="text-white font-medium">
                Asynchronous Programming, JSON Data Handling
              </span>{" "}
              နှင့်{" "}
              <span className="text-white font-medium">Interactivity</span>{" "}
              တို့ကို အဆင့်မြင့်စွာ လေ့လာပါ။
            </motion.p>

            <div className="flex flex-wrap gap-5">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(247,223,30,0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-[#f7df1e] text-black font-black rounded-sm uppercase tracking-tighter"
              >
                <Link to={"/javascipt/video/0"}>Start Programming</Link>
              </motion.button>
              
            </div>
          </div>

          {/* Right: Abstract Logic Visual */}
          <div className="flex-1 order-1 lg:order-2 relative w-full flex justify-center">
            <motion.div
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              className="relative w-80 h-80 flex items-center justify-center"
            >
              {/* Spinning Orbitals */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 10 + i * 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 border border-yellow-500/10 rounded-full"
                  style={{ padding: i * 20 }}
                />
              ))}

              {/* Main Core */}
              <motion.div
                animate={{
                  scale: isHovered ? 1.1 : 1,
                  boxShadow: isHovered
                    ? "0 0 50px rgba(247,223,30,0.5)"
                    : "0 0 20px rgba(247,223,30,0.2)",
                }}
                className="w-40 h-40 bg-[#f7df1e] rounded-2xl flex flex-col items-center justify-center p-4 cursor-pointer overflow-hidden"
              >
                <div className="text-black text-5xl font-black mb-1 leading-none">
                  JS
                </div>
                <div className="text-black/40 font-mono text-[8px] font-bold">
                  EVENT_LOOP
                </div>

                {/* Micro-Interaction inside Core */}
                <div className="mt-4 flex gap-1">
                  <motion.div
                    animate={{ height: [4, 12, 4] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="w-1 bg-black/20 rounded-full"
                  />
                  <motion.div
                    animate={{ height: [12, 4, 12] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="w-1 bg-black/40 rounded-full"
                  />
                  <motion.div
                    animate={{ height: [8, 12, 8] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="w-1 bg-black/20 rounded-full"
                  />
                </div>
              </motion.div>

              {/* Floating Code Snippet */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="absolute -bottom-10 bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-lg font-mono text-[10px] text-yellow-500 shadow-2xl"
                  >
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-blue-400">power</span> = () =&gt;{" "}
                    <span className="text-white">"Logic"</span>;
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>

        {/* Console-style Progress Tracker */}
        <div className="mt-32 border-t border-slate-900 pt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { label: "Data Processing", val: "Async/Await" },
              { label: "Frontend Engine", val: "React Framework" },
              { label: "Backend Runtime", val: "Node.js Engine" },
            ].map((item, i) => (
              <div key={i} className="group cursor-default">
                <p className="text-[10px] text-slate-600 font-bold uppercase tracking-widest mb-2 group-hover:text-yellow-500 transition-colors">
                  0{i + 1} // {item.label}
                </p>
                <h4 className="text-xl font-bold text-slate-300 italic tracking-tighter">
                  System.{item.val}()
                </h4>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="text-center py-10 opacity-20 text-[9px] font-mono tracking-[1em]">
        JAVASCRIPT RUNTIME | EXECUTING CORE_LOGIC_2026
      </footer>
    </div>
  );
};

export default JSIntro;
