import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 px-4">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <div className="mb-8 flex justify-center">
                <svg viewBox="0 0 100 100" className="w-24 h-24">
                  <path d="M 50 10 L 90 90 L 10 90 Z" fill="none" stroke="currentColor" strokeWidth="3"/>
                  <path d="M 50 10 L 70 50 L 30 50 Z" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <line x1="30" y1="50" x2="70" y2="50" stroke="currentColor" strokeWidth="2"/>
                  <path d="M 30 50 Q 50 70 70 50" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <line x1="35" y1="55" x2="60" y2="80" stroke="currentColor" strokeWidth="2"/>
                  <line x1="65" y1="55" x2="40" y2="80" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Building the Future of Agentic DevOps, Together
              </h1>
              <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
                Agentic DevOps Collective is a practitioner-led community building open-source frameworks, tools, and patterns for applying agentic AI systems to DevOps, SRE, and infrastructure operations.
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <a
                  href="https://www.skool.com/agenticops-builders-6056/about"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Join the Builders Community
                </a>
                <Link
                  to="/projects"
                  className="inline-block px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors"
                >
                  Explore Open Source Projects
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* What is Agentic DevOps */}
        <section className="py-16 md:py-24 px-4 bg-secondary/20">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
                What is Agentic DevOps?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Agentic DevOps focuses on designing AI agents that can observe, reason, act, and learn across DevOps and SRE workflows—augmenting human operators rather than replacing them.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-background border border-border rounded-lg">
                  <h3 className="font-semibold text-foreground mb-3">Agentic Systems for Operations</h3>
                  <p className="text-sm text-muted-foreground">
                    AI agents designed for troubleshooting, root cause analysis, and intelligent automation
                  </p>
                </div>
                <div className="p-6 bg-background border border-border rounded-lg">
                  <h3 className="font-semibold text-foreground mb-3">Skills-Driven Agents</h3>
                  <p className="text-sm text-muted-foreground">
                    Converting runbooks and operational procedures into agent capabilities
                  </p>
                </div>
                <div className="p-6 bg-background border border-border rounded-lg">
                  <h3 className="font-semibold text-foreground mb-3">Human-in-the-Loop</h3>
                  <p className="text-sm text-muted-foreground">
                    Designed by default to keep operators in control and informed of agent actions
                  </p>
                </div>
                <div className="p-6 bg-background border border-border rounded-lg">
                  <h3 className="font-semibold text-foreground mb-3">Real Infrastructure</h3>
                  <p className="text-sm text-muted-foreground">
                    Built for production systems, not demos or lab environments
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Active Open Source Projects */}
        <section className="py-16 md:py-24 px-4">
          <div className="container mx-auto">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
                Active Open Source Projects
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Community-built, open source, and governed in the open.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Project 1 */}
                <div className="p-6 border border-border rounded-lg hover:border-primary/50 transition-colors">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Agentic Ops Framework</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Core framework for building agentic systems for DevOps workflows.
                  </p>
                  <a
                    href="https://github.com/agenticdevops/aof"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline text-sm font-semibold"
                  >
                    View on GitHub →
                  </a>
                </div>

                {/* Project 2 */}
                <div className="p-6 border border-border rounded-lg hover:border-primary/50 transition-colors">
                  <h3 className="text-xl font-semibold text-foreground mb-2">OpsCMD</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Agent-friendly command execution and workflow orchestration toolkit.
                  </p>
                  <a
                    href="https://github.com/agenticdevops/opscmd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline text-sm font-semibold"
                  >
                    View on GitHub →
                  </a>
                </div>

                {/* Project 3 */}
                <div className="p-6 border border-border rounded-lg hover:border-primary/50 transition-colors">
                  <h3 className="text-xl font-semibold text-foreground mb-2">KubeAgentiX CE</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Community Edition of agentic Kubernetes troubleshooting and operations.
                  </p>
                  <a
                    href="https://github.com/kubeagentix/kubeagenticx-ce"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline text-sm font-semibold"
                  >
                    View on GitHub →
                  </a>
                </div>

                {/* Project 4 */}
                <div className="p-6 border border-border rounded-lg hover:border-primary/50 transition-colors">
                  <h3 className="text-xl font-semibold text-foreground mb-2">XopsBot for OpenClaw</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Chat-native DevOps bots built on OpenClaw.
                  </p>
                  <a
                    href="https://github.com/kubeagentix/xopsbot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline text-sm font-semibold"
                  >
                    View on GitHub →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Born from the Collective */}
        <section className="py-16 md:py-24 px-4 bg-secondary/20">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
                Projects Born from the Collective
              </h2>
              <div className="bg-background border border-border rounded-lg p-8 mb-8">
                <p className="text-muted-foreground mb-4">
                  Some members of the collective also build commercial products inspired by or built on learnings from these open projects. These products are developed and operated independently from the collective.
                </p>
              </div>
              <div className="p-6 border border-border rounded-lg hover:border-primary/50 transition-colors">
                <h3 className="text-xl font-semibold text-foreground mb-2">KubeAgentix Desktop</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  A commercial agentic operations desktop for Kubernetes practitioners.
                </p>
                <p className="text-xs text-muted-foreground mb-4">
                  Built independently by contributors to the collective
                </p>
                <a
                  href="https://kubeagentix.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline text-sm font-semibold"
                >
                  Visit Website →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 px-4">
          <div className="container mx-auto">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Ready to Join the Collective?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Connect with builders, contribute to open source projects, and shape the future of agentic DevOps.
              </p>
              <a
                href="https://www.skool.com/agenticops-builders-6056/about"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Join Our Skool Community
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
