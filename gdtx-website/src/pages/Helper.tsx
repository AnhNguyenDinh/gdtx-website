import { useState } from 'react';
import './Helper.css';

const Helper = () => {
  const [query, setQuery] = useState('');

  return (
    <div className="helper-page">
      <div className="helper-hero">
        <h1 className="helper-title">
          TÌM KIẾM <span className="helper-highlight">SỰ TRỢ GIÚP</span> CẦN THIẾT
          <br />CHO MỌI VẤN ĐỀ ?
        </h1>
        <p className="helper-sub">
          Chúng tôi luôn ở đây hỗ trợ mọi thắc mắc và vấn đề mà bạn gặp phải.
          <br />Hãy liên hệ với chúng tôi để được tư vấn miễn phí.
        </p>
        <div className="helper-search-wrap">
          <input
            className="helper-search-input"
            placeholder="Nhập từ khoá bạn muốn tìm kiếm"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          <button className="helper-search-btn" aria-label="Tìm kiếm">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="18" height="18">
              <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Helper;
