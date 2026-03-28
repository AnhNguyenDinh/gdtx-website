import heroImg from '../assets/hero.png';
import './HomeFeatures.css';

const features = [
  {
    title: 'Đào tạo nghề nghiệp',
    items: [
      'Đa dạng ngành nghề: Tin học, Kế toán, Tiếng Anh, Cắt may, Nấu ăn.',
      'Thời gian học linh hoạt, phù hợp với người đi làm.',
      'Giáo viên giàu kinh nghiệm, tận tâm với học viên.',
      'Cấp chứng chỉ nghề quốc gia sau khi hoàn thành khóa học.',
    ],
  },
  {
    title: 'Giáo dục thường xuyên',
    items: [
      'Chương trình GDTX cấp THPT dành cho người chưa có bằng tốt nghiệp.',
      'Học buổi tối, không ảnh hưởng đến công việc ban ngày.',
      'Tỷ lệ tốt nghiệp cao, học viên được hỗ trợ ôn thi tận tình.',
    ],
  },
  {
    title: 'Hỗ trợ việc làm',
    items: [
      'Kết nối học viên với hơn 50 doanh nghiệp đối tác tuyển dụng.',
      'Tư vấn định hướng nghề nghiệp miễn phí.',
      'Tỷ lệ học viên có việc làm sau tốt nghiệp đạt trên 85%.',
    ],
  },
];

const HomeFeatures = () => {
  return (
    <section className="hf-section">
      <div className="hf-inner">
        {/* Left image */}
        <div className="hf-image">
          <img src={heroImg} alt="Chức năng nổi bật" />
        </div>

        {/* Right content */}
        <div className="hf-content">
          <span className="hf-tag">Chức năng</span>
          <h2 className="hf-heading">
            Một số chức năng<br />
            nổi bật của <span className="hf-brand">GDTX</span>
          </h2>

          <div className="hf-features">
            {features.map((f, i) => (
              <div key={i} className="hf-feature">
                <div className="hf-feature-title">
                  <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
                    <circle cx="12" cy="12" r="10" stroke="#6b21a8" strokeWidth="2"/>
                    <path d="M8 12l3 3 5-5" stroke="#6b21a8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <strong>{f.title}</strong>
                </div>
                <ul className="hf-list">
                  {f.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFeatures;
