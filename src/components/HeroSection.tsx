import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">АвтоЗапчасти Премиум</h1>
          <p className="text-xl mb-8 text-blue-100">
            Качественные запчасти для вашего автомобиля. Более 50 000
            наименований в наличии. Доставка по всей России.
          </p>
          <div className="flex gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-white text-blue-800 hover:bg-blue-50"
            >
              <Icon name="Search" size={20} />
              Найти запчасть
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-800"
            >
              <Icon name="Phone" size={20} />
              Связаться с нами
            </Button>
          </div>
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">50 000+</div>
              <div className="text-blue-200">Запчастей в наличии</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-blue-200">Лет на рынке</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-blue-200">Поддержка клиентов</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
