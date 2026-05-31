"use client";

import { useState, type SubmitEvent } from "react";
import styles from "./contact-form.module.css";
import Link from "next/link";

export default function ContactForm() {
	const [status, setStatus] = useState("idle");

	async function handleSubmit(e: SubmitEvent & { currentTarget: HTMLFormElement }) {
		e.preventDefault();
		setStatus("loading");

		const form = e.currentTarget;
		const formData = new FormData(form);

		try {
			const respond = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					name: formData.get("name"),
					email: formData.get("email"),
					message: formData.get("message"),
				}),
			});

			if (!respond.ok) throw new Error();
			setStatus("success");
			form.reset();
		} catch {
			console.log("the problem is here");
			setStatus("error");
		}
	}

	return (
		<section className={styles.contactForm}>
			<hgroup>
				<h2>Στείλτε μου ένα μήνυμα</h2>
				<p>Υπόσχομαι ότι θα απαντήσω σύντομα.</p>
			</hgroup>
			<form onSubmit={handleSubmit}>
				<section>
					<label htmlFor="name">Όνομα</label>
					<input type="text" name="name" id="name" minLength={3} placeholder="Το όνομά σας" required></input>
				</section>
				<section>
					<label htmlFor="email">E-mail</label>
					<input type="email" name="email" id="email" placeholder="Το e-mail σας" required></input>
				</section>
				<section>
					<label htmlFor="message">Μήνυμα</label>
					<textarea name="message" id="message" rows={8} placeholder="Μιλήστε μου για το εγχείρημά σας..." required></textarea>
				</section>
				<button type="submit" disabled={status === "loading"}>
					{status === "loading" ? "Αποστολή..." : "Αποστολή"}
				</button>
				<p id={styles.legalNotice}>
					<strong>Σημείωση Απορρήτου:</strong> Χρησιμοποιώ το όνομα και το e-mail σας αποκλειστικά για να απαντήσω στο μήνυμά σας.
					Τα δεδομένα σας δεν κοινοποιούνται σε τρίτους για διαφημιστικούς σκοπούς. Πατώντας «Αποστολή», δηλώνετε ότι λάβατε γνώση
					της{" "}
					<Link href="/privacy-policy" target="_blank">
						Πολιτικής Απορρήτου
					</Link>
					.
				</p>
				{status === "success" && <p className={styles.formReply}>Το μήνυμά σας εστάλη επιτυχώς!</p>}
				{status === "error" && <p className={styles.formReply}>Κάτι πήγε στραβά. Παρακαλώ δοκιμάστε ξανά.</p>}
			</form>
		</section>
	);
}
