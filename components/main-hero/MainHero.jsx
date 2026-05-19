import Image from "next/image";
import styles from "./main-hero.module.css";
import Tag from "../tag/Tag";

export default function MainHero({ tag, title, subtitle, image }) {
	return (
		<article className={styles.hero}>
			<section>
				<Tag>{tag}</Tag>
				<hgroup className={styles.hgroup}>
					<h1>{title}</h1>
					<p>{subtitle}</p>
				</hgroup>
			</section>
			<Image src={image.src} alt={image.alt} width={image.width} height={image.height} preload placeholder="blur" />
		</article>
	);
}
