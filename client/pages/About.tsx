import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 px-4">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                About Us
              </h1>
              <p className="text-lg text-muted-foreground">
                Learn about the mission, vision, and values of the Agentic
                DevOps Collective.
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16 md:py-24 px-4 bg-secondary/20">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To foster a global, practitioner-led community advancing the
                practical application of agentic AI systems in DevOps and SRE.
              </p>
            </div>
          </div>
        </section>

        {/* What We Are */}
        <section className="py-16 md:py-24 px-4">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                What We Are
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-secondary/10 border border-border rounded-lg">
                  <h3 className="font-semibold text-foreground mb-3">
                    Community Initiative
                  </h3>
                  <p className="text-muted-foreground">
                    A practitioner-led initiative bringing together DevOps and
                    AI experts from across the industry.
                  </p>
                </div>
                <div className="p-6 bg-secondary/10 border border-border rounded-lg">
                  <h3 className="font-semibold text-foreground mb-3">
                    Open Source First
                  </h3>
                  <p className="text-muted-foreground">
                    We believe in the power of open source to drive innovation
                    and advance the field collectively.
                  </p>
                </div>
                <div className="p-6 bg-secondary/10 border border-border rounded-lg">
                  <h3 className="font-semibold text-foreground mb-3">
                    Vendor Neutral
                  </h3>
                  <p className="text-muted-foreground">
                    Independent and neutral, focused on what's best for the
                    community, not any single vendor.
                  </p>
                </div>
                <div className="p-6 bg-secondary/10 border border-border rounded-lg">
                  <h3 className="font-semibold text-foreground mb-3">
                    Builder Driven
                  </h3>
                  <p className="text-muted-foreground">
                    Led by practitioners building real systems, not theorists or
                    marketers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Are Not */}
        <section className="py-16 md:py-24 px-4 bg-secondary/20">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                What We Are Not
              </h2>
              <div className="space-y-4">
                <div className="p-6 bg-background border border-border rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">
                    Not a Standards Body
                  </h3>
                  <p className="text-muted-foreground">
                    We focus on practical tools and patterns, not on creating
                    formal standards or specifications.
                  </p>
                </div>
                <div className="p-6 bg-background border border-border rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">
                    Not a Foundation
                  </h3>
                  <p className="text-muted-foreground">
                    We're a community initiative. Governance is lightweight and
                    focused on enabling builders.
                  </p>
                </div>
                <div className="p-6 bg-background border border-border rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">
                    Not a Vendor Marketplace
                  </h3>
                  <p className="text-muted-foreground">
                    We're not a platform for vendors to promote their products.
                    We focus on open source and community projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Community Guidelines */}
        <section className="py-16 md:py-24 px-4">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Community Values
              </h2>
              <div className="space-y-4">
                <div className="p-6 border border-border rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">
                    Openness
                  </h3>
                  <p className="text-muted-foreground">
                    We embrace open source, open communication, and transparent
                    decision-making.
                  </p>
                </div>
                <div className="p-6 border border-border rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">
                    Collaboration
                  </h3>
                  <p className="text-muted-foreground">
                    We believe in the power of collaboration to solve complex
                    problems.
                  </p>
                </div>
                <div className="p-6 border border-border rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">
                    Pragmatism
                  </h3>
                  <p className="text-muted-foreground">
                    We focus on practical, real-world solutions for DevOps and
                    SRE challenges.
                  </p>
                </div>
                <div className="p-6 border border-border rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">
                    Inclusivity
                  </h3>
                  <p className="text-muted-foreground">
                    Everyone is welcome to participate, contribute, and help
                    shape our direction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 px-4 bg-secondary/20">
          <div className="container mx-auto">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Get Involved
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Whether you're interested in contributing to open source
                projects, sharing knowledge, or just learning from the
                community, there's a place for you.
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
                  GitHub Organization
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
