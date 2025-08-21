import React from "react";
import Container from "../Common/Container";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const items = [
  {
    title: "What does a digital marketing agency actually do?",
    content:
      "A great digital marketing partner takes the time to truly understand your business. At Nexal Media, we analyze your website traffic, identify the best platforms to invest in, and continually refine your strategy to ensure you’re striking the right balance between ad spend and the results you’re seeing. But we don’t stop there. Unlike most agencies, we’re not just here to “maintain” your marketing. Our mission is to outsmart your competitors, turn more of your visitors into paying customers, and deliver the highest ROI possible with strategies proven to work for eCommerce brands",
  },
  {
    title: "How do I know that I will get a return on my investment?",
    content:
      "Yes. It comes with default styles that matches the other components' aesthetic.",
  },
  {
    title: "Do you work with big or small companies?",
    content:
      "Yes. It's animated by default, but you can disable it if you prefer.",
  },
  {
    title: "Why is nexal media the best digital marketing agency?",
    content:
      "Yes. It's animated by default, but you can disable it if you prefer.",
  },
  {
    title: "Can you guarantee results?",
    content:
      "Yes. It's animated by default, but you can disable it if you prefer.",
  },
  {
    title: "Whats involved with digital marketing?",
    content:
      "Yes. It's animated by default, but you can disable it if you prefer.",
  },
];

export default function GotQuestions() {
  return (
    <div className="mt-[40px] lg:mt-[80px] pb-[40px] lg:pb-[100px]">
      <Container>
        <div className="text-[45px] md:text-[50px] lg:text-[64px] text-TertiaryBlack font-black text-center leading-14 lg:leading-[76.8px]">
          YOU'VE GOT QUESTIONS,
          <br /> WE'VE GOT ANSWERS.
        </div>
        <div className="mt-12">
          <Accordion
            type="single"
            collapsible
            className="my-4 w-full space-y-4"
          >
            {items.map(({ title, content }, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-none rounded-md px-4 bg-secondary "
              >
                <AccordionTrigger className="text-xl text-TertiaryBlack font-semibold">{title}</AccordionTrigger>
                <AccordionContent className="text-[#343E56] text-base font-normal">{content}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </div>
  );
}
