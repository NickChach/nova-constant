"use client";

export default function CopyrightYear() {
	const year: string = new Date().getFullYear().toString();

	return <span>{year}</span>;
}
