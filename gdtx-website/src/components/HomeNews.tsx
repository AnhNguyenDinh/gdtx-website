import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getNewsList, imgUrl, type NewsItem } from '../api/newsApi';
import './HomeNews.css';

const HomeNews = () => {
  const navigate = useNavigate();
  const [articles, setArticles] = useState<NewsItem[]>([]);

  useEffect(() => {
    getNewsList({ page: 1, limit: 6 }).then(res => setArticles(res.data.data.news)).catch(() => {});
  }, []);

  return (
    <section className="hn-section">
      <div className="hn-heading-wrap">
        <h2 className="hn-heading">TIN TỨC NỔI BẬT</h2>
        <div className="hn-underline" />
      </div>

      <div className="hn-grid">
        {articles.map((a) => (
          <div key={a._id} className="hn-card" onClick={() => navigate(`/news/${a._id}`)}>
            <div className="hn-img-wrap">
              <img src={imgUrl(a.img)} alt={a.title} />
            </div>
            <div className="hn-body">
              <span className="hn-tag">{a.tag}</span>
              <h3 className="hn-title">{a.title}</h3>
              <div className="hn-footer">
                <span className="hn-date">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                    <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
                  </svg>
                  {a.date}
                </span>
                <span className="hn-more">Xem thêm →</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="hn-btn-wrap">
        <button className="hn-btn" onClick={() => navigate('/news')}>Xem thêm</button>
      </div>
    </section>
  );
};

export default HomeNews;
