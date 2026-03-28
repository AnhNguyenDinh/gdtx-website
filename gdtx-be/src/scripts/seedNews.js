require('dotenv').config();
const mongoose = require('mongoose');
const News = require('../models/News');
const config = require('../config');

const articles = [
  {
    tag: 'TIN TỨC',
    title: 'Trung tâm GDNN-GDTX Nguyễn Văn Tố tổ chức Lễ khai giảng năm học 2025-2026',
    excerpt: 'Sáng ngày 5/9/2025, Trung tâm GDNN-GDTX Nguyễn Văn Tố long trọng tổ chức Lễ khai giảng năm học mới 2025-2026 với sự tham dự của đông đảo học viên, giáo viên và phụ huynh.',
    content: `Sáng ngày 5/9/2025, Trung tâm GDNN-GDTX Nguyễn Văn Tố long trọng tổ chức Lễ khai giảng năm học mới 2025-2026 với sự tham dự của đông đảo học viên, giáo viên và phụ huynh.

Phát biểu tại buổi lễ, Giám đốc Trung tâm nhấn mạnh tinh thần học tập suốt đời và cam kết nâng cao chất lượng đào tạo trong năm học mới. Trung tâm tiếp tục mở rộng các chương trình đào tạo nghề và giáo dục thường xuyên đáp ứng nhu cầu của người học.

Năm học 2025-2026, Trung tâm tuyển sinh hơn 500 học viên các hệ: GDTX cấp THPT, đào tạo nghề ngắn hạn và các lớp bồi dưỡng kỹ năng nghề nghiệp.`,
    date: '05-09-2025 08:00',
    img: 'https://picsum.photos/seed/khaigiang/800/500',
  },
  {
    tag: 'THÔNG BÁO',
    title: 'Thông báo tuyển sinh các lớp đào tạo nghề ngắn hạn năm 2025',
    excerpt: 'Trung tâm GDNN-GDTX Nguyễn Văn Tố thông báo tuyển sinh các lớp đào tạo nghề ngắn hạn dành cho người lao động trên địa bàn quận Hoàn Kiếm và các quận lân cận.',
    content: `Trung tâm GDNN-GDTX Nguyễn Văn Tố thông báo tuyển sinh các lớp đào tạo nghề ngắn hạn năm 2025 với nhiều ngành nghề đa dạng.

Các nghề đào tạo bao gồm: Tin học văn phòng, Kế toán máy, Tiếng Anh giao tiếp, Cắt may thời trang, Nấu ăn và chế biến thực phẩm, Sửa chữa điện tử dân dụng.

Thời gian đào tạo: 3-6 tháng tùy ngành nghề. Học phí ưu đãi, có hỗ trợ cho đối tượng chính sách. Liên hệ đăng ký: 024.3825.xxxx hoặc đến trực tiếp tại 47 Hàng Quạt, Hoàn Kiếm, Hà Nội.`,
    date: '15-08-2025 09:00',
    img: 'https://picsum.photos/seed/tuyensinh/800/500',
  },
  {
    tag: 'SỰ KIỆN',
    title: 'Hội thi tay nghề học viên năm 2025 – Tôn vinh kỹ năng nghề nghiệp',
    excerpt: 'Hội thi tay nghề học viên năm 2025 diễn ra sôi nổi với sự tham gia của hơn 200 học viên đến từ các lớp đào tạo nghề của Trung tâm.',
    content: `Hội thi tay nghề học viên năm 2025 diễn ra sôi nổi tại Trung tâm GDNN-GDTX Nguyễn Văn Tố với sự tham gia của hơn 200 học viên đến từ các lớp đào tạo nghề.

Các phần thi bao gồm: Tin học văn phòng, Kế toán thực hành, Cắt may và Nấu ăn. Ban giám khảo gồm các chuyên gia, giáo viên giàu kinh nghiệm đánh giá khách quan và công bằng.

Kết quả, 15 học viên xuất sắc nhất được trao giải thưởng và giấy chứng nhận. Ban Giám đốc Trung tâm biểu dương tinh thần học tập và rèn luyện của toàn thể học viên.`,
    date: '20-07-2025 14:00',
    img: 'https://picsum.photos/seed/hoithi/800/500',
  },
  {
    tag: 'TIN TỨC',
    title: 'Trung tâm ký kết hợp tác đào tạo với các doanh nghiệp trên địa bàn Hà Nội',
    excerpt: 'Trung tâm GDNN-GDTX Nguyễn Văn Tố vừa ký kết biên bản ghi nhớ hợp tác đào tạo và giải quyết việc làm với 5 doanh nghiệp uy tín trên địa bàn Hà Nội.',
    content: `Trung tâm GDNN-GDTX Nguyễn Văn Tố vừa ký kết biên bản ghi nhớ hợp tác đào tạo và giải quyết việc làm với 5 doanh nghiệp uy tín trên địa bàn Hà Nội.

Theo đó, các doanh nghiệp sẽ tiếp nhận học viên thực tập, ưu tiên tuyển dụng học viên tốt nghiệp và hỗ trợ Trung tâm trong việc cập nhật chương trình đào tạo sát với thực tế sản xuất kinh doanh.

Đây là bước tiến quan trọng trong chiến lược gắn kết đào tạo với thị trường lao động, nâng cao tỷ lệ học viên có việc làm sau tốt nghiệp lên trên 85%.`,
    date: '10-07-2025 10:30',
    img: 'https://picsum.photos/seed/kyket/800/500',
  },
  {
    tag: 'THÔNG BÁO',
    title: 'Lịch thi kết thúc khóa học các lớp đào tạo nghề tháng 8/2025',
    excerpt: 'Trung tâm thông báo lịch thi kết thúc khóa học cho các lớp đào tạo nghề ngắn hạn khai giảng tháng 2/2025. Học viên chú ý chuẩn bị đầy đủ hồ sơ dự thi.',
    content: `Trung tâm GDNN-GDTX Nguyễn Văn Tố thông báo lịch thi kết thúc khóa học cho các lớp đào tạo nghề ngắn hạn như sau:

- Lớp Tin học văn phòng K02/2025: Thi ngày 05/8/2025
- Lớp Kế toán máy K02/2025: Thi ngày 07/8/2025  
- Lớp Tiếng Anh giao tiếp K02/2025: Thi ngày 09/8/2025
- Lớp Cắt may K02/2025: Thi ngày 12/8/2025

Học viên cần mang theo thẻ học viên và CCCD khi dự thi. Mọi thắc mắc liên hệ phòng Đào tạo trong giờ hành chính.`,
    date: '25-06-2025 08:00',
    img: 'https://picsum.photos/seed/lichthi/800/500',
  },
  {
    tag: 'SỰ KIỆN',
    title: 'Trung tâm tổ chức tham quan học tập thực tế tại các cơ sở sản xuất',
    excerpt: 'Nhằm gắn kết lý thuyết với thực tiễn, Trung tâm tổ chức chuyến tham quan học tập thực tế cho học viên các lớp đào tạo nghề tại một số cơ sở sản xuất trên địa bàn Hà Nội.',
    content: `Nhằm gắn kết lý thuyết với thực tiễn, Trung tâm GDNN-GDTX Nguyễn Văn Tố tổ chức chuyến tham quan học tập thực tế cho học viên các lớp đào tạo nghề.

Đoàn gồm 120 học viên và 8 giáo viên hướng dẫn đã đến thăm quan và học hỏi tại các cơ sở: Xưởng may Hà Nội, Công ty TNHH Thực phẩm Minh Châu và Trung tâm Tin học ứng dụng.

Chuyến đi giúp học viên hiểu rõ hơn về môi trường làm việc thực tế, yêu cầu của nhà tuyển dụng và định hướng nghề nghiệp sau khi tốt nghiệp.`,
    date: '15-06-2025 07:30',
    img: 'https://picsum.photos/seed/thamquan/800/500',
  },
  {
    tag: 'TIN TỨC',
    title: 'Kết quả thi tốt nghiệp THPT năm 2025 – Nhiều học viên đạt điểm cao',
    excerpt: 'Kỳ thi tốt nghiệp THPT năm 2025, học viên hệ GDTX của Trung tâm đạt kết quả đáng khích lệ với tỷ lệ tốt nghiệp đạt 92%, nhiều em đạt điểm cao.',
    content: `Kỳ thi tốt nghiệp THPT năm 2025, học viên hệ GDTX của Trung tâm GDNN-GDTX Nguyễn Văn Tố đạt kết quả đáng khích lệ.

Tỷ lệ tốt nghiệp đạt 92%, tăng 3% so với năm học trước. Đặc biệt, có 12 học viên đạt điểm trung bình từ 7.5 trở lên, trong đó 3 học viên đạt trên 8.0 điểm.

Ban Giám đốc Trung tâm biểu dương thành tích của học viên và ghi nhận nỗ lực của tập thể giáo viên trong suốt năm học. Đây là động lực để Trung tâm tiếp tục nâng cao chất lượng dạy và học.`,
    date: '05-06-2025 15:00',
    img: 'https://picsum.photos/seed/totnghiep/800/500',
  },
  {
    tag: 'KHUYẾN MÃI',
    title: 'Ưu đãi học phí 30% cho học viên đăng ký sớm khóa học tháng 9/2025',
    excerpt: 'Nhân dịp khai giảng năm học mới, Trung tâm dành ưu đãi giảm 30% học phí cho 50 học viên đăng ký sớm nhất các lớp đào tạo nghề khai giảng tháng 9/2025.',
    content: `Nhân dịp khai giảng năm học mới 2025-2026, Trung tâm GDNN-GDTX Nguyễn Văn Tố dành ưu đãi đặc biệt cho học viên đăng ký sớm.

Chương trình ưu đãi: Giảm 30% học phí cho 50 học viên đăng ký đầu tiên các lớp khai giảng tháng 9/2025. Áp dụng cho tất cả các nghề đào tạo ngắn hạn.

Ngoài ra, học viên thuộc diện chính sách, hộ nghèo, cận nghèo được hỗ trợ thêm theo quy định của Nhà nước. Đăng ký ngay tại Trung tâm hoặc gọi hotline để được tư vấn miễn phí.`,
    date: '01-08-2025 08:00',
    img: 'https://picsum.photos/seed/uudai/800/500',
  },
  {
    tag: 'SỰ KIỆN',
    title: 'Lễ kỷ niệm 57 năm thành lập Trung tâm (1968-2025)',
    excerpt: 'Trung tâm GDNN-GDTX Nguyễn Văn Tố long trọng tổ chức Lễ kỷ niệm 57 năm ngày thành lập với nhiều hoạt động ý nghĩa, ôn lại truyền thống vẻ vang của nhà trường.',
    content: `Trung tâm GDNN-GDTX Nguyễn Văn Tố long trọng tổ chức Lễ kỷ niệm 57 năm ngày thành lập (1968-2025) với sự tham dự của các thế hệ cán bộ, giáo viên, học viên và đại diện các cơ quan ban ngành.

Tại buổi lễ, Ban Giám đốc ôn lại chặng đường 57 năm xây dựng và phát triển, từ những ngày đầu thành lập trường Bổ túc văn hóa dân chính Hoàn Kiếm đến Trung tâm GDNN-GDTX hiện đại ngày nay.

Nhiều cá nhân và tập thể xuất sắc được khen thưởng. Trung tâm cũng công bố kế hoạch phát triển giai đoạn 2025-2030 với mục tiêu trở thành trung tâm đào tạo nghề chất lượng cao của quận Hoàn Kiếm.`,
    date: '20-05-2025 08:30',
    img: 'https://picsum.photos/seed/kyniemnam/800/500',
  },
  {
    tag: 'TIN TỨC',
    title: 'Trung tâm được công nhận danh hiệu "Tiên tiến xuất sắc" cấp Thành phố năm 2024',
    excerpt: 'Trung tâm GDNN-GDTX Nguyễn Văn Tố vinh dự được UBND Thành phố Hà Nội công nhận danh hiệu "Tập thể Lao động Tiên tiến xuất sắc" cấp Thành phố năm học 2023-2024.',
    content: `Trung tâm GDNN-GDTX Nguyễn Văn Tố vinh dự được UBND Thành phố Hà Nội công nhận danh hiệu "Tập thể Lao động Tiên tiến xuất sắc" cấp Thành phố năm học 2023-2024.

Đây là kết quả của sự nỗ lực không ngừng của toàn thể cán bộ, giáo viên và học viên trong suốt năm học. Trung tâm đã hoàn thành xuất sắc các chỉ tiêu về tuyển sinh, chất lượng đào tạo và giải quyết việc làm cho học viên sau tốt nghiệp.

Danh hiệu này là nguồn động lực to lớn để Trung tâm tiếp tục phấn đấu, duy trì và phát huy truyền thống "Tiên tiến xuất sắc" trong những năm học tiếp theo.`,
    date: '10-01-2025 10:00',
    img: 'https://picsum.photos/seed/tientiensac/800/500',
  },
];

const seed = async () => {
  await mongoose.connect(config.db.uri);

  // Xóa toàn bộ bài viết cũ
  await News.deleteMany({});
  console.log('🗑️  Đã xóa toàn bộ bài viết cũ');

  await News.insertMany(articles);
  console.log(`✅ Đã thêm ${articles.length} bài viết mới`);

  process.exit(0);
};

seed().catch(err => {
  console.error('❌ Seed failed:', err.message);
  process.exit(1);
});
