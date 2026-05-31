import type { ProjectObject } from "@/types";
import Project from "../project/Project";
import styles from "./projects.module.css";

export default function Projects({ projects }: { projects: ProjectObject[] }) {
	return (
		<article className={styles.projects}>
			<h2>Έργα</h2>
			<section className={styles.cards}>
				{projects.map((project) => {
					return (
						<Project
							key={project.title}
							title={project.title}
							description={project.description}
							code={project.code}
							website={project.website}
							imgSrc={project.imgSrc}
							imgAlt={project.imgAlt}
						/>
					);
				})}
			</section>
		</article>
	);
}
