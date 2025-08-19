import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

export default function LaborLaw() {
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
              Трудовое право
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Защита трудовых прав работников и работодателей. 
              Трудовые споры, кадровое делопроизводство, увольнения.
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
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Услуги по трудовому праву</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: "Users",
                title: "Трудовые споры",
                description: "Защита интересов в трудовых конфликтах, восстановление на работе"
              },
              {
                icon: "FileText",
                title: "Трудовые договоры",
                description: "Составление и анализ трудовых договоров, дополнительных соглашений"
              },
              {
                icon: "UserX",
                title: "Увольнения",
                description: "Правовое сопровождение процедур увольнения, защита от незаконного увольнения"
              },
              {
                icon: "Clock",
                title: "Рабочее время",
                description: "Регулирование режима работы, сверхурочные, отпуска"
              },
              {
                icon: "DollarSign",
                title: "Заработная плата",
                description: "Взыскание задолженности по зарплате, компенсации и доплаты"
              },
              {
                icon: "Shield",
                title: "Охрана труда",
                description: "Обеспечение безопасности на рабочем месте, расследование несчастных случаев"
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

      {/* For Employers */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Для работодателей</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Кадровое делопроизводство</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="Check" className="text-primary mt-1" size={20} />
                  <span>Разработка локальных нормативных актов</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Check" className="text-primary mt-1" size={20} />
                  <span>Ведение кадровой документации</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Check" className="text-primary mt-1" size={20} />
                  <span>Аудит кадровых процессов</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Check" className="text-primary mt-1" size={20} />
                  <span>Обучение HR-специалистов</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Для работников</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="Check" className="text-primary mt-1" size={20} />
                  <span>Защита от дискриминации</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Check" className="text-primary mt-1" size={20} />
                  <span>Взыскание задолженности по зарплате</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Check" className="text-primary mt-1" size={20} />
                  <span>Оспаривание дисциплинарных взысканий</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Check" className="text-primary mt-1" size={20} />
                  <span>Компенсация морального вреда</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Нужна помощь по трудовым вопросам?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Защитите свои трудовые права с помощью опытных юристов
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