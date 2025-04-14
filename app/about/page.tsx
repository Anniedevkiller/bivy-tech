import Image from "next/image"
import type { Metadata } from "next"
import { ScrollAnimation } from "@/components/scroll-animation"

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Bivy Tech and our mission to solve tech problems with passion and expertise.",
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="animate-fade-up text-4xl font-bold tracking-tight sm:text-5xl">About Bivy Tech</h1>
        <p className="mt-4 animate-fade-up text-lg text-muted-foreground animation-delay-200">
          Building deep bonds through technology and innovative solutions.
        </p>
      </div>

      <div className="mt-16 grid gap-12 md:grid-cols-2">
        <div>
          <ScrollAnimation>
            <h2 className="text-2xl font-bold">Our Story</h2>
            <p className="mt-4 text-muted-foreground">
              Bivy Tech was founded with a clear vision: to create deep bonds between technology and people. The name
              "Bivy" itself represents our commitment to fostering these connections, as it stands for "deep bonds."
            </p>
            <p className="mt-4 text-muted-foreground">
              As an IT solution company and game studio based in Lagos, Nigeria, we combine technical expertise with
              creative innovation to deliver exceptional solutions for our clients. Our team of passionate professionals
              is dedicated to solving complex tech problems and creating engaging digital experiences.
            </p>
            <p className="mt-4 text-muted-foreground">
              We believe that technology should be accessible, intuitive, and beneficial for everyone. That's why we
              work tirelessly to develop solutions that not only meet our clients' needs but exceed their expectations.
            </p>
          </ScrollAnimation>

          <ScrollAnimation className="mt-8">
            <h2 className="text-2xl font-bold">Our Mission</h2>
            <p className="mt-4 text-muted-foreground">
              To empower businesses and individuals through innovative technology solutions that foster growth,
              efficiency, and success. We strive to create deep bonds between our clients and technology, making digital
              transformation a seamless and rewarding journey.
            </p>
          </ScrollAnimation>

          <ScrollAnimation className="mt-8">
            <h2 className="text-2xl font-bold">Our Vision</h2>
            <p className="mt-4 text-muted-foreground">
              To be a leading force in the global tech industry, recognized for our innovative solutions, exceptional
              service, and commitment to creating technology that builds deep bonds and transforms lives.
            </p>
          </ScrollAnimation>
        </div>

        <div>
          <div className="sticky top-24 space-y-8 rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md">
            <h2 className="text-2xl font-bold">Meet Our CEO</h2>
            <div className="overflow-hidden rounded-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c7569eb7-c1d3-4071-8253-9aa1a243d525.jpg-moJApKXMbktMDIKcDzLRYdQcDnGX8n.jpeg"
                alt="Tiffany Eribenne - CEO of Bivy Tech"
                width={500}
                height={500}
                className="w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Tiffany Eribenne</h3>
              <p className="text-sm text-muted-foreground">Founder & CEO</p>
              <p className="text-muted-foreground">
                Tiffany Eribenne is a young, dynamic Nigerian entrepreneur with a passion for solving complex tech
                problems. As a certified Product Manager and Scrum Master, she brings a unique blend of technical
                expertise and leadership skills to Bivy Tech.
              </p>
              <p className="text-muted-foreground">
                Driven by her vision to create technology that forms deep bonds with users, Tiffany founded Bivy Tech to
                bridge the gap between advanced technology and everyday users. Her innovative approach to IT solutions
                and game development has positioned Bivy Tech as an emerging leader in Nigeria's tech ecosystem.
              </p>
              <p className="text-muted-foreground">
                With a keen eye for detail and a commitment to excellence, Tiffany leads a team of passionate
                professionals dedicated to delivering exceptional results for clients across various industries.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <ScrollAnimation>
          <h2 className="text-2xl font-bold">Our Values</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border bg-card p-6 shadow-sm transition-all hover:-translate-y-2 hover:shadow-md">
              <h3 className="text-xl font-bold">Innovation</h3>
              <p className="mt-2 text-muted-foreground">
                We constantly push the boundaries of what's possible, embracing new technologies and creative solutions.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6 shadow-sm transition-all hover:-translate-y-2 hover:shadow-md">
              <h3 className="text-xl font-bold">Excellence</h3>
              <p className="mt-2 text-muted-foreground">
                We strive for excellence in everything we do, delivering high-quality solutions that exceed
                expectations.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6 shadow-sm transition-all hover:-translate-y-2 hover:shadow-md">
              <h3 className="text-xl font-bold">Integrity</h3>
              <p className="mt-2 text-muted-foreground">
                We operate with honesty, transparency, and ethical standards in all our business dealings.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6 shadow-sm transition-all hover:-translate-y-2 hover:shadow-md">
              <h3 className="text-xl font-bold">Collaboration</h3>
              <p className="mt-2 text-muted-foreground">
                We believe in the power of teamwork and partnership, working closely with our clients to achieve
                success.
              </p>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  )
}
