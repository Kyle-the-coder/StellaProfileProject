import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LottieAnimation from "../../Comps/LottieAnimation";
import gsap from "gsap";
import logo from "../../../assets/stellaLogo.png";
import "./navphone.css";

export function NavPhone() {
  const [isHamburgerActive, setIsHamburgerActive] = useState(null);
  const [isAnimationActive, setIsAnimtionActive] = useState(null);

  const navigate = useNavigate();

  function handleActivateHamburger() {
    if (!isHamburgerActive) {
      setIsHamburgerActive(true);
      setIsAnimtionActive(true);
    } else if (isHamburgerActive) {
      setIsAnimtionActive(false);
      gsap.to(".navbar-phone-dropdown-main-container", {
        x: "-100%",
        duration: 1.4,
        ease: "power4.in",
        onComplete: () => {
          setIsHamburgerActive(false);
        },
      });
    }
  }

  function handleNavigate(link) {
    setIsAnimtionActive(false);
    if (link === "/aboutUs") {
      navigate(link);
      gsap.to(".navbar-phone-dropdown-main-container", {
        x: "-100%",
        duration: 1.4,
        ease: "power4.in",
        onComplete: () => {
          setIsHamburgerActive(false);
        },
      });
    }
  }

  function handleHomeNavigate() {
    setIsAnimtionActive(false);
    navigate("/");
    gsap.to(".navbar-phone-dropdown-main-container", {
      x: "-100%",
      duration: 1.4,
      ease: "power4.in",
      onComplete: () => {
        setIsHamburgerActive(false);
      },
    });
  }

  useEffect(() => {
    if (isHamburgerActive) {
      gsap.from(".navbar-phone-dropdown-main-container", {
        x: "-100%",
        duration: 1.2,
        ease: "power3.inOut",
      });
    }
  }, [isHamburgerActive]);

  const links = [
    { linkName: "Home", link: "/aboutUs" },
    { linkName: "About Me" },
    { linkName: "My Work" },
    { linkName: "My Message" },
    { linkName: "Contact Me" },
  ];
  return (
    <div className="np-main-container">
      <img
        src={logo}
        width="100"
        className="navbar-logo"
        onClick={() => handleHomeNavigate()}
      />

      <div
        className="navbar-phone-hamburger"
        onClick={() => handleActivateHamburger()}
      >
        <LottieAnimation
          isHamburgerActive={isHamburgerActive}
          isAnimationActive={isAnimationActive}
        />
      </div>

      {isHamburgerActive && (
        <div className="navbar-phone-dropdown-main-container">
          {links.map((link, index) => {
            return (
              <div key={link.linkName}>
                <h3
                  className="dropdown-link-name f1-5"
                  onClick={() => handleNavigate(link.link)}
                >
                  {link.linkName}
                </h3>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
