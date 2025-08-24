import React, { useEffect, useState } from "react";
import Container from "../components/Common/Container";
import MenuSVG from "../components/SVG/MenuSVG";
import { GrClose } from "react-icons/gr";
import FlipLink from "@/components/Common/FlipLink";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="absolute top-0 left-0 right-0 z-50 py-6">
      <Container>
        <div className="flex justify-between bg-[#20202080] px-8 py-2 lg:py-3 rounded-full">
          <h1 className="text-PrimaryColor text-[24px] lg:text-[36px] font-semibold">
            NEXAL
          </h1>
          <div className="flex gap-4 items-center">
            <button className="text-white text-lg md:text-xl font-medium">
              Menu
            </button>
            <div>
              <button
                onClick={() => setOpen(true)}
                className="cursor-pointer"
                size="icon"
              >
                <MenuSVG className="fill-white w-6 h-6" />
              </button>
            </div>

            {/* Overlay */}
            <div
              className={`fixed top-0 left-0 w-full h-full z-50 flex flex-col bg-black/50 backdrop-blur-2xl transition-opacity duration-500 ${
                open ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            >
              <button
                onClick={() => setOpen(false)}
                className="cursor-pointer text-white p-4 self-end"
                size="icon"
              >
                <GrClose className="w-6 h-6" />
              </button>

              <div className="flex flex-col items-center justify-center min-h-[90vh] font-Lilita gap-6 text-6xl">
                <FlipLink href="#">AGENCY</FlipLink>
                <FlipLink href="#">COURSES</FlipLink>
                <FlipLink href="#">SEO</FlipLink>
                <FlipLink href="#">CRO</FlipLink>
                <FlipLink href="#">GOOGLE ADS</FlipLink>
                <FlipLink href="#">LANDING'PAGESI</FlipLink>
                <FlipLink href="#">FACEBOOK ADS</FlipLink>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
