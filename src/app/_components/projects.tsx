"use client";

import ProjectItem from "@/app/_components/project-item";
import type { Project } from "@/types/Project";
import { useEffect, useState } from "react";
import Section from "./section";

const Projects = () => {
  const [repos, setRepos] = useState<Project[]>([]);

  useEffect(() => {
    const loadRepos = async () => {
      const res = await fetch("https://api.github.com/users/xandebnd/repos");

      const data = await res.json();

      setRepos(data);
    };

    loadRepos();
  }, []);

  return (
    <Section id="projetos" data-aos="fade-up" data-aos-duration="1000">
      <h2 className="mb-8 text-center text-4xl font-bold">Projetos</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {repos
          .filter(({ description }) => description)
          .slice(0, 6)
          .map((project) => (
            <ProjectItem project={project} key={project.id} />
          ))}
      </div>
    </Section>
  );
};

export default Projects;
