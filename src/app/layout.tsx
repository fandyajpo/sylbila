import type { Metadata } from "next";
import { Sriracha, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "700",
    "800",
    "900",
  ],
});

export const metadata: Metadata = {
  title: "TEST",
  // title: "Sylbila x Fanvercel",
  description: "Yahaha wahyuuu",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
