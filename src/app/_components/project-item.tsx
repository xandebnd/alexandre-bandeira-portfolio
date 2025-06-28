import type { Project } from "@/types/Project";
import { FiGithub, FiGlobe } from "react-icons/fi";
import { languageColors } from "../_constants/language-colors";

interface ProjectItemProps {
	project: Project;
}

const ProjectItem = ({ project }: ProjectItemProps) => {
	return (
		<div
			key={project.id}
			className="rounded-lg bg-[#1A2A3A] p-5 text-center shadow-md transition-transform hover:scale-105"
		>
			<h3 className="mb-2 text-xl font-semibold">{project.name}</h3>
			<p className="mb-4 text-sm text-gray-300">{project.description}</p>
			{project.language && (
				<p
					className={`mb-2 inline-block rounded-full border px-2 py-1 text-sm font-semibold italic ${
						languageColors[project.language] || languageColors.Default
					}`}
				>
					{project.language}
				</p>
			)}
			<div className="border-t border-gray-600 pt-4">
				<div className="flex items-center justify-center gap-4">
					<a
						href={project.html_url}
						className="flex items-center text-blue-400 hover:underline"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FiGithub className="mr-2" /> GitHub
					</a>
					<a
						href={project.homepage}
						target="_blank"
						className={`flex items-center ${
							!project.homepage ? "text-gray-400" : "text-green-400"
						} ${!project.homepage && "cursor-not-allowed opacity-50"}`}
						rel="noreferrer"
					>
						<FiGlobe className="mr-2" /> Site
					</a>
				</div>
			</div>
		</div>
	);
};

export default ProjectItem;
