import Footer from "./Components/Footer/Footer";
import HomeComponent from "./Components/Home/HomeComponent";
import NavbarComponent from "./Components/Navbar/NavbarComponent";
import Projects from "./Components/Projects/Projects";
import Services from "./Components/Services/Services";
import Testimonials from './Components/Testimonials/Testimonials'

export default function Home() {
  return (
    <div className="dark text-foreground bg-background">
      <NavbarComponent />
      <HomeComponent />
      <Projects />
      <Services />
      <Testimonials />
      <Footer />
    </div>
  );
}
