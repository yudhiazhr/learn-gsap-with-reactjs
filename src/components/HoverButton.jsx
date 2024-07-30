/* eslint-disable no-undef */
import { useRef, useEffect } from "react";
import gsap from "gsap-trial";

export const HoverButton = () => {
  const linkRef = useRef(null);
  const greenRef = useRef(null);
  const citiesRef = useRef([]);

  useEffect(() => {
    /* Bouncy Hover */
    const link = linkRef.current;
    const green = greenRef.current;

    const hoverTL = gsap.timeline();
    hoverTL.play();
    hoverTL.pause();
    hoverTL.reverse();

    hoverTL.to(green, {
      width: "calc(100% - 1.8em)",
      ease: "Elastic.easeOut(0.25)",
      duration: 0.5,
    });
    hoverTL.to(green, {
      width: "2em",
      left: "calc(100% - 3.2em)",
      ease: "Elastic.easeOut(0.25)",
      duration: 0.5,
    });

    link.addEventListener("mouseenter", () => {
      hoverTL.play();
    });

    link.addEventListener("mouseleave", () => {
      hoverTL.reverse();
    });

    /* Text hover animation */
    citiesRef.current.forEach((city) => {
      const color = city.getAttribute("data-color");

      city.addEventListener("mouseenter", () => {
        gsap.to(city, {
          top: "-2vw",
          background: color,
          duration: 0.3,
          overwrite: "auto",
        });
      });

      city.addEventListener("mouseleave", () => {
        gsap.to(city, {
          top: "0",
          backgroundColor: "#000",
          duration: 0.1,
          overwrite: "auto",
        });
      });
    });

    /* const tl = new TimelineMax({paused:true, yoyo:true});

  const button = ".button"

  TweenMax.set('.heart',{drawSVG: "100% 100%"})

  tl.to('.heart', 0.64, {drawSVG: "0% 100%"}, 0.1)

  function over() {
    tl.restart
  }

  function out(){
    tl.reverse();

    button.hover(over, out);
 */

    let nav = document.querySelector(".nav");

    let tween = gsap.to(".flair", {
      duration: 2,
      x: () => nav.offsetWidth,
      xPercent: -100,
      rotation: 360,
      ease: "none",
      paused: true,
    });

    // click handlers for controlling the tween instance...
    document.querySelector("#play").onclick = () => tween.play();
    document.querySelector("#pause").onclick = () => tween.pause();
    document.querySelector("#resume").onclick = () => tween.resume();
    document.querySelector("#reverse").onclick = () => tween.reverse();
    document.querySelector("#restart").onclick = () => tween.restart();

    return () => {
      link.removeEventListener("mouseenter", () => {
        hoverTL.play();
      });

      link.removeEventListener("mouseleave", () => {
        hoverTL.reverse();
      });

      citiesRef.current.forEach((city) => {
        city.removeEventListener("mouseenter", () => {
          gsap.to(city, {
            top: "-2vw",
            background: color,
            duration: 0.3,
            overwrite: "auto",
          });
        });

        city.removeEventListener("mouseleave", () => {
          gsap.to(city, {
            top: "0",
            backgroundColor: "#000",
            duration: 0.1,
            overwrite: "auto",
          });
        });
      });

      const button = document.querySelector("a.button");

      button.addEventListener("mousemove", function (evt) {
        const movX = evt.clientX - this.getBoundingClientRect().x;
        gsap.to(".button__spotlight", {
          x: movX,
          scale: 30,
          duration: 0.5,
        });
      });

      button.addEventListener("mouseleave", function (evt) {
        const movX = evt.clientX - this.getBoundingClientRect().x;
        gsap.to(".button__spotlight", {
          x: movX,
          scale: 0,
          duration: 0.5,
        });
      });

      return () => {
        hoverTL.kill();
      };
    };
  }, []);

  return (
    <>
      <section className="min-h-dvh bg-[#f93] w-full flex flex-col justify-center items-center gap-8">
        <div className="wrapper relative px-12 py-4 ">
          <a
            className="link text-[2rem] text-white flex gap-4"
            href="https://instagram.com/yudhiazhr"
            target="_blank"
            ref={linkRef}
          >
            <div
              className="green w-[2em] h-[2em] rounded-full bg-green-400 absolute left-6 top-2 z-[0]"
              ref={greenRef}
            ></div>
            <span className="z-[1] text-black font-bold">HOVER ME!</span>
            <svg
              className="w-12 h-12 text-black z-10"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 12H5m14 0-4 4m4-4-4-4"
              />
            </svg>
          </a>
        </div>

        <div className="button w-20 h-20 bg-[#FF94DC] rounded-lg p-4 shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95 cursor-pointer">
          <svg
            width="48"
            height="48"
            viewBox="0 0 30 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 31L1 31L1 9L14.5 1L28.5 9L28.5 24.3875C28.5 26.0602 27.8355 27.6645 26.6527 28.8473V28.8473C24.3128 31.1872 20.5626 31.3209 18.062 29.1538L15 26.5L8.80169 20.9904C7.1888 19.5567 6.86011 17.1621 8.02705 15.3468V15.3468C9.24206 13.4568 11.9532 13.3165 13.3568 15.071L14.5 16.5L17.1215 14.665C18.4971 13.702 20.3656 13.8656 21.553 15.053V15.053C22.9044 16.4044 22.9044 18.5956 21.553 19.947L19.5 22"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <path
              className="heart"
              d="M9 31L1 31L1 9L14.5 1L28.5 9L28.5 24.3875C28.5 26.0602 27.8355 27.6645 26.6527 28.8473V28.8473C24.3128 31.1872 20.5626 31.3209 18.062 29.1538L15 26.5L8.80169 20.9904C7.1888 19.5567 6.86011 17.1621 8.02705 15.3468V15.3468C9.24206 13.4568 11.9532 13.3165 13.3568 15.071L14.5 16.5L17.1215 14.665C18.4971 13.702 20.3656 13.8656 21.553 15.053V15.053C22.9044 16.4044 22.9044 18.5956 21.553 19.947L19.5 22"
              stroke="#8046F1"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <a
          href=""
          className="button group relative flex justify-center items-center p-[2px] rounded-3xl overflow-hidden bg-white "
        >
          <span className="button__spotlight absolute z-[1] h-[10px] w-[10px] opacity-100 rounded-[50%] bg-white inset-0 top-[50%] scale-0"></span>
          <span className=" button__wrapper relative flex justify-center items-center w-[200px] h-[45px] rounded-3xl bg-[#0a0a0a] ">
            <span className="button__text relative z-[2] text-white transition-all duration-300 group-hover:text-black">
              Button
            </span>
          </span>
        </a>

        {/* Animation text hover like folder */}
        <div className="cities-container relative w-[100%]">
          {[
            "Lausanne (hover me)",
            "London (hover me)",
            "New York (hover me)",
            "Tokyo (hover me)",
            "Caracas (hover me)",
          ].map((city, index) => (
            <div
              key={city}
              className="city border-t-2 cursor-pointer relative mb-[-2vw] bg-[#000]"
              data-color={
                ["#c07858", "#838c8b", "#dbc486", "#c07858", "#838c8b"][index]
              }
              ref={(el) => (citiesRef.current[index] = el)}
            >
              <h2 className="m-0 text-[4vw] pl-[10px] uppercase text-white pointer-events-none">
                {city}
              </h2>
            </div>
          ))}
        </div>
        {/* Animation text hover like folder */}

        <div className="pt-12 flex flex-col justify-start items-start">
          <svg
            viewBox="0 0 200 200"
            className=" w-24 h-24 flair flair--25 "
            fill="#F15A29"
          >
            <polygon
              className="star"
              points="100,50 130.9,4.9 129.4,59.5 180.9,41.2 147.6,84.5 200,100 147.6,115.5 180.9,158.8 129.4,140.5 
    130.9,195.1 100,150 69.1,195.1 70.6,140.5 19.1,158.8 52.4,115.5 0,100 52.4,84.5 19.1,41.2 70.6,59.5 69.1,4.9 "
            />
          </svg>
          <div className="nav light pt-[2rem] flex gap-3 flex-wrap justify-center">
            <button
              className=" border-2 rounded-full px-4 py-2 hover:bg-[#F15A29] text-white "
              id="play"
            >
              play()
            </button>
            <button
              className=" border-2 rounded-full px-4 py-2 hover:bg-[#F15A29] text-white "
              id="pause"
            >
              pause()
            </button>
            <button
              className=" border-2 rounded-full px-4 py-2 hover:bg-[#F15A29] text-white "
              id="resume"
            >
              resume()
            </button>
            <button
              className=" border-2 rounded-full px-4 py-2 hover:bg-[#F15A29] text-white "
              id="reverse"
            >
              reverse()
            </button>
            <button
              className=" border-2 rounded-full px-4 py-2 hover:bg-[#F15A29] text-white "
              id="restart"
            >
              restart()
            </button>
          </div>
        </div>
      </section>

      <section className=" p-6 min-h-[40dvh] bg-[#4FBDBA] flex flex-col justify-center items-center">
        <div className="py-4 border-b-2 border-t-2 border-t-gray-950 border-b-gray-950 w-full h-full flex justify-between hover:px-4 hover:bg-black transition-all duration-300">
          <h1 className="text-2xl text-white">Hello</h1>
          <h2 className="text-2xl text-white">01</h2>
        </div>
        <div className="py-4  border-t-gray-950 border-b-gray-950 w-full h-full flex justify-between">
          <h1 className="text-2xl">Hi</h1>
          <h2 className="text-2xl">02</h2>
        </div>
        <div className="py-4 border-b-2 border-t-2 border-t-gray-950 border-b-gray-950 w-full h-full flex justify-between hover:px-4 hover:bg-black transition-all duration-300">
          <h1 className="text-2xl text-white">Gapapa kan??</h1>
          <h2 className="text-2xl text-white">03</h2>
        </div>

       
      </section>
    </>
  );
};
