import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";

export const Marquee = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const marqueeFirst = document.querySelectorAll(".marqueeFirst_part");
    const marqueeSecond = document.querySelectorAll(".marqueeSecond_part");

    marqueeFirst.forEach((el) => {
      gsap.fromTo(
        el,
        { xPercent: 0 },
        {
          xPercent: -100,
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });

    marqueeSecond.forEach((el) => {
        gsap.fromTo(
          el,
          { xPercent: -100 },
          {
            xPercent: 0,
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });
  

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <section className="relative min-h-screen bg-[#FFF455] flex justify-center items-center overflow-hidden">
        <div className="absolute top-10 flex gap-4 p-4 bg-white w-screen whitespace-nowrap shadow-xl overflow-hidden marquee_inner">
          {Array.from({ length: 6 }).map((_, index) => (
            <h1 key={index} className="marqueeFirst_part text-6xl font-bold">
              !!! Warning !!! Police line
            </h1>
          ))}
        </div>
        <div className="absolute flex gap-20 p-4 bg-white w-screen whitespace-nowrap rotate-6 shadow-xl overflow-hidden">
          {Array.from({ length: 6 }).map((_, index) => (
            <h1 key={index} className="marqueeSecond_part text-6xl font-bold">
              !!! Warning !!! Police line
            </h1>
          ))}
        </div>
        <div className="absolute flex gap-20 p-4 bg-white w-screen whitespace-nowrap -rotate-6 shadow-xl overflow-hidden">
          {Array.from({ length: 6 }).map((_, index) => (
            <h1 key={index} className="marqueeFirst_part text-6xl font-bold">
              !!! Warning !!! Police line
            </h1>
          ))}
        </div>
        <div className="absolute bottom-10 flex gap-4 p-4 bg-white w-screen whitespace-nowrap shadow-xl overflow-hidden marquee_inner">
          {Array.from({ length: 6 }).map((_, index) => (
            <h1 key={index} className="marqueeSecond_part text-6xl font-bold">
              !!! Warning !!! Police line
            </h1>
          ))}
        </div>
      </section>
    </>
  );
};
