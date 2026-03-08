import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/components/i18n/LanguageProvider";

export const metadata: Metadata = {
  title: "Teo Narte | Premium Beachside Venue",
  description:
    "Luxury beachside experience in Zvernec, Vlore with restaurant, bar, sunbeds and curated seaside relaxation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
