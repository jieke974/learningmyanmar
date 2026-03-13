import { useState } from "react";
import { Link, Outlet, NavLink } from "react-router"; // NavLink ကို အသုံးပြုပါ

export default function Javasciptintro() {
  const [sidebarOpen, setSidebarOpen] = useState(false); // Mobile အတွက် အစကတည်းက ပိတ်ထားဖို့ false ထားပါ
  const [open, setopen] = useState(true);

  // Active ဖြစ်နေတဲ့ Link အတွက် Style
  const navLinkStyle = ({ isActive }) =>
    `block p-3 border-b transition-all relative ${
      isActive
        ? "bg-green-100 text-green-700 font-bold border-l-4 border-l-green-600 pl-5"
        : "hover:bg-gray-200 pl-6 text-gray-600"
    }`;

  return (
    <>
      <div className="flex h-screen flex-col overflow-hidden">
        {/* 1. FIXED HEADER */}
        <header className="fixed top-0 left-0 right-0 h-16 bg-gray-600 text-blue-50 flex items-center px-4 z-30 shadow-md">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="md:hidden mr-4 p-2 bg-gray-700 rounded-md"
          >
            ☰
          </button>

          <div className="flex overflow-x-auto whitespace-nowrap items-center">
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
        </header>

        <div className="flex flex-1 mt-16 overflow-hidden relative">
          {/* 3. STICKY SIDEBAR */}
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
              <span className="font-bold">JS Lessons</span>
              <button
                onClick={() => setSidebarOpen(false)}
                className="p-2 text-xl"
              >
                ✕
              </button>
            </div>

            <div className="py-2">
              <button
                onClick={() => setopen(!open)}
                className="w-full text-left p-3 hover:bg-green-600 bg-green-500 text-white font-bold flex justify-between items-center transition-colors"
              >
                Javascript <span>{open ? "−" : "+"}</span>
              </button>

              {open && (
                <div className="bg-gray-50 border-b">
                  {Array.from({ length: 24 }, (_, i) => (
                    <NavLink
                      key={i}
                      to={`/javascipt/video/${i}`}
                      className={navLinkStyle}
                      onClick={() => setSidebarOpen(false)} // Mobile မှာ နှိပ်ရင် Sidebar ပိတ်ဖို့
                    >
                      part {i + 1}{" "}
                      <span className="text-[10px] ml-1 opacity-70 italic">
                        (Myanmar)
                      </span>
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          </aside>

          {/* 4. MAIN CONTENT */}
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
    </>
  );
}
