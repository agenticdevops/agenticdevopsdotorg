import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TheCollective() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 px-4">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
                The Collective
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                <strong>Agentic DevOps Collective</strong> is a builder-led community exploring how{" "}
                <strong>agentic AI systems</strong> can be applied to real-world DevOps, SRE, and
                platform engineering.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                We bring together practitioners who don't just talk about AI for operations — but
                actively <strong>build, test, and operate agentic systems</strong> in real
                environments.
              </p>
            </div>
          </div>
        </section>

        {/* Why We Exist */}
        <section className="py-16 md:py-24 px-4 bg-secondary/20">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-6">Why We Exist</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                AI is reshaping how systems are built and operated.
                <br />
                For DevOps and SRE professionals, this shift is not optional.
              </p>
              <div className="bg-background border border-border rounded-lg p-6 mb-6">
                <p className="text-foreground font-semibold mb-4">We exist to:</p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>
                      Experiment early and openly with agentic systems
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>
                      Share practical patterns, failures, and lessons
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>
                      Build open source frameworks and tools
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>
                      Help practitioners <strong>adapt, survive, and thrive</strong> in the age of AI
                    </span>
                  </li>
                </ul>
              </div>
              <p className="text-lg text-muted-foreground font-semibold">
                Our focus is on <strong>real systems</strong>, not hype.
              </p>
            </div>
          </div>
        </section>

        {/* How We Work */}
        <section className="py-16 md:py-24 px-4">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8">How We Work</h2>
              <div className="space-y-4">
                <div className="p-6 border border-border rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">Builders First</h3>
                  <p className="text-muted-foreground">
                    Working systems over opinions
                  </p>
                </div>
                <div className="p-6 border border-border rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">Open by Default</h3>
                  <p className="text-muted-foreground">
                    Knowledge and core tools shared openly
                  </p>
                </div>
                <div className="p-6 border border-border rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">Human-Centered Automation</h3>
                  <p className="text-muted-foreground">
                    Agents augment, not replace, operators
                  </p>
                </div>
                <div className="p-6 border border-border rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">Practical Over Performative</h3>
                  <p className="text-muted-foreground">
                    Production reality matters
                  </p>
                </div>
              </div>
              <div className="mt-8 p-6 bg-secondary/10 border border-border rounded-lg">
                <p className="text-foreground font-semibold">
                  If it can't survive contact with real infrastructure, it doesn't belong here.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Open Source and Value Creation */}
        <section className="py-16 md:py-24 px-4 bg-secondary/20">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Open Source and Value Creation
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We actively support <strong>open source projects</strong> and open knowledge sharing.
              </p>
              <div className="bg-background border border-border rounded-lg p-6 mb-6">
                <p className="text-foreground font-semibold mb-4">We are also explicit about this:</p>
                <p className="text-muted-foreground italic">
                  "Creating real value should allow contributors, companies, and sponsors to
                  benefit."
                </p>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Open collaboration and commercial success are not opposites.
                <br />
                When done transparently, they reinforce each other.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Members and organizations may build <strong>commercial products independently</strong>{" "}
                based on their work or learnings.
                <br />
                The collective itself remains a <strong>community initiative</strong>, not a vendor
                or product.
              </p>
            </div>
          </div>
        </section>

        {/* Governance and Evolution */}
        <section className="py-16 md:py-24 px-4">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-6">Governance and Evolution</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Today, the collective is <strong>initiated and guided</strong> by its founder and a
                small group of contributors.
              </p>
              <div className="bg-secondary/10 border border-border rounded-lg p-6 mb-6">
                <p className="text-foreground font-semibold mb-4">Over time, it is intended to:</p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>Grow more decentralized</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>Be shaped by active contributors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>Evolve its governance organically as the community matures</span>
                  </li>
                </ul>
              </div>
              <p className="text-lg text-muted-foreground font-semibold">
                Structure will follow participation — not the other way around.
              </p>
            </div>
          </div>
        </section>

        {/* The Bottom Line */}
        <section className="py-16 md:py-24 px-4 bg-secondary/20">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">The Bottom Line</h2>
              <div className="bg-background border-l-4 border-primary rounded-r-lg p-8">
                <p className="text-lg text-foreground leading-relaxed space-y-4">
                  <span className="block">
                    <strong>Build in the open.</strong>
                  </span>
                  <span className="block">
                    <strong>Create real value.</strong>
                  </span>
                  <span className="block">
                    <strong>Let those who contribute meaningfully benefit.</strong>
                  </span>
                  <span className="block">
                    <strong>Navigate the age of AI — together.</strong>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 px-4">
          <div className="container mx-auto">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Join Us</h2>
              <p className="text-lg text-muted-foreground mb-8">
                If this resonates, we'd love to have you build with us.
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <a
                  href="https://www.skool.com/agenticops-builders-6056/about"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Join the Community
                </a>
                <a
                  href="https://github.com/agenticdevops"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
