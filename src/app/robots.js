export default function robots() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://flashseo-travel.vercel.app'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Ví dụ chặn thư mục private
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}