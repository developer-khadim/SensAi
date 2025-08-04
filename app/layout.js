import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Header from "@/components/ui/My Ui/Header";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({
  subsets: ["latin"]
});

export const metadata = {
  title: "Sensai - AI Career Coach",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en" suppressHydrationWarning >
      <body
        className={`${inter.className}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* Header */}
          <Header/>
          <main className="min-h-screen">{children}</main>
          {/* Footer */}
          <footer className="bg-muted/50 py-12">
            <div className="container mx-auto px-2 text-center text-gray-200">
              <p>
                Made with ❤️ by{" "}
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Khadim Ali
                </a>
              </p>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
