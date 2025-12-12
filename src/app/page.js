import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { posts, categories, categoryNames } from "@/lib/data" // Import tất cả từ data.js
import { InfinitePostList } from "@/components/infinite-post-list"

const popularPosts = posts.slice(0, 5); // Lấy 5 bài đầu tiên làm nổi bật

const popularTags = ["Vịnh Hạ Long", "Sapa", "Hội An", "Đà Nẵng", "Phú Quốc", "Đà Lạt", "Ẩm thực đường phố", "Phượt", "Homestay", "Biển đảo"]

// --- COMPONENT CHÍNH ---
export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Phần giới thiệu đầu trang */}
      <div className="mb-12 text-center max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
          Khám Phá Vẻ Đẹp Việt Nam
        </h1>
        <p className="text-lg text-muted-foreground">
          Cẩm nang du lịch Việt Nam chi tiết với thông tin về điểm đến, ẩm thực, khách sạn và kinh nghiệm du lịch từ Bắc vào Nam.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* --- CỘT TRÁI: DANH SÁCH BÀI VIẾT (CHIẾM 8 PHẦN) --- */}
        <div className="lg:col-span-8 space-y-8">
          <InfinitePostList initialPosts={posts} categoryNames={categoryNames} />
        </div>

        {/* --- CỘT PHẢI: SIDEBAR (CHIẾM 4 PHẦN) --- */}
        <div className="lg:col-span-4 space-y-8">
          
          {/* Widget 1: Bài viết nổi bật */}
          <div className="bg-card text-card-foreground rounded-xl shadow-sm border p-6">
            <h3 className="font-bold text-lg mb-4 flex items-center border-l-4 border-blue-600 pl-3">
              📈 Bài Viết Nổi Bật
            </h3>
            <div className="space-y-4">
              {popularPosts.map((post) => (
                <Link href={`/bai-viet/${post.id}`} key={post.id} className="flex gap-4 group cursor-pointer">
                  <div className="w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground line-clamp-2 group-hover:text-blue-600 transition-colors text-sm leading-snug">
                      {post.title}
                    </h4>
                    <span className="text-xs text-muted-foreground mt-2 block">{post.date}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Widget 2: Chuyên mục */}
          <div className="bg-card text-card-foreground rounded-xl shadow-sm border p-6">
            <h3 className="font-bold text-lg mb-4 flex items-center border-l-4 border-blue-600 pl-3">
              🗂️ Chuyên Mục
            </h3>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <Link href={`/${cat.slug}`} className="flex justify-between items-center p-2 rounded hover:bg-accent text-accent-foreground hover:text-blue-600 transition-colors">
                    <span>{cat.name}</span>
                    <ChevronRight className="w-4 h-4 text-muted-foreground" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Widget 3: Từ khóa phổ biến */}
          <div className="bg-card text-card-foreground rounded-xl shadow-sm border p-6">
             <h3 className="font-bold text-lg mb-4 flex items-center border-l-4 border-blue-600 pl-3">
              🏷️ Từ Khóa Phổ Biến
            </h3>
            <div className="flex flex-wrap gap-2">
              {popularTags.map((tag) => (
                <Link key={tag} href={`/search?q=${encodeURIComponent(tag)}`}>
                  <Badge variant="secondary" className="cursor-pointer hover:bg-blue-100 hover:text-blue-700 transition-colors font-normal">
                    {tag}
                  </Badge>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}