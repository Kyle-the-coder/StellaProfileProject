import "./lpmonitor.css";
export function LpMonitor() {
  return (
    <div className="lpm-main-container ">
      <section className="lpm-hero-section">
        <div className="lpm-text-container">
          <h1 className="play text-height lpm-hero-text purple-font m0 f6">
            <span className="yellow-font">C</span>osmos{" "}
            <span className="purple-font">C</span>reations
          </h1>
          <p className="f2 lpm-hero-text mont m0  f1-5">
            <span className="yellow-font">
              Welcome to Stella's World of 3D Wonder
            </span>
          </p>
          <button className="lpm-cta-button mont">Explore My Work</button>
        </div>
        <div className="lpm-spline-container">
          <spline-viewer url="https://prod.spline.design/fhssD-863C9KnEe9/scene.splinecode"></spline-viewer>
        </div>
      </section>
    </div>
  );
}
