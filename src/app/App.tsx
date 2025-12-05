import { useEffect, useState } from 'react';
import HomePage from '../pages/home/ui/HomePage';
import AboutPage from '../pages/about/ui/AboutPage';
import ProgramsPage from '../pages/programs/ui/ProgramsPage';
import AdmissionPage from '../pages/admission/ui/AdmissionPage';
import TourPage from '../pages/tour/ui/TourPage';
import InternationalPage from '../pages/international/ui/InternationalPage';
import ComparisonPage from '../pages/comparison/ui/ComparisonPage';
import CatalogPage from '../pages/catalog/ui/CatalogPage';
import DetailWrapper from '../widgets/detail-wrapper/ui/DetailWrapper';
import { navLinks } from '../shared/config/constants';
import { featureCards } from '../pages/home/model/features';
import { universities } from '../entities/university/model/universities';

const App = () => {
  const [activeView, setActiveView] = useState<string | number>('home');
  const [pendingScroll, setPendingScroll] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (activeView === 'home' && pendingScroll) {
      const el = document.getElementById(pendingScroll);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      setPendingScroll(null);
    }
  }, [activeView, pendingScroll]);

  const goToSection = (id: string) => {
    if (activeView !== 'home') {
      setPendingScroll(id);
      setActiveView('home');
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const backToHome = () => setActiveView('home');

  const renderContent = () => {
    switch (activeView) {
      case 'home':
        return (
          <HomePage
            navLinks={navLinks}
            features={featureCards}
            universities={universities}
            scrolled={scrolled}
            onScrollTo={goToSection}
            onSelectView={setActiveView}
          />
        );
      case 'catalog':
        return <CatalogPage universities={universities} onSelectView={setActiveView} onBack={backToHome} />;
      case 1:
        return (
          <DetailWrapper title="About the university" onBack={backToHome}>
            <AboutPage />
          </DetailWrapper>
        );
      case 2:
        return (
          <DetailWrapper title="Programs" onBack={backToHome}>
            <ProgramsPage />
          </DetailWrapper>
        );
      case 3:
        return (
          <DetailWrapper title="Admissions timeline" onBack={backToHome}>
            <AdmissionPage />
          </DetailWrapper>
        );
      case 4:
        return (
          <DetailWrapper title="3D campus tour" onBack={backToHome}>
            <TourPage />
          </DetailWrapper>
        );
      case 5:
        return (
          <DetailWrapper title="International opportunities" onBack={backToHome}>
            <InternationalPage />
          </DetailWrapper>
        );
      case 6:
        return (
          <DetailWrapper title="University comparison" onBack={backToHome}>
            <ComparisonPage />
          </DetailWrapper>
        );
      default:
        return <HomePage navLinks={navLinks} features={featureCards} universities={universities} scrolled={scrolled} onScrollTo={goToSection} onSelectView={setActiveView} />;
    }
  };

  return <div className="font-sans">{renderContent()}</div>;
};

export default App;
