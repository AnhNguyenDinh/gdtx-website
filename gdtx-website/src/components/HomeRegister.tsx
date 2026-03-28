import { useState } from 'react';
import heroImg from '../assets/hero.png';
import './HomeRegister.css';

const HomeRegister = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const [errors, setErrors] = useState({ name: '', email: '', phone: '' });

  const validate = () => {
    const e = { name: '', email: '', phone: '' };
    if (!form.name.trim()) e.name = '*Vui lòng điền đầy đủ họ và tên theo CCCD';
    if (!form.email.trim()) e.email = '*Vui lòng nhập đúng email';
    if (!form.phone.trim()) e.phone = '*Vui lòng nhập đúng số điện thoại';
    setErrors(e);
    return !e.name && !e.email && !e.phone;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      alert('Đăng ký thành công!');
    }
  };

  return (
    <section className="hr-section">
      <div className="hr-inner">
        {/* Left: form */}
        <div className="hr-form-side">
          <p className="hr-sub">Tư vấn tuyển sinh – Hỗ trợ nhập học miễn phí</p>
          <h2 className="hr-heading">Đăng ký hỗ trợ nhập học ngay!</h2>
          <p className="hr-note">"Hãy để lại thông tin của bạn, chúng tôi sẽ tư vấn chương trình học phù hợp nhất với bạn"</p>

          <form className="hr-form" onSubmit={handleSubmit} noValidate>
            <div className="hr-field">
              <label>Họ và tên*</label>
              <input
                type="text"
                placeholder="Nguyễn Văn A"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
              />
              {errors.name && <span className="hr-error">{errors.name}</span>}
            </div>

            <div className="hr-row">
              <div className="hr-field">
                <label>Email*</label>
                <input
                  type="email"
                  placeholder="nguyenvana@gmail.com"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                />
                {errors.email && <span className="hr-error">{errors.email}</span>}
              </div>
              <div className="hr-field">
                <label>Số điện thoại*</label>
                <input
                  type="tel"
                  placeholder="0123456789"
                  value={form.phone}
                  onChange={e => setForm({ ...form, phone: e.target.value })}
                />
                {errors.phone && <span className="hr-error">{errors.phone}</span>}
              </div>
            </div>

            <button type="submit" className="hr-btn">Đăng ký</button>
          </form>
        </div>

        {/* Right: image */}
        <div className="hr-image-side">
          <img src={heroImg} alt="Đầu tư tích luỹ" />
        </div>
      </div>
    </section>
  );
};

export default HomeRegister;
