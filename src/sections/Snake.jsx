export const Snake = () => {
  return (
    <section className="bg-background py-20 flex justify-center items-center overflow-hidden">
      <div className="relative">
        <svg
          width="470"
          height="330"
          viewBox="-10 -10 470 330"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            /* Координаты те же, но теперь у них есть место по бокам */
            d="M 75 30
       L 405 30
       Q 450 30, 450 75
       Q 450 120, 405 120
       L 45 120
       Q 0 120, 0 165
       Q 0 210, 45 210
       L 405 210
       Q 450 210, 450 255
       Q 450 300, 405 300
       L 75 300"
            stroke="white"
            fill="none"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Точки теперь полностью видны */}
          <circle cx="75" cy="30" r="9" fill="white" />
          <circle cx="450" cy="75" r="9" fill="white" />
          <circle cx="0" cy="165" r="9" fill="white" />
          <circle cx="450" cy="255" r="9" fill="white" />
          <circle cx="75" cy="300" r="9" fill="white" />
        </svg>
      </div>
    </section>
  );
};
