import "./lpmonitor.css";
export function LpMonitor() {
  return (
    <div className="lpm-main-container m-0">
      <spline-viewer url="https://prod.spline.design/fhssD-863C9KnEe9/scene.splinecode"></spline-viewer>
      <div className="text-overlay">
        <h1 className="play lpp-hero-text purple-font f4">
          <span className="yellow-font">C</span>osmos{" "}
          <span className="purple-font">C</span>reations
        </h1>
        <p className="lpp-hero-text lato f1-5">
          <span className="yellow-font">
            Welcome to Stella's World of 3D Wonder
          </span>
        </p>
      </div>
    </div>
  );
}
