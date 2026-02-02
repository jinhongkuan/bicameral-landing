import { json } from '@sveltejs/kit';
import { Resend } from 'resend';
import { RESEND_API_KEY } from '$env/static/private';

const resend = new Resend(RESEND_API_KEY);

export async function POST({ request }) {
  try {
    const data = await request.json();

    const problemLabels: Record<string, string> = {
      'product-context': 'Product Context Issues',
      'tech-debt': 'Tech Debt & Code Quality',
      'knowledge-silos': 'Knowledge Silos',
      'process-coordination': 'Process & Coordination',
      'other': 'Other'
    };

    const emailHtml = `
      <h2>New Bicameral Contact Form Submission</h2>
      <table style="font-family: Arial, sans-serif; border-collapse: collapse; width: 100%;">
        <tr>
          <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #ddd;">Contact:</td>
          <td style="padding: 8px; border-bottom: 1px solid #ddd;">${data.contactType === 'anonymous' ? 'Anonymous' : data.email}</td>
        </tr>
        <tr style="background-color: #f5f5f5;">
          <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #ddd;">Problem Type:</td>
          <td style="padding: 8px; border-bottom: 1px solid #ddd;">${problemLabels[data.problemNature] || data.problemNature}</td>
        </tr>
        <tr>
          <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #ddd;">Input Type:</td>
          <td style="padding: 8px; border-bottom: 1px solid #ddd;">${data.inputType === 'text' ? 'Written Thoughts' : 'Shared URL'}</td>
        </tr>
        <tr style="background-color: #f5f5f5;">
          <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #ddd;">Content:</td>
          <td style="padding: 8px; border-bottom: 1px solid #ddd;">${data.inputType === 'text' ? data.thoughts : `<a href="${data.url}">${data.url}</a>`}</td>
        </tr>
        <tr>
          <td style="padding: 8px; font-weight: bold;">Timestamp:</td>
          <td style="padding: 8px;">${new Date().toISOString()}</td>
        </tr>
      </table>
    `;

    const emailResponse = await resend.emails.send({
      from: 'Bicameral Contact <contact@bicameral-ai.com>',
      to: 'jin@bicameral-ai.com',
      subject: `New Contact Form: ${problemLabels[data.problemNature] || 'General'}`,
      html: emailHtml,
      replyTo: data.contactType === 'email' ? data.email : undefined
    });

    console.log('Email sent successfully:', emailResponse);

    return json({ success: true });
  } catch (error) {
    console.error('Contact form submission error:', error);
    return json({ error: 'Failed to process submission' }, { status: 500 });
  }
}
