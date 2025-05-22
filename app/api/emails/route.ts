import { sendEmail } from "@/lib/mail-utils";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, subject, service, message } = await req.json();

    console.log("NAME===", name, email, service, message);
    
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'All fields are required' },
        { status: 400 }
      );
    }

    const sender = {
      name:name,
      address: email,
    };

    const receipients = [
      {
        name: "Eco Global Delivery", 
        address: "globaldeliveryeco@gmail.com", // Your official email
      },
    ];

    // const subject = service ? `New Quote Request: ${service}` : "Enquire message";
    const htmlMessage = `
      <h3>${subject || `Service Inquiry: ${service || 'General'}`}</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      <p><strong>Service:</strong> ${service || 'Not specified'}</p>
      <p><strong>Message:</strong> ${message}</p>
    `;

    // Send the email
    const result = await sendEmail({
      sender,
      receipients,
      subject:subject || `New Contact Form Submission from ${name}`,
      message: htmlMessage,
    });

    // Return success response
    return NextResponse.json({ accepted: "Message has been sent successfully", result });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { message: 'Unable to send email' },
      { status: 500 }
    );
  }
}
