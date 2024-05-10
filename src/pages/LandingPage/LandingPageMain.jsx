import { useEffect, useState } from "react";
import { LpMonitor } from "./LpMonitor/LpMonitor";
import { LpPhone } from "./LpPhone/LpPhone";
import "./landingpagemain.css";

function LandingPageMain() {
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
    <div className="landing-page-main-container">
      {windowWidth <= 600 ? <LpPhone /> : <LpMonitor />}
    </div>
  );
}

export const landingRoute = {
  element: <LandingPageMain />,
};
