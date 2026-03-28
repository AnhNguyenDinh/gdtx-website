import { useEffect } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import './Admin.css';

const AdminLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!sessionStorage.getItem('admin_auth')) {
      navigate('/admin/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem('admin_auth');
    sessionStorage.removeItem('access_token');
    sessionStorage.removeItem('refresh_token');
    navigate('/admin/login');
  };

  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <div className="admin-sidebar-title">Quản trị</div>
        <nav>
          <NavLink to="/admin/news" className={({ isActive }) => isActive ? 'active' : ''}>
            📰 Bài viết
          </NavLink>
          <NavLink to="/admin/about" className={({ isActive }) => isActive ? 'active' : ''}>
            📄 Giới thiệu
          </NavLink>
        </nav>
        <button className="admin-logout-btn" onClick={handleLogout}>Đăng xuất</button>
      </aside>
      <main className="admin-main">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
