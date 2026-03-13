import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
const PythonIntro = () => {
  return (
    <div className="min-h-screen bg-[#0a0c10] text-slate-300 font-sans selection:bg-indigo-500/30">
      {/* Background Ambient Glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px]" />
      </div>

      <nav className="relative z-10 max-w-6xl mx-auto px-8 py-10 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-[#3776ab] to-[#ffd43b] rounded-xl flex items-center justify-center shadow-lg shadow-blue-900/20">
            <span className="text-white font-black text-xl">Py</span>
          </div>
          <span className="text-xl font-bold tracking-tighter text-white">
            PYTHON_DEV
          </span>
        </div>
        <div className="hidden md:flex gap-8 text-[11px] font-bold tracking-[0.2em] text-slate-500">
          <span>DATA_SCIENCE</span>
          <span>AUTOMATION</span>
          <span>AI_MODELS</span>
        </div>
      </nav>

      <main className="relative z-10 max-w-6xl mx-auto px-8 pt-12 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-[10px] font-black uppercase tracking-widest">
                The Multi-purpose Language
              </span>
            </div>

            <h1 className="text-7xl md:text-8xl font-black text-white mb-8 tracking-tighter">
              PY
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3776ab] to-[#ffd43b]">
                THON
              </span>
            </h1>

            <p className="text-xl text-slate-400 leading-relaxed mb-10 max-w-md">
              ဖတ်ရလွယ်ကူပြီး စွမ်းအားကြီးမားတဲ့ ဘာသာစကား။ <br />
              <span className="text-indigo-400 font-medium font-mono">
                Automation, Scripting
              </span>{" "}
              နဲ့{" "}
              <span className="text-indigo-400 font-medium font-mono">
                Deep Learning
              </span>{" "}
              လောကထဲကို ဝင်ရောက်ဖို့ အကောင်းဆုံးလမ်းစ။
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-indigo-600 text-white font-bold rounded-2xl shadow-xl shadow-indigo-900/20 hover:bg-indigo-500 transition-all"
              >
                <Link to={"/python/video/0"}>Start Coding</Link>
              </motion.button>
            </div>
          </motion.div>

          {/* Right Side: Interactive Code Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="bg-[#161b22] border border-slate-800 p-2 rounded-3xl shadow-2xl relative overflow-hidden group">
              <div className="flex gap-1.5 p-4 border-b border-slate-800/50">
                <div className="w-3 h-3 rounded-full bg-red-500/20" />
                <div className="w-3 h-3 rounded-full bg-amber-500/20" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/20" />
                <span className="ml-4 text-[10px] font-mono text-slate-500">
                  main.py
                </span>
              </div>
              <div className="p-8 font-mono text-sm leading-relaxed">
                <p className="mb-2">
                  <span className="text-pink-500 italic">import</span>{" "}
                  <span className="text-white">pandas</span>{" "}
                  <span className="text-pink-500 italic">as</span>{" "}
                  <span className="text-blue-400">pd</span>
                </p>
                <p className="mb-2">
                  <span className="text-pink-500">def</span>{" "}
                  <span className="text-emerald-400">greet_dev</span>(name):
                </p>
                <p className="mb-2 ml-4 text-slate-500">
                  # Welcome to Python Study
                </p>
                <p className="mb-2 ml-4 font-bold text-white tracking-wide">
                  print(
                  <span className="text-amber-200">
                    f"Hello, &#123;name&#125;!"
                  </span>
                  )
                </p>
                <p className="mb-2">
                  <span className="text-emerald-400">greet_dev</span>(
                  <span className="text-amber-200">"Myanmar Web Dev"</span>)
                </p>
              </div>

              {/* Animated Floating Tags */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute top-1/2 -right-4 px-4 py-2 bg-indigo-600 text-white text-[10px] font-bold rounded-lg shadow-xl"
              >
                pip install
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Use Cases Grid */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Data Analysis",
              desc: "Pandas နှင့် NumPy တို့ဖြင့် ဒေတာများကို စနစ်တကျ ခွဲခြမ်းစိတ်ဖြာခြင်း။",
            },
            {
              title: "Web Backend",
              desc: "Django နှင့် Flask တို့ဖြင့် စွမ်းအားမြင့် Backend များ တည်ဆောက်ခြင်း။",
            },
            {
              title: "Automation",
              desc: "နေ့စဉ်ပြုလုပ်ရသော အလုပ်များကို Python Script များဖြင့် အလိုအလျောက် ပြုလုပ်ခြင်း။",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8, backgroundColor: "rgba(30, 41, 59, 0.5)" }}
              className="p-8 bg-[#0d1117] border border-slate-800 rounded-[2rem] transition-all"
            >
              <h3 className="text-white font-bold mb-3">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </main>

      <footer className="text-center py-12 border-t border-slate-900 text-slate-700 text-[10px] tracking-[0.5em] font-mono">
        PYTHON | HIGH_LEVEL_LANGUAGE | 2026
      </footer>
    </div>
  );
};

export default PythonIntro;
