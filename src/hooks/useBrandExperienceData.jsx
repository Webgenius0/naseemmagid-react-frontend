import { AllImages } from "@/components/AllImages/AllImages";

export default function useBrandExperienceData() {
  const brandExperienceData = [
   
    {
      id: 1,
      name: "Prime",
      svg: AllImages.logo5,
    },
    {
      id: 2,
      name: "Trustpilot",
      svg: AllImages.logo4,
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

  return { brandExperienceData };
}
