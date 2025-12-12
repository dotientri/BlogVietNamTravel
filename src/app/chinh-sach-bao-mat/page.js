export const metadata = {
  title: "Chính Sách Bảo Mật - VietnamTravel",
  description: "Chính sách bảo mật thông tin người dùng của VietnamTravel.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6 text-foreground">Chính Sách Bảo Mật</h1>
      <div className="prose prose-slate max-w-none dark:prose-invert">
        <p>Chào mừng bạn đến với VietnamTravel. Chúng tôi tôn trọng và cam kết bảo vệ quyền riêng tư của bạn. Chính sách bảo mật này giải thích cách chúng tôi thu thập, sử dụng và bảo vệ thông tin cá nhân của bạn khi bạn truy cập trang web của chúng tôi.</p>

        <h2>1. Thu thập thông tin</h2>
        <p>Chúng tôi có thể thu thập các thông tin sau:</p>
        <ul>
            <li><strong>Thông tin cá nhân:</strong> Khi bạn đăng ký nhận bản tin hoặc để lại bình luận, chúng tôi có thể yêu cầu tên và địa chỉ email của bạn.</li>
            <li><strong>Thông tin phi cá nhân:</strong> Chúng tôi sử dụng cookie và các công nghệ theo dõi để thu thập thông tin về trình duyệt, địa chỉ IP, và cách bạn tương tác với trang web để cải thiện trải nghiệm người dùng.</li>
        </ul>

        <h2>2. Sử dụng thông tin</h2>
        <p>Thông tin chúng tôi thu thập được sử dụng để:</p>
        <ul>
            <li>Cung cấp và duy trì dịch vụ của trang web.</li>
            <li>Gửi thông báo về các bài viết mới hoặc cập nhật quan trọng (nếu bạn đã đăng ký).</li>
            <li>Phân tích lưu lượng truy cập để tối ưu hóa nội dung.</li>
        </ul>

        <h2>3. Chia sẻ thông tin</h2>
        <p>Chúng tôi cam kết không bán, trao đổi hoặc chuyển giao thông tin cá nhân của bạn cho bên thứ ba, trừ khi có sự đồng ý của bạn hoặc theo yêu cầu của pháp luật.</p>

        <h2>4. Bảo mật</h2>
        <p>Chúng tôi thực hiện các biện pháp bảo mật thích hợp để bảo vệ thông tin của bạn khỏi việc truy cập trái phép, thay đổi hoặc phá hủy.</p>

        <h2>5. Thay đổi chính sách</h2>
        <p>Chúng tôi có quyền cập nhật chính sách bảo mật này bất cứ lúc nào. Mọi thay đổi sẽ được đăng tải trên trang này.</p>

        <h2>6. Liên hệ</h2>
        <p>Nếu bạn có bất kỳ câu hỏi nào về chính sách bảo mật, vui lòng liên hệ với chúng tôi qua email: dotientri0285@gmail.com.</p>
      </div>
    </div>
  );
}
