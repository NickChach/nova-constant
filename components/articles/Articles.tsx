import type { ArticleObject } from "@/types";
import Article from "../article/article";
import styles from "./articles.module.css";

export default function Articles({ articles }: { articles: ArticleObject[] }) {
	return (
		<article className={styles.articles}>
			<h2>Άρθρα</h2>
			<ul>
				{articles.map((article) => {
					return <Article key={article.title} title={article.title} link={article.link} />;
				})}
			</ul>
		</article>
	);
}
