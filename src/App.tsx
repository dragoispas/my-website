import { ThemeRail } from "./Components/ThereRail";
import HeroSection from "./Sections/HeroSection";
import AboutSection from "./Sections/AboutSection";
import ExperienceSection from "./Sections/ExperienceSection";
import EducationSection from "./Sections/EducationSection";
import Separator from "./Components/Separator";
import FooterSection from "./Sections/FooterSection";

function App() {
  return (
    <>
      <HeroSection/>
      <ThemeRail/>
      <AboutSection/>
      <ExperienceSection/>
      <EducationSection/>
      <Separator/>
      <FooterSection/>
    </>
  )
}

export default App
