import React from "react";

const ProgramSection = () => {
  return (
    <section
      id="program"
      className="relative py-24 px-5 overflow-hidden bg-[#1a1612]"
      //   style={{
      //     backgroundColor: "#3D2B1F",
      //     backgroundImage: `radial-gradient(circle at center, rgba(93, 71, 55, 0.4) 0%, rgba(31, 21, 15, 0.8) 100%)`,
      //   }}
    >
      <div className="absolute inset-0 bg-black/20 pointer-events-none z-0" />

      <div className="max-w-xl mx-auto relative z-10 flex flex-col gap-8">
        {/* Заголовок страницы — уменьшили tracking и размер на mobile */}
        <div className="text-center">
          <h2 className="bg-gradient-to-tr from-[#8a6d3b] via-[#f7f3e8] to-[#c5a059] bg-clip-text text-transparent drop-shadow-[0_3px_6px_rgba(0,0,0,0.5)] font-bold text-2xl md:text-3xl uppercase tracking-[0.1em] md:tracking-[0.2em]">
            Программа Курса
          </h2>
          <div className="w-48 md:w-64 h-[1px] bg-gradient-to-r from-transparent via-[#c5a059] to-transparent opacity-60 mt-5 mx-auto" />
        </div>

        <p className="font-fira text-white/60 text-center text-xs md:text-sm tracking-widest mb-4 drop-shadow-[0_3px_6px_rgba(0,0,0,0.5)] italic uppercase leading-relaxed">
          Всё, что нужно, чтобы повысить уровень энергии и начать менять свою
          реальность
        </p>

        <div className="flex flex-col gap-6 md:gap-8">
          {/* БЛОК 1: 7 структурированных уроков */}
          <div className="relative bg-white/5 backdrop-blur-[12px] border border-white/20 rounded-3xl p-6 md:p-10 overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">
            <div className="relative z-10">
              {/* Возвращаем чистый заголовок в одну строку с маркером */}
              <div className="flex items-start md:items-center gap-3 md:gap-4 mb-6">
                <div className="w-2.5 h-2.5 rotate-45 bg-[#c5a059] shadow-[0_0_12px_rgba(197,160,89,0.6)] shrink-0 mt-1.5 md:mt-0" />
                <h3 className="bg-gradient-to-bl from-[#8a6d3b] via-[#f7f3e8] to-[#c5a059] bg-clip-text text-transparent drop-shadow-[0_3px_6px_rgba(0,0,0,0.5)] font-bold text-lg md:text-2xl uppercase tracking-normal md:tracking-widest leading-tight">
                  7 структурированных уроков <br></br>
                  на темы:
                </h3>
              </div>

              {/* Список уроков с нормальными отступами, чтобы дышалось */}
              <ul className="space-y-6">
                {[
                  "Тест на уровень твоей энергии и, исходя из этого, стратегия действий",
                  "Главные причины потери энергии",
                  "Источники наполнения энергией",
                  "Методы материализации накопленной энергии",
                  "Материализация «продвинутый уровень»",
                  "Управление реальностью по-женски",
                ].map((item, i) => (
                  <li key={i} className="flex flex-col items-start gap-3">
                    <div className="w-12 md:w-16 h-[1px] bg-gradient-to-r from-transparent via-[#c5a059] to-transparent opacity-90" />
                    <span className="font-fira text-white/90 text-sm md:text-base tracking-wide leading-relaxed drop-shadow-[0_3px_6px_rgba(0,0,0,0.5)]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-100 pointer-events-none" />
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#c5a059]/10 blur-[80px] rounded-full pointer-events-none" />

            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-100 pointer-events-none" />
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#c5a059]/10 blur-[80px] rounded-full pointer-events-none" />

            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-100 pointer-events-none" />
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#c5a059]/10 blur-[80px] rounded-full pointer-events-none" />
          </div>
          {/* БЛОК 2: Трансформационная групповая сессия */}
          {/* БЛОК 2: Трансформационная групповая сессия */}
          <div className="relative bg-white/5 backdrop-blur-[12px] border border-white/20 rounded-3xl p-6 md:p-10 overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">
            <div className="relative z-10">
              {/* Уменьшен mb-8 -> mb-3 */}
              <div className="flex items-start gap-3 md:gap-4 mb-3">
                <div className="w-2.5 h-2.5 rotate-45 bg-[#c5a059] mt-1.5 shrink-0 shadow-[0_0_12px_rgba(197,160,89,0.6)]" />
                <h3 className="bg-gradient-to-bl from-[#8a6d3b] via-[#f7f3e8] to-[#c5a059] bg-clip-text text-transparent drop-shadow-[0_3px_6px_rgba(0,0,0,0.5)] font-bold text-lg md:text-2xl uppercase tracking-normal md:tracking-widest leading-tight">
                  Трансформационная <br /> групповая сессия
                </h3>
              </div>

              {/* Уменьшен space-y-6 -> space-y-3 */}
              <div className="space-y-3">
                <div className="w-12 md:w-16 h-[1px] bg-gradient-to-r from-transparent via-[#c5a059] to-transparent opacity-90" />
                <p className="font-fira text-white/90 text-sm md:text-lg tracking-wide drop-shadow-[0_3px_6px_rgba(0,0,0,0.5)] leading-relaxed">
                  Разблокировка энергии через отмену базовых программ, которые
                  годами забирают ресурс
                </p>
                <p className="bg-gradient-to-tr from-[#8a6d3b] via-[#f7f3e8] to-[#c5a059] bg-clip-text font-bold text-transparent text-base md:text-xl font-advent italic leading-tight drop-shadow-[0_4px_8px_rgba(0,0,0,1)]">
                  И, возможно, это началось даже не с тебя
                </p>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-100 pointer-events-none" />
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#c5a059]/10 blur-[80px] rounded-full pointer-events-none" />
          </div>

          {/* БЛОК 3: Общий чат */}
          <div className="relative bg-white/5 backdrop-blur-[12px] border border-white/20 rounded-3xl p-6 md:p-10 overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">
            <div className="relative z-10">
              <div className="flex items-center gap-3 md:gap-4 mb-3">
                <div className="w-2.5 h-2.5 rotate-45 bg-[#c5a059] shadow-[0_0_12px_rgba(197,160,89,0.6)] shrink-0" />
                <h3 className="bg-gradient-to-bl from-[#8a6d3b] via-[#f7f3e8] to-[#c5a059] bg-clip-text text-transparent drop-shadow-[0_3px_6px_rgba(0,0,0,0.5)] font-bold text-lg md:text-2xl uppercase tracking-normal md:tracking-widest">
                  Общий чат
                </h3>
              </div>

              {/* Дивайдер теперь здесь, сразу после заголовка */}
              <div className="w-12 md:w-16 h-[1px] bg-gradient-to-r from-transparent via-[#c5a059] to-transparent opacity-90 mb-4" />

              <div className="space-y-3">
                <p className="font-fira text-white/90 text-base md:text-xl tracking-widest drop-shadow-[0_3px_6px_rgba(0,0,0,0.5)]">
                  Закрытый чат всех участников
                </p>

                {/* Длинный дивайдер убран, текст идет сразу следом */}
                <p className="bg-gradient-to-tr from-[#8a6d3b] via-[#f7f3e8] to-[#c5a059] bg-clip-text font-bold text-transparent text-base md:text-xl font-advent italic leading-tight drop-shadow-[0_4px_8px_rgba(0,0,0,1)]">
                  Поддержка, вопросы, живой процесс
                </p>
              </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-100 pointer-events-none" />
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#c5a059]/10 blur-[80px] rounded-full pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
