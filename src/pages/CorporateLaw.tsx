import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

export default function CorporateLaw() {
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
              Корпоративное право
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Комплексное правовое сопровождение бизнеса. Регистрация компаний, 
              корпоративные споры, реорганизация и ликвидация предприятий.
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
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Наши услуги</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: "Building",
                title: "Регистрация ООО",
                description: "Полное сопровождение процесса регистрации общества с ограниченной ответственностью"
              },
              {
                icon: "FileText",
                title: "Корпоративные договоры",
                description: "Разработка учредительных документов, договоров участников"
              },
              {
                icon: "Users",
                title: "Корпоративные споры",
                description: "Защита интересов в корпоративных конфликтах и спорах"
              },
              {
                icon: "RefreshCw",
                title: "Реорганизация",
                description: "Слияние, присоединение, разделение и выделение компаний"
              },
              {
                icon: "XCircle",
                title: "Ликвидация",
                description: "Добровольная и принудительная ликвидация юридических лиц"
              },
              {
                icon: "Shield",
                title: "Комплаенс",
                description: "Обеспечение соответствия деятельности требованиям законодательства"
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

      {/* Process */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Как мы работаем</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Консультация",
                description: "Анализируем вашу ситуацию и определяем оптимальную стратегию"
              },
              {
                step: "02", 
                title: "Планирование",
                description: "Разрабатываем детальный план действий с учетом всех рисков"
              },
              {
                step: "03",
                title: "Реализация",
                description: "Выполняем все необходимые процедуры и оформляем документы"
              },
              {
                step: "04",
                title: "Сопровождение",
                description: "Обеспечиваем постоянную правовую поддержку вашего бизнеса"
              }
            ].map((item, index) => (
              <Card key={index} className="text-center bg-white border-0 shadow-lg">
                <CardHeader>
                  <div className="text-4xl font-bold text-primary mb-4">{item.step}</div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {item.description}
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
          <h2 className="text-4xl font-bold mb-6">Нужна помощь с корпоративными вопросами?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Получите профессиональную консультацию по корпоративному праву уже сегодня
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