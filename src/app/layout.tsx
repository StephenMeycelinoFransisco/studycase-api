import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Header/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Pokemon App",
  description: "Generated Pokemon API",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <header className="fixed top-0 left-0 flex w-full p-4 justify-between items-center px-4 md:px-10 py-4 transition">
            <Navbar />
          </header>

          <main className="mt-12 container">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
