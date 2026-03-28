import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getNewsList, imgUrl, type NewsItem } from '../api/newsApi';
import './News.css';

const PAGE_SIZE = 6;

const News = () => {
  const navigate = useNavigate();
  const [articles, setArticles] = useState<NewsItem[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));

  const fetchNews = async (p: number) => {
    setLoading(true);
    try {
      const res = await getNewsList({ page: p, limit: PAGE_SIZE });
      setArticles(res.data.data.news);
      setTotal(res.data.data.total);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  return (
    <div className="news-page">
      <div className="news-header">
        <span className="news-tag-label">Tin tức</span>
        <h1>TIN TỨC NỔI BẬT</h1>
        <div className="news-underline" />
      </div>

      {loading ? (
        <div style={{ textAlign: 'center', padding: '60px 0', color: '#888' }}>Đang tải...</div>
      ) : (
        <div className="news-grid">
          {articles.length === 0 ? (
            <p style={{ color: '#aaa', gridColumn: '1/-1', textAlign: 'center', padding: 40 }}>Chưa có bài viết nào.</p>
          ) : articles.map(a => (
            <div key={a._id} className="news-card" onClick={() => navigate(`/news/${a._id}`)}>
              <div className="news-img-wrap">
                <img src={imgUrl(a.img)} alt={a.title} loading="lazy" />
                <span className="news-card-tag">{a.tag}</span>
              </div>
              <div className="news-card-body">
                <h3 className="news-card-title">{a.title}</h3>
                <p className="news-card-excerpt">{a.excerpt}</p>
                <div className="news-card-footer">
                  <span className="news-card-date">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="13" height="13">
                      <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
                    </svg>
                    {a.date}
                  </span>
                  <span className="news-card-more">Xem thêm →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {totalPages > 1 && (
        <div className="news-pagination">
          <button className="news-pg-btn" disabled={page === 1} onClick={() => setPage(p => p - 1)}>‹</button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
            <button key={p} className={`news-pg-btn ${p === page ? 'active' : ''}`} onClick={() => setPage(p)}>{p}</button>
          ))}
          <button className="news-pg-btn" disabled={page === totalPages} onClick={() => setPage(p => p + 1)}>›</button>
        </div>
      )}
    </div>
  );
};

export default News;
