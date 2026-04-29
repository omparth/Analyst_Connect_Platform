'use client';

import Link from 'next/link';
import { Github, Twitter, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-4">

          <div>
            <Link href="/" className="group flex items-center gap-1 mb-4">
              <div className="relative flex items-center">
                <span className="text-xl font-black tracking-tighter text-foreground transition-all duration-300 group-hover:tracking-tight">
                  ANALYST
                  <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                    CONNECT
                  </span>
                </span>

                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="ml-0.5 h-1.5 w-1.5 rounded-full bg-primary"
                />
              </div>
            </Link>

            <p className="text-sm text-foreground/60 leading-relaxed">
              Connect investors with expert analysts for smarter,
              faster, and more confident financial decision-making.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-foreground">
              Product
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/analysts"
                  className="text-sm text-foreground/60 transition-colors hover:text-foreground"
                >
                  Find Analysts
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-foreground/60 transition-colors hover:text-foreground"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-foreground/60 transition-colors hover:text-foreground"
                >
Top Rated Analysts                </a>
              </li>
            </ul>
          </div>

<div>
  <h3 className="mb-4 font-semibold text-foreground">
    Company
  </h3>

  <ul className="space-y-2">
    <li>
      <Link
        href="/about"
        className="text-sm text-foreground/60 transition-colors hover:text-foreground"
      >
        About
      </Link>
    </li>

    <li>
      <Link
        href="/analysts"
        className="text-sm text-foreground/60 transition-colors hover:text-foreground"
      >
        Find Analysts
      </Link>
    </li>

    <li>
      <Link
        href="/contact"
        className="text-sm text-foreground/60 transition-colors hover:text-foreground"
      >
        Contact
      </Link>
    </li>
  </ul>
</div>
          <div>
            <h3 className="mb-4 font-semibold text-foreground">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm text-foreground/60 transition-colors hover:text-foreground"
                >
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-foreground/60 transition-colors hover:text-foreground"
                >
                  Terms
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-foreground/60 transition-colors hover:text-foreground"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-foreground/60">
            © 2024 Analyst Connect. All rights reserved.
          </p>

          <div className="flex gap-4">
            <a
              href="#"
              className="text-foreground/60 transition-colors hover:text-foreground"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a>

            <a
              href="#"
              className="text-foreground/60 transition-colors hover:text-foreground"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>

            <a
              href="#"
              className="text-foreground/60 transition-colors hover:text-foreground"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}