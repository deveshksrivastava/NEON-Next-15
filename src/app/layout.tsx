import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/theme-provider";
import ClientProvider from "@/components/ClientProvider";
import useServerDarkMode from "@/hooks/use-server-dark-mode";


import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    template: '%s | Computer Repair Shop ',
    default: 'Computer Repair Shop ',
  },
  description: "Dan's Computer Repair Shop",
  applicationName: "Repair Shop"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = 'ancckdjfjdkfj-session'
  const theme = useServerDarkMode()
  return (
    <html lang="en" className={'theme-' + theme} suppressHydrationWarning >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
                <ClientProvider session={session}>
                  <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                  >
                    {children}
                  </ThemeProvider>
                </ClientProvider>
        
      </body>
    </html>
  );
}
