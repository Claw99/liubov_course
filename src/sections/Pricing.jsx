import React from "react";

const plans = [
  {
    name: "Программа обучения",
    price: "111",
    description: "",
    features: [
      "7 видеоуроков в записи",
      "3 бонусных видеоматериала",
      "Доступ к групповой трансформационной сессии",
      "Членство в закрытом чате участников",
      "Доступ к материалам 3 месяца после старта курса",
    ],
  },
];

export const Pricing = () => {
  return (
    <section
      id="pricing"
      // Изменили py-20 на pt-0 pb-20, чтобы секция начиналась вплотную к предыдущей
      className="relative pt-0 pb-20 px-5 overflow-hidden bg-[#1a1612]"
    >
      <div className="absolute inset-0 bg-black/20 pointer-events-none z-0" />

      <div className="max-w-xl mx-auto flex flex-col gap-8 relative z-10">
        {/* Заголовок секции (без верхнего отступа) */}
        <div className="text-center pt-0 mt-0">
          <h3 className="bg-gradient-to-tr from-[#8a6d3b] via-[#f7f3e8] to-[#c5a059] bg-clip-text text-transparent drop-shadow-[0_3px_6px_rgba(0,0,0,0.5)] font-bold text-3xl uppercase tracking-[0.2em] leading-tight">
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
                {/* Название тарифа */}
                <h4 className="bg-gradient-to-bl from-[#8a6d3b] via-[#f7f3e8] to-[#c5a059] bg-clip-text text-transparent drop-shadow-[0_3px_6px_rgba(0,0,0,0.5)] text-2xl font-bold uppercase tracking-[0.2em] mb-2 leading-tight">
                  Тариф <br /> "Базовый"
                </h4>

                <p className="font-fira text-white/60 text-sm tracking-widest mb-8 drop-shadow-[0_3px_6px_rgba(0,0,0,0.5)]">
                  {plan.description}
                </p>

                {/* Список преимуществ */}
                <ul className="w-full space-y-6 mb-12">
                  {plan.features.map((feature, fKey) => (
                    <li key={fKey} className="flex flex-col items-center gap-3">
                      <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#c5a059] to-transparent opacity-90" />
                      <span className="font-fira text-white/90 text-md md:text-base tracking-wide leading-relaxed drop-shadow-[0_3px_6px_rgba(0,0,0,0.5)]">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Цена */}
                <div className="text-6xl font-advent text-white mb-2 flex items-start justify-center drop-shadow-[0_3px_6px_rgba(0,0,0,0.5)]">
                  <span className="drop-shadow-[0_0_15px_rgba(197,160,89,0.3)]">
                    {plan.price}
                  </span>
                  <span className="text-2xl mt-6.5 mx-2 mr-1 text-[#c5a059]">
                    евро
                  </span>
                </div>

                {/* Полупрозрачный текст со звездочкой */}
                <p className="text-center text-white/40 font-fira text-xs md:text-sm uppercase tracking-widest mb-8">
                  * стоимость первого потока
                </p>

                {/* Кнопка — ведет на твой ТГ */}
                <a
                  href="https://t.me/lkalin2323"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
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
                    <span className="relative z-10 text-[#1a1612] font-bold uppercase tracking-[0.2em] text-sm drop-shadow-[0_1px_2px_rgba(255,255,255,0.3)]">
                      Занять место
                    </span>
                  </button>
                </a>
              </div>

              {/* Световые эффекты внутри карточки */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-100 pointer-events-none" />
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#c5a059]/10 blur-[80px] rounded-full pointer-events-none" />
            </div>
          </div>
        ))}

        {/* Финальная подпись */}
        <p className="text-center text-white/50 font-fira text-xs tracking-[0.2em] uppercase drop-shadow-[0_3px_6px_rgba(0,0,0,0.5)] mt-4">
          * Старт в апреле, количество мест ограничено
        </p>
      </div>
    </section>
  );
};
