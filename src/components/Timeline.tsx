import React from "react";
import Icon from "@/components/ui/icon";

const Timeline = () => {
  const events = [
    {
      date: "22 июня 1941",
      title: "Начало войны",
      description: "Нападение Германии на СССР. Операция «Барбаросса»",
      icon: "Flame",
    },
    {
      date: "8 сентября 1941",
      title: "Блокада Ленинграда",
      description: "Начало 872-дневной блокады города",
      icon: "Shield",
    },
    {
      date: "6 декабря 1941",
      title: "Битва за Москву",
      description: "Начало контрнаступления под Москвой",
      icon: "Sword",
    },
    {
      date: "23 августа 1942",
      title: "Сталинградская битва",
      description: "Начало одного из ключевых сражений войны",
      icon: "Target",
    },
    {
      date: "5 июля 1943",
      title: "Курская битва",
      description: "Крупнейшее танковое сражение в истории",
      icon: "Zap",
    },
    {
      date: "9 мая 1945",
      title: "День Победы",
      description: "Капитуляция Германии. Окончание войны в Европе",
      icon: "Star",
    },
  ];

  return (
    <section id="timeline" className="py-16 bg-amber-25">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-amber-900 mb-12 font-serif">
          Хронология событий
        </h2>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-amber-600"></div>

          {events.map((event, index) => (
            <div
              key={index}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              <div
                className={`w-5/12 ${
                  index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"
                }`}
              >
                <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-amber-200 hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-3">
                    <Icon
                      name={event.icon as any}
                      size={24}
                      className="text-amber-700 mr-2"
                    />
                    <span className="text-amber-700 font-bold text-sm">
                      {event.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-amber-900 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-amber-800">{event.description}</p>
                </div>
              </div>

              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-amber-600 rounded-full border-4 border-white"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
