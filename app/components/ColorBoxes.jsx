// ColorBoxes.jsx
export default function ColorBoxes() {
  const colors = [
    "bg-primary",
    "bg-primary-dark",
    "bg-primary-light",
    "bg-primary-hover",
    "bg-gray-lightest",
    "bg-gray-light",
    "bg-gray-medium",
    "bg-gray-dark",
    "bg-accent",
    "bg-accent-hover",
  ];

  return (
    <div className="flex flex-wrap gap-4 justify-center p-4">
      {colors.map((colorClass, index) => (
        <div
          key={index}
          className={`${colorClass} w-24 h-24 rounded shadow-lg`} // Ensure backticks here
          title={colorClass}
        />
      ))}
    </div>
  );
}
