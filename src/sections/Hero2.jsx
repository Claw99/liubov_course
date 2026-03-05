export const Hero2 = () => {
  return (
    /* Фиксируем высоту намертво на весь экран */
    <section className="relative h-[100svh] w-full overflow-hidden bg-background">
      {/* КОНТЕЙНЕР ФОТО */}
      <div className="absolute inset-0 z-0">
        <img
          src="/pic3.JPG"
          alt="Любовь Калиновская"
          /* object-cover: заполнит весь экран.
             object-top: заставит камеру "держаться" за верхнюю часть фото (голову),
             а лишние бока или низ аккуратно подрежет под экран конкретного телефона.
          */
          className="w-full h-full object-cover object-top"
        />
        {/* Оверлей для глубины: темный низ и легкий градиент слева */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
      </div>

      {/* ИМЯ (Всегда сверху) */}
      <div className="absolute top-10 left-0 w-full z-20 flex justify-center px-4 text-center">
        <h1 className="font-advent text-4xl sm:text-6xl md:text-7xl uppercase tracking-[0.1em] leading-tight bg-gradient-to-tr from-[#8a6d3b] via-[#f7f3e8] to-[#c5a059] bg-clip-text text-transparent drop-shadow-[0_3px_6px_rgba(0,0,0,0.5)] font-bold">
          Любовь <br></br> Калиновская
        </h1>
      </div>

      {/* КОЛОНКА ТЕКСТА (Привязана к низу, чтобы не плавать) */}
      <div className="absolute bottom-20 left-0 w-full z-20 flex flex-col items-start px-8 md:px-20">
        {[
          "Трансформационный ментор",
          "Расстановщик",
          "Энерготерапевт",
          "Мастер по работе с подсознанием",
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-start group">
            <p
              className="
          mt-2 font-fira text-white/90
          text-xl md:text-3xl
          drop-shadow-md
          tracking-wide
          py-1
        "
            >
              {item}
            </p>

            <div
              className="
          w-32 md:w-48
          h-[1px]
          bg-gradient-to-r from-[#c5a059] via-[#c5a059]/50 to-transparent
          opacity-60
          mb-2
        "
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 z-10 pointer-events-none" />
    </section>
  );
};
