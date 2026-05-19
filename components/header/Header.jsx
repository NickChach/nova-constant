import Image from "next/image";
import logo from "../../public/images/logo.webp";
import styles from "./header.module.css";
import { Chakra_Petch } from "next/font/google";
import Navbar from "../navbar/Navbar";

const chakraPetch = Chakra_Petch({
	weight: ["400", "700"],
});

export default function Header() {
	return (
		<header className={styles.header}>
			<section>
				<Image src={logo} alt="Nova Constant's logo" width="237" height="240" preload placeholder="blur" />
				<p className={chakraPetch.className}>
					<span className={styles.green}>NOVA</span> <span className={styles.red}>CONSTANT</span>
				</p>
			</section>
			<Navbar />
		</header>
	);
}
