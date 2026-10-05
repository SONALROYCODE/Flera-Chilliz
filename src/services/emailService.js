import emailjs from '@emailjs/browser'

/**
 * Sends a contact form email using EmailJS.
 * Configured via Vite environment variables:
 * - VITE_EMAILJS_SERVICE_ID
 * - VITE_EMAILJS_TEMPLATE_ID
 * - VITE_EMAILJS_PUBLIC_KEY
 */
export async function sendContactEmail({ name, email, message = '' }) {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

  // Check if keys are configured
  if (!serviceId || !templateId || !publicKey || serviceId === 'your_service_id_here') {
    console.warn(
      '[EmailJS Service] Environment variables (VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY) are missing or default. Simulating successful send for UI testing.'
    )
    // Simulate delay for development testing
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return { success: true, simulated: true }
  }

  try {
    const response = await emailjs.send(
      serviceId,
      templateId,
      {
        from_name: name,
        from_email: email,
        message: message || `New inquiry from ${name} (${email})`,
        to_name: 'FLERA CHILLIZ Team',
        reply_to: email,
      },
      publicKey
    )

    return { success: true, response }
  } catch (error) {
    console.error('[EmailJS Error] Failed to send email:', error)
    throw error
  }
}
