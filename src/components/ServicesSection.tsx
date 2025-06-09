import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const services = [
  {
    title: "Быстрая доставка",
    description: "Доставка по Москве в день заказа, по России 1-3 дня",
    icon: "Truck",
  },
  {
    title: "Гарантия качества",
    description: "Только оригинальные запчасти с гарантией производителя",
    icon: "Shield",
  },
  {
    title: "Подбор запчастей",
    description: "Поможем подобрать нужные детали по VIN-коду",
    icon: "Search",
  },
  {
    title: "Техническая поддержка",
    description: "Консультации специалистов 24/7",
    icon: "Headphones",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Наши преимущества
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-blue-800 border-blue-700 text-white hover:bg-blue-700 transition-colors"
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name={service.icon as any}
                    size={32}
                    className="text-white"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-blue-100">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
