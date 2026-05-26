import MainTitle from "@/components/main-title/MainTitle";
import styles from "./page.module.css";
import EnterMenu from "@/components/enter-menu/EnterMenu";
import structuredData from "../structured-data/general.json";

export const metadata = {
	title: "NovaConstant — NickChachlioutis",
	openGraph: {
		title: "NovaConstant — NickChachlioutis",
		description:
			"Ανάπτυξη ιστοσελίδων για τον 21ο αιώνα. Υψηλού επιπέδου διαδικτυακές υπηρεσίες προσαρμοσμένες στις ανάγκες και το brand σας.",
		url: "https://www.nickchachlioutis.gr",
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
		canonical: "https://www.nickchachlioutis.gr",
	},
};

export default function Home() {
	return (
		<main className={styles.hero}>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
			<MainTitle />
			<EnterMenu />
		</main>
	);
}
