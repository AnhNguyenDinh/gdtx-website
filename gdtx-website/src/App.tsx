import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import News from './pages/News';
import NewsDetail from './pages/NewsDetail';
import Helper from './pages/Helper';
import Contact from './pages/Contact';
import AdminLogin from './admin/AdminLogin';
import AdminLayout from './admin/AdminLayout';
import AdminNews from './admin/AdminNews';
import AdminAbout from './admin/AdminAbout';

const RootClassManager = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    const root = document.getElementById('root');
    if (root) root.classList.toggle('no-padding-top', pathname.startsWith('/admin'));
  }, [pathname]);
  return null;
};

function App() {
  return (
    <BrowserRouter>
      <RootClassManager />
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<><Header /><Home /><Footer /></>} />
        <Route path="/about" element={<><Header /><AboutUs /><Footer /></>} />
        <Route path="/news" element={<><Header /><News /><Footer /></>} />
        <Route path="/news/:id" element={<><Header /><NewsDetail /><Footer /></>} />
        <Route path="/helper" element={<><Header /><Helper /><Footer /></>} />
        <Route path="/contact" element={<><Header /><Contact /><Footer /></>} />

        {/* Admin routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="news" element={<AdminNews />} />
          <Route path="about" element={<AdminAbout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
