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
    <section id="pricing" className="bg-background py-20">
      <div className="">
        {/* Заголовок секции */}
        <div className="text-center mb-16">
          <h2 className="font-poiret text-accent-peony text-4xl uppercase tracking-[0.3em]">
            Тарифы
          </h2>
        </div>

        {/* Сетка тарифов */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-5 max-w-5xl mx-auto items-stretch">
          {plans.map((plan, key) => {
            const isPremium = plan.name === "Премиум";

            return (
              <div
                key={key}
                className={`rounded-xl p-8 flex flex-col h-full backdrop-blur-sm transition-all duration-500
            ${
              isPremium
                ? "border-[1px] border-primary shadow-[0_0_30px_rgba(107,27,26,0.3)] bg-white/60 scale-105 z-10"
                : "border border-primary/20 bg-white/40"
            }`}
              >
                {/* Шапка тарифа */}
                <div className="mb-10 text-center">
                  <h3
                    className={`font-poiret text-2xl uppercase drop-shadow-[0_1px_3px_rgba(197,160,89,0.5)] tracking-widest ${isPremium ? "text-accent-peony font-bold" : "text-foreground"}`}
                  >
                    {plan.name}
                  </h3>
                  <p className="font-fira text-sm text-foreground/60 mt-2 ">
                    {plan.description}
                  </p>
                  <div className="mt-4 text-4xl font-light text-accent-peony font-fira">
                    €{plan.price}
                  </div>
                </div>

                {/* Список возможностей с дивайдерами */}
                <ul className="flex-grow space-y-6">
                  {plan.features.map((feature, featureKey) => (
                    <li
                      key={featureKey}
                      className="flex flex-col items-center gap-2 text-center"
                    >
                      {/* Тонкая золотая полоска перед каждой фичей */}
                      <div className="w-8 h-[1px] bg-primary/40 "></div>

                      <span className="font-fira text-foreground/80 text-sm md:text-base leading-snug tracking-wide">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Кнопка */}
                <button
                  className={`mt-12 w-full py-4 rounded-lg border font-poiret uppercase tracking-widest transition-all
              ${
                isPremium
                  ? "bg-accent-peony text-background border-accent-peony hover:bg-foreground"
                  : "border-accent-peony text-accent-peony hover:bg-accent-peony hover:text-background"
              }`}
                >
                  Выбрать
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
