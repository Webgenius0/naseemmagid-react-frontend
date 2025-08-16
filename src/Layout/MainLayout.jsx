import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import Footer from "@/Shared/Footer";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function MainLayout() {
  useLayoutEffect(() => {
    // Create the smoother instance
    let smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 8,
      effects: true,
      smoothTouch: 0.9,
    });

    return () => {
      smoother.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <div className="">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Navbar />
          <Outlet />
          <Footer />
        </div>
      </div>
    </div>
  );
}
