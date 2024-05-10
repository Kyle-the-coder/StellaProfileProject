import { useEffect, useState } from "react";
import { NavMonitor } from "./NavMonitor/NavMonitor";
import { NavPhone } from "./NavPhone/NavPhone";
import "./navmain.css";

export function NavMain() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="nav-main-container">
      {windowWidth <= 600 ? <NavPhone /> : <NavMonitor />}
    </div>
  );
}
