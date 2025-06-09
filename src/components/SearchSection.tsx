import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const SearchSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Поиск запчастей
          </h2>

          <Card className="p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Марка автомобиля
                </label>
                <Input placeholder="Например: Toyota" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Модель</label>
                <Input placeholder="Например: Camry" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Год выпуска
                </label>
                <Input placeholder="Например: 2018" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Категория запчасти
                </label>
                <Input placeholder="Например: Тормозная система" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Артикул (если известен)
                </label>
                <Input placeholder="Например: 04465-33250" />
              </div>
            </div>

            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              <Icon name="Search" size={20} />
              Найти запчасти
            </Button>
          </Card>

          <div className="text-center">
            <p className="text-gray-600 mb-4">
              Не можете найти нужную запчасть? Наши специалисты помогут!
            </p>
            <Button
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              <Icon name="MessageCircle" size={20} />
              Получить консультацию
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
