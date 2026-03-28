import './Home.css';
import heroImg from '../assets/hero.png';
import logoImg from '../assets/LOGO.png';
import HomeProducts from '../components/HomeProducts';
import HomeFeatures from '../components/HomeFeatures';
import HomePartners from '../components/HomePartners';
import HomeRegister from '../components/HomeRegister';
import HomeReviews from '../components/HomeReviews';
import HomeNews from '../components/HomeNews';

const Home = () => {
  return (
    <>
      <div className="home-hero">
      {/* Background gradient blobs */}
      <div className="home-blob home-blob-1" />
      <div className="home-blob home-blob-2" />

      <div className="home-content">
        <h1 className="home-title">
          HỌC TẬP KHÔNG NGỪNG,<br />TƯƠNG LAI VỮNG CHẮC
        </h1>
        <p className="home-sub">
          Cùng GDTX – Nơi khơi nguồn tri thức, mở rộng cơ hội.<br />
          Trung tâm giáo dục nghề nghiệp uy tín, đồng hành cùng bạn<br />
          trên hành trình học tập và phát triển bản thân.
        </p>

        <div className="home-avatars">
          <div className="avatar-stack">
            <img src={logoImg} alt="user" />
            <img src={logoImg} alt="user" />
            <img src={logoImg} alt="user" />
          </div>
          <span>99+ người quan tâm</span>
        </div>

        <button className="home-cta">Khám phá ngay hôm nay</button>
      </div>

      {/* Bottom cards row */}
      <div className="home-cards">
        {/* <div className="home-card">
          <div className="home-card-header">
            <span className="home-card-value">100.318.000đ</span>
            <span className="home-card-label">Ví Vàng</span>
          </div>
          <p className="home-card-sub">+2.000đ / tháng</p>
          <img src={heroImg} alt="chart" className="home-card-img" />
        </div> */}

        <div className="home-center-img">
          <img src={heroImg} alt="hero" />
        </div>

        {/* <div className="home-card">
          <div className="home-card-header">
            <span className="home-card-value">70.318.000đ</span>
            <span className="home-card-label">Lộc Vàng</span>
          </div>
          <p className="home-card-sub">+1.500đ / tháng</p>
          <img src={heroImg} alt="chart" className="home-card-img" />
        </div> */}
      </div>
    </div>
    <HomeProducts />
    <HomeFeatures />
    <HomePartners />
    <HomeRegister />
    <HomeReviews />
    <HomeNews />
    </>
  );
};

export default Home;
