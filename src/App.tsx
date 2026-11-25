import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { BlogPage } from './pages/BlogPage';
import { BlogDetailPage } from './pages/BlogDetailPage';
import { ContactPage } from './pages/ContactPage';
import { StyleGuidePage } from './pages/StyleGuidePage';
import { LicensesPage } from './pages/LicensesPage';
import { ChangelogPage } from './pages/ChangelogPage';
import { InstructionsPage } from './pages/InstructionsPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { PasswordPage } from './pages/PasswordPage';
import { NotFoundPage } from './pages/NotFoundPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);
  return null;
}

export function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/service" element={<ServicesPage />} />
        <Route path="/service/:slug" element={<ServiceDetailPage />} />
        <Route path="/project" element={<ProjectsPage />} />
        <Route path="/project/:slug" element={<ProjectDetailPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogDetailPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/style-guide" element={<StyleGuidePage />} />
        <Route path="/licenses" element={<LicensesPage />} />
        <Route path="/changelog" element={<ChangelogPage />} />
        <Route path="/instructions" element={<InstructionsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/401" element={<PasswordPage />} />
        <Route path="/password" element={<PasswordPage />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
