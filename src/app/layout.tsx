import type { Metadata } from "next";
import { Footer } from "@/components/site/footer";
import { Navigation } from "@/components/site/navigation";
import { withBasePath } from "@/lib/base-path";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "CareerOS",
    template: "%s | CareerOS",
  },
  description:
    "CareerOS helps students activate a personal AI career coach for resumes, LinkedIn, interviews, company research, and AI-first career growth.",
  applicationName: "CareerOS",
  keywords: [
    "CareerOS",
    "AI career coach",
    "students",
    "resume",
    "LinkedIn",
    "interview preparation",
  ],
  openGraph: {
    title: "CareerOS",
    description:
      "Activate your personal AI career coach in minutes with a clean, student-first workflow.",
    siteName: "CareerOS",
    type: "website",
  },
  icons: {
    icon: withBasePath("/favicon.ico"),
    shortcut: withBasePath("/favicon.ico"),
    apple: withBasePath("/apple-touch-icon.png"),
  },
  twitter: {
    card: "summary_large_image",
    title: "CareerOS",
    description:
      "Activate your personal AI career coach in minutes with a clean, student-first workflow.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased dark">
      <body className="min-h-full font-sans text-foreground">
        <div className="relative flex min-h-screen flex-col">
          <Navigation />
          <main className="flex-1 pt-20">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
