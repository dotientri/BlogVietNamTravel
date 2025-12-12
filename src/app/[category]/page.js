import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, MapPin, Home, ChevronRight } from "lucide-react"
import { getPostsByCategory, categoryNames } from "@/lib/data" // Import dữ liệu thật

export async function generateMetadata({ params }) {
  const { category } = await params;
  const title = categoryNames[category] || "Chuyên Mục Du Lịch";
  
  return {
    title: `${title} - Cẩm Nang Du Lịch Việt Nam`,
    description: `Tổng hợp các bài viết, kinh nghiệm du lịch và ẩm thực hấp dẫn nhất tại ${title}.`,
    openGraph: {
      title: title,
      description: `Khám phá vẻ đẹp ${title} qua lăng kính FlashSEO Travel.`,
    }
  }
}

export default async function CategoryPage({ params }) {
  // FIX LỖI Ở ĐÂY: Phải await params trước khi dùng
  const { category } = await params;

  const posts = getPostsByCategory(category);
  

  const title = categoryNames[category] || "Chuyên Mục";

  return (
    <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-muted-foreground mb-6">
            <Link href="/" className="flex items-center hover:text-blue-600 transition-colors">
                <Home className="w-4 h-4 mr-1" />
                Trang chủ
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="font-medium text-foreground">{title}</span>
        </div>

        <div className="mb-8 pb-4 border-b">
             <h1 className="text-3xl font-bold text-foreground capitalize">{title}</h1>
             <p className="text-muted-foreground mt-2">Tổng hợp bài viết mới nhất về {title}.</p>
        </div>

        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                  <Card key={post.id} className="overflow-hidden shadow-sm hover:shadow-md transition-all group h-full flex flex-col">
                      <div className="aspect-video overflow-hidden relative">
                          <img 
                              src={post.image} 
                              alt={post.title} 
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                          />
                          <Badge variant="secondary" className="absolute top-3 left-3">
                              {categoryNames[category]}
                          </Badge>
                      </div>
                      <div className="p-4 flex flex-col flex-1">
                          <div className="flex items-center text-xs text-muted-foreground mb-2 gap-3">
                              <span className="flex items-center"><Clock className="w-3 h-3 mr-1"/> {post.date}</span>
                              <span className="flex items-center"><MapPin className="w-3 h-3 mr-1"/> {post.location}</span>
                          </div>
                          <h3 className="font-bold text-lg text-foreground mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                              <Link href={`/bai-viet/${post.id}`}>{post.title}</Link>
                          </h3>
                          <p className="text-muted-foreground text-sm line-clamp-2 mb-4 flex-1">
                              {post.excerpt}
                          </p>
                          <Button variant="link" className="p-0 h-auto text-blue-600 font-semibold justify-start" asChild>
                              <Link href={`/bai-viet/${post.id}`}>Xem chi tiết &rarr;</Link>
                          </Button>
                      </div>
                  </Card>
              ))}
          </div>
        ) : (
          <div className="text-center py-12 text-muted-foreground">
            Chưa có bài viết nào trong mục này.
          </div>
        )}
    </div>
  )
}