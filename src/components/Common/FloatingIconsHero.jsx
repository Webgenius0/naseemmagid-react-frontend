import * as React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Container from "./Container";

// A single icon component with its own motion logic
const Icon = ({ mouseX, mouseY, iconData, index }) => {
  const ref = React.useRef(null);

  // Motion values for the icon's position, with spring physics for smooth movement
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  React.useEffect(() => {
    const handleMouseMove = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const distance = Math.sqrt(
          Math.pow(mouseX.current - (rect.left + rect.width / 2), 2) +
            Math.pow(mouseY.current - (rect.top + rect.height / 2), 2)
        );

        // If the cursor is close enough, repel the icon
        if (distance < 150) {
          const angle = Math.atan2(
            mouseY.current - (rect.top + rect.height / 2),
            mouseX.current - (rect.left + rect.width / 2)
          );
          // The closer the cursor, the stronger the repulsion
          const force = (1 - distance / 150) * 50;
          x.set(-Math.cos(angle) * force);
          y.set(-Math.sin(angle) * force);
        } else {
          // Return to original position when cursor is away
          x.set(0);
          y.set(0);
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y, mouseX, mouseY]);

  return (
    <motion.div
      ref={ref}
      key={iconData.id}
      style={{
        x: springX,
        y: springY,
      }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: index * 0.08,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn("absolute", iconData.className)}
    >
      {/* Inner wrapper for the continuous floating animation */}
      <motion.div
        className="flex items-center justify-center   "
        animate={{
          y: [0, -8, 0, 8, 0],
          x: [0, 6, 0, -6, 0],
          rotate: [0, 5, 0, -5, 0],
        }}
        transition={{
          duration: 5 + Math.random() * 5,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      >
        <iconData.icon className="w-10 h-10 text-foreground" />
      </motion.div>
    </motion.div>
  );
};

const FloatingIconsHero = React.forwardRef(
  ({ className, title, ctaText, ctaHref, icons, ...props }, ref) => {
    // Refs to track the raw mouse position
    const mouseX = React.useRef(0);
    const mouseY = React.useRef(0);

    const handleMouseMove = (event) => {
      mouseX.current = event.clientX;
      mouseY.current = event.clientY;
    };

    return (
      <section
        ref={ref}
        onMouseMove={handleMouseMove}
        className={cn(
          "relative w-full  min-h-[500px] flex items-center justify-center overflow-hidden bg-[#080a07]",
          className
        )}
        {...props}
      >
        {/* Container for the background floating icons */}
        <div className="absolute inset-0 w-full h-full">
          {icons.map((iconData, index) => (
            <Icon
              key={index}
              mouseX={mouseX}
              mouseY={mouseY}
              iconData={iconData}
              index={index}
            />
          ))}
        </div>
        {/* Container for the foreground content */}
        <Container>
          <div className="relative z-10 text-center px-4 ">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              {title}
            </h1>
            <div className="mt-10">
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="rounded-xl bg-PrimaryColor px-8 py-4 xl:py-6 text-lg lg:text-2xl font-black uppercase text-white"
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <a href={ctaHref}>{ctaText}</a>
              </motion.button>
            </div>
          </div>
        </Container>
      </section>
    );
  }
);

FloatingIconsHero.displayName = "FloatingIconsHero";

export { FloatingIconsHero };
