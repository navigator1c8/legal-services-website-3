import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

export default function RealEstate() {
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
              Недвижимость
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Полное юридическое сопровождение сделок с недвижимостью. 
              Покупка, продажа, аренда, оформление прав собственности.
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
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Услуги по недвижимости</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: "Home",
                title: "Сделки купли-продажи",
                description: "Сопровождение сделок по покупке и продаже жилой и коммерческой недвижимости"
              },
              {
                icon: "Key",
                title: "Аренда недвижимости",
                description: "Составление договоров аренды, защита прав арендодателей и арендаторов"
              },
              {
                icon: "FileCheck",
                title: "Оформление прав",
                description: "Регистрация права собственности, получение правоустанавливающих документов"
              },
              {
                icon: "MapPin",
                title: "Земельные участки",
                description: "Оформление земельных участков, изменение категории и вида разрешенного использования"
              },
              {
                icon: "Building2",
                title: "Строительство",
                description: "Получение разрешений на строительство, ввод объектов в эксплуатацию"
              },
              {
                icon: "Scale",
                title: "Споры по недвижимости",
                description: "Защита интересов в судах по спорам о праве собственности"
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

      {/* Benefits */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Почему выбирают нас</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "Shield",
                title: "Безопасность сделок",
                description: "Тщательная проверка документов и юридической чистоты объектов"
              },
              {
                icon: "Clock",
                title: "Быстрое оформление",
                description: "Оптимизированные процедуры для максимально быстрого результата"
              },
              {
                icon: "Award",
                title: "Опыт и экспертиза",
                description: "Более 500 успешно проведенных сделок с недвижимостью"
              }
            ].map((benefit, index) => (
              <Card key={index} className="text-center bg-white border-0 shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={benefit.icon as any} className="text-primary" size={32} />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {benefit.description}
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
          <h2 className="text-4xl font-bold mb-6">Планируете сделку с недвижимостью?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Обеспечьте безопасность и законность вашей сделки с нашей помощью
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