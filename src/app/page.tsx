"use client";

import AboutMe from "@/components/about-me";
import Education from "@/components/education";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Main from "@/components/main";
import Projects from "@/components/projects";
import Techs from "@/components/techs";

export default function Home() {
  return (
    <>
      <Header />
      <Main>
        <AboutMe />
        <Projects />
        <Education />
        <Techs />
      </Main>
      <Footer />
    </>
  );
}
