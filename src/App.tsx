
import EditorialHero from './components/sections/Hero/EditorialHero';
import AboutUs from './components/sections/About/AboutUs';
import Services from './components/sections/Services/Services';
import Works from './components/sections/Works/Works';
import Feedback from './components/sections/Feedback/Feedback';
import Contact from './components/sections/Contact/Contact';
import Footer from './components/sections/Footer/Footer';

function App() {
  return (
    <main className="min-h-screen w-full bg-[#Fdfbf7]">
      <EditorialHero />
      <AboutUs />
      <Services />
      <Works />
      <Feedback />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
