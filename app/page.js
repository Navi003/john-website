import AboutMeSection from "./components/AboutMeSection";
import ColorBoxes from "./components/ColorBoxes";
import HeroImage from "./components/HeroImage";
import SectionHeading from "./components/SectionHeading";
import WelcomeSection from "./components/WelcomeSection";

export default function Home() {
  return (
    <main>
      <HeroImage />
      <SectionHeading>Welcome</SectionHeading>
      <WelcomeSection />
      <SectionHeading>About me</SectionHeading>
      <AboutMeSection />
    </main>
  );
}
