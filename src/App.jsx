import './App.css'
import CompanyLogo from './components/CompanyLogo';
import FeatureSection from './components/FeatureSection';
import Hero from './components/Hero'
import MonitorSection from './components/MonitorSection';
import Navbar from './components/Navbar'
import PricingSection from './components/PricingSection';
import PurposeSection from './components/PurposeSection';
import ScheduleSection from './components/ScheduleSection';

function App() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div className="absolute -top-20 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-full blur-[88px] -z-10"></div>
      <div className="overflow-hidden">
        <Navbar />
        <Hero />
        <CompanyLogo/>
        <PurposeSection/>
        <FeatureSection/>
        <ScheduleSection/>
        <MonitorSection/>
        <PricingSection/>
      </div>
    </main>
  );
}

export default App
