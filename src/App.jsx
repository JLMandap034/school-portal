import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import PublicLayout from './layouts/PublicLayout';
import SkeletonGrid from './components/states/SkeletonGrid';
import './App.css';

const HomePage = lazy(() => import('./pages/public/HomePage'));
const AboutUsPage = lazy(() => import('./pages/public/AboutUsPage'));
const HistoryPage = lazy(() => import('./pages/public/HistoryPage'));
const CoreValuesPage = lazy(() => import('./pages/public/CoreValuesPage'));
const HymnPage = lazy(() => import('./pages/public/HymnPage'));
const TestimonialsPage = lazy(() => import('./pages/public/TestimonialsPage'));
const FacultyPage = lazy(() => import('./pages/public/FacultyPage'));
const FaqPage = lazy(() => import('./pages/public/FaqPage'));
const GalleryPage = lazy(() => import('./pages/public/GalleryPage'));
const GalleryDetailPage = lazy(() => import('./pages/public/GalleryDetailPage'));
const EventsPage = lazy(() => import('./pages/public/EventsPage'));
const EventDetailPage = lazy(() => import('./pages/public/EventDetailPage'));
const EventsArchivePage = lazy(() => import('./pages/public/EventsArchivePage'));
const AcademicsPage = lazy(() => import('./pages/public/AcademicsPage'));
const AdmissionsPage = lazy(() => import('./pages/public/AdmissionsPage'));
const NewsPage = lazy(() => import('./pages/public/NewsPage'));
const NewsDetailPage = lazy(() => import('./pages/public/NewsDetailPage'));
const NewsArchivePage = lazy(() => import('./pages/public/NewsArchivePage'));
const ContactPage = lazy(() => import('./pages/public/ContactPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/public/PrivacyPolicyPage'));
const TermsPage = lazy(() => import('./pages/public/TermsPage'));
const MaintenancePage = lazy(() => import('./pages/public/MaintenancePage'));
const AnnouncementPage = lazy(() => import('./pages/public/AnnouncementPage'));
const NotFoundPage = lazy(() => import('./pages/public/NotFoundPage'));

function App() {
  return (
    <Suspense
      fallback={
        <div className="route-skeleton">
          <div className="container">
            <SkeletonGrid count={6} />
          </div>
        </div>
      }
    >
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />

          <Route path="/who-we-are" element={<Navigate to="/who-we-are/about-us" replace />} />
          <Route path="/who-we-are/about-us" element={<AboutUsPage />} />
          <Route path="/who-we-are/history" element={<HistoryPage />} />
          <Route path="/who-we-are/core-values" element={<CoreValuesPage />} />
          <Route path="/who-we-are/school-hymn" element={<HymnPage />} />
          <Route path="/who-we-are/testimonials" element={<TestimonialsPage />} />
          <Route path="/who-we-are/faculty" element={<FacultyPage />} />
          <Route path="/who-we-are/faqs" element={<FaqPage />} />

          <Route path="/activities" element={<Navigate to="/activities/gallery" replace />} />
          <Route path="/activities/gallery" element={<GalleryPage />} />
          <Route path="/activities/gallery/:slug" element={<GalleryDetailPage />} />
          <Route path="/activities/events" element={<EventsPage />} />
          <Route path="/activities/events/archive" element={<EventsArchivePage />} />
          <Route path="/activities/events/:slug" element={<EventDetailPage />} />

          <Route path="/academics" element={<AcademicsPage />} />
          <Route path="/admissions" element={<AdmissionsPage />} />

          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/archive" element={<NewsArchivePage />} />
          <Route path="/news/:slug" element={<NewsDetailPage />} />

          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/maintenance" element={<MaintenancePage />} />
          <Route path="/announcements/featured" element={<AnnouncementPage />} />

          <Route path="/about" element={<Navigate to="/who-we-are/about-us" replace />} />
          <Route path="/gallery" element={<Navigate to="/activities/gallery" replace />} />
          <Route path="/contact" element={<Navigate to="/contact-us" replace />} />
          <Route path="/login" element={<Navigate to="/" replace />} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
