import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import styles from "./contact.module.css";
import ContactHero from "@/components/contact-hero/ContactHero";
import { FaRegEnvelope, FaViber, FaWhatsapp, FaFacebookMessenger } from "react-icons/fa6";
import type { Metadata } from "next";
import type { ContactObject } from "@/types";

export const metadata: Metadata = {
	title: "NovaConstant — NickChachlioutis | Επικοινωνία",
	openGraph: {
		title: "NovaConstant — NickChachlioutis | Επικοινωνία",
		description:
			"Ανάπτυξη ιστοσελίδων για τον 21ο αιώνα. Υψηλού επιπέδου διαδικτυακές υπηρεσίες προσαρμοσμένες στις ανάγκες και το brand σας.",
		url: "https://www.nickchachlioutis.gr/contact",
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
		canonical: "https://www.nickchachlioutis.gr/contact",
	},
};

const contacts: ContactObject[] = [
	{
		text: "contact@nickchachlioutis.gr",
		href: "mailto:contact@nickchachlioutis.gr",
		icon: <FaRegEnvelope className={styles.icon} />,
	},
	{
		text: "NovaConstantDigital",
		href: "https://m.me/NovaConstantDigital",
		icon: <FaFacebookMessenger className={styles.icon} />,
	},
	{
		text: "694 503 7327",
		href: "viber://chat?number=%2B+306945037327",
		icon: <FaViber className={styles.icon} />,
	},
	{
		text: "694 503 7327",
		href: "https://wa.me/+306945037327",
		icon: <FaWhatsapp className={styles.icon} />,
	},
];

export default function ContactPage() {
	return (
		<div className={styles.container}>
			<Header />
			<main>
				<ContactHero
					tag="ΕΠΙΚΟΙΝΩΝΙΑ"
					title="Ψηφιακοί συνοδοιπόροι"
					subtitle="Ξεκινάτε ένα νέο εγχείρημα ή θέλετε να βελτιώσετε την υπάρχουσα παρουσία σας; Είτε χρειάζεστε μια νέα ιστοσελίδα είτε έναν μακροχρόνιο τεχνικό συνεργάτη, θα ήθελα να σας ακούσω."
					contacts={contacts}
				/>
			</main>
			<Footer />
		</div>
	);
}
