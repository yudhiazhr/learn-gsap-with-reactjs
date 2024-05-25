import { useEffect, useState } from "react";
import gsap from "gsap";
import SplitText from "gsap-trial/SplitText";
import ScrollTrigger from "gsap-trial/ScrollTrigger";

const TextReveal = () => {
  const [state, setState] = useState(false);

  const handleExpand = () => {
    gsap.to(".shrink", { width: 200, height: 200, ease: "power3.out" });
    setState(true);
  };

  const handleShrink = () => {
    gsap.to(".shrink", { width: 75, height: 75, ease: "power3.out" });
    setState(false);
  };

  useEffect(() => {
    gsap.registerPlugin(SplitText, ScrollTrigger);

    gsap.fromTo(
      ".textReveal",
      { opacity: 0, y: 100 },
      { duration: 1.5, opacity: 1, y: 0, ease: "power3.out", stagger: 0.5 }
    );

    const mySplitText = new SplitText(".split", { type: "chars" });
    const chars = mySplitText.chars;

    gsap.from(chars, {
      yPercent: 130,
      stagger: 0.2,
      ease: "back.out",
      duration: 1,
      scrollTrigger: {
        trigger: ".split",
        start: "top 80%",
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      mySplitText.revert();
    };
  }, []);

  return (
    <>
      <section className="h-screen bg-black">
        <div className="p-4 text-white text-4xl">Text Reveal Part 1</div>

        <div className="flex flex-col justify-center items-center h-[80dvh] w-full">
          <h2 className="textReveal text-white font-bold text-7xl">Guys!</h2>
          <h3 className="textReveal text-white font-bold text-7xl">
            Gi apain nich!
          </h3>
        </div>
      </section>

      <section className="h-screen bg-slate-700">
        <div className="p-4 text-white text-4xl">Text Reveal + split text</div>

        <div className="flex flex-col justify-center items-center h-[80dvh] w-full">
          <div className="overflow-hidden p-6 border-[5px]">
            <h1 className="split text-white font-bold text-7xl">SOME TEXT</h1>
          </div>
        </div>
      </section>

      <section className="h-screen">
        <div className="p-4 text-black text-4xl">Expand anything</div>
        <div className="flex flex-col justify-center items-center">
          <div
            onClick={state !== true ? handleExpand : handleShrink}
            className="w-[75px] h-[75px] bg-purple-400 rounded-full text-center shrink flex justify-center items-center"
          ></div>
        </div>
      </section>
    </>
  );
};

export default TextReveal;
