import { useState } from 'react';
import heroImg from '../assets/hero.png';
import './Timeline.css';

const milestones = [
  {
    date: '1889',
    title: 'Cụ Nguyễn Văn Tố ra đời',
    subtitle: 'Danh nhân văn hóa, liệt sỹ yêu nước',
    desc: 'Cụ Nguyễn Văn Tố sinh ra trong một gia đình nhà nho ở làng Đông Thành, huyện Thọ Xương, nay là số nhà 78 phố Quán Sứ, quận Hoàn Kiếm, Hà Nội.',
    img: heroImg,
  },
  {
    date: '1898',
    title: 'Hội Trí Tri Bắc Kỳ thành lập',
    subtitle: 'Nền tảng giáo dục đầu tiên',
    desc: 'Trụ sở Hội Trí Tri Bắc Kỳ được thành lập tại số 47 Hàng Quạt, quận Hoàn Kiếm — nền tảng đầu tiên của phong trào giáo dục và truyền bá tri thức.',
    img: heroImg,
  },
  {
    date: '1939',
    title: 'Hội Truyền Bá Chữ Quốc Ngữ',
    subtitle: 'Cụ Nguyễn Văn Tố làm Hội trưởng',
    desc: 'Cụ được mời làm Hội trưởng Hội truyền bá học chữ Quốc ngữ. Đây cũng là cái nôi của phong trào Quốc tế ngữ Esperanto tại Việt Nam.',
    img: heroImg,
  },
  {
    date: '1945',
    title: 'Cách Mạng Tháng Tám',
    subtitle: 'Trưởng Ban thường trực Quốc hội đầu tiên',
    desc: 'Cụ được Chủ tịch Hồ Chí Minh mời làm Bộ trưởng Bộ Cứu tế Xã hội và được Quốc hội bầu làm Trưởng Ban thường trực Quốc hội đầu tiên của nước Việt Nam Dân chủ Cộng hòa.',
    img: heroImg,
  },
  {
    date: '1968',
    title: 'Trường BTVH Hoàn Kiếm',
    subtitle: 'Tiếp nối truyền thống dạy chữ',
    desc: 'Trường Bổ túc văn hóa dân chính Hoàn Kiếm được thành lập, tiếp nối truyền thống dạy chữ cho nhân dân thủ đô tại ngôi biệt thự số 47 Hàng Quạt.',
    img: heroImg,
  },
  {
    date: '1994',
    title: 'Trung Tâm GDTX Nguyễn Văn Tố',
    subtitle: 'Sáp nhập 3 đơn vị thành một',
    desc: 'Tháng 6/1994, ba đơn vị được sáp nhập thành Trung tâm GDTX Nguyễn Văn Tố — mang tên người Hội trưởng đầu tiên của Hội truyền bá chữ quốc ngữ.',
    img: heroImg,
  },
  {
    date: '2016',
    title: 'Trung Tâm GDNN-GDTX Nguyễn Văn Tố',
    subtitle: 'Mô hình giáo dục toàn diện',
    desc: 'Tháng 12/2016, Thành phố Hà Nội sáp nhập 3 đơn vị thành Trung tâm GDNN-GDTX Nguyễn Văn Tố quận Hoàn Kiếm, hoàn thiện mô hình giáo dục nghề nghiệp và thường xuyên.',
    img: heroImg,
  },
];

const Timeline = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="tl-section">
      <span className="tl-tag">Hành trình</span>
      <h2 className="tl-heading">Từ ý tưởng đến<br />thực tiễn</h2>

      <div className="tl-wrapper">
        {/* Left: list */}
        <div className="tl-list">
          <div className="tl-line" />
          {milestones.map((m, i) => (
            <div
              key={i}
              className={`tl-item ${active === i ? 'active' : ''}`}
              onClick={() => setActive(i)}
            >
              <div className="tl-dot-wrap">
                <div className="tl-dot" />
              </div>
              <div className="tl-body">
                <span className="tl-date">{m.date}</span>
                <p className="tl-title">{m.title}</p>
                <p className="tl-subtitle">{m.subtitle}</p>
                <p className="tl-desc">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right: image sticky */}
        <div className="tl-image-panel">
          <div className="tl-image-wrap">
            <img key={active} src={milestones[active].img} alt={milestones[active].title} />
            <div className="tl-caption">
              <span className="tl-caption-date">{milestones[active].date}</span>
              <strong className="tl-caption-title">{milestones[active].title}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
