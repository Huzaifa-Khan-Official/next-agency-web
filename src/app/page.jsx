import HomeComponent from "./Components/Home/HomeComponent";
import NavbarComponent from "./Components/Navbar/NavbarComponent";

export default function Home() {
  return (
    <div className="dark text-foreground bg-background">
      <NavbarComponent />
      <HomeComponent />
    </div>
  );
}
