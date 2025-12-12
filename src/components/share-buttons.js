"use client"

import { useState, useEffect } from "react"
import { Facebook, Twitter, Link as LinkIcon, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ShareButtons({ id, title }) {
  const [shareUrl, setShareUrl] = useState("")
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    // MẸO: Nếu đang chạy trên localhost, dùng link giả (ví dụ VnExpress) để test nút Share
    // Vì Facebook không thể đọc được link localhost
    const hostname = window.location.hostname;
    if (hostname === "localhost" || hostname === "127.0.0.1" || hostname.startsWith("192.168.")) {
      // Dùng link Dân Trí để test hiển thị ảnh/tiêu đề
      setShareUrl(process.env.NEXT_PUBLIC_TEST_URL || "https://dantri.com.vn")
    } else {
      // Khi lên mạng thật, lấy đúng link bài viết hiện tại
      setShareUrl(window.location.href)
    }
  }, [])

  const copyToClipboard = () => {
    if (!shareUrl) return
    navigator.clipboard.writeText(shareUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Nếu chưa load xong URL (client-side), hiển thị nút disabled để tránh lỗi link
  if (!shareUrl) {
    return (
      <div className="flex gap-2">
        <Button variant="outline" size="icon" disabled><Facebook className="w-4 h-4" /></Button>
        <Button variant="outline" size="icon" disabled><Twitter className="w-4 h-4" /></Button>
        <Button variant="outline" size="icon" disabled><LinkIcon className="w-4 h-4" /></Button>
      </div>
    )
  }

  return (
    <div className="flex gap-2">
      <Button variant="outline" size="icon" asChild>
        <a 
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-700"
          title="Chia sẻ lên Facebook"
        >
          <Facebook className="w-4 h-4" />
        </a>
      </Button>
      <Button variant="outline" size="icon" asChild>
        <a 
          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`}
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sky-500 hover:text-sky-600"
          title="Chia sẻ lên Twitter"
        >
          <Twitter className="w-4 h-4" />
        </a>
      </Button>
      <Button variant="outline" size="icon" onClick={copyToClipboard} title="Sao chép liên kết">
        {copied ? <Check className="w-4 h-4 text-green-600" /> : <LinkIcon className="w-4 h-4 text-slate-600" />}
      </Button>
    </div>
  )
}
