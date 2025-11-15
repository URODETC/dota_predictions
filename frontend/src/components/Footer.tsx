import { Link } from "react-router-dom";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="footer-links">
        <Link to="/authors">О нас</Link>
        {/* <Link to="/terms">Правила использования</Link> */}
      </div>
      <div className="footer-copy">2025 dota-predictions</div>
    </footer>
  );
};

export default Footer;
