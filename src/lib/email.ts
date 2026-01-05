export async function sendConfirmationEmail(to: string, teamName: string) {
  // Here you can integrate with a provider like Resend, SendGrid, etc.
  console.log(`✅ Email would be sent to ${to} confirming ${teamName} registration.`)
}
