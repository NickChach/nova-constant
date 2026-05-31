import Header from "@/components/header/Header";
import styles from "./blog.module.css";
import MainHero from "@/components/main-hero/MainHero";
import imageBlog from "../../public/images/thoughts.webp";
import Footer from "@/components/footer/Footer";
import Articles from "@/components/articles/Articles";
import type { Metadata } from "next";
import type { ArticleObject, ImageObject } from "@/types";
import blogPosts from "@/blogPosts";
import AnimatedStars from "@/components/animated-stars/AnimatedStars";

export const metadata: Metadata = {
	title: "NovaConstant — NickChachlioutis | Blog",
	openGraph: {
		title: "NovaConstant — NickChachlioutis | Blog",
		description:
			"Ανάπτυξη ιστοσελίδων για τον 21ο αιώνα. Υψηλού επιπέδου διαδικτυακές υπηρεσίες προσαρμοσμένες στις ανάγκες και το brand σας.",
		url: "https://www.nickchachlioutis.gr/blog",
		siteName: "NovaConstant — NickChachlioutis",
		images: [
			{
				url: "/images/nickchachlioutis.png",
				width: 1200,
				height: 630,
			},
		],
		locale: "el_GR",
		type: "website",
	},
	alternates: {
		canonical: "https://www.nickchachlioutis.grs/blog",
	},
};

const image: ImageObject = {
	src: imageBlog,
	alt: "Σκέψεις γύρω από τη φωτιά κάτω από τον έναστρο ουρανό.",
	width: 880,
	height: 660,
};

const articles: ArticleObject[] = blogPosts.map((blogPost) => {
	return {
		title: blogPost.plainTitle,
		link: `/blog/${blogPost.slug}`,
	};
});

export default function BlogPage() {
	return (
		<div className={styles.container}>
			<Header />
			<main>
				<MainHero
					tag="BLOG"
					title={
						<>
							Υπό το φως των{" "}
							<em className={styles.scene}>
								<span className={styles.wordWrap}>
									<span className={styles.sparkleWord}>αστεριών</span>
									<AnimatedStars />
								</span>
							</em>
						</>
					}
					subtitle="Νυχτερινές σκέψεις και πρακτικές συμβουλές γύρω από το διαδίκτυο και τη τεχνολογία."
					image={image}
				/>
				<Articles articles={articles} />
			</main>
			<Footer />
		</div>
	);
}
