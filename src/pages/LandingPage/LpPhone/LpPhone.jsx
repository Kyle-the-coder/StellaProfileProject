import "./lpphone.css";
export function LpPhone() {
  return (
    <div className="lpp-main-container m-0">
      <section className="lpp-hero-section">
        <spline-viewer url="https://prod.spline.design/fhssD-863C9KnEe9/scene.splinecode"></spline-viewer>
        <div className="text-overlay">
          <h1 className="play text-height lpp-hero-text m0 purple-font f4">
            <span className="yellow-font">C</span>osmos{" "}
            <span className="purple-font">C</span>reations
          </h1>
          <p className="lpp-hero-text lato f1-5 m0">
            <span className="yellow-font">
              Welcome to Stella's World of 3D Wonder
            </span>
          </p>
          <button className="lpp-cta-button">Explore My Work</button>
        </div>
      </section>
    </div>
  );
}
