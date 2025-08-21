import React from "react";
import Container from "../components/Common/Container";
import MenuSVG from "../components/SVG/MenuSVG";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
  return (
    <div className="absolute top-0 left-0 right-0 z-50 py-6">
      <Container>
        <div className=" flex justify-between bg-[#20202080] px-8 py-2 lg:py-3 rounded-full">
          <h1 className="text-PrimaryColor text-[24px] lg:text-[36px] font-semibold">
            Nexal
          </h1>
          <div className="flex gap-4 items-center">
            <button className="text-white text-lg md:text-xl font-medium">
              Menu
            </button>
            <div>
              <Sheet>
                <SheetTrigger asChild>
                  <button className="cursor-pointer" size="icon">
                    <MenuSVG className="fill-white w-6 h-6" />
                  </button>
                </SheetTrigger>
                <SheetContent side="left" className="bg-[#202020] border-0 px-4 py-6">
                  <h1 className="text-PrimaryColor text-[24px] lg:text-[36px] font-semibold">
                    Nexal
                  </h1>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
