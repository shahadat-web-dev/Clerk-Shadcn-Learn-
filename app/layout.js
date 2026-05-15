import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider} from '@clerk/nextjs'
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Clerk - Template",
  description: "This is Template we are useing for clerk",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning> {/* ১. এটি যোগ করা হয়েছে */}
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"   /* ২. এটি যোগ করা হয়েছে */
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ClerkProvider>
            <Navbar />
            {children}
          </ClerkProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
