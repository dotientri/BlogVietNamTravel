export const metadata = {
  title: "Điều Khoản Sử Dụng - VietnamTravel",
  description: "Các điều khoản và điều kiện khi sử dụng website VietnamTravel.",
};

export default function TermsOfUsePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6 text-foreground">Điều Khoản Sử Dụng</h1>
      <div className="prose prose-slate max-w-none dark:prose-invert">
        <p>Việc bạn truy cập và sử dụng trang web VietnamTravel đồng nghĩa với việc bạn đồng ý tuân thủ các điều khoản và điều kiện dưới đây.</p>

        <h2>1. Bản quyền nội dung</h2>
        <p>Tất cả nội dung trên trang web này, bao gồm văn bản, hình ảnh, logo và video, đều thuộc bản quyền của VietnamTravel hoặc được cấp phép sử dụng hợp pháp. Bạn không được sao chép, tái bản hoặc sử dụng cho mục đích thương mại mà không có sự đồng ý bằng văn bản của chúng tôi.</p>

        <h2>2. Trách nhiệm người dùng</h2>
        <p>Khi sử dụng trang web, bạn cam kết:</p>
        <ul>
            <li>Không đăng tải các nội dung vi phạm pháp luật, đồi trụy, hoặc xúc phạm người khác trong phần bình luận.</li>
            <li>Không thực hiện các hành vi phá hoại, tấn công hệ thống kỹ thuật của trang web.</li>
        </ul>

        <h2>3. Miễn trừ trách nhiệm</h2>
        <p>Thông tin trên VietnamTravel chỉ mang tính chất tham khảo. Chúng tôi luôn nỗ lực cung cấp thông tin chính xác nhất, nhưng không đảm bảo tính tuyệt đối về độ chính xác, đầy đủ hoặc kịp thời của thông tin. Chúng tôi không chịu trách nhiệm về bất kỳ thiệt hại nào phát sinh từ việc sử dụng thông tin trên trang web.</p>

        <h2>4. Liên kết đến trang web khác</h2>
        <p>Trang web của chúng tôi có thể chứa các liên kết đến các trang web bên thứ ba. Chúng tôi không kiểm soát và không chịu trách nhiệm về nội dung hoặc chính sách bảo mật của các trang web đó.</p>

        <h2>5. Thay đổi điều khoản</h2>
        <p>Chúng tôi có quyền thay đổi các điều khoản sử dụng này bất cứ lúc nào mà không cần báo trước. Việc bạn tiếp tục sử dụng trang web sau khi có thay đổi đồng nghĩa với việc bạn chấp nhận các điều khoản mới.</p>
      </div>
    </div>
  );
}
