import { Instagram, Send, Youtube } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedButton";
import { Button } from "../components/Button";

export const Hero = () => {
  return (
    <section className="relative min-h-screen  flex items-center overflow-hidden bg-gradient-to-b from-background via-primary/10 to-primary/20  ">
      {/* Content */}
      <div className="container mx-auto px-6 pt-10 pb-10 relative z-10 ">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* left column - text content */}
          <div className="space-y-10 ">
            <div className="animate-fade-in flex flex-col gap-4 ">
              <span className="inline-flex w-fit mx-auto lg:mx-0 items-center gap-3 px-6 py-2 rounded-xl bg-white/5 backdrop-blur-sm border border-white/30 shadow-sm">
                <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
                  Любовь
                </span>

                {/* Тот самый разделитель */}
                <span className="w-[1px] h-3 bg-primary/30" />

                <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
                  Калиновская
                </span>
              </span>
            </div>

            <div className="space-y-1 flex flex-col ">
              <div className="flex" />
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100 flex flex-col">
                <span className="flex items-baseline gap-3">
                  Управление
                  <span className="glow-text italic text-primary animation-fade-in  text-2xl md:text-3xl lg:text-4xl font-medium translate-y-7">
                    (Наполнение?)
                  </span>
                </span>

                <span className="font-normal glow-text">Энергией</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-secondary font-bold px-2">
                  Авторский курс
                </span>
              </h1>

              <p className="text-muted-foreground text-xl max-w-lg pt-6 animate-fade-in  animation-delay-300">
                Навык, определяющий качество твоей жизни. Навсегда
              </p>
            </div>
            {/* ctas */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button className="rounded-xl">Тарифы</Button>
              <AnimatedBorderButton>Гайд</AnimatedBorderButton>
            </div>
            {/* social links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              {[
                { icon: Instagram, href: "#" },
                { icon: Youtube, href: "#" },
                { icon: Send, href: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="rounded-full p-3 glass hover:bg-primary/20 hover:text-primary transition-all duration-300"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>
          {/* right column - image content */}
          <div className="relative animate-fade-in animation-delay-500">
            <div className="relative  mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl  animate-pulse" />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/pic1.JPG"
                  alt="Hero image"
                  className="rounded-2xl w-full aspect-[4/5] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
