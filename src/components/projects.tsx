import { getRepos } from "@/app/_actions/get-repos";
import ProjectItem from "@/components/project-item";
import type { Project } from "@/types/Project";
import { useEffect, useState } from "react";

const Projects = () => {
  const [repos, setRepos] = useState<Project[]>([]);

  useEffect(() => {
    const loadRepos = async () => {
      const data = await getRepos();

      setRepos(data);
    };

    loadRepos();
  }, []);

  return (
    <section
      id="projetos"
      className="w-full rounded-lg bg-gradient-to-r from-[#34495E] to-[#2C3E50] p-10 shadow-lg"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <h2 className="mb-8 text-center text-4xl font-bold">Projetos</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {repos
          .filter(({ description }) => description)
          .slice(0, 5)
          .map((project) => (
            <ProjectItem project={project} key={project.id} />
          ))}
      </div>
    </section>
  );
};

export default Projects;
