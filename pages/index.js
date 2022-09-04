import Navbar from "../components/Navbar"
import ProjectsSection from "../components/ProjectsSection"
import SectionSeparator from "../components/SectionSeparator"
import TechnologiesSection from "../components/TechnologiesSection"
import HomeSection from "../components/HomeSection"
import { faReact, faJs, faJava, faPython, faCss3, faHtml5 } from "@fortawesome/free-brands-svg-icons"
import Footer from "../components/Footer"
import Head from "next/head"

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
      link: "https://github.com/ezegonmac/dp1-2021-2022-l8-1/",
      img: "/projects/sevenislands.jpg"
    },
  ]

  const technologies = {
    Languages:
    [
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
        name: "Python",
        color: "gold",
        icon: faPython,
        link: "/",
      },
      {
        name: "SQL",
        color: "red",
        img: "/technologies/sql.png",
        link: "/",
      },
      {
        name: "C",
        color: "dodgerblue",
        icon: null,
        img: "/technologies/c.png",
        link: "/",
      },
      {
        name: "R",
        color: "lightgreen",
        icon: null,
        img: "/technologies/r.png",
        link: "/",
      },
      {
        name: "Html",
        color: "darkorange",
        icon: faHtml5,
        link: "/",
      },
      {
        name: "Css",
        color: "royalblue",
        icon: faCss3,
        link: "/",
      },
    ],
    React:
    [  
      {
        name: "React",
        color: "cornflowerblue",
        icon: faReact,
        link: "/",
      },
      {
        name: "Next JS",
        color: "mediumseagreen",
        icon: null,
        img: "/technologies/next.png",
        link: "/",
      },    
      {
        name: "Styled Components",
        color: "hotpink",
        icon: null,
        img: "/technologies/styled-components.png",
        link: "/",
      },
      {
        name: "React Router",
        color: "orangered",
        icon: null,
        img: "/technologies/react-router.png",
        link: "/",
      },
      {
        name: "Redux",
        color: "palevioletred",
        icon: null,
        img: "/technologies/redux.png",
        link: "/",
      },
    ],
    Spring:
    [
      {
        name: "Spring",
        color: "mediumseagreen",
        img: "/technologies/spring.png",
        link: "/",
      },
    ],
  }

  return (
    <div style={{backgroundColor: "grey", height: "100vh"}}>
      <Head>
        <title>ezegonmac</title>
      </Head>

      <Navbar/>

      <HomeSection/>

      <ProjectsSection projects={projects}/>

      <TechnologiesSection technologyGroups={technologies}/>
      <SectionSeparator type="Technologies"/>

      <Footer/>
    </div>
  )
}
