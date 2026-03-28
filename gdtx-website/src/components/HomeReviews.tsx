import { useState, useRef, useEffect } from 'react';
import logoImg from '../assets/LOGO.png';
import './HomeReviews.css';

const reviews = [
  { name: 'Nguyễn Thị Lan Anh', role: 'Học viên lớp Kế toán K01/2025', avatar: logoImg,
    text: '"Trước khi học tại đây mình không biết gì về kế toán cả, nhưng sau 4 tháng thầy cô hướng dẫn tận tình, mình đã tự tin đi làm và được nhận ngay sau khi tốt nghiệp."' },
  { name: 'Trần Đức Mạnh', role: 'Học viên lớp Tin học văn phòng', avatar: logoImg,
    text: '"Lớp học buổi tối rất tiện cho mình vì ban ngày còn đi làm. Giáo viên dạy dễ hiểu, thực hành nhiều, chỉ sau 3 tháng mình đã thành thạo Word và Excel."' },
  { name: 'Phạm Thị Thu Hà', role: 'Học viên hệ GDTX cấp THPT', avatar: logoImg,
    text: '"Mình bỏ học từ lâu, tưởng không có cơ hội lấy bằng THPT nữa. Nhờ chương trình GDTX ở đây, mình vừa thi đỗ tốt nghiệp và đang chuẩn bị thi đại học."' },
  { name: 'Lê Hoàng Nam', role: 'Học viên lớp Tiếng Anh giao tiếp', avatar: logoImg,
    text: '"Lớp tiếng Anh ít học viên nên được thầy chú ý nhiều hơn. Sau 6 tháng mình đã có thể giao tiếp cơ bản với khách nước ngoài trong công việc."' },
  { name: 'Vũ Thị Minh Châu', role: 'Học viên lớp Cắt may thời trang', avatar: logoImg,
    text: '"Học xong khóa cắt may ở đây mình mở được tiệm may nhỏ tại nhà. Cô giáo không chỉ dạy kỹ thuật mà còn hướng dẫn cả cách kinh doanh rất thực tế."' },
];

const GAP = 20;

const HomeReviews = () => {
  const [active, setActive] = useState(0);
  const viewportRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [offset, setOffset] = useState(0);

  const calcOffset = (idx: number) => {
    const vp = viewportRef.current;
    const card = cardRefs.current[idx];
    if (!vp || !card) return;

    const vpWidth = vp.offsetWidth;
    const cardWidth = card.offsetWidth;

    // sum of widths + gaps before this card
    let left = 0;
    for (let i = 0; i < idx; i++) {
      const c = cardRefs.current[i];
      if (c) left += c.offsetWidth + GAP;
    }

    // center: viewport_center - (card_left + card_center)
    setOffset(vpWidth / 2 - left - cardWidth / 2);
  };

  useEffect(() => {
    calcOffset(active);
  }, [active]);

  useEffect(() => {
    const ro = new ResizeObserver(() => calcOffset(active));
    if (viewportRef.current) ro.observe(viewportRef.current);
    return () => ro.disconnect();
  }, [active]);

  const goTo = (i: number) => setActive((i + reviews.length) % reviews.length);

  return (
    <section className="hrv-section">
      <div className="hrv-header">
        <h2 className="hrv-heading">
          <span className="hrv-accent">Cảm nhận</span> của học viên<br />sau khi học tại GDTX !!
        </h2>
        <div className="hrv-arrows">
          <button onClick={() => goTo(active - 1)} aria-label="Trước">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16">
              <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button onClick={() => goTo(active + 1)} aria-label="Tiếp">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16">
              <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      <div className="hrv-viewport" ref={viewportRef}>
        <div
          className="hrv-track"
          style={{ transform: `translateX(${offset}px)` }}
        >
          {reviews.map((r, i) => (
            <div
              key={i}
              ref={el => { cardRefs.current[i] = el; }}
              className={`hrv-card ${i === active ? 'hrv-card-active' : ''}`}
              onClick={() => goTo(i)}
            >
              <div className="hrv-card-top">
                <img src={r.avatar} alt={r.name} className="hrv-avatar" />
                <div>
                  <p className="hrv-name">{r.name}</p>
                  <p className="hrv-role">{r.role}</p>
                </div>
              </div>
              <p className="hrv-text">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeReviews;
