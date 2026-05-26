import Header from "@/components/header/Header";
import styles from "./about.module.css";
import Footer from "@/components/footer/Footer";
import MainHero from "@/components/main-hero/MainHero";
import imageAbout from "../../public/images/profile.webp";
import Description from "@/components/description/Description";
import type { Metadata } from "next";
import type { ImageObject } from "@/types";

export const metadata: Metadata = {
	title: "NovaConstant — NickChachlioutis | About",
	openGraph: {
		title: "NovaConstant — NickChachlioutis | About",
		description:
			"Ανάπτυξη ιστοσελίδων για τον 21ο αιώνα. Υψηλού επιπέδου διαδικτυακές υπηρεσίες προσαρμοσμένες στις ανάγκες και το brand σας.",
		url: "https://www.nickchachlioutis.gr/about",
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
		canonical: "https://www.nickchachlioutis.grs/about",
	},
};

const image: ImageObject = {
	src: imageAbout,
	alt: "Φωτογραφία του Νίκου Χαχλιούτη.",
	width: "900",
	height: "661",
};

export default function AboutPage() {
	return (
		<div className={styles.container}>
			<Header />
			<main>
				<MainHero
					tag="ABOUT ME"
					title={
						<>
							Nova Constant: Θέτοντας τα νέα <em className={styles.typewriter}>πρότυπα</em>
						</>
					}
					subtitle="Ονομάζομαι Νίκος Χαχλιούτης κι είμαι full-stack web developer. Το πάθος μου είναι η δημιουργία σύγχρονων κι αξιόπιστων ψηφιακών προϊόντων κι υπηρεσιών."
					image={image}
				/>
				<Description />
			</main>
			<Footer />
		</div>
	);
}
