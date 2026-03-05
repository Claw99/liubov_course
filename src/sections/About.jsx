import { Heart, Key, Diamond } from "lucide-react";

export const About = () => {
  const points = [
    {
      // ИКОНКА 0: Звезда (Star.svg)
      icon: (
        <div
          className="w-6 h-6 bg-[#2A2419]"
          style={{
            maskImage: "url('/icons/Star.svg')",
            WebkitMaskImage: "url('/icons/Star.svg')",
            maskRepeat: "no-repeat",
            maskPosition: "center",
            maskSize: "contain",
          }}
        />
      ),
      title: "Четкая система инструментов",
      text: "которая позволяет удерживать внутренний ресурс на высоком уровне и материализовать накопленную энергию",
    },
    {
      // ИКОНКА 1: Бриллиант (Diamond.svg)
      icon: (
        <div
          className="w-6 h-6 bg-[#2A2419]"
          style={{
            maskImage: "url('/icons/Diamond.svg')",
            WebkitMaskImage: "url('/icons/Diamond.svg')",
            maskRepeat: "no-repeat",
            maskPosition: "center",
            maskSize: "contain",
          }}
        />
      ),
      title: "Проработка",
      text: "Базовых женских программ в подсознании, которые фоново забирают энергию десятилетиями",
    },
    {
      // ИКОНКА 2: Ключ (Lucide Key или твой SVG)
      // Если у тебя есть Key.svg в папке icons, лучше сделай так же через maskImage
      icon: <Key className="w-6 h-6 text-[#2A2419]" />,
      title: "Если в твоей жизни",
      text: "нет желаемого или что-то идет не так - корень проблемы ищи в своем уровне энергии",
    },
  ];

  return (
    <section className="bg-[#1a1612] py-16 px-5 overflow-hidden">
      <div className="max-w-xl mx-auto flex flex-col gap-5">
        {/* Заголовок секции */}
        <div className="mb-2 text-center md:text-left">
          <h3 className=" bg-gradient-to-tr from-[#8a6d3b] via-[#f7f3e8] to-[#c5a059] bg-clip-text text-transparent drop-shadow-[0_3px_6px_rgba(0,0,0,0.5)] font-bold text-2xl uppercase tracking-[0.3em]">
            ПРОЕКТ УПРАВЛЕНИЕ ЭНЕРГИЕЙ-это
          </h3>
          <div
            className="

    w-80 md:w-96
    h-[1px]
    /* Градиент: Прозрачный -> Золото -> Прозрачный */
    bg-gradient-to-r from-transparent via-[#c5a059] to-transparent
    opacity-60

    mt-5
    drop-shadow-[0_3px_6px_rgba(0,0,0,1)]
    mx-auto /* Если хочешь, чтобы полоска была по центру */
  "
          />
        </div>

        {points.map((point, index) => (
          <div key={index} className="relative">
            {/* Основной контейнер карточки */}
            <div
              className={`
            relative
            ${index === 3 ? "bg-darkmoon" : "bg-white/5"}
            backdrop-blur-[12px]
            border border-white/20
            rounded-2xl
            p-5
            overflow-hidden
            transition-all
            duration-500
            shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]
          `}
            >
              <div className="flex flex-row items-center gap-5 relative z-10">
                {/* КВАДРАТНЫЙ КОНТЕЙНЕР (Стеклянная подложка) */}
                <div
                  className="
              flex-shrink-0
              w-14 h-14
              rounded-xl
              bg-white/10
              border border-white/30
              flex items-center justify-center
              relative overflow-hidden
              shadow-[0_2px_10px_rgba(0,0,0,0.1)]
            "
                >
                  {/* Внутренний блик квадрата */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-white/30" />

                  {/* ЗОЛОТОЙ КРУГ (Твоё обновление) */}
                  <div
                    className="
                w-10 h-10
                rounded-full
                flex items-center justify-center
                bg-gradient-to-tr from-[#8a6d3b] via-[#f7f3e8] to-[#c5a059]
                shadow-[0_3px_6px_rgba(0,0,0,0.4)]
                relative z-10
              "
                  >
                    {/* ИКОНКА (Оставляем как была, она просто внутри круга) */}
                    <div className="relative z-20 scale-90">{point.icon}</div>
                  </div>
                </div>

                {/* Текстовый блок */}
                <div className="flex flex-col gap-1">
                  <h4
                    className="
  /* 1. ПЕРВОНАЧАЛЬНЫЙ ГРАДИЕНТ: Золото -> Белый блик -> Золото */
  bg-gradient-to-bl from-[#8a6d3b] via-[#f7f3e8] to-[#c5a059]

  /* 2. ТЕХНИЧЕСКИЕ КЛАССЫ */
  bg-clip-text
  text-transparent

  /* 3. СТИЛИ ТЕКСТА */
  text-xl
  font-bold
  uppercase
  tracking-[0.1em]

  /* 4. ТЕНЬ (чтобы белый блик не пропадал на светлых фонах) */
  drop-shadow-[0_3px_6px_rgba(0,0,0,0.5)]
"
                  >
                    {point.title}
                  </h4>
                  <p
                    className="

  font-fira
  text-white/80

  text-sm
  tracking-widest
  max-w-xl
  leading-loose
  drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]
"
                  >
                    {point.text}
                  </p>
                </div>
              </div>

              {/* Стеклянные эффекты на фоне */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-100 pointer-events-none" />
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/10 blur-[40px] rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
