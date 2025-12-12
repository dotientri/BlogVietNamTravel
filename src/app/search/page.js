import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { searchPosts } from "@/lib/data" // Import dữ liệu mới

export default async function SearchPage({ searchParams }) {
  // Bắt buộc await trong Next.js 15
  const { q } = await searchParams; 
  const query = q || "";
  
  const results = searchPosts(query);

  return (
    <div className="container mx-auto px-4 py-8 min-h-[60vh]">
      <div className="mb-8">
         <h1 className="text-2xl font-bold">
           Kết quả tìm kiếm cho: <span className="text-blue-600">"{query}"</span>
         </h1>
         <p className="text-slate-500 mt-1">Tìm thấy {results.length} bài viết.</p>
      </div>

      {results.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((post) => (
                <Card key={post.id} className="flex flex-col overflow-hidden hover:shadow-lg transition-all group">
                    <div className="h-48 overflow-hidden">
                       <img src={post.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-4 flex flex-col flex-1">
                        <h3 className="font-bold text-lg text-slate-900 mb-2 line-clamp-2">
                             <Link href={`/bai-viet/${post.id}`} className="hover:text-blue-600">{post.title}</Link>
                        </h3>
                        <p className="text-sm text-slate-600 mb-4 line-clamp-2">{post.excerpt}</p>
                        <Button variant="outline" size="sm" className="mt-auto self-start" asChild>
                           <Link href={`/bai-viet/${post.id}`}>Xem ngay</Link>
                        </Button>
                    </div>
                </Card>
            ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-slate-50 rounded-lg border border-dashed">
            <p className="text-slate-500 mb-4">Không tìm thấy bài viết nào phù hợp với từ khóa này.</p>
            <Button asChild>
                <Link href="/">Quay về trang chủ</Link>
            </Button>
        </div>
      )}
    </div>
  )
}