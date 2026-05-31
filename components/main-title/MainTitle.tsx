import { Chakra_Petch } from "next/font/google";
import styles from "./main-title.module.css";

const chakraPetch = Chakra_Petch({
	weight: ["700"],
	subsets: ["latin"],
});

export default function MainTitle() {
	return (
		<h1 className={`${chakraPetch.className} ${styles.h1}`}>
			<span className={styles.green}>Nova</span> <span className={styles.red}>Constant</span>
		</h1>
	);
}
