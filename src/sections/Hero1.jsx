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
        {/* Затемнение для читаемости текста */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* ИМЯ (Сверху) */}
      <div className="absolute top-10 left-0 w-full z-20 text-center px-4">
        <p className="font-vibes italic text-3xl text-white drop-shadow-sm opacity-90">
          Любовь Калиновская
        </p>
      </div>

      {/* КОНТЕНТ (Центрированный строго по центру экрана) */}
      <div className="relative z-10 h-full w-full pt-40 flex flex-col justify-center items-center px-6 text-center">
        <h2
          className="
        font-advent text-5xl sm:text-1xl md:text-7xl uppercase tracking-[0.3em] leading-tight bg-gradient-to-tr from-[#8a6d3b] via-[#f7f3e8] to-[#c5a059] bg-clip-text text-transparent drop-shadow-[0_3px_6px_rgba(0,0,0,1)] font-bold
        "
        >
          Управление своей <br /> энергией
        </h2>

        <p
          className="
          mt-8 font-fira text-white/90

          text-[clamp(1rem,3vw,1.5rem)]
          tracking-wider
          max-w-2xl
          leading-relaxed
         drop-shadow-[0_3px_6px_rgba(0,0,0,1)]
        "
        >
          Самый важный навык в мире, <br /> который останется с тобой на всю
          жизнь
        </p>

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
    rounded-2xl
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
    tracking-[0.4em]
    group-hover:tracking-[0.5em]
     drop-shadow-[0_3px_6px_rgba(0,0,0,1)]
    transition-all duration-500
  "
            >
              тарифы
            </p>
          </a>
        </div>
        <div
          className="
    absolute
    bottom-0 /* Лежит на самом дне */
    left-0
    w-full
    /* 1. ВЫСОТА СВЕЧЕНИЯ */
    h-5 /* Около 20px, как ты и просил */

    /* 2. ГОРИЗОНТАЛЬНЫЙ ГРАДИЕНТ (Золото к центру) */
    bg-gradient-to-r from-transparent via-[#c5a059] to-transparent

    /* 3. ВЕРТИКАЛЬНЫЙ ГРАДИЕНТ (Свечение уходит в воздух) */
    /* Используем mask-image, чтобы растворить полоску по вертикали */
    [mask-image:linear-gradient(to_bottom,transparent,black_70%,transparent)]

    /* 4. ДОПОЛНИТЕЛЬНЫЙ ЭФФЕКТ СВЕЧЕНИЯ (Глоу) */
    /* Сильный блюр и яркий цвет создают мягкий ареол */
    shadow-[0_-5px_20px_5px_rgba(197,160,89,0.3)]

    /* Снижаем общую яркость, чтобы эффект был вуальным */
    opacity-30

    pointer-events-none /* Чтобы не мешала кликам */
  "
        />
      </div>
    </section>
  );
};
