import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getNewsOne, getNewsList, imgUrl, type NewsItem } from '../api/newsApi';
import './NewsDetail.css';

const NewsDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [article, setArticle] = useState<NewsItem | null>(null);
  const [related, setRelated] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    setNotFound(false);
    window.scrollTo({ top: 0 });

    getNewsOne(id)
      .then(res => {
        setArticle(res.data.data);
        // Lấy bài liên quan
        return getNewsList({ limit: 4 });
      })
      .then(res => {
        setRelated(res.data.data.news.filter(a => a._id !== id).slice(0, 3));
      })
      .catch(() => setNotFound(true))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div style={{ textAlign: 'center', padding: '80px 0', color: '#888' }}>Đang tải...</div>;

  if (notFound || !article) {
    return (
      <div className="nd-notfound">
        <p>Bài viết không tồn tại.</p>
        <button onClick={() => navigate('/news')}>← Quay lại tin tức</button>
      </div>
    );
  }

  return (
    <div className="nd-page">
      <div className="nd-breadcrumb">
        <span onClick={() => navigate('/')}>Trang chủ</span>
        <span className="nd-sep">›</span>
        <span onClick={() => navigate('/news')}>Tin tức</span>
        <span className="nd-sep">›</span>
        <span className="nd-current">{article.title}</span>
      </div>

      <div className="nd-layout">
        <article className="nd-main">
          <span className="nd-tag">{article.tag}</span>
          <h1 className="nd-title">{article.title}</h1>
          <div className="nd-meta">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
              <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
            </svg>
            {article.date}
          </div>

          <img src={imgUrl(article.img)} alt={article.title} className="nd-hero-img" />

          <div className="nd-content">
            {article.content.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <button className="nd-back-btn" onClick={() => navigate('/news')}>
            ← Quay lại danh sách tin tức
          </button>
        </article>

        <aside className="nd-sidebar">
          <h3 className="nd-sidebar-title">Bài viết liên quan</h3>
          <div className="nd-related">
            {related.map(r => (
              <div key={r._id} className="nd-related-card" onClick={() => navigate(`/news/${r._id}`)}>
                <img src={imgUrl(r.img)} alt={r.title} />
                <div className="nd-related-body">
                  <span className="nd-related-tag">{r.tag}</span>
                  <p className="nd-related-title">{r.title}</p>
                  <span className="nd-related-date">{r.date}</span>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
};

export default NewsDetail;
