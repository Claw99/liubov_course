import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { Hero1 } from "@/sections/Hero1";
import { About } from "@/sections/About";
import { Pricing } from "@/sections/Pricing";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Hero1 />
      <Pricing />
      <About />
      <main></main>
    </div>
  );
}

export default App;
