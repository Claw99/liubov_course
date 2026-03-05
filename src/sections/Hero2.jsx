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
          Любовь Калиновская
        </h1>
      </div>

      {/* КОЛОНКА ТЕКСТА (Привязана к низу, чтобы не плавать) */}
      <div className="absolute top-25 left-0 w-full z-20 flex flex-col items-start px-4 md:px-20">
        {[
          "Трансформационный ментор • расстановщик Мастер по работе с подсознанием",
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-start group">
            <p
              className="
          mt-0 font-fira text-white/90
          text-xl md:text-3xl
          drop-shadow-md
          tracking-wide
          py-1
        "
            >
              {item}
            </p>
          </div>
        ))}
      </div>

      <div className="absolute bottom-0 left-0 w-full z-20 px-4 md:px-20 pb-8 text-start">
        <p
          className="
 font-fira text-white
  text-xl

  tracking-normal
  max-w-2xl

  drop-shadow-[0_10px_20px_rgba(0,0,0,1)]
"
        >
          Я работаю на стыке психологии, <br></br> системных расстановок и
          глубинной работы <br></br> с программами и установками.
        </p>
        <br></br>
        <div className="w-64 h-[1px] bg-gradient-to-r from-transparent via-[#c5a059] to-transparent opacity-60 mt-0 mx-auto" />
        <p
          className="
 font-fira text-white
  text-xl

  tracking-normal
  max-w-2xl

  drop-shadow-[0_10px_20px_rgba(0,0,0,1)]
"
        >
          Моя задача - не мотивировать тебя, а помочь <br></br> перестроить
          внутреннюю систему так, чтобы результат стал естественным следствием.
        </p>
      </div>

      <div className="absolute inset-0 z-10 pointer-events-none" />
    </section>
  );
};
