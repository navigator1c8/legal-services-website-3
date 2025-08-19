import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

export default function ConsumerRights() {
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
              Защита прав потребителей
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Возврат товаров, защита от некачественных услуг, 
              взыскание неустойки, споры с продавцами и поставщиками.
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
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Услуги по защите прав потребителей</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: "ShoppingCart",
                title: "Возврат товаров",
                description: "Возврат некачественных товаров, обмен, возврат денег"
              },
              {
                icon: "Wrench",
                title: "Некачественные услуги",
                description: "Защита от некачественного выполнения работ и услуг"
              },
              {
                icon: "DollarSign",
                title: "Взыскание неустойки",
                description: "Получение компенсации за нарушение сроков и условий"
              },
              {
                icon: "AlertTriangle",
                title: "Обман потребителей",
                description: "Защита от мошенничества и недобросовестной торговли"
              },
              {
                icon: "FileText",
                title: "Претензионная работа",
                description: "Составление претензий и досудебное урегулирование"
              },
              {
                icon: "Scale",
                title: "Судебная защита",
                description: "Представительство в судах по потребительским спорам"
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

      {/* Consumer Rights */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Основные права потребителей</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">При покупке товаров</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="Check" className="text-primary mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold">Право на качество</h3>
                    <p className="text-sm text-muted-foreground">Товар должен соответствовать заявленным характеристикам</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Check" className="text-primary mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold">Право на информацию</h3>
                    <p className="text-sm text-muted-foreground">Полная и достоверная информация о товаре</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Check" className="text-primary mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold">Право на возврат</h3>
                    <p className="text-sm text-muted-foreground">Возврат товара в течение 14 дней без объяснения причин</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Check" className="text-primary mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold">Гарантийное обслуживание</h3>
                    <p className="text-sm text-muted-foreground">Бесплатный ремонт в гарантийный период</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">При получении услуг</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="Check" className="text-primary mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold">Качественное выполнение</h3>
                    <p className="text-sm text-muted-foreground">Услуги должны быть выполнены качественно и в срок</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Check" className="text-primary mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold">Безопасность услуг</h3>
                    <p className="text-sm text-muted-foreground">Услуги не должны причинять вред жизни и здоровью</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Check" className="text-primary mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold">Возмещение ущерба</h3>
                    <p className="text-sm text-muted-foreground">Компенсация за некачественно выполненные услуги</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Check" className="text-primary mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold">Отказ от услуг</h3>
                    <p className="text-sm text-muted-foreground">Право отказаться от услуг в любое время</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Return Conditions */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Условия возврата товаров</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-green-50 border-green-200 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Check" className="text-green-600" size={32} />
                </div>
                <CardTitle className="text-2xl text-center text-green-800">Можно вернуть</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Icon name="Check" className="text-green-600" size={16} />
                  <span className="text-sm">Одежда и обувь</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" className="text-green-600" size={16} />
                  <span className="text-sm">Мебель</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" className="text-green-600" size={16} />
                  <span className="text-sm">Бытовая техника</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" className="text-green-600" size={16} />
                  <span className="text-sm">Спортивные товары</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" className="text-green-600" size={16} />
                  <span className="text-sm">Игрушки</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" className="text-green-600" size={16} />
                  <span className="text-sm">Книги и диски</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-red-50 border-red-200 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="X" className="text-red-600" size={32} />
                </div>
                <CardTitle className="text-2xl text-center text-red-800">Нельзя вернуть</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Icon name="X" className="text-red-600" size={16} />
                  <span className="text-sm">Продукты питания</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="X" className="text-red-600" size={16} />
                  <span className="text-sm">Лекарства</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="X" className="text-red-600" size={16} />
                  <span className="text-sm">Нижнее белье</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="X" className="text-red-600" size={16} />
                  <span className="text-sm">Косметика и парфюмерия</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="X" className="text-red-600" size={16} />
                  <span className="text-sm">Товары по метражу</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="X" className="text-red-600" size={16} />
                  <span className="text-sm">Ювелирные изделия</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Compensation */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Виды компенсаций</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "RefreshCw",
                title: "Замена товара",
                description: "Обмен на аналогичный товар надлежащего качества"
              },
              {
                icon: "DollarSign",
                title: "Возврат денег",
                description: "Полный возврат уплаченной за товар суммы"
              },
              {
                icon: "Wrench",
                title: "Бесплатный ремонт",
                description: "Устранение недостатков за счет продавца"
              },
              {
                icon: "TrendingUp",
                title: "Неустойка",
                description: "1% от стоимости товара за каждый день просрочки"
              }
            ].map((compensation, index) => (
              <Card key={index} className="text-center bg-white border-0 shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={compensation.icon as any} className="text-primary" size={32} />
                  </div>
                  <CardTitle className="text-lg">{compensation.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">
                    {compensation.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Нарушены права потребителя?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Защитите свои права и получите справедливую компенсацию за некачественные товары и услуги
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