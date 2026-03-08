export default function FeatureCard({
  title,
  description,
  icon,
}) {
  return (
    <div
      className="
        w-70
        shrink-0
        flex
        items-start
        gap-4
        p-6
        rounded-2xl
        bg-white
        border
        border-gray-100
        shadow-sm
        transition-all
        duration-300
        cursor-pointer
        hover:-translate-y-2
        hover:scale-105
        hover:shadow-xl
      "
    >

      <div className="
        w-10
        h-10
        flex
        items-center
        justify-center
        rounded-lg
        bg-gray-50
        transition-all
        duration-300
        group-hover:bg-gray-100
      ">
        {icon}
      </div>

      <div>
        <h3 className="font-semibold text-gray-900 text-sm mb-1">
          {title}
        </h3>
        <p className="text-xs text-gray-500 leading-relaxed">
          {description}
        </p>
      </div>

    </div>
  );
}
