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
    gsap.to(".shrink", { width: 105, height: 105, ease: "power3.out" });
    setState(false);
  };

  useEffect(() => {
    gsap.registerPlugin(SplitText, ScrollTrigger);

    gsap.fromTo(
      ".textReveal",
      { opacity: 0, y: 100 },
      {
        duration: 1.5,
        opacity: 1,
        y: 0,
        ease: "power3.out",
        stagger: 0.5,
      }
    );

    const mySplitText = new SplitText(".split", { type: "chars" });
    const chars = mySplitText.chars;

    gsap.from(chars, {
      opacity: 0.15,
      stagger: 0.1,
      ease: "back.out",
      duration: 1,
      scrollTrigger: {
        trigger: ".split",
        start: "top 100%",
        toggleActions: "play pause resume reset",
      },
    });

    var newShape =
        "100,0 115.5,52.4 158.8,19.1 140.5,70.6 195.1,69.1 150,100 195.1,130.9 140.5,129.4 158.8,180.9 115.5,147.6 100,200 84.5,147.6 41.2,180.9 59.5,129.4 4.9,130.9 50,100 4.9,69.1 59.5,70.6 41.2,19.1 84.5,52.4 ",
      star = ".star";

    gsap.to(star, {
      duration: 10,
      rotation: 360,
      transformOrigin: "50% 50%",
      repeat: -1,
      ease: "none",
    });

    gsap.to(star, {
      duration: 2,
      attr: {
        points: newShape,
      },
      repeat: -1,
      yoyo: true,
      ease: "elastic.inOut",
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".wrapper-section",
          start: "top top",
          end: "bottom",
          scrub: true,
          pin: true,
          markers: true,
        },
      })
      .fromTo(
        ".notes",
        { width: "0%" },
        {
          width: "98%",
          duration: 2,
          scrollTrigger: {
            trigger: ".wrapper-section",
            start: "top bottom",
            end: "top top",
            scrub: true,
            id: "notes",
          },
          ease: "power3.out",
        }
      )
      .fromTo(
        ".circle",
        {
          opacity: 0,
          width: "0",
          height: "0",
          transformOrigin: "center center",
        },
        {
          opacity: 1,
          width: "500px",
          height: "500px",
          duration: 2,
          ease: "power3.out",
          transformOrigin: "center center",
        }
      )
      .fromTo(
        ".splitText",
        { opacity: 0 },
        { opacity: 1, duration: 2, ease: "power3.out" },
        "-=1.5"
      );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      mySplitText.revert();
    };
  }, []);

  return (
    <>
      <section className="h-screen flex justify-center items-center flex-col relative bg-black">
        <h1 className="z-[1] font-Righteous md:text-[150px] xl:text-[300px] leading-4 pt-44 text-white cursor-default">
          PERPETUAL
        </h1>
        <h1 className="text-white cursor-default font-Righteous md:text-[150px] xl:text-[300px] z-[1]">
          ARRIVAL
        </h1>
        <div className="absolute">
          <svg
            viewBox="0 0 200 200"
            className=" md:w-[480px] xl:w-[880px] md:h-[480px] xl:h-[880px]"
            fill="#F15A29"
          >
            <polygon
              className="star"
              points="100,50 130.9,4.9 129.4,59.5 180.9,41.2 147.6,84.5 200,100 147.6,115.5 180.9,158.8 129.4,140.5 
    130.9,195.1 100,150 69.1,195.1 70.6,140.5 19.1,158.8 52.4,115.5 0,100 52.4,84.5 19.1,41.2 70.6,59.5 69.1,4.9 "
            />
          </svg>
        </div>
      </section>

      <section className="h-screen bg-black">
        <div className="p-4 text-white text-4xl">Text Reveal Part 1</div>

        <div className="flex flex-col justify-center items-center h-[80dvh] w-full">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 71 71"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M35.791 0L39.502 24.9023L65.0879 4.6875L65.8691 5.51758L45.7031 31.1035L70.6055 34.8145V35.8887L45.8984 39.6973L65.8691 65.1855L65.0879 66.0156L39.6973 45.8008L35.8887 70.6055H34.7656L31.1035 45.8008L5.37109 66.0156L4.6875 65.1855L24.8047 39.502L0 35.791V34.8145L24.5605 31.0059L4.6875 5.51758L5.37109 4.6875L30.9082 24.8047L34.668 0H35.791Z"
              fill="white"
            ></path>
          </svg>
          <h2 className="textReveal text-white font-bold text-7xl">Guys!</h2>
          <h3 className="textReveal text-white font-bold text-7xl">
            Gi apain nich!
          </h3>
          <div className="p-4 text-white text-4xl">Expand anything</div>
          <div className="flex flex-col justify-center items-center ">
            <div
              onClick={state !== true ? handleExpand : handleShrink}
              className="w-[105px] h-[105px] bg-purple-400 rounded-full text-center shrink flex justify-center items-center cursor-pointer"
            >
              <h1 className=" text-white font-bold text-base">Click me!</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="h-screen bg-slate-700">
        <div className="p-4 text-white text-4xl">Text Reveal + split text</div>

        <div className="flex flex-col justify-center items-center h-[80dvh] w-full">
          <div className="overflow-hidden p-6 ">
            <h1 className="split text-white font-bold text-7xl">SOME TEXT</h1>
          </div>
          <div className="overflow-hidden p-6 ">
            <h1 className="split text-white font-bold text-7xl">SOME TEXT</h1>
          </div>
          <div className="overflow-hidden p-6 ">
            <h1 className="split text-white font-bold text-7xl">SOME TEXT</h1>
          </div>
        </div>
      </section>

      <section className="wrapper-section min-h-screen bg-slate-700">
        <div className="notes bg-slate-800 rounded-tr-[500px] h-screen px-12 py-8 flex justify-center items-center ">
          <div className="grid grid-cols-2 ">
            <div className="splitText h-full w-full flex flex-col gap-4">
              <p className="text-7xl text-white font-Righteous italic">About</p>
              <h1 className="md:text-2xl xl:text-6xl  text-white ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                velit accusantium repellendus ipsum? Magni voluptatem quidem
                impedit odit suscipit repudiandae ut. Deserunt vero voluptates
                esse ipsa rem dicta est natus.
              </h1>
            </div>
            <div className="flex justify-center items-center">
              <div className="circle w-[250px] h-[250px] xl:w-[500px] xl:h-[500px] bg-white rounded-full "></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TextReveal;
