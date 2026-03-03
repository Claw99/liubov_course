import { Navbar } from "@/layout/Navbar";
import { Hero1 } from "@/sections/Hero1";
import { Hero2 } from "@/sections/Hero2";
import { About } from "@/sections/About";
import { Pricing } from "@/sections/Pricing";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Hero1 />
      <About />
      <Hero2 />
      <Pricing />
      <main></main>
    </div>
  );
}

export default App;
