import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
const CSSIntro = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans selection:bg-indigo-100">
      {/* Decorative Gradient Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-indigo-200/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-200/40 rounded-full blur-[120px]" />
      </div>

      <nav className="relative z-10 max-w-6xl mx-auto px-8 py-10 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg rotate-12 flex items-center justify-center text-white font-black text-xs">
            CSS
          </div>
          <span className="font-bold tracking-tight text-xl">STYLE.LAB</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-500">
          <a href="#" className="hover:text-indigo-600 transition-colors">
            FLEXBOX
          </a>
          <a href="#" className="hover:text-indigo-600 transition-colors">
            GRID
          </a>
          <a href="#" className="hover:text-indigo-600 transition-colors">
            ANIMATIONS
          </a>
        </div>
      </nav>

      <main className="relative z-10 max-w-6xl mx-auto px-8 pt-10 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Branding & Text (7 cols) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 rounded-full mb-6 shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                Web Styling Masterclass
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-7xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter"
            >
              CSS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">
                Magic.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-slate-500 leading-relaxed mb-12 max-w-lg"
            >
              ဝဘ်ဆိုဒ်တစ်ခုကို သက်ဝင်လှုပ်ရှားလာအောင် ဖန်တီးပါ။ <br />
              <span className="text-slate-900 font-medium">
                Layout, Colors
              </span>{" "}
              နှင့်{" "}
              <span className="text-slate-900 font-medium">
                Responsive Design
              </span>{" "}
              နည်းပညာများကို ကျွမ်းကျင်စွာ အသုံးပြုနိုင်ရန် လေ့လာပါ။
            </motion.p>

            <div className="flex flex-wrap gap-4">
              <button className="px-10 py-4 bg-indigo-600 text-white rounded-2xl font-bold shadow-xl shadow-indigo-200 hover:bg-indigo-700 transition-all">
                <Link to={"/css/cssvideo/0"}>သင်ခန်းစာများကြည့်မည်</Link>
              </button>
            </div>
          </div>

          {/* Right: Visual Showcase (5 cols) */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative aspect-square"
            >
              {/* Abstract CSS Box Modeling Visual */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-[40px] border-indigo-500/5 rounded-[4rem]"
              />

              <div className="absolute inset-10 bg-white border border-slate-100 rounded-[3rem] shadow-2xl flex items-center justify-center p-8 overflow-hidden">
                <div className="grid grid-cols-2 gap-4 w-full h-full">
                  <div className="bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl animate-pulse" />
                  <div className="bg-slate-100 rounded-2xl" />
                  <div className="bg-slate-100 rounded-2xl" />
                  <div className="bg-indigo-50 rounded-2xl flex items-center justify-center">
                    <div className="w-12 h-1 bg-indigo-200 rounded-full" />
                  </div>
                </div>
              </div>

              {/* Floating Tooltip */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-10 -right-4 px-6 py-4 bg-white/80 backdrop-blur-md border border-white rounded-2xl shadow-xl"
              >
                <div className="flex gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-pink-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-indigo-500" />
                </div>
                <p className="font-mono text-[10px] text-slate-400">
                  .button &#123;
                </p>
                <p className="font-mono text-[10px] text-indigo-600 ml-4">
                  blur: 120px;
                </p>
                <p className="font-mono text-[10px] text-slate-400">&#125;</p>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-6">
          {["Flexbox", "Grid", "Transitions", "Tailwind"].map((tech, i) => (
            <motion.div
              key={tech}
              whileHover={{ y: -10 }}
              className="p-6 bg-white border border-slate-100 rounded-3xl text-center shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 transition-all"
            >
              <div className="w-10 h-10 bg-indigo-50 rounded-xl mx-auto mb-4 flex items-center justify-center text-indigo-600 font-bold">
                {i + 1}
              </div>
              <h4 className="font-bold text-slate-800">{tech}</h4>
            </motion.div>
          ))}
        </div>
      </main>

      <footer className="text-center py-10 text-slate-300 text-[11px] font-bold tracking-[0.4em]">
        CASCADING STYLE SHEETS | 2026
      </footer>
    </div>
  );
};

export default CSSIntro;
