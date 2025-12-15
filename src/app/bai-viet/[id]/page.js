import { getPostById, categoryNames } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Clock, MapPin, User, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ShareButtons } from "@/components/share-buttons";
import { ImageCarousel } from "@/components/image-carousel";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const post = getPostById(id);
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://blog-viet-nam-travel.vercel.app';
  
  if (!post) {
    return {
      title: "Không tìm thấy bài viết",
    };
  }

  const url = `${baseUrl}/bai-viet/${post.id}`;

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: url,
      siteName: 'VietnamTravel',
      images: [{ url: post.image, alt: post.title }],
      locale: 'vi_VN',
      type: 'article',
      publishedTime: post.date, // Lưu ý: Google thích định dạng ISO 8601 (YYYY-MM-DD)
      authors: [post.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function PostPage({ params }) {
  const { id } = await params;
  const post = getPostById(id);

  if (!post) {
    notFound();
  }

  // Chuyển đổi ngày từ DD/MM/YYYY sang ISO 8601 cho Schema
  const [day, month, year] = post.date.split('/');
  const isoDate = `${year}-${month}-${day}`;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://blog-viet-nam-travel.vercel.app';

  // Cấu trúc dữ liệu Schema.org (JSON-LD) cho bài viết
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    image: [post.image],
    datePublished: isoDate,
    dateModified: isoDate,
    author: [{
        '@type': 'Person',
        name: post.author,
    }],
    publisher: {
        '@type': 'Organization',
        name: 'VietnamTravel',
        logo: {
            '@type': 'ImageObject',
            url: `${baseUrl}/images/logo.png`
        }
    },
    description: post.excerpt,
    mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `${baseUrl}/bai-viet/${post.id}`
    }
  };

  // Gộp ảnh đại diện và thư viện ảnh thành một danh sách duy nhất
  const allImages = [post.image, ...(post.gallery || [])];

  return (
    <div className="container mx-auto px-4 pt-6 pb-12 max-w-4xl">
      {/* Thêm Schema Markup vào trang */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb & Share (Gộp tất cả lên đầu) */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Trang chủ</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href={`/${post.category}`}>{categoryNames[post.category]}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="line-clamp-1">{post.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Chuyển nút Share lên đầu */}
        <ShareButtons id={post.id} title={post.title} />
      </div>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground leading-tight">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground border-b pb-6">
          <div className="flex items-center">
            <User className="w-4 h-4 mr-1" />
            {post.author}
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {post.date}
          </div>
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-1" />
            {post.location}
          </div>
        </div>
      </div>

      {/* Combined Image Carousel (Featured + Gallery) */}
      <div className="mb-10">
        <ImageCarousel images={allImages} />
      </div>

      {/* Content */}
      <div className="prose prose-lg prose-slate max-w-none dark:prose-invert mb-10">
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>

      {/* Tags & Share */}
      <div className="border-t pt-8 mt-8">
        <div className="flex flex-wrap gap-2">
          {post.tags && post.tags.map(tag => (
            <Link key={tag} href={`/search?q=${encodeURIComponent(tag)}`}>
              <Badge variant="outline" className="hover:bg-secondary cursor-pointer">
                <Tag className="w-3 h-3 mr-1" /> {tag}
              </Badge>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}