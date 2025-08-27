import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import Verified from "../SVG/Verified";
import useReviewsData from "@/hooks/useReviewsData";

// ⭐ Reusable StarRating component
function StarRating({ rating = 4, totalStars = 5 }) {
  return (
    <div className="flex space-x-1 my-4">
      {Array.from({ length: totalStars }, (_, i) => (
        <Star
          key={i}
          className={cn(
            "h-5 md:h-5 w-5 md:w-5",
            rating > i ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
          )}
        />
      ))}
    </div>
  );
}

const ReviewCard = ({ image, name, review, date, type, rating = 4 }) => {
  return (
    <figure
      className={cn(
        "relative w-[300px] lg:w-[424px] h-full rounded-xl border p-4 cursor-pointer overflow-hidden",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:shadow-md  duration-300",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      {/* User Info */}

      <div className="">
        <div className="flex items-center gap-2">
          <img
            className="rounded-full"
            width="52"
            height="52"
            alt={name}
            src={image}
          />
          <div>
            <figcaption className="text-lg font-medium dark:text-white flex items-center gap-1">
              {name}
              <Verified />
            </figcaption>{" "}
          </div>
        </div>

        {/* Star Rating */}
        <StarRating rating={rating} />
      </div>

      {/* Review Body */}
      <blockquote className="mt-2 text-sm md:text-base">{review}</blockquote>

      {/* Footer */}
      <div className="flex justify-between mt-4 text-sm">
        <p className="text-gray-500">{date}</p>
        <Link className="text-red-500 font-bold">{type}</Link>
      </div>
    </figure>
  );
};

export function OurClientsSay() {
  const { reviews } = useReviewsData();

  const mid = Math.ceil(reviews.length / 2);
  const firstRow = reviews.slice(0, mid);
  const secondRow = reviews.slice(mid);

  return (
    <section className="py-[20px] md:py-[100px]">
      <h1 className="text-center text-3xl font-semibold text-TertiaryBlack">
        What our Clients Say about us
      </h1>

      {/* Reviews Marquee */}
      <div className="relative flex flex-col items-center justify-center gap-y-8 py-8 lg:py-[64px] w-full overflow-hidden">
        <Marquee pauseOnHover className="[--duration:60s]">
          {firstRow.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:70s]">
          {secondRow.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </Marquee>

        {/* Gradient Fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background hidden md:block" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background hidden md:block" />
      </div>

      {/* View All Button */}
      <div className="flex justify-center">
        <button className="buttonheartbeat rounded-md bg-PrimaryColor px-8 py-4 text-sm font-semibold text-TertiaryBlack cursor-pointer">
          View All
        </button>
      </div>
    </section>
  );
}
