import Container from "@/components/Common/Container";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import * as SelectPrimitive from "@radix-ui/react-select";
import { ChevronDown } from "lucide-react";

export default function Footer() {
  return (
    <div className="pb-[120px] pt-[136px] bg-[#080a07] -mt-7">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-4">
            <h1 className="text-PrimaryColor text-3xl font-semibold">Nexal</h1>
            <p className="text-white mt-6 mb-16">
              The most ruthlessly effective platform for rapidly scaling
              businesses on planet earth
            </p>
            <div className="flex gap-4">
              <FaFacebookF className="text-PrimaryColor w-6 h-6 cursor-pointer" />
              <FaInstagram className="text-PrimaryColor w-6 h-6 cursor-pointer" />
            </div>
            <div className="mt-6">
              <Select>
              <SelectPrimitive.Trigger
                className={cn(
                  "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 text-white",
                  "w-44"
                )}
              >
                <SelectValue placeholder="Select a country" />
                <SelectPrimitive.Icon asChild>
                  <ChevronDown className="h-4 w-4 opacity-50" />
                </SelectPrimitive.Icon>
              </SelectPrimitive.Trigger>
              <SelectContent>
                <SelectGroup>

                  <SelectItem value="United States">United States</SelectItem>
                  <SelectItem value="Bangladesh">Bangladesh</SelectItem>
                  <SelectItem value="Usa">USA</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            </div>
          </div>
          <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-5 gap-4 text-white">
            <div className="col-span-1">
              <h1 className="text-xl font-semibold">Company</h1>
              <div className="mt-4 space-y-3 flex flex-col text-lg font-light text-[#DFE0E4]">
                <Link>About Us</Link>
                <Link>Contact Us</Link>
                <Link>Blog</Link>
                <Link>Review</Link>
                <Link>Careers</Link>
                <Link>Case Studies</Link>
              </div>
            </div>
            <div className="col-span-1">
              <h1 className="text-xl font-semibold">Services</h1>
              <div className="mt-4 space-y-3 flex flex-col text-lg font-light text-[#DFE0E4]">
                <Link>SEO</Link>
                <Link>Conversion Rate</Link>
                <Link>Optimization</Link>
                <Link>Google Ads</Link>
                <Link>Facebook Ads</Link>
                <Link>Landing page</Link>
                <Link>Web Design</Link>
              </div>
            </div>
            <div className="col-span-1">
              <h1 className="text-xl font-semibold">Solutions</h1>
              <div className="mt-4 space-y-3 flex flex-col text-lg font-light text-[#DFE0E4]">
                <Link>Agency</Link>
              </div>
            </div>
            <div className="col-span-2">
              <h1 className="text-xl font-semibold">Want some free money</h1>
              <p className="leading-[27px] text-lg font-light text-[#DFE0E4] py-4">
                Get million dollar marketing strategies send straight to your
                inbox every week . just enter your email below
              </p>

              <div class="flex h-[54px] text-[14px] text-white/60 w-full">
                <input
                  class="input w-[220px] text-black py-4 px-4 rounded-l-full text-lg bg-white focus:outline-none focus:ring-0 "
                  name="text"
                  type="text"
                  placeholder="Get some free money now"
                />
                <button class="text-[#f4f4f5] py-4 px-4 rounded-r-full border-y border-r border-r-white/10 border-y-white/10 hover:bg-zinc-800/40 transition-all duration-150 easy-in-out bg-PrimaryColor font-bold text-lg flex items-center cursor-pointer">
                  Hit me
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
