import React, { useEffect, useRef, useState } from "react";
import createGlobe from "cobe";
import { cn } from "@/lib/utils";

const Earth = ({
  className,
  theta = 0.25,
  dark = false,
  scale = 1.1,
  diffuse = 1.2,
  mapSamples = 40000,
  mapBrightness = 6,
  baseColor = [0.941, 0.976, 0.898],
  markerColor = [1, 1, 1],
  glowColor = [1, 1, 1],
}) => {
  const containerRef = useRef();
  const canvasRef = useRef();
  const [visible, setVisible] = useState(false);
  const [opacity, setOpacity] = useState(0);
  const globeRef = useRef(null);
  const animationRef = useRef(null);
  const phiRef = useRef(0);

  // Intersection Observer for smooth appearance
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          // Smooth fade-in
          let start = null;
          const fadeIn = (timestamp) => {
            if (!start) start = timestamp;
            const progress = (timestamp - start) / 500; // 500ms duration
            const newOpacity = Math.min(progress, 1);
            setOpacity(newOpacity);
            if (progress < 1) {
              animationRef.current = requestAnimationFrame(fadeIn);
            }
          };
          animationRef.current = requestAnimationFrame(fadeIn);
        } else {
          setVisible(false);
          setOpacity(0);
          if (animationRef.current) {
            cancelAnimationFrame(animationRef.current);
          }
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  // Globe initialization and smooth rotation
  useEffect(() => {
    if (!visible || !canvasRef.current) return;

    const width = canvasRef.current.offsetWidth;
    phiRef.current = 0;

    globeRef.current = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: theta,
      dark: dark,
      scale: scale,
      diffuse: diffuse,
      mapSamples: mapSamples,
      mapBrightness: mapBrightness,
      baseColor: baseColor,
      markerColor: markerColor,
      glowColor: glowColor,
      opacity: 1,
      offset: [0, 0],
      markers: [],
      onRender: (state) => {
        // Smooth rotation with easing
        state.phi = phiRef.current;
        phiRef.current += 0.002; // Slower rotation for smoother effect
        
        // Add slight bobbing effect for more organic movement
        state.scale = scale + Math.sin(phiRef.current * 2) * 0.02;
      },
    });

    // Handle window resize
    const handleResize = () => {
      if (globeRef.current && canvasRef.current) {
        const width = canvasRef.current.offsetWidth;
        globeRef.current.width = width * 2;
        globeRef.current.height = width * 2;
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (globeRef.current) globeRef.current.destroy();
      window.removeEventListener("resize", handleResize);
    };
  }, [
    visible,
    theta,
    dark,
    scale,
    diffuse,
    mapSamples,
    mapBrightness,
    baseColor,
    markerColor,
    glowColor,
  ]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "flex items-center justify-center z-[10] w-full max-w-[550px] mx-auto transition-opacity duration-500",
        className
      )}
      style={{ 
        height: "60vh", 
        opacity: opacity,
        transition: "opacity 0.5s ease-in-out" 
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          maxWidth: "100%",
          aspectRatio: "1",
          transition: "transform 0.3s ease-out",
          transform: `scale(${visible ? 1 : 0.95})`,
        }}
      />
    </div>
  );
};

export default Earth;