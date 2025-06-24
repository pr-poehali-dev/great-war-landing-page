import React, { useState } from "react";
import Icon from "@/components/ui/icon";

const InteractiveMap = () => {
  const [selectedBattle, setSelectedBattle] = useState<number | null>(null);

  const battles = [
    {
      id: 1,
      name: "Битва за Москву",
      date: "30 сентября 1941 — 20 апреля 1942",
      position: { top: "35%", left: "55%" },
      description:
        "Боевые действия советских и немецких войск на московском направлении",
      result: "Победа СССР",
    },
    {
      id: 2,
      name: "Блокада Ленинграда",
      date: "8 сентября 1941 — 27 января 1944",
      position: { top: "20%", left: "52%" },
      description: "872-дневная осада Ленинграда немецкими войсками",
      result: "Снятие блокады",
    },
    {
      id: 3,
      name: "Сталинградская битва",
      date: "17 июля 1942 — 2 февраля 1943",
      position: { top: "60%", left: "60%" },
      description: "Одно из крупнейших сражений в ходе войны",
      result: "Победа СССР",
    },
    {
      id: 4,
      name: "Курская битва",
      date: "5 июля — 23 августа 1943",
      position: { top: "50%", left: "58%" },
      description: "Крупнейшее танковое сражение в истории",
      result: "Победа СССР",
    },
    {
      id: 5,
      name: "Операция Багратион",
      date: "23 июня — 29 августа 1944",
      position: { top: "45%", left: "50%" },
      description: "Освобождение Белоруссии",
      result: "Победа СССР",
    },
    {
      id: 6,
      name: "Битва за Берлин",
      date: "16 апреля — 2 мая 1945",
      position: { top: "45%", left: "45%" },
      description: "Финальная операция войны в Европе",
      result: "Капитуляция Германии",
    },
  ];

  return (
    <section id="map" className="py-16 bg-amber-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-amber-900 mb-12 font-serif">
          Карта боевых действий
        </h2>

        <div className="bg-white rounded-lg shadow-xl p-8 border-2 border-amber-200">
          <div className="relative w-full h-96 bg-gradient-to-br from-green-100 to-brown-100 rounded-lg overflow-hidden border-2 border-amber-300">
            {/* Простая стилизованная карта */}
            <div className="absolute inset-0 opacity-20">
              <div className="w-full h-full bg-gradient-to-r from-green-200 via-yellow-100 to-brown-200"></div>
            </div>

            {/* Точки сражений */}
            {battles.map((battle) => (
              <div
                key={battle.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                style={battle.position}
                onClick={() =>
                  setSelectedBattle(
                    selectedBattle === battle.id ? null : battle.id,
                  )
                }
              >
                <div
                  className={`w-4 h-4 rounded-full border-2 border-white shadow-lg transition-all duration-300 ${
                    selectedBattle === battle.id
                      ? "bg-red-600 scale-150"
                      : "bg-red-500 hover:bg-red-600 hover:scale-125"
                  }`}
                ></div>
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 text-xs font-bold text-amber-900 whitespace-nowrap">
                  {battle.name}
                </div>
              </div>
            ))}
          </div>

          {/* Информационная панель */}
          <div className="mt-8">
            {selectedBattle ? (
              <div className="bg-amber-25 p-6 rounded-lg border-2 border-amber-200">
                {battles
                  .filter((b) => b.id === selectedBattle)
                  .map((battle) => (
                    <div key={battle.id}>
                      <div className="flex items-center mb-3">
                        <Icon
                          name="MapPin"
                          size={24}
                          className="text-red-600 mr-2"
                        />
                        <h3 className="text-2xl font-bold text-amber-900">
                          {battle.name}
                        </h3>
                      </div>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <span className="font-bold text-amber-800">
                            Даты:
                          </span>
                          <p className="text-amber-700">{battle.date}</p>
                        </div>
                        <div>
                          <span className="font-bold text-amber-800">
                            Результат:
                          </span>
                          <p className="text-amber-700">{battle.result}</p>
                        </div>
                        <div>
                          <span className="font-bold text-amber-800">
                            Описание:
                          </span>
                          <p className="text-amber-700">{battle.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            ) : (
              <div className="text-center text-amber-700 py-8">
                <Icon name="Info" size={32} className="mx-auto mb-2" />
                <p className="text-lg">
                  Нажмите на точку на карте, чтобы узнать подробности о сражении
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;
