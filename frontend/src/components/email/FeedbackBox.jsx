import StarRating from "./StarRating";

export default function FeedbackBox({ data }) {
  return (
    <div className="border border-emerald-200 bg-emerald-50 rounded-lg p-5 mb-6">
      <p className="text-sm text-emerald-700 mb-4 font-medium">
        YOUR FEEDBACK
      </p>

      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="text-sm text-gray-600">Accuracy</span>
          <StarRating rating={data.accuracyRating} />
        </div>

        <div className="flex justify-between">
          <span className="text-sm text-gray-600">Usefulness</span>
          <StarRating rating={data.usefulnessRating} />
        </div>

        <div className="flex justify-between">
          <span className="text-sm text-gray-600">Recommend</span>
          <StarRating rating={data.recommendRating} />
        </div>

        {data.feedbackComment && (
          <div className="pt-3 border-t border-emerald-200">
            <p className="text-sm text-gray-600 mb-1">Your comment:</p>
            <p className="italic text-gray-800">
              "{data.feedbackComment}"
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
