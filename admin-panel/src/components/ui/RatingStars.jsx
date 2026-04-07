import { Star } from "lucide-react";

export default function RatingStars({ value }) {
  return (
    <div className="flex gap-1 justify-center">
      {[1,2,3,4,5].map((star) => (
        <Star
          key={star}
          size={16}
          className={
            star <= value
              ? "fill-amber-400 text-amber-400"
              : "text-gray-300"
          }
        />
      ))}
    </div>
  );
}