import type { Metadata } from "next"
import { ContactForm } from "@/app/contact/contact-form"
import { Instagram, Twitter, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Bivy Tech for all your IT solution and game development needs.",
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Contact Us</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Get in touch with our team to discuss how we can help you achieve your goals.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold">Get in Touch</h2>
          <p className="mt-4 text-muted-foreground">
            We'd love to hear from you! Whether you have a question about our services, need a quote, or want to discuss
            a project, our team is ready to help.
          </p>

          <div className="mt-8">
            <h3 className="text-xl font-bold">Our Location</h3>
            <p className="mt-2 text-muted-foreground">Lagos, Nigeria</p>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-bold">Connect With Us</h3>
            <div className="mt-4 space-y-4">
              <a
                href="mailto:bivylightspace@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary"
              >
                <Mail className="h-5 w-5" />
                <span>bivylightspace@gmail.com</span>
              </a>
              <a
                href="https://www.instagram.com/bivytech/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary"
              >
                <Instagram className="h-5 w-5" />
                <span>@bivytech</span>
              </a>
              <a
                href="https://x.com/bivylightspace"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary"
              >
                <Twitter className="h-5 w-5" />
                <span>@bivylightspace</span>
              </a>
              <a
                href="https://wa.me/message/MPGVRLFQ2C5JI1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                  <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                  <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                  <path d="M9.5 13.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5Z" />
                </svg>
                <span>WhatsApp Business</span>
              </a>
            </div>
          </div>
        </div>

        <div>
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-bold">Send Us a Message</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}
