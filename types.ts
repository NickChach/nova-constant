import type { Metadata } from "next";
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
	width: number;
	height: number;
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

export type ContactObject = {
	text: string;
	href: string;
	icon: ReactNode;
};

export type BlogPostObject = {
	slug: string;
	tag: string;
	title: ReactNode;
	plainTitle: string;
	subtitle: string;
	image: ImageObject;
	content: ReactNode;
	metadata: Metadata;
	structuredData: Record<string, unknown>;
};

export type Props = {
	params: Promise<{ slug: string }>;
};

export type BlogUrlObject = {
	url: string;
	lastModified: Date;
	changeFrequency: string;
	priority: number;
};

export type BulletPointObject = {
	title: string;
	content: string;
};

export type FormContentObject = {
	name: string;
	email: string;
	message: string;
};
