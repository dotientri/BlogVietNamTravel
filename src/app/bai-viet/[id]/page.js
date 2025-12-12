import Link from "next/link"
import { MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { getPostById } from "@/lib/data"
import { ImageCarousel } from "@/components/image-carousel"
import { ShareButtons } from "@/components/share-buttons"

export async function generateMetadata({ params }) {
  const { id } = await params;
  const post = getPostById(id);

  if (!post) {
    return {
      title: "Không tìm thấy bài viết",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      type: "article",
    },
  };
}

export default async function PostDetail({ params }) {
  const { id } = await params;
  const post = getPostById(id);

  if (!post) return <div className="text-center py-20">Không tìm thấy bài viết</div>;

  const categoryNames = {
    "mien-bac": "Du Lịch Miền Bắc",
    "mien-trung": "Du Lịch Miền Trung",
    "mien-nam": "Du Lịch Miền Nam",
    "am-thuc": "Ẩm Thực Việt Nam"
  };

  // Gộp ảnh bìa và thư viện ảnh để đưa vào carousel
  const allImages = [post.image, ...(post.gallery || [])].filter(Boolean);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Trang chủ</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={`/${post.category}`}>{categoryNames[post.category] || post.category}</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="line-clamp-1">{post.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
                {post.title}
            </h1>

            <div className="flex items-center justify-between mb-6 py-4 border-y border-slate-100">
                <div className="flex items-center gap-3">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>AU</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm font-bold text-foreground">{post.author}</p>
                        <p className="text-xs text-muted-foreground">{post.date} • {post.location}</p>
                    </div>
                </div>
            </div>

            {/* -- PHẦN SLIDER ẢNH MỚI -- */}
            <ImageCarousel images={allImages} className="mb-8" />

            <article className="prose prose-slate max-w-none leading-relaxed prose-p:mb-6">
                <p className="lead text-lg text-muted-foreground font-medium mb-6">{post.excerpt}</p>
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </article>
        </div>
        
        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-6">
             <div className="bg-card text-card-foreground p-6 rounded-lg border">
                <h3 className="font-bold mb-4">Địa điểm</h3>
                <a 
                   href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(post.location)}`}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="flex items-center text-muted-foreground hover:text-blue-600 transition-colors"
                >
                   <MapPin className="w-4 h-4 mr-2 text-blue-600"/>
                   {post.location}
                </a>
             </div>

             <div className="bg-card text-card-foreground p-6 rounded-lg border">
                <h3 className="font-bold mb-4">Chia sẻ bài viết</h3>
                <ShareButtons id={post.id} title={post.title} />
             </div>
        </div>
      </div>
    </div>
  )
}