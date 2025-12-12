"use client"

import React from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Slash } from "lucide-react" // Icon gạch chéo phân cách

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export function DynamicBreadcrumb() {
  const pathname = usePathname()
  
  // Tách URL thành các phần tử (bỏ phần rỗng)
  const paths = pathname.split("/").filter((path) => path)

  return (
    <Breadcrumb className="hidden md:flex">
      <BreadcrumbList>
        {/* Luôn hiện nút Home đầu tiên */}
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        {/* Lặp qua các phần tử của URL để tạo breadcrumb */}
        {paths.map((path, index) => {
          const href = `/${paths.slice(0, index + 1).join("/")}`
          const isLast = index === paths.length - 1
          
          // Chuyển đổi slug thành chữ đẹp (ví dụ: "user-profile" -> "User Profile")
          const title = path.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())

          return (
            <React.Fragment key={path}>
              <BreadcrumbSeparator>
                <Slash />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                {isLast ? (
                  // Phần tử cuối cùng (Trang hiện tại) -> Không click được
                  <BreadcrumbPage>{title}</BreadcrumbPage>
                ) : (
                  // Các phần tử ở giữa -> Click để quay lại
                  <BreadcrumbLink asChild>
                    <Link href={href}>{title}</Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </React.Fragment>
          )
        })}
      </BreadcrumbList>
    </Breadcrumb>
  )
}