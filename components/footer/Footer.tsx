import CopyrightYear from "../copyright-year/CopyrightYear";
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa6";
import styles from "./footer.module.css";

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<p>
				Nova Constant Digital — Nick Chachlioutis © <CopyrightYear />
			</p>
			<ul>
				<li>
					<FaLinkedin />
					<a href="https://www.linkedin.com/in/nickchach" target="_blank">
						LinkedIn
					</a>
				</li>
				<li>
					<FaGithub />
					<a href="https://github.com/NickChach" target="_blank">
						GitHub
					</a>
				</li>
				<li>
					<FaFacebook />
					<a href="https://www.facebook.com/NovaConstantDigital" target="_blank">
						Facebook
					</a>
				</li>
				<li>
					<FaInstagram />
					<a href="https://www.instagram.com/novaconstantdigital" target="_blank">
						Instagram
					</a>
				</li>
			</ul>
		</footer>
	);
}
