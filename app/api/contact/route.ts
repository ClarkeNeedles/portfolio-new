import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // temporary sender
      to: ["c.w.needles@gmail.com"],
      subject: `New message from ${name}`,
      reply_to: email,
      text: `
        Name: ${name}
        Email: ${email}

        Message:
        ${message}
      `,
    })

    return new Response(JSON.stringify(data), { status: 200 })
  } catch (error) {
    return new Response(JSON.stringify({ error }), { status: 500 })
  }
}
