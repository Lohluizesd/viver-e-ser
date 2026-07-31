import FloatingWpp from "./components/FloatingWpp";
import About from "./sections/About";
import AboutMe from "./sections/AboutMe";
import Hero from "./sections/Hero";
import InstagramSection from "./sections/InstagramSection";
import Services from "./sections/Services";

function App() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Services />
        <AboutMe />
        <InstagramSection />
      </main>

      <FloatingWpp />
    </>
  );
}

export default App;
