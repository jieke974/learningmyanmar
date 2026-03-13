import { Outlet , Link} from "react-router";
import "./App.css";




import { useState, useEffect } from 'react';


function App() {
  // State for sidebar toggle (show/hide)
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [open,setopen] = useState(false)

  

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <div className="fixed top-0 bg-gray-600 text-blue-50 justify-around left-0 right-0  h-16 flex items-center overflow-x-auto whitespace-nowrap px-4 z-10">
        <div className="mx-2 px-3 py-1  ">
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
      </div>

      <Outlet />
    </div>
  );
}

export default App
