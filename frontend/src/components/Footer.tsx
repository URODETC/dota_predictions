import { Link } from "react-router-dom";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="footer-links">
        <Link to="/authors">Авторы</Link>
        <Link to="/terms">Правила использования</Link>
      </div>
      <div className="footer-copy">
        &copy; 2025 Dota-predictions. Все права защищены.
      </div>
    </footer>
  );
};

export default Footer;
