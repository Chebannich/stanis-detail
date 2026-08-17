import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const body = await request.json();
  const { name, contactWay, vehicle, packet, message } = body;

  try {
    await resend.emails.send({
      from: 'StanisDetail <onboarding@resend.dev>',
      to: 'chieban.stas@gmail.com',
      subject: `Neue Anfrage von ${name}`,
      text: `
        Name: ${name}
        Kontakt: ${contactWay}
        Fahrzeug: ${vehicle}
        Paket: ${packet}
        Nachricht: ${message}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to send' }, { status: 500 });
  }
}