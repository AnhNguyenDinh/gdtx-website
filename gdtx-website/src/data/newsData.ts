export interface Article {
  id: number;
  tag: string;
  title: string;
  excerpt: string;
  date: string;
  img: string;
  content: string;
}

const tags = ['TIN TỨC', 'THÔNG BÁO', 'SỰ KIỆN', 'KHUYẾN MÃI'];

const titles = [
  'GDTX điều chỉnh biểu lợi suất mới – gia tăng hấp dẫn',
  'Các gói bảo hiểm hiện đã có trên GDTX',
  '6 nguyên tắc tài chính nhà đầu tư cần nắm chắc',
  'Khi nhà đầu tư cá nhân tìm kiếm giải pháp linh hoạt hơn',
  'Thông báo lịch làm việc thứ Bảy tháng này',
  'Lịch nghỉ Tết Dương lịch 2026 – Ngày nghỉ & làm việc lại',
  'Heo Vàng – Sản phẩm tích lũy sinh lời hấp dẫn nhất 2026',
  'GDTX ra mắt tính năng đầu tư tự động thông minh',
  'Chương trình ưu đãi đặc biệt dành cho khách hàng mới',
  'Cách quản lý tài chính cá nhân hiệu quả trong năm 2026',
  'GDTX hợp tác chiến lược với PVcomBank',
  'Lộc Vàng – Tích lũy linh hoạt, rút tiền bất kỳ lúc nào',
  'Bí quyết đầu tư an toàn cho người mới bắt đầu',
  'GDTX đạt mốc 10.000 khách hàng đồng hành',
  'Rồng Vàng – Kỳ hạn dài, lợi suất cao nhất thị trường',
  'Cập nhật chính sách bảo mật thông tin người dùng',
  'Hướng dẫn mở tài khoản và bắt đầu đầu tư trên GDTX',
  'GDTX tham gia triển lãm Fintech Việt Nam 2026',
];

const excerpts = [
  'Nhằm mang lại lợi ích tốt nhất cho khách hàng, GDTX chính thức điều chỉnh biểu lãi suất với nhiều ưu đãi hấp dẫn.',
  'Với sứ mệnh bảo vệ tài sản khách hàng, GDTX ra mắt các gói bảo hiểm đa dạng phù hợp mọi nhu cầu.',
  'Đầu tư thông minh đòi hỏi nền tảng kiến thức vững chắc. Hãy cùng GDTX khám phá 6 nguyên tắc vàng.',
  'Thị trường tài chính ngày càng đa dạng, nhà đầu tư cá nhân cần những giải pháp linh hoạt và hiệu quả hơn.',
  'GDTX thông báo lịch làm việc trong thời gian tới để khách hàng chủ động sắp xếp giao dịch.',
  'Trân trọng thông báo lịch nghỉ lễ và ngày làm việc trở lại của toàn hệ thống GDTX.',
  'Heo Vàng là sản phẩm tích lũy kỳ hạn với lãi suất cạnh tranh, phù hợp cho kế hoạch tài chính dài hạn.',
  'Tính năng đầu tư tự động mới giúp bạn tối ưu hóa danh mục mà không cần theo dõi liên tục.',
];

const contents = [
  `Trung tâm GDNN-GDTX Nguyễn Văn Tố chính thức điều chỉnh biểu lợi suất áp dụng từ tháng 4/2026. Theo đó, lãi suất các sản phẩm tích lũy tăng thêm từ 0.5% đến 1.5%/năm tùy kỳ hạn.\n\nĐây là động thái nhằm gia tăng lợi ích cho khách hàng đang tham gia các sản phẩm Lộc Vàng, Heo Vàng, Rồng Vàng. Khách hàng hiện hữu sẽ được áp dụng mức lãi suất mới ngay từ kỳ tái tục tiếp theo.\n\nĐể biết thêm chi tiết, quý khách vui lòng liên hệ hotline hoặc truy cập ứng dụng GDTX để xem biểu lãi suất cập nhật mới nhất.`,
  `GDTX vừa ra mắt danh mục bảo hiểm toàn diện với sự hợp tác của MIC – một trong những công ty bảo hiểm uy tín hàng đầu Việt Nam.\n\nCác gói bảo hiểm bao gồm: bảo hiểm nhân thọ, bảo hiểm sức khỏe, bảo hiểm tai nạn cá nhân và bảo hiểm xe cơ giới. Tất cả đều có thể đăng ký trực tiếp trên ứng dụng GDTX chỉ trong vài phút.\n\nĐây là bước tiến quan trọng trong chiến lược trở thành nền tảng tài chính toàn diện của GDTX, giúp người dùng vừa tích lũy vừa bảo vệ tài sản hiệu quả.`,
  `Đầu tư thành công không chỉ phụ thuộc vào may mắn mà còn cần nền tảng kiến thức vững chắc. Dưới đây là 6 nguyên tắc tài chính mà mọi nhà đầu tư cần nắm:\n\n1. Đa dạng hóa danh mục đầu tư để giảm thiểu rủi ro.\n2. Chỉ đầu tư số tiền bạn có thể chấp nhận mất.\n3. Hiểu rõ sản phẩm trước khi đầu tư.\n4. Kiên nhẫn với kế hoạch dài hạn.\n5. Theo dõi và điều chỉnh danh mục định kỳ.\n6. Luôn có quỹ dự phòng khẩn cấp trước khi đầu tư.`,
];

const imgs = [
  'https://picsum.photos/seed/news1/800/500',
  'https://picsum.photos/seed/news2/800/500',
  'https://picsum.photos/seed/news3/800/500',
  'https://picsum.photos/seed/news4/800/500',
  'https://picsum.photos/seed/news5/800/500',
  'https://picsum.photos/seed/news6/800/500',
  'https://picsum.photos/seed/news7/800/500',
  'https://picsum.photos/seed/news8/800/500',
];

let _counter = 1;

export const generateArticle = (): Article => {
  const id = _counter++;
  const d = new Date(2026, 2, 27);
  d.setDate(d.getDate() - Math.floor(Math.random() * 60));
  const pad = (n: number) => String(n).padStart(2, '0');
  const date = `${pad(d.getDate())}-${pad(d.getMonth()+1)}-${d.getFullYear()} ${pad(Math.floor(Math.random()*12)+8)}:${pad(Math.floor(Math.random()*60))}`;
  return {
    id,
    tag: tags[Math.floor(Math.random() * tags.length)],
    title: titles[Math.floor(Math.random() * titles.length)],
    excerpt: excerpts[Math.floor(Math.random() * excerpts.length)],
    content: contents[Math.floor(Math.random() * contents.length)],
    date,
    img: imgs[(id - 1) % imgs.length],
  };
};

export const generateArticles = (count: number): Article[] =>
  Array.from({ length: count }, generateArticle);

// Global store – shared across pages
export const articleStore: Article[] = generateArticles(18);

export const addArticles = (count: number) => {
  const newOnes = Array.from({ length: count }, generateArticle);
  articleStore.push(...newOnes);
  return newOnes;
};

export const getArticleById = (id: number) =>
  articleStore.find(a => a.id === id);
