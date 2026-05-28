import blogPosts from "@/blogPosts";

export default function sitemap() {
	const baseUrl = "https://www.nickchachlioutis.gr";

	const blogUrls = blogPosts.map((blogPost) => {
		return {
			url: `${baseUrl}/blog/${blogPost.slug}`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.7,
		};
	});

	return [
		{
			url: baseUrl,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 1,
		},
		{
			url: `${baseUrl}/about`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.8,
		},
		{
			url: `${baseUrl}/contact`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.9,
		},
		{
			url: `${baseUrl}/software-dev`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.7,
		},
		{
			url: `${baseUrl}/web-dev`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.9,
		},
		{
			url: `${baseUrl}/blog`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.7,
		},
		...blogUrls,
	];
}
