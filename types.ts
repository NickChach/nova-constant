import type { StaticImageData } from "next/image";
import type { ReactNode } from "react";

export type ProjectObject = {
	title: string;
	description: string;
	code: string | null;
	website: string | null;
	imgSrc: StaticImageData;
	imgAlt: string;
};

export type ImageObject = {
	src: StaticImageData;
	alt: string;
	width: string;
	height: string;
};

export type FeatureObject = {
	title: string;
	subtitle: string;
	icon: ReactNode;
};

export type ArticleObject = {
	title: string;
	link: string;
};
