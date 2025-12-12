import Link from "next/link"
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12 mt-12 border-t">
      <div className="container mx-auto px-4">
        {/* CHIA 4 CỘT ĐỀU TĂM TẮP */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* CỘT 1: GIỚI THIỆU */}
          <div className="space-y-4">
            <h3 className="text-foreground font-bold text-lg border-l-4 border-blue-600 pl-3 uppercase tracking-wide">
              Về VietnamTravel
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Kênh thông tin du lịch hàng đầu, chia sẻ trải nghiệm thực tế và cẩm nang khám phá vẻ đẹp 63 tỉnh thành Việt Nam.
            </p>
            <div className="flex gap-4 pt-2">
               <div className="bg-background/50 p-2 rounded-full hover:bg-blue-600 cursor-pointer transition-colors">
                 <Facebook className="w-5 h-5 text-white" />
               </div>
               <div className="bg-background/50 p-2 rounded-full hover:bg-pink-600 cursor-pointer transition-colors">
                 <Instagram className="w-5 h-5 text-white" />
               </div>
               <div className="bg-background/50 p-2 rounded-full hover:bg-red-600 cursor-pointer transition-colors">
                 <Youtube className="w-5 h-5 text-white" />
               </div>
            </div>
          </div>

          {/* CỘT 2: KHÁM PHÁ (LINK NHANH) */}
          <div>
            <h3 className="text-foreground font-bold text-lg mb-4 border-l-4 border-blue-600 pl-3 uppercase tracking-wide">
              Khám Phá
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/mien-bac" className="hover:text-blue-400 transition-colors flex items-center">
                  <span className="mr-2">›</span> Du lịch Miền Bắc
                </Link>
              </li>
              <li>
                <Link href="/mien-trung" className="hover:text-blue-400 transition-colors flex items-center">
                  <span className="mr-2">›</span> Du lịch Miền Trung
                </Link>
              </li>
              <li>
                <Link href="/mien-nam" className="hover:text-blue-400 transition-colors flex items-center">
                  <span className="mr-2">›</span> Du lịch Miền Nam
                </Link>
              </li>
              <li>
                <Link href="/am-thuc" className="hover:text-blue-400 transition-colors flex items-center">
                  <span className="mr-2">›</span> Ẩm thực 3 miền
                </Link>
              </li>
            </ul>
          </div>

          {/* CỘT 3: LIÊN HỆ */}
          <div>
            <h3 className="text-foreground font-bold text-lg mb-4 border-l-4 border-blue-600 pl-3 uppercase tracking-wide">
              Liên Hệ
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-blue-500 mt-0.5" />
                  <span>dotientri0285@gmail.com<br/><span className="text-xs text-muted-foreground/80">Giải đáp 24/7</span></span>
              </li>
              <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-500" />
                  <span className="font-bold text-foreground text-lg">1900 6868</span>
              </li>
              <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-500 mt-0.5" />
                  <span>Bình Chánh,<br/>Thành Phố Hồ Chí Minh, Việt Nam</span>
              </li>
            </ul>
          </div>

          {/* CỘT 4: QR CODE THANH TOÁN (DONATE) */}
          <div>
             <h3 className="text-foreground font-bold text-lg mb-4 border-l-4 border-blue-600 pl-3 uppercase tracking-wide">
               Ủng Hộ Team ☕
             </h3>
             <div className="bg-card p-3 rounded-xl inline-block shadow-lg">
                {/* ĐÂY LÀ CHỖ HIỆN ẢNH QR */}
                <img 
                  src="/qr-payment.jpg" 
                  alt="QR Thanh Toán" 
                  className="w-32 h-auto rounded-xl" 
                />
             </div>
             <p className="text-xs mt-3 text-muted-foreground/80 max-w-[200px]">
               Quét mã để mời tác giả một ly cà phê nhé! Cảm ơn bạn rất nhiều.
             </p>
          </div>

        </div>
        
        {/* DÒNG COPYRIGHT */}
        <div className="mt-12 pt-8 border-t text-center text-xs text-muted-foreground flex flex-col md:flex-row justify-between items-center">
          <p>© 2025 Blog Du Lịch Việt Nam. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/dieu-khoan-su-dung" className="hover:text-foreground">Điều khoản sử dụng</Link>
            <Link href="/chinh-sach-bao-mat" className="hover:text-foreground">Chính sách bảo mật</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}