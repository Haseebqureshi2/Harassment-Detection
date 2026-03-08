export default function AttachmentItem({
  fileName,
  description,
  bgColor,
  iconColor
}) {
  return (
    <div className="flex items-center gap-3 bg-white p-3 rounded-lg border border-gray-200">
      <div
        className={`w-10 h-10 ${bgColor} rounded-lg flex items-center justify-center`}
      >
        <svg
          className={`w-5 h-5 ${iconColor}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div>
        <p className="font-medium text-gray-800">{fileName}</p>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
}
