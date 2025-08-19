import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

export default function CriminalLaw() {
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
              Уголовное право
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Защита по уголовным делам. Представительство в суде, 
              обжалование приговоров, защита прав подозреваемых и обвиняемых.
            </p>
            <Button size="lg" className="text-lg px-8 py-6">
              <Icon name="Phone" className="mr-2" size={20} />
              Срочная консультация
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Услуги по уголовному праву</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: "Shield",
                title: "Защита в суде",
                description: "Профессиональная защита интересов подозреваемых и обвиняемых"
              },
              {
                icon: "FileText",
                title: "Досудебное производство",
                description: "Участие в следственных действиях, обжалование решений следователя"
              },
              {
                icon: "Scale",
                title: "Апелляция и кассация",
                description: "Обжалование приговоров и решений в вышестоящих инстанциях"
              },
              {
                icon: "Users",
                title: "Защита потерпевших",
                description: "Представление интересов потерпевших в уголовном процессе"
              },
              {
                icon: "Clock",
                title: "Экстренная помощь",
                description: "Круглосуточная помощь при задержании и аресте"
              },
              {
                icon: "FileCheck",
                title: "Реабилитация",
                description: "Восстановление нарушенных прав, возмещение ущерба"
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

      {/* Emergency */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto bg-red-600 text-white border-0">
            <CardHeader className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="AlertTriangle" className="text-white" size={40} />
              </div>
              <CardTitle className="text-3xl">Экстренная помощь 24/7</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <p className="text-xl opacity-90">
                Если вас задержали или вызывают на допрос - немедленно свяжитесь с нами!
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Что делать при задержании:</h3>
                  <ul className="text-left space-y-1 opacity-90">
                    <li>• Требуйте адвоката</li>
                    <li>• Не подписывайте документы</li>
                    <li>• Не давайте показания без адвоката</li>
                    <li>• Сообщите родственникам</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Мы поможем:</h3>
                  <ul className="text-left space-y-1 opacity-90">
                    <li>• Прибудем в течение часа</li>
                    <li>• Обеспечим правовую защиту</li>
                    <li>• Проконтролируем законность действий</li>
                    <li>• Добьемся освобождения</li>
                  </ul>
                </div>
              </div>
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6 text-red-600">
                <Icon name="Phone" className="mr-2" size={20} />
                Вызвать адвоката: +7 (495) 123-45-67
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Нужна защита по уголовному делу?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Не оставайтесь один на один с обвинением - получите профессиональную защиту
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