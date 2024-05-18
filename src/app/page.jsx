import NavbarComponent from "./Components/Navbar/NavbarComponent";

export default function Home() {
  return (
    <div>
      <NavbarComponent />
      <div className="px-3 py-2">
        <h1>Welcome</h1>
        <h3>To my website</h3>
      </div>
    </div>
  );
}
