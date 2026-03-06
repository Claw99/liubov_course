export const Hero1 = () => {
  return (
    /* Фиксируем высоту секции */
    <section className="relative h-[100svh] w-full overflow-hidden bg-background">
      {/* ФОН (Зафиксированный) */}
      <div className="absolute inset-0 z-0">
        <img
          src="/pic2.png"
          alt="Любовь Калиновская"
          /* h-full + object-cover + object-top гарантируют стабильность головы в кадре */
          className="w-full h-full object-cover object-top"
        />
        {/* Затемнение для читаемости текста (опционально) */}
        {/* <div className="absolute inset-0 bg-black/10" /> */}
      </div>

      {/* ИМЯ (Сверху) */}
      <div className="absolute top-10 left-0 w-full z-20 text-center px-4">
        <p className="font-vibes italic text-3xl text-white drop-shadow-[0_3px_6px_rgba(0,0,0,1)] opacity-90">
          Любовь Калиновская
        </p>
      </div>

      {/* КОНТЕНТ (Смещен на 10% ниже геометрического центра) */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center px-6 text-center transform translate-y-[5vh]">
        <h2
          className="
    font-advent text-[2.6rem] xs:text-5xl sm:text-6xl md:text-7xl uppercase
    tracking-[0.05em] leading-tight
    bg-gradient-to-tr from-[#8a6d3b] via-[#f7f3e8] to-[#c5a059]
    bg-clip-text text-transparent
    drop-shadow-[0_3px_6px_rgba(0,0,0,1)] font-bold
    whitespace-nowrap
  "
        >
          Наполнение <br></br> энергией
        </h2>

        <p
          className="
    mt-6 md:mt-8 font-fira text-white
    text-[clamp(1.1rem,3vw,2.2rem)]
    tracking-tight
    max-w-2xl
    mx-auto /* Центрируем, раз текст-центр выше */
    leading-relaxed
    /* Сбалансированная тень: чуть больше размытия для мягкости и глубины */
    drop-shadow-[0_4px_12px_rgba(0,0,0,1)]
  "
        >
          Самый важный навык в мире, <br className="hidden md:block" /> который
          останется с тобой на всю жизнь
        </p>
      </div>

      {/* КНОПКА (Привязана к низу) */}
      <div className="absolute bottom-10 left-0 w-full z-20 flex justify-center">
        <a
          href="#tariffs"
          className="group relative px-10 py-2 flex flex-col items-center justify-center transition-all duration-500 active:scale-95"
        >
          {/* Основной корпус кнопки (Золотая призма) */}
          <div
            className="
              absolute inset-0
              rounded-full
              border border-white/30
              bg-gradient-to-tr from-[#8a6d3b]/20 via-[#f7f3e8]/40 to-[#c5a059]/20
              backdrop-blur-md
              shadow-[inset_0_1px_2px_rgba(255,255,255,0.4),0_10px_20px_rgba(0,0,0,0.2)]
              group-hover:shadow-[0_0_25px_rgba(197,160,89,0.3)]
              group-hover:border-white/50
              transition-all duration-500
            "
          />

          {/* Текст внутри */}
          <p
            className="
              relative z-10
              font-fira font-normal text-white
              text-lg uppercase
              tracking-[0.1em]
              group-hover:tracking-[0.5em]
              drop-shadow-[0_3px_6px_rgba(0,0,0,1)]
              transition-all duration-500
            "
          >
            ЗАНЯТЬ МЕСТО
          </p>
        </a>
      </div>

      {/* НИЖНЯЯ ПОЛОСКА СВЕЧЕНИЯ */}
      <div
        className="
          absolute
          bottom-0
          left-0
          w-full
          h-5
          bg-gradient-to-r from-transparent via-[#c5a059] to-transparent
          [mask-image:linear-gradient(to_bottom,transparent,black_70%,transparent)]
          shadow-[0_-5px_20px_5px_rgba(197,160,89,0.3)]
          opacity-30
          pointer-events-none
        "
      />
    </section>
  );
};
