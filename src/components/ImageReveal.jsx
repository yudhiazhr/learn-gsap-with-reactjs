import ScrollTrigger from "gsap-trial/ScrollTrigger";
import gsap from "gsap";
import { useEffect } from "react";

export const ImageReveal = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const revealContainers = document.querySelectorAll(".reveal");

    gsap
      .timeline({
        scrollTrigger: {
          toggleActions: "play none none reset",
          trigger: ".wrapper-1",
          start: "top top",
          end: "+=450%",
          pin: true,
          scrub: true,
          markers: false,
        },
      })
      .to(".img-1", {
        scale: 6,
        z: 350,
        transformOrigin: "center center",
        ease: "power1.inOut",
      })
      .to(
        ".section-hero",
        {
          scale: 1.1,
          transformOrigin: "center center",
          ease: "power1.inOut",
        },
        "<"
      );

    revealContainers.forEach((container) => {
      const image = container.querySelector(".img-1");
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          toggleActions: "restart none none reset",
        },
      });

      tl.set(container, { autoAlpha: 1 });
      tl.from(container, {
        xPercent: -100,
        duration: 1.5,
        ease: "power2.out",
      });
      tl.from(image, {
        xPercent: 100,
        scale: 1.3,
        duration: 1.5,
        ease: "power2.out",
        delay: -1.5,
        onComplete: () => {
          gsap.set(image, { xPercent: 0, scale: 1 });
          gsap.set(container, { xPercent: 0 });
        },
      });
    });

    /* imgae expand container-wrapper */

    gsap.fromTo(
      ".container-wrapper",
      {
        width: "70%",
        borderRadius: 80,
      },
      {
        width: "100%",
        borderRadius: 0,
        scrollTrigger: {
          trigger: ".section-img-expand",
          start: "top bottom",
          end: "top",
          scrub: 1,
          markers: {
            visible: true,
            startColor: "blue",
            endColor: "blue"
          },
          id: "expand"
        
        }
      }
    );
  }, []);

  return (
    <>
      <div className="wrapper-1 relative w-full z-10">
        <div className="content relative w-full z-10 overflow-hidden h-[100dvh] bg-center bg-no-repeat bg-cover">
          <section className="section-hero w-full h-[100dvh] bg-center bg-no-repeat bg-cover bg-black flex justify-center items-center">
            <h1 className="text-white text-7xl font-Righteous">CRETIVOX</h1>
          </section>
        </div>
        <div className="image-container w-full h-full absolute top-0 left-0 right-0 z-20 overflow-hidden perspective-[500px]">
          <img
            className="img-1 w-full h-full object-cover object-center"
            src="https://assets-global.website-files.com/63ec206c5542613e2e5aa784/643312a6bc4ac122fc4e3afa_main%20home.webp"
            alt="image"
          />
        </div>
      </div>

      <section className="section-img-expand bg-black w-full h-dvh flex justify-center items-center py-10">
        <div className="container-wrapper bg-purple-900 w-[90%] h-full rounded-full relative overflow-hidden">
          <img
            className="absolute inset-0 w-full h-full object-cover bg-center"
            src="https://i.gifer.com/1Vv.gif"
            alt=""
          />
        </div>
      </section>

      <section className="bg-[#344C64]">
        <div className="p-4 text-white text-4xl">Image Reveal</div>
        <div className="flex flex-wrap gap-9 justify-center  items-center h-screen w-full relative bg-[#344C64]">
          <div className="reveal invisible relative w-[80%] h-[80%] max-w-[500px] overflow-hidden ">
            <img
              className="img-1 h-full w-full object-cover origin-left"
              src="https://images.unsplash.com/photo-1715638427009-8b0fe7096838?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>

          <div className="reveal invisible relative w-full h-full max-w-[500px] overflow-hidden ">
            <img
              className="img-1 h-full w-full object-cover origin-left"
              src="https://images.unsplash.com/photo-1715788338483-d991b12a988f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col justify-center  items-center h-screen w-full relative bg-[#240750]">
          <div className="reveal invisible relative w-[80%] h-[80%] max-w-[500px] overflow-hidden">
            <img
              className="img-1 h-full w-full object-cover origin-left"
              src="https://images.unsplash.com/photo-1716368968681-a48d828c1c0d?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};
