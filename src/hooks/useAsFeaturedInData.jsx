import { AllImages } from "@/components/AllImages/AllImages";

export default function useAsFeaturedInData() {
  const featuredInData = [
   
    {
      id: 1,
      name: "Prime",
      svg: AllImages.logo6,
    },
    {
      id: 2,
      name: "Trustpilot",
      svg: AllImages.logo7,
    },
    {
      id: 3,
      name: "Webflow",
      svg: AllImages.logo8,
    },
    {
      id: 4,
      name: "Airbnb",
      svg: AllImages.logo9,
    },
    {
      id: 5,
      name: "Tina",
      svg: AllImages.logo10,
    },
    {
      id: 6,
      name: "Stackoverflow",
      svg: AllImages.logo11,
    },
    {
      id: 7,
      name: "mistral",
      svg: AllImages.logo12,
    },
  ];

  return { featuredInData };
}
