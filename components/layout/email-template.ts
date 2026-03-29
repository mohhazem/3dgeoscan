// lib/email-template.ts

interface EmailTemplateProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  serviceInterest: string;
  projectDetails: string;
}

export function generateContactEmailHtml({
  firstName,
  lastName,
  email,
  phone,
  serviceInterest,
  projectDetails,
}: EmailTemplateProps): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          /* Basic reset and styles */
          body { font-family: Arial, sans-serif; background-color: #f4f4f5; margin: 0; padding: 0; }
          .container { max-width: 600px; margin: 40px auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05); border: 1px solid #e5e7eb; }
          .header { background-color: #1f2937; color: #ffffff; padding: 20px; text-align: center; border-bottom: 4px solid #f97316; }
          .header h2 { margin: 0; font-size: 24px; letter-spacing: 1px; }
          .content { padding: 30px; color: #374151; line-height: 1.6; }
          .section { margin-bottom: 20px; }
          .label { font-weight: bold; color: #111827; }
          .value { background-color: #f9fafb; padding: 12px; border-radius: 4px; border: 1px solid #f3f4f6; margin-top: 5px; }
          .pill { display: inline-block; background-color: #fff7ed; color: #c2410c; padding: 6px 14px; border-radius: 9999px; font-weight: bold; font-size: 14px; border: 1px solid #fed7aa; margin-top: 5px; }
          .footer { text-align: center; padding: 20px; font-size: 12px; color: #9ca3af; background-color: #f9fafb; border-top: 1px solid #e5e7eb; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>3D GeoScan Inquiry</h2>
          </div>
          <div class="content">
            <p>You have received a new project request from your website.</p>
            
            <div class="section">
              <span class="label">Client Name:</span>
              <div class="value">${firstName} ${lastName}</div>
            </div>

            <div class="section">
              <span class="label">Contact Info:</span>
              <div class="value">
                Email: <a href="mailto:${email}" style="color: #ea580c;">${email}</a><br/>
                Phone: ${phone || 'Not provided'}
              </div>
            </div>

            <div class="section">
              <span class="label">Service Needed:</span><br/>
              <span class="pill">${serviceInterest || 'Not specified'}</span>
            </div>

            <div class="section">
              <span class="label">Project Details:</span>
              <div class="value" style="white-space: pre-wrap;">${projectDetails || 'No additional details provided.'}</div>
            </div>
          </div>
          <div class="footer">
            Sent securely via your Next.js website.
          </div>
        </div>
      </body>
    </html>
  `;
}