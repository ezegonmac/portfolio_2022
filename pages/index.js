import Navbar from "../components/Navbar"
import ProjectsSection from "../components/ProjectsSection"
import SectionSeparator from "../components/SectionSeparator"
import TechnologiesSection from "../components/TechnologiesSection"
import WelcomeSection from "../components/WelcomeSection"
import { faReact, faJs, faJava, faPython } from "@fortawesome/free-brands-svg-icons"
import Footer from "../components/Footer"

export default function Home() {

  const projects = [
    {
      title: "Portfolio 2022",
      link: "https://github.com/ezegonmac/portfolio_2022",
      img: "/projects/portfolio.png"
    },
    {
      title: "Reactive TikTakToe",
      link: "https://ezegonmac.github.io/React-TikTakToe",
      img: "/projects/tiktaktoe.png"
    },
    {
      title: "Mandelbulb",
      link: "https://ezegonmac.github.io/3d-curves/",
      img: "/projects/mandelbulb.png"
    },
    {
      title: "Weights",
      link: "https://ezegonmac.github.io/weights_react/",
      img: "/projects/weights.png"
    },
    {
      title: "The Game Of Life",
      link: "https://codepen.io/ezquielgon2/pen/zYZmvmZ",
      img: "/projects/gameoflife.png"
    },
    {
      title: "React Gallery",
      link: "https://github.com/ezegonmac/react-gallery/",
      img: "/projects/reactgallery.png"
    },
    {
      title: "Seven Islands",
      link: "https://github.com/gii-is-DP1/dp1-2021-2022-l8-1/",
      img: "/projects/sevenislands.jpg"
    },
  ]

  const technologies = [
    {
      name: "React",
      color: "lightblue",
      icon: faReact,
      link: "/",
    },
    {
      name: "Next JS",
      color: "lightgreen",
      icon: "Logo.jpg",
      link: "/",
    },
    {
      name: "Javascript",
      color: "violet",
      icon: faJs,
      link: "/",
    },
    {
      name: "Java",
      color: "orange",
      icon: faJava,
      link: "/",
    },
    {
      name: "C",
      color: "coral",
      icon: "Logo.jpg",
      link: "/",
    },
    {
      name: "Python",
      color: "yellow",
      icon: faPython,
      link: "/",
    },
    {
      name: "C#",
      color: "coral",
      icon: "Logo.jpg",
      link: "/",
    },
    {
      name: "R",
      color: "lightgreen",
      icon: "Logo.jpg",
      link: "/",
    },
  ]

  return (
    <div style={{backgroundColor: "grey", height: "100vh"}}>
      <Navbar/>

      <WelcomeSection/>
      <SectionSeparator type="Welcome"/>

      <ProjectsSection projects={projects}/>

      <TechnologiesSection technologies={technologies}/>

      <Footer/>
    </div>
  )
}
