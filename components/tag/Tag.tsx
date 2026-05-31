import styles from "./tag.module.css";

export default function Tag({ children }: { children: React.ReactNode }) {
	return <p className={styles.tag}>{children}</p>;
}
