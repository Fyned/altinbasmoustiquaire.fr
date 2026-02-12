import emailjs from '@emailjs/browser'
import { EMAILJS } from '../lib/constants'

export async function sendDevisRequest(formData) {
  try {
    const result = await emailjs.send(
      EMAILJS.serviceId,
      EMAILJS.devisTemplateId,
      {
        project_type: formData.projectType,
        quantity: formData.quantity,
        width: formData.width,
        height: formData.height,
        color: formData.color,
        floor: formData.floor,
        comments: formData.comments || '',
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        city: formData.city,
        postalCode: formData.postalCode,
      },
      EMAILJS.publicKey
    )
    return { success: true, result }
  } catch (error) {
    console.error('EmailJS error:', error)
    return { success: false, error }
  }
}

export async function sendContactMessage(formData) {
  try {
    const result = await emailjs.send(
      EMAILJS.serviceId,
      EMAILJS.contactTemplateId,
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || '',
        subject: formData.subject,
        message: formData.message,
      },
      EMAILJS.publicKey
    )
    return { success: true, result }
  } catch (error) {
    console.error('EmailJS error:', error)
    return { success: false, error }
  }
}
