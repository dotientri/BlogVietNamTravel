import { posts, categories } from "@/lib/data"

export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://flashseo-travel.vercel.app'

  // 1. Trang chủ & Trang tĩnh
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/search`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    }
  ]

  // 2. Các trang danh mục (Categories)
  const categoryRoutes = categories.map((cat) => ({
    url: `${baseUrl}/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.8,
  }))

  // 3. Các trang bài viết chi tiết (Blog Posts)
  const postRoutes = posts.map((post) => {
    // Parse ngày tháng từ string "DD/MM/YYYY" (ví dụ: 12/12/2024)
    const [day, month, year] = post.date.split('/')
    const date = new Date(`${year}-${month}-${day}`)

    return {
      url: `${baseUrl}/bai-viet/${post.id}`,
      lastModified: isNaN(date.getTime()) ? new Date() : date,
      changeFrequency: 'weekly',
      priority: 0.6,
    }
  })

  return [...staticRoutes, ...categoryRoutes, ...postRoutes]
}