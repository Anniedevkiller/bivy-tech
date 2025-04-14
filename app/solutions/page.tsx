import type { Metadata } from "next"
import { Code, Cloud, Brain, Shield, Database, Wrench } from "lucide-react"

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Explore our comprehensive IT solutions including software development, cloud computing, AI development, cyber security, blockchain development, and web application support.",
}

export default function SolutionsPage() {
  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Our Solutions</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Comprehensive IT solutions tailored to your business needs.
        </p>
      </div>

      <div className="mt-16 space-y-24">
        {/* Software Development */}
        <section id="software-development" className="scroll-mt-20">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Code className="h-8 w-8" />
              </div>
              <h2 className="text-3xl font-bold">Software Development</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Custom software solutions designed to address your unique business challenges and opportunities.
              </p>
            </div>
            <div className="space-y-4 rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="text-xl font-bold">What We Offer</h3>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>Custom web application development</li>
                <li>Mobile app development (iOS and Android)</li>
                <li>Enterprise software solutions</li>
                <li>API development and integration</li>
                <li>Legacy system modernization</li>
                <li>Software testing and quality assurance</li>
              </ul>
              <h3 className="text-xl font-bold">Benefits</h3>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>Tailored solutions that address your specific business needs</li>
                <li>Improved operational efficiency and productivity</li>
                <li>Enhanced user experience and customer satisfaction</li>
                <li>Scalable architecture to support business growth</li>
                <li>Ongoing support and maintenance</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Cloud Computing */}
        <section id="cloud-computing" className="scroll-mt-20">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Cloud className="h-8 w-8" />
              </div>
              <h2 className="text-3xl font-bold">Cloud Computing</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Scalable cloud solutions to optimize your infrastructure, reduce costs, and improve performance.
              </p>
            </div>
            <div className="space-y-4 rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="text-xl font-bold">What We Offer</h3>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>Cloud migration and strategy</li>
                <li>Infrastructure as a Service (IaaS)</li>
                <li>Platform as a Service (PaaS)</li>
                <li>Software as a Service (SaaS)</li>
                <li>Cloud security and compliance</li>
                <li>Hybrid and multi-cloud solutions</li>
              </ul>
              <h3 className="text-xl font-bold">Benefits</h3>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>Reduced IT infrastructure costs</li>
                <li>Improved scalability and flexibility</li>
                <li>Enhanced data security and disaster recovery</li>
                <li>Increased collaboration and productivity</li>
                <li>Access to cutting-edge technologies</li>
              </ul>
            </div>
          </div>
        </section>

        {/* AI Development */}
        <section id="ai-development" className="scroll-mt-20">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Brain className="h-8 w-8" />
              </div>
              <h2 className="text-3xl font-bold">AI Development</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Cutting-edge AI solutions to automate processes, gain insights, and drive innovation.
              </p>
            </div>
            <div className="space-y-4 rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="text-xl font-bold">What We Offer</h3>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>Machine learning model development</li>
                <li>Natural language processing</li>
                <li>Computer vision solutions</li>
                <li>Predictive analytics</li>
                <li>AI-powered chatbots and virtual assistants</li>
                <li>AI integration with existing systems</li>
              </ul>
              <h3 className="text-xl font-bold">Benefits</h3>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>Automated business processes</li>
                <li>Data-driven decision making</li>
                <li>Enhanced customer experiences</li>
                <li>Improved operational efficiency</li>
                <li>Competitive advantage through innovation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Cyber Security */}
        <section id="cyber-security" className="scroll-mt-20">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Shield className="h-8 w-8" />
              </div>
              <h2 className="text-3xl font-bold">Cyber Security</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Comprehensive security solutions to protect your business from cyber threats and data breaches.
              </p>
            </div>
            <div className="space-y-4 rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="text-xl font-bold">What We Offer</h3>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>Security assessment and auditing</li>
                <li>Penetration testing</li>
                <li>Security monitoring and incident response</li>
                <li>Data protection and encryption</li>
                <li>Security awareness training</li>
                <li>Compliance and regulatory support</li>
              </ul>
              <h3 className="text-xl font-bold">Benefits</h3>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>Protection against cyber threats and attacks</li>
                <li>Reduced risk of data breaches</li>
                <li>Compliance with industry regulations</li>
                <li>Enhanced customer trust and confidence</li>
                <li>Business continuity and resilience</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Blockchain Development */}
        <section id="blockchain-development" className="scroll-mt-20">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Database className="h-8 w-8" />
              </div>
              <h2 className="text-3xl font-bold">Blockchain Development</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Innovative blockchain solutions for secure, transparent, and efficient business processes.
              </p>
            </div>
            <div className="space-y-4 rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="text-xl font-bold">What We Offer</h3>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>Blockchain strategy and consulting</li>
                <li>Smart contract development</li>
                <li>Decentralized application (DApp) development</li>
                <li>Tokenization and cryptocurrency solutions</li>
                <li>Private and consortium blockchain networks</li>
                <li>Blockchain integration with existing systems</li>
              </ul>
              <h3 className="text-xl font-bold">Benefits</h3>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>Enhanced security and transparency</li>
                <li>Reduced fraud and improved trust</li>
                <li>Streamlined processes and reduced costs</li>
                <li>Immutable record-keeping</li>
                <li>New business models and revenue streams</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Web Application Support */}
        <section id="web-application-support" className="scroll-mt-20">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Wrench className="h-8 w-8" />
              </div>
              <h2 className="text-3xl font-bold">Web Application Support & Maintenance</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Ongoing support and maintenance to ensure your web applications run smoothly and efficiently.
              </p>
            </div>
            <div className="space-y-4 rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="text-xl font-bold">What We Offer</h3>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>24/7 application monitoring and support</li>
                <li>Bug fixing and troubleshooting</li>
                <li>Performance optimization</li>
                <li>Security updates and patches</li>
                <li>Feature enhancements and updates</li>
                <li>Technical documentation and knowledge transfer</li>
              </ul>
              <h3 className="text-xl font-bold">Benefits</h3>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>Minimized downtime and disruptions</li>
                <li>Improved application performance and user experience</li>
                <li>Reduced security vulnerabilities</li>
                <li>Proactive issue identification and resolution</li>
                <li>Continuous improvement and adaptation to changing needs</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
