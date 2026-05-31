import Image, { type StaticImageData } from "next/image";
import styles from "./project.module.css";

export default function Project({
	title,
	description,
	code,
	website,
	imgSrc,
	imgAlt,
}: {
	title: string;
	description: string;
	code: string | null;
	website: string | null;
	imgSrc: StaticImageData;
	imgAlt: string;
}) {
	return (
		<section className={styles.project}>
			<h3>{title}</h3>
			<Image src={imgSrc} alt={imgAlt} width="1920" height="920" />
			<p>{description}</p>
			<div className={styles.links}>
				{code && (
					<a href={code} target="_blank">
						Κώδικας
					</a>
				)}
				{website && (
					<a href={website} target="_blank">
						Ιστότοπος
					</a>
				)}
			</div>
		</section>
	);
}
