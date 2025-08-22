import React from "react";
import Container from "../Common/Container";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// faq data
const items = [
  {
    title: "What does a digital marketing agency actually do?",
    content: `A great digital marketing partner takes the time to truly understand your business. At Nexal Media, we analyze your website traffic, identify the best platforms to invest in, and continually refine your strategy to ensure you’re striking the right balance between ad spend and the results you’re seeing.
But we don’t stop there. Unlike most agencies, we’re not just here to “maintain” your marketing. Our mission is to outsmart your competitors, turn more of your visitors into paying customers, and deliver the highest ROI possible with strategies proven to work for eCommerce brands.
`,
  },
  {
    title: "How do I know that I will get a return on my investment?",
    content:
      "because at Nexal Media, we put our money where our mouth is and back it up with BIG guarantees that most marketing agencies won’t touch. ",
  },
  {
    title: "Do you work with big or small companies?",
    content: `Are you ready to scale your store and dominate your market? Nexal Media can work with you.
Want to plug into a team of eCommerce growth experts, marketers, ad strategists, designers, and developers who know how to hit your sales targets and deliver the kind of ROI that makes you want to shout about it? We can work with you.
Do you understand the power of turning $1 into $5 (or more)? We can work with you.
It doesn’t matter if you’re a growing Shopify store or an established eCommerce brand. Our clients range from small businesses with just a few team members to large online retailers with hundreds of staff, serving customers all over the world.
`,
  },
  {
    title: "Why is nexal media the best digital marketing agency?",
    content: ` Why are burritos delicious? Why is water wet? No, but seriously. Instead of using this section to hit you with a bunch of hype, let’s just say this… marketers can talk all day, but numbers tell the truth.
So instead of trying to convince you we’re the best eCommerce growth partner, here are the stats:
•	$1.8 billion in sales generated for clients
•	184 different industries and niches served
•	1,034 reviews (average of 4.7 stars)
•	Ranked among the fastest growing companies in our category
•	#1 fastest growing agency 3 years in a row
Most marketing agencies talk a big game, but when you look closer, they don’t even use the strategies they sell, whether it’s Facebook ads, Google ads, or funnels, to grow their own business.
That’s your sign to run.
If you want to work with an agency that practices what it preaches, you should check out our reviews and see what real eCommerce brands say about working with Nexal Media.
`,
  },
  {
    title: "Can you guarantee results?",
    content:
      "We offer guarantees for every traffic source we manage. Whether it’s Facebook Ads, Google Ads, or other paid media, we put our money where our mouth is. If we don’t hit the agreed-upon targets, we don’t get paid.",
  },
  {
    title: "Whats involved with digital marketing?",
    content: `This is like asking “how long is a piece of string” because there’s no single answer. It depends on your business. At Nexal Media, we treat every brand differently because no two businesses, even in the same industry, are exactly alike.
Let’s apply that to you and your biggest competitor. Sure, you might target the same audience and sell a similar product, but their website could be older or newer than yours, have more or fewer backlinks, or convert better or worse. They might benefit more from Google Ads while you might get bigger wins from a strong content and retargeting strategy. The differences go on and on.
The key takeaway is that one size does not fit all. That’s why we create custom strategies for every client, tailored to their exact needs. Our goal is to skyrocket your online presence and we’ll do whatever it takes to make that happen.
`,
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
                <AccordionTrigger className="text-xl text-TertiaryBlack font-semibold">
                  {title}
                </AccordionTrigger>
                <AccordionContent className="text-[#343E56] text-base font-normal">
                  {content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </div>
  );
}
