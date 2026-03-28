import { useState, useEffect, useRef } from 'react';
import { toast } from 'react-toastify';
import { getAbout, updateAbout, imgUrl } from '../api/aboutApi';
import './Admin.css';

const AdminAbout = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [content2, setContent2] = useState('');
  const [imgPreview, setImgPreview] = useState('');
  const [imgFile, setImgFile] = useState<File | null>(null);
  const [saving, setSaving] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    getAbout().then(res => {
      const d = res.data.data;
      setTitle(d.title);
      setContent(d.content);
      setContent2(d.content2 || '');
      if (d.img) setImgPreview(imgUrl(d.img));
    }).catch(() => toast.error('Không thể tải nội dung trang giới thiệu.'));
  }, []);

  const handleImgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImgFile(file);
    setImgPreview(URL.createObjectURL(file));
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const form = new FormData();
      form.append('title', title);
      form.append('content', content);
      form.append('content2', content2);
      if (imgFile) form.append('img', imgFile);
      await updateAbout(form);
      toast.success('Lưu nội dung giới thiệu thành công!');
    } catch (err: any) {
      toast.error(err?.response?.data?.message || 'Lưu thất bại.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <h2>Quản trị nội dung Giới thiệu</h2>
      </div>

      <div className="admin-about-form">
        <label>
          Tiêu đề
          <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Tiêu đề trang giới thiệu" />
        </label>

        <label>
          Nội dung phần 1
          <textarea value={content} onChange={e => setContent(e.target.value)} rows={10} placeholder="Nội dung phần 1..." />
        </label>

        <label>
          Nội dung phần 2
          <textarea value={content2} onChange={e => setContent2(e.target.value)} rows={10} placeholder="Nội dung phần 2 (hiển thị bên dưới ảnh)..." />
        </label>

        <label>
          Ảnh đại diện
          <div className="admin-img-upload">
            {imgPreview && <img src={imgPreview} alt="preview" className="admin-img-preview" />}
            <button type="button" className="admin-btn-upload" onClick={() => fileRef.current?.click()}>
              {imgPreview ? 'Đổi ảnh' : 'Chọn ảnh'}
            </button>
            <input ref={fileRef} type="file" accept="image/*" style={{ display: 'none' }} onChange={handleImgChange} />
          </div>
        </label>

        <div className="admin-btn-row">
          <button className="admin-btn-save" onClick={handleSave} disabled={saving}>
            {saving ? 'Đang lưu...' : 'Lưu thay đổi'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminAbout;
