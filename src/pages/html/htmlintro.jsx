import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
const HTMLIntro = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-300 font-mono selection:bg-cyan-500/30">
      {/* Animated Background Glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
      </div>

      <main className="relative z-10 max-w-5xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-cyan-500"></div>
              <span className="text-cyan-400 text-sm tracking-[0.3em] uppercase font-bold">
                Web Foundations
              </span>
            </div>

            <h1 className="text-6xl md:text-7xl font-black text-white mb-8 tracking-tighter">
              HTML<span className="text-cyan-500">5</span>
            </h1>

            <p className="text-lg text-slate-400 font-sans leading-relaxed mb-10 max-w-md">
              ဝဘ်ဆိုဒ်တစ်ခုရဲ့ အခြေခံ အဆောက်အအုံကို တည်ဆောက်ခြင်း။ <br />
              <span className="text-slate-200">Semantic Tags</span> များကို
              အသုံးပြုပြီး ပိုမိုကောင်းမွန်တဲ့ Structure များ ဖန်တီးပုံကို
              လေ့လာပါ။
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to={"/html/video/0"}>
                {" "}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-cyan-500 text-[#0f172a] font-bold rounded-xl shadow-lg shadow-cyan-500/20 hover:bg-cyan-400 transition-all"
                >
                  သင်ခန်းစာ စတင်ရန်
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Right Side: Code Decoration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            {/* Mock Code Window */}
            <div className="bg-[#1e293b]/80 backdrop-blur-xl border border-slate-700 p-1 rounded-2xl shadow-2xl">
              <div className="flex gap-2 p-4 border-b border-slate-800">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
                <span className="ml-4 text-xs text-slate-500">index.html</span>
              </div>
              <div className="p-8 text-sm md:text-base leading-relaxed">
                <div className="flex gap-4">
                  <span className="text-slate-600">1</span>
                  <p>
                    <span className="text-pink-500">&lt;main&gt;</span>
                  </p>
                </div>
                <div className="flex gap-4 ml-4">
                  <span className="text-slate-600">2</span>
                  <p>
                    <span className="text-pink-500">&lt;h1&gt;</span>
                    <span className="text-white">မင်္ဂလာပါ</span>
                    <span className="text-pink-500">&lt;/h1&gt;</span>
                  </p>
                </div>
                <div className="flex gap-4 ml-4">
                  <span className="text-slate-600">3</span>
                  <p>
                    <span className="text-pink-500">&lt;p&gt;</span>
                    <span className="text-slate-400">
                      Welcome to HTML Study
                    </span>
                    <span className="text-pink-500">&lt;/p&gt;</span>
                  </p>
                </div>
                <div className="flex gap-4">
                  <span className="text-slate-600">4</span>
                  <p>
                    <span className="text-pink-500">&lt;/main&gt;</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Element */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -bottom-6 -right-6 px-6 py-4 bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-md rounded-2xl"
            >
              <p className="text-cyan-400 text-xs font-bold tracking-widest uppercase mb-1">
                Status
              </p>
              <p className="text-white text-sm">Structure Optimized</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Feature Grid */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Semantic HTML",
              desc: "Search engine များအတွက် ပိုမိုကောင်းမွန်သော tags များ",
            },
            {
              title: "Forms & Input",
              desc: "အသုံးပြုသူထံမှ data ရယူရန် နည်းလမ်းများ",
            },
            {
              title: "Media Tags",
              desc: "Images, Videos နှင့် Audio များ ထည့်သွင်းပုံ",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="p-8 bg-slate-900/50 border border-slate-800 rounded-3xl hover:border-cyan-500/50 transition-all"
            >
              <h3 className="text-white font-bold mb-3">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </main>

      <footer className="text-center py-12 border-t border-slate-900 text-slate-600 text-[10px] tracking-[0.5em]">
        HTML5 | DEVELOPER CONTEXT | 2026
      </footer>
    </div>
  );
};

export default HTMLIntro;
