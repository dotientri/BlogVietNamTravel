"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Clock, User, MapPin, Tag, Facebook, Twitter, Linkedin, Share2, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function InfinitePostList({ initialPosts, categoryNames }) {
  // Bắt đầu với 7 bài viết
  const [displayPosts, setDisplayPosts] = useState(initialPosts.slice(0, 7))
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(initialPosts.length > 7)
  const observerRef = useRef(null)
  const [origin, setOrigin] = useState("")

  // Lấy domain hiện tại để tạo link chia sẻ chính xác
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hostname = window.location.hostname;
      if (hostname === "localhost" || hostname === "127.0.0.1" || hostname.startsWith("192.168.")) {
        setOrigin(process.env.NEXT_PUBLIC_TEST_URL || "https://dantri.com.vn") // Link giả để test
      } else {
        setOrigin(window.location.origin)
      }
    }
  }, [])

  // Xử lý Infinite Scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        loadMore()
      }
    })

    if (observerRef.current) {
      observer.observe(observerRef.current)
    }

    return () => {
      if (observerRef.current) observer.unobserve(observerRef.current)
    }
  }, [hasMore, page])

  const loadMore = () => {
    // Giả lập delay nhẹ để cảm giác mượt hơn
    setTimeout(() => {
      const nextPage = page + 1
      const newLimit = nextPage * 7
      const newPosts = initialPosts.slice(0, newLimit)
      
      setDisplayPosts(newPosts)
      setPage(nextPage)
      
      if (newLimit >= initialPosts.length) {
        setHasMore(false)
      }
    }, 500)
  }

  // Hàm tạo link chia sẻ
  const getShareUrl = (id) => {
    if (!origin) return "";
    // Nếu đang test (origin là dantri), trả về luôn link dantri để facebook nhận diện được
    if (origin.includes("dantri.com.vn")) return origin;
    return `${origin}/bai-viet/${id}`;
  }

  return (
    <div className="space-y-8">
      {displayPosts.map((post) => (
        <Card key={post.id} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow p-0">
          <div className="md:flex p-4 gap-6">
            {/* Ảnh bài viết */}
            <div className="md:w-2/5 h-64 md:h-72 relative group rounded-xl overflow-hidden shrink-0">
               <Link href={`/bai-viet/${post.id}`}>
                 <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                 />
               </Link>
            </div>
            
            {/* Nội dung bài viết */}
            <div className="flex flex-col justify-between flex-1 mt-4 md:mt-0">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Link href={`/${post.category}`}>
                      <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-200 cursor-pointer">
                        {categoryNames[post.category] || post.category}
                      </Badge>
                    </Link>
                    <span className="flex items-center text-xs text-muted-foreground">
                      <Clock className="w-3 h-3 mr-1" /> {post.date}
                    </span>
                  </div>

                  {/* Nút Share Mạng Xã Hội */}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-blue-600">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem asChild>
                        <a 
                          href={origin ? `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(getShareUrl(post.id))}` : "#"}
                          target="_blank" rel="noopener noreferrer"
                          className="flex items-center cursor-pointer text-blue-700 dark:text-blue-400"
                          onClick={(e) => !origin && e.preventDefault()}
                        >
                          <Facebook className="mr-2 h-4 w-4" /> Facebook
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a 
                          href={origin ? `https://twitter.com/intent/tweet?url=${encodeURIComponent(getShareUrl(post.id))}&text=${encodeURIComponent(post.title)}` : "#"}
                          target="_blank" rel="noopener noreferrer"
                          className="flex items-center cursor-pointer text-sky-500 dark:text-sky-400"
                          onClick={(e) => !origin && e.preventDefault()}
                        >
                          <Twitter className="mr-2 h-4 w-4" /> Twitter
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a 
                          href={origin ? `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(getShareUrl(post.id))}` : "#"}
                          target="_blank" rel="noopener noreferrer"
                          className="flex items-center cursor-pointer text-blue-800 dark:text-blue-300"
                          onClick={(e) => !origin && e.preventDefault()}
                        >
                          <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                        </a>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <h2 className="text-2xl font-bold text-foreground mb-3 hover:text-blue-600 transition-colors">
                  <Link href={`/bai-viet/${post.id}`}>{post.title}</Link>
                </h2>
                
                <p className="text-muted-foreground line-clamp-3 mb-4">
                  {post.excerpt}
                </p>

                <Button variant="link" className="p-0 h-auto text-blue-600 font-semibold justify-start" asChild>
                  <Link href={`/bai-viet/${post.id}`} className="flex items-center group/link">
                    Xem chi tiết <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </Button>
              </div>

              <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100">
                <div className="flex items-center text-sm text-muted-foreground gap-4">
                    <span className="flex items-center"><User className="w-4 h-4 mr-1" /> {post.author}</span>
                    
                    {/* Link Google Maps cho Location */}
                    <a 
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(post.location)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center hover:text-blue-600 transition-colors group/map"
                      title="Xem trên bản đồ"
                    >
                      <MapPin className="w-4 h-4 mr-1 group-hover/map:text-red-500 transition-colors" /> 
                      {post.location}
                    </a>
                </div>
                
                {/* Danh sách Tags nhỏ */}
                {post.tags && <div className="hidden sm:flex gap-1">
                    {post.tags.slice(0, 2).map(tag => (
                         <Link key={tag} href={`/search?q=${encodeURIComponent(tag)}`} className="flex items-center text-xs bg-secondary px-2 py-1 rounded text-secondary-foreground hover:bg-blue-100 hover:text-blue-600 transition-colors">
                            <Tag className="w-3 h-3 mr-1"/> {tag}
                         </Link>
                    ))}
                </div>}
              </div>
            </div>
          </div>
        </Card>
      ))}

      {/* Loading Indicator / Sentinel */}
      {hasMore ? (
        <div ref={observerRef} className="flex justify-center py-8">
           <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      ) : (
        <div className="text-center py-8 text-slate-500 text-sm">
          Bạn đã xem hết danh sách bài viết.
        </div>
      )}
    </div>
  )
}
