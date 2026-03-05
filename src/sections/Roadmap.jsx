export const Roadmap = () => {
  const steps = [
    {
      id: 1,
      title: "Финансовый объем и способность выдерживать масштаб",
      desc: "",
      top: "20%",
      left: "50%",
    },
    {
      id: 2,
      title: "Качество отношений с партнером, семьей, миром",
      desc: "те сценарии, которые ты бессознательно повторяешь",
      top: "38%",
      left: "48%",
    },
    {
      id: 3,
      title: "Состояние тела",
      desc: "твой ресурс, либидо, гормональный фон, усталость или устойчивость",
      top: "57%",
      left: "52%",
    },
    {
      id: 4,
      title: "Яркость, наполненность и вкус жизни",
      desc: "ощущение, что ты живешь по-настоящему, а не на автопилоте",
      top: "78%",
      left: "50%",
    },
  ];

  return (
    <section className="relative min-h-screen w-full bg-[#1a1612] overflow-hidden flex flex-col pb-20">
      {/* 1. МОНОЛИТНЫЙ БЛОК ТЕКСТА */}
      <div className="relative z-20 w-full pt-10 px-4 text-center">
        <div className="flex flex-col gap-4 md:gap-6">
          <div>
            <h1 className="font-fira text-white/90 text-lg md:text-2xl drop-shadow-md tracking-tight leading-relaxed max-w-4xl mx-auto">
              все идеи, проекты, цели — это не просто фантазии{" "}
              <br className="hidden md:block" />
              это сигналы твоего истинного масштаба{" "}
              <br className="hidden md:block" />
              но до реализации доходят единицы
            </h1>
            <h1 className="mt-4 font-fira text-white/90 text-xl md:text-3xl drop-shadow-md tracking-tight">
              Не потому что они умнее...
            </h1>
          </div>

          <div className="pt-2 md:pt-4">
            <h2 className="bg-gradient-to-tr from-[#8a6d3b] via-[#f7f3e8] to-[#c5a059] bg-clip-text text-transparent text-2xl md:text-4xl font-bold uppercase tracking-[0.1em] leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] max-w-2xl mx-auto">
              Уровень твоей энергии формирует реальность
            </h2>
          </div>
        </div>
      </div>

      {/* 2. ГЛАВНЫЙ МОНОЛИТ (Змея + Шаги) — МАКСИМАЛЬНЫЙ РАЗМЕР */}
      <div
        className="relative flex-grow flex justify-center items-start
           mt-0 /* Дырка полностью ликвидирована */
           px-0 md:px-2"
      >
        <div
          className="relative w-full
             max-w-[640px] md:max-w-[1260px] /* ПРЕДЕЛЬНЫЙ МАСШТАБ */
             aspect-[4/6] md:aspect-[16/10]
             scale-[1.2] md:scale-[1.25] /* ЗМЕЯ НА ВЕСЬ ЭКРАН */"
        >
          {/* ЗМЕЯ */}
          <img
            src="/Snake3.svg"
            alt="Roadmap Line"
            className="absolute inset-0 w-full h-full object-contain opacity-60 select-none pointer-events-none"
          />

          {/* ТОЧКИ */}
          <div className="absolute inset-0 z-10">
            {steps.map((step) => (
              <div
                key={step.id}
                style={{
                  top: step.top,
                  left: step.left,
                }}
                className="
                  absolute -translate-x-1/2 -translate-y-1/2
                  w-[320px] md:w-[400px] /* Текст стал шире под стать змее */
                  text-center
                "
              >
                <h3 className="bg-gradient-to-tr from-[#8a6d3b] via-[#f7f3e8] to-[#c5a059] bg-clip-text font-bold text-transparent text-xl md:text-3xl font-advent italic leading-tight mb-2 drop-shadow-[0_4px_8px_rgba(0,0,0,1)]">
                  {step.title}
                </h3>

                {step.desc && (
                  <p className="text-white font-fira font-normal text-sm md:text-lg leading-snug drop-shadow-[0_2px_4px_rgba(0,0,0,1)] px-4">
                    {step.desc}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
