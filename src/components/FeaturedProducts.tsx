import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const products = [
  {
    id: 1,
    name: "Тормозные колодки BREMBO",
    description: "Передние тормозные колодки для BMW 3 серии",
    price: "4 950",
    oldPrice: "5 500",
    image:
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=200&fit=crop",
    inStock: true,
    isPopular: true,
    rating: 4.8,
  },
  {
    id: 2,
    name: "Масляный фильтр MANN",
    description: "Оригинальный фильтр для Volkswagen/Audi",
    price: "890",
    oldPrice: null,
    image:
      "https://images.unsplash.com/photo-1486401899868-0e435c2d1e46?w=300&h=200&fit=crop",
    inStock: true,
    isPopular: false,
    rating: 4.9,
  },
  {
    id: 3,
    name: "Амортизатор BILSTEIN",
    description: "Передний амортизатор Mercedes-Benz",
    price: "12 300",
    oldPrice: "13 800",
    image:
      "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=200&fit=crop",
    inStock: false,
    isPopular: true,
    rating: 4.7,
  },
  {
    id: 4,
    name: "Комплект ГРМ GATES",
    description: "Ремень + ролики для Toyota/Lexus",
    price: "8 750",
    oldPrice: null,
    image:
      "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=300&h=200&fit=crop",
    inStock: true,
    isPopular: false,
    rating: 4.6,
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Популярные товары
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card
              key={product.id}
              className="hover:shadow-lg transition-shadow hover-scale"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                {product.isPopular && (
                  <Badge className="absolute top-2 left-2 bg-red-500 text-white">
                    Хит продаж
                  </Badge>
                )}
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-t-lg">
                    <span className="text-white font-medium">
                      Нет в наличии
                    </span>
                  </div>
                )}
              </div>

              <CardHeader className="pb-2">
                <CardTitle className="text-lg leading-tight">
                  {product.name}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-gray-600 text-sm mb-3">
                  {product.description}
                </p>

                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    <Icon
                      name="Star"
                      size={16}
                      className="text-yellow-400 fill-current"
                    />
                    <span className="text-sm text-gray-600 ml-1">
                      {product.rating}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-gray-800">
                      {product.price} ₽
                    </span>
                    {product.oldPrice && (
                      <span className="text-sm text-gray-500 line-through ml-2">
                        {product.oldPrice} ₽
                      </span>
                    )}
                  </div>
                </div>

                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  disabled={!product.inStock}
                >
                  {product.inStock ? (
                    <>
                      <Icon name="ShoppingCart" size={16} />В корзину
                    </>
                  ) : (
                    "Уведомить о поступлении"
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-blue-600 text-blue-600 hover:bg-blue-50"
          >
            Посмотреть все товары
            <Icon name="ArrowRight" size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
