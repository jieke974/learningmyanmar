import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, redirect, useNavigate } from "react-router";
const HSKIntro = () => {
  const [activeLevel, setActiveLevel] = useState(4);
  const navigation = useNavigate()
  const levels = [1, 2, 3, 4, 5, 6];

  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-800 font-sans selection:bg-red-100">
      {/* Background Decorative Element */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -right-[10%] w-[500px] h-[500px] bg-red-50 rounded-full blur-3xl opacity-60" />
        <div className="absolute top-[20%] -left-[5%] w-[300px] h-[300px] bg-orange-50 rounded-full blur-3xl opacity-50" />
      </div>

      <main className="relative z-10 max-w-6xl mx-auto px-6 py-20 flex flex-col items-center">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-8"
        >
          <span className="text-sm font-medium tracking-wider text-red-600 uppercase">
            Learn Chinese Myanamr
          </span>
        </motion.div>

        {/* Title Section */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold tracking-tight text-slate-900 mb-6"
          >
            HSK{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-400">
              Portal
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed"
          >
            တရုတ်ဘာသာစကားကို စနစ်တကျနဲ့ အဆင့်လိုက် လေ့လာနိုင်ဖို့အတွက် <br />
            သင်ခန်းစာများကို{" "}
            <span className="font-semibold text-slate-800 underline decoration-red-200">
              JSON Format
            </span>{" "}
            များဖြင့် စနစ်တကျ စုစည်းပေးထားပါသည်။
          </motion.p>
        </div>

        {/* Level Selector - Aesthetic Grid */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 w-full max-w-3xl">
          {levels.map((level, index) => (
            <motion.div
              key={level}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              onClick={() => setActiveLevel(level)}
              className={`relative cursor-pointer group p-6 rounded-2xl border transition-all duration-300 flex flex-col items-center justify-center
                ${
                  activeLevel === level
                    ? "bg-white border-red-500 shadow-xl shadow-red-100 scale-105 z-20"
                    : "bg-white/50 border-slate-100 hover:border-red-200 hover:bg-white shadow-sm"
                }`}
            >
              <span
                className={`text-xs font-bold mb-1 ${activeLevel === level ? "text-red-500" : "text-slate-400"}`}
              >
                LEVEL
              </span>
              <span
                className={`text-3xl font-bold ${activeLevel === level ? "text-slate-900" : "text-slate-400"}`}
              >
                {level}
              </span>

              {activeLevel === level && (
                <motion.div
                  layoutId="glow"
                  className="absolute inset-0 bg-red-500/5 rounded-2xl -z-10"
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Dynamic Content Area */}
        <motion.div
          key={activeLevel}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-20 w-full max-w-4xl p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-2xl shadow-slate-200/50 flex flex-col md:flex-row items-center gap-10"
        >
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              HSK Level {activeLevel} သင်ခန်းစာ
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-6">
              သင်သည် လက်ရှိတွင် HSK {activeLevel} အတွက် ဝေါဟာရပေါင်း ၆၀၀
              ကျော်ကို မြန်မာဘာသာပြန်များနှင့်တကွ လေ့လာရန် ပြင်ဆင်နေပါသည်။
              ဤအဆင့်သည် သင်၏ တရုတ်စာ စွမ်းရည်ကို နောက်ထပ် အဆင့်တစ်ခုသို့
              မြှင့်တင်ပေးမည် ဖြစ်သည်။
            </p>

            <Link to={"/hsk1/video/0"}>
              <button className="px-8 py-3 bg-slate-900 text-white rounded-full font-medium hover:bg-red-600 transition-colors duration-300 shadow-lg shadow-slate-200">
                လေ့လာမှု စတင်ရန်
              </button>
            </Link>
          </div>

          <div className="w-full md:w-64 h-64 bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl flex items-center justify-center relative overflow-hidden">
            <span className="text-9xl font-black text-red-500/10 absolute select-none">
              学
            </span>
            <div className="text-center relative">
              <div className="text-5xl font-bold text-red-600 mb-2">
                {activeLevel}
              </div>
              <div className="text-sm font-bold tracking-widest text-red-400">
                HSK LEVEL
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="py-10 text-center text-slate-400 text-sm">
        &copy; 2026 HSK Myanmar Web Developer Study Portal.
      </footer>
    </div>
  );
};

export default HSKIntro;
