import { useEffect, useRef } from "react";
import Matter from "matter-js";

export const DraggableCuy = () => {
  const sceneRef = useRef(null);

  useEffect(() => {
    const { Engine, Render, World, Bodies, Mouse, MouseConstraint, Events } =
      Matter;

    // Create an engine
    const engine = Engine.create();
    const world = engine.world;

    // Create a renderer
    const render = Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: 800,
        height: 800,
        pixelRatio: 2,
        background: "#000",
        wireframes: false,
      },
    });

    // Create bounds
    const ground = Bodies.rectangle(
      800 / 2 + 160,
      800 + 80,
      800 + 320,
      160,
      { render: { fillStyle: "#080808" }, isStatic: true }
    );
    const wallLeft = Bodies.rectangle(
      -80,
      800 / 2,
      160,
      800,
      { isStatic: true }
    );
    const wallRight = Bodies.rectangle(
      800 + 80,
      800 / 2,
      160,
      1200,
      { isStatic: true }
    );
    const roof = Bodies.rectangle(
      800 / 2 + 160,
      -80,
      800 + 320,
      160,
      { isStatic: true }
    );

    // Create objects with sprites
    const radius = 10;
    // art & design
    var illustration = Bodies.rectangle(70, 500, 133, 40, {
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture: "https://i.imgur.com/RADmiFI.png",
          xScale: 0.5,
          yScale: 0.5,
        },
      },
    });
    var art = Bodies.rectangle(35, 460, 56, 40, {
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture: "https://i.imgur.com/NwQqeng.png",
          xScale: 0.5,
          yScale: 0.5,
        },
      },
    });
    var threeD = Bodies.rectangle(90, 460, 52, 40, {
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture: "https://i.imgur.com/ptUWXgO.png",
          xScale: 0.5,
          yScale: 0.5,
        },
      },
    });
    var graphic = Bodies.rectangle(60, 420, 105, 40, {
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture: "https://i.imgur.com/TyOmVtt.png",
          xScale: 0.5,
          yScale: 0.5,
        },
      },
    });
    var photo = Bodies.rectangle(50, 380, 86, 40, {
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture: "https://i.imgur.com/tc3MsJP.png",
          xScale: 0.5,
          yScale: 0.5,
        },
      },
    });
    // video
    var documentary = Bodies.rectangle(220, 540, 165, 40, {
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture: "https://i.imgur.com/QYNTBNr.png",
          xScale: 0.5,
          yScale: 0.5,
        },
      },
    });
    var animation = Bodies.rectangle(200, 490, 128, 40, {
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture: "https://i.imgur.com/rSnEY9Q.png",
          xScale: 0.5,
          yScale: 0.5,
        },
      },
    });
    var vintage = Bodies.rectangle(190, 440, 104, 40, {
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture: "https://i.imgur.com/5BSBvSm.png",
          xScale: 0.5,
          yScale: 0.5,
        },
      },
    });
    var short = Bodies.rectangle(170, 390, 82, 40, {
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture: "https://i.imgur.com/VEyrikN.png",
          xScale: 0.5,
          yScale: 0.5,
        },
      },
    });
    //misc
    var website = Bodies.rectangle(360, 420, 108, 40, {
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture: "https://i.imgur.com/hr9p4uV.png",
          xScale: 0.5,
          yScale: 0.5,
        },
      },
    });
    var article = Bodies.rectangle(300, 380, 92, 40, {
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture: "https://i.imgur.com/n6TV7XG.png",
          xScale: 0.5,
          yScale: 0.5,
        },
      },
    });
    var music = Bodies.rectangle(400, 360, 86, 40, {
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture: "https://i.imgur.com/dax8MwT.png",
          xScale: 0.5,
          yScale: 0.5,
        },
      },
    });
    var star = Bodies.rectangle(80, 260, 42, 40, {
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture: "https://i.imgur.com/C2qPMbB.png",
          xScale: 0.5,
          yScale: 0.5,
        },
      },
    });
    //about
    var about = Bodies.rectangle(230, 140, 87, 40, {
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture: "https://i.imgur.com/4gPcZVN.png",
          xScale: 0.5,
          yScale: 0.5,
        },
      },
    });
    var instagram = Bodies.rectangle(320, 180, 40, 40, {
      id: "instagramBody",
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture: "https://i.imgur.com/RStSwfG.png",
          xScale: 0.5,
          yScale: 0.5,
        },
      },
      url: "https://www.instagram.com/fuse.blog/",
    });
    var random = Bodies.rectangle(230, 180, 112, 40, {
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture: "https://i.imgur.com/YS51eIC.png",
          xScale: 0.5,
          yScale: 0.5,
        },
      },
    });

    // add all of the bodies to the world
    World.add(engine.world, [
      ground,
      wallLeft,
      wallRight,
      roof,
      illustration,
      art,
      threeD,
      graphic,
      photo,
      documentary,
      animation,
      vintage,
      short,
      website,
      article,
      music,
      star,
      about,
      instagram,
      random,
    ]);

    // Add mouse control
    const mouse = Mouse.create(render.canvas);
    
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });

    World.add(world, mouseConstraint);

    // Keep the mouse in sync with rendering
    render.mouse = mouse;

    // Allow page scrolling in Matter.js window
    mouse.element.removeEventListener("mousewheel", mouse.mousewheel);
    mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);

    // Detect clicks vs. drags
    let click = false;

    document.addEventListener("mousedown", () => (click = true));
    document.addEventListener("mousemove", () => (click = false));
    document.addEventListener("mouseup", () =>
      console.log(click ? "click" : "drag")
    );

    // Create an On-Mouseup Event-Handler
    Events.on(mouseConstraint, "mouseup", function (event) {
      const mouseConstraint = event.source;
      const bodies = engine.world.bodies;
      if (!mouseConstraint.bodyB) {
        for (let i = 0; i < bodies.length; i++) {
          const body = bodies[i];
          // Check if clicked or dragged
          if (click === true) {
            if (
              Matter.Bounds.contains(
                body.bounds,
                mouseConstraint.mouse.position
              )
            ) {
              const bodyUrl = body.url;
              console.log("Body.Url >> " + bodyUrl);
              // Hyperlinking feature
              if (bodyUrl !== undefined) {
                window.open(bodyUrl, "_blank");
                console.log("Hyperlink was opened");
              }
              break;
            }
          }
        }
      }
    });

    // Update function for running the engine
    const update = () => {
      Engine.update(engine, 1000 / 60);
      Render.world(render);
      requestAnimationFrame(update);
    };

    // Start the update loop
    update();

    // Cleanup when component unmounts
    return () => {
      Render.stop(render);
      Engine.clear(engine);
      World.clear(world);
      render.canvas.remove();
      render.textures = {};
    };
  }, []);

  return (
    <>
      <section ref={sceneRef} className=" overflow-hidden"></section>
    </>
  );
};
