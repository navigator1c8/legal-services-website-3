import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

export default function DebtCollection() {
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
              Взыскание долгов
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Профессиональное взыскание дебиторской задолженности. 
              Досудебное и судебное взыскание, исполнительное производство.
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
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Услуги по взысканию долгов</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: "FileText",
                title: "Досудебное взыскание",
                description: "Направление претензий, переговоры с должниками"
              },
              {
                icon: "Scale",
                title: "Судебное взыскание",
                description: "Подача исков, представительство в судах"
              },
              {
                icon: "Gavel",
                title: "Исполнительное производство",
                description: "Сопровождение исполнения судебных решений"
              },
              {
                icon: "Search",
                title: "Розыск должников",
                description: "Поиск должников и их имущества"
              },
              {
                icon: "Building",
                title: "Корпоративные долги",
                description: "Взыскание задолженности с юридических лиц"
              },
              {
                icon: "User",
                title: "Долги физических лиц",
                description: "Взыскание с граждан и индивидуальных предпринимателей"
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
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Этапы взыскания</h2>
          
          <div className="grid md:grid-cols-5 gap-6">
            {[
              {
                step: "01",
                title: "Анализ задолженности",
                description: "Изучение документов, оценка перспектив взыскания"
              },
              {
                step: "02",
                title: "Досудебная работа",
                description: "Направление претензий, переговоры с должником"
              },
              {
                step: "03",
                title: "Судебное разбирательство",
                description: "Подача иска, участие в судебных заседаниях"
              },
              {
                step: "04",
                title: "Получение решения",
                description: "Получение исполнительного листа"
              },
              {
                step: "05",
                title: "Принудительное взыскание",
                description: "Работа с судебными приставами"
              }
            ].map((stage, index) => (
              <Card key={index} className="text-center bg-white border-0 shadow-lg">
                <CardHeader>
                  <div className="text-3xl font-bold text-primary mb-2">{stage.step}</div>
                  <CardTitle className="text-lg">{stage.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">
                    {stage.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Types of Debts */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Виды задолженности</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "Handshake",
                title: "Договорная",
                items: ["По договорам поставки", "По договорам подряда", "По договорам займа", "По договорам аренды"]
              },
              {
                icon: "DollarSign",
                title: "Денежная",
                items: ["Основной долг", "Проценты", "Неустойка", "Судебные расходы"]
              },
              {
                icon: "Clock",
                title: "Просроченная",
                items: ["До 90 дней", "От 90 до 180 дней", "От 180 дней до года", "Свыше года"]
              },
              {
                icon: "AlertTriangle",
                title: "Проблемная",
                items: ["Спорная задолженность", "Безнадежная к взысканию", "С неплатежеспособными должниками", "Требующая розыска"]
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
                      <li key={idx} className="flex items-start space-x-2">
                        <Icon name="Check" className="text-primary mt-1" size={14} />
                        <span className="text-xs">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Factors */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Факторы успешного взыскания</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "Clock",
                title: "Своевременность",
                description: "Чем раньше начато взыскание, тем выше шансы на успех",
                tips: ["Не затягивайте с претензиями", "Следите за сроками исковой давности", "Действуйте при первых признаках неплатежей"]
              },
              {
                icon: "FileCheck",
                title: "Документооборот",
                description: "Качественное документальное обоснование требований",
                tips: ["Ведите точный учет задолженности", "Сохраняйте всю переписку", "Фиксируйте факты нарушений"]
              },
              {
                icon: "Target",
                title: "Комплексный подход",
                description: "Использование всех доступных способов взыскания",
                tips: ["Досудебная работа", "Судебное взыскание", "Исполнительное производство"]
              }
            ].map((factor, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={factor.icon as any} className="text-primary" size={32} />
                  </div>
                  <CardTitle className="text-xl">{factor.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{factor.description}</p>
                  <ul className="space-y-2">
                    {factor.tips.map((tip, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <Icon name="Check" className="text-primary mt-1" size={16} />
                        <span className="text-sm">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Наша эффективность</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "150М+", label: "Взысканных рублей" },
              { number: "80%", label: "Успешных взысканий" },
              { number: "300+", label: "Довольных клиентов" },
              { number: "45", label: "Дней средний срок" }
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
          <h2 className="text-4xl font-bold mb-6">Не можете взыскать долги?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Доверьте взыскание задолженности профессионалам и получите результат
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