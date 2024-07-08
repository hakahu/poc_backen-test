export function getPasswordResetTemplate(name: string, token: string): string {
    return `
      <p>Hello ${name},</p>
      <p>We received a request to reset your password. Please click on the link below to reset your password:</p>
      <p><a href="http://your-app-url/reset-password/${token}">Reset Password</a></p>
      <p>If you did not request this, please ignore this email.</p>
      <p>Regards,<br/>Your App Team</p>
    `;
  }