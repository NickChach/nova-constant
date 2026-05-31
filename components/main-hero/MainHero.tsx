import Image, { type StaticImageData } from "next/image";
import styles from "./main-hero.module.css";
import Tag from "../tag/Tag";
import type { ImageObject } from "@/types";
import type { ReactNode } from "react";

export default function MainHero({ tag, title, subtitle, image }: { tag: string; title: ReactNode; subtitle: string; image: ImageObject }) {
	return (
		<article className={styles.hero}>
			<section>
				<Tag>{tag}</Tag>
				<hgroup className={styles.hgroup}>
					<h1>{title}</h1>
					<p>{subtitle}</p>
				</hgroup>
			</section>
			<Image src={image.src} alt={image.alt} width={image.width} height={image.height} preload={true} placeholder="blur" />
		</article>
	);
}
