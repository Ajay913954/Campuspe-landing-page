import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

export const metadata = {
  title: "CampusPe — AI-Powered Campus Assistant",
  description:
    "CampusPe connects students, colleges, and employers on one AI-powered platform. Discover internships, manage campus placements, and hire top talent — faster.",
  keywords: "campus placements, internships, student jobs, college recruitment, AI resume builder",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
