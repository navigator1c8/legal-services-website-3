import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

export default function ContractLaw() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-white/95 backdrop-blur-sm fixed w-full z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-primary">Юридические услуги</Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">Главная</Link>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="#experience" className="text-foreground hover:text-primary transition-colors">Опыт</a>
            <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button>Консультация</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
              Договорное право
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Составление, анализ и сопровождение договоров. 
              Правовая экспертиза, защита договорных интересов.
            </p>
            <Button size="lg" className="text-lg px-8 py-6">
              <Icon name="Phone" className="mr-2" size={20} />
              Получить консультацию
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Услуги по договорному праву</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: "FileText",
                title: "Составление договоров",
                description: "Разработка договоров любой сложности с учетом специфики бизнеса"
              },
              {
                icon: "Search",
                title: "Правовая экспертиза",
                description: "Анализ договоров на соответствие законодательству и рискам"
              },
              {
                icon: "Edit",
                title: "Доработка договоров",
                description: "Внесение изменений и дополнений в существующие договоры"
              },
              {
                icon: "Shield",
                title: "Защита интересов",
                description: "Представительство в спорах по договорам"
              },
              {
                icon: "Users",
                title: "Переговоры",
                description: "Участие в переговорах по заключению договоров"
              },
              {
                icon: "BookOpen",
                title: "Консультации",
                description: "Правовые консультации по договорным вопросам"
              }
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-0 bg-white">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon as any} className="text-primary" size={32} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contract Types */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Виды договоров</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "Handshake",
                title: "Купли-продажи",
                items: ["Товары", "Недвижимость", "Транспорт", "Оборудование"]
              },
              {
                icon: "Truck",
                title: "Поставки",
                items: ["Поставка товаров", "Логистика", "Складирование", "Дистрибуция"]
              },
              {
                icon: "Wrench",
                title: "Подряда",
                items: ["Строительный подряд", "Ремонтные работы", "Проектирование", "Монтаж"]
              },
              {
                icon: "Users",
                title: "Услуг",
                items: ["Консалтинг", "IT-услуги", "Маркетинг", "Обслуживание"]
              }
            ].map((type, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={type.icon as any} className="text-primary" size={32} />
                  </div>
                  <CardTitle className="text-lg">{type.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {type.items.map((item, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <Icon name="Check" className="text-primary" size={16} />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Elements */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Ключевые элементы договора</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Обязательные условия</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="Check" className="text-primary mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold">Предмет договора</h3>
                    <p className="text-sm text-muted-foreground">Четкое описание товаров, работ или услуг</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Check" className="text-primary mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold">Цена и порядок расчетов</h3>
                    <p className="text-sm text-muted-foreground">Стоимость и условия оплаты</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Check" className="text-primary mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold">Сроки исполнения</h3>
                    <p className="text-sm text-muted-foreground">Временные рамки выполнения обязательств</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Check" className="text-primary mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold">Ответственность сторон</h3>
                    <p className="text-sm text-muted-foreground">Санкции за нарушение условий</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Дополнительные условия</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="Check" className="text-primary mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold">Форс-мажор</h3>
                    <p className="text-sm text-muted-foreground">Освобождение от ответственности при ЧС</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Check" className="text-primary mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold">Конфиденциальность</h3>
                    <p className="text-sm text-muted-foreground">Защита коммерческой тайны</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Check" className="text-primary mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold">Разрешение споров</h3>
                    <p className="text-sm text-muted-foreground">Порядок урегулирования конфликтов</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Check" className="text-primary mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold">Изменение и расторжение</h3>
                    <p className="text-sm text-muted-foreground">Условия изменения договора</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Нужен качественный договор?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Защитите свои интересы с помощью профессионально составленных договоров
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
            <Icon name="Phone" className="mr-2" size={20} />
            Связаться с нами
          </Button>
        </div>
      </section>
    </div>
  );
}