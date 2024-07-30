import gsap from "gsap";
import { useEffect } from "react";

export const CursorFollow = () => {

    useEffect(() => {
        
    gsap.set('.cursor',{xPercent:-50, yPercent: -50})

    let cursor = document.querySelector('.cursor')
    let hand = document.querySelector('.hand')
    let title = document.querySelector('.target')

    let mouseX;
    let mouseY;

    window.addEventListener('mousemove', e => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        gsap.to(cursor, 0.5, {x: mouseX, y:mouseY})
    })

    title.addEventListener('mouseenter', () => {
        gsap.to(hand, 1, {
            scale: 1,
            opacity: 1,
            top: '-75px',
            left: '-75px',
            rotate: 0,
            ease: "expo.inOut"
        })
    })

    title.addEventListener('mousemove', () => {
        gsap.to(hand, 1, {
            x: mouseX,
            y: mouseY
        })
    })

    title.addEventListener('mouseleave', () => {
        gsap.to(hand, 0.2, {
            scale: 0,
            opacity: 0,
            top: '10',
            left: '40',
            rotate: 45,
        })
    })
    },[])

  return (
    <>
      <section className="bg-teal-700 min-h-dvh flex justify-center items-center">
        <div className="cursor fixed left-0 rounded-[50%] pointer-events-none transition-all duration-[.1s]  bg-black mix-blend-difference top-0 w-8 h-8 z-50 invert"></div>
        <div className="hand fixed left-0 rounded-[50%] pointer-events-none transition-all duration-[.1s] bg-pink-600 top-[50%] w-[150px] h-[150px] z-[100] grid place-content-center rotate-45 opacity-0">
          <svg className="w-[80px]" viewBox="0 0 62 45" fill="none">
            <path
              d="M41.3333 39.2727L41.3333 36.8182C42.16 36.8182 43.8133 36 44.64 35.1818C45.4667 34.3636 46.2933 32.7273 46.2933 30.6818C46.2933 29.8636 46.2933 29.0455 45.88 28.2273C46.7067 27.8182 47.12 27.4091 47.9467 27C48.7733 26.1818 49.6 24.9545 49.6 22.5C49.6 21.6818 49.6 20.8636 49.1867 20.4545L56.2133 20.4545C58.6933 20.4545 62 18.8182 62 14.7273C62 13.0909 61.1733 11.4545 60.3467 10.2273C57.8667 8.18182 54.56 8.18182 54.56 8.18182L36.7867 8.18182C36.3733 5.72727 35.5467 3.68182 34.3067 2.45454C31.4133 -1.82466e-06 27.6933 -1.49959e-06 22.7333 -1.7164e-06L19.84 -1.84287e-06C14.0533 -2.09582e-06 11.16 2.86363 8.26667 5.72727L6.61334 6.95454C1.65334 12.2727 1.17419e-06 16.7727 6.91377e-07 27.8182C1.72801e-07 39.6818 6.61333 45 21.08 45L31.4133 45C34.3067 45 40.0933 44.1818 41.3333 39.2727ZM31.4133 40.9091L20.6667 40.9091C6.61333 40.9091 3.72 35.5909 3.72 27.8182C3.72 18 4.96 14.3182 9.09333 10.2273L10.7467 8.59091C14.0533 5.72727 15.7067 4.09091 19.84 4.09091L22.7333 4.09091C26.8667 4.09091 29.76 4.09091 31.4133 5.31818C31.8267 5.72727 32.24 6.95454 32.24 8.18182L30.1733 8.18182L23.9733 6.95454C23.56 6.95454 23.56 6.95455 23.1467 7.36364C22.7333 7.77273 23.1467 8.18182 23.1467 8.18182L28.1067 12.2727L54.56 12.2727C54.9733 12.2727 56.6267 12.2727 57.4533 13.0909C57.4533 13.5 57.8667 13.9091 57.8667 14.7273C57.8667 15.9545 56.6267 16.3636 56.2133 16.3636L38.44 16.3636C37.2 16.3636 35.96 17.1818 35.96 18.4091C35.96 19.6364 37.2 20.4545 38.0267 20.4545L43.4 20.4545C43.8133 20.4545 45.4667 20.8636 45.4667 22.5C45.4667 23.7273 45.0533 24.5455 43.8133 24.5455L38.44 24.5455C37.2 24.5455 35.96 25.3636 35.96 26.5909C35.96 27.8182 37.2 28.6364 38.0267 28.6364L40.92 28.6364C41.3333 28.6364 42.16 29.0455 42.16 30.6818C42.16 31.5 41.7467 31.9091 41.7467 31.9091C41.3333 32.7273 40.0933 32.7273 40.0933 32.7273L36.7867 32.7273C35.5467 32.7273 34.72 33.5455 34.72 34.3636C34.72 35.5909 35.1333 36.4091 36.3733 36.4091C36.7867 36.4091 37.2 36.8182 37.6133 37.2273L37.6133 38.0455C36.7867 40.5 32.6533 40.9091 31.4133 40.9091C31.8267 40.9091 31.8267 40.9091 31.4133 40.9091V40.9091Z"
              fill="white"
            />
          </svg>
        </div>

        <h1 className="target cursor-pointer text-8xl font-Righteous text-white">Hover meh dude</h1>
      </section>
    </>
  );
};
