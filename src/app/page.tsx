"use client";

import AboutMe from "@/app/_components/about-me";
import Education from "@/app/_components/education";
import Footer from "@/app/_components/footer";
import Header from "@/app/_components/header";
import Main from "@/app/_components/main";
import Projects from "@/app/_components/projects";
import Techs from "@/app/_components/techs";

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
