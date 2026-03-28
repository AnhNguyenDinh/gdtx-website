import { NavLink } from 'react-router-dom';
import logo from '../assets/LOGO.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">

        {/* Col 1: Logo + desc + social */}
        <div className="footer-col footer-brand">
          <NavLink to="/" className="footer-logo">
            <img src={logo} alt="Logo" height={40} style={{ width: 'auto' }} />
          </NavLink>
          <p>Hãy để chúng tôi đồng hành cùng bạn trên con đường tích lũy và đầu tư, tạo nên một tương lai vững chắc.</p>
          <div className="footer-social">
            {/* <a href="#" aria-label="YouTube">
              <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22"><path d="M21.8 8s-.2-1.4-.8-2c-.8-.8-1.6-.8-2-.9C16.8 5 12 5 12 5s-4.8 0-7 .1c-.4.1-1.2.1-2 .9-.6.6-.8 2-.8 2S2 9.6 2 11.2v1.5c0 1.6.2 3.2.2 3.2s.2 1.4.8 2c.8.8 1.8.8 2.3.9C6.8 19 12 19 12 19s4.8 0 7-.1c.4-.1 1.2-.1 2-.9.6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.5C22 9.6 21.8 8 21.8 8zM10 15V9l5.5 3-5.5 3z"/></svg>
            </a> */}
            <a href="https://www.facebook.com/profile.php?id=100085405441097" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            {/* <a href="#" aria-label="TikTok">
              <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/></svg>
            </a> */}
          </div>
        </div>

        {/* Col 2: Sản phẩm */}
        {/* <div className="footer-col">
          <h4>Sản phẩm</h4>
          <ul>
            <li><a href="#">Lộc vàng</a></li>
            <li><a href="#">Ví vàng</a></li>
            <li><a href="#">Heo vàng</a></li>
            <li><a href="#">Kết vàng</a></li>
            <li><a href="#">Rồng vàng</a></li>
          </ul>
        </div> */}

        {/* Col 3: Dịch vụ */}
        <div className="footer-col">
          <h4>Chức năng</h4>
          <ul>
            <li><NavLink to="/">Trang chủ</NavLink></li>
            <li><a href="/news">Tin tức</a></li>
            <li><NavLink to="/about">Về chúng tôi</NavLink></li>
            <li><NavLink to="/helper">Hỗ trợ</NavLink></li>
          </ul>
        </div>

        {/* Col 4: Liên hệ */}
        <div className="footer-col footer-contact">
          <h4>Liên hệ</h4>
          <p className="footer-contact-desc">Hãy liên hệ với chúng tôi để được tư vấn và hỗ trợ !!</p>
          <form className="footer-phone-form" onSubmit={(e) => e.preventDefault()}>
            <input type="tel" placeholder="Nhập số điện thoại" />
            <button type="submit" aria-label="Gửi">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M2 21l21-9L2 3v7l15 2-15 2z"/></svg>
            </button>
          </form>
          <div className="footer-info">
            <div className="footer-info-item">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              <span>Số 47 Hàng Quạt, phường Hoàn Kiếm, Hà Nội</span>
            </div>
            <div className="footer-info-item">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              <span>gtxtnvt@gmail.com</span>
            </div>
            <div className="footer-info-item">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2z"/></svg>
              <span>0243 826 5468</span>
            </div>
          </div>
        </div>

      </div>
      <div className="footer-bottom">
        <p>© Sản phẩm được phát triển bởi Trung Tâm Giáo Dục Thường Xuyên Nguyễn Văn Tố</p>
      </div>
    </footer>
  );
};

export default Footer;
