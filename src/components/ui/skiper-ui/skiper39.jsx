import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export const CrowdCanvas = ({
  src = "/images/peeps/all-peeps.png",
  rows = 15,
  cols = 7,
  className,
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const config = {
      src,
      rows,
      cols,
    };

    // UTILS
    const randomRange = (min, max) => min + Math.random() * (max - min);
    const randomIndex = (array) => (randomRange(0, array.length) | 0);
    const removeFromArray = (array, i) => array.splice(i, 1)[0];
    const removeItemFromArray = (array, item) =>
      removeFromArray(array, array.indexOf(item));
    const removeRandomFromArray = (array) =>
      removeFromArray(array, randomIndex(array));
    const getRandomFromArray = (array) => array[randomIndex(array) | 0];

    // TWEEN FACTORIES
    const resetPeep = ({ stage, peep }) => {
      const direction = Math.random() > 0.5 ? 1 : -1;
      const offsetY = 40 - 180 * gsap.parseEase("power2.in")(Math.random());
      const startY = stage.height - peep.height + offsetY;
      let startX;
      let endX;

      if (direction === 1) {
        startX = -peep.width;
        endX = stage.width;
        peep.scaleX = 1;
      } else {
        startX = stage.width + peep.width;
        endX = 0;
        peep.scaleX = -1;
      }

      peep.x = startX;
      peep.y = startY;
      peep.anchorY = startY;

      return {
        startX,
        startY,
        endX,
      };
    };

    const normalWalk = ({ peep, props }) => {
      const { startX, startY, endX } = props;
      const xDuration = 10;
      const yDuration = 0.25;

      const tl = gsap.timeline();
      tl.timeScale(randomRange(0.6, 1.4));
      tl.to(
        peep,
        {
          duration: xDuration,
          x: endX,
          ease: "none",
        },
        0
      );
      tl.to(
        peep,
        {
          duration: yDuration,
          repeat: xDuration / yDuration,
          yoyo: true,
          y: startY - 10,
        },
        0
      );

      return tl;
    };

    const walks = [normalWalk];

    // FACTORY FUNCTIONS
    const createPeep = ({ image, rect }) => {
      const peep = {
        image,
        rect: [],
        width: 0,
        height: 0,
        drawArgs: [],
        x: 0,
        y: 0,
        anchorY: 0,
        scaleX: 1,
        walk: null,
        setRect: (r) => {
          peep.rect = r;
          peep.width = r[2];
          peep.height = r[3];
          peep.drawArgs = [peep.image, ...r, 0, 0, peep.width, peep.height];
        },
        render: (context) => {
          context.save();
          context.translate(peep.x, peep.y);
          context.scale(peep.scaleX, 1);
          context.drawImage(
            peep.image,
            peep.rect[0],
            peep.rect[1],
            peep.rect[2],
            peep.rect[3],
            0,
            0,
            peep.width,
            peep.height
          );
          context.restore();
        },
      };

      peep.setRect(rect);
      return peep;
    };

    // MAIN
    const img = document.createElement("img");
    const stage = {
      width: 0,
      height: 0,
    };

    const allPeeps = [];
    const availablePeeps = [];
    const crowd = [];

    const createPeeps = () => {
      const { rows: rCount, cols: cCount } = config;
      const { naturalWidth: width, naturalHeight: height } = img;
      if (!width || !height) return;
      const total = rCount * cCount;
      const rectWidth = width / rCount;
      const rectHeight = height / cCount;

      allPeeps.length = 0;
      for (let i = 0; i < total; i++) {
        allPeeps.push(
          createPeep({
            image: img,
            rect: [
              (i % rCount) * rectWidth,
              ((i / rCount) | 0) * rectHeight,
              rectWidth,
              rectHeight,
            ],
          })
        );
      }
    };

    const initCrowd = () => {
      while (availablePeeps.length) {
        addPeepToCrowd().walk.progress(Math.random());
      }
    };

    const addPeepToCrowd = () => {
      const peep = removeRandomFromArray(availablePeeps);
      if (!peep) return { walk: { progress: () => {} } };

      const walk = getRandomFromArray(walks)({
        peep,
        props: resetPeep({
          peep,
          stage,
        }),
      }).eventCallback("onComplete", () => {
        removePeepFromCrowd(peep);
        addPeepToCrowd();
      });

      peep.walk = walk;
      crowd.push(peep);
      crowd.sort((a, b) => a.anchorY - b.anchorY);
      return peep;
    };

    const removePeepFromCrowd = (peep) => {
      removeItemFromArray(crowd, peep);
      availablePeeps.push(peep);
    };

    const render = () => {
      if (!canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);

      crowd.forEach((peep) => {
        peep.render(ctx);
      });

      ctx.restore();
    };

    const resize = () => {
      if (!canvas) return;
      const dpr = window.devicePixelRatio || 1;
      stage.width = canvas.clientWidth || window.innerWidth;
      stage.height = canvas.clientHeight || window.innerHeight;
      canvas.width = stage.width * dpr;
      canvas.height = stage.height * dpr;

      crowd.forEach((peep) => {
        if (peep.walk) peep.walk.kill();
      });

      crowd.length = 0;
      availablePeeps.length = 0;
      availablePeeps.push(...allPeeps);

      initCrowd();
    };

    const init = () => {
      createPeeps();
      resize();
      gsap.ticker.add(render);
    };

    if (img.complete && img.naturalWidth > 0) {
      init();
    } else {
      img.onload = init;
      img.src = config.src;
    }

    const handleResize = () => resize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      gsap.ticker.remove(render);
      crowd.forEach((peep) => {
        if (peep.walk) peep.walk.kill();
      });
    };
  }, [src, rows, cols]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("absolute inset-0 w-full h-full object-cover", className)}
    />
  );
};

export const Skiper39 = ({
  className,
  src = "/images/peeps/all-peeps.png",
  rows = 15,
  cols = 7,
}) => {
  return (
    <div className={cn("relative h-full w-full overflow-hidden", className)}>
      <CrowdCanvas src={src} rows={rows} cols={cols} />
    </div>
  );
};

/**
 * Background crowd canvas with smooth scroll fade out - constrained to bottom baseline
 */
export const BackgroundCrowdCanvas = ({ className }) => {
  const { scrollY } = useScroll();
  
  // Smoothly fade away as user scrolls past hero section (0px to 400px)
  const opacity = useTransform(scrollY, [0, 200, 400], [0.35, 0.15, 0]);
  const translateY = useTransform(scrollY, [0, 400], [0, -30]);

  return (
    <motion.div
      style={{ opacity, y: translateY }}
      className={cn(
        "pointer-events-none absolute bottom-0 left-0 right-0 w-full h-[180px] sm:h-[220px] z-0 overflow-hidden select-none",
        "filter invert contrast-125 [mask-image:linear-gradient(to_top,black_60%,transparent_100%)]",
        className
      )}
    >
      <CrowdCanvas src="/images/peeps/all-peeps.png" rows={15} cols={7} />
    </motion.div>
  );
};

export default Skiper39;
