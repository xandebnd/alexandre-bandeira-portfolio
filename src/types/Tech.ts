export type Tech = {
  name: string;
  color: string;
  level: number;
};

export type TechListProps = {
  title: string;
  techs: Tech[];
};
