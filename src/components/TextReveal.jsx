import { useEffect } from "react";
import gsap from "gsap";
import { useState } from "react";

const TextReveal = () => {

    const [state, setState] = useState(false)

  const handleExpand = () => {
    gsap.to(".textReveal", { width: 200, height: 200, ease: "power3.out" });
    setState(true)
  };

  const handleShrink = () => {
    gsap.to(".textReveal", {width: 75, height: 75,  ease: "power3.out"})
    setState(false)
  }

  useEffect(() => {
    gsap.fromTo(
      ".textReveal",
      { opacity: 0, y: 100 },
      { duration: 1.5, opacity: 1, y: 0, ease: "power3.out", stagger: 0.5 }
    );
  });

  return (
    <>
      <section className="h-screen bg-black">
        <div className="p-4 text-white text-4xl">Text Reveal Part 1</div>
        <div className="flex flex-col justify-center items-center h-[80dvh]">
          <div  onClick={state !== true ? handleExpand : handleShrink} className=" p-8 bg-purple-400 rounded-full  text-center">
            <h1
             
              className=" textReveal text-white font-bold text-5xl mb-4"
            >
            </h1>
          </div>
          <h2 className=" textReveal text-white font-bold text-7xl">Guys!</h2>
          <h3 className=" textReveal text-white font-bold text-7xl">
            Gi apain nich!
          </h3>
        </div>
      </section>
    </>
  );
};

export default TextReveal;
