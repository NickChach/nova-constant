import Header from "@/components/header/Header";
import styles from "./web-dev.module.css";
import Footer from "@/components/footer/Footer";
import MainHero from "@/components/main-hero/MainHero";
import Features from "@/components/features/Features";
import imageWebDev from "../../public/images/business_growth.webp";
import imageNeaAlexandras from "../../public/images/ta_nea_tis_alexandras.webp";
import { LuRocket, LuMonitorSmartphone, LuTrendingUp, LuPalette, LuMail, LuHandshake } from "react-icons/lu";
import Projects from "@/components/projects/Projects";
import type { Metadata } from "next";
import type { FeatureObject, ImageObject, ProjectObject } from "@/types";

export const metadata: Metadata = {
	title: "NovaConstant — NickChachlioutis | Ανάπτυξη Ιστοσελίδων",
	openGraph: {
		title: "NovaConstant — NickChachlioutis | Ανάπτυξη Ιστοσελίδων",
		description:
			"Ανάπτυξη ιστοσελίδων για τον 21ο αιώνα. Υψηλού επιπέδου διαδικτυακές υπηρεσίες προσαρμοσμένες στις ανάγκες και το brand σας.",
		url: "https://www.nickchachlioutis.gr/web-dev",
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
		canonical: "https://www.nickchachlioutis.gr/web-dev",
	},
};

const image: ImageObject = {
	src: imageWebDev,
	alt: "Man with revenue chart going up.",
	width: 900,
	height: 651,
};

const features: FeatureObject[] = [
	{
		title: "Υψηλές Επιδόσεις",
		subtitle: "Βελτιστοποίηση για ταχύτητα κι ασφάλεια",
		icon: <LuRocket className={styles.icon} />,
	},
	{
		title: "SEO & Conversion",
		subtitle: "Υψηλή κατάταξη σε μηχανές αναζήτησης",
		icon: <LuTrendingUp className={styles.icon} />,
	},
	{
		title: "Προσαρμοστικότητα",
		subtitle: "Από οθόνες κινητών έως υπολογιστών",
		icon: <LuMonitorSmartphone className={styles.icon} />,
	},
	{
		title: "Custom Design",
		subtitle: "Εμφάνιση σχεδιασμένη για το brand σας",
		icon: <LuPalette className={styles.icon} />,
	},
	{
		title: "Επαγγελματικό Email",
		subtitle: "Email για το brand σας, όχι @gmail.com",
		icon: <LuMail className={styles.icon} />,
	},
	{
		title: "Τεχνική Υποστήριξη",
		subtitle: "Πάντα στο πλευρό σας",
		icon: <LuHandshake className={styles.icon} />,
	},
];

const projects: ProjectObject[] = [
	{
		title: "Τα Νέα της Αλεξάνδρας",
		description: "Ιστοσελίδα για μουσικό μεζεδοπωλείο.",
		code: null,
		website: "https://www.taneatisalexandras.gr",
		imgSrc: imageNeaAlexandras,
		imgAlt: "Εικόνα του ιστότοπου «Τα Νέα της Αλεξάνδρας».",
	},
];

export default function WebDevPage() {
	return (
		<div className={styles.container}>
			<Header />
			<main>
				<MainHero
					tag="ΓΙΑ ΕΠΙΧΕΙΡΗΣΕΙΣ"
					title={
						<>
							Ιστοσελίδες για <em className={styles.growth}>ανάπτυξη</em> της επιχείρησής σας
						</>
					}
					subtitle="Επαγγελματικές ιστοσελίδες που εργάζονται το ίδιο σκληρά με εσάς."
					image={image}
				/>
				<Features features={features} />
				<Projects projects={projects} />
			</main>
			<Footer />
		</div>
	);
}
