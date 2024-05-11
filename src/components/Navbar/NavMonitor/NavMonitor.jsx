import logo from "../../../assets/stellaLogo.png";
import "./navmonitor.css";

export function NavMonitor() {
  const links = [
    { linkName: "Home", link: "/aboutUs" },
    { linkName: "About Me" },
    { linkName: "My Work" },
    { linkName: "My Message" },
    { linkName: "Contact Me" },
  ];
  return (
    <div className="nm-main-container">
      <div className="nm-logo-container">
        <img src={logo} className="nm-logo" />
      </div>
      <div className="nm-link-container">
        {links.map((link, index) => {
          return (
            <h3 className="nm-link mont f1-5" key={link.linkName}>
              {link.linkName}
            </h3>
          );
        })}
      </div>
    </div>
  );
}
