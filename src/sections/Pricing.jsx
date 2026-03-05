import React from "react";

const plans = [
  {
    name: "Программа обучения",
    price: "111",
    description: "",
    features: [
      "7 видеоуроков в записи",
      "3 бонусных видеоматериала",
      "Доступ к груповой трансформационной сессии",
      "Членство в закрытом чате участников",
      "Доступ к материалам 3 месяца после старта курса ",
    ],
  },
];

export const Pricing = () => {
  return (
    <section
      id="pricing"
      className="relative bg-[#1a1612] py-20 px-5 overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(26, 22, 18, 0.45), rgba(26, 22, 18, 0.45)), url('/pricebg.PNG')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="max-w-xl mx-auto flex flex-col gap-8">
        {/* Заголовок секции */}
        <div className="text-center">
          <h3 className="bg-gradient-to-tr from-[#8a6d3b] via-[#f7f3e8] to-[#c5a059] bg-clip-text text-transparent drop-shadow-[0_3px_6px_rgba(0,0,0,0.5)] font-bold text-3xl uppercase tracking-[0.2em]">
            Стоимость участия
          </h3>
          <div className="w-64 h-[1px] bg-gradient-to-r from-transparent via-[#c5a059] to-transparent opacity-60 mt-5 mx-auto" />
        </div>

        {plans.map((plan, index) => (
          <div key={index} className="relative">
            <div
              className="
              relative
              bg-white/5
              backdrop-blur-[12px]
              border border-white/20
              rounded-3xl
              p-8 md:p-12
              overflow-hidden
              shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]
            "
            >
              <div className="relative z-10 flex flex-col items-center text-center">
                {/* Название */}
                <h4 className="bg-gradient-to-bl from-[#8a6d3b] via-[#f7f3e8] to-[#c5a059] bg-clip-text text-transparent drop-shadow-[0_3px_6px_rgba(0,0,0,0.5)] text-2xl font-bold uppercase tracking-[0.2em] mb-2">
                  Тариф <br></br> "Базовый"
                </h4>

                <p className="font-fira text-white/60 text-sm tracking-widest mb-8 drop-shadow-[0_3px_6px_rgba(0,0,0,0.5)]">
                  {plan.description}
                </p>

                {/* Цена */}
                <div className="text-6xl font-advent text-white mb-10 flex items-start justify-center drop-shadow-[0_3px_6px_rgba(0,0,0,0.5)]">
                  <span className="drop-shadow-[0_0_15px_rgba(197,160,89,0.3)]">
                    {plan.price}
                  </span>
                  <span className="text-2xl mt-6.5 mx-2 mr-1 text-[#c5a059]">
                    евро
                  </span>
                </div>

                {/* Список фич */}
                <ul className="w-full space-y-6 mb-12">
                  {plan.features.map((feature, fKey) => (
                    <li key={fKey} className="flex flex-col items-center gap-3">
                      <div className="w-8 h-[1px] bg-gradient-to-r from-transparent via-[#c5a059] to-transparent opacity-40" />
                      <span className="font-fira text-white/80 text-sm md:text-base tracking-wide leading-relaxed drop-shadow-[0_3px_6px_rgba(0,0,0,0.5)]">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Кнопка */}
                <button
                  className="
                  group relative
                  w-full py-5
                  rounded-xl
                  overflow-hidden
                  transition-all duration-500
                "
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#8a6d3b] via-[#f7f3e8] to-[#c5a059] transition-transform duration-500 group-hover:scale-105" />
                  <span className="relative z-10 text-[#1a1612] font-bold uppercase tracking-[0.2em] text-sm drop-shadow-[0_3px_6px_rgba(0,0,0,0.3)]">
                    Занять место в потоке
                  </span>
                </button>
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-100 pointer-events-none" />
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#c5a059]/10 blur-[80px] rounded-full pointer-events-none" />
            </div>
          </div>
        ))}

        {/* Подпись под тарифом */}
        <p className="text-center text-white/30 font-fira text-xs tracking-[0.2em] uppercase drop-shadow-[0_3px_6px_rgba(0,0,0,0.5)]">
          * Старт в апреле, количество мест ограничено
        </p>
      </div>
    </section>
  );
};
