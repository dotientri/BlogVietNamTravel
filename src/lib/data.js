// src/lib/data.js

export const posts = [
  {
    id: 1,
    title: "Vịnh Hạ Long - Kỳ Quan Giữa Lòng Biển Khơi",
    slug: "vinh-ha-long",
    category: "mien-bac",
    excerpt: "Khám phá Vịnh Hạ Long - Di sản thiên nhiên thế giới với hàng nghìn hòn đảo đá vôi hùng vĩ. Cẩm nang du lịch chi tiết từ A-Z: đi đâu, ăn gì, ở du thuyền nào tốt nhất.",
    content: `
      <p><strong>Vịnh Hạ Long</strong> không cần những mỹ từ sáo rỗng để miêu tả. Đây là một quần thể gồm 1.969 hòn đảo đá vôi lớn nhỏ, nằm trong vùng vịnh rộng 1.553 km². Điểm đặc biệt của Hạ Long là sự kết hợp giữa đá, nước và bầu trời, tạo nên một hệ sinh thái địa chất độc nhất vô nhị. Bài viết này sẽ cung cấp thông tin thực tế, giá cả và lịch trình cụ thể để bạn lên kế hoạch cho chuyến đi.</p>
      
      <h2>1. Lịch trình & Địa điểm tham quan chi tiết</h2>
      <p>Hạ Long chia làm 3 khu vực chính: Hòn Gai (trung tâm văn hóa), Bãi Cháy (trung tâm du lịch) và Tuần Châu (cảng tàu). Dưới đây là các điểm đến không thể bỏ qua:</p>
      
      <h3>Tuyến thăm vịnh số 1 (4 tiếng)</h3>
      <p>Phù hợp cho người ít thời gian. Tàu xuất phát từ Cảng tàu khách quốc tế Tuần Châu hoặc Cảng tàu khách quốc tế Hạ Long (Sun Port).</p>
      <ul>
        <li><strong>Động Thiên Cung:</strong> Hang động rộng gần 10.000m2 với cấu trúc phức tạp, nhiều cấp, nhiều ngăn.</li>
        <li><strong>Hang Đầu Gỗ:</strong> Nằm ngay gần Thiên Cung, mang vẻ đẹp hoang sơ, gắn liền với truyền thuyết giấu gỗ của Trần Hưng Đạo.</li>
        <li><strong>Hòn Chó Đá, Hòn Đỉnh Hương:</strong> Những biểu tượng nổi tiếng in trên tờ tiền 200.000 VNĐ.</li>
        <li><strong>Làng chài Ba Hang:</strong> Trải nghiệm chèo kayak hoặc đi đò nan.</li>
      </ul>

      <h3>Tuyến thăm vịnh số 2 (6 tiếng) - Phổ biến nhất</h3>
      <ul>
        <li><strong>Hang Sửng Sốt:</strong> Hang động lớn nhất vịnh, nằm trên đảo Bồ Hòn. Đường lên hang luồn dưới những tán lá rừng, qua những bậc đá ghép cheo leo.</li>
        <li><strong>Đảo Ti Tốp:</strong> Có bãi tắm hình vầng trăng khuyết. Bạn có thể leo hơn 400 bậc đá lên đỉnh núi để ngắm toàn cảnh vịnh 360 độ.</li>
        <li><strong>Hang Luồn:</strong> Địa điểm lý tưởng nhất để chèo Kayak vì nước lặng và cảnh sắc hữu tình.</li>
      </ul>

      <h3>Khu vui chơi Sun World Ha Long Complex</h3>
      <p><strong>Địa chỉ:</strong> Số 9 đường Hạ Long, phường Bãi Cháy.</p>
      <ul>
        <li><strong>Cáp treo Nữ Hoàng & Khu đồi huyền bí:</strong> Cáp treo 2 tầng đạt kỷ lục Guinness.</li>
        <li><strong>Công viên Rồng (Dragon Park):</strong> 20 trò chơi cảm giác mạnh.</li>
        <li><strong>Công viên nước (Typhoon Water Park):</strong> 12 trò chơi dưới nước hiện đại.</li>
      </ul>
      
      <h2>2. Di chuyển & Chi phí</h2>
      <h3>Di chuyển đến Hạ Long</h3>
      <ul>
        <li><strong>Xe Limousine:</strong> 250.000 - 300.000 VNĐ/vé/chiều. Đón tại nội thành Hà Nội, trả tại khách sạn Bãi Cháy/Hòn Gai. Thời gian: 2.5 tiếng (cao tốc 5B).</li>
        <li><strong>Xe khách:</strong> 150.000 - 200.000 VNĐ/vé. Bến xe Mỹ Đình -> Bến xe Bãi Cháy.</li>
      </ul>

      <h3>Bảng chi phí ước tính (2 ngày 1 đêm)</h3>
      <table class="w-full border-collapse border border-slate-300 mt-4 mb-6 text-sm">
        <thead>
          <tr class="bg-slate-100">
            <th class="border border-slate-300 p-2 text-left">Hạng mục</th>
            <th class="border border-slate-300 p-2 text-left">Chi tiết</th>
            <th class="border border-slate-300 p-2 text-right">Đơn giá (VNĐ)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-slate-300 p-2">Di chuyển</td>
            <td class="border border-slate-300 p-2">Limousine khứ hồi HN-HL</td>
            <td class="border border-slate-300 p-2 text-right">500.000</td>
          </tr>
          <tr>
            <td class="border border-slate-300 p-2">Lưu trú</td>
            <td class="border border-slate-300 p-2">Khách sạn 3-4 sao (1 đêm/người)</td>
            <td class="border border-slate-300 p-2 text-right">600.000</td>
          </tr>
          <tr>
            <td class="border border-slate-300 p-2">Vé tham quan</td>
            <td class="border border-slate-300 p-2">Vé tàu thăm vịnh + Vé thắng cảnh</td>
            <td class="border border-slate-300 p-2 text-right">440.000</td>
          </tr>
          <tr>
            <td class="border border-slate-300 p-2">Ăn uống</td>
            <td class="border border-slate-300 p-2">3 bữa chính + 1 bữa sáng</td>
            <td class="border border-slate-300 p-2 text-right">800.000</td>
          </tr>
          <tr class="font-bold bg-slate-50">
            <td class="border border-slate-300 p-2" colspan="2">TỔNG CỘNG</td>
            <td class="border border-slate-300 p-2 text-right">~ 2.340.000</td>
          </tr>
        </tbody>
      </table>

      <h2>8. Những lưu ý quan trọng</h2>
      <ul>
        <li><strong>Mua vé tàu:</strong> Nên mua vé gộp (tàu + thắng cảnh) tại cảng để tránh bị "cò" vé chặt chém. Giá niêm yết rõ ràng tại quầy.</li>
        <li><strong>Chai nước:</strong> Mang theo chai nước tái sử dụng. Trên vịnh cấm rác thải nhựa dùng 1 lần, nếu mang chai nhựa dùng 1 lần có thể bị từ chối cho lên tàu.</li>
        <li><strong>Ăn uống:</strong> Khu vực Hòn Gai (bên kia cầu Bãi Cháy) thường có giá rẻ hơn và đồ ăn ngon hơn khu du lịch Bãi Cháy. Thử quán <em>Hồng Hạnh, Cua Vàng</em> nếu muốn sang trọng, hoặc các bè nổi ven biển.</li>
      </ul>
    `,
    image: "/images/vinhhalong1.jpg",
    gallery: [
        "/images/vinhhalong2.jpg",
        "/images/vinhhalong3.jpg",
        "/images/vinhhalong4.jpg",
        "/images/vinhhalong5.jpg"
    ],
    author: "Nguyễn Minh",
    date: "12/12/2024",
    location: "Hạ Long, Quảng Ninh",
    tags: ["Vịnh Hạ Long", "Di sản UNESCO", "Du thuyền", "Biển đảo", "Miền Bắc"]
  },
  {
    id: 2,
    title: "Hội An - Nét Đẹp Hoài Cổ Bên Sông Hoài",
    slug: "hoi-an-pho-co",
    category: "mien-trung",
    excerpt: "Hội An không chỉ có đèn lồng và phố cổ. Khám phá những góc check-in sống ảo cực chất, thưởng thức ẩm thực đường phố và trải nghiệm văn hóa độc đáo.",
    content: `
      <p><strong>Hội An</strong> là một bảo tàng sống về kiến trúc và lối sống đô thị. Không xe cộ ồn ào trong khu phố đi bộ, không nhà cao tầng che khuất tầm nhìn, Hội An giữ chân du khách bằng những bức tường vàng đặc trưng, mái ngói âm dương phủ rêu phong và giàn hoa giấy rực rỡ. Đây là nơi bạn sống chậm lại để cảm nhận từng hơi thở của lịch sử.</p>
      
      <h2>1. Lịch trình & Địa điểm tham quan</h2>
      <p>Vé tham quan phố cổ: 80.000 VNĐ/khách Việt Nam (tham quan 3 điểm tùy chọn), 120.000 VNĐ/khách quốc tế (tham quan 6 điểm).</p>

      <h3>Khu vực Phố Cổ (Đi bộ)</h3>
      <ul>
        <li><strong>Chùa Cầu (Lai Viễn Kiều):</strong> Biểu tượng của Hội An, xây dựng vào thế kỷ 17. Lưu ý: Hiện đang trùng tu (2024) nhưng vẫn có thể tham quan bên ngoài.</li>
        <li><strong>Hội quán Phúc Kiến (46 Trần Phú):</strong> Công trình kiến trúc Hoa lộng lẫy nhất, thờ Thiên Hậu Thánh Mẫu.</li>
        <li><strong>Nhà cổ Tấn Ký (101 Nguyễn Thái Học):</strong> Nhà cổ tư nhân đầu tiên được xếp hạng di tích quốc gia, nơi lưu giữ Chén Khổng Tử độc đáo.</li>
        <li><strong>Chợ Hội An:</strong> Thiên đường ẩm thực giá rẻ.</li>
      </ul>

      <h3>Khu vực lân cận</h3>
      <ul>
        <li><strong>Rừng dừa Bảy Mẫu (Cẩm Thanh):</strong> Cách phố cổ 3km. Trải nghiệm đi thuyền thúng, xem múa thúng. Giá vé: 150.000 - 200.000 VNĐ/thúng (2 người).</li>
        <li><strong>Làng gốm Thanh Hà:</strong> Cách phố cổ 3km về phía Tây. Vé tham quan: 35.000 VNĐ/người. Tự tay chuốt gốm và nhận quà lưu niệm.</li>
        <li><strong>Biển An Bàng:</strong> Top 50 bãi biển đẹp nhất hành tinh, cách trung tâm 4km.</li>
      </ul>

      <h2>2. Di chuyển & Chi phí</h2>
      <p>Hội An không có sân bay, bạn phải bay đến Đà Nẵng rồi di chuyển vào Hội An (30km).</p>
      <ul>
        <li><strong>Taxi/Grab từ Đà Nẵng:</strong> 250.000 - 350.000 VNĐ/chiều.</li>
        <li><strong>Xe buýt:</strong> Tuyến số 1 Đà Nẵng - Hội An, giá 20.000 VNĐ (hoạt động đến 17h50).</li>
        <li><strong>Thuê xe máy tại Hội An:</strong> 120.000 - 150.000 VNĐ/ngày.</li>
      </ul>

      <h3>Bảng chi phí ước tính (2 ngày 1 đêm)</h3>
      <table class="w-full border-collapse border border-slate-300 mt-4 mb-6 text-sm">
        <thead>
          <tr class="bg-slate-100">
            <th class="border border-slate-300 p-2 text-left">Hạng mục</th>
            <th class="border border-slate-300 p-2 text-left">Chi tiết</th>
            <th class="border border-slate-300 p-2 text-right">Đơn giá (VNĐ)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-slate-300 p-2">Di chuyển</td>
            <td class="border border-slate-300 p-2">Xe đưa đón ĐN-HA + Thuê xe máy</td>
            <td class="border border-slate-300 p-2 text-right">400.000</td>
          </tr>
          <tr>
            <td class="border border-slate-300 p-2">Lưu trú</td>
            <td class="border border-slate-300 p-2">Homestay phố cổ (1 đêm/người)</td>
            <td class="border border-slate-300 p-2 text-right">350.000</td>
          </tr>
          <tr>
            <td class="border border-slate-300 p-2">Vé tham quan</td>
            <td class="border border-slate-300 p-2">Vé phố cổ + Rừng dừa</td>
            <td class="border border-slate-300 p-2 text-right">230.000</td>
          </tr>
          <tr>
            <td class="border border-slate-300 p-2">Ăn uống</td>
            <td class="border border-slate-300 p-2">Cao lầu, Cơm gà, Bánh mì...</td>
            <td class="border border-slate-300 p-2 text-right">500.000</td>
          </tr>
          <tr class="font-bold bg-slate-50">
            <td class="border border-slate-300 p-2" colspan="2">TỔNG CỘNG</td>
            <td class="border border-slate-300 p-2 text-right">~ 1.480.000</td>
          </tr>
        </tbody>
      </table>

      <h2>8. Những lưu ý quan trọng</h2>
      <ul>
        <li><strong>Giờ cấm xe:</strong> Phố cổ cấm xe máy từ 9h-11h và 15h-21h30. Hãy đi bộ hoặc thuê xe đạp để cảm nhận trọn vẹn không khí.</li>
        <li><strong>May đo siêu tốc:</strong> Hội An nổi tiếng với dịch vụ may quần áo lấy ngay trong 24h (như tiệm Yaly, A Dong Silk). Hãy đặt may vào ngày đầu tiên đến.</li>
        <li><strong>Nước Mót:</strong> Đừng quên check-in với ly nước Mót (150 Trần Phú) thần thánh, giá chỉ 12.000 VNĐ.</li>
      </ul>
    `,
    image: "/images/hoian1.jpg",
    gallery: [
        "/images/hoian2.jpg",
        "/images/hoian3.jpg",
        "/images/hoian4.jpg",
        "/images/hoian5.jpg"
    ],
    author: "Trần Thảo",
    date: "10/12/2024",
    location: "Hội An, Quảng Nam",
    tags: ["Hội An", "Phố cổ", "Đèn lồng", "Ẩm thực", "Miền Trung"]
  },
  {
    id: 3,
    title: "Sapa - Săn Mây Trên Đỉnh Fansipan",
    slug: "sapa-san-may",
    category: "mien-bac",
    excerpt: "Kinh nghiệm du lịch Sapa tự túc: Săn mây Fansipan, check-in bản Cát Cát, ngắm ruộng bậc thang mùa lúa chín và thưởng thức đồ nướng trong tiết trời se lạnh.",
    content: `
      <p><strong>Sapa</strong> không chỉ là nơi tránh nóng, đó là nơi bạn chạm tay vào mây trời. Nằm ở độ cao 1.600m, Sapa sở hữu khí hậu ôn đới, mát mẻ quanh năm. Tuy nhiên, để có một chuyến đi "đáng đồng tiền bát gạo", bạn cần biết chính xác đi đâu và ăn gì để tránh bị chặt chém hoặc thất vọng vì sương mù dày đặc.</p>
      
      <h2>1. Lịch trình & Địa điểm tham quan</h2>
      <h3>Ngày 1: Bản Cát Cát & Nhà thờ Đá</h3>
      <ul>
        <li><strong>Bản Cát Cát:</strong> Cách trung tâm 2km. Vé vào cổng: 90.000 VNĐ. Đây là bản của người H'Mông Đen, nổi tiếng với những guồng nước khổng lồ, suối Tiên Sa và những con đường lát đá.</li>
        <li><strong>Nhà thờ Đá:</strong> Biểu tượng trung tâm thị trấn, xây dựng từ thời Pháp (1895). Miễn phí tham quan.</li>
        <li><strong>Sun Plaza:</strong> Tòa nhà mang kiến trúc Pháp, ga đi của tàu hỏa leo núi Mường Hoa. Điểm check-in "sống ảo" cực chất.</li>
      </ul>

      <h3>Ngày 2: Chinh phục Fansipan & Đèo Ô Quy Hồ</h3>
      <ul>
        <li><strong>Đỉnh Fansipan:</strong> Nóc nhà Đông Dương (3.143m). Bạn cần mua vé tàu hỏa leo núi Mường Hoa (150k) + Vé cáp treo (800k) + Vé tàu hỏa leo núi lên đỉnh (150k chiều lên). Tổng combo khoảng 1.100.000 VNĐ/người.</li>
        <li><strong>Đèo Ô Quy Hồ:</strong> Một trong tứ đại đỉnh đèo. Hãy đến Cổng Trời hoặc quán cafe Ô Quy Hồ vào lúc 16h30 - 17h30 để săn hoàng hôn biển mây.</li>
      </ul>

      <h3>Ngày 3: Bản Tả Van - Lao Chải</h3>
      <p>Nơi có ruộng bậc thang đẹp nhất. Vé tham quan: 75.000 VNĐ. Hãy thuê xe máy đi sâu vào bản để thấy cuộc sống thực sự của người dân, tránh xa sự ồn ào của thị trấn.</p>

      <h2>2. Di chuyển & Chi phí</h2>
      <ul>
        <li><strong>Hà Nội - Sapa:</strong> Xe giường nằm (Sao Việt, Hà Sơn Hải Vân) giá 250k - 350k/chiều. Thời gian: 5-6 tiếng cao tốc Nội Bài - Lào Cai.</li>
        <li><strong>Tại Sapa:</strong> Thuê xe máy 100k - 150k/ngày. Taxi ở Sapa khá đắt do đường đèo dốc.</li>
      </ul>

      <h3>Bảng chi phí ước tính (3 ngày 2 đêm)</h3>
      <table class="w-full border-collapse border border-slate-300 mt-4 mb-6 text-sm">
        <thead>
          <tr class="bg-slate-100">
            <th class="border border-slate-300 p-2 text-left">Hạng mục</th>
            <th class="border border-slate-300 p-2 text-left">Chi tiết</th>
            <th class="border border-slate-300 p-2 text-right">Đơn giá (VNĐ)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-slate-300 p-2">Di chuyển</td>
            <td class="border border-slate-300 p-2">Xe khách khứ hồi + Thuê xe máy</td>
            <td class="border border-slate-300 p-2 text-right">800.000</td>
          </tr>
          <tr>
            <td class="border border-slate-300 p-2">Lưu trú</td>
            <td class="border border-slate-300 p-2">Homestay/Khách sạn 3* (2 đêm)</td>
            <td class="border border-slate-300 p-2 text-right">800.000</td>
          </tr>
          <tr>
            <td class="border border-slate-300 p-2">Vé tham quan</td>
            <td class="border border-slate-300 p-2">Fansipan + Cát Cát + Tả Van</td>
            <td class="border border-slate-300 p-2 text-right">1.300.000</td>
          </tr>
          <tr>
            <td class="border border-slate-300 p-2">Ăn uống</td>
            <td class="border border-slate-300 p-2">Lẩu cá tầm, đồ nướng, thắng cố</td>
            <td class="border border-slate-300 p-2 text-right">1.000.000</td>
          </tr>
          <tr class="font-bold bg-slate-50">
            <td class="border border-slate-300 p-2" colspan="2">TỔNG CỘNG</td>
            <td class="border border-slate-300 p-2 text-right">~ 3.900.000</td>
          </tr>
        </tbody>
      </table>

      <h2>3. Mẹo vặt (Tips)</h2>
      <ul>
        <li><strong>Trang phục:</strong> Mang theo áo khoác dày dù đi vào mùa hè vì ban đêm rất lạnh. Giày thể thao là bắt buộc vì phải đi bộ nhiều.</li>
        <li><strong>Mua thuốc:</strong> Mang theo thuốc đau đầu, thuốc tiêu hóa. Độ cao và thức ăn lạ có thể khiến bạn khó chịu.</li>
        <li><strong>Tránh "cò":</strong> Không mua sâm, nấm linh chi bán rong vì đa phần là hàng Trung Quốc chất lượng kém.</li>
      </ul>
    `,
    image: "/images/sapa1.jpg",
    gallery: [
        "/images/sapa2.jpg",
        "/images/sapa3.jpg",
        "/images/sapa4.jpg",
        "/images/sapa5.jpg"
    ],
    author: "Lê Hùng",
    date: "09/12/2024",
    location: "Sapa, Lào Cai",
    tags: ["Sapa", "Ruộng bậc thang", "Fansipan", "Săn mây", "Miền Bắc"]
  },
  {
    id: 4,
    title: "Huế - Thăm Cố Đô Trầm Mặc",
    slug: "hue-co-do",
    category: "mien-trung",
    excerpt: "Huế mộng mơ với Đại Nội uy nghiêm, lăng tẩm trầm mặc và nền ẩm thực cung đình tinh tế. Hướng dẫn tham quan trọn vẹn cố đô trong 2 ngày 1 đêm.",
    content: `
      <p><strong>Huế</strong> không buồn như người ta vẫn nghĩ. Huế trầm mặc, sâu lắng và đầy chất thơ. Là kinh đô cuối cùng của triều đại phong kiến Việt Nam, Huế sở hữu khối lượng di sản khổng lồ. Nếu bạn yêu lịch sử, kiến trúc và ẩm thực tinh tế, Huế là điểm đến không thể bỏ qua.</p>
      
      <h2>1. Lịch trình & Địa điểm tham quan</h2>
      <h3>Đại Nội Huế (Kinh thành)</h3>
      <p><strong>Địa chỉ:</strong> Đường 23/8, phường Thuận Hòa.</p>
      <p><strong>Giá vé:</strong> 200.000 VNĐ/người lớn.</p>
      <p>Quần thể di tích rộng lớn gồm Hoàng Thành và Tử Cấm Thành. Bạn sẽ mất khoảng 3-4 tiếng để đi hết các điểm chính: Ngọ Môn, Điện Thái Hòa, Thế Miếu, Cung Diên Thọ. Nên thuê thuyết minh viên hoặc audioguide để hiểu rõ lịch sử.</p>

      <h3>Hệ thống Lăng tẩm (Chọn 3 lăng đẹp nhất)</h3>
      <ul>
        <li><strong>Lăng Khải Định:</strong> Vé 150.000 VNĐ. Kiến trúc giao thoa Đông - Tây, nổi bật với nghệ thuật khảm sành sứ đỉnh cao.</li>
        <li><strong>Lăng Tự Đức:</strong> Vé 150.000 VNĐ. Lăng tẩm thơ mộng nhất, có hồ nước, rừng thông, phản ánh tâm hồn thi sĩ của vua.</li>
        <li><strong>Lăng Minh Mạng:</strong> Vé 150.000 VNĐ. Uy nghiêm, cân đối, hài hòa tuyệt đối với thiên nhiên.</li>
      </ul>

      <h3>Chùa Thiên Mụ & Sông Hương</h3>
      <p>Miễn phí tham quan. Nên đi thuyền rồng từ bến Tòa Khâm lên chùa Thiên Mụ (khoảng 30 phút) để ngắm hoàng hôn trên sông Hương.</p>

      <h2>2. Di chuyển & Chi phí</h2>
      <p>Sân bay Phú Bài cách trung tâm 15km. Taxi về trung tâm khoảng 250.000 VNĐ.</p>
      
      <h3>Bảng chi phí ước tính (2 ngày 1 đêm)</h3>
      <table class="w-full border-collapse border border-slate-300 mt-4 mb-6 text-sm">
        <thead>
          <tr class="bg-slate-100">
            <th class="border border-slate-300 p-2 text-left">Hạng mục</th>
            <th class="border border-slate-300 p-2 text-left">Chi tiết</th>
            <th class="border border-slate-300 p-2 text-right">Đơn giá (VNĐ)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-slate-300 p-2">Di chuyển</td>
            <td class="border border-slate-300 p-2">Taxi sân bay + Thuê xe máy</td>
            <td class="border border-slate-300 p-2 text-right">400.000</td>
          </tr>
          <tr>
            <td class="border border-slate-300 p-2">Lưu trú</td>
            <td class="border border-slate-300 p-2">Khách sạn 3 sao (1 đêm)</td>
            <td class="border border-slate-300 p-2 text-right">400.000</td>
          </tr>
          <tr>
            <td class="border border-slate-300 p-2">Vé tham quan</td>
            <td class="border border-slate-300 p-2">Combo 3 điểm (Đại Nội + 2 Lăng)</td>
            <td class="border border-slate-300 p-2 text-right">420.000</td>
          </tr>
          <tr>
            <td class="border border-slate-300 p-2">Ăn uống</td>
            <td class="border border-slate-300 p-2">Bún bò, Cơm hến, Chè, Bánh...</td>
            <td class="border border-slate-300 p-2 text-right">500.000</td>
          </tr>
          <tr class="font-bold bg-slate-50">
            <td class="border border-slate-300 p-2" colspan="2">TỔNG CỘNG</td>
            <td class="border border-slate-300 p-2 text-right">~ 1.720.000</td>
          </tr>
        </tbody>
      </table>

      <h2>3. Mẹo vặt (Tips)</h2>
      <ul>
        <li><strong>Trang phục:</strong> Khi vào Đại Nội và các Lăng tẩm, bắt buộc phải mặc trang phục lịch sự (quần dài hoặc váy qua gối).</li>
        <li><strong>Ăn uống:</strong> Đừng chỉ ăn ở nhà hàng. Hãy ghé chợ Đông Ba hoặc các quán vỉa hè đường Kim Long để thưởng thức bún bò, bánh bèo nậm lọc chuẩn vị Huế với giá rẻ bèo.</li>
        <li><strong>Mưa Huế:</strong> Nếu đi vào tháng 10-12, hãy chuẩn bị sẵn áo mưa và tâm hồn lãng mạn vì Huế mưa dầm dề cả ngày.</li>
      </ul>
    `,
    image: "/images/hue1.jpg",
    gallery: [
        "/images/hue2.jpg",
        "/images/hue3.jpg",
        "/images/hue4.jpg",
        "/images/hue5.jpg"
    ],
    author: "Hoàng Tuấn",
    date: "08/12/2024",
    location: "Huế, Thừa Thiên Huế",
    tags: ["Huế", "Cố đô", "Lịch sử", "Ẩm thực", "Miền Trung"]
  },
  {
    id: 5,
    title: "Hà Nội - Thủ Đô Ngàn Năm Văn Hiến",
    slug: "ha-noi-thu-do",
    category: "mien-bac",
    excerpt: "Hà Nội 36 phố phường với những góc cafe cổ kính, gánh hàng rong và mùa thu nồng nàn hoa sữa. Cẩm nang vi vu thủ đô cho người lần đầu đến.",
    content: `
      <p><strong>Hà Nội</strong> không vội được đâu. Thủ đô ngàn năm văn hiến là sự pha trộn thú vị giữa nét cổ kính rêu phong và nhịp sống hiện đại hối hả. Để cảm nhận trọn vẹn Hà Nội, bạn cần len lỏi vào những con ngõ nhỏ, ngồi trà đá vỉa hè và thưởng thức những món ăn đường phố trứ danh.</p>
      
      <h2>1. Lịch trình & Địa điểm tham quan</h2>
      <h3>Khu vực Trung tâm (Quận Hoàn Kiếm)</h3>
      <ul>
        <li><strong>Hồ Gươm & Đền Ngọc Sơn:</strong> Vé đền Ngọc Sơn 30.000 VNĐ. Đi bộ quanh hồ, ăn kem Tràng Tiền.</li>
        <li><strong>Phố Cổ:</strong> Mê cung 36 phố phường. Ghé chợ Đồng Xuân, phố Tạ Hiện (phố bia) vào buổi tối.</li>
        <li><strong>Nhà tù Hỏa Lò:</strong> Vé 30.000 VNĐ. Địa điểm lịch sử gây xúc động mạnh, được ví như "Địa ngục trần gian".</li>
      </ul>

      <h3>Khu vực Ba Đình</h3>
      <ul>
        <li><strong>Lăng Bác:</strong> Miễn phí. Mở cửa các buổi sáng (trừ T2, T6). Nên đi sớm để xếp hàng.</li>
        <li><strong>Hoàng Thành Thăng Long:</strong> Vé 30.000 VNĐ. Di sản văn hóa thế giới.</li>
        <li><strong>Văn Miếu Quốc Tử Giám:</strong> Vé 30.000 VNĐ. Trường đại học đầu tiên của Việt Nam.</li>
      </ul>

      <h3>Khu vực Tây Hồ</h3>
      <p>Dạo quanh Hồ Tây, thăm chùa Trấn Quốc, phủ Tây Hồ và thưởng thức bánh tôm.</p>

      <h2>2. Di chuyển & Chi phí</h2>
      <p>Sân bay Nội Bài cách trung tâm 30km. Xe bus 86 (45.000 VNĐ) là lựa chọn tiết kiệm và sạch sẽ nhất.</p>

      <h3>Bảng chi phí ước tính (2 ngày 1 đêm)</h3>
      <table class="w-full border-collapse border border-slate-300 mt-4 mb-6 text-sm">
        <thead>
          <tr class="bg-slate-100">
            <th class="border border-slate-300 p-2 text-left">Hạng mục</th>
            <th class="border border-slate-300 p-2 text-left">Chi tiết</th>
            <th class="border border-slate-300 p-2 text-right">Đơn giá (VNĐ)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-slate-300 p-2">Di chuyển</td>
            <td class="border border-slate-300 p-2">Xe bus 86 + Grab/Xe máy</td>
            <td class="border border-slate-300 p-2 text-right">300.000</td>
          </tr>
          <tr>
            <td class="border border-slate-300 p-2">Lưu trú</td>
            <td class="border border-slate-300 p-2">Homestay Phố Cổ (1 đêm)</td>
            <td class="border border-slate-300 p-2 text-right">400.000</td>
          </tr>
          <tr>
            <td class="border border-slate-300 p-2">Vé tham quan</td>
            <td class="border border-slate-300 p-2">Văn Miếu, Ngọc Sơn, Hỏa Lò</td>
            <td class="border border-slate-300 p-2 text-right">100.000</td>
          </tr>
          <tr>
            <td class="border border-slate-300 p-2">Ăn uống</td>
            <td class="border border-slate-300 p-2">Phở, Bún chả, Cafe trứng...</td>
            <td class="border border-slate-300 p-2 text-right">600.000</td>
          </tr>
          <tr class="font-bold bg-slate-50">
            <td class="border border-slate-300 p-2" colspan="2">TỔNG CỘNG</td>
            <td class="border border-slate-300 p-2 text-right">~ 1.400.000</td>
          </tr>
        </tbody>
      </table>

      <h2>3. Mẹo vặt (Tips)</h2>
      <ul>
        <li><strong>Tránh giờ cao điểm:</strong> Tắc đường là "đặc sản" Hà Nội. Hạn chế di chuyển lúc 8h sáng và 17h30 chiều.</li>
        <li><strong>Hỏi giá trước:</strong> Khi ăn uống vỉa hè hoặc đi xích lô, hãy hỏi giá trước để tránh bị "chặt chém".</li>
        <li><strong>Cafe đường tàu:</strong> Hiện tại đã bị cấm vì lý do an toàn, bạn không nên cố tình đi vào khu vực này.</li>
      </ul>
    `,
    image: "/images/hanoi1.jpg",
    gallery: [
        "/images/hanoi2.jpg",
        "/images/hanoi3.jpg",
        "/images/hanoi4.jpg",
        "/images/hanoi5.jpg"
    ],
    author: "Hà Nội Review",
    date: "02/12/2024",
    location: "Hà Nội",
    tags: ["Hà Nội", "Thủ đô", "Phố cổ", "Hồ Gươm", "Miền Bắc"]
  },
  {
    id: 6,
    title: "Phở Hà Nội - Tinh Hoa Ẩm Thực Việt",
    slug: "pho-ha-noi",
    category: "am-thuc",
    excerpt: "Không chỉ là một món ăn, Phở là niềm tự hào, là 'quốc hồn quốc túy' của Việt Nam. Cùng tìm hiểu lịch sử và những quán phở gia truyền ngon nức tiếng.",
    content: `
      <p>Nếu ai đó hỏi món ăn nào đại diện cho ẩm thực Việt Nam trên bản đồ thế giới, câu trả lời chắc chắn là <strong>Phở</strong>. Nhưng để thưởng thức một bát phở chuẩn vị, tinh tế và đúng điệu nhất, bạn phải đến Hà Nội. Phở Hà Nội không chỉ là một món ăn, đó là một nét văn hóa, một niềm tự hào và là nỗi nhớ của những người con xa xứ.</p>
      
      <h2>1. Nguồn gốc và Lịch sử</h2>
      <p>Phở được cho là xuất hiện vào đầu thế kỷ 20. Có nhiều giả thuyết về nguồn gốc của phở, nhưng đa số đều đồng tình rằng phở sinh ra từ sự giao thoa văn hóa ẩm thực Việt - Pháp - Hoa. Từ những gánh phở rong trên phố cổ, phở dần trở thành món quà sáng, trưa, tối quen thuộc của người Hà Nội.</p>

      <h2>2. Bí quyết của một bát phở ngon</h2>
      <p>Một bát phở ngon là tổng hòa của nhiều yếu tố:</p>
      <ul>
        <li><strong>Nước dùng (Nước lèo):</strong> Đây là linh hồn của phở. Nước dùng phải được ninh từ xương ống bò trong nhiều giờ (thường là 10-12 tiếng) để lấy vị ngọt tự nhiên, trong veo và không có váng mỡ. Hương thơm đặc trưng đến từ quế, hồi, thảo quả, gừng nướng và hành khô nướng.</li>
        <li><strong>Bánh phở:</strong> Bánh phở Hà Nội phải mỏng, mềm nhưng vẫn có độ dai, khi chan nước dùng nóng hổi vào không bị nát.</li>
        <li><strong>Thịt bò:</strong> Thịt bò phải tươi, thái mỏng ngang thớ. Có nhiều loại: tái, chín, nạm, gầu, bắp... tùy theo sở thích của thực khách.</li>
        <li><strong>Gia vị đi kèm:</strong> Phở Hà Nội truyền thống thường chỉ ăn kèm với giấm tỏi, tương ớt xay, chanh tươi và một chút hành lá, rau mùi. Người Hà Nội xưa không ăn phở với rau sống hay giá đỗ như phở miền Nam.</li>
      </ul>

      <h2>3. Những quán phở "huyền thoại"</h2>
      <p>Hà Nội có hàng nghìn quán phở, nhưng những cái tên sau đây đã trở thành thương hiệu:</p>
      <ul>
        <li><strong>Phở Gia Truyền Bát Đàn:</strong> Nổi tiếng với cảnh xếp hàng chờ đợi, tự bưng bê. Bát phở ở đây đầy đặn, thịt bò mềm ngọt, nước dùng đậm đà.</li>
        <li><strong>Phở Thìn Lò Đúc:</strong> Khác biệt với món phở tái lăn. Thịt bò được xào nhanh với tỏi và gừng trước khi cho vào bát, tạo nên lớp nước dùng béo ngậy và thơm nức mũi.</li>
        <li><strong>Phở Lý Quốc Sư:</strong> Chuỗi phở nổi tiếng với chất lượng ổn định, không gian sạch sẽ, quẩy giòn tan.</li>
        <li><strong>Phở Sướng (Đinh Liệt):</strong> Cái tên nói lên tất cả. Phở ở đây thanh tao, nhẹ nhàng đúng chất Hà thành.</li>
      </ul>

      <h2>4. Văn hóa ăn phở</h2>
      <p>Ăn phở cũng cần có nghệ thuật. Khi bát phở được bưng ra, hãy hít hà hương thơm ngào ngạt trước. Nếm thử một thìa nước dùng nguyên bản để cảm nhận vị ngọt của xương. Sau đó mới thêm chanh, ớt, giấm tỏi tùy khẩu vị. Ăn phở phải ăn nóng, vừa ăn vừa xuýt xoa mới thấy hết cái ngon.</p>
    `,
    image: "/images/phohanoi1.jpg",
    gallery: [
        "/images/phohanoi2.jpg",
        "/images/phohanoi3.jpg",
        "/images/phohanoi4.jpg",
        "/images/phohanoi5.jpg"
    ],
    author: "Phạm Hương",
    date: "01/12/2024",
    location: "Hà Nội, Việt Nam",
    tags: ["Phở", "Ẩm thực Hà Nội", "Món ngon", "Ẩm thực"]
  },
  {
    id: 7,
    title: "Phú Quốc - Thiên Đường Đảo Ngọc Phương Nam",
    slug: "phu-quoc-dao-ngoc",
    category: "mien-nam",
    excerpt: "Phú Quốc không chỉ có biển xanh cát trắng. Khám phá VinWonders, cáp treo Hòn Thơm, ngắm hoàng hôn Sunset Sanato và thưởng thức bún quậy trứ danh.",
    content: `
      <p><strong>Phú Quốc</strong>, hòn đảo lớn nhất Việt Nam thuộc tỉnh Kiên Giang, từ lâu đã được mệnh danh là "Đảo Ngọc" thiên đường. Nơi đây không chỉ sở hữu những bãi biển trong xanh, bờ cát trắng mịn trải dài mà còn có những khu rừng nguyên sinh trù phú và một nền văn hóa ẩm thực độc đáo, thu hút hàng triệu du khách mỗi năm.</p>

      <h2>Thời điểm lý tưởng để du lịch Phú Quốc</h2>
      <p>Khí hậu Phú Quốc chia làm hai mùa rõ rệt:</p>
      <ul>
        <li><strong>Mùa khô (tháng 11 - tháng 4):</strong> Đây là thời điểm đẹp nhất để đến Phú Quốc. Trời nắng đẹp, biển lặng, ít mưa, rất thuận lợi cho các hoạt động tham quan, tắm biển và lặn ngắm san hô.</li>
        <li><strong>Mùa mưa (tháng 5 - tháng 10):</strong> Mưa nhiều, biển có thể động, nhưng bù lại du khách sẽ vắng hơn, giá dịch vụ rẻ hơn và bạn sẽ được thưởng thức đặc sản nấm tràm chỉ có vào mùa này.</li>
      </ul>

      <h2>Khám phá Bắc Đảo và Nam Đảo</h2>
      <p>Phú Quốc được chia thành hai khu vực chính với những điểm tham quan đặc trưng:</p>
      <h3>1. Bắc Đảo - Thiên đường giải trí</h3>
      <p>Nơi tập trung các tổ hợp vui chơi, nghỉ dưỡng quy mô lớn:</p>
      <ul>
        <li><strong>VinWonders Phú Quốc:</strong> Công viên chủ đề lớn nhất Việt Nam với hàng trăm trò chơi hấp dẫn cho mọi lứa tuổi.</li>
        <li><strong>Vinpearl Safari:</strong> Vườn thú bán hoang dã đầu tiên tại Việt Nam, nơi bạn được ngồi xe bus chuyên dụng đi giữa khu vực sinh sống của các loài động vật hoang dã.</li>
        <li><strong>Grand World - Thành phố không ngủ:</strong> Tái hiện một "Venice thu nhỏ" với dòng sông thơ mộng, những dãy nhà rực rỡ sắc màu, show diễn Tinh hoa Việt Nam và Sắc màu Venice hoành tráng.</li>
        <li><strong>Mũi Gành Dầu:</strong> Nơi bạn có thể ngắm nhìn hải giới Campuchia.</li>
      </ul>

      <h3>2. Nam Đảo - Vẻ đẹp hoang sơ của biển trời</h3>
      <p>Nơi dành cho những ai yêu thích khám phá thiên nhiên và những bãi biển đẹp như tranh vẽ:</p>
      <ul>
        <li><strong>Bãi Sao & Bãi Kem:</strong> Hai trong số những bãi biển đẹp nhất thế giới với bờ cát trắng mịn như kem và nước biển xanh màu ngọc bích.</li>
        <li><strong>Cáp treo Hòn Thơm:</strong> Cáp treo 3 dây vượt biển dài nhất thế giới, đưa bạn từ thị trấn An Thới đến đảo Hòn Thơm, ngắm toàn cảnh biển đảo từ trên cao.</li>
        <li><strong>Tour 4 đảo:</strong> Trải nghiệm không thể bỏ lỡ với hành trình khám phá Hòn Móng Tay, Hòn Gầm Ghì, Hòn Mây Rút bằng cano, lặn ngắm san hô và chụp ảnh check-in.</li>
        <li><strong>Nhà tù Phú Quốc:</strong> Di tích lịch sử tái hiện lại những tội ác chiến tranh và tinh thần bất khuất của các chiến sĩ cách mạng.</li>
        <li><strong>Thị trấn Hoàng Hôn (Sunset Town):</strong> Quần thể kiến trúc mang phong cách Địa Trung Hải với Cầu Hôn (Kiss Bridge) biểu tượng và show diễn Kiss The Stars mãn nhãn.</li>
      </ul>

      <h2>Ẩm thực Đảo Ngọc - Ăn gì, ở đâu?</h2>
      <p>Đến Phú Quốc là đến với thiên đường hải sản tươi sống. Đừng quên ghé chợ đêm Dinh Cậu để thưởng thức:</p>
      <ul>
        <li><strong>Bún quậy Kiến Xây:</strong> Món ăn "signature" của Phú Quốc. Tôm, cá tươi được xay nhuyễn, chan nước lèo nóng hổi và thực khách phải tự "quậy" để làm chín, sau đó tự pha nước chấm theo khẩu vị riêng.</li>
        <li><strong>Gỏi cá trích:</strong> Cá trích tươi sống được trộn với hành tây, dừa nạo, đậu phộng, cuốn cùng bánh tráng và rau rừng, chấm nước mắm chua ngọt.</li>
        <li><strong>Hải sản:</strong> Nhum biển nướng mỡ hành, ghẹ Hàm Ninh, còi biên mai nướng...</li>
        <li><strong>Bún kèn Út Lượm:</strong> Món bún dân dã với nước lèo nấu từ cá và cốt dừa, vị béo ngậy đặc trưng.</li>
      </ul>

      <h2>Mua gì làm quà?</h2>
      <p>Đặc sản Phú Quốc nổi tiếng gần xa:</p>
      <ul>
        <li><strong>Nước mắm Phú Quốc:</strong> Thương hiệu trứ danh với độ đạm cao, hương vị đậm đà.</li>
        <li><strong>Hồ tiêu:</strong> Tiêu Phú Quốc cay nồng và thơm hơn những nơi khác.</li>
        <li><strong>Rượu sim:</strong> Thức uống tốt cho tiêu hóa.</li>
        <li><strong>Hải sản khô:</strong> Mực khô, tôm khô, cá khô...</li>
      </ul>
    `,
    image: "/images/phuquoc1.jpg",
    gallery: [
        "/images/phuquoc2.jpg",
        "/images/phuquoc3.jpg",
        "/images/phuquoc4.jpg",
        "/images/phuquoc5.jpg"
    ],
    author: "Lê Vy",
    date: "28/11/2024",
    location: "Kiên Giang, Phú Quốc",
    tags: ["Phú Quốc", "Biển đảo", "Lặn biển", "Kiên Giang", "Miền Nam"]
  },
  {
    id: 8,
    title: "Đà Lạt - Lãng Mạn Thành Phố Ngàn Hoa",
    slug: "da-lat-thanh-pho-ngan-hoa",
    category: "mien-trung",
    excerpt: "Đà Lạt mùa nào cũng đẹp. Săn mây đồi Đa Phú, check-in Quảng trường Lâm Viên, khám phá những quán cafe cực chill và thưởng thức bánh tráng nướng nóng hổi.",
    content: `
      <p>Nằm trên cao nguyên Lâm Viên ở độ cao 1.500m, <strong>Đà Lạt</strong> được ví như một "tiểu Paris" thu nhỏ giữa lòng Việt Nam. Với khí hậu ôn hòa, mát mẻ quanh năm, những rừng thông xanh rì, những hồ nước yên ả và hàng ngàn loài hoa khoe sắc, Đà Lạt là điểm đến lãng mạn, nơi thời gian như trôi chậm lại.</p>

      <h2>Đà Lạt đẹp nhất mùa nào?</h2>
      <p>Đà Lạt mùa nào cũng có vẻ đẹp riêng để bạn khám phá:</p>
      <ul>
        <li><strong>Tháng 10 - 12:</strong> Mùa hoa dã quỳ vàng rực các cung đường và mùa hoa cải trắng tinh khôi. Thời tiết khô ráo, se lạnh, rất lý tưởng để du lịch.</li>
        <li><strong>Tháng 1 - 4:</strong> Mùa xuân với hoa mai anh đào nở hồng rực cả góc trời, tạo nên khung cảnh vô cùng lãng mạn.</li>
        <li><strong>Tháng 5 - 9:</strong> Mùa mưa, nhưng những cơn mưa Đà Lạt thường không kéo dài. Đây là mùa của những biển mây hùng vĩ và những thác nước cuồn cuộn.</li>
      </ul>

      <h2>Những tọa độ check-in không thể bỏ lỡ</h2>
      <h3>1. Quảng trường Lâm Viên</h3>
      <p>Biểu tượng của thành phố với hai công trình kiến trúc bằng kính độc đáo: khối hoa Dã Quỳ khổng lồ và nụ hoa Atiso. Đây là điểm khởi đầu hoàn hảo cho hành trình khám phá Đà Lạt.</p>

      <h3>2. Đồi chè Cầu Đất</h3>
      <p>Cách trung tâm thành phố khoảng 25km, đồi chè xanh mướt trải dài tít tắp là một khung cảnh bình yên đến nao lòng. Bạn có thể check-in với những tuabin gió khổng lồ và thưởng thức cà phê trong không gian trong lành.</p>

      <h3>3. Ga Đà Lạt</h3>
      <p>Nhà ga cổ kính nhất Đông Dương với kiến trúc Pháp độc đáo, mang đậm dấu ấn thời gian. Đây là một trong những địa điểm chụp ảnh cưới và "sống ảo" được yêu thích nhất.</p>

      <h3>4. Hồ Tuyền Lâm & Thiền viện Trúc Lâm</h3>
      <p>Hồ nước ngọt lớn nhất Đà Lạt, được bao bọc bởi rừng thông. Bạn có thể đi cáp treo từ đồi Robin qua Thiền viện Trúc Lâm, sau đó đi thuyền dạo quanh hồ để cảm nhận sự thanh tịnh, yên bình.</p>

      <h3>5. Săn mây Đà Lạt</h3>
      <p>Một trong những trải nghiệm đặc biệt nhất. Hãy dậy thật sớm (khoảng 4h sáng) và di chuyển đến <strong>Đồi Đa Phú, Đồi Thiên Phúc Đức, hoặc Cầu gỗ săn mây</strong> để chiêm ngưỡng biển mây trắng xóa bồng bềnh trong ánh bình minh.</p>

      <h2>Food tour Đà Lạt - Ăn sập thành phố sương</h2>
      <p>Trong tiết trời se lạnh, ẩm thực Đà Lạt càng trở nên hấp dẫn hơn bao giờ hết:</p>
      <ul>
        <li><strong>Bánh tráng nướng:</strong> "Pizza Việt Nam" nóng hổi, giòn rụm với đủ loại topping, bán nhiều ở khu vực chợ đêm.</li>
        <li><strong>Lẩu gà lá é:</strong> Món ăn làm nên thương hiệu Đà Lạt. Vị ngọt thanh của thịt gà ta, vị cay nồng của ớt xiêm xanh và hương thơm đặc trưng của lá é sẽ làm ấm lòng du khách.</li>
        <li><strong>Sữa đậu nành nóng & Bánh ngọt:</strong> Combo không thể thiếu khi dạo chợ đêm Đà Lạt.</li>
        <li><strong>Kem bơ Thanh Thảo:</strong> Món kem béo ngậy, thơm lừng, ăn một lần là nhớ mãi.</li>
        <li><strong>Bánh căn:</strong> Những chiếc bánh nhỏ xinh, giòn rụm, ăn kèm nước mắm hành hoặc mắm nêm.</li>
      </ul>

      <h2>Lưu trú và di chuyển</h2>
      <p>Đà Lạt có vô vàn lựa chọn lưu trú từ homestay xinh xắn, villa biệt lập đến khách sạn sang trọng. Để tiện di chuyển, bạn nên thuê xe máy để len lỏi vào những con dốc, những cung đường đẹp nhất của thành phố.</p>
    `,
    image: "/images/dalat1.jpg",
    gallery: [
        "/images/dalat2.jpg",
        "/images/dalat3.jpg",
        "/images/dalat4.jpg",
        "/images/dalat5.jpg"
    ],
    author: "Nguyễn An",
    date: "25/11/2024",
    location: "Lâm Đồng, Đà Lạt",
    tags: ["Đà Lạt", "Thành phố ngàn hoa", "Hồ Xuân Hương", "Săn mây", "Miền Trung"]
  },
  {
    id: 9,
    title: "Đà Nẵng - Thành Phố Đáng Sống Nhất Việt Nam",
    slug: "da-nang-thanh-pho-dang-song",
    category: "mien-trung",
    excerpt: "Đà Nẵng hội tụ đủ sông, núi, biển, đảo. Chiêm ngưỡng Cầu Rồng phun lửa, tắm biển Mỹ Khê và khám phá Bà Nà Hills đường lên tiên cảnh.",
    content: `
      <p><strong>Đà Nẵng</strong>, được mệnh danh là "thành phố đáng sống nhất Việt Nam", là điểm đến hoàn hảo hội tụ đủ sông, núi, biển và những cây cầu hiện đại. Với nhịp sống năng động, con người thân thiện và ẩm thực phong phú, Đà Nẵng luôn để lại ấn tượng sâu sắc trong lòng du khách.</p>

      <h2>Thời điểm lý tưởng để ghé thăm Đà Nẵng</h2>
      <p>Mùa khô từ tháng 3 đến tháng 8 là thời điểm đẹp nhất để du lịch Đà Nẵng. Lúc này trời nắng đẹp, ít mưa, biển trong xanh, rất thích hợp cho các hoạt động tắm biển và tham quan ngoài trời.</p>

      <h2>Những điểm đến không thể bỏ qua</h2>
      <h3>1. Bãi biển Mỹ Khê</h3>
      <p>Từng được tạp chí Forbes bình chọn là một trong sáu bãi biển quyến rũ nhất hành tinh. Với bờ cát trắng mịn, nước biển ấm và sóng hiền hòa, Mỹ Khê là nơi lý tưởng để thư giãn, tắm nắng và tham gia các môn thể thao dưới nước.</p>

      <h3>2. Bà Nà Hills & Cầu Vàng</h3>
      <p>Được ví như "đường lên tiên cảnh", Bà Nà Hills nằm ở độ cao gần 1.500m với khí hậu mát mẻ quanh năm. Bạn sẽ được trải nghiệm tuyến cáp treo đạt nhiều kỷ lục thế giới, dạo bước trong làng Pháp cổ kính và check-in tại <strong>Cầu Vàng</strong> - cây cầu biểu tượng được nâng đỡ bởi đôi bàn tay khổng lồ.</p>

      <h3>3. Bán đảo Sơn Trà</h3>
      <p>"Lá phổi xanh" của thành phố. Hãy thuê xe máy chạy dọc cung đường ven biển tuyệt đẹp, lên viếng Chùa Linh Ứng với tượng Phật Bà Quan Âm cao nhất Việt Nam, và nếu may mắn, bạn có thể bắt gặp những chú voọc chà vá chân nâu quý hiếm.</p>

      <h3>4. Ngũ Hành Sơn</h3>
      <p>Quần thể gồm 5 ngọn núi đá vôi tượng trưng cho Kim, Mộc, Thủy, Hỏa, Thổ. Đây là điểm đến tâm linh với nhiều hang động huyền bí và các ngôi chùa cổ kính. Đừng quên ghé thăm làng đá mỹ nghệ Non Nước dưới chân núi.</p>

      <h3>5. Những cây cầu biểu tượng</h3>
      <p>Đà Nẵng về đêm rực rỡ với những cây cầu độc đáo bắc qua sông Hàn:</p>
      <ul>
        <li><strong>Cầu Rồng:</strong> Biểu tượng mới của thành phố, có khả năng phun lửa và phun nước vào 21:00 tối thứ 7 và Chủ nhật.</li>
        <li><strong>Cầu Sông Hàn:</strong> Cầu quay duy nhất tại Việt Nam, quay 90 độ vào khoảng 23:00 - 24:00 mỗi cuối tuần để tàu thuyền qua lại.</li>
        <li><strong>Cầu Trần Thị Lý:</strong> Mang hình dáng cánh buồm căng gió vươn ra biển lớn.</li>
      </ul>

      <h2>Thiên đường ẩm thực Đà Nẵng</h2>
      <p>Ẩm thực Đà Nẵng đa dạng, ngon và giá cả rất phải chăng:</p>
      <ul>
        <li><strong>Mì Quảng:</strong> Món ăn đặc trưng của xứ Quảng. Sợi mì to, nước dùng ít nhưng đậm đà, ăn kèm thịt gà, tôm, trứng cút, bánh đa và rau sống.</li>
        <li><strong>Bánh tráng cuốn thịt heo:</strong> Thịt heo luộc hai đầu da được thái mỏng, cuốn cùng bánh tráng phơi sương, rau sống và chấm mắm nêm cay nồng.</li>
        <li><strong>Hải sản:</strong> Dọc đường bờ biển Võ Nguyên Giáp có rất nhiều nhà hàng hải sản tươi sống với giá cả hợp lý.</li>
        <li><strong>Bánh xèo, nem lụi:</strong> Món ăn vặt hấp dẫn, đặc biệt là ở khu vực đường Hoàng Diệu, Trưng Nữ Vương.</li>
      </ul>

      <h2>Gợi ý lịch trình</h2>
      <p>Đà Nẵng là điểm trung chuyển tuyệt vời để kết hợp tham quan <strong>Phố cổ Hội An</strong> (cách 30km) và <strong>Cố đô Huế</strong> (cách khoảng 100km qua đèo Hải Vân). Một lịch trình 3 ngày 2 đêm là hợp lý để khám phá thành phố này.</p>
    `,
    image: "/images/danang1.jpg",
    gallery: [
        "/images/danang2.jpg",
        "/images/danang3.jpg",
        "/images/danang4.jpg",
        "/images/danang5.jpg"
    ],
    author: "Minh Khôi",
    date: "20/11/2024",
    location: "Đà Nẵng",
    tags: ["Đà Nẵng", "Cầu Rồng", "Bà Nà Hills", "Biển Mỹ Khê", "Miền Trung"]
  },
  {
    id: 10,
    title: "Ninh Bình - Tuyệt Tình Cốc & Tràng An",
    slug: "ninh-binh-trang-an",
    category: "mien-bac",
    excerpt: "Được ví như 'Hạ Long trên cạn', Ninh Bình sở hữu vẻ đẹp sơn thủy hữu tình với Tràng An, Tam Cốc và Hang Múa view triệu đô.",
    content: `
      <p>Cách thủ đô Hà Nội chưa đầy 100km về phía Nam, <strong>Ninh Bình</strong> hiện lên như một bức tranh thủy mặc khổng lồ với hệ thống núi đá vôi hùng vĩ, những dòng sông uốn lượn và những hang động kỳ bí. Được mệnh danh là "Vịnh Hạ Long trên cạn", Ninh Bình là điểm đến không thể bỏ qua cho những ai yêu thiên nhiên và văn hóa lịch sử.</p>

      <h2>1. Quần thể danh thắng Tràng An</h2>
      <p>Di sản Văn hóa và Thiên nhiên Thế giới được UNESCO công nhận. Trải nghiệm tuyệt vời nhất ở đây là ngồi trên những chiếc thuyền nan nhỏ, được các cô lái đò đưa đi xuyên qua các hang động xuyên thủy (hang Sáng, hang Tối, hang Nấu Rượu...). Nước ở Tràng An trong vắt nhìn thấy tận đáy, rong rêu đung đưa theo nhịp chèo. Khung cảnh non nước hữu tình nơi đây từng là bối cảnh của bộ phim bom tấn "Kong: Skull Island".</p>

      <h2>2. Tam Cốc - Bích Động</h2>
      <p>Được ví như "Nam thiên đệ nhị động". Bạn sẽ đi thuyền trên dòng sông Ngô Đồng thơ mộng, luồn qua ba hang động (Hang Cả, Hang Hai, Hang Ba). Thời điểm đẹp nhất để đi Tam Cốc là cuối tháng 5, đầu tháng 6, khi hai bên bờ sông là những cánh đồng lúa chín vàng rực rỡ, tạo nên khung cảnh đẹp như mơ.</p>

      <h2>3. Hang Múa - Vạn Lý Trường Thành thu nhỏ</h2>
      <p>Đây là điểm check-in hot nhất Ninh Bình dành cho giới trẻ. Để lên đến đỉnh núi Ngọa Long, bạn phải chinh phục gần 500 bậc đá trắng phau. Từ đỉnh núi, phóng tầm mắt xuống, bạn sẽ thu trọn vào ống kính vẻ đẹp ngoạn mục của dòng sông Ngô Đồng và những cánh đồng lúa Tam Cốc. Đây cũng là nơi ngắm hoàng hôn đẹp nhất Ninh Bình.</p>

      <h2>4. Chùa Bái Đính</h2>
      <p>Quần thể chùa lớn nhất Đông Nam Á với nhiều kỷ lục: Tượng Phật bằng đồng dát vàng lớn nhất châu Á, Hành lang La Hán dài nhất châu Á, Tháp xá lợi Phật cao nhất châu Á... Chùa Bái Đính không chỉ là điểm du lịch tâm linh mà còn là công trình kiến trúc hoành tráng, uy nghiêm.</p>

      <h2>5. Cố đô Hoa Lư</h2>
      <p>Kinh đô đầu tiên của nhà nước phong kiến tập quyền Việt Nam. Nơi đây lưu giữ những dấu ấn lịch sử hào hùng của hai triều đại Đinh và Tiền Lê. Bạn có thể viếng đền vua Đinh Tiên Hoàng và vua Lê Đại Hành, nghe kể về những câu chuyện lịch sử dựng nước và giữ nước.</p>

      <h2>6. Đặc sản Ninh Bình</h2>
      <p>Đến Ninh Bình, nhất định phải thưởng thức các món ngon từ dê núi:</p>
      <ul>
        <li><strong>Dê tái chanh:</strong> Thịt dê tươi ngọt, bì giòn, trộn với chanh, sả, vừng thơm phức.</li>
        <li><strong>Cơm cháy sốt dê:</strong> Cơm cháy giòn rụm chấm với nước sốt tim cật dê đậm đà.</li>
        <li><strong>Ốc núi:</strong> Loại ốc sống trên núi đá, ăn lá thuốc nên thịt rất giòn và thơm mùi thảo dược.</li>
      </ul>
    `,
    image: "/images/ninhbinh1.jpg",
    gallery: [
        "/images/ninhbinh2.jpg",
        "/images/ninhbinh3.jpg",
        "/images/ninhbinh4.jpg",
        "/images/ninhbinh5.jpg"
    ],
    author: "Thu Hà",
    date: "15/11/2024",
    location: "Ninh Bình",
    tags: ["Ninh Bình", "Tràng An", "Tam Cốc", "Hang Múa", "Miền Bắc"]
  },
  {
    id: 11,
    title: "Cần Thơ - Về Miền Tây Sông Nước",
    slug: "can-tho-mien-tay",
    category: "mien-nam",
    excerpt: "Trải nghiệm văn hóa chợ nổi Cái Răng độc đáo, thăm vườn trái cây trĩu quả và nghe đờn ca tài tử tại xứ Tây Đô.",
    content: `
      <p><strong>Cần Thơ</strong> - "Gạo trắng nước trong", thủ phủ của miền Tây Nam Bộ, là nơi hội tụ những nét văn hóa đặc sắc nhất của vùng sông nước Cửu Long. Thành phố này vừa mang vẻ đẹp hiện đại, sầm uất, vừa giữ được nét mộc mạc, chân chất của miệt vườn sông nước.</p>

      <h2>1. Chợ nổi Cái Răng - Văn hóa sông nước độc đáo</h2>
      <p>Đến Cần Thơ mà chưa đi chợ nổi Cái Răng thì coi như chưa đến. Hãy dậy thật sớm (khoảng 5h sáng), thuê một chiếc tàu đi từ bến Ninh Kiều ra chợ nổi. Bạn sẽ choáng ngợp trước khung cảnh hàng trăm chiếc ghe thuyền buôn bán tấp nập trên sông. Điểm đặc biệt là "cây bẹo" - treo gì bán nấy. Đừng quên thưởng thức bữa sáng bồng bềnh với tô bún riêu, hủ tiếu nóng hổi và ly cà phê sữa đá ngay trên ghe.</p>

      <h2>2. Bến Ninh Kiều & Cầu đi bộ</h2>
      <p>Biểu tượng của Cần Thơ. Bến Ninh Kiều nằm bên ngã ba sông Hậu và sông Cần Thơ, là nơi lý tưởng để đi dạo, hóng mát. Buổi tối, cầu đi bộ (cầu Tình Yêu) rực rỡ ánh đèn led và hoa sen là điểm check-in lãng mạn. Bạn cũng có thể mua vé du thuyền ăn tối trên sông Hậu, nghe đờn ca tài tử.</p>

      <h2>3. Nhà cổ Bình Thủy</h2>
      <p>Ngôi nhà cổ đẹp nhất miền Tây với kiến trúc giao thoa Đông - Tây độc đáo. Được xây dựng từ năm 1870, ngôi nhà vẫn giữ được gần như nguyên vẹn nội thất và kiến trúc xưa. Đây từng là bối cảnh của nhiều bộ phim nổi tiếng như "Người tình" (L'Amant), "Người đẹp Tây Đô".</p>

      <h2>4. Miệt vườn trái cây</h2>
      <p>Cần Thơ có đất đai màu mỡ, quanh năm cây trái tốt tươi. Các khu du lịch sinh thái như Mỹ Khánh, Vàm Xáng, Cồn Sơn... là nơi bạn có thể tự tay hái và thưởng thức trái cây ngay tại vườn: chôm chôm, dâu hạ châu, măng cụt, sầu riêng... Ngoài ra, bạn còn được xem đua heo, đua chó, tát mương bắt cá rất thú vị.</p>

      <h2>5. Ẩm thực Tây Đô</h2>
      <p>Ẩm thực Cần Thơ dân dã nhưng đậm đà khó quên:</p>
      <ul>
        <li><strong>Lẩu mắm:</strong> Món ăn trứ danh với nước lèo nấu từ mắm cá linh, cá sặc, ăn kèm với hải sản, thịt ba chỉ và hàng chục loại rau đồng nội (bông súng, điên điển, rau đắng...).</li>
        <li><strong>Bánh xèo củ hủ dừa:</strong> Bánh xèo miền Tây to, vỏ mỏng giòn, nhân tôm thịt và củ hủ dừa ngọt giòn sần sật.</li>
        <li><strong>Cá lóc nướng trui:</strong> Cá lóc nướng rơm thơm phức, cuốn bánh tráng rau sống chấm mắm me.</li>
        <li><strong>Pizza hủ tiếu:</strong> Món ăn sáng tạo từ hủ tiếu chiên giòn, ăn kèm trứng chiên, thịt khìa.</li>
      </ul>
    `,
    image: "/images/cantho1.jpg",
    gallery: [
        "/images/cantho2.jpg",
        "/images/cantho3.jpg",
        "/images/cantho4.jpg",
        "/images/cantho5.jpg"
    ],
    author: "Hai Lúa",
    date: "10/11/2024",
    location: "Cần Thơ, Miền Tây",
    tags: ["Cần Thơ", "Chợ nổi", "Miền Tây", "Trái cây", "Miền Nam"]
  },
  {
    id: 12,
    title: "Nha Trang - Viên Ngọc Xanh Của Biển Đông",
    slug: "nha-trang-bien-dao",
    category: "mien-trung",
    excerpt: "Thiên đường nghỉ dưỡng với những hòn đảo hoang sơ, VinWonders sôi động và tháp bà Ponagar cổ kính.",
    content: `
      <p><strong>Nha Trang</strong> (Khánh Hòa) được mệnh danh là "Hòn ngọc của Biển Đông", luôn nằm trong top những vịnh biển đẹp nhất thế giới. Với bờ biển dài uốn lượn, bãi cát trắng mịn, nước biển xanh ngắt và khí hậu nắng ấm quanh năm, Nha Trang là thiên đường nghỉ dưỡng biển lý tưởng cho mọi du khách.</p>

      <h2>1. VinWonders Nha Trang - Đảo giải trí</h2>
      <p>Tọa lạc trên đảo Hòn Tre, VinWonders là tổ hợp vui chơi giải trí đẳng cấp quốc tế. Để ra đảo, bạn sẽ được trải nghiệm tuyến cáp treo vượt biển dài nhất thế giới. Tại đây có đủ các trò chơi từ cảm giác mạnh (tàu lượn siêu tốc, đu quay dây văng) đến công viên nước, thủy cung, vườn thú Quý Vương và show diễn thực cảnh Tata Show hoành tráng.</p>

      <h2>2. Tour 3 đảo, 4 đảo</h2>
      <p>Đến Nha Trang không thể bỏ qua trải nghiệm đi cano khám phá các hòn đảo xinh đẹp:</p>
      <ul>
        <li><strong>Hòn Mun:</strong> Khu bảo tồn biển đầu tiên của Việt Nam với hệ sinh thái san hô đa dạng bậc nhất. Đây là điểm lặn biển (scuba diving) và đi bộ dưới đáy biển đẹp nhất.</li>
        <li><strong>Hòn Tằm:</strong> Nổi tiếng với dịch vụ tắm bùn khoáng trên đảo và các trò chơi thể thao nước.</li>
        <li><strong>Hòn Một, Bãi Tranh:</strong> Nơi lý tưởng để tắm biển, chơi dù lượn, mô tô nước.</li>
      </ul>

      <h2>3. Tháp Bà Ponagar</h2>
      <p>Quần thể kiến trúc Chăm Pa cổ kính nằm trên đồi Cù Lao, soi bóng xuống dòng sông Cái. Đây là nơi thờ nữ thần Ponagar (Thiên Y Ana Thánh Mẫu) - mẹ xứ sở của người Chăm. Đến đây, bạn không chỉ chiêm ngưỡng kiến trúc độc đáo mà còn được xem các điệu múa Chăm quyến rũ.</p>

      <h2>4. Viện Hải dương học</h2>
      <p>Nơi lưu giữ và trưng bày hàng chục nghìn mẫu vật của các loài sinh vật biển. Đặc biệt là bộ xương cá voi khổng lồ dài 26m và khu nuôi thuần dưỡng sinh vật biển sống động.</p>

      <h2>5. Ẩm thực phố biển</h2>
      <p>Hải sản Nha Trang tươi ngon miễn bàn, nhưng còn nhiều món đặc sản khác:</p>
      <ul>
        <li><strong>Bún sứa:</strong> Nước dùng ngọt thanh nấu từ cá liệt, thịt sứa giòn sần sật, chả cá dai ngon.</li>
        <li><strong>Nem nướng Ninh Hòa:</strong> Nem nướng thơm lừng cuốn với bánh tráng chiên giòn, rau sống, xoài xanh và chấm nước sốt thịt băm đặc biệt.</li>
        <li><strong>Bánh căn:</strong> Bánh căn hải sản (tôm, mực) ăn kèm mắm xoài chua ngọt.</li>
        <li><strong>Bò Lạc Cảnh:</strong> Quán bò nướng nổi tiếng hơn 40 năm với bí quyết tẩm ướp gia truyền.</li>
      </ul>
    `,
    image: "/images/nhatrang1.jpg",
    gallery: [
        "/images/nhatrang2.jpg",
        "/images/nhatrang3.jpg",
        "/images/nhatrang4.jpg",
        "/images/nhatrang5.jpg"
    ],
    author: "Khánh Hòa Travel",
    date: "05/11/2024",
    location: "Nha Trang, Khánh Hòa",
    tags: ["Nha Trang", "Biển đảo", "Vinpearl", "Lặn biển", "Miền Trung"]
  },
  {
    id: 13,
    title: "Miền Tây - Về Thăm Xứ Dừa Bến Tre",
    slug: "mien-tay-ben-tre",
    category: "mien-nam",
    excerpt: "Bến Tre không chỉ có kẹo dừa. Hãy về với xứ dừa để trải nghiệm cuộc sống miệt vườn đích thực, chèo xuồng len lỏi trong rạch dừa xanh mát và thưởng thức những món ngon dân dã.",
    content: `
      <p>Khi nhắc đến <strong>Miền Tây</strong>, người ta thường nghĩ ngay đến Cần Thơ tấp nập hay An Giang với những cánh đồng thốt nốt. Nhưng để cảm nhận trọn vẹn nhất cái hồn của miền sông nước, hãy một lần về với <strong>Bến Tre</strong> - thủ phủ của những rặng dừa xanh bất tận.</p>
      
      <h2>Trải Nghiệm Miệt Vườn Xứ Dừa</h2>
      <p>Không có những khu du lịch hào nhoáng, Bến Tre níu chân du khách bằng sự chân chất và bình dị. Trải nghiệm đáng giá nhất chính là thuê một chiếc xuồng ba lá, để các cô các dì chèo len lỏi qua những con rạch nhỏ, hai bên là hàng dừa nước xanh um, che bóng mát rượi.</p>
      
      <h3>1. Du Lịch Sinh Thái Cồn Phụng</h3>
      <p>Nằm trên một cù lao giữa sông Tiền, Cồn Phụng là điểm du lịch sinh thái nổi bật nhất. Tại đây, bạn có thể:</p>
      <ul>
        <li><strong>Thăm cơ sở sản xuất kẹo dừa:</strong> Tận mắt xem quy trình làm ra những viên kẹo dừa dẻo thơm, nóng hổi.</li>
        <li><strong>Nghe đờn ca tài tử Nam Bộ:</strong> Thưởng thức loại hình nghệ thuật được UNESCO công nhận, nhâm nhi tách trà mật ong và trái cây miệt vườn.</li>
        <li><strong>Trải nghiệm đi xe ngựa:</strong> Dạo quanh những con đường làng rợp bóng cây.</li>
        <li><strong>Các trò chơi dân gian:</strong> Thử tài đi cầu khỉ, câu cá sấu (đã được thuần hóa và đảm bảo an toàn).</li>
      </ul>

      <h3>2. Khám Phá Làng Nghề Bánh Tráng, Bánh Phồng</h3>
      <p>Ghé thăm làng nghề bánh tráng Mỹ Lồng, bánh phồng Sơn Đốc để xem người dân địa phương làm ra những chiếc bánh tráng nướng giòn rụm hay những chiếc bánh phồng sữa béo ngậy. Bạn có thể tự tay tráng bánh và nướng thử.</p>

      <h2>Đặc Sản Bến Tre Không Chỉ Có Dừa</h2>
      <p>Ẩm thực Bến Tre mang đậm hương vị phù sa, dân dã mà khó quên:</p>
      <ul>
        <li><strong>Cơm dừa Bến Tre:</strong> Cơm được nấu trong trái dừa xiêm, hạt cơm dẻo thơm, quyện với vị ngọt thanh của nước dừa. Thường ăn kèm với tôm rang dừa.</li>
        <li><strong>Canh chua cá linh bông so đũa:</strong> Món canh chua chuẩn vị miền Tây, chỉ có vào mùa nước nổi. Vị chua thanh của me, vị ngọt của cá linh non và vị nhân nhẩn của bông so đũa tạo nên một bản hòa tấu hương vị.</li>
        <li><strong>Chuối đập:</strong> Chuối xiêm chưa chín được đập dẹp, nướng trên than hồng, ăn kèm nước cốt dừa béo ngậy.</li>
        <li><strong>Bánh xèo ốc gạo:</strong> Đặc sản của vùng cồn Phú Đa (huyện Chợ Lách), chỉ có từ tháng 4 đến tháng 7 âm lịch. Bánh xèo giòn tan với nhân ốc gạo ngọt thịt, ăn kèm rau rừng và nước mắm chua ngọt.</li>
      </ul>

      <h2>Lưu Ý Khi Du Lịch Bến Tre</h2>
      <p>Thời điểm lý tưởng nhất để đến Bến Tre là vào mùa hè (khoảng tháng 6, 7, 8). Đây là mùa trái cây rộ nhất, bạn sẽ được tha hồ thưởng thức chôm chôm, măng cụt, sầu riêng tại vườn với giá cực rẻ.</p>
      <p>Hãy chuẩn bị nón lá, kem chống nắng và thuốc chống muỗi để có một chuyến đi thoải mái nhất. Người dân Bến Tre vô cùng thân thiện và mến khách, đừng ngần ngại bắt chuyện và hỏi thăm họ nhé!</p>
      <p>Hành trình về Bến Tre là hành trình tìm về sự bình yên. Bỏ lại sau lưng những ồn ào phố thị, bạn sẽ được hòa mình vào thiên nhiên trong lành, cảm nhận sự hào sảng của người miền Tây và mang về những ký ức ngọt ngào như chính vị kẹo dừa nơi đây.</p>
      <p>So với các điểm du lịch khác, Bến Tre vẫn còn giữ được nhiều nét hoang sơ. Du lịch tại đây chủ yếu là du lịch sinh thái, khám phá văn hóa và thưởng thức ẩm thực.</p>
      <p>Một gợi ý lịch trình 2 ngày 1 đêm tại Bến Tre:</p>
      <p><strong>Ngày 1:</strong> TP.HCM - Mỹ Tho - Bến Tre. Ăn trưa trên Cồn Phụng, trải nghiệm các hoạt động miệt vườn. Chiều nhận phòng homestay tại huyện Chợ Lách hoặc TP. Bến Tre. Tối dạo phố, thưởng thức các món ăn vặt.</p>
      <p><strong>Ngày 2:</strong> Sáng khám phá làng nghề, vườn trái cây Chợ Lách. Ăn trưa với các món đặc sản. Chiều khởi hành về lại TP.HCM.</p>
      <p>Chi phí cho một chuyến đi Bến Tre khá tiết kiệm. Bạn có thể lựa chọn đi xe máy hoặc xe khách từ TP.HCM chỉ mất khoảng 1.5 - 2 giờ đồng hồ.</p>
      <p>Các sản phẩm từ dừa bạn có thể mua về làm quà: Kẹo dừa (thương hiệu Bến Tre, Yến Hoàng), dầu dừa tinh khiết, mặt nạ dừa, bánh tráng sữa, rượu dừa...</p>
      <p>Đừng quên check-in tại cây cầu Rạch Miễu, cây cầu dây văng đầu tiên do chính Việt Nam thiết kế và thi công, là niềm tự hào của người dân Bến Tre.</p>
      <p>Du lịch Bến Tre không cần một lịch trình quá chi tiết. Đôi khi chỉ cần một chiếc xe máy, đi lang thang qua những con đường làng rợp bóng dừa, bạn cũng có thể khám phá ra nhiều điều thú vị.</p>
    `,
    image: "/images/bentre1.jpg",
    gallery: [
        "/images/bentre2.jpg",
        "/images/bentre3.jpg",
        "/images/bentre4.jpg",
        "/images/bentre5.jpg"
    ],
    author: "Miền Tây Review",
    date: "13/12/2025",
    location: "Bến Tre, Miền Tây",
    tags: ["Bến Tre", "Miền Tây", "Sông nước", "Dừa", "Miền Nam"]
  },
  {
    id: 14,
    title: "Khám Phá Hà Giang - Vùng Đất Cực Bắc Tổ Quốc",
    slug: "ha-giang-cuc-bac",
    category: "mien-bac",
    excerpt: "Hà Giang, mảnh đất địa đầu Tổ quốc, không chỉ nổi tiếng với cột cờ Lũng Cú thiêng liêng mà còn là cung đường phượt huyền thoại, nơi có những con đèo hiểm trở bậc nhất và những mùa hoa làm say đắm lòng người.",
    content: `
      <p><strong>Hà Giang</strong> không phải là một điểm đến dễ dàng, nhưng chính sự hoang sơ, hiểm trở và vẻ đẹp hùng vĩ đến choáng ngợp của nó đã tạo nên một sức hút mãnh liệt, mời gọi những tâm hồn yêu xê dịch đến để chinh phục và trải nghiệm. Đây là hành trình của đá, của hoa và của những nền văn hóa bản địa đặc sắc.</p>
      
      <h2>Cung Đường Hạnh Phúc - Mã Pí Lèng Huyền Thoại</h2>
      <p>Nhắc đến Hà Giang là nhắc đến <strong>đèo Mã Pí Lèng</strong>, một trong "tứ đại đỉnh đèo" của Việt Nam. Con đèo dài gần 20km, vắt mình qua những vách núi đá tai mèo dựng đứng, nhìn xuống dòng sông Nho Quế xanh màu ngọc bích uốn lượn như một dải lụa. Cảm giác đứng trên đỉnh đèo, phóng tầm mắt ra xa, ôm trọn cả đất trời vào lòng là một trải nghiệm không thể nào quên.</p>
      <p>Để cảm nhận trọn vẹn vẻ đẹp của hẻm vực Tu Sản - hẻm vực sâu nhất Đông Nam Á - bạn nên đi thuyền trên sông Nho Quế. Làn nước xanh biếc, tĩnh lặng, hai bên là vách đá sừng sững, tạo nên một khung cảnh vừa kỳ vĩ vừa nên thơ.</p>

      <h2>Những Mùa Hoa Nở Trên Đá</h2>
      <p>Thiên nhiên khắc nghiệt không ngăn được những loài hoa mỏng manh khoe sắc, tạo nên một bức tranh Hà Giang đầy sức sống:</p>
      <ul>
        <li><strong>Hoa Tam Giác Mạch (tháng 10 - 12):</strong> Đây là mùa đẹp nhất, khi những cánh đồng hoa tam giác mạch phủ một màu hồng tím mộng mơ khắp các sườn đồi, thung lũng. Những địa điểm ngắm hoa đẹp nhất là Sủng Là, Lũng Cẩm, Phố Cáo, Lũng Táo.</li>
        <li><strong>Hoa Mận, Hoa Lê (tháng 1 - 2):</strong> Khi mùa xuân về, khắp các bản làng được bao phủ bởi sắc trắng tinh khôi của hoa mận, hoa lê, đặc biệt là ở khu vực Phố Cáo, Sủng Là.</li>
        <li><strong>Hoa Cải Vàng (tháng 12 - 1):</strong> Những ruộng cải vàng rực rỡ dưới chân đèo, xen lẫn với màu xám của đá tai mèo tạo nên một khung cảnh tương phản ấn tượng.</li>
      </ul>

      <h2>Các Điểm Đến Không Thể Bỏ Lỡ</h2>
      <ol>
        <li><strong>Cột cờ Lũng Cú:</strong> Điểm cực Bắc thiêng liêng của Tổ quốc. Sau khi leo 389 bậc đá, bạn sẽ lên đến đỉnh cột cờ, nhìn lá cờ đỏ sao vàng rộng 54m² (tượng trưng cho 54 dân tộc anh em) tung bay trong gió.</li>
        <li><strong>Phố cổ Đồng Văn:</strong> Nằm giữa thung lũng đá, phố cổ Đồng Văn mang vẻ đẹp rêu phong với khoảng 40 ngôi nhà cổ hàng trăm năm tuổi. Đặc biệt, phiên chợ Đồng Văn vào sáng Chủ nhật là nơi giao lưu văn hóa, mua bán các sản vật địa phương.</li>
        <li><strong>Dinh thự họ Vương (Dinh Vua Mèo):</strong> Công trình kiến trúc độc đáo, là sự giao thoa giữa ba nền văn hóa: Mông, Pháp và Hoa. Đây là nơi ở của "Vua Mèo" Vương Chính Đức xưa kia.</li>
        <li><strong>Cổng trời Quản Bạ & Núi đôi Cô Tiên:</strong> Từ cổng trời, bạn có thể ngắm nhìn toàn cảnh thị trấn Tam Sơn và Núi đôi Cô Tiên tròn trịa, căng đầy sức sống, một tuyệt tác của tạo hóa.</li>
      </ol>

      <h2>Ẩm Thực Hà Giang - Hương Vị Của Núi Rừng</h2>
      <p>Đặc sản Hà Giang dân dã nhưng mang hương vị rất riêng:</p>
      <ul>
        <li><strong>Cháo ấu tẩu:</strong> Món cháo đắng nhưng ăn xong lại có vị ngọt hậu, có tác dụng giải cảm rất tốt.</li>
        <li><strong>Thắng cố:</strong> Món ăn truyền thống của người Mông, nấu từ nội tạng ngựa và các loại thảo quả.</li>
        <li><strong>Bánh cuốn trứng Đồng Văn:</strong> Bánh cuốn nóng hổi, bên trong có lòng đào trứng gà, chan với nước dùng ninh xương.</li>
        <li><strong>Thịt trâu/lợn gác bếp:</strong> Thịt được tẩm ướp gia vị rồi hun khói trên bếp củi, vị thơm nồng đặc trưng.</li>
        <li><strong>Rượu ngô men lá:</strong> Thứ rượu cay nồng, ấm áp, được nấu từ ngô và loại men lá bí truyền.</li>
      </ul>

      <h2>Kinh Nghiệm Phượt Hà Giang</h2>
      <p>Hà Giang đẹp nhất khi đi bằng xe máy, nhưng cung đường ở đây rất hiểm trở với nhiều khúc cua tay áo và dốc đứng. Bạn cần có tay lái thật vững và nhiều kinh nghiệm đi đường đèo núi. Nếu không tự tin, bạn có thể thuê xe ô tô hoặc đi tour.</p>
      <p>Thời gian lý tưởng cho một chuyến đi Hà Giang là 4 ngày 3 đêm hoặc 5 ngày 4 đêm để có thể khám phá trọn vẹn. Hãy chuẩn bị đầy đủ giấy tờ tùy thân, bằng lái xe, quần áo ấm (kể cả mùa hè, buổi tối ở Hà Giang vẫn se lạnh), đồ dùng y tế cá nhân.</p>
      <p>Người dân Hà Giang, đặc biệt là các em nhỏ vùng cao, rất hồn nhiên và mến khách. Tuy nhiên, hãy cân nhắc kỹ trước khi cho các em tiền hoặc bánh kẹo. Thay vào đó, bạn có thể chuẩn bị một ít sách vở, đồ dùng học tập để tặng các em tại trường học.</p>
      <p>Hà Giang không chỉ là một chuyến đi, đó là một hành trình chinh phục bản thân và để lại những dấu ấn sâu đậm trong tim mỗi người. Vẻ đẹp của nó không thể diễn tả hết bằng lời hay hình ảnh, phải tự mình đặt chân đến, tự mình cảm nhận mới thấy hết được sự vĩ đại của thiên nhiên và sự ấm áp của tình người nơi địa đầu Tổ quốc.</p>
      <p>Lịch trình gợi ý 4 ngày 3 đêm:</p>
      <p><strong>Ngày 1:</strong> Hà Nội - Hà Giang - Quản Bạ. Check-in cột mốc số 0, cổng trời Quản Bạ, núi đôi Cô Tiên. Ngủ đêm tại Tam Sơn.</p>
      <p><strong>Ngày 2:</strong> Quản Bạ - Yên Minh - Đồng Văn. Đi qua rừng thông Yên Minh, thăm làng văn hóa Lũng Cẩm, dinh thự họ Vương. Ngủ đêm tại phố cổ Đồng Văn.</p>
      <p><strong>Ngày 3:</strong> Đồng Văn - Lũng Cú - Mã Pí Lèng - Mèo Vạc. Chinh phục cột cờ Lũng Cú, đi thuyền sông Nho Quế, vượt đèo Mã Pí Lèng. Ngủ đêm tại Mèo Vạc.</p>
      <p><strong>Ngày 4:</strong> Mèo Vạc - Hà Giang - Hà Nội. Quay trở về thành phố Hà Giang và bắt xe khách về Hà Nội.</p>
      <p>Chi phí cho chuyến đi có thể dao động từ 2.5 - 4 triệu đồng/người tùy thuộc vào phương tiện di chuyển, chỗ ở và ăn uống. Nên đặt trước xe khách và khách sạn/homestay vào mùa cao điểm du lịch.</p>
      <p>Một vài homestay đẹp ở Hà Giang: Auberge de MeoVac (Nhà cổ Mèo Vạc), Chúng Pủa - homestay ở Phố Cáo, Bụi homestay Đồng Văn, Dao Lodge ở Quản Bạ.</p>
      <p>Hãy là một du khách có trách nhiệm, không xả rác bừa bãi và tôn trọng văn hóa bản địa. Chuyến đi của bạn sẽ trở nên ý nghĩa hơn rất nhiều.</p>
    `,
    image: "/images/hagiang1.jpg",
    gallery: [
        "/images/hagiang2.jpg",
        "/images/hagiang3.jpg",
        "/images/hagiang4.jpg",
        "/images/hagiang5.jpg"
    ],
    author: "Phượt Thủ",
    date: "14/12/2025",
    location: "Hà Giang",
    tags: ["Hà Giang", "Mã Pí Lèng", "Cột cờ Lũng Cú", "Phượt", "Miền Bắc"]
  },
  {
    id: 15,
    title: "Mộc Châu - Thiên Đường Hoa Của Tây Bắc",
    slug: "moc-chau-thien-duong-hoa",
    category: "mien-bac",
    excerpt: "Kinh nghiệm du lịch Mộc Châu từ A-Z: Săn hoa mận trắng trời, check-in đồi chè trái tim, chinh phục đỉnh Pha Luông và thưởng thức bê chao ngon nức tiếng.",
    content: `
      <p><strong>Mộc Châu</strong>, viên ngọc xanh của tỉnh Sơn La, luôn là điểm đến mơ ước của những kẻ lữ hành yêu thiên nhiên. Nằm ở độ cao trung bình 1.050m so với mực nước biển, cao nguyên Mộc Châu mang trong mình khí hậu ôn đới gió mùa, mát mẻ quanh năm, là nơi trốn nóng lý tưởng và là thiên đường của các loài hoa.</p>
      
      <h2>Thời điểm vàng để ghé thăm Mộc Châu</h2>
      <p>Mộc Châu mỗi mùa lại khoác lên mình một chiếc áo mới, đẹp đến nao lòng:</p>
      <ul>
        <li><strong>Tháng 1 - 2 (Mùa hoa mận, hoa đào):</strong> Đây là thời điểm Mộc Châu đẹp nhất trong năm. Khắp các thung lũng Nà Ka, Mu Náu phủ trắng màu hoa mận tinh khôi, xen lẫn sắc hồng phớt của hoa đào Pháp. Cảnh sắc tựa chốn thần tiên.</li>
        <li><strong>Tháng 3 (Mùa hoa ban):</strong> Loài hoa biểu tượng của Tây Bắc nở trắng rừng, mang vẻ đẹp hoang dại và quyến rũ. Lễ hội Hết Chá cũng thường diễn ra vào dịp này.</li>
        <li><strong>Tháng 4 - 8 (Mùa hái mận, đào):</strong> Đến Mộc Châu dịp này, bạn sẽ được tự tay hái những trái mận đỏ mọng, giòn tan ngay tại vườn. Khí hậu lúc này cũng rất mát mẻ, thích hợp để tránh cái nóng gay gắt của miền xuôi.</li>
        <li><strong>Tháng 9 (Tết Độc Lập):</strong> Ngày 2/9 là ngày hội lớn nhất của người H'Mông. Bạn sẽ được hòa mình vào không khí lễ hội náo nhiệt, rực rỡ sắc màu thổ cẩm.</li>
        <li><strong>Tháng 10 - 12 (Mùa hoa cải, hoa dã quỳ):</strong> Những cánh đồng hoa cải trắng bạt ngàn chạy dài tít tắp, điểm xuyết sắc vàng rực rỡ của dã quỳ tạo nên những góc check-in "triệu like".</li>
      </ul>

      <h2>Phương tiện di chuyển</h2>
      <p>Cách Hà Nội khoảng 200km, đường đi Mộc Châu hiện nay khá thuận lợi:</p>
      <ul>
        <li><strong>Xe máy:</strong> Cung đường QL6 huyền thoại với dốc Cun, đèo Thung Khe là thử thách thú vị cho các phượt thủ. Thời gian di chuyển khoảng 4-5 tiếng.</li>
        <li><strong>Xe khách/Limousine:</strong> Có rất nhiều nhà xe chạy tuyến Hà Nội - Mộc Châu từ bến xe Mỹ Đình, Yên Nghĩa. Xe Limousine đưa đón tận nơi là lựa chọn thoải mái nhất cho gia đình.</li>
      </ul>

      <h2>Top địa điểm check-in không thể bỏ lỡ</h2>
      <h3>1. Đồi chè Trái Tim</h3>
      <p>Biểu tượng của Mộc Châu. Những luống chè xanh mướt được trồng khéo léo thành hình trái tim lãng mạn. Sáng sớm khi sương còn đọng trên lá là thời điểm chụp ảnh đẹp nhất. Đừng quên thưởng thức một ly chè tươi nóng hổi hay món chè xanh sữa ngon tuyệt ngay tại đây.</p>

      <h3>2. Rừng thông Bản Áng</h3>
      <p>Được ví như "Đà Lạt thu nhỏ" của miền Bắc. Hồ nước trong xanh phẳng lặng in bóng những hàng thông cổ thụ rì rào trong gió. Bạn có thể thuê xe đạp đôi dạo quanh hồ, cắm trại nướng BBQ hoặc tham quan vườn dâu tây Chimi Farm gần đó để tự tay hái những quả dâu chín mọng.</p>

      <h3>3. Thác Dải Yếm & Cầu kính Tình Yêu</h3>
      <p>Thác Dải Yếm đổ xuống từ trên cao mềm mại như dải lụa trắng, gắn liền với truyền thuyết tình yêu son sắt. Ngay cạnh đó là Cầu kính Tình Yêu - cây cầu kính 5D đầu tiên tại Việt Nam với nhiều hiệu ứng cảm giác mạnh thú vị và các tiểu cảnh sống ảo bắt mắt như trái tim, cổng mặt trời.</p>

      <h3>4. Thung lũng mận Nà Ka</h3>
      <p>Vựa mận lớn nhất Mộc Châu. Vào mùa hoa (tháng 1-2), cả thung lũng trắng xóa như tuyết, đẹp đến ngỡ ngàng. Vào mùa quả (tháng 5), sắc đỏ rực rỡ bao trùm, du khách có thể vào vườn hái và thưởng thức mận ngay tại gốc. Đường vào Nà Ka tuy hơi nhỏ nhưng cảnh vật thì hoàn toàn xứng đáng.</p>

      <h3>5. Đỉnh Pha Luông</h3>
      <p>"Nhà ai Pha Luông mưa xa khơi". Đỉnh núi huyền thoại nằm ở biên giới Việt - Lào. Chinh phục Pha Luông không quá khó như Fansipan nhưng đòi hỏi sức bền. Đứng trên mỏm đá sống ảo chênh vênh giữa trời mây, nhìn xuống rừng núi bạt ngàn là trải nghiệm để đời.</p>

      <h2>Ẩm thực Mộc Châu - Ăn một lần nhớ mãi</h2>
      <p>Cao nguyên Mộc Châu chiêu đãi du khách bằng những món ngon dân dã nhưng đậm đà hương vị núi rừng:</p>
      <ul>
        <li><strong>Bê chao:</strong> Món đặc sản trứ danh không thể bỏ qua. Thịt bê sữa non mềm ngọt, bì giòn, chao qua dầu sôi tỏa hương thơm nức mũi, chấm cùng tương bần pha gừng thì "ngon nuốt lưỡi".</li>
        <li><strong>Cá suối nướng:</strong> Cá suối nhỏ, thịt chắc, kẹp tre nướng trên than hồng cho đến khi vàng ruộm, ăn cả xương giòn tan, vị ngọt tự nhiên.</li>
        <li><strong>Thịt trâu gác bếp:</strong> Món nhậu lai rai tuyệt vời, thớ thịt dai ngọt quyện mùi khói bếp, chấm cùng chẩm chéo cay tê lưỡi.</li>
        <li><strong>Các sản phẩm từ sữa:</strong> Sữa tươi Mộc Châu béo ngậy, sữa chua nếp cẩm, bánh sữa... là những món quà vặt không thể thiếu.</li>
        <li><strong>Ốc đá Suối Bàng:</strong> Chỉ có vào mùa mưa, ốc giòn, ngọt, thường được nấu canh chua hoặc luộc sả ớt.</li>
      </ul>

      <h2>Lưu trú ở đâu?</h2>
      <p>Mộc Châu có hệ thống lưu trú đa dạng từ bình dân đến cao cấp, đáp ứng mọi nhu cầu:</p>
      <ul>
        <li><strong>Homestay:</strong> Mama's House, Nhà Ta Homestay, The November, Bơ House... với thiết kế xinh xắn, góc nào cũng có thể sống ảo, giá cả hợp lý.</li>
        <li><strong>Resort:</strong> Mộc Châu Island, Thảo Nguyên Resort, Mộc Châu Retreat... đầy đủ tiện nghi sang trọng, bể bơi, spa.</li>
        <li><strong>Khách sạn:</strong> Mường Thanh Luxury Mộc Châu là khách sạn 5 sao nổi bật nhất tại trung tâm thị trấn.</li>
      </ul>

      <h2>Mua gì làm quà?</h2>
      <p>Đừng quên mang hương vị Mộc Châu về cho người thân:</p>
      <ul>
        <li><strong>Sữa Mộc Châu:</strong> Sữa tươi thanh trùng, sữa chua, bánh sữa.</li>
        <li><strong>Chè Mộc Châu:</strong> Chè Shan Tuyết, chè Ô Long thơm ngon.</li>
        <li><strong>Thịt trâu gác bếp:</strong> Đặc sản đắt xắt ra miếng nhưng rất đáng tiền.</li>
        <li><strong>Rượu mơ, rượu mận:</strong> Hương vị cay nồng, ngọt dịu của núi rừng.</li>
        <li><strong>Dâu tây, Mận, Đào:</strong> Trái cây tươi hái tại vườn (theo mùa).</li>
      </ul>

      <h2>Lịch trình gợi ý 2 ngày 1 đêm</h2>
      <p><strong>Ngày 1:</strong> Hà Nội - Mộc Châu. Ăn trưa Bê chao. Chiều tham quan Thác Dải Yếm, Cầu kính, Rừng thông Bản Áng. Tối ăn lẩu cá hồi, dạo thị trấn.</p>
      <p><strong>Ngày 2:</strong> Đồi chè Trái Tim - Thung lũng mận Nà Ka (hoặc vườn cam/hồng tùy mùa). Mua quà (sữa, chè, thịt trâu). Ăn trưa rồi khởi hành về Hà Nội.</p>
      
      <p>Mộc Châu không chỉ đẹp bởi cảnh sắc mà còn bởi tình người ấm áp. Hãy đến và cảm nhận hơi thở của núi rừng Tây Bắc, để thấy tâm hồn mình nhẹ nhàng và bình yên hơn.</p>
    `,
    image: "/images/mocchau1.jpg",
    gallery: [
        "/images/mocchau2.jpg",
        "/images/mocchau3.jpg",
        "/images/mocchau4.jpg",
        "/images/mocchau5.jpg"
    ],
    author: "Mộc Châu Xanh",
    date: "15/12/2025",
    location: "Mộc Châu, Sơn La",
    tags: ["Mộc Châu", "Hoa mận", "Đồi chè", "Sơn La", "Miền Bắc"]
  },
  {
    id: 16,
    title: "Côn Đảo - Vùng Đất Linh Thiêng & Thiên Đường Biển Đảo",
    slug: "con-dao-tam-linh",
    category: "mien-nam",
    excerpt: "Khám phá Côn Đảo: Viếng mộ cô Sáu linh thiêng, xem rùa đẻ trứng tại Hòn Bảy Cạnh và đắm mình trong làn nước xanh ngọc bích của Bãi Đầm Trầu.",
    content: `
      <p><strong>Côn Đảo</strong> (Bà Rịa - Vũng Tàu) từng được biết đến là "Địa ngục trần gian" trong thời kỳ chiến tranh, nhưng nay đã chuyển mình thành một trong những hòn đảo quyến rũ nhất hành tinh. Đến Côn Đảo là đến với hành trình tâm linh ý nghĩa và hòa mình vào thiên nhiên hoang sơ, tuyệt đẹp.</p>
      
      <h2>1. Thời điểm lý tưởng đi Côn Đảo</h2>
      <p>Thời tiết Côn Đảo chia làm 2 mùa:</p>
      <ul>
        <li><strong>Tháng 3 - 9:</strong> Biển êm, gió nhẹ, nắng đẹp. Đây là thời điểm lý tưởng nhất để tắm biển, lặn ngắm san hô và xem rùa đẻ trứng. Tuy nhiên, thỉnh thoảng sẽ có mưa rào bất chợt.</li>
        <li><strong>Tháng 10 - 2:</strong> Mùa gió chướng, biển động mạnh ở phía Đông Bắc đảo (khu vực bãi Đầm Trầu, bãi Suối Nóng vẫn êm). Đây là mùa hành hương tâm linh cao điểm.</li>
      </ul>

      <h2>2. Du lịch Tâm Linh - Về miền đất thánh</h2>
      <p>Côn Đảo là mảnh đất thiêng liêng, nơi yên nghỉ của hàng vạn chiến sĩ cách mạng.</p>
      <h3>Nghĩa trang Hàng Dương & Mộ Cô Sáu</h3>
      <p>Nơi chôn cất hơn 2.000 liệt sĩ. Điểm đặc biệt là người dân thường đi viếng mộ vào ban đêm (từ 21h - 23h). Mộ nữ anh hùng Võ Thị Sáu luôn nghi ngút khói hương và hoa trắng. Viếng mộ Cô Sáu là trải nghiệm tâm linh không thể bỏ qua để cầu bình an và may mắn.</p>
      <h3>Hệ thống Nhà tù Côn Đảo</h3>
      <p>Tham quan Trại Phú Hải, Chuồng cọp kiểu Pháp, Chuồng cọp kiểu Mỹ để tận mắt chứng kiến sự tàn khốc của chế độ thực dân đế quốc và cảm phục ý chí kiên cường của các bậc tiền nhân.</p>
      <h3>Chùa Núi Một (Vân Sơn Tự)</h3>
      <p>Ngôi chùa có phong thủy đẹp nhất Việt Nam: lưng tựa núi, mặt hướng biển. Từ đây bạn có thể ngắm toàn cảnh thị trấn Côn Đảo và hồ An Hải.</p>

      <h2>3. Khám phá thiên nhiên hoang sơ</h2>
      <h3>Hòn Bảy Cạnh & Xem rùa đẻ trứng</h3>
      <p>Hòn Bảy Cạnh là khu bảo tồn rùa biển lớn nhất Việt Nam. Từ tháng 4 đến tháng 10, bạn có thể đăng ký tour ngủ đêm tại trạm kiểm lâm để tận mắt xem rùa mẹ lên bờ đẻ trứng và thả rùa con về biển vào sáng sớm hôm sau.</p>
      <h3>Bãi Đầm Trầu</h3>
      <p>Được mệnh danh là bãi biển đẹp nhất Côn Đảo với bờ cát vàng mịn, nước trong xanh và những vách đá dựng đứng tạo hình độc đáo. Đặc biệt, đây là nơi duy nhất bạn có thể ngắm máy bay hạ cánh ngay trên đầu mình.</p>
      <h3>Mũi Cá Mập & Bãi Nhát</h3>
      <p>Cung đường ven biển đẹp nhất đảo. Bãi Nhát chỉ lộ ra khi thủy triều xuống, cát trắng mịn màng. Mũi Cá Mập là điểm ngắm bình minh hùng vĩ nhất.</p>

      <h2>4. Ẩm thực Côn Đảo</h2>
      <ul>
        <li><strong>Hạt bàng rang:</strong> Đặc sản làm quà nổi tiếng, có vị bùi bùi, béo ngậy. Có loại rang muối và rang đường.</li>
        <li><strong>Cháo hàu:</strong> Hàu Côn Đảo thịt ngọt, nấu cháo với tiêu hành thơm phức.</li>
        <li><strong>Cua mặt trăng:</strong> Loại cua có đốm đỏ trên mai, thịt thơm và ngọt hơn cua thường.</li>
        <li><strong>Mắm nhum:</strong> Đặc sản tiến vua ngày xưa, hương vị đậm đà khó quên.</li>
      </ul>

      <h2>5. Lưu ý khi đi Côn Đảo</h2>
      <p>Vé máy bay đi Côn Đảo thường khá đắt và hết sớm, bạn nên đặt trước ít nhất 1-2 tháng. Ngoài ra có thể đi tàu cao tốc từ Vũng Tàu hoặc Sóc Trăng (Trần Đề) để tiết kiệm chi phí. Trên đảo có ít cây xăng (chỉ có 2 cây), nên hãy đổ đầy bình khi thuê xe máy.</p>
    `,
    image: "/images/condao1.jpg",
    gallery: [
        "/images/condao2.jpg",
        "/images/condao3.jpg",
        "/images/condao4.jpg",
        "/images/condao5.jpg"
    ],
    author: "Côn Đảo Explorer",
    date: "18/12/2025",
    location: "Côn Đảo, Bà Rịa - Vũng Tàu",
    tags: ["Côn Đảo", "Tâm linh", "Biển đảo", "Rùa biển", "Miền Nam"]
  },
  {
    id: 17,
    title: "Phong Nha Kẻ Bàng - Vương Quốc Hang Động",
    slug: "phong-nha-ke-bang",
    category: "mien-trung",
    excerpt: "Quảng Bình không chỉ có gió lào cát trắng. Khám phá động Phong Nha, động Thiên Đường và trải nghiệm đu dây Zipline tại sông Chày - hang Tối.",
    content: `
      <p><strong>Vườn quốc gia Phong Nha - Kẻ Bàng</strong> (Quảng Bình) là di sản thiên nhiên thế giới được UNESCO công nhận hai lần. Nơi đây sở hữu hệ thống hang động đá vôi kỳ vĩ nhất thế giới, những dòng sông ngầm bí ẩn và hệ sinh thái rừng nguyên sinh đa dạng.</p>
      
      <h2>1. Những hang động tuyệt tác</h2>
      <h3>Động Phong Nha</h3>
      <p>Được mệnh danh là "Đệ nhất kỳ quan động", Phong Nha nổi tiếng với 7 cái nhất: Hang nước dài nhất, cửa hang cao và rộng nhất, bãi cát và đá ngầm đẹp nhất, hồ nước ngầm đẹp nhất, thạch nhũ tráng lệ và kỳ ảo nhất, dòng sông ngầm dài nhất Việt Nam, hang khô rộng và đẹp nhất. Bạn sẽ được ngồi thuyền ngược dòng sông Son thơ mộng để tiến vào lòng động.</p>
      
      <h3>Động Thiên Đường</h3>
      <p>Được ví như "Hoàng cung trong lòng đất", Động Thiên Đường là hang động khô dài nhất châu Á (31,4km). Hệ thống thạch nhũ ở đây vô cùng tráng lệ, lung linh và đa dạng về hình thù, tạo nên một không gian huyền ảo như chốn tiên cảnh.</p>
      
      <h3>Hang Sơn Đoòng</h3>
      <p>Hang động lớn nhất thế giới, niềm tự hào của Việt Nam. Chinh phục Sơn Đoòng là giấc mơ của mọi nhà thám hiểm. Tuy nhiên, tour thám hiểm này đòi hỏi thể lực cực tốt, chi phí cao và phải đặt trước cả năm trời.</p>

      <h2>2. Trải nghiệm mạo hiểm & Vui chơi</h2>
      <h3>Sông Chày - Hang Tối</h3>
      <p>Điểm đến cho những ai thích cảm giác mạnh. Bạn sẽ được đu dây Zipline dài 400m qua sông Chày xanh biếc, chèo thuyền Kayak và đặc biệt là tắm bùn khoáng tự nhiên ngay trong lòng Hang Tối.</p>
      
      <h3>Suối Nước Moọc</h3>
      <p>Nằm ẩn mình dưới tán rừng già, Suối Nước Moọc như một viên ngọc bích với làn nước xanh ngắt, mát lạnh (khoảng 20 độ C quanh năm). Đây là nơi lý tưởng để tắm suối, chèo kayak và thư giãn giữa thiên nhiên.</p>

      <h2>3. Ẩm thực Quảng Bình</h2>
      <p>Sau những giờ khám phá hang động, hãy nạp năng lượng với những món ngon:</p>
      <ul>
        <li><strong>Cháo canh cá lóc:</strong> Sợi bánh canh dai mềm, nước dùng ngọt đậm đà từ cá lóc, ăn kèm ram (nem) giòn rụm.</li>
        <li><strong>Gà nướng chấm muối cheo:</strong> Gà đồi nướng than hoa da vàng giòn, thịt chắc ngọt, chấm với muối cheo (một loại muối chấm đặc biệt làm từ phong điền, ớt, tỏi, lá chanh...).</li>
        <li><strong>Khoai deo:</strong> Đặc sản làm từ khoai lang đỏ, phơi khô dưới nắng gió Quảng Bình, dẻo ngọt như kẹo.</li>
      </ul>

      <h2>4. Lưu ý khi du lịch Phong Nha</h2>
      <p>Thời điểm tốt nhất là từ tháng 4 đến tháng 8 (mùa khô). Mùa mưa (tháng 9 - 12) nước sông dâng cao, một số hang động nước như Phong Nha có thể tạm đóng cửa. Hãy mang theo giày thể thao thoải mái, đồ bơi và túi chống nước cho điện thoại.</p>
    `,
    image: "/images/phongnha1.jpg",
    gallery: [
        "/images/phongnha2.jpg",
        "/images/phongnha3.jpg",
        "/images/phongnha4.jpg",
        "/images/phongnha5.jpg"
    ],
    author: "Quảng Bình Travel",
    date: "20/12/2025",
    location: "Bố Trạch, Quảng Bình",
    tags: ["Phong Nha", "Hang động", "Di sản UNESCO", "Mạo hiểm", "Miền Trung"]
  }
];

// Hàm tìm kiếm nâng cấp: Tìm trong Title, Location và Category
export const searchPosts = (query) => {
    if (!query) return [];
    const lowerQuery = query.toLowerCase();
    return posts.filter(p => 
        p.title.toLowerCase().includes(lowerQuery) || 
        p.location.toLowerCase().includes(lowerQuery) ||
        p.category.toLowerCase().includes(lowerQuery)
    );
};

export const getPostById = (id) => posts.find(p => p.id.toString() === id.toString());
export const getPostsByCategory = (cat) => posts.filter(p => p.category === cat);

export const categories = [
  { slug: "mien-bac", name: "Miền Bắc" },
  { slug: "mien-trung", name: "Miền Trung" },
  { slug: "mien-nam", name: "Miền Nam" },
  { slug: "am-thuc", name: "Ẩm Thực" }
];