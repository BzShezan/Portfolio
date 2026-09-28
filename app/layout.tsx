import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bahadur Zamn Shezan | AI/ML Engineer & Researcher",
  description: "The portfolio of Bahadur Zamn Shezan: AI research, intelligent systems, and software engineering.",
  openGraph: {
    title: "Bahadur Zamn Shezan | AI/ML Engineer & Researcher",
    description: "Research to real-world systems. Selected publications, projects and experience.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
