import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface PlaceholderPageProps {
  title: string;
  description: string;
  defaultContent?: string;
}

export default function PlaceholderPage({
  title,
  description,
  defaultContent,
}: PlaceholderPageProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        <section className="py-20 md:py-32 px-4">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                {title}
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                {description}
              </p>
              {defaultContent && (
                <div className="bg-secondary/20 border border-border rounded-lg p-8 mb-12 text-left">
                  <p className="text-muted-foreground whitespace-pre-wrap">
                    {defaultContent}
                  </p>
                </div>
              )}
              <div className="p-8 bg-secondary/10 border-2 border-dashed border-border rounded-lg">
                <p className="text-muted-foreground mb-4">
                  This page is ready to be filled with content.
                </p>
                <p className="text-sm text-muted-foreground mb-6">
                  Continue prompting to customize this page's content and
                  design.
                </p>
                <Link
                  to="/"
                  className="inline-block px-6 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
