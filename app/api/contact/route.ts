import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const apiKey = process.env.RESEND_API_KEY;
        if (!apiKey) {
            console.error('RESEND_API_KEY is not defined');
            return NextResponse.json({ error: 'Mail service misconfigured' }, { status: 500 });
        }

        const resend = new Resend(apiKey);
        const payload = await request.json();
        const {
            name,
            email,
            phone,
            zipCode,
            pattern,
            grade,
            finish,
            squareFootage,
            hasForklift,
            needsLiftGate
        } = payload;

        const { data, error } = await resend.emails.send({
            from: 'Southern Pine Depot <system@southernpinedepot.com>',
            to: ['kylan@founditmarketing.com'],
            replyTo: email,
            subject: `New Quote Request from ${name}`,
            html: `
        <h2>New Quote Request Details</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Zip Code:</strong> ${zipCode}</p>
        <hr />
        <h3>Product details</h3>
        <p><strong>Pattern:</strong> ${pattern}</p>
        <p><strong>Grade:</strong> ${grade}</p>
        <p><strong>Finish:</strong> ${finish}</p>
        <p><strong>Square Footage:</strong> ${squareFootage}</p>
        <hr />
        <h3>Logistics</h3>
        <p><strong>Has Forklift/Commercial:</strong> ${hasForklift ? 'Yes' : 'No'}</p>
        <p><strong>Needs Lift Gate/Residential:</strong> ${needsLiftGate ? 'Yes' : 'No'}</p>
      `,
        });

        if (error) {
            console.error('Resend error:', error);
            return NextResponse.json({ error }, { status: 400 });
        }

        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
