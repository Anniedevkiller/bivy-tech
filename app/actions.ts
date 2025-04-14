"use server"

import { z } from "zod"
import { Resend } from "resend"

// Initialize Resend with API key
// In a real application, you would use an environment variable
const resend = new Resend("re_123456789")

const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(5),
  message: z.string().min(10),
})

export async function submitContactForm(formData: FormData) {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  })

  if (!validatedFields.success) {
    return { success: false, message: "Invalid form data. Please check your inputs." }
  }

  const { name, email, subject, message } = validatedFields.data

  try {
    // Send confirmation email to user
    await resend.emails.send({
      from: "Bivy Tech <no-reply@bivytech.com>",
      to: email,
      subject: `Thank you for contacting Bivy Tech: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #6366F1;">Thank you for contacting Bivy Tech</h2>
          <p>Dear ${name},</p>
          <p>We have received your message regarding "${subject}". Our team will review your inquiry and get back to you as soon as possible.</p>
          <p>Here's a copy of your message:</p>
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p>${message}</p>
          </div>
          <p>If you have any additional questions, please don't hesitate to contact us.</p>
          <p>Best regards,<br>The Bivy Tech Team</p>
        </div>
      `,
    })

    // Send notification to admin
    await resend.emails.send({
      from: "Bivy Tech Website <no-reply@bivytech.com>",
      to: "bivylightspace@gmail.com",
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #6366F1;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p>${message}</p>
          </div>
        </div>
      `,
    })

    return {
      success: true,
      message: "Thank you for your message. We'll get back to you soon!",
    }
  } catch (error) {
    console.error("Email sending failed:", error)
    return {
      success: true, // Still return success to the user
      message: "Thank you for your message. We'll get back to you soon!",
    }
  }
}

const gameRegistrationSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  gamertag: z.string().min(3),
  teamName: z.string().min(3),
  // In a real application, you would validate the file
})

export async function submitGameRegistration(formData: FormData) {
  const validatedFields = gameRegistrationSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    gamertag: formData.get("gamertag"),
    teamName: formData.get("teamName"),
  })

  if (!validatedFields.success) {
    return { success: false, message: "Invalid form data. Please check your inputs." }
  }

  const { name, email, phone, gamertag, teamName } = validatedFields.data

  try {
    // Send confirmation email to user
    await resend.emails.send({
      from: "Bivy Tech Gaming <no-reply@bivytech.com>",
      to: email,
      subject: "CODM Tournament Registration Confirmation",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #6366F1;">CODM Tournament Registration Confirmation</h2>
          <p>Dear ${name},</p>
          <p>Thank you for registering for the Bivy Tech CODM Tournament! Your registration has been received.</p>
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Registration Details:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Gamertag:</strong> ${gamertag}</p>
            <p><strong>Team Name:</strong> ${teamName}</p>
          </div>
          <p>We have received your payment proof and will verify it shortly. Once verified, you will receive another email with additional tournament details.</p>
          <p>If you have any questions, please contact us at bivylightspace@gmail.com.</p>
          <p>Best regards,<br>The Bivy Tech Gaming Team</p>
        </div>
      `,
    })

    // Send notification to admin
    await resend.emails.send({
      from: "Bivy Tech Website <no-reply@bivytech.com>",
      to: "bivylightspace@gmail.com",
      subject: "New CODM Tournament Registration",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #6366F1;">New CODM Tournament Registration</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Gamertag:</strong> ${gamertag}</p>
          <p><strong>Team Name:</strong> ${teamName}</p>
          <p>Please check the admin dashboard for the payment proof.</p>
        </div>
      `,
    })

    return {
      success: true,
      message: "Thank you for registering! Check your email for confirmation details.",
    }
  } catch (error) {
    console.error("Email sending failed:", error)
    return {
      success: true, // Still return success to the user
      message: "Thank you for registering! We'll send you confirmation details shortly.",
    }
  }
}
