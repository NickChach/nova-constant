import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const IbmPlexSans = IBM_Plex_Sans({
	weight: ["300", "400", "700"],
	subsets: ["latin", "greek"],
});

export const metadata = {
	description:
		"Ανάπτυξη ιστοσελίδων για τον 21ο αιώνα. Υψηλού επιπέδου διαδικτυακές υπηρεσίες προσαρμοσμένες στις ανάγκες και το brand σας.",
	authors: [{ name: "NovaConstant — NickChachlioutis" }],
	keywords: [
		"web developer",
		"nick chachlioutis",
		"νίκος χαχλιούτης",
		"nova constant",
		"nova constant digital",
		"νέα σταθερά",
		"web solutions",
		"web design",
		"ανάπτυξη ιστοσελίδων",
		"κατασκευή ιστοσελίδων",
		"ανάπτυξη λογισμικού",
		"ανάπτυξη εφαρμογών",
		"freelancer",
		"ελεύθερος επαγγελματίας",
		"software engineer",
		"custom web solutions",
		"web design",
		"seo",
		"search engine optimasition",
		"αθήνα",
		"athens",
		"αττική",
		"attica",
		"ρέθυμνο",
		"rethymno",
		"κρήτη",
		"crete",
		"τηλεργασία",
		"remote",
		"next.js",
	],
	robots: {
		index: true,
		follow: true,
		nocache: false,
		googleBot: {
			index: true,
			follow: true,
			"max-snippet": -1,
			"max-image-preview": "large",
			"max-video-preview": -1,
		},
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="el" className={IbmPlexSans.className}>
			<body>
				{children}
				<Analytics />
			</body>
		</html>
	);
}
