import { Check, Flower } from "lucide-react";

const plans = [
  {
    name: "Базовый",
    price: "499",
    description: "Погружение в основы управления энергией",
    features: [
      "Модуль 1: Энергоаудит",
      "Модуль 2: Работа с телом",
      "Доступ в закрытый чат",
      "Рабочая тетрадь в PDF",
    ],
  },
  {
    name: "Премиум",
    price: "999",
    description: "Полная трансформация и личное сопровождение",
    features: [
      "Все модули курса",
      "4 личные сессии",
      "Индивидуальный план питания",
      "Бессрочный доступ к материалам",
      "Сертификат о прохождении",
    ],
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="bg-background py-20 px-5">
      <div className="max-w-6xl mx-auto">
        {/* Заголовок секции */}
        <div className="text-center mb-16">
          <h2 className="font-advent text-accent-peony text-4xl uppercase tracking-[0.3em]">
            Тарифы
          </h2>
          <div className="w-16 h-[1px] bg-primary/40 mx-auto mt-4"></div>
        </div>

        {/* Сетка тарифов */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto items-stretch">
          {plans.map((plan, key) => {
            const isPremium = plan.name === "Премиум";

            return (
              <div
                key={key}
                className={`relative flex flex-col h-full rounded-2xl p-8 overflow-hidden transition-all duration-700
            /* ПРИМЕНЯЕМ ЭФФЕКТ СТЕКЛА ВМЕСТО СТАРЫХ ЦВЕТОВ */
            bg-white/5 backdrop-blur-[12px] border transition-all duration-500
            shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]
            ${
              isPremium
                ? "border-primary/80  border-2 scale-105 z-10 shadow-[0_20px_50px_rgba(197,160,89,0.15)]"
                : "border-white/30 border-2"
            }`}
              >
                {/* ТОТ САМЫЙ БЛИК: теперь внутри карточек тарифов */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-100 pointer-events-none" />

                {/* Содержимое (z-10 чтобы быть над бликом) */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Шапка тарифа */}
                  <div className="mb-10 text-center">
                    <h3
                      className={`font-advent text-3xl uppercase tracking-[0.2em] drop-shadow-sm ${
                        /* Если Премиум — золото, если Базовый — яркая слоновая кость */
                        isPremium
                          ? "text-primary font-bold"
                          : "text-white font-medium opacity-100"
                      }`}
                    >
                      {plan.name}
                    </h3>
                    <p className="font-fira text-sm text-gray-300 mt-3 leading-relaxed">
                      {plan.description}
                    </p>
                    <div className="mt-6 text-5xl font-light text-primary font-advent">
                      €{plan.price}
                    </div>
                  </div>

                  {/* Список возможностей */}
                  <ul className="flex-grow space-y-6">
                    {plan.features.map((feature, featureKey) => (
                      <li
                        key={featureKey}
                        className="flex flex-col items-center gap-3 text-center"
                      >
                        <div className="w-8 h-[1px] bg-primary/30"></div>
                        <span className="font-fira text-white/90 text-sm md:text-base leading-[1.6] tracking-wide">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Кнопка */}
                  <button
                    className={`mt-12 w-full py-5 rounded-sm font-advent uppercase tracking-[0.2em] text-sm transition-all  border border-primary text-primary hover:bg-primary/10 duration-500
               `}
                  >
                    Выбрать программу
                  </button>
                </div>

                {/* Мягкое свечение внизу для Премиума */}
                {isPremium && (
                  <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/10 blur-[80px] rounded-full pointer-events-none" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
