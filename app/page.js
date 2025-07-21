import ColorBoxes from "./components/ColorBoxes";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-primary font-bold text-8xl">
        Master English with Confidence
      </h1>
      <ColorBoxes />
      <p className="text-gray-medium max-w-xl ">
        Flexible, practical courses designed for adults. Learn at your pace with
        expert guidance.
      </p>
      <button className="mt-6 bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-lg transition color-primary">
        <div
          className="w-24 h-24 bg- rounded shadow bg-pri"
          title="primary-dark"
        />
        Get Started
      </button>
    </main>
  );
}
