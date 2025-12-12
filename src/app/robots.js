export default function robots() {
  // Đảm bảo baseUrl không có dấu / ở cuối để tránh lỗi URL kép (//)
  const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://blog-viet-nam-travel.vercel.app').replace(/\/$/, "");

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Ví dụ chặn thư mục private
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}