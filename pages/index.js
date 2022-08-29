import Navbar from "../components/Navbar";
import WelcomeSection from "../components/WelcomeSection";

export default function Home() {
  return (
    <div style={{backgroundColor: "grey", height: "100vh"}}>
      <Navbar/>
      <WelcomeSection/>
    </div>
  )
}
