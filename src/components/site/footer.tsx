import Link from "next/link";
import { BrandMark } from "@/components/site/brand-mark";
import { Container } from "@/components/site/container";
import { footerLinks } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/6 py-10">
      <Container className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-md">
          <BrandMark compact />
          <p className="mt-2 text-sm text-muted">
            A personal AI career coach students can activate once and keep using
            through resumes, interviews, research, and weekly career growth.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </Container>
    </footer>
  );
}
