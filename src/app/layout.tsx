import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingChatBar from "@/components/layout/FloatingChatBar";
import FloatingContactButtons from "@/components/layout/FloatingContactButtons";
import RouteScrollToTop from "@/components/layout/RouteScrollToTop";
import TopBar from "@/components/home/TopBar";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-noto-sans",
  display: "swap",
});

export const metadata: Metadata = {
  // metadataBase makes all relative OG/Twitter image URLs absolute
  metadataBase: new URL("https://realwebstudio.com"),
  title: {
    default: "RealWebStudio | Custom Websites for Canadian Small Businesses",
    template: "%s | RealWebStudio",
  },
  description: "Custom Websites for Canadian Small Businesses",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${notoSans.variable} antialiased`}>
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm" strategy="beforeInteractive">{`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-W9LDCWQX');
        `}</Script>
      </head>
      <body className="flex min-h-screen flex-col">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W9LDCWQX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* GHL form embed */}
        <Script
          src="https://link.msgsndr.com/js/form_embed.js"
          strategy="lazyOnload"
        />

        <TopBar />
        <Header />
        <RouteScrollToTop />
        <main className="flex-1">{children}</main>
        <FloatingChatBar />
        <FloatingContactButtons />
        <Footer />
      </body>
    </html>
  );
}
