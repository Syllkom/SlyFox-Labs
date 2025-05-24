
import TopBar from '@/components/TopBar';
import AboutSection from '@/components/AboutSection';
import FreactureSection from '@/components/FreactureSection';
import ResourcesSection from '@/components/ResourcesSection';
import ContactSection from '@/components/ContactSection'; 
import BottomNav from '@/components/BottomNav';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <TopBar />
      <main className="flex-1 overflow-y-auto pt-16 pb-[56px]"> 
        <AboutSection />
        <FreactureSection />
        <ResourcesSection />
        <ContactSection /> 
      </main>
      <BottomNav />
    </div>
  );
}
