import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

export default function FamilyLaw() {
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
              Семейное право
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Деликатное решение семейных вопросов. Развод, алименты, 
              раздел имущества, опека и усыновление.
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
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Услуги по семейному праву</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: "Heart",
                title: "Расторжение брака",
                description: "Оформление развода через ЗАГС и суд, защита интересов супругов"
              },
              {
                icon: "Home",
                title: "Раздел имущества",
                description: "Справедливый раздел совместно нажитого имущества супругов"
              },
              {
                icon: "Baby",
                title: "Алименты",
                description: "Взыскание и изменение размера алиментов на детей и супругов"
              },
              {
                icon: "Users",
                title: "Опека и попечительство",
                description: "Оформление опеки, лишение и восстановление родительских прав"
              },
              {
                icon: "UserPlus",
                title: "Усыновление",
                description: "Полное сопровождение процедуры усыновления и удочерения"
              },
              {
                icon: "FileText",
                title: "Брачные договоры",
                description: "Составление и изменение брачных контрактов"
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

      {/* Approach */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Наш подход</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "Heart",
                title: "Деликатность",
                description: "Понимаем чувствительность семейных вопросов и действуем максимально тактично"
              },
              {
                icon: "Shield",
                title: "Конфиденциальность",
                description: "Гарантируем полную конфиденциальность всей информации"
              },
              {
                icon: "Target",
                title: "Результативность",
                description: "Стремимся к мирному урегулированию конфликтов в интересах всех сторон"
              }
            ].map((approach, index) => (
              <Card key={index} className="text-center bg-white border-0 shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={approach.icon as any} className="text-primary" size={32} />
                  </div>
                  <CardTitle className="text-xl">{approach.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {approach.description}
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
          <h2 className="text-4xl font-bold mb-6">Нужна помощь в семейных вопросах?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Получите деликатную и профессиональную помощь в решении семейных споров
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