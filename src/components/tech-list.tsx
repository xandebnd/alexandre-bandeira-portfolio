import type { TechListProps } from "@/types/Tech";

const TechList = ({ title, techs }: TechListProps) => (
  <div className="rounded-lg bg-[#2C3E50] p-6 shadow-md">
    <h3 className="mb-6 text-center text-2xl font-bold text-white">{title}</h3>
    <ul className="space-y-4">
      {techs.map((tech, index) => (
        <li
          key={index.toString()}
          className="flex transform items-center gap-4 rounded-lg p-2 shadow-md transition-transform hover:scale-105"
          style={{ backgroundColor: tech.color }}
        >
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-4 w-4 rounded-full bg-white" />
              <span className="font-bold text-white">{tech.name}</span>
            </div>

            <div className="h-2 w-20 rounded-full bg-white/30">
              <div
                className="h-2 rounded-full bg-white transition-all duration-500"
                style={{ width: `${(tech.level / 5) * 100}%` }}
                title="Básico"
              />
            </div>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default TechList;
