import Footer from "@/components/footer/Footer";
import styles from "./article-page.module.css";
import Header from "@/components/header/Header";
import MainHero from "@/components/main-hero/MainHero";
import type { Metadata } from "next";
import type { Props } from "@/types";
import blogPosts from "@/blogPosts";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { slug } = await params;
	const post = blogPosts.find((blogPost) => blogPost.slug === slug);

	if (!post) notFound();

	return post.metadata;
}

export async function generateStaticParams() {
	return blogPosts.map((blogPost) => ({ slug: blogPost.slug }));
}

export default async function BlogPostPage({ params }: Props) {
	const { slug } = await params;
	const blogPost = blogPosts.find((blogPost) => blogPost.slug === slug);

	if (!blogPost) notFound();

	return (
		<div className={styles.container}>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPost.structuredData) }} />
			<Header />
			<main>
				<MainHero tag={blogPost.tag} title={blogPost.title} subtitle={blogPost.subtitle} image={blogPost.image} />
				<article className={styles.articlePage}>{blogPost.content}</article>
			</main>
			<Footer />
		</div>
	);
}
