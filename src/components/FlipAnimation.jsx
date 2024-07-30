/* eslint-disable no-const-assign */
import gsap from "gsap";
import { Flip } from "gsap-trial/all";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";

export const FLipCuy = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, Flip);

    const lionWrap = document.querySelector(".lion-wrap");
    const globe = document.querySelector(".globe");

    const state = Flip.getState(globe);
    lionWrap.appendChild(globe);

    Flip.from(state, {
      scrollTrigger: {
        trigger: ".section-one",
        start: "top top ",
        end: "+=500 top",
        scrub: true,
        markers: false,
        id: "flip"
      },
      scale: true,
    });

    gsap.from(".section-one", 
      {
        scrollTrigger: {
          trigger: ".section-one",
          start: "center center",
          end: "bottom bottom",
          scrub: true,
          markers: false,
          id: "section-one"
        },
        duration: 0.5,
        backgroundColor: "#000",
        ease:"none"
      })

      /* Video scroll */
      const videoScroll = document.querySelector(".video-scroll")
      const frameNumber = 0,
      src = videoScroll.currentSrc || videoScroll.src,

      videoScrollTL = gsap.timeline({
        defaults: {duration: 1},
        scrollTrigger: {
          trigger: ".video-container",
          pin: true,
          start: "top top",
          end: "+=100%",
          scrub: true,
          markers:false,
          id: "video",
          onUpdate: self => {
            frameNumber = self.progress / 14 * 100 -1
            videoScroll.currentTime = frameNumber
          }
        }
      })

      function once(el, event, fn, opts) {
        var onceFn = function () {
          el.removeEventListener(event, onceFn)
          fn.apply(this, arguments)
        }
        el.addEventListener(event, onceFn, opts)
        return onceFn
      }

      once(document.documentElement, "touchstart", function () {
        videoScroll.play();
        videoScroll.pause();
      });

      once(videoScroll, "loadedmetadata", function () {
        videoScrollTL.fromTo(videoScroll, { currentTime: 0 }, { currentTime: videoScroll.duration - 0.10 });
      });

      setTimeout(function () {
        if (window["fetch"]) {
          fetch(src).then(function (response) {
            return response.blob();
          }).then(function (response) {
            var blobURL = URL.createObjectURL(response);
            var t = videoScroll.currentTime;
            once(document.documentElement, "touchstart", function () {
              videoScroll.setAttribute("src", blobURL);
              videoScroll.currentTime = t + 0.01;
            });
          });
        }
      }, 0);

  }, []);

  return (
    <>
      <section className="section-one bg-[#01204E] min-h-screen flex flex-col overflow-hidden">
        <div className="globe-wrap flex items-center justify-center relative mt-20 h-screen">
          <img
            src="https://samadi.vercel.app/assets/globe-3c4e0059.png"
            alt=""
            className="globe absolute right-0 bottom-0 w-1/2" width={850} height={850}
          />
        </div>

        <section
          id="section3"
          className="section-three py-32 flex items-center justify-center text-white text-center"
        >
          <div className="lion-wrap relative mt-12" id="ceoLogo">
            <img
              src="https://samadi.vercel.app/assets/logo-wihout-ball-2cf12de3.png"
              className="w-36 md:w-56 mx-auto"
            />
          </div>
        </section>
      </section>

      <section className=" video-container min-h-screen flex flex-col flex-nowrap justify-center items-center bg-black">
        <video src="https://tracta-codepen-assets.s3.ap-southeast-2.amazonaws.com/video.mp4" muted className="video-scroll"></video>
      </section>
    </>
  );
};

