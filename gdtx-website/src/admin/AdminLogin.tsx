import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loginApi } from '../api/authApi';
import './Admin.css';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await loginApi({ email, password });
      const { accessToken, refreshToken } = res.data.data;
      sessionStorage.setItem('admin_auth', '1');
      sessionStorage.setItem('access_token', accessToken);
      sessionStorage.setItem('refresh_token', refreshToken);
      toast.success('Đăng nhập thành công!');
      navigate('/admin/news');
    } catch (err: any) {
      toast.error(err?.response?.data?.message || 'Tên đăng nhập hoặc mật khẩu không đúng.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-login-page">
      <form className="admin-login-form" onSubmit={handleSubmit}>
        <h2>Đăng nhập quản trị</h2>
        <label>
          Email
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} autoFocus required />
        </label>
        <label>
          Mật khẩu
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
        </label>
        <button type="submit" disabled={loading}>
          {loading ? 'Đang đăng nhập...' : 'Đăng nhập'}
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
