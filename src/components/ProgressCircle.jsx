function ProgressCircle({ percentage, title, grams }) {
  const radius = 25;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference - (circumference * percentage) / 100;

  const roundedPercentage = Math.round(percentage);

  return (
    <div className="text-center mb-6">
      <div className="w-28 h-28 flex items-center justify-center mx-auto md:mx-auto">
        <svg className="w-full h-full" viewBox="0 0 60 60">
          {/* Background circle */}
          <circle
            className="text-gray-200 stroke-current"
            strokeWidth="4"
            cx="30"
            cy="30"
            r={radius}
            fill="transparent"
          ></circle>
          {/* Progress circle */}
          <circle
            className="text-indigo-500 stroke-current"
            strokeWidth="4"
            strokeLinecap="round"
            cx="30"
            cy="30"
            r={radius}
            fill="transparent"
            strokeDashoffset={dashOffset}
            strokeDasharray={circumference}
          ></circle>
          {/* Text */}
          <text
            x="30"
            y="30"
            fontSize="10"
            textAnchor="middle"
            alignmentBaseline="middle"
            fontFamily="Verdana"
            className="text-gray-900"
          >
            {roundedPercentage}%
          </text>
        </svg>
      </div>
      <div className="mt-1">
        <span className="text-gray-600">
          {title}, {grams}g
        </span>
      </div>
    </div>
  );
}

export default ProgressCircle;
