"use client"

import Link from "next/link"
import { GameRegistrationForm } from "@/app/game-studio/game-registration-form"
import { Button } from "@/components/ui/button"
import { Gamepad2, Trophy, Calendar, Instagram, AlertTriangle } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function GameStudioClientPage() {
  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="animate-fade-up text-4xl font-bold tracking-tight sm:text-5xl">Bivy Game Studio</h1>
        <p className="mt-4 animate-fade-up text-lg text-muted-foreground animation-delay-200">
          Creating immersive gaming experiences that bring people together.
        </p>
      </div>

      <section className="mt-16">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="animate-slide-in-left">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Gamepad2 className="h-8 w-8" />
            </div>
            <h2 className="text-3xl font-bold">Our Games</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              At Bivy Game Studio, we're passionate about creating games that are not just entertaining but also
              meaningful. Our games are designed to foster connections, challenge players, and create memorable
              experiences.
            </p>
            <p className="mt-4 text-muted-foreground">
              We're currently working on exciting titles that will be released in the coming months. Stay tuned for
              updates on our upcoming games!
            </p>
          </div>
          <div className="animate-slide-in-right rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="text-xl font-bold">Upcoming Releases</h3>
            <div className="mt-4 space-y-4">
              <div className="group rounded-lg bg-muted p-4 transition-all hover:bg-muted/80 hover:shadow-md">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold">The Redemption</h4>
                  <Badge variant="destructive" className="animate-pulse">
                    18+
                  </Badge>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  A romantic action anime game that takes players on an emotional journey through love, war, betrayal,
                  and redemption.
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-destructive" />
                  <p className="text-xs text-destructive">Contains mature content: violence, blood, and adult themes</p>
                </div>
                <p className="mt-2 text-xs text-muted-foreground">Coming Q2 2027</p>
              </div>

              <div
                className="group cursor-pointer rounded-lg bg-primary/10 p-4 transition-all hover:bg-primary/20 hover:shadow-md"
                onClick={() => document.getElementById("tournament")?.scrollIntoView({ behavior: "smooth" })}
              >
                <h4 className="font-bold">CODM Tournament</h4>
                <p className="text-sm text-muted-foreground">
                  Join our upcoming Call of Duty Mobile tournament and compete with players from across Nigeria!
                </p>
                <p className="mt-2 text-xs text-muted-foreground">Registration open now!</p>
                <div className="mt-2 text-xs font-medium text-primary">Learn more →</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="tournament" className="mt-24 scroll-mt-20">
        <div className="animate-fade-in rounded-lg border bg-card p-8 shadow-sm">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Trophy className="h-8 w-8" />
              </div>
              <h2 className="text-3xl font-bold">CODM Tournament</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Join Nigeria's premier Call of Duty Mobile tournament and showcase your skills against the best players
                in the country!
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Calendar className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-bold">Q3 2025</h3>
                    <p className="text-sm text-muted-foreground">Tournament dates to be announced soon</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
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
                    className="mt-1 h-5 w-5 text-primary"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                    <path d="M2 12h20" />
                  </svg>
                  <div>
                    <h3 className="font-bold">Lagos, Nigeria</h3>
                    <p className="text-sm text-muted-foreground">Venue details to be announced</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
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
                    className="mt-1 h-5 w-5 text-primary"
                  >
                    <path d="M12 2v20" />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                  <div>
                    <h3 className="font-bold">Entry Fee: ₦10,000</h3>
                    <p className="text-sm text-muted-foreground">
                      Payment details: 8104680342 (OPAY) - Tiffany Eribenne
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <h3 className="text-xl font-bold">Tournament Details</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>
                    <span className="font-medium text-foreground">Format:</span> 5v5 Team Deathmatch & Search and
                    Destroy
                  </p>
                  <p>
                    <span className="font-medium text-foreground">Platforms:</span> Mobile devices only (Android & iOS)
                  </p>
                  <p>
                    <span className="font-medium text-foreground">Team Size:</span> 5 players + 1 substitute (optional)
                  </p>
                  <p>
                    <span className="font-medium text-foreground">Tournament Structure:</span> Group stage followed by
                    single elimination bracket
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold">Prizes</h3>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-yellow-500 text-xs font-bold text-white">
                      1
                    </span>
                    <span>1st Place: ₦500,000</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-xs font-bold text-white">
                      2
                    </span>
                    <span>2nd Place: ₦250,000</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-700 text-xs font-bold text-white">
                      3
                    </span>
                    <span>3rd Place: ₦100,000</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 rounded-lg bg-primary/10 p-4">
                <h3 className="font-bold">Why Participate?</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                  <li>Showcase your skills against Nigeria's best CODM players</li>
                  <li>Win substantial cash prizes</li>
                  <li>Network with fellow gamers and esports enthusiasts</li>
                  <li>Potential scouting opportunities from professional esports organizations</li>
                  <li>Be part of Nigeria's growing esports community</li>
                </ul>
              </div>
            </div>
            <div>
              <div className="animate-fade-in rounded-lg border bg-muted p-6">
                <h3 className="text-xl font-bold">Register for the Tournament</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Fill out the form below to register for the CODM Tournament. After registration, you'll need to make a
                  payment of ₦10,000 to complete your entry.
                </p>
                <GameRegistrationForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="animate-fade-up text-3xl font-bold">Join Our Gaming Community</h2>
          <p className="mt-4 animate-fade-up text-lg text-muted-foreground animation-delay-200">
            Connect with other gamers, stay updated on our latest releases, and get exclusive access to beta testing
            opportunities.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="animate-fade-up animation-delay-300">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="animate-fade-up animation-delay-400">
              <a
                href="https://www.instagram.com/bivytech/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Instagram className="h-5 w-5" />
                Follow on Instagram
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
