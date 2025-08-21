import { AllImages } from "@/components/AllImages/AllImages";

export default function useGrowMarqueedata() {
  const growMarqueedata = [
    {
      id: 1,
      name: "Prime",
      svg: AllImages.logo13,
    },
    {
      id: 2,
      name: "Trustpilot",
      svg: AllImages.logo2,
    },
    {
      id: 3,
      name: "Webflow",
      svg: AllImages.logo3,
    },
    {
      id: 4,
      name: "Airbnb",
      svg: AllImages.logo1,
    },
  ];

  return { growMarqueedata };
}
