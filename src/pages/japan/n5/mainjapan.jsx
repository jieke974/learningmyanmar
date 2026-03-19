import { useState } from "react";
import { Link, Outlet, NavLink } from "react-router";

export default function Mainjapan() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  // 控制每个级别的下拉菜单状态
  const [openN5, setOpenN5] = useState(false);
  const [openN4, setOpenN4] = useState(false);
  const [openN3, setOpenN3] = useState(false);
  const [openN2, setOpenN2] = useState(false);
  const [openN1, setOpenN1] = useState(false);

  const navLinkStyle = ({ isActive }) =>
    `block p-3 border-b transition-all relative ${
      isActive
        ? "bg-green-100 text-green-700 font-bold border-l-4 border-l-green-600 pl-5"
        : "hover:bg-gray-200 pl-6 text-gray-600"
    }`;

  return (
    <div className="flex h-screen flex-col overflow-hidden">
      {/* 1. FIXED HEADER */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-gray-600 text-blue-50 flex items-center px-4 z-30 shadow-md">
        <button
          onClick={() => setSidebarOpen(true)}
          className="md:hidden mr-4 p-2 bg-gray-700 rounded-md"
        >
          ☰
        </button>
        <div className="flex w-full overflow-x-auto items-center flex-nowrap whitespace-nowrap scrollbar-hide py-2">
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
          className={`
          bg-white shadow-md w-64 border-r flex-shrink-0
          fixed inset-y-0 left-0 z-40 transform
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 md:static transition-transform duration-300
          overflow-y-auto
        `}
        >
          <div className="p-4 border-b flex justify-between items-center md:hidden bg-gray-50">
            <span className="font-bold">Japan Menu</span>
            <button
              onClick={() => setSidebarOpen(false)}
              className="p-2 text-xl"
            >
              ✕
            </button>
          </div>

          <div className="py-2">
            {/* Japan N5 */}
            <button
              onClick={() => setOpenN5(!openN5)}
              className="w-full text-left p-3 hover:bg-green-600 bg-green-500 text-white font-bold flex justify-between items-center"
            >
              Japan N5 <span>{openN5 ? "−" : "+"}</span>
            </button>
            {openN5 && (
              <div className="bg-gray-50 border-b">
                {Array.from({ length: 61 }, (_, i) => (
                  <NavLink
                    key={i}
                    to={`/japan/n5/video/${i}`}
                    className={navLinkStyle}
                  >
                    Lesson - {i}{" "}
                    <span className="text-[10px] ml-1 opacity-70 italic">
                      (Myanmar)
                    </span>
                  </NavLink>
                ))}
                <NavLink to="/japan/voca" className={navLinkStyle}>
                  N5 vocabulary
                </NavLink>
                <NavLink to="/japan/noun" className={navLinkStyle}>
                  N5 nouns
                </NavLink>
                <NavLink to="/japan/verb" className={navLinkStyle}>
                  N5 verbs
                </NavLink>
                <NavLink to="/japan/adj" className={navLinkStyle}>
                  N5 adj
                </NavLink>
              </div>
            )}

            {/* Japan N4 */}
            <button
              onClick={() => setOpenN4(!openN4)}
              className="w-full text-left p-3 mt-1 hover:bg-green-600 bg-green-500 text-white font-bold flex justify-between items-center"
            >
              Japan N4 <span>{openN4 ? "−" : "+"}</span>
            </button>
            {openN4 && (
              <div className="bg-gray-50 border-b">
                <NavLink to="/japan/n4/voca" className={navLinkStyle}>
                  N4 vocabulary
                </NavLink>
                <NavLink to="/japan/n4/noun" className={navLinkStyle}>
                  N4 nouns
                </NavLink>
                <NavLink to="/japan/n4/verb" className={navLinkStyle}>
                  N4 verbs
                </NavLink>
                <NavLink to="/japan/n4/adj" className={navLinkStyle}>
                  N4 adj
                </NavLink>
              </div>
            )}

            {/* Japan N3 */}
            <button
              onClick={() => setOpenN3(!openN3)}
              className="w-full text-left p-3 mt-1 hover:bg-green-600 bg-green-500 text-white font-bold flex justify-between items-center"
            >
              Japan N3 <span>{openN3 ? "−" : "+"}</span>
            </button>
            {openN3 && (
              <div className="bg-gray-50 border-b">
                <NavLink to="/japan/n3/voca" className={navLinkStyle}>
                  N3 vocabulary
                </NavLink>
                <NavLink to="/japan/n3/noun" className={navLinkStyle}>
                  N3 nouns
                </NavLink>
                <NavLink to="/japan/n3/verb" className={navLinkStyle}>
                  N3 verbs
                </NavLink>
                <NavLink to="/japan/n3/adj" className={navLinkStyle}>
                  N3 adj
                </NavLink>
              </div>
            )}

            {/* Japan N2 */}
            <button
              onClick={() => setOpenN2(!openN2)}
              className="w-full text-left p-3 mt-1 hover:bg-green-600 bg-green-500 text-white font-bold flex justify-between items-center"
            >
              Japan N2 <span>{openN2 ? "−" : "+"}</span>
            </button>
            {openN2 && (
              <div className="bg-gray-50 border-b">
                <NavLink to="/japan/n2/voca" className={navLinkStyle}>
                  N2 vocabulary
                </NavLink>
                <NavLink to="/japan/n2/kanjin" className={navLinkStyle}>
                  N2 kanjin
                </NavLink>
              </div>
            )}

            {/* Japan N1 */}
            <button
              onClick={() => setOpenN1(!openN1)}
              className="w-full text-left p-3 mt-1 hover:bg-green-600 bg-green-500 text-white font-bold flex justify-between items-center"
            >
              Japan N1 <span>{openN1 ? "−" : "+"}</span>
            </button>
            {openN1 && (
              <div className="bg-gray-50 border-b">
                <NavLink to="/japan/n1/voca" className={navLinkStyle}>
                  N1 vocabulary
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
