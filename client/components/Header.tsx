import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-10 h-10 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {/* Triangle outline */}
                <path
                  d="M 50 10 L 90 90 L 10 90 Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                />
                {/* Top triangles */}
                <path
                  d="M 50 10 L 70 50 L 30 50 Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                {/* Middle line */}
                <line
                  x1="30"
                  y1="50"
                  x2="70"
                  y2="50"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                {/* Smile arc and X */}
                <path
                  d="M 30 50 Q 50 70 70 50"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <line
                  x1="35"
                  y1="55"
                  x2="60"
                  y2="80"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <line
                  x1="65"
                  y1="55"
                  x2="40"
                  y2="80"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-foreground text-base">
                Agentic
              </span>
              <span className="text-xs text-muted-foreground">
                DevOps Collective
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-sm text-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              to="/the-collective"
              className="text-sm text-foreground hover:text-primary transition-colors"
            >
              The Collective
            </Link>
            <Link
              to="/projects"
              className="text-sm text-foreground hover:text-primary transition-colors"
            >
              Projects
            </Link>
            <Link
              to="/community"
              className="text-sm text-foreground hover:text-primary transition-colors"
            >
              Community
            </Link>
            <Link
              to="/resources"
              className="text-sm text-foreground hover:text-primary transition-colors"
            >
              Resources
            </Link>
            <Link
              to="/events"
              className="text-sm text-foreground hover:text-primary transition-colors"
            >
              Events
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 hover:bg-secondary transition-colors rounded"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-2 border-t border-border pt-4">
            <Link
              to="/"
              className="block px-4 py-2 text-foreground hover:bg-secondary transition-colors rounded"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/the-collective"
              className="block px-4 py-2 text-foreground hover:bg-secondary transition-colors rounded"
              onClick={() => setIsOpen(false)}
            >
              The Collective
            </Link>
            <Link
              to="/projects"
              className="block px-4 py-2 text-foreground hover:bg-secondary transition-colors rounded"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link
              to="/community"
              className="block px-4 py-2 text-foreground hover:bg-secondary transition-colors rounded"
              onClick={() => setIsOpen(false)}
            >
              Community
            </Link>
            <Link
              to="/resources"
              className="block px-4 py-2 text-foreground hover:bg-secondary transition-colors rounded"
              onClick={() => setIsOpen(false)}
            >
              Resources
            </Link>
            <Link
              to="/events"
              className="block px-4 py-2 text-foreground hover:bg-secondary transition-colors rounded"
              onClick={() => setIsOpen(false)}
            >
              Events
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
