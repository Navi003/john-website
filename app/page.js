import AboutMeSection from "./components/AboutMeSection";

import HeroImage from "./components/HeroImage";
import ResponsiveContainer from "./components/ResponsiveContainer";
import SectionHeading from "./components/SectionHeading";
import WelcomeSection from "./components/WelcomeSection";

export default function Home() {
  return (
    <main>
      <HeroImage />
      <div className="bg-primary w-full mt-16 md:mt-0 py-2 px-10">
        <ResponsiveContainer>
          <h2 className="text-gray-light text-xl">Welcome</h2>
        </ResponsiveContainer>
      </div>
      <WelcomeSection />

      <SectionHeading>About me</SectionHeading>
      <AboutMeSection />
    </main>
  );
}
