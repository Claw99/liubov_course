import { Heart, Key, Diamond } from "lucide-react";

export const About = () => {
  const points = [
    {
      // ИКОНКА 1: Сердце (проработка программ, отношения)
      icon: <Heart className="w-6 h-6 text-primary" />,
      title: "Четкая система инструментов",
      text: "которая позволяет удерживать внутренний ресурс на высоком уровне и материализовать накопленную энергию",
    },
    {
      // ИКОНКА 2: Ключ (открытие, доступ к подсознанию)
      icon: <Key className="w-6 h-6 text-primary" />,
      title: "Проработка",
      text: "Базовых женских программ в подсознании, которые фоново забирают энергию десятилетиями",
    },
    {
      // ИКОНКА 3: Бриллиант (ценность, чистота, результат)
      icon: <Diamond className="w-6 h-6 text-primary" />,
      title: "Если в твоей жизни",
      text: "нет желаемого или что-то идет не так - корень проблемы ищи в своем уровне энергии",
    },
  ];

  return (
    <section className="bg-background py-16 px-5 overflow-hidden">
      <div className="max-w-xl mx-auto flex flex-col gap-5">
        <div className="mb-6 text-center md:text-left">
          <h3 className="font-advent text-accent-peony text-2xl uppercase tracking-[0.3em]">
            ПРОЕКТ УПРАВЛЕНИЕ ЭНЕРГИЕЙ
          </h3>
          <div className="w-16 h-[1px] bg-primary/40 mx-auto md:mx-0 mt-2"></div>
        </div>

        {points.map((point, index) => (
          <div key={index} className="relative">
            {/* Основной контейнер "Чистое стекло" */}
            <div className="relative bg-white/5 backdrop-blur-[12px] border border-white/20 rounded-2xl p-5 overflow-hidden transition-all duration-500 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">
              <div className="flex flex-row items-center gap-5 relative z-10">
                {/* Иконка в контейнере */}
                {/* Квадратный контейнер для иконки — с инвертированным бликом */}
                <div
                  className="
    flex-shrink-0
    w-14 h-14
    rounded-xl
    bg-white/10
    border border-white/30
    flex items-center justify-center
    relative overflow-hidden /* Чтобы блик не вылезал за границы */
    shadow-[0_2px_10px_rgba(0,0,0,0.1)] /* Легкая тень, чтобы отделить от фона */
"
                >
                  {/* ВНУТРЕННИЙ БЛИК: Теперь идет снизу вверх (from-bottom-right) */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-white/30 opacity-100" />

                  {/* Дополнительный верхний акцент для объема, но очень тонкий */}
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-white/20" />

                  {/* Сама иконка — ставим z-10, чтобы она была над бликом */}
                  <div className="relative z-10">{point.icon}</div>
                </div>

                {/* Текстовый блок */}
                <div className="flex flex-col gap-1">
                  {/* ЗАГОЛОВОК: Теперь в золотом цвете (primary) */}
                  <h4 className="font-advent text-xl uppercase  tracking-[0.1em] text-primary font-normal">
                    {point.title}
                  </h4>

                  {/* ОПИСАНИЕ: Теперь в цвете слоновой кости (background) с легкой прозрачностью */}
                  <p className="font-advent  text-[16px] leading-relaxed sm:text-sm text-white/80  leading-[1.8] tracking-wide">
                    {point.text}
                  </p>
                </div>
              </div>

              {/* Белый стеклянный блик (из прошлого шага) */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-100 pointer-events-none" />

              {/* Мягкое золотистое свечение в углу для поддержки цвета заголовка */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/10 blur-[40px] rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
