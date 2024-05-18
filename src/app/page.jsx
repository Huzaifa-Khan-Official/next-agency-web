import HomeComponent from "./Components/Home/HomeComponent";
import NavbarComponent from "./Components/Navbar/NavbarComponent";
import Projects from "./Components/Projects/Projects";

export default function Home() {
  return (
    <div className="dark text-foreground bg-background">
      <NavbarComponent />
      <HomeComponent />
      <Projects />
    </div>
  );
}
