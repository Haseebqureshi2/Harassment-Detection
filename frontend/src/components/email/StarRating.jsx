export default function StarRating({ rating }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          style={{ color: star <= rating ? "#FBBF24" : "#D1D5DB" }}
        >
          ★
        </span>
      ))}
      <span className="text-sm text-gray-500 ml-2">{rating}/5</span>
    </div>
  );
}
