import { useState, useEffect, useRef } from 'react';
import { toast } from 'react-toastify';
import { getNewsList, createNews, updateNews, deleteNews, imgUrl, type NewsItem } from '../api/newsApi';
import './Admin.css';

const TAGS = ['TIN TỨC', 'THÔNG BÁO', 'SỰ KIỆN', 'KHUYẾN MÃI'];
const PAGE_SIZE = 8;

type FormState = Omit<NewsItem, '_id'> & { _id?: string };

const emptyForm = (): FormState => ({
  tag: 'TIN TỨC', title: '', excerpt: '', content: '', img: '', date: '',
});

const AdminNews = () => {
  const [articles, setArticles] = useState<NewsItem[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [editing, setEditing] = useState<FormState | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [imgFile, setImgFile] = useState<File | null>(null);
  const [imgPreview, setImgPreview] = useState('');
  const fileRef = useRef<HTMLInputElement>(null);

  const [query, setQuery] = useState('');
  const [filterTag, setFilterTag] = useState('');
  const [page, setPage] = useState(1);

  const fetchNews = async () => {
    setLoading(true);
    try {
      const res = await getNewsList({ page, limit: PAGE_SIZE, tag: filterTag || undefined, q: query || undefined });
      setArticles(res.data.data.news);
      setTotal(res.data.data.total);
    } catch {
      toast.error('Không thể tải danh sách bài viết.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchNews(); }, [page, filterTag]);

  useEffect(() => {
    const t = setTimeout(() => { setPage(1); fetchNews(); }, 400);
    return () => clearTimeout(t);
  }, [query]);

  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));

  const startNew = () => { setIsNew(true); setEditing(emptyForm()); setImgFile(null); setImgPreview(''); };
  const startEdit = (a: NewsItem) => { setIsNew(false); setEditing({ ...a }); setImgFile(null); setImgPreview(imgUrl(a.img)); };
  const cancelEdit = () => { setEditing(null); setImgFile(null); setImgPreview(''); };

  const handleImgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImgFile(file);
    setImgPreview(URL.createObjectURL(file));
  };

  const setField = <K extends keyof FormState>(key: K, val: FormState[K]) => {
    if (!editing) return;
    setEditing({ ...editing, [key]: val });
  };

  const saveEdit = async () => {
    if (!editing) return;
    setSaving(true);
    try {
      const form = new FormData();
      form.append('tag', editing.tag);
      form.append('title', editing.title);
      form.append('excerpt', editing.excerpt);
      form.append('content', editing.content);
      if (imgFile) form.append('img', imgFile);
      else if (editing.img) form.append('img', editing.img);

      if (isNew) {
        await createNews(form);
        toast.success('Thêm bài viết thành công!');
      } else {
        await updateNews(editing._id!, form);
        toast.success('Cập nhật bài viết thành công!');
      }

      await fetchNews();
      setEditing(null);
      setImgFile(null);
      setImgPreview('');
    } catch (err: any) {
      toast.error(err?.response?.data?.message || 'Lưu thất bại.');
    } finally {
      setSaving(false);
    }
  };

  const doDelete = async () => {
    if (!deleteId) return;
    try {
      await deleteNews(deleteId);
      toast.success('Đã xóa bài viết.');
      await fetchNews();
    } catch {
      toast.error('Xóa thất bại.');
    } finally {
      setDeleteId(null);
    }
  };

  const pageNumbers = () => {
    const pages: (number | '...')[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (page > 3) pages.push('...');
      for (let i = Math.max(2, page - 1); i <= Math.min(totalPages - 1, page + 1); i++) pages.push(i);
      if (page < totalPages - 2) pages.push('...');
      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <h2>Quản trị Bài viết</h2>
        <button className="admin-btn-new" onClick={startNew}>+ Thêm bài viết</button>
      </div>

      <div className="admin-query-bar">
        <input className="admin-query-input" placeholder="Tìm kiếm tiêu đề, tóm tắt..." value={query} onChange={e => setQuery(e.target.value)} />
        <select className="admin-query-select" value={filterTag} onChange={e => { setFilterTag(e.target.value); setPage(1); }}>
          <option value="">Tất cả tag</option>
          {TAGS.map(t => <option key={t} value={t}>{t}</option>)}
        </select>
        <span className="admin-query-count">{total} bài viết</span>
      </div>

      {editing && (
        <div className="admin-modal-overlay">
          <div className="admin-modal">
            <h3>{isNew ? 'Thêm bài viết mới' : 'Chỉnh sửa bài viết'}</h3>
            <label>Tag
              <select value={editing.tag} onChange={e => setField('tag', e.target.value)}>
                {TAGS.map(t => <option key={t}>{t}</option>)}
              </select>
            </label>
            <label>Tiêu đề
              <input value={editing.title} onChange={e => setField('title', e.target.value)} />
            </label>
            <label>Tóm tắt
              <textarea value={editing.excerpt} onChange={e => setField('excerpt', e.target.value)} rows={2} />
            </label>
            <label>Nội dung
              <textarea value={editing.content} onChange={e => setField('content', e.target.value)} rows={6} />
            </label>
            <label>Ảnh
              <div className="admin-img-upload">
                {imgPreview && <img src={imgPreview} alt="preview" className="admin-img-preview" />}
                <button type="button" className="admin-btn-upload" onClick={() => fileRef.current?.click()}>
                  {imgPreview ? 'Đổi ảnh' : 'Chọn ảnh'}
                </button>
                <input ref={fileRef} type="file" accept="image/*" style={{ display: 'none' }} onChange={handleImgChange} />
              </div>
            </label>
            <div className="admin-btn-row">
              <button className="admin-btn-save" onClick={saveEdit} disabled={saving}>{saving ? 'Đang lưu...' : 'Lưu'}</button>
              <button className="admin-btn-cancel" onClick={cancelEdit}>Hủy</button>
            </div>
          </div>
        </div>
      )}

      {deleteId !== null && (
        <div className="admin-modal-overlay">
          <div className="admin-modal admin-modal-sm">
            <p>Bạn có chắc muốn xóa bài viết này?</p>
            <div className="admin-btn-row">
              <button className="admin-btn-delete" onClick={doDelete}>Xóa</button>
              <button className="admin-btn-cancel" onClick={() => setDeleteId(null)}>Hủy</button>
            </div>
          </div>
        </div>
      )}

      <div className="admin-news-table-wrap">
        {loading ? (
          <p style={{ textAlign: 'center', padding: 32 }}>Đang tải...</p>
        ) : (
          <table className="admin-news-table">
            <thead>
              <tr><th>Ảnh</th><th>Tag</th><th>Tiêu đề</th><th>Ngày</th><th>Thao tác</th></tr>
            </thead>
            <tbody>
              {articles.length === 0 ? (
                <tr><td colSpan={5} className="admin-empty-row">Không tìm thấy bài viết nào.</td></tr>
              ) : articles.map(a => (
                <tr key={a._id}>
                  <td><img src={imgUrl(a.img)} alt={a.title} className="admin-news-thumb" /></td>
                  <td><span className="admin-tag-badge">{a.tag}</span></td>
                  <td className="admin-news-title-cell">{a.title}</td>
                  <td className="admin-news-date-cell">{a.date}</td>
                  <td>
                    <div className="admin-action-btns">
                      <button className="admin-btn-edit" onClick={() => startEdit(a)}>Sửa</button>
                      <button className="admin-btn-delete" onClick={() => setDeleteId(a._id)}>Xóa</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {totalPages > 1 && (
        <div className="admin-pagination">
          <button className="admin-pg-btn" disabled={page === 1} onClick={() => setPage(p => p - 1)}>‹</button>
          {pageNumbers().map((p, i) =>
            p === '...'
              ? <span key={`e-${i}`} className="admin-pg-ellipsis">…</span>
              : <button key={p} className={`admin-pg-btn ${p === page ? 'active' : ''}`} onClick={() => setPage(p as number)}>{p}</button>
          )}
          <button className="admin-pg-btn" disabled={page === totalPages} onClick={() => setPage(p => p + 1)}>›</button>
        </div>
      )}
    </div>
  );
};

export default AdminNews;
