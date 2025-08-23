import { AllImages } from "@/components/AllImages/AllImages";

export default function useBrandExperienceData() {
  const brandExperienceData = [
   
    {
      id: 1,
      name: "Prime",
      svg: AllImages.logo5,
      className:"h-16 w-30 md:w-40 px-2 object-contain",
    },
    {
      id: 2,
      name: "Trustpilot",
      svg: AllImages.logo4,
      className:"h-16 w-30 md:w-40 px-2 object-contain",
    },
    {
      id: 3,
      name: "Webflow",
      svg: AllImages.logo3,
      className:"h-16 w-30 md:w-40 px-2 object-contain",
    },
    {
      id: 4,
      name: "Airbnb",
      svg: AllImages.logo1,
      className:"h-12 w-30 md:w-40 px-2 object-contain",
    },
    {
      id: 5,
      name: "Airbnb",
      svg: AllImages.logo15,
      className:"h-16 w-30 md:w-40 px-2 object-contain",
    },
    {
      id: 5,
      name: "Airbnb",
      svg: AllImages.logo16,
      className:"h-20 w-30 md:w-40 px-2 object-contain",
    },
    {
      id: 6,
      name: "Airbnb",
      svg: AllImages.logo17,
      className:"h-20 w-30 md:w-80 px-2 object-contain",
    },
  ];

  return { brandExperienceData };
}
