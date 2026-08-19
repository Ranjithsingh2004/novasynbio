"use client";

import { BRAND, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-surface/20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8">
                <svg viewBox="0 0 36 36" className="w-full h-full">
                  <defs>
                    <linearGradient id="footerLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0AFFEF" />
                      <stop offset="100%" stopColor="#7B61FF" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M18 2 L32 10 L32 26 L18 34 L4 26 L4 10 Z"
                    fill="none"
                    stroke="url(#footerLogoGrad)"
                    strokeWidth="2"
                  />
                  <circle cx="18" cy="18" r="5" fill="url(#footerLogoGrad)" opacity="0.8" />
                  <circle cx="18" cy="18" r="2" fill="#040B14" />
                </svg>
              </div>
              <span className="font-heading text-lg font-bold">
                <span className="text-primary">Nova</span>
                <span className="text-text-primary">Syn</span>
              </span>
            </div>
            <p className="text-text-muted text-sm leading-relaxed mb-6">
              Pioneering the convergence of AI and biotechnology to develop transformative
              therapies for patients worldwide.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {[
                {
                  label: "LinkedIn",
                  icon: (
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  ),
                  extra: <circle cx="4" cy="4" r="2" />,
                },
                {
                  label: "Twitter",
                  icon: (
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  ),
                },
                {
                  label: "GitHub",
                  icon: (
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
                  ),
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-surface border border-border hover:border-primary/30 flex items-center justify-center text-text-dim hover:text-primary transition-all duration-300"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                    {social.icon}
                    {social.extra}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading font-semibold text-text-primary mb-4 text-sm">Navigation</h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-text-muted hover:text-primary text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Research Areas */}
          <div>
            <h4 className="font-heading font-semibold text-text-primary mb-4 text-sm">Research Areas</h4>
            <ul className="space-y-2.5">
              {["Gene Therapy", "Drug Discovery", "Precision Medicine", "Biomarker Analysis", "Clinical Trials", "Regulatory Affairs"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#capabilities"
                      className="text-text-muted hover:text-primary text-sm transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-text-primary mb-4 text-sm">Contact</h4>
            <ul className="space-y-3">
              <li className="text-text-muted text-sm">
                123 Innovation Drive
                <br />
                San Francisco, CA 94105
              </li>
              <li>
                <a
                  href="mailto:hello@novasyn.bio"
                  className="text-text-muted hover:text-primary text-sm transition-colors"
                >
                  hello@novasyn.bio
                </a>
              </li>
              <li>
                <a
                  href="tel:+14155551234"
                  className="text-text-muted hover:text-primary text-sm transition-colors"
                >
                  +1 (415) 555-1234
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-dim text-xs">
            © {currentYear} {BRAND.fullName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Settings"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-text-dim hover:text-text-muted text-xs transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
