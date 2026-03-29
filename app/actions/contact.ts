'use server'

import { Resend } from 'resend';
import { generateContactEmailHtml } from '@/components/layout/email-template';

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
    const htmlContent = generateContactEmailHtml({
      firstName,
      lastName,
      email,
      phone,
      serviceInterest,
      projectDetails,
    });

    // 3. Send the email using Resend
    const { error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', // Use this exact address for testing
      to: 'moh.hazemhf@gmail.com', // MUST be the email you used to sign up for Resend
      subject: `New 3D Scanning Inquiry from ${firstName} ${lastName}`,
      html: htmlContent,
    });

    if (error) {
      return { error: error.message };
    }

    return { success: true };
  } catch {
    return { error: 'Something went wrong.' };
  }
}