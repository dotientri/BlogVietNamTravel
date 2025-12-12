"use client" // Phải có dòng này để dùng hook

import Link from "next/link"
import { useRouter } from "next/navigation" // Dùng để chuyển trang
import { Search, Menu } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet" // Menu mobile
import { ModeToggle } from "@/components/mode-toggle"

export function SiteHeader() {
  const router = useRouter()

  // Hàm xử lý khi nhấn Enter tìm kiếm
  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      router.push(`/search?q=${e.target.value}`)
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container mx-auto flex h-16 items-center px-4 justify-between">
        
        {/* 1. Logo */}
        <div className="flex items-center">
           <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden mr-2">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <nav className="flex flex-col gap-4 mt-8">
                  <Link href="/mien-bac" className="text-lg font-medium">Miền Bắc</Link>
                  <Link href="/mien-trung" className="text-lg font-medium">Miền Trung</Link>
                  <Link href="/mien-nam" className="text-lg font-medium">Miền Nam</Link>
                  <Link href="/am-thuc" className="text-lg font-medium">Ẩm thực</Link>
                </nav>
              </SheetContent>
            </Sheet>

          <Link href="/" className="flex items-center gap-2">
            <img 
              src="/images/logo.png" 
              alt="Logo" 
              className="hidden md:block w-10 h-10 rounded-full object-cover border border-slate-200" 
            />
            <span className="text-xl font-bold text-blue-600">
             VietnamTravel
            </span>
          </Link>
        </div>

        {/* 2. Menu Desktop */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-muted-foreground">
          <Link href="/mien-bac" className="hover:text-blue-600 transition-colors">Miền Bắc</Link>
          <Link href="/mien-trung" className="hover:text-blue-600 transition-colors">Miền Trung</Link>
          <Link href="/mien-nam" className="hover:text-blue-600 transition-colors">Miền Nam</Link>
          <Link href="/am-thuc" className="hover:text-blue-600 transition-colors">Ẩm thực</Link>
        </nav>

        {/* 3. Search Bar */}
        <div className="flex items-center gap-2">
          <div className="relative w-full max-w-[200px] lg:max-w-[300px]">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-slate-500" />
            <Input 
              placeholder="Tìm kiếm..." 
              className="pl-8 bg-secondary border-input focus-visible:ring-blue-500" 
              onKeyDown={handleSearch} // Bắt sự kiện phím
            />
          </div>
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}