import Link from "next/link"
import { ArrowRight, Code, Cloud, Brain, Shield, Database, Wrench, Gamepad2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted py-20 md:py-32">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.1),transparent_70%)]"></div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="animate-fade-up text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Building <span className="text-primary">Deep Bonds</span> Through Technology
            </h1>
            <p className="mt-6 animate-fade-up text-lg text-muted-foreground animation-delay-200">
              Bivy Tech is an IT solution company and game studio dedicated to solving complex tech problems with
              innovative solutions and passionate expertise.
            </p>
            <div className="mt-10 flex animate-fade-up flex-col items-center justify-center gap-4 sm:flex-row animation-delay-300">
              <Button asChild size="lg" className="transition-all hover:scale-105">
                <Link href="/solutions">Explore Solutions</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="transition-all hover:scale-105">
                <Link href="/game-studio">
                  Game Studio
                  <Gamepad2 className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent"></div>

        {/* Animated background elements */}
        <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute bottom-32 right-32 h-32 w-32 rounded-full bg-primary/5 blur-2xl"></div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="animate-fade-up text-3xl font-bold tracking-tight sm:text-4xl">Our IT Solutions</h2>
            <p className="mt-4 animate-fade-up text-lg text-muted-foreground animation-delay-200">
              We provide comprehensive IT solutions to help businesses thrive in the digital age.
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="group animate-fade-up animation-delay-300 rounded-lg border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Code className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-medium">Software Development</h3>
              <p className="text-muted-foreground">
                Custom software solutions tailored to your business needs, from web applications to mobile apps.
              </p>
              <Link
                href="/solutions#software-development"
                className="mt-4 inline-flex items-center text-sm font-medium text-primary transition-all group-hover:translate-x-1"
              >
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="group animate-fade-up animation-delay-400 rounded-lg border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Cloud className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-medium">Cloud Computing</h3>
              <p className="text-muted-foreground">
                Scalable cloud solutions to optimize your infrastructure, reduce costs, and improve performance.
              </p>
              <Link
                href="/solutions#cloud-computing"
                className="mt-4 inline-flex items-center text-sm font-medium text-primary transition-all group-hover:translate-x-1"
              >
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="group animate-fade-up animation-delay-500 rounded-lg border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Brain className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-medium">AI Development</h3>
              <p className="text-muted-foreground">
                Cutting-edge AI solutions to automate processes, gain insights, and drive innovation.
              </p>
              <Link
                href="/solutions#ai-development"
                className="mt-4 inline-flex items-center text-sm font-medium text-primary transition-all group-hover:translate-x-1"
              >
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="group animate-fade-up animation-delay-300 rounded-lg border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-medium">Cyber Security</h3>
              <p className="text-muted-foreground">
                Comprehensive security solutions to protect your business from cyber threats and data breaches.
              </p>
              <Link
                href="/solutions#cyber-security"
                className="mt-4 inline-flex items-center text-sm font-medium text-primary transition-all group-hover:translate-x-1"
              >
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="group animate-fade-up animation-delay-400 rounded-lg border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Database className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-medium">Blockchain Development</h3>
              <p className="text-muted-foreground">
                Innovative blockchain solutions for secure, transparent, and efficient business processes.
              </p>
              <Link
                href="/solutions#blockchain-development"
                className="mt-4 inline-flex items-center text-sm font-medium text-primary transition-all group-hover:translate-x-1"
              >
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="group animate-fade-up animation-delay-500 rounded-lg border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Wrench className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-medium">Web Application Support</h3>
              <p className="text-muted-foreground">
                Ongoing support and maintenance to ensure your web applications run smoothly and efficiently.
              </p>
              <Link
                href="/solutions#web-application-support"
                className="mt-4 inline-flex items-center text-sm font-medium text-primary transition-all group-hover:translate-x-1"
              >
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Game Studio Section */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="animate-fade-up text-3xl font-bold tracking-tight sm:text-4xl">Game Studio</h2>
            <p className="mt-4 animate-fade-up text-lg text-muted-foreground animation-delay-200">
              Discover our exciting game development projects and upcoming events.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <div className="animate-slide-in-left rounded-lg bg-card p-6 shadow-sm transition-all hover:shadow-md">
              <h3 className="mb-4 text-2xl font-bold">The Redemption</h3>
              <div className="mb-4 flex items-center gap-2">
                <span className="rounded-full bg-destructive px-2 py-0.5 text-xs font-semibold text-destructive-foreground">
                  18+
                </span>
                <span className="text-sm text-muted-foreground">Romantic Action Anime Game</span>
              </div>
              <p className="text-muted-foreground">
                A captivating journey through love, war, betrayal, and redemption. Experience intense emotions and
                thrilling action in this mature-themed anime-inspired game.
              </p>
              <Button asChild className="mt-6 transition-all hover:scale-105">
                <Link href="/game-studio">Learn More</Link>
              </Button>
            </div>
            <div className="animate-slide-in-right rounded-lg bg-card p-6 shadow-sm transition-all hover:shadow-md">
              <h3 className="mb-4 text-2xl font-bold">CODM Tournament</h3>
              <p className="text-muted-foreground">
                Join our upcoming Call of Duty Mobile tournament in Q3 2025. Compete with players from around Nigeria
                and win exciting cash prizes.
              </p>
              <Button asChild className="mt-6 transition-all hover:scale-105">
                <Link href="/game-studio#tournament">Register Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in rounded-lg bg-primary/10 p-8 md:p-12">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to Get Started?</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Contact us today to discuss how Bivy Tech can help your business thrive in the digital age.
              </p>
              <Button asChild size="lg" className="mt-8 transition-all hover:scale-105">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
