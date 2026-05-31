import { LuArrowBigRight } from "react-icons/lu";
import styles from "./description.module.css";
import BulletPoint from "../bullet-point/BulletPoint";
import type { BulletPointObject } from "@/types";

const BULLET_POINTS: BulletPointObject[] = [
	{
		title: "πρώτη εντύπωση",
		content:
			"Ο ιστότοπος μιας επιχείρησης δεν είναι απλώς μια «ψηφιακή» επαγγελματική κάρτα. Είναι το σημείο όπου η πρώτη εντύπωση γίνεται εμπιστοσύνη και το ενδιαφέρον μετατρέπεται σε συνεργασία.",
	},
	{
		title: "στρατηγική ανάπτυξης",
		content:
			"Ως full-stack web developer, σχεδιάζω και υλοποιώ ιστοσελίδες με ξεκάθαρο στόχο: να λειτουργούν υπέρ της επιχείρησής σου. Χρησιμοποιώ σύγχρονες τεχνολογίες αιχμής κατασκευάζοντας websites που φορτώνουν άμεσα, αποδίδουν σωστά σε κάθε συσκευή και είναι δομημένα ώστε να προσφέρουν ισχυρή παρουσία στις μηχανές αναζήτησης (SEO).",
	},
	{
		title: "ατομική προσέγγιση",
		content:
			"Δεν με ενδιαφέρει απλώς να «υπάρχεις» online, αλλά να ξεχωρίζεις. Για αυτό κάθε συνεργασία αντιμετωπίζεται ξεχωριστά, με προσοχή στη λεπτομέρεια, τον καθαρό σχεδιασμό κι έμφαση στη λειτουργικότητα.",
	},
	{
		title: "ανάληψη έργων",
		content:
			"Αναλαμβάνω έργα για επιχειρήσεις και ελεύθερους επαγγελματίες που θέλουν να κάνουν ένα ουσιαστικό βήμα στο διαδίκτυο, ενώ είμαι πάντα ανοιχτός και σε συνεργασίες με εταιρείες λογισμικού και dev teams.",
	},
	{
		title: "επένδυση στο μέλλον",
		content:
			"Αν ψάχνεις έναν συνεργάτη που βλέπει την ιστοσελίδα όχι απλώς ως project αλλά ως επένδυση, τότε βρισκόμαστε στην ίδια πλευρά.",
	},
];

export default function Description() {
	return (
		<article className={styles.description}>
			{BULLET_POINTS.map((bulletPoint) => {
				return <BulletPoint key={bulletPoint.title} title={bulletPoint.title} content={bulletPoint.content} />;
			})}
		</article>
	);
}
