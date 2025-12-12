import { Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://flashseo-travel.vercel.app'),
  title: "Blog Du Lịch Việt Nam",
  description: "Khám phá vẻ đẹp Việt Nam",
  verification: {
    // Thay mã xác minh của bạn vào đây nếu dùng phương pháp HTML Tag
    google: 'ma-xac-minh-google-search-console-cua-ban',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
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