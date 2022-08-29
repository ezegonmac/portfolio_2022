import Navbar from "../components/Navbar";
import ProjectsSection from "../components/ProjectsSection";
import SectionSeparator from "../components/SectionSeparator";
import WelcomeSection from "../components/WelcomeSection";

export default function Home() {

  const projects = [
    {
      title: "Proyecto 1",
      link: "/",
      img: "/Logo.jpg"
    },
    {
      title: "Proyecto 2",
      link: "/",
      img: "/Logo.jpg"
    },
    {
      title: "Proyecto 3",
      link: "/",
      img: "/Logo.jpg"
    },
    {
      title: "Proyecto 4",
      link: "/",
      img: "/Logo.jpg"
    },
  ]

  return (
    <div style={{backgroundColor: "grey", height: "100vh"}}>
      <Navbar/>
      <WelcomeSection/>
      <SectionSeparator type="Welcome"/>
      <ProjectsSection projects={projects}/>
    </div>
  )
}
