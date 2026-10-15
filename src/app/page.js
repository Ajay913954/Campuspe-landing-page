import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import MatchSection from './components/MatchSection';
import ResumeSection from './components/ResumeSection';
import CollegeSection from './components/CollegeSection';
import EmployerSection from './components/EmployerSection';
import AppSection from './components/AppSection';
import DownloadSection from './components/DownloadSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Partners />
      <MatchSection />
      <ResumeSection />
      <CollegeSection />
      <EmployerSection />
      <AppSection />
      <DownloadSection />
      <CTASection />
      <Footer />
    </main>
  );
}
