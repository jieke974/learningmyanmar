import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const JapanStudyPortal = () => {
  const [selectedTab, setSelectedTab] = useState("Hiragana");

  const categories = [
    { name: "Hiragana", jp: "ひらがな", color: "bg-rose-500" },
    { name: "Katakana", jp: "カタカナ", color: "bg-blue-500" },
    { name: "Nouns", jp: "名詞", color: "bg-emerald-500" },
    { name: "Grammar", jp: "文法", color: "bg-amber-500" },
  ];

  return (
    <div className="min-h-screen bg-[#fcfaf7] text-[#2d2d2d] font-sans">
      {/* Decorative Sun (Japan Symbol) */}
      <div className="fixed -top-20 -right-20 w-80 h-80 bg-red-50 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <nav className="relative z-10 max-w-5xl mx-auto px-6 py-8 flex justify-between items-center">
        <div className="text-2xl font-black tracking-tighter text-red-600">
          JP-STUDY.
        </div>
        <div className="flex gap-6 text-sm font-medium text-slate-400">
          <span>PORTFOLIO</span>
          <span>JSON DATA</span>
        </div>
      </nav>

      <main className="relative z-10 max-w-5xl mx-auto px-6 pt-12 pb-20">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Left Side: Content */}
          <div className="flex-1 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-block px-3 py-1 bg-red-100 text-red-700 text-xs font-bold rounded-md mb-4"
            >
              ဂျပန်ဘာသာစကား လေ့လာရေး
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              Mastering <br />
              <span className="text-red-600">Japanese</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-slate-500 mb-10 leading-relaxed"
            >
              Hiragana, Katakana မှစတင်၍ အခြေခံနာမ် (Nouns) များကို <br />
              စနစ်တကျ လေ့လာနိုင်ရန် JSON database ဖြင့် တည်ဆောက်ထားပါသည်။
            </motion.p>

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {categories.map((cat) => (
                <motion.button
                  key={cat.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedTab(cat.name)}
                  className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                    selectedTab === cat.name
                      ? "bg-slate-900 text-white shadow-xl shadow-slate-200"
                      : "bg-white border border-slate-100 text-slate-400 hover:border-red-200"
                  }`}
                >
                  <span className="block text-[10px] opacity-60 uppercase tracking-widest">
                    {cat.jp}
                  </span>
                  {cat.name}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Right Side: Animated Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", damping: 15 }}
            className="relative w-72 h-96 bg-white rounded-[2rem] shadow-2xl shadow-red-100 border border-slate-50 flex flex-col items-center justify-center overflow-hidden"
          >
            <div className="absolute top-0 w-full h-2 bg-red-600" />

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-center"
              >
                <div className="text-8xl mb-4">
                  {selectedTab === "Hiragana" && "あ"}
                  {selectedTab === "Katakana" && "ア"}
                  {selectedTab === "Nouns" && "本"}
                  {selectedTab === "Grammar" && "語"}
                </div>
                <div className="text-slate-400 font-medium tracking-widest uppercase text-xs">
                  Learning Now
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-12 w-48 h-1 bg-slate-100 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "65%" }}
                className="h-full bg-red-500"
              />
            </div>
            <p className="mt-2 text-[10px] font-bold text-slate-300">
              PROGRESS: 65%
            </p>
          </motion.div>
        </div>

        {/* Section Title for Myanmar Translation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-32 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">ဘာသာပြန်ဆိုချက်များ</h3>
          <div className="h-1 w-20 bg-red-600 mx-auto rounded-full" />
        </motion.div>
      </main>

      <footer className="text-center py-10 border-t border-slate-100 text-slate-300 text-xs">
        DESIGNED FOR JAPANESE LANGUAGE STUDY &copy; 2026
      </footer>
    </div>
  );
};

export default JapanStudyPortal;
