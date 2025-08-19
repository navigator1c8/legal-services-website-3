import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

export default function TaxLaw() {
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
              Налоговое право
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Налоговое планирование и защита от претензий ФНС. 
              Налоговые споры, оптимизация, консультации по налогообложению.
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
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Услуги по налоговому праву</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: "Calculator",
                title: "Налоговое планирование",
                description: "Разработка схем оптимизации налогообложения в рамках закона"
              },
              {
                icon: "Scale",
                title: "Налоговые споры",
                description: "Защита интересов в спорах с налоговыми органами"
              },
              {
                icon: "FileSearch",
                title: "Налоговые проверки",
                description: "Сопровождение выездных и камеральных проверок ФНС"
              },
              {
                icon: "AlertTriangle",
                title: "Доначисления и штрафы",
                description: "Обжалование решений о доначислении налогов и штрафов"
              },
              {
                icon: "RefreshCw",
                title: "Реструктуризация долгов",
                description: "Оформление рассрочки и отсрочки по налоговым обязательствам"
              },
              {
                icon: "BookOpen",
                title: "Налоговое консультирование",
                description: "Постоянные консультации по вопросам налогообложения"
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

      {/* Tax Regimes */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Налоговые режимы</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "ОСНО",
                description: "Общая система налогообложения",
                features: ["НДС", "Налог на прибыль", "Налог на имущество"]
              },
              {
                title: "УСН",
                description: "Упрощенная система налогообложения",
                features: ["6% с доходов", "15% с прибыли", "Льготы по НДС"]
              },
              {
                title: "ПСН",
                description: "Патентная система налогообложения",
                features: ["Фиксированная стоимость", "Для ИП", "Определенные виды деятельности"]
              },
              {
                title: "НПД",
                description: "Налог на профессиональный доход",
                features: ["4% или 6%", "Самозанятые", "Без отчетности"]
              }
            ].map((regime, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl text-primary">{regime.title}</CardTitle>
                  <CardDescription className="text-sm">{regime.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {regime.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <Icon name="Check" className="text-primary" size={16} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Проблемы с налогами?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Получите профессиональную помощь в решении налоговых вопросов
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