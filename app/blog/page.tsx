import Header from "@/components/header/Header";
import styles from "./blog.module.css";
import MainHero from "@/components/main-hero/MainHero";
import imageBlog from "../../public/images/thoughts.webp";
import Footer from "@/components/footer/Footer";
import Articles from "@/components/articles/Articles";

export const metadata = {
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

export default function BlogPage() {
	const image = {
		src: imageBlog,
		alt: "Σκέψεις γύρω από τη φωτιά κάτω από τον έναστρο ουρανό.",
		width: "880",
		height: "660",
	};

	const articles = [
		{
			title: "Εν έτει 2026, το WordPress δεν αρκεί",
			link: "/blog/en-etei-2026-wordpress-den-arkei",
		},
		{
			title: "Social media χωρίς επιχειρηματική ιστοσελίδα;",
			link: "/blog/social-media-horis-epiheirimatiki-istoselida",
		},
	];

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

									<span className={`${styles.star} ${styles.four} ${styles.t1}`}></span>
									<span className={`${styles.star} ${styles.four} ${styles.t2}`}></span>
									<span className={`${styles.star} ${styles.four} ${styles.t3}`}></span>
									<span className={`${styles.star} ${styles.four} ${styles.t4}`}></span>
									<span className={`${styles.star} ${styles.four} ${styles.t5}`}></span>

									<span className={`${styles.star} ${styles.four} ${styles.d1}`}></span>
									<span className={`${styles.star} ${styles.four} ${styles.d2}`}></span>
									<span className={`${styles.star} ${styles.d3}`}></span>
									<span className={`${styles.star} ${styles.four} ${styles.d4}`}></span>
									<span className={`${styles.star} ${styles.d5}`}></span>
									<span></span>
									<span className={`${styles.star} ${styles.four} ${styles.d7}`}></span>
									<span className={`${styles.star} ${styles.d8}`}></span>
									<span className={`${styles.star} ${styles.four} ${styles.d9}`}></span>
									<span className={`${styles.star} ${styles.four} ${styles.d10}`}></span>
									<span className={`${styles.star} ${styles.four} ${styles.d11}`}></span>
									<span className={`${styles.star} ${styles.four} ${styles.d12}`}></span>
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
