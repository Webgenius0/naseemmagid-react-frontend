import { AllImages } from "@/components/AllImages/AllImages";
import React from "react";

export default function useReviewsData() {
  const reviews = [
    {
      name: "Derek Hill",
      rating: 5,
      review:
        "Really impressed by the attention to detail and support. Carlos, Rachel, and Alex \u2014 you guys are rockstars. Appreciate the quick responses and clarity every step of the way.",
      date: "November 11, 2024",
      type: "Agency",
      image: AllImages.avater7,
    },
    {
      name: "Sophie Lane",
      rating: 5,
      review:
        "The whole team at Nexal has been incredible. From our very first call to ongoing campaign updates, we\u2019ve felt fully supported. Special shoutout to Rachel, Nas, and Carlos.",
      date: "July 17, 2025",
      type: "Agency",
      image: AllImages.avater8,
    },
    {
      name: "Brent Walker",
      rating: 5,
      review:
        "Alex really took the time to understand our business. Felt like working with someone on the inside, not just an agency.",
      date: "November 29, 2024",
      type: "Agency",
      image: AllImages.avater9,
    },
    {
      name: "Tina Marsh",
      rating: 5,
      review:
        "The level of support we received from Nexal has been amazing. Special thanks to Carlos for keeping everything clear and moving.",
      date: "June 14, 2025",
      type: "Agency",
      image: AllImages.avater10,
    },
    {
      name: "Sophia Adams",
      rating: 5,
      review:
        "Fantastic experience so far. The team really understands eCommerce and how to scale.",
      date: "August 10, 2025",
      type: "Agency",
      image: AllImages.avater11,
    },
    {
      name: "Lily Jameson",
      rating: 5,
      review:
        "Sales are up, ads are working, and support is solid. That\u2019s all I could ask for.",
      date: "February 8, 2025",
      type: "Agency",
      image: AllImages.avater12,
    },
    {
      name: "Jaxon Reid",
      rating: 5,
      review:
        "We've grown more in the last 3 months than we did all of last year.",
      date: "January 7, 2025",
      type: "Agency",
      image: AllImages.avater13,
    },
    {
      name: "Jason Lim",
      rating: 5,
      review:
        "Big thanks to Nas and the Nexal team. What stood out was how well they understood our business from the start. The landing page they delivered converted better than anything we\u2019ve run before.",
      date: "April 30, 2025",
      type: "Agency",
      image: AllImages.avater14,
    },
    {
      name: "Monica Ellis",
      rating: 5,
      review:
        "Our account was messy when we came to Nexal. Elijah cleaned everything up, organized our campaigns, and helped us better communicate our brand story.",
      date: "May 12, 2025",
      type: "Agency",
      image: AllImages.avater1,
    },
    {
      name: "Craig Dawson",
      rating: 5,
      review:
        "Melissa helped us clean up our entire campaign structure and made suggestions that instantly improved performance. So easy to work with.",
      date: "December 23, 2024",
      type: "Agency",
      image: AllImages.avater2,
    },
    {
      name: "Hannah Reeves",
      rating: 5,
      review:
        "I\u2019ve been working with Alex for a couple of months now, and I\u2019m seriously impressed. He\u2019s thoughtful, responsive, and really knows how to translate complex ideas into clean marketing.",
      date: "June 18, 2025",
      type: "Agency",
      image: AllImages.avater3,
    },
    {
      name: "Jasmine King",
      rating: 5,
      review:
        "I\u2019ve worked with a lot of agencies, and Alex has been one of the most consistent and proactive managers I\u2019ve dealt with. Always one step ahead.",
      date: "July 2, 2025",
      type: "Agency",
      image: AllImages.avater4,
    },
    {
      name: "Kate Morgan",
      rating: 5,
      review:
        "It\u2019s rare to find someone like Rachel \u2014 strategic, creative, and reliable. She helped us get clarity on our offer and where to focus next.",
      date: "August 1, 2025",
      type: "Agency",
      image: AllImages.avater5,
    },
    {
      name: "Lauren Matthews",
      rating: 5,
      review:
        "Amazing experience working with the entire Nexal team. Everyone\u2019s been friendly, sharp, and on the ball. Huge thanks to Alex, Rachel, and Nas for making this process so smooth.",
      date: "April 2, 2025",
      type: "Agency",
      image: AllImages.avater6,
    },
    {
      name: "Jason Lee",
      rating: 5,
      review:
        "We've worked with a handful of agencies before, but none were as hands-on as Rachel and Carlos. They checked in regularly, answered our questions, and made sure we understood the 'why' behind every move. This made us feel like true partners in the process.",
      date: "November 16, 2024",
      type: "Agency",
      image: AllImages.avater34,
      
    },
    {
      name: "Ethan Howard",
      rating: 5,
      review:
        "Before Nexal, our ad spend was scattered and unpredictable. Carlos helped us cut wasted costs, restructure our targeting, and create reports we could actually understand. Now, when we need a straight answer, we get it. It's clear on what's happening and where we're headed.",
      date: "July 31, 2024",
      type: "Agency",
      image: AllImages.avater33,
    },
    {
      name: "Sean Douglas",
      rating: 5,
      review:
        "One thing that stood out was the way Nexal communicates. Carlos and Rachel always kept us in the loop, shared updates, and answered our questions quickly. We never had to chase them down like with past agencies.",
      date: "July 25, 2025",
      type: "Agency",
      image: AllImages.avater32,
    },
    {
      name: "Joseph Parker",
      rating: 5,
      review:
        "When Nexal first looked at our ad account, it was clear we had been wasting money for months. Elijah cleaned it up piece by piece, explained where we went wrong, and gave us a fresh structure. Within weeks, sales increased and our return on ad spend actually made sense again.",
      date: "March 29, 2025",
      type: "Agency",
      image: AllImages.avater28,
    },
    {
      name: "Sarah Hamilton",
      rating: 5,
      review:
        "We joined Nexal right before Q4 and honestly we were nervous. We knew it was make or break for us. Alex and Rachel put a strategy that prioritized our best products and retargeted past buyers. We had our biggest holiday season yet and now we feel like growth is sustainable, not just lucky timing.",
      date: "February 18, 2025",
      type: "Agency",
      image: AllImages.avater27,
    },
    {
      name: "Rachel Simmons",
      rating: 5,
      review:
        "Our ads felt like they were running in circles until Nas showed us how to segment audiences properly. He built a retargeting strategy that matched buyer intent, and suddenly our creative finally clicked with the right people. Watching warm traffic turn into repeat buyers showed us how powerful the system really is.",
      date: "December 16, 2024",
      type: "Agency",
      image: AllImages.avater26,
    },
    {
      name: "Mia Gonzalez",
      rating: 5,
      review:
        "We thought it would take weeks for an outside agency to understand our niche, but Rachel nailed it almost instantly. She picked up on customer language and buying triggers that even we had overlooked. The ads she built felt like they were written by insiders.",
      date: "March 6, 2025",
      type: "Agency",
      image: AllImages.avater22,
    },
    {
      name: "Brandon Miller",
      rating: 5,
      review:
        "Before Nexal, our team dreaded looking at ad reports. We were stressed and confused about where the money was going. Carlos and Elijah took over, brought clarity, and gave us the breathing room we needed. It's hard to explain how much pressure that lifted.",
      date: "December 9, 2024",
      type: "Agency",
      image: AllImages.avater21,
    },
    {
      name: "Nicole Adams",
      rating: 5,
      review:
        "Other agencies we worked with gave us short-term spikes followed by long droughts. Nexal's approach has been steady and consistent. Month after month, the numbers keep trending upward. That reliability has been more valuable than any one-time win.",
      date: "October 18, 2024",
      type: "Agency",
      image: AllImages.avater20,
    },
    {
      name: "Jason Adams",
      rating: 5,
      review:
        "Our store averaged 25K a week before Nexal. Within two months we were hitting 55K consistently. Nas and Elijah built the funnel that made it happen.",
      date: "May 16, 2025",
      type: "Agency",
      image: AllImages.avater16,
    },
    {
      name: "Hannah Peters",
      rating: 5,
      review:
        "Before Nexal, only about 18 percent of our customers came back to buy again. With Carlos' retargeting and Melissa's email capture system, that number is now over 63 percent. Our returning customer sales have more than doubled.",
      date: "May 26, 2025",
      type: "Agency",
      image: AllImages.avater15,
    },
    {
      name: "Tyler Brooks",
      rating: 5,
      review:
        "Melissa really took the time to break everything down for us. Our campaigns were messy and scattered, and she not only cleaned them up but also explained why the changes mattered. Within a few weeks, we started seeing a noticeable lift in performance. What I liked most was how approachable she was even when the ad specifications were too small.",
      date: "July 2, 2025",
      type: "Agency",
      image: AllImages.avater44,
    },
    {
      name: "Robert King",
      rating: 5,
      review:
        "Our marketing was all over the place before we partnered with Nexal. Carlos stepped in and immediately brought order to the chaos. He kept the account structured, walked us through every change as we understood the process, and gave us the confidence to trust the numbers again. With this guidance, we finally felt like our marketing was in good hands.",
      date: "November 22, 2024",
      type: "Agency",
      image: AllImages.avater40,
    },
    {
      name: "Ashley Morgan",
      rating: 5,
      review:
        "In just three months with Nexal, we've seen more growth than we did in the entire year before. Their team tests, refines, and scales in a way that actually works. We finally feel like we have a partner who cares about results as much as we do.",
      date: "October 12, 2024",
      type: "Agency",
      image: AllImages.avater39,
    },
    {
      name: "Kevin Ross",
      rating: 5,
      review:
        "Elijah reset our ad account and gave us a clear strategy moving forward. He cleaned up years of mistakes, organized everything, and even helped us improve our messaging. The impact on performance was immediate and noticeable.",
      date: "May 6, 2025",
      type: "Agency",
      image: AllImages.avater38,
    },
    {
      name: "Jenna Morales",
      rating: 5,
      review:
        "When we came to Nexal, our ads were eating up budget with little to show for it. Melissa walked us through where the leaks were. She didn't just patch anything; she actually understood what she was changing. Within a month, performance picked up and we felt like things were finally working again.",
      date: "August 5, 2025",
      type: "Agency",
      image: AllImages.avater31,
    },
    {
      name: "Claire Walsh",
      rating: 5,
      review:
        "Our product launch last spring was a flop and it shook our confidence. Rachel and Nas jumped in, showed us what went wrong, and restructured the entire offer. They even helped us write new copy that spoke directly to our buyers. When we relaunched with their system, it turned into our most profitable quarter to date.",
      date: "June 17, 2025",
      type: "Agency",
      image: AllImages.avater30,
    },
    {
      name: "Natalie Fox",
      rating: 5,
      review:
        "Our brand story was getting lost because we were trying to speak to everyone. Rachel helped us narrow in on who our best buyers really were. She reworked our messaging so it felt personal instead of generic. The response from customers was immediate and it completely shifted how we approach our marketing.",
      date: "April 21, 2025",
      type: "Agency",
      image: AllImages.avater29,
    },
    {
      name: "Tyler Hunt",
      rating: 5,
      review:
        "Before Nexal, we worked with a big-name agency that made us feel like a small fish. With Alex and Carlos, it was different. They were available, honest, and focused on us, not just numbers on a report. That partnership gave us results but also gave us confidence that someone actually cared about our growth.",
      date: "November 7, 2024",
      type: "Agency",
      image: AllImages.avater25,
    },
    {
      name: "Alicia James",
      rating: 5,
      review:
        "What impressed us most was Nexal's creative. Nas and Rachel brought us to hot new formats and story-driven ads instead of just product shots. The engagement was instant. Our customers finally felt like we were talking to them, not at them.",
      date: "June 13, 2025",
      type: "Agency",
      image: AllImages.avater24,
    },
    {
      name: "David Lee",
      rating: 5,
      review:
        "We had been running ads to cold traffic only and missing out on repeat buyers. Carlos built a retargeting system that followed our visitors from first click to checkout. It felt seamless for prospects and sales from warm audiences skyrocketed. That was the missing piece for us.",
      date: "May 4, 2025",
      type: "Agency",
      image: AllImages.avater23,
    },
    {
      name: "Emily Harper",
      rating: 5,
      review:
        "When Nexal took over our campaigns, our ROAS jumped from 1.8 to 4.5X in just six weeks. Carlos made sure the targeting was tight and the creative matched what they guided the overall strategy. That combination literally doubled our efficiency and gave us the confidence to scale.",
      date: "July 15, 2025",
      type: "Agency",
      image: AllImages.avater19,
    },
    {
      name: "Thomas Steel",
      rating: 5,
      review:
        "In the first 30 days with Nexal, our sales grew 62 percent. The ad spend stayed the same. Elijah fixed the account structure, cleaned up wasteful campaigns, and got everything off almost immediately. Seeing that kind of growth without overspending was the proof we needed that we chose the right agency.",
      date: "June 2, 2025",
      type: "Agency",
      image: AllImages.avater18,
    },
    {
      name: "Kevin Morris",
      rating: 5,
      review:
        "Our monthly sales jumped from 40K to 140K after Nexal rebuilt our campaigns. Alex and Rachel structured everything around high-intent buyers, and the increase was immediate.",
      date: "July 21, 2025",
      type: "Agency",
      image: AllImages.avater17,
    },
    {
      name: "Mark Diaz",
      rating: 5,
      review:
        "We noticed right away how proactive Alex is. Instead of waiting for us to zero problems, he goes issues early and already has solutions ready. That kind of foresight has saved our team time and money.",
      date: "May 19, 2025",
      type: "Agency",
      image: AllImages.avater43,
    },
    {
      name: "Olivia Hayes",
      rating: 5,
      review:
        "Carlos, Rachel, and Alex have been incredible to work with. They don't just share reports they just the time to explain what's happening so our whole team is on the same page. That kind of communication is rare and very appreciated.",
      date: "February 28, 2025",
      type: "Agency",
      image: AllImages.avater42,
    },
    {
      name: "Patrick Long",
      rating: 5,
      review:
        "With Nexal, our group always feels supported. Rachel, Nas, and Carlos keep us updated regularly, and their follow through has been consistent since day one. They make us feel like we're all working on the same team.",
      date: "January 20, 2025",
      type: "Agency",
      image: AllImages.avater41,
    },
    {
      name: "Daniel Cruz",
      rating: 5,
      review:
        "We'd been stuck for months trying to figure out why our sales plateaued. Rachel came in and showed us how to reposition our offers and speak to the right audience. The clarity she brought to our team was exactly what we needed and the sales uptick proved it.",
      date: "May 9, 2025",
      type: "Agency",
      image: AllImages.avater37,
    },
    {
      name: "Emily White",
      rating: 5,
      review:
        "Working with Nexal has felt different from every other agency we've tried. Alex and Nas made us feel like partners from day one. They weren't pushy, they listened, adjusted, and helped us build campaigns that actually fit our brand. Working with them over the past five months, everything we set up, they weren't pushy they listened, adjusted, and helped us build campaigns that actually fit our brand.",
      date: "April 27, 2025",
      type: "Agency",
      image: AllImages.avater36,
    },
    {
      name: "Olivia Hart",
      rating: 5,
      review:
        "Nas really impressed us with his ability to see the bigger picture. He connected the dots between ads, landing pages, and retargeting in a way no one else had. For the first time, our marketing didn't feel random. It felt like a system.",
      date: "December 5, 2024",
      type: "Agency",
      image: AllImages.avater35,
    },
  ];

  return { reviews };
}
