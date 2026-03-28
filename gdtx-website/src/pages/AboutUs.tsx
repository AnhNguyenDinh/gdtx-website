import { useEffect, useState } from 'react';
import './AboutUs.css';
import heroImg from '../assets/hero.png';
import Timeline from '../components/Timeline';
import { getAbout, imgUrl } from '../api/aboutApi';

const FALLBACK_TITLE = 'LỊCH SỬ TRUYỀN THỐNG TRUNG TÂM GDNN-GDTX NGUYỄN VĂN TỐ';
const FALLBACK_CONTENT = `Cụ Nguyễn Văn Tố (1889 – 1947) sinh ra trong một gia đình nhà nho ở làng Đông Thành, huyện Thọ Xương nay là số nhà 78 phố Quán Sứ quận Hoàn Kiếm Hà Nội. Là nhà trí thức Nho học và Tây học. Sau khi tốt nghiệp trường Thông ngôn, Cụ về làm việc tại Học viện Viễn đông Bác Cổ, cơ quan nghiên cứu lịch sử văn hóa của người Pháp ở số 26 phố Lý Thường Kiệt, Hà Nội.

Cụ là một trong những người thuộc lớp trí thức đầu thế kỷ XX như Trương Vĩnh Ký, Phan Kế Bính, Lương Văn Can, Nguyễn Quyền, Vũ Đình Hòe,… phát động cuộc cách mạng chữ Quốc ngữ. Cụ được các chiến sỹ cộng sản hoạt động công khai thời Mặt trận bình dân như Phan Thanh, Võ Nguyên Giáp,… mời làm Hội trưởng Hội truyền bá học chữ Quốc ngữ.

Cách mạng tháng Tám thành công, đất nước ta được độc lập tự do đã trở thành hiện thực. Được Chủ tịch Hồ Chí Minh mời làm Bộ trưởng Bộ Cứu tế Xã hội trong chính phủ lâm thời, với nhiệm vụ cấp bách là "chống đói, chống dốt" cho nhân dân.

Năm 1968 trường Bổ túc văn hóa dân chính Hoàn Kiếm được thành lập. Tháng 6 năm 1994, cả 3 đơn vị được sáp nhập thành Trung tâm GDTX Nguyễn Văn Tố. Đến tháng 12 năm 2016 sáp nhập thành Trung tâm GDNN-GDTX Nguyễn Văn Tố quận Hoàn Kiếm.`;

const AboutUs = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [content2, setContent2] = useState('');
  const [img, setImg] = useState('');

  useEffect(() => {
    getAbout().then(res => {
      const d = res.data.data;
      setTitle(d.title || FALLBACK_TITLE);
      setContent(d.content || FALLBACK_CONTENT);
      setContent2(d.content2 || '');
      setImg(d.img ? imgUrl(d.img) : '');
    }).catch(() => {
      setTitle(FALLBACK_TITLE);
      setContent(FALLBACK_CONTENT);
    });
  }, []);

  const displayTitle = title || FALLBACK_TITLE;
  const displayContent = content || FALLBACK_CONTENT;
  const displayImg = img || heroImg;

  return (
    <div className="about-page">
      <section className="about-hero">
        <span className="about-tag">Giới thiệu</span>
        <h1>{displayTitle}</h1>
        <div className="about-content">
          <div className="about-text">
            {displayContent.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          <div className="about-media">
            <img src={displayImg} alt={displayTitle} />
          </div>
        </div>

        {content2 && (
          <div className="about-extra">
            {content2.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        )}
      </section>
      <Timeline />
    </div>
  );
};

export default AboutUs;
