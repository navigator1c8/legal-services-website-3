import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

export default function ArbitrationDisputes() {
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
              Арбитражные споры
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Представительство в арбитражных судах. Экономические споры, 
              взыскание задолженности, корпоративные конфликты.
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
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Арбитражные услуги</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: "DollarSign",
                title: "Взыскание задолженности",
                description: "Взыскание долгов по договорам, неустойки, процентов"
              },
              {
                icon: "FileText",
                title: "Договорные споры",
                description: "Споры по исполнению, изменению и расторжению договоров"
              },
              {
                icon: "Building",
                title: "Корпоративные споры",
                description: "Споры между участниками, акционерами компаний"
              },
              {
                icon: "Truck",
                title: "Споры по поставкам",
                description: "Конфликты по качеству, срокам поставки товаров"
              },
              {
                icon: "Home",
                title: "Споры по недвижимости",
                description: "Арбитражные споры о праве собственности на недвижимость"
              },
              {
                icon: "Scale",
                title: "Банкротные споры",
                description: "Споры в рамках процедур банкротства"
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

      {/* Court Levels */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Инстанции арбитражных судов</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                level: "1",
                title: "Арбитражный суд субъекта РФ",
                description: "Рассмотрение дел в первой инстанции",
                jurisdiction: "Споры на сумму от 400 000 рублей"
              },
              {
                level: "2", 
                title: "Арбитражный апелляционный суд",
                description: "Пересмотр решений первой инстанции",
                jurisdiction: "Апелляционные жалобы"
              },
              {
                level: "3",
                title: "Арбитражный суд округа",
                description: "Кассационное обжалование",
                jurisdiction: "Кассационные жалобы"
              }
            ].map((court, index) => (
              <Card key={index} className="text-center bg-white border-0 shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">{court.level}</span>
                  </div>
                  <CardTitle className="text-xl">{court.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground">{court.description}</p>
                  <div className="bg-secondary/50 p-3 rounded-lg">
                    <p className="text-sm font-medium">{court.jurisdiction}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Этапы арбитражного процесса</h2>
          
          <div className="grid md:grid-cols-5 gap-6">
            {[
              {
                step: "01",
                title: "Подготовка иска",
                description: "Анализ ситуации, сбор доказательств, составление искового заявления"
              },
              {
                step: "02",
                title: "Подача в суд",
                description: "Подача искового заявления в арбитражный суд"
              },
              {
                step: "03",
                title: "Подготовка к делу",
                description: "Предварительное судебное заседание, обмен документами"
              },
              {
                step: "04",
                title: "Судебные заседания",
                description: "Рассмотрение дела по существу, исследование доказательств"
              },
              {
                step: "05",
                title: "Решение суда",
                description: "Вынесение решения, его обжалование или исполнение"
              }
            ].map((item, index) => (
              <Card key={index} className="text-center bg-white border-0 shadow-lg">
                <CardHeader>
                  <div className="text-3xl font-bold text-primary mb-2">{item.step}</div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Наша статистика</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "200+", label: "Выигранных дел" },
              { number: "85%", label: "Успешных исходов" },
              { number: "50М+", label: "Взысканных рублей" },
              { number: "10", label: "Лет опыта" }
            ].map((stat, index) => (
              <Card key={index} className="text-center bg-white border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Нужна помощь в арбитражном споре?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Защитите свои коммерческие интересы с помощью опытных арбитражных управляющих
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