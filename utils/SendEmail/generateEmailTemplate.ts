export default function generateEmailTemplate({
  username,
  email,
  message,
}: {
  username: string;
  email: string;
  message: string;
}) {
  return `
  <div style="
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f9fafb;
    padding: 30px;
    border-radius: 12px;
    max-width: 600px;
    margin: auto;
    border: 1px solid #e5e7eb;
  ">
    <div style="text-align: center; margin-bottom: 20px;">
      <h2 style="color: #0f172a;">📩 New Message from Portfolio</h2>
    </div>

    <div style="
      background: white;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.05);
    ">
      <p style="font-size: 16px; color: #334155; margin: 0;">
        <strong>Name:</strong> ${username}
      </p>
      <p style="font-size: 16px; color: #334155; margin: 5px 0;">
        <strong>Email:</strong> <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
      </p>
      <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 15px 0;">
      <p style="font-size: 15px; color: #475569;">
        ${message}
      </p>
    </div>

    <div style="text-align: center; margin-top: 25px; color: #94a3b8; font-size: 13px;">
      <p>© ${new Date().getFullYear()} Karim Omran Portfolio</p>
    </div>
  </div>
  `;
}