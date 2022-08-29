import Navbar from "../components/Navbar";
import SectionSeparator from "../components/SectionSeparator";
import WelcomeSection from "../components/WelcomeSection";

export default function Home() {
  return (
    <div style={{backgroundColor: "grey", height: "100vh"}}>
      <Navbar/>
      <WelcomeSection/>
      <SectionSeparator type="Welcome"/>
    </div>
  )
}
