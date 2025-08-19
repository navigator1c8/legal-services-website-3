import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

export default function MigrationLaw() {
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
              Миграционное право
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Получение гражданства, оформление виз, разрешений на работу. 
              Помощь в миграционных вопросах для иностранных граждан.
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
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Миграционные услуги</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: "FileText",
                title: "Получение гражданства",
                description: "Полное сопровождение процедуры получения российского гражданства"
              },
              {
                icon: "CreditCard",
                title: "Разрешение на работу",
                description: "Оформление разрешений на работу для иностранных граждан"
              },
              {
                icon: "MapPin",
                title: "Вид на жительство",
                description: "Получение и продление вида на жительство в РФ"
              },
              {
                icon: "Plane",
                title: "Визовая поддержка",
                description: "Оформление виз различных категорий и типов"
              },
              {
                icon: "Users",
                title: "Воссоединение семьи",
                description: "Помощь в воссоединении с членами семьи в России"
              },
              {
                icon: "Shield",
                title: "Защита от депортации",
                description: "Обжалование решений о выдворении и депортации"
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

      {/* Citizenship Path */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Путь к гражданству</h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Миграционный учет",
                description: "Постановка на миграционный учет по месту пребывания",
                duration: "7 дней"
              },
              {
                step: "02",
                title: "Разрешение на временное проживание",
                description: "Получение РВП - первый шаг к постоянному проживанию",
                duration: "до 3 лет"
              },
              {
                step: "03",
                title: "Вид на жительство",
                description: "Оформление ВНЖ для долгосрочного проживания",
                duration: "5 лет"
              },
              {
                step: "04",
                title: "Гражданство РФ",
                description: "Получение российского паспорта и всех прав гражданина",
                duration: "бессрочно"
              }
            ].map((item, index) => (
              <Card key={index} className="text-center bg-white border-0 shadow-lg">
                <CardHeader>
                  <div className="text-4xl font-bold text-primary mb-4">{item.step}</div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <div className="text-sm text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full">
                    {item.duration}
                  </div>
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

      {/* Documents */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Необходимые документы</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Основные документы</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="Check" className="text-primary mt-1" size={20} />
                  <span>Паспорт иностранного гражданина</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Check" className="text-primary mt-1" size={20} />
                  <span>Миграционная карта</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Check" className="text-primary mt-1" size={20} />
                  <span>Документы об образовании</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Check" className="text-primary mt-1" size={20} />
                  <span>Справка о несудимости</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Check" className="text-primary mt-1" size={20} />
                  <span>Медицинские справки</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Дополнительные документы</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="Check" className="text-primary mt-1" size={20} />
                  <span>Документы о доходах</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Check" className="text-primary mt-1" size={20} />
                  <span>Документы о жилье</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Check" className="text-primary mt-1" size={20} />
                  <span>Сертификат о знании русского языка</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Check" className="text-primary mt-1" size={20} />
                  <span>Документы о семейном положении</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Check" className="text-primary mt-1" size={20} />
                  <span>Фотографии установленного образца</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Нужна помощь с миграционными вопросами?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Получите профессиональную поддержку в оформлении документов и получении статуса
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