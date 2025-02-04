import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Contact from '../components/Contact';
import ServicesPreview from '../components/ServicesPreview';
import Counter from '../components/Counter';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      {/* <Services /> */}
      <ServicesPreview />
      <Counter />
      <Contact />
    </>
  );
}