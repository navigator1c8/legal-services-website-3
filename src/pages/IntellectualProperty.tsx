import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

export default function IntellectualProperty() {
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
              Интеллектуальная собственность
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Защита авторских прав, регистрация товарных знаков, 
              патентование изобретений, защита от нарушений.
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
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Услуги по интеллектуальной собственности</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: "Copyright",
                title: "Авторские права",
                description: "Защита авторских прав на произведения литературы, искусства, программы"
              },
              {
                icon: "Tag",
                title: "Товарные знаки",
                description: "Регистрация и защита товарных знаков, знаков обслуживания"
              },
              {
                icon: "Lightbulb",
                title: "Патенты",
                description: "Патентование изобретений, полезных моделей, промышленных образцов"
              },
              {
                icon: "Globe",
                title: "Доменные споры",
                description: "Разрешение споров о доменных именах, защита от киберсквоттинга"
              },
              {
                icon: "Shield",
                title: "Защита от нарушений",
                description: "Борьба с контрафактом, пиратством, недобросовестной конкуренцией"
              },
              {
                icon: "FileText",
                title: "Лицензирование",
                description: "Составление лицензионных договоров, франчайзинговых соглашений"
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

      {/* IP Types */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Виды интеллектуальной собственности</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Авторское право</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="Check" className="text-primary mt-1" size={20} />
                  <span>Литературные произведения</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Check" className="text-primary mt-1" size={20} />
                  <span>Музыкальные произведения</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Check" className="text-primary mt-1" size={20} />
                  <span>Программы для ЭВМ</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Check" className="text-primary mt-1" size={20} />
                  <span>Фотографии и видео</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Промышленная собственность</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="Check" className="text-primary mt-1" size={20} />
                  <span>Изобретения</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Check" className="text-primary mt-1" size={20} />
                  <span>Полезные модели</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Check" className="text-primary mt-1" size={20} />
                  <span>Промышленные образцы</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Check" className="text-primary mt-1" size={20} />
                  <span>Товарные знаки</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Процесс регистрации</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Поиск аналогов",
                description: "Проводим патентный поиск и анализ существующих решений"
              },
              {
                step: "02",
                title: "Подготовка заявки",
                description: "Составляем заявку с полным комплектом документов"
              },
              {
                step: "03",
                title: "Подача в Роспатент",
                description: "Подаем заявку в федеральную службу по интеллектуальной собственности"
              },
              {
                step: "04",
                title: "Получение охранного документа",
                description: "Сопровождаем процедуру до получения патента или свидетельства"
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
          <h2 className="text-4xl font-bold mb-6">Защитите свою интеллектуальную собственность</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Получите надежную защиту ваших авторских прав и изобретений
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