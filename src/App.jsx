import { Navbar } from "@/layout/Navbar";
import { Hero1 } from "@/sections/Hero1";
import { Hero2 } from "@/sections/Hero2";
import { About } from "@/sections/About";
import { Pricing } from "@/sections/Pricing";
import { Roadmap } from "./sections/Roadmap";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Pricing />
      <Hero1 />
      <Roadmap />
      <About />
      <Hero2 />
      <main></main>
    </div>
  );
}

export default App;
