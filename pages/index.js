import { AnimatePresence } from "framer-motion"
import Head from "next/head"
import Footer from "../components/Footer"
import HomeSection from "../components/HomeSection"
import Navbar from "../components/Navbar"
import ProjectsSection from "../components/ProjectsSection"
import SectionSeparator from "../components/SectionSeparator"
import TechnologiesSection from "../components/TechnologiesSection"
import TechnologyModal from "../components/TechnologyModal"
import { useModalContext } from "../context/TechnologyModalContext"
import projects from "../data/projects"
import technologies from "../data/technologies"

export default function Home() {

  const {modalIsOpen} = useModalContext()

  return (
    <div style={{position: "relative"}}>
      <Head>
        <title>ezegonmac</title>
      </Head>

      <Navbar/>

      <AnimatePresence initial={false} wait={true} onExitComplete={() => null}>
        {modalIsOpen && <TechnologyModal technologies={technologies}/>}
      </AnimatePresence>

      <HomeSection/>

      <ProjectsSection projects={projects}/>

      <TechnologiesSection technologyGroups={technologies}/>
      <SectionSeparator type="Technologies"/>

      <Footer/>
    </div>
  )
}
