import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://blog-viet-nam-travel.vercel.app'),
  title: {
    default: "Blog Du Lịch Việt Nam",
    template: "%s | VietnamTravel", // Ví dụ: "Vịnh Hạ Long | VietnamTravel"
  },
  description: "Khám phá vẻ đẹp Việt Nam",
  verification: {
    // Thay mã xác minh của bạn vào đây nếu dùng phương pháp HTML Tag
    google: 'pGp4rqdDAMiTaJU2ReLbMzVzZLmaYLFOCvfOhKyqf_o', 
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: 'Blog Du Lịch Việt Nam',
    description: 'Cẩm nang du lịch và khám phá vẻ đẹp Việt Nam',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://blog-viet-nam-travel.vercel.app',
    siteName: 'VietnamTravel',
    locale: 'vi_VN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog Du Lịch Việt Nam',
  },
};

export default function RootLayout({ children }) {
  // Lấy ID từ biến môi trường (Khuyên dùng) hoặc bạn có thể điền trực tiếp chuỗi 'G-XXXXXXXXXX' vào đây
  const gaId = 'G-0HX90Q2FE9';

  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-foreground antialiased`} suppressHydrationWarning>
        {/* Google Analytics */}
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}
        <ThemeProvider
            attribute="class"
            defaultTheme="light" // Blog thường để sáng mặc định cho dễ đọc
            enableSystem
            disableTransitionOnChange
          >
          <div className="flex min-h-screen flex-col">
            {/* Header dính trên cùng */}
            <SiteHeader />
            
            {/* Phần nội dung chính */}
            <main className="flex-1">
              {children}
            </main>

            {/* Footer ở dưới cùng */}
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}