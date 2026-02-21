import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
    console.log('API Contact Route: Received POST request');
    try {
        const apiKey = process.env.RESEND_API_KEY;
        if (!apiKey) {
            console.error('API Contact Route Error: RESEND_API_KEY is not defined in environment variables');
            return NextResponse.json({
                error: 'Mail service misconfigured',
                details: 'API key is missing on the server'
            }, { status: 500 });
        }

        const resend = new Resend(apiKey);
        const payload = await request.json();
        console.log('API Contact Route: Payload received', { ...payload, email: '***', phone: '***' }); // Log partial payload for privacy

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
            to: ['Leighballen4@gmail.com'],
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
            console.error('API Contact Route: Resend SDK error:', error);
            return NextResponse.json({
                error: 'Failed to send email',
                details: error.message || 'Unknown Resend error'
            }, { status: 400 });
        }

        console.log('API Contact Route: Email sent successfully', data);
        return NextResponse.json({ success: true, data });
    } catch (error: any) {
        console.error('API Contact Route: Internal Server Error:', error);
        return NextResponse.json({
            error: 'Internal Server Error',
            details: error.message || 'Unknown error occurred'
        }, { status: 500 });
    }
}
