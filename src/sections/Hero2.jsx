export const Hero2 = () => {
  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-background">
      {/* КОНТЕЙНЕР ФОТО */}
      <div className="absolute inset-0 z-0">
        <img
          src="/pic3.JPG"
          alt="Любовь Калиновская"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />
      </div>

      {/* ВЕРХНИЙ БЛОК: ИМЯ + РЕГАЛИИ (Фиксированы сверху) */}
      <div className="absolute top-10 left-0 w-full z-20 flex flex-col items-center px-4 text-center">
        <h1 className="font-advent text-4xl sm:text-6xl md:text-7xl uppercase tracking-[0.1em] leading-tight bg-gradient-to-tr from-[#8a6d3b] via-[#f7f3e8] to-[#c5a059] bg-clip-text text-transparent drop-shadow-[0_3px_6px_rgba(0,0,0,0.5)] font-bold">
          Любовь Калиновская
        </h1>

        {/* Регалии сразу под именем */}
        <p className="mt-4 font-fira text-white/90 text-lg md:text-2xl max-w-2xl tracking-wide drop-shadow-md uppercase opacity-80">
          Трансформационный ментор • расстановщик <br />
          Мастер по работе с подсознанием
        </p>
      </div>

      {/* НИЖНИЙ БЛОК: ОПИСАНИЕ (Привязан к низу) */}
      <div className="absolute bottom-10 left-0 w-full z-20 px-6 md:px-20 flex flex-col items-center text-center">
        {/* Текст 1 */}
        <p className="font-fira text-white text-base md:text-xl tracking-normal max-w-3xl drop-shadow-[0_4px_8px_rgba(0,0,0,1)] leading-relaxed">
          Я работаю на стыке психологии, системных расстановок и{" "}
          <br className="hidden md:block" />
          глубинной работы с программами и установками.
        </p>

        {/* Золотой дивайдер */}
        <div className="w-48 md:w-64 h-[1px] bg-gradient-to-r from-transparent via-[#c5a059] to-transparent opacity-60 my-6" />

        {/* Текст 2 */}
        <p className="font-fira text-white text-base md:text-xl tracking-normal max-w-3xl drop-shadow-[0_4px_8px_rgba(0,0,0,1)] leading-relaxed">
          Моя задача — не мотивировать тебя, а помочь перестроить{" "}
          <br className="hidden md:block" />
          внутреннюю систему так, чтобы результат стал естественным следствием.
        </p>
      </div>

      <div className="absolute inset-0 z-10 pointer-events-none" />
    </section>
  );
};
