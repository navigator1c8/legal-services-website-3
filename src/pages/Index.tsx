import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-white/95 backdrop-blur-sm fixed w-full z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">Юридические услуги</div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Главная</a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="#experience" className="text-foreground hover:text-primary transition-colors">Опыт</a>
            <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button>Консультация</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-background to-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
              Профессиональная<br />
              <span className="text-muted-foreground">юридическая помощь</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Защищаем ваши интересы с 2010 года. Комплексные правовые решения 
              для бизнеса и частных лиц.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                <Icon name="Phone" className="mr-2" size={20} />
                Получить консультацию
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                <Icon name="FileText" className="mr-2" size={20} />
                Наши услуги
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр юридических услуг для решения ваших задач
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "Scale",
                title: "Корпоративное право",
                description: "Регистрация компаний, корпоративные споры, сделки M&A"
              },
              {
                icon: "Briefcase",
                title: "Арбитражные споры",
                description: "Представительство в арбитражных судах всех инстанций"
              },
              {
                icon: "Home",
                title: "Недвижимость",
                description: "Сопровождение сделок, оформление прав, земельные вопросы"
              },
              {
                icon: "Users",
                title: "Трудовое право",
                description: "Защита трудовых прав, оформление отношений с персоналом"
              },
              {
                icon: "Shield",
                title: "Уголовная защита",
                description: "Защита в уголовных делах, представительство в суде"
              },
              {
                icon: "FileCheck",
                title: "Договорное право",
                description: "Составление и анализ договоров, правовая экспертиза"
              }
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow animate-scale-in border-0 bg-white">
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

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Наш опыт</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Более 13 лет успешной работы в сфере права
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {[
              { number: "500+", label: "Выигранных дел" },
              { number: "13", label: "Лет опыта" },
              { number: "200+", label: "Довольных клиентов" },
              { number: "98%", label: "Успешных исходов" }
            ].map((stat, index) => (
              <div key={index} className="text-center animate-slide-up">
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          <Card className="max-w-4xl mx-auto bg-white border-0 shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl mb-4">Почему выбирают нас</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: "Award",
                    title: "Высокая экспертиза",
                    description: "Команда опытных юристов с профильным образованием"
                  },
                  {
                    icon: "Clock",
                    title: "Быстрое решение",
                    description: "Оперативная работа с документами и процессами"
                  },
                  {
                    icon: "CheckCircle",
                    title: "Гарантии результата",
                    description: "Прозрачность процесса и ответственность за результат"
                  }
                ].map((advantage, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name={advantage.icon as any} className="text-primary" size={24} />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{advantage.title}</h3>
                    <p className="text-muted-foreground text-sm">{advantage.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Контакты</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Свяжитесь с нами для получения профессиональной консультации
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="bg-white border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Получить консультацию</CardTitle>
                <CardDescription className="text-center">
                  Заполните форму, и мы свяжемся с вами в течение часа
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Имя</label>
                    <input 
                      className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20" 
                      placeholder="Ваше имя" 
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Телефон</label>
                    <input 
                      className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20" 
                      placeholder="+7 (999) 123-45-67" 
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Вопрос</label>
                    <textarea 
                      className="w-full p-3 border rounded-md h-24 focus:outline-none focus:ring-2 focus:ring-primary/20" 
                      placeholder="Опишите вашу ситуацию..."
                    />
                  </div>
                </div>
                <Button className="w-full text-lg py-6">
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <Card className="bg-white border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="MapPin" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Адрес офиса</h3>
                      <p className="text-muted-foreground">
                        г. Москва, ул. Тверская, д. 15<br />
                        офис 405, 4 этаж
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="Phone" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Телефон</h3>
                      <p className="text-muted-foreground">
                        +7 (495) 123-45-67<br />
                        Ежедневно с 9:00 до 21:00
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="Mail" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Email</h3>
                      <p className="text-muted-foreground">
                        info@legal-services.ru<br />
                        Ответим в течение 2 часов
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Юридические услуги</h3>
              <p className="text-primary-foreground/80">
                Профессиональная правовая поддержка для бизнеса и частных лиц
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>Корпоративное право</li>
                <li>Арбитражные споры</li>
                <li>Недвижимость</li>
                <li>Трудовое право</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-primary-foreground/80">
                <p>+7 (495) 123-45-67</p>
                <p>info@legal-services.ru</p>
                <p>г. Москва, ул. Тверская, д. 15</p>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/80">
            <p>&copy; 2024 Юридические услуги. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}