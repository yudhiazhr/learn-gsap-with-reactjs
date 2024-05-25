import ScrollTrigger from "gsap-trial/ScrollTrigger";
import gsap from "gsap";
import { useEffect } from "react";

export const ImageReveal = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const revealContainers = document.querySelectorAll(".reveal");
    
        revealContainers.forEach((container) => {
          const image = container.querySelector("img");
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
      }, []);

  return (
    <>
      <section className="bg-[#344C64]">
      <div className="p-4 text-white text-4xl">Image Reveal</div>
        <div className="flex flex-wrap gap-9 justify-center  items-center h-screen w-full relative bg-[#344C64]">
        
          <div className="reveal invisible relative w-[80%] h-[80%] max-w-[500px] overflow-hidden ">
            <img
              className="h-full w-full object-cover origin-left"
              src="https://images.unsplash.com/photo-1715638427009-8b0fe7096838?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>

          <div className="reveal invisible relative w-[80%] h-[80%] max-w-[500px] overflow-hidden ">
            <img
              className="h-full w-full object-cover origin-left"
              src="https://images.unsplash.com/photo-1715788338483-d991b12a988f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col justify-center  items-center h-screen w-full relative bg-[#240750]">
        
          <div className="reveal invisible relative w-[80%] h-[80%] max-w-[500px] overflow-hidden">
            <img
              className="h-full w-full object-cover origin-left"
              src="https://images.unsplash.com/photo-1716368968681-a48d828c1c0d?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};
