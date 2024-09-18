import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TheWriterNextDoor",
  description:
    "Skilled ghostwriter, proofreader and editor. Easing the burden of students, job-seekers and startups with research projects, excellent resumes and valuable web content.",
  openGraph: {
    type: "website",
    url: "https://thewriternextdoor.netlify.app",
    images: "https://thewriternextdoor.netlify.app/assets/logo.png",
    siteName: "TheWriterNextDoor",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "TheWriterNextDoor",
    description:
      "Skilled ghostwriter, proofreader and editor. Easing the burden of students, job-seekers and startups with research projects, excellent resumes and valuable web content.",
    images: "https://thewriternextdoor.netlify.app/assets/logo.png",
    site: "https://thewriternextdoor.netlify.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
