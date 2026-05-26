import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
	try {
		const { name, email, message } = await request.json();

		if (!name || !email || !message) {
			return Response.json({ error: "All fields are required" }, { status: 400 });
		} else if (!emailRegex.test(email)) {
			return Response.json({ error: "Invalid e-mail address" }, { status: 400 });
		}

		await resend.emails.send({
			from: "Contact Form <contact@nickchachlioutis.gr>",
			to: "contact@nickchachlioutis.gr",
			subject: `New message from ${name}`,
			replyTo: email,
			html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
		});

		return Response.json({ success: true });
	} catch (error) {
		return Response.json({ error: "Failed to send e-mail" }, { status: 500 });
	}
}
