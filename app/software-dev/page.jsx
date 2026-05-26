import Header from "@/components/header/Header";
import styles from "./software-dev.module.css";
import Footer from "@/components/footer/Footer";
import MainHero from "@/components/main-hero/MainHero";
import Features from "@/components/features/Features";
import imageSoftDev from "../../public/images/app_windows.webp";
import { LuCodeXml, LuBox, LuUsers, LuZap, LuSquareTerminal, LuGitBranch } from "react-icons/lu";
import Projects from "@/components/projects/Projects";
import imageNPMVulnScanner from "../../public/images/npm_vulnerability_scanner.webp";
import imageSemanticPdfSearch from "../../public/images/semantic_pdf_search.webp";

export const metadata = {
	title: "NovaConstant — NickChachlioutis | Ανάπτυξη Λογισμικού",
	openGraph: {
		title: "NovaConstant — NickChachlioutis | Ανάπτυξη Λογισμικού",
		description:
			"Ανάπτυξη ιστοσελίδων για τον 21ο αιώνα. Υψηλού επιπέδου διαδικτυακές υπηρεσίες προσαρμοσμένες στις ανάγκες και το brand σας.",
		url: "https://www.nickchachlioutis.gr/software-dev",
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
		canonical: "https://www.nickchachlioutis.gr/software-dev",
	},
};

export default function SoftwareDevPage() {
	const image = {
		src: imageSoftDev,
		alt: "Image of application windows.",
		width: "900",
		height: "699",
	};

	const features = [
		{
			title: "Σύγχρονο Stack",
			subtitle: "TypeScript, React, Next.js, Go, Python κ.α.",
			icon: <LuCodeXml className={styles.icon} />,
		},
		{
			title: "Καθαρός Κώδικας",
			subtitle: "Βέλτιστες πρακτικές κι αρχές SOLID",
			icon: <LuBox className={styles.icon} />,
		},
		{
			title: "Υψηλές Αποδόσεις",
			subtitle: "Ταχύτητα, επεκτασιμότητα, ασφάλεια",
			icon: <LuZap className={styles.icon} />,
		},
		{
			title: "Ομαδικότητα",
			subtitle: "Άμεση επικοινωνία κι αξιοπιστία",
			icon: <LuUsers className={styles.icon} />,
		},
		{
			title: "Χειρισμός Linux",
			subtitle: "Μόνιμος κάτοικος του terminal",
			icon: <LuSquareTerminal className={styles.icon} />,
		},
		{
			title: "Χειρισμός Git",
			subtitle: "Έλεγχος πηγαίου κώδικα",
			icon: <LuGitBranch className={styles.icon} />,
		},
	];

	const projects = [
		{
			title: "NPM Vulnerability Scanner",
			description: "Διαδικτυακή εφαρμογή που σαρώνει αρχεία package-lock.json για γνωστά vulnerabilities.",
			code: "https://github.com/NickChach/NPM-Vulnerability-Scanner",
			website: "https://npm-vulnerability-scanner.vercel.app",
			imgSrc: imageNPMVulnScanner,
			imgAlt: "Εικόνα του ιστότοπου NPM Vulnerability Scanner.",
		},
		{
			title: "Semantic PDF Search",
			description: "CLI tool για semantic search αρχείων PDF με χρήση embedding μοντέλων τεχνητής νοημοσύνης.",
			code: "https://github.com/NickChach/semantic-pdf-search",
			website: null,
			imgSrc: imageSemanticPdfSearch,
			imgAlt: "Image of Semantic PDF Search CLI tool.",
		},
	];

	return (
		<div className={styles.container}>
			<Header />
			<main>
				<MainHero
					tag="ΓΙΑ ΕΤΑΙΡΕΙΕΣ ΛΟΓΙΣΜΙΚΟΥ"
					title={
						<>
							Full-stack developer με έμφαση στο <em className={styles.highlighted}>αποτέλεσμα</em>
						</>
					}
					subtitle="Εξειδίκευση σε Next.js και Go, εστίαση στην απόδοση και την αρχιτεκτονική."
					image={image}
				/>
				<Features features={features} />
				<Projects projects={projects} />
			</main>
			<Footer />
		</div>
	);
}
