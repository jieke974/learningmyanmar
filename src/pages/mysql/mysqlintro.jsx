import React from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router"; // useLocation ထည့်သွင်းပါ

const MySQLIntro = () => {
  const location = useLocation();

  // Active Link Style Helper
  const getHeaderLinkStyle = (path) => {
    const isActive = location.pathname === path;
    return `mx-2 px-3 py-1 transition-all ${
      isActive
        ? "font-bold border-b-2 border-white text-white"
        : "text-blue-100 hover:text-white"
    }`;
  };

  return (
    <div className="min-h-screen bg-[#f0f4f8] text-slate-800 font-sans selection:bg-blue-100">
      {/* Structural Background Pattern */}
      <div
        className="fixed inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#00618a 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
        }}
      />

      {/* 1. FIXED HEADER (Added Active States) */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-gray-600 text-blue-50 flex items-center overflow-x-auto whitespace-nowrap px-4 z-50 shadow-md">
        <div>
          <Link to={"/hsk1"}>
            Chinese{" "}
            <span className="text-[10px] ml-1 opacity-70 italic">
              (Myanmar)
            </span>
          </Link>
        </div>
        <div className="mx-2 px-3 py-1 ">
          <Link to={"/japan"}>
            Japan{" "}
            <span className="text-[10px] ml-1 opacity-70 italic">
              (Myanmar)
            </span>
          </Link>
        </div>
        <div className="mx-2 px-3 py-1">
          <Link to={"/python"}>
            Python{" "}
            <span className="text-[10px] ml-1 opacity-70 italic">
              (Myanmar)
            </span>
          </Link>
        </div>
        <div className="mx-2 px-3 py-1 ">
          <Link to={"/html"}>
            Html{" "}
            <span className="text-[10px] ml-1 opacity-70 italic">
              (Myanmar)
            </span>
          </Link>
        </div>
        <div className="mx-2 px-3 py-1 ">
          <Link to={"/css"}>
            Css{" "}
            <span className="text-[10px] ml-1 opacity-70 italic">
              (Myanmar)
            </span>
          </Link>
        </div>
        <div className="mx-2 px-3 py-1 ">
          <Link to={"/react"}>
            React{" "}
            <span className="text-[10px] ml-1 opacity-70 italic">
              (Myanmar)
            </span>
          </Link>
        </div>
        <div className="mx-2 px-3 py-1">
          <Link to={"/javascipt"}>
            Javascipt{" "}
            <span className="text-[10px] ml-1 opacity-70 italic">
              (Myanmar)
            </span>
          </Link>
        </div>
        <div className="mx-2 px-3 py-1">
          <Link to={"/mysql"}>
            Mysql{" "}
            <span className="text-[10px] ml-1 opacity-70 italic">
              (Myanmar)
            </span>
          </Link>
        </div>

        <div className="flex-shrink-0 px-3 py-1">
          <Link to={"/component"}>
            Build Basic Project{" "}
            <span className="text-[10px] ml-1 opacity-70 italic">
              (Myanmar)
            </span>
          </Link>
        </div>
      </header>

      {/* Hero Navigation (Internal Logo Section) */}
      <nav className="relative z-10 max-w-6xl mx-auto px-8 pt-24 pb-10 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-white shadow-sm rounded-lg border border-slate-200">
            <svg
              className="w-8 h-8 text-[#00618a]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 4.02 2 6.5s4.48 4.5 10 4.5 10-2.02 10-4.5S17.52 2 12 2zm0 18c-5.52 0-10-2.02-10-4.5v3c0 2.48 4.48 4.5 10 4.5s10-2.02 10-4.5v-3c0 2.48 4.48 4.5-10 4.5z" />
            </svg>
          </div>
          <span className="text-xl font-black tracking-tighter text-[#00618a]">
            DB_MASTER
          </span>
        </div>
        <div className="flex gap-4">
          <span className="px-3 py-1 bg-blue-100 text-blue-700 text-[10px] font-bold rounded-md uppercase">
            Stable Release
          </span>
        </div>
      </nav>

      <main className="relative z-10 max-w-6xl mx-auto px-8 pt-12 pb-24">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left: Content */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-6 flex items-center gap-2 text-[#00758f] font-mono text-sm font-bold"
            >
              <span className="w-2 h-2 bg-[#f29111] rounded-full animate-pulse" />
              RELATIONAL DATABASE SYSTEM
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-7xl md:text-8xl font-black mb-8 leading-[0.85] text-slate-900 tracking-tighter"
            >
              MY<span className="text-[#00618a]">SQL</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-slate-500 leading-relaxed mb-10 max-w-lg font-normal"
            >
              ဒေတာတွေကို အလုံခြုံဆုံးနဲ့ အမြန်ဆန်ဆုံး သိမ်းဆည်းပါ။ <br />
              <span className="text-[#00618a] font-semibold">
                Queries, Relations, Tables
              </span>{" "}
              နှင့်{" "}
              <span className="text-[#00618a] font-semibold">
                Data Optimization
              </span>{" "}
              နည်းလမ်းများကို လေ့လာပါ။
            </motion.p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/mysql/video/0"
                className="px-10 py-4 bg-[#00618a] text-white rounded-xl font-bold shadow-xl shadow-blue-200 hover:bg-[#004b6b] transition-all inline-block"
              >
                Learn Right Now
              </Link>
            </div>
          </div>

          {/* Right: Database Schema Visual */}
          <div className="flex-1 relative w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white border border-slate-200 p-8 rounded-[2.5rem] shadow-2xl shadow-blue-100 relative overflow-hidden"
            >
              <div className="space-y-6">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="flex justify-between items-center mb-4 border-b pb-2">
                    <span className="font-mono text-xs font-bold text-blue-600">
                      TABLE: users
                    </span>
                    <span className="text-[10px] text-slate-400">
                      5 COLUMNS
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 w-full bg-slate-200 rounded animate-pulse" />
                    <div className="h-2 w-3/4 bg-slate-200 rounded" />
                  </div>
                </div>

                <div className="flex justify-center">
                  <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-px h-10 bg-gradient-to-b from-blue-500 to-transparent"
                  />
                </div>

                <div className="p-4 bg-[#00618a]/5 rounded-xl border border-blue-100">
                  <div className="flex justify-between items-center mb-4 border-b border-blue-100 pb-2">
                    <span className="font-mono text-xs font-bold text-[#00618a]">
                      TABLE: lessons
                    </span>
                    <span className="text-[10px] text-blue-400 underline italic uppercase tracking-tighter">
                      Primary Key
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 w-full bg-blue-200/50 rounded" />
                    <div className="h-2 w-1/2 bg-blue-200/50 rounded" />
                  </div>
                </div>
              </div>
              <motion.div
                animate={{ x: [-20, 0], opacity: [0, 1] }}
                className="absolute top-4 right-4 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-[10px] font-black"
              >
                CONNECTED
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "ACID Properties",
              desc: "ဒေတာများ မှန်ကန်တိကျမှုကို အာမခံချက်ပေးခြင်း။",
            },
            {
              name: "Query Speed",
              desc: "Indexing များဖြင့် ဒေတာရှာဖွေမှု အမြန်နှုန်းကို မြှင့်တင်ခြင်း။",
            },
            {
              name: "JSON Support",
              desc: "Structured နှင့် Semi-structured data များကို တွဲဖက်သုံးနိုင်ခြင်း။",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="p-8 bg-white border border-slate-200 rounded-3xl hover:border-blue-500/30 transition-all"
            >
              <h3 className="text-[#00618a] font-bold mb-3">{item.name}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </main>

      <footer className="text-center py-10 text-slate-400 text-[10px] tracking-[0.5em] font-mono">
        STABLE_RELEASE_2026 // MYSQL_COMMUNITY_SERVER
      </footer>
    </div>
  );
};

export default MySQLIntro;
