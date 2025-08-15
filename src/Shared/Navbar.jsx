import React from "react";
import Container from "../components/Common/Container";
import MenuSVG from "../components/SVG/MenuSVG";

export default function Navbar() {
  return (
    <div className="absolute top-0 left-0 right-0 z-50 py-6">
      <Container>
        <div className=" flex justify-between bg-[#20202080] px-8 py-3 rounded-full">
          <h1 className="text-PrimaryColor text-[36px] font-semibold">Nexal</h1>
          <div className="flex gap-4 items-center">
            <button className="text-white text-xl font-medium">Menu</button>
            <div className="cursor-pointer">
              <MenuSVG className="fill-white w-6 h-6 " />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
