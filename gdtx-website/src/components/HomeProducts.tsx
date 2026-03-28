import { useRef } from 'react';
import heroImg from '../assets/hero.png';
import './HomeProducts.css';

const stats = [
  { value: '98%', label: 'HỌC VIÊN HÀI LÒNG' },
  { value: '5,000+', label: 'HỌC VIÊN ĐÃ TỐT NGHIỆP' },
  { value: '20+', label: 'NGÀNH NGHỀ ĐÀO TẠO' },
  { value: '4.9 ☆', label: 'ĐÁNH GIÁ CHẤT LƯỢNG' },
];

const products = [
  {
    icon: '📚',
    name: 'GDTX CẤP THPT',
    desc: 'Chương trình Giáo dục thường xuyên cấp THPT dành cho người học chưa có bằng tốt nghiệp, học linh hoạt buổi tối, phù hợp với người đi làm.',
    img: heroImg,
  },
  {
    icon: '💻',
    name: 'TIN HỌC VĂN PHÒNG',
    desc: 'Khóa học tin học văn phòng thực hành Word, Excel, PowerPoint từ cơ bản đến nâng cao. Thời gian 3 tháng, cấp chứng chỉ quốc gia sau khi hoàn thành.',
    img: heroImg,
  },
  {
    icon: '🧾',
    name: 'KẾ TOÁN THỰC HÀNH',
    desc: 'Đào tạo kế toán thực hành trên phần mềm MISA, Fast Accounting. Học viên được thực hành trực tiếp trên bộ chứng từ thực tế của doanh nghiệp.',
    img: heroImg,
  },
  {
    icon: '🌐',
    name: 'TIẾNG ANH GIAO TIẾP',
    desc: 'Lớp tiếng Anh giao tiếp theo chuẩn quốc tế, tập trung 4 kỹ năng nghe – nói – đọc – viết. Lớp nhỏ, giáo viên tận tâm, phù hợp mọi trình độ.',
    img: heroImg,
  },
  {
    icon: '✂️',
    name: 'CẮT MAY THỜI TRANG',
    desc: 'Chương trình đào tạo nghề cắt may thời trang từ cơ bản đến nâng cao. Học viên được thực hành trên máy may công nghiệp, ra nghề ngay sau khóa học.',
    img: heroImg,
  },
];

const HomeProducts = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({ left: dir === 'right' ? 280 : -280, behavior: 'smooth' });
  };

  return (
    <div className="hp-wrapper">
      {/* Stats bar */}
      <div className="hp-stats">
        {stats.map((s, i) => (
          <div key={i} className="hp-stat">
            <span className="hp-stat-value">{s.value}</span>
            <span className="hp-stat-label">{s.label}</span>
            {i < stats.length - 1 && <div className="hp-stat-divider" />}
          </div>
        ))}
      </div>

      {/* Products section */}
      <div className="hp-products">
        <div className="hp-products-header">
          <span className="hp-tag">Chương trình đào tạo</span>
          <h2 className="hp-heading">MỘT SỐ<br />CHƯƠNG TRÌNH<br />DÀNH CHO BẠN !!</h2>
        </div>

        <div className="hp-slider-wrap">
          <div className="hp-slider" ref={sliderRef}>
            {products.map((p, i) => (
              <div key={i} className="hp-card">
                <div className="hp-card-icon">{p.icon}</div>
                <h3 className="hp-card-name">{p.name}</h3>
                <p className="hp-card-desc">{p.desc}</p>
                <img src={p.img} alt={p.name} className="hp-card-img" />
              </div>
            ))}
          </div>

          {/* Arrow buttons */}
          <button className="hp-arrow hp-arrow-left" onClick={() => scroll('left')} aria-label="Trước">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="18" height="18">
              <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="hp-arrow hp-arrow-right" onClick={() => scroll('right')} aria-label="Tiếp">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="18" height="18">
              <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeProducts;
