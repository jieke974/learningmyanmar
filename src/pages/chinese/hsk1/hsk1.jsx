import { useState, useEffect } from "react";
import { Link, Outlet, useLocation, NavLink } from "react-router";

export default function Mainhsk1() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [open, setopen] = useState(false);
  const [open2, setopen2] = useState(false);
  const [open3, setopen3] = useState(false);
  const [open4, setopen4] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // URL path အလိုက် dropdown တွေကို auto ပွင့်အောင်လုပ်ခြင်း
    // Router မှာ /hsk1 အောက်မှာ ရှိနေတဲ့အတွက် path တွေကို သေချာစစ်ဆေးပါတယ်
    if (
      location.pathname.includes("/hsk1/video/") ||
      location.pathname.match(/\/hsk1\/hsk1/)
    ) {
      setopen(true);
    } else if (location.pathname.includes("/hsk1/hsk2")) {
      setopen2(true);
    } else if (location.pathname.includes("/hsk1/hsk3")) {
      setopen3(true);
    } else if (location.pathname.includes("/hsk1/hsk4")) {
      setopen4(true);
    }
  }, [location.pathname]);

  const navLinkStyle = ({ isActive }) =>
    `block p-3 pl-6 border-b transition-all relative ${
      isActive
        ? "bg-green-100 text-green-700 font-bold border-l-4 border-l-green-600"
        : "hover:bg-gray-200 text-gray-600 border-l-4 border-l-transparent"
    }`;

  return (
    <div className="flex h-screen flex-col overflow-hidden">
      {/* 1. HEADER */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-gray-600 text-blue-50 flex items-center px-4 z-30 shadow-md">
        <button
          onClick={() => setSidebarOpen(true)}
          className="md:hidden mr-4 p-2 bg-gray-700 rounded-md"
        >
          ☰
        </button>
        <div className="flex w-full  overflow-auto items-center flex-nowrap whitespace-nowrap scrollbar-hide py-2">
          <div className="flex-shrink-0 px-3 py-1">
            <Link to={"/hsk1"}>
              Chinese{" "}
              <span className="text-[10px] ml-1 opacity-70 italic">
                (Myanmar)
              </span>
            </Link>
          </div>

          <div className="flex-shrink-0 px-3 py-1">
            <Link to={"/japan"}>
              Japan{" "}
              <span className="text-[10px] ml-1 opacity-70 italic">
                (Myanmar)
              </span>
            </Link>
          </div>

          <div className="flex-shrink-0 px-3 py-1">
            <Link to={"/python"}>
              Python{" "}
              <span className="text-[10px] ml-1 opacity-70 italic">
                (Myanmar)
              </span>
            </Link>
          </div>

          <div className="flex-shrink-0 px-3 py-1">
            <Link to={"/html"}>
              Html{" "}
              <span className="text-[10px] ml-1 opacity-70 italic">
                (Myanmar)
              </span>
            </Link>
          </div>

          <div className="flex-shrink-0 px-3 py-1">
            <Link to={"/css"}>
              Css{" "}
              <span className="text-[10px] ml-1 opacity-70 italic">
                (Myanmar)
              </span>
            </Link>
          </div>

          <div className="flex-shrink-0 px-3 py-1">
            <Link to={"/react"}>
              React{" "}
              <span className="text-[10px] ml-1 opacity-70 italic">
                (Myanmar)
              </span>
            </Link>
          </div>

          <div className="flex-shrink-0 px-3 py-1">
            <Link to={"/javascipt"}>
              Javascript{" "}
              <span className="text-[10px] ml-1 opacity-70 italic">
                (Myanmar)
              </span>
            </Link>
          </div>

          <div className="flex-shrink-0 px-3 py-1">
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
        </div>
      </header>

      <div className="flex flex-1 mt-16 overflow-hidden relative">
        {/* 2. SIDEBAR */}
        <aside
          className={`bg-white shadow-md w-64 border-r flex-shrink-0 fixed inset-y-0 left-0 z-40 transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:static transition-transform duration-300 overflow-y-auto`}
        >
          <div className="p-4 border-b flex justify-between items-center md:hidden bg-gray-50">
            <span className="font-bold">HSK Menu</span>
            <button
              onClick={() => setSidebarOpen(false)}
              className="p-2 text-xl"
            >
              ✕
            </button>
          </div>

          {/* HSK - 1 */}
          <div className="py-2">
            <button
              onClick={() => setopen(!open)}
              className="w-full text-left p-3 hover:bg-green-600 bg-green-500 text-white font-bold flex justify-between items-center"
            >
              HSK - 1 <span>{open ? "−" : "+"}</span>
            </button>
            {open && (
              <div className="bg-gray-50 border-b">
                {Array.from({ length: 44 }, (_, i) => (
                  <NavLink
                    key={i}
                    to={`/hsk1/video/${i}`}
                    className={navLinkStyle}
                    onClick={() => setSidebarOpen(false)}
                  >
                    Part {i}
                  </NavLink>
                ))}
                <NavLink to="/hsk1/hsk1vocabulary" className={navLinkStyle}>
                  HSK 1 Vocabulary
                </NavLink>
                <NavLink to="/hsk1/hsk1common" className={navLinkStyle}>
                  HSK 1 စာကြောင်းများ
                </NavLink>
                <NavLink to="/hsk1/hsk1adj" className={navLinkStyle}>
                  HSK 1 Adj
                </NavLink>
                <NavLink to="/hsk1/hsk1verbs" className={navLinkStyle}>
                  HSK 1 Verbs
                </NavLink>
                <NavLink to="/hsk1/hsk1nouns" className={navLinkStyle}>
                  HSK 1 Nouns
                </NavLink>
                <NavLink to="/hsk1/hsk1flashcard" className={navLinkStyle}>
                  HSK 1 Flashcard
                </NavLink>
              </div>
            )}
          </div>

          {/* HSK - 2 */}
          <div className="py-2 border-t">
            <button
              onClick={() => setopen2(!open2)}
              className="w-full text-left p-3 hover:bg-green-600 bg-green-500 text-white font-bold flex justify-between items-center"
            >
              HSK - 2 <span>{open2 ? "−" : "+"}</span>
            </button>
            {open2 && (
              <div className="bg-gray-50 border-b">
                {Array.from({ length: 38 }, (_, i) => (
                  <NavLink
                    key={i}
                    to={`/hsk1/hsk2video/${i}`}
                    className={navLinkStyle}
                    onClick={() => setSidebarOpen(false)}
                  >
                    Part {i}
                  </NavLink>
                ))}
                <NavLink to="/hsk1/hsk2vocabulary" className={navLinkStyle}>
                  Vocabulary
                </NavLink>
                <NavLink to="/hsk1/hsk2common" className={navLinkStyle}>
                  စာကြောင်းများ
                </NavLink>
                <NavLink to="/hsk1/hsk2adj" className={navLinkStyle}>
                  Adjectives
                </NavLink>
                <NavLink to="/hsk1/hsk2verbs" className={navLinkStyle}>
                  Verbs
                </NavLink>
                <NavLink to="/hsk1/hsk2nouns" className={navLinkStyle}>
                  Nouns
                </NavLink>
                <NavLink to="/hsk1/hsk2adverbs" className={navLinkStyle}>
                  Adverbs
                </NavLink>
                <NavLink to="/hsk1/hsk2flashcard" className={navLinkStyle}>
                  Flashcard
                </NavLink>
              </div>
            )}
          </div>

          {/* HSK - 3 */}
          <div className="py-2 border-t">
            <button
              onClick={() => setopen3(!open3)}
              className="w-full text-left p-3 hover:bg-green-600 bg-green-500 text-white font-bold flex justify-between items-center"
            >
              HSK - 3 <span>{open3 ? "−" : "+"}</span>
            </button>
            {open3 && (
              <div className="bg-gray-50 border-b">
                {Array.from({ length: 61 }, (_, i) => (
                  <NavLink
                    key={i}
                    to={`/hsk1/hsk3video/${i}`}
                    className={navLinkStyle}
                    onClick={() => setSidebarOpen(false)}
                  >
                    Part {i}
                  </NavLink>
                ))}
                <NavLink to="/hsk1/hsk3vocabulary" className={navLinkStyle}>
                  Vocabulary
                </NavLink>
                <NavLink to="/hsk1/hsk3adj" className={navLinkStyle}>
                  Adjectives
                </NavLink>
                <NavLink to="/hsk1/hsk3verbs" className={navLinkStyle}>
                  Verbs
                </NavLink>
                <NavLink to="/hsk1/hsk3nouns" className={navLinkStyle}>
                  Nouns
                </NavLink>
                <NavLink to="/hsk1/hsk3adverbs" className={navLinkStyle}>
                  Adverbs
                </NavLink>
              </div>
            )}
          </div>

          {/* HSK - 4 */}
          <div className="py-2 border-t">
            <button
              onClick={() => setopen4(!open4)}
              className="w-full text-left p-3 hover:bg-green-600 bg-green-500 text-white font-bold flex justify-between items-center"
            >
              HSK - 4 <span>{open4 ? "−" : "+"}</span>
            </button>
            {open4 && (
              <div className="bg-gray-50 border-b">
                {Array.from({ length: 68 }, (_, i) => (
                  <NavLink
                    key={i}
                    to={`/hsk1/hsk4video/${i}`}
                    className={navLinkStyle}
                    onClick={() => setSidebarOpen(false)}
                  >
                    Part {i}
                  </NavLink>
                ))}
                <NavLink to="/hsk1/hsk4vocabulary" className={navLinkStyle}>
                  Vocabulary
                </NavLink>
                <NavLink to="/hsk1/hsk4nouns" className={navLinkStyle}>
                  Nouns
                </NavLink>
                <NavLink to="/hsk1/hsk4verbs" className={navLinkStyle}>
                  Verbs
                </NavLink>
                <NavLink to="/hsk1/hsk4flashcard" className={navLinkStyle}>
                  Flashcard
                </NavLink>
              </div>
            )}
          </div>
        </aside>

        {/* 3. MAIN CONTENT */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-gray-50">
          <Outlet />
        </main>

        {/* Mobile Overlay */}
        {sidebarOpen && (
          <div
            onClick={() => setSidebarOpen(false)}
            className="md:hidden fixed inset-0 bg-black/50 z-30"
          ></div>
        )}
      </div>
    </div>
  );
}
