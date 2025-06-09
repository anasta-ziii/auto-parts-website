import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ContactSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Контакты и местоположение
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon
                    name="MapPin"
                    size={24}
                    className="text-blue-600 mr-2"
                  />
                  Наши офисы
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-2">
                    Главный офис и склад
                  </h4>
                  <p className="text-gray-600 mb-2">
                    г. Москва, ул. Автомобильная, д. 15
                  </p>
                  <p className="text-gray-600 mb-2">
                    Пн-Пт: 9:00-19:00, Сб: 10:00-16:00
                  </p>
                  <div className="flex items-center space-x-4">
                    <Button variant="outline" size="sm">
                      <Icon name="Phone" size={16} />
                      +7 (495) 123-45-67
                    </Button>
                    <Button variant="outline" size="sm">
                      <Icon name="Mail" size={16} />
                      info@autoparts.ru
                    </Button>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-2">
                    Точка выдачи СПб
                  </h4>
                  <p className="text-gray-600 mb-2">
                    г. Санкт-Петербург, пр. Невский, д. 85
                  </p>
                  <p className="text-gray-600 mb-2">Пн-Сб: 10:00-18:00</p>
                  <Button variant="outline" size="sm">
                    <Icon name="Phone" size={16} />
                    +7 (812) 987-65-43
                  </Button>
                </div>

                <div className="pt-4 border-t">
                  <h4 className="font-semibold mb-3">Как нас найти</h4>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Icon
                        name="Car"
                        size={16}
                        className="text-blue-600 mr-2"
                      />
                      <span className="text-sm">Парковка для клиентов</span>
                    </div>
                    <div className="flex items-center">
                      <Icon
                        name="MapPin"
                        size={16}
                        className="text-blue-600 mr-2"
                      />
                      <span className="text-sm">
                        5 минут от м. Автозаводская
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Icon
                        name="Clock"
                        size={16}
                        className="text-blue-600 mr-2"
                      />
                      <span className="text-sm">Быстрое обслуживание</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon
                    name="MessageCircle"
                    size={24}
                    className="text-blue-600 mr-2"
                  />
                  Связаться с нами
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Button className="bg-green-600 hover:bg-green-700">
                    <Icon name="MessageCircle" size={20} />
                    WhatsApp
                  </Button>
                  <Button
                    variant="outline"
                    className="border-blue-600 text-blue-600"
                  >
                    <Icon name="Send" size={20} />
                    Telegram
                  </Button>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <Icon
                      name="Clock"
                      size={20}
                      className="text-blue-600 mr-3"
                    />
                    <div>
                      <div className="font-medium">Горячая линия 24/7</div>
                      <div className="text-gray-600">
                        8-800-555-12-34 (бесплатно)
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Icon
                      name="Mail"
                      size={20}
                      className="text-blue-600 mr-3"
                    />
                    <div>
                      <div className="font-medium">Email поддержка</div>
                      <div className="text-gray-600">support@autoparts.ru</div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Icon
                      name="CreditCard"
                      size={20}
                      className="text-blue-600 mr-3"
                    />
                    <div>
                      <div className="font-medium">Способы оплаты</div>
                      <div className="text-gray-600">
                        Наличные, карты, банковский перевод
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Нужна консультация?</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Наши специалисты помогут подобрать запчасти для вашего
                    автомобиля
                  </p>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <Icon name="Phone" size={16} />
                    Заказать звонок
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
