import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import Footer from "./components/Footer";
import Terms from "./pages/Terms";
import Authors from "./pages/Authors";
import LastpickPage from "./pages/LastpickPage";

import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/authors" element={<Authors />} />
          <Route path="/lastpick" element={<LastpickPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
