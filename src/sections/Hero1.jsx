export const Hero1 = () => {
  return (
    <section className="relative h-[100svh] w-full overflow-hidden">
      {/* Фон */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/pic2.png"
          alt="Любовь Калиновская"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Имя */}
      <div className="absolute top-10 left-0 w-full z-20 text-center px-4">
        <p className="font-vibes italic text-3xl text-foreground drop-shadow-sm">
          Любовь Калиновская
        </p>
      </div>

      {/* Контент */}
      <div className="relative z-10 h-full flex flex-col px-4 sm:px-6 md:px-8 max-w-4xl md:max-w-5xl justify-center items-center px-4 text-center">
        <h2
          className="font-advent font-normal  text-accent-peony
    text-[clamp(2.2rem,9vw,7rem)]
    uppercase
  tracking-[0.1em] md:tracking-[0.15em]
    leading-tight
    drop-shadow
    max-w-5xl

    translate-y-20
    break-words text-center"
        >
          <span className="whitespace-nowrap">Управление своей</span>
          <br />
          энергией
        </h2>
        <p
          className="mt-6 font-fira text-foreground
      text-[clamp(1rem,4vw,2.5rem)]
      tracking-[0.05em] md:tracking-[0.2em]
      drop-shadow
      translate-y-30
      max-w-3xl"
        >
          Самый важный навык в мире который останется с тобой на всю жизнь
        </p>
        <div className="absolute bottom-5 left-0 w-full z-20 text-center">
          <a
            href="#tariffs"
            className="group flex flex-col items-center gap-1 cursor-pointer transition-all duration-300"
          >
            <p className="font-poiret text-accent-peony text-lg md:text-xl uppercase tracking-[0.4em] opacity-80 group-hover:opacity-100 group-hover:tracking-[0.5em] transition-all">
              Перейти к тарифам
            </p>

            {/* Маленькая изящная стрелочка вниз */}
            <div className="w-px h-8 bg-accent-peony/50 group-hover:h-12 transition-all duration-500"></div>
          </a>
        </div>
      </div>
    </section>
  );
};
