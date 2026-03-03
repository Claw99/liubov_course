export const Hero2 = () => {
  return (
    <section className="relative w-full overflow-hidden bg-background">
      {/* Контейнер для фото */}
      <div className="relative w-full leading-[0] overflow-hidden">
        <img
          src="/pic4.PNG"
          alt="Любовь Калиновская"
          className="w-full h-auto block object-contain"
        />
        {/* Легкое затемнение слева для читаемости текста */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent" />
      </div>

      {/* ИМЯ (Центр верх) */}
      <div className="absolute top-2 left-0 w-full z-20 flex justify-center px-4 text-center">
        <h1 className="font-advent text-4xl sm:text-6xl md:text-7xl uppercase tracking-[0.3em] leading-tight bg-gradient-to-tr from-[#8a6d3b] via-[#f7f3e8] to-[#c5a059] bg-clip-text text-transparent drop-shadow-[0_3px_6px_rgba(0,0,0,0.5)] font-bold">
          Любовь Калиновская
        </h1>
      </div>

      {/* КОЛОНКА ТЕКСТА (Слева ниже) */}
      <div className="absolute top-[70%] left-[3%] md:left-12 z-20 flex flex-col gap-4 ">
        <p className="font-advent italic text-3xl font-thin md:text-3xl text-white drop-shadow-sm tracking-wide">
          Мастер по работе с подсознанием
        </p>
        <p className="font-advent italic text-3xl font-thin md:text-3xl text-white drop-shadow-sm tracking-wide">
          Трансформационный ментор
        </p>
        <p className="font-advent italic text-3xl font-thin  md:text-3xl text-white drop-shadow-sm tracking-wide">
          Энерготерапевт
        </p>
        <p className="font-advent italic text-3xl font-thin md:text-3xl text-white drop-shadow-sm tracking-wide">
          Расстановщик
        </p>
      </div>

      <div className="absolute inset-0 z-10 pointer-events-none" />
    </section>
  );
};
