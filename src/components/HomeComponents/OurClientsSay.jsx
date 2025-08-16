import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import { useState } from "react";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "Loved working with Nas — super organized andalways on point with creative ideas. Made the whole process way less stressful",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];


// ⭐ Reusable StarRating component
function StarRating({ rating, totalStars = 5 }) {
  return (
    <div className="flex space-x-1">
      {[...Array(totalStars)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <Star
            key={ratingValue}
            className={`h-6 w-6 cursor-pointer ${
              rating >= ratingValue
                ? "text-yellow-400 fill-yellow-400"
                : "text-gray-300"
            }`}
          />
        );
      })}
    </div>
  );
}

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  const [rating, setRating] = useState(4);
  const [hoveredRating, setHoveredRating] = useState(null);
  return (
    <figure
      className={cn(
        "relative h-full w-[424px] cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="52" height="52" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className=" font-medium dark:text-white text-lg ">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <div className="flex space-x-1 my-4">
        {[1, 2, 3, 4, 5].map((ratingValue) => (
          <Star
            key={ratingValue}
            className={`h-6 w-6 cursor-pointer ${
              (
                hoveredRating !== null
                  ? hoveredRating >= ratingValue
                  : rating !== null && rating >= ratingValue
              )
                ? "text-yellow-400 fill-yellow-400"
                : "text-gray-300"
            }`}
          />
        ))}
      </div>
      <blockquote className="mt-2 text-base">{body}</blockquote>
      <div className="flex justify-between mt-4">
        <p>February 28, 2024</p>
        <Link className="text-red-500 cursor-pointer font-bold">Agency</Link>
      </div>
    </figure>
  );
};

export function OurClientsSay() {
  return (
    <div className="py-[130px]">
      <h1 className="text-TertiaryBlack text-3xl font-semibold text-center">
        What our Clients Say about us
      </h1>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-[64px] gap-y-8">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
      </div>
      <div className="flex justify-center">
        <button className=" buttonheartbeat rounded-md bg-PrimaryColor px-8 py-4 text-sm font-semibold text-TertiaryBlack cursor-pointer">
          View All
        </button>
        <div></div>
      </div>
    </div>
  );
}
