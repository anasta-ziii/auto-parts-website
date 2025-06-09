import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const categories = [
  {
    name: "Двигатель",
    description: "Поршни, кольца, прокладки",
    icon: "Zap",
    count: "8 500+",
  },
  {
    name: "Тормозная система",
    description: "Колодки, диски, суппорты",
    icon: "Circle",
    count: "6 200+",
  },
  {
    name: "Подвеска",
    description: "Амортизаторы, пружины, стойки",
    icon: "Settings",
    count: "7 800+",
  },
  {
    name: "Фильтры",
    description: "Масляные, воздушные, топливные",
    icon: "Filter",
    count: "4 300+",
  },
  {
    name: "Электрика",
    description: "Генераторы, стартеры, свечи",
    icon: "Bolt",
    count: "5 100+",
  },
  {
    name: "Кузовные детали",
    description: "Бамперы, фары, зеркала",
    icon: "Car",
    count: "9 200+",
  },
];

const CategoriesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Категории запчастей
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Card
              key={category.name}
              className="hover:shadow-lg transition-shadow cursor-pointer hover-scale"
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name={category.icon as any}
                    size={32}
                    className="text-blue-600"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {category.name}
                </h3>
                <p className="text-gray-600 mb-3">{category.description}</p>
                <div className="text-blue-600 font-medium">
                  {category.count} товаров
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
