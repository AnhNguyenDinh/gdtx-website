import './HomePartners.css';
import logoImg from '../assets/LOGO.png';

// Dùng logo tạm, thay bằng logo thật sau
const partners = [
  { name: 'Partner 1', img: logoImg },
  { name: 'MIC', img: logoImg },
  { name: 'Vietnam Business Club', img: logoImg },
  { name: 'PVcomBank', img: logoImg },
  { name: 'VNPT', img: logoImg },
  { name: 'Partner 6', img: logoImg },
  { name: 'Partner 7', img: logoImg },
];

// Duplicate for seamless loop
const items = [...partners, ...partners];

const HomePartners = () => {
  return null
  return (
    <section className="hp2-section">
      <div className="hp2-track-wrap">
        <div className="hp2-fade hp2-fade-left" />
        <div className="hp2-fade hp2-fade-right" />
        <div className="hp2-track">
          {items.map((p, i) => (
            <div key={i} className="hp2-item">
              <img src={p.img} alt={p.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePartners;
