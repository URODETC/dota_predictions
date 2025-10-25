import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import History from "./pages/History";
import Footer from "./components/Footer";
import Terms from "./pages/Terms";
import Authors from "./pages/Authors";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/history" element={<History />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/authors" element={<Authors />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
