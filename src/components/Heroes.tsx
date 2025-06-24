import React from "react";

const Heroes = () => {
  const heroes = [
    {
      name: "Георгий Жуков",
      title: "Маршал Советского Союза",
      description:
        "Командующий обороной Ленинграда, Москвы, руководил Сталинградской и Курской битвами",
      image:
        "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=300&h=400&fit=crop",
    },
    {
      name: "Александр Матросов",
      title: "Герой Советского Союза",
      description:
        "Совершил подвиг, закрыв своим телом амбразуру вражеского дзота",
      image:
        "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=300&h=400&fit=crop",
    },
    {
      name: "Зоя Космодемьянская",
      title: "Партизанка, Герой Советского Союза",
      description:
        "Первая женщина, удостоенная звания Героя Советского Союза во время ВОВ",
      image:
        "https://images.unsplash.com/photo-1594736797933-d0d4b2f3d8c8?w=300&h=400&fit=crop",
    },
    {
      name: "Василий Чуйков",
      title: "Генерал армии",
      description: "Командующий 62-й армией, оборонявшей Сталинград",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
    },
  ];

  return (
    <section
      id="heroes"
      className="py-16 bg-gradient-to-b from-amber-50 to-yellow-100"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-amber-900 mb-12 font-serif">
          Герои войны
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {heroes.map((hero, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-amber-200 hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="aspect-w-3 aspect-h-4">
                <img
                  src={hero.image}
                  alt={hero.name}
                  className="w-full h-64 object-cover filter sepia-[0.3]"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-amber-900 mb-2">
                  {hero.name}
                </h3>
                <p className="text-amber-700 font-medium mb-3">{hero.title}</p>
                <p className="text-amber-800 text-sm leading-relaxed">
                  {hero.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Heroes;
