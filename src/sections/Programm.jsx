import React from "react";
import { Check } from "lucide-react"; // Импортируем иконку чека

const ProgramSection = () => {
  return (
    <section
      id="program"
      className="relative min-h-screen py-24 px-5 overflow-hidden bg-[#E5DACE]"
    >
      {/* Мягкие золотые отсветы */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#D4AF37] opacity-10 blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#D4AF37] opacity-10 blur-[150px] rounded-full translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Заголовок страницы */}
        <div className="text-center mb-16">
          <h2 className="bg-gradient-to-tr from-[#8a6d3b] via-[#f7f3e8] to-[#c5a059] bg-clip-text text-transparent font-bold text-4xl md:text-5xl uppercase tracking-[0.3em] drop-shadow-sm">
            Программа курса
          </h2>
          <div className="w-40 h-[1px] bg-gradient-to-r from-transparent via-[#c5a059] to-transparent opacity-60 mt-6 mx-auto" />
        </div>

        {/* Первый Блок: Программа курса */}
        <div className="relative group p-8 md:p-12 rounded-3xl border border-[#c5a059]/30 bg-black/60 backdrop-blur-[15px] shadow-2xl transition-all duration-500 hover:border-[#c5a059]/60">
          {/* Название */}
          <h3 className="bg-gradient-to-bl from-[#8a6d3b] via-[#f7f3e8] to-[#c5a059] bg-clip-text text-transparent font-bold text-3xl uppercase tracking-widest mb-8">
            Материалы курса
          </h3>

          <div className="flex flex-col gap-6">
            {/* Описание с переносом */}
            <p className="text-white font-fira text-lg tracking-wide border-b border-[#c5a059]/20 pb-4">
              В программу курса входит:
            </p>

            {/* Список с чеками */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Check className="w-6 h-6 text-[#c5a059] mt-1 shrink-0" />
                <span className="text-white/90 font-fira text-base md:text-lg leading-relaxed">
                  6 структурированных видеоуроков в записи
                </span>
              </div>

              <div className="flex items-start gap-4">
                <Check className="w-6 h-6 text-[#c5a059] mt-1 shrink-0" />
                <span className="text-white/90 font-fira text-base md:text-lg leading-relaxed">
                  3 дополнительных урока с углубляющим материалом
                </span>
              </div>
            </div>

            {/* Финальный текст без чека */}
            <div className="mt-4 pt-6 border-t border-[#c5a059]/20">
              <p className="text-[#c5a059] font-fira italic text-base md:text-lg leading-relaxed opacity-90">
                Это база, которая дает понимание системы и инструменты для
                самостоятельной работы
              </p>
            </div>
          </div>

          {/* Декоративное внутреннее свечение в углу карточки */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#c5a059]/10 blur-[50px] rounded-full pointer-events-none" />
        </div>
        {/* Второй Блок: Трансформационная групповая сессия */}
        <div className="relative group p-8 md:p-12 rounded-3xl border border-[#c5a059]/30 bg-black/60 backdrop-blur-[15px] shadow-2xl transition-all duration-500 hover:border-[#c5a059]/60 mt-12">
          {/* Название */}
          <h3 className="bg-gradient-to-bl from-[#8a6d3b] via-[#f7f3e8] to-[#c5a059] bg-clip-text text-transparent font-bold text-2xl md:text-3xl uppercase tracking-widest mb-8 leading-tight">
            Трансформационная <br /> групповая сессия
          </h3>

          <div className="flex flex-col gap-6">
            {/* Дескрипшн */}
            <div className="space-y-4">
              <p className="text-white font-fira text-lg tracking-wide">
                1 групповая сессия
              </p>

              <p className="text-white/90 font-fira text-base md:text-lg leading-relaxed border-l-2 border-[#c5a059]/40 pl-6 py-2">
                Разблокировка энергии через отмену базовых женских программ,
                которые годами забирают ресурс.
              </p>
            </div>

            {/* Золотой дивайдер (как в предыдущем блоке) */}
            <div className="mt-4 pt-6 border-t border-[#c5a059]/20">
              <p className="text-[#c5a059] font-fira italic text-base md:text-lg leading-relaxed opacity-90">
                И возможно, это даже началось не с тебя
              </p>
            </div>
          </div>

          {/* Декоративное свечение */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#c5a059]/5 blur-[50px] rounded-full pointer-events-none" />
        </div>
        {/* Третий Блок: Общий чат */}
        <div className="relative group p-8 md:p-12 rounded-3xl border border-[#c5a059]/30 bg-black/60 backdrop-blur-[15px] shadow-2xl transition-all duration-500 hover:border-[#c5a059]/60 mt-12">
          {/* Название */}
          <h3 className="bg-gradient-to-bl from-[#8a6d3b] via-[#f7f3e8] to-[#c5a059] bg-clip-text text-transparent font-bold text-3xl uppercase tracking-widest mb-8">
            Общий чат
          </h3>

          <div className="flex flex-col gap-6">
            {/* Три слова в колонку */}
            <div className="space-y-3">
              {["Поддержка", "Вопросы", "Живой процесс"].map((text, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />{" "}
                  {/* Маленькая золотая точка-маркер */}
                  <p className="text-white font-fira text-xl tracking-wider uppercase opacity-90">
                    {text}
                  </p>
                </div>
              ))}
            </div>

            {/* Золотой дивайдер */}
            <div className="mt-4 pt-6 border-t border-[#c5a059]/20">
              <p className="text-[#c5a059] font-fira italic text-base md:text-lg leading-relaxed opacity-90">
                Закрытый чат всех участниц
              </p>
            </div>
          </div>

          {/* Декоративное свечение в другом углу для баланса */}
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#c5a059]/10 blur-[60px] rounded-full pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
