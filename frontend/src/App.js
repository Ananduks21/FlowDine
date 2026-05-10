import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactModal from "./components/ContactModal";
import ScrollToTop from "./components/ScrollToTop";
import { ContactModalProvider } from "./context/ContactModalContext";

import HomePage from "./pages/HomePage";
import FeaturesPage from "./pages/FeaturesPage";
import PricingPage from "./pages/PricingPage";
import BlogPage from "./pages/BlogPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import AboutPage from "./pages/AboutPage";
import SupportPage from "./pages/SupportPage";
import LegalPage from "./pages/LegalPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ContactModalProvider>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/privacy-policy" element={<LegalPage />} />
            <Route path="/terms-of-service" element={<LegalPage />} />
            <Route path="/refund-policy" element={<LegalPage />} />
            <Route path="/cookie-policy" element={<LegalPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Footer />
          <ContactModal />
          <Toaster
            position="top-center"
            toastOptions={{
              style: { background: "#08291f", color: "#faf8f3", border: "1px solid #0e4839", borderRadius: "1rem" },
            }}
          />
        </ContactModalProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
