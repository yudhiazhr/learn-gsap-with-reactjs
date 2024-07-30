/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const OverlappingCards = () => {
  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".cards",
        pin: ".pin-overlapping",
        start: "-=139",
        end: "bottom",
        scrub: 1,
      },
    });

    timeline
      .addLabel("card1")
      .to(".card-1", {
        xPercent: 0,
        opacity: 1,
      })
      .from(".card-2", {
        xPercent: 75,
        opacity: 0,
      })
      .addLabel("card2")
      .to(
        ".card-1",
        {
          scale: 0.95,
          xPercent: -0.5,
          opacity: 1,
        },
        "-=0.3"
      )
      .to(".card-2", {
        xPercent: 0,
        opacity: 1,
      })
      .from(".card-3", {
        xPercent: 75,
        opacity: 0,
      })
      .addLabel("card3")
      .to(
        ".card-2",
        {
          scale: 0.98,
          xPercent: -0.4,
          opacity: 1,
        },
        "-=0.3"
      )
      .to(".card-3", {
        xPercent: 0,
        opacity: 1,
      })
      .to(".card-3", {
        scale: 1,
        xPercent: 0,
        opacity: 1,
      });

    const cards = gsap.utils.toArray(".card");

    const stickDistance = 0;

    let firstCardST = ScrollTrigger.create({
      trigger: cards[0],
      start: "center center",
    });

    const lastCard = ScrollTrigger.create({
      trigger: cards[cards.length - 1],
      start: "center center",
    });

    cards.forEach((card, index) => {
      var scale = 1 - (cards.length - index) * 0.025;
      const scaleDown = gsap.to(card, {
        scale: scale,
        transformOrigin: '"100%' + (lastCard.start + stickDistance) + '"',
      });
      ScrollTrigger.create({
        trigger: card,
        start: "center center",
        end: () => lastCard.start + stickDistance,
        pin: true,
        markers: false,
        pinSpacing: false,
        ease: "none",
        animation: scaleDown,
        toggleActions: "restart none none reverse",
      });
    });
  
    /* Panel overlapping */
    ScrollTrigger.defaults ({
      toggleActions: "play none none reverse",
      markers: true,
    })

    gsap.utils.toArray(".panel").forEach((panel, i) => {
      ScrollTrigger.create(
        {
          trigger: panel,
          start: "top top",
          end: "+=100%",
          pin: true,
          pinSpacing: false,
          scrub: 1,
          
        }
      )
    })

  }, []);

  return (
    <>
      <section className="pin-overlapping overflow-hidden w-full min-h-dvh flex flex-col justify-center items-center">
        <h1 className="text-5xl pt-10">Cards Overlapping</h1>

        <div className="cards h-[70vh] w-[90%] m-auto relative flex justify-center items-center">
          <div className="card-1 absolute w-[60%] h-[70vh] bg-teal-500 flex justify-center items-center rounded-lg mb-[50px] left-0 top-0">
            <img
              className="h-full w-full object-cover origin-left"
              src="https://images.unsplash.com/photo-1715788338483-d991b12a988f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="card-2 absolute w-[60%] h-[70vh] bg-teal-500 flex justify-center items-center rounded-lg mb-[50px] left-[35px] top-[35px]">
            <img
              className="h-full w-full object-cover origin-left"
              src="https://images.unsplash.com/photo-1715638427009-8b0fe7096838?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="card-3 absolute w-[60%] h-[70vh] bg-teal-500 flex justify-center items-center rounded-lg mb-[50px] left-[70px] top-[70px]">
            <img
              className="h-full w-full object-cover origin-left"
              src="https://images.unsplash.com/photo-1716368968681-a48d828c1c0d?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="min-h-screen bg-[#A0DEFF] flex flex-col justify-center items-center p-32">
        <div className="card-stacking flex flex-col justify-center items-center gap-4">
          <div className="bg-[#219C90]  card grid grid-cols-2 p-12 w-full h-full rounded-2xl">
            <img
              src="https://placehold.co/600x570"
              className=" rounded-xl"
              alt=""
            />

            <div className="flex flex-col justify-between">
              <h1 className="text-white text-4xl">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
                tempora officiis totam.
              </h1>

              <div className="flex flex-col gap-2">
                <h1 className="text-white text-2xl ">Dummy dummy</h1>
                <h1 className="text-white text-xl ">Bonfire</h1>
              </div>
            </div>
          </div>

          <div className="bg-[#FFD35A] card grid grid-cols-2 p-12 w-full h-full rounded-2xl">
            <img
              src="https://placehold.co/600x570"
              className=" rounded-xl"
              alt=""
            />

            <div className="flex flex-col justify-between">
              <h1 className="text-white text-4xl">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
                tempora officiis totam.
              </h1>

              <div className="flex flex-col gap-2">
                <h1 className="text-white text-2xl ">Dummy dummy</h1>
                <h1 className="text-white text-xl ">Bonfire</h1>
              </div>
            </div>
          </div>

          <div className="bg-[#DC0083] card grid grid-cols-2 p-12 w-full h-full rounded-2xl">
            <img
              src="https://placehold.co/600x570"
              className=" rounded-xl"
              alt=""
            />

            <div className="flex flex-col justify-between">
              <h1 className="text-white text-4xl">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
                tempora officiis totam.
              </h1>

              <div className="flex flex-col gap-2">
                <h1 className="text-white text-2xl ">Dummy dummy</h1>
                <h1 className="text-white text-xl ">Bonfire</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overlapping panel section */}
      <section id="section-1" className="panel relative flex min-h-[20dvh] justify-center items-center content-center text-white bg-slate-700">
        <div>
          <img src="https://upload.wikimedia.org/wikipedia/id/b/bb/BMTH_Sempiternal.png" alt="" />
        </div>
      </section>
      <section id="section-2" className="panel relative flex h-screen justify-center items-center content-center text-white bg-green-700">
        <div>
          <img src="https://distortedsoundmag.com/wp-content/uploads/2018/10/White-Flag-Normandie-e1540462926738.jpg" alt="" />
        </div>
      </section>
      <section id="section-3" className="panel relative flex h-screen justify-center items-center content-center text-white bg-pink-700">
        <div>
          <img src="https://i.pinimg.com/originals/76/8c/81/768c81d41c4c2d00137ace745606d5f9.gif" alt="" />
        </div>
      </section>
      {/* Overlapping panel section end */}
    </>
  );
};

export default OverlappingCards;
