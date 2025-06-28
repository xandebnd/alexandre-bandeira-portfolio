import type { HTMLAttributes, ReactNode } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
	children: ReactNode;
	id?: string;
}

const Section = ({ children, id, ...rest }: SectionProps) => {
	return (
		<section
			id={id}
			className="w-full rounded-lg bg-gradient-to-r from-[#34495E] to-[#2C3E50] p-5 shadow-lg"
			{...rest}
		>
			{children}
		</section>
	);
};

export default Section;
