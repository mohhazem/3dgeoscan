'use server'

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmailAction(formData: FormData) {
  // 1. Extract and normalize posted values
  const firstName = String(formData.get('firstName') ?? '').trim();
  const lastName = String(formData.get('lastName') ?? '').trim();
  const email = String(formData.get('email') ?? '').trim();
  const phone = String(formData.get('phone') ?? '').trim();
  const serviceInterest = String(formData.get('serviceInterest') ?? '').trim();
  const projectDetails = String(formData.get('projectDetails') ?? '').trim();

  // 2. Simple validation
  if (!email || !firstName) {
    return { error: 'Name and email are required.' };
  }

  if (!process.env.RESEND_API_KEY) {
    return { error: 'RESEND_API_KEY is missing in environment variables.' };
  }

  try {
    // 3. Send the email using Resend
    const { error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', // Use this exact address for testing
      to: 'omara7med2412@gmail.com', // MUST be the email you used to sign up for Resend
      subject: `New 3D Scanning Inquiry from ${firstName} ${lastName}`,
      html: `
        <h3>New Project Inquiry</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Service Interest:</strong> ${serviceInterest || 'Not specified'}</p>
        <p><strong>Project Details:</strong></p>
        <p>${projectDetails || 'No details provided'}</p>
      `,
    });

    if (error) {
      return { error: error.message };
    }

    return { success: true };
  } catch {
    return { error: 'Something went wrong.' };
  }
}