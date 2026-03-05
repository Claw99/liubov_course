export const Roadmap = () => {
  const steps = [
    {
      id: 1,
      title: "Финансовый объем и способность выдерживать масштаб",
      desc: "сколько денег ты можешь не просто заработать а удержать",
      top: "20%", // Позиция по вертикали
      left: "50%", // Центр, но можешь менять (например 45% или 55%)
    },
    {
      id: 2,
      title: "Качество отношений с партнером семьей миром",
      desc: "те сценарии которые ты бессознательно повторяешь",
      top: "38%",
      left: "40%",
    },
    {
      id: 3,
      title: "Состояние тела",
      desc: "твой ресурс либидо гормональный фон усталость или устойчивость",
      top: "56%",
      left: "60%",
    },
    {
      id: 4,
      title: "Яркость наполненность и вкус жизни",
      desc: "ощущение что ты живешь по настоящему а не на автопилоте",
      top: "75%",
      left: "40%",
    },
  ];

  return (
    <section className="relative min-h-[100vh] w-full bg-[#1a1612] py-10 overflow-hidden">
      {/* 1. ФОН И ЗМЕЯ */}
      <div className="absolute inset-0 z-0">
        <img
          src="/Snake3.svg"
          alt="Roadmap Line"
          className="w-full h-full object-contain opacity-50"
        />
        {/* Затемнение краев */}
        <div className="absolute inset-0" />
      </div>

      {/* 2. КОНТЕЙНЕР ДЛЯ ТЕКСТА (Растянут так же как змея) */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {steps.map((step) => (
          <div
            key={step.id}
            style={{ top: step.top, left: step.left }}
            className="absolute -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-[320px] text-center"
          >
            {/* Большой и жирный текст */}
            <h3 className="bg-gradient-to-tr from-[#8a6d3b] via-[#f7f3e8] to-[#c5a059] bg-clip-text text-transparent text-lg  font-advent italic leading-tight mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              {step.title}
            </h3>

            {/* Текст поменьше и нормал */}
            <p className="text-white/90 text-sm font-normal leading-snug drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
              {step.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Заголовок секции */}
      <div className="relative z-20 text-center mb-10">
        <h2
          className="
  /* 1. ГРАДИЕНТ (Золото и Жемчуг) */
  bg-gradient-to-tr from-[#8a6d3b] via-[#f7f3e8] to-[#c5a059]
  bg-clip-text
  text-transparent

  /* 2. СТИЛЬ: Менее жирно, компактнее */
  text-2xl md:text-4xl
  font-bold
  uppercase
  tracking-[0.1em] /* Минимальный благородный отступ */
  leading-tight

  /* 3. АКЦЕНТЫ */
  drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]
  text-center
  max-w-2xl
  mx-auto
"
        >
          Уровень твоей энергии формирует твою реальность
        </h2>
      </div>
    </section>
  );
};
