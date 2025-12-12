import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FileQuestion } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex h-[80vh] w-full flex-col items-center justify-center gap-4 text-center">
      <div className="bg-slate-100 p-6 rounded-full">
         <FileQuestion className="h-16 w-16 text-slate-400" />
      </div>
      <h2 className="text-3xl font-bold tracking-tight text-slate-900">404 - Không tìm thấy trang</h2>
      <p className="text-slate-500 max-w-[500px]">
        Trang bạn đang tìm kiếm có thể đã bị xóa hoặc đường dẫn không đúng.
      </p>
      <Button asChild className="mt-4 bg-blue-600 hover:bg-blue-700">
        <Link href="/">Quay về trang chủ</Link>
      </Button>
    </div>
  )
}

//