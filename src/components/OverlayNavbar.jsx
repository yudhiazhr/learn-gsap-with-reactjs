import { useEffect } from "react";
import "../index.css";
import gsap from "gsap";
import { CSSRulePlugin } from "gsap-trial/all";

export const OverlayNavbar = () => {

  useEffect(() => {
    const tl = gsap.timeline({
      paused: true,
    });
    let path = document.querySelector("path");
    let spanBefore = CSSRulePlugin.getRule("#hamburger .line-2");

    gsap.set(spanBefore, { background: "#000" });
    gsap.set(".menu", { visibility: "hidden" });

    function revealMenu() {
      revealMenuItems();

      const hamburger = document.getElementById("hamburger");
      const toggleBtn = document.getElementById("toggle-btn");

      toggleBtn.onclick = () => {
        hamburger.classList.toggle("active");
        tl.reversed(!tl.reversed());
      };
    }
    revealMenu();

    function revealMenuItems() {
      const start = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
      const end = "M0, 1005S175, 995, 500, 995s500, 5, 500, 5V0H0Z";

      const power2 = "power2.inout";
      const power4 = "power4.inout";

      tl.to("#hamburger", 1.25, {
        marginTop: "-5px",
        x: -40,
        y: 40,
        ease: power4,
      });
      tl.to(
        "#hamburger .line",
        1,
        {
          background: "#fff",
          ease: power2,
        },
        "<"
      );
      tl.to(
        spanBefore,
        1,
        {
          background: "#fff",
          ease: power2,
        },
        "<"
      );

      tl.to(
        ".btn .btn-outline",
        1.25,
        {
          x: -40,
          y: 40,
          width: "140px",
          height: "140px",
          border: "1px solid #e2e2dc",
          ease: power4,
        },
        "<"
      );
      tl.to(
        path,
        0.8,
        {
          attr: {
            d: start,
          },
          ease: power2,
        },
        "<"
      ).to(
        path,
        0.8,
        {
          attr: { d: end },
          ease: power2,
        },
        "-=0.5"
      );

      tl.to(
        ".menu",
        1,
        {
          visibility: "visible",
        },
        "-=0.5"
      );

      tl.to(
        ".menu-item>a",
        1,
        {
          top: 0,
          ease: "power3.out",
          stagger: {
            amount: 0.5,
          },
        },
        "-=1"
      ).reverse();
    }
  });

  return (
    <>
    <header className="h-screen bg-white">

      <div id="toggle-btn" className="btn cursor-pointer">
        <div className="btn-outline btn-outline-1"></div>
        <div className="btn-outline btn-outline-2"></div>
        <div id="hamburger">
          <span className="line line-1"></span>
          <span className="line line-2"></span>
        </div>
      </div>
      

      <div className="overlay">
        <svg viewBox="0 0 1000 1000">
          <path d="M0 2S175 1 500 1s500 1 500 1V0H0Z"></path>
        </svg>
      </div>

      <div className="menu">
        <div className="primary-menu">
          <div className="menu-container">
            <div className="wrapper">
              <div className="menu-item">
                <a href="#">
                  <span>I</span>Index
                </a>
                <div className="menu-item-revealer"></div>
              </div>

              <div className="menu-item">
                <a href="#">
                  <span>II</span>Work
                </a>
                <div className="menu-item-revealer"></div>
              </div>

              <div className="menu-item">
                <a href="#">
                  <span>III</span>About
                </a>
                <div className="menu-item-revealer"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="secondary-menu">
          <div className="menu-container">
            <div className="wrapper">
              <div className="menu-item">
                <a href="#">Speaker</a>
                <div className="menu-item-revealer"></div>
              </div>

              <div className="menu-item">
                <a href="#">Blog</a>
                <div className="menu-item-revealer"></div>
              </div>

              <div className="menu-item">
                <a href="#">Contact</a>
                <div className="menu-item-revealer"></div>
              </div>

              <div className="menu-item">
                <a href="#">Credits</a>
                <div className="menu-item-revealer"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

      
    </>
  );
};

