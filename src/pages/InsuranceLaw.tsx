import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

export default function InsuranceLaw() {
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
              Страховое право
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Защита прав страхователей, взыскание страховых выплат, 
              споры со страховыми компаниями, ОСАГО и КАСКО.
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
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Услуги по страховому праву</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: "Car",
                title: "ОСАГО и КАСКО",
                description: "Взыскание выплат по автострахованию, споры с страховщиками"
              },
              {
                icon: "Heart",
                title: "Медицинское страхование",
                description: "Защита прав по ОМС и ДМС, получение медицинских услуг"
              },
              {
                icon: "Home",
                title: "Страхование имущества",
                description: "Возмещение ущерба по страхованию недвижимости и имущества"
              },
              {
                icon: "Briefcase",
                title: "Страхование ответственности",
                description: "Профессиональная ответственность, страхование рисков"
              },
              {
                icon: "Plane",
                title: "Страхование путешествий",
                description: "Возмещение расходов по туристическому страхованию"
              },
              {
                icon: "Shield",
                title: "Страхование жизни",
                description: "Получение выплат по договорам страхования жизни"
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

      {/* OSAGO vs KASKO */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">ОСАГО vs КАСКО</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" className="text-blue-600" size={32} />
                </div>
                <CardTitle className="text-2xl text-center">ОСАГО</CardTitle>
                <CardDescription className="text-center">Обязательное страхование автогражданской ответственности</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h3 className="font-semibold">Что покрывает:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-3">
                      <Icon name="Check" className="text-primary mt-1" size={16} />
                      <span className="text-sm">Ущерб чужому автомобилю</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Icon name="Check" className="text-primary mt-1" size={16} />
                      <span className="text-sm">Вред здоровью пострадавших</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Icon name="Check" className="text-primary mt-1" size={16} />
                      <span className="text-sm">Ущерб имуществу третьих лиц</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm"><strong>Лимит:</strong> до 500 000 руб. по имуществу, до 500 000 руб. по жизни и здоровью</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Car" className="text-green-600" size={32} />
                </div>
                <CardTitle className="text-2xl text-center">КАСКО</CardTitle>
                <CardDescription className="text-center">Добровольное комплексное автострахование</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h3 className="font-semibold">Что покрывает:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-3">
                      <Icon name="Check" className="text-primary mt-1" size={16} />
                      <span className="text-sm">Ущерб собственному автомобилю</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Icon name="Check" className="text-primary mt-1" size={16} />
                      <span className="text-sm">Угон и хищение</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Icon name="Check" className="text-primary mt-1" size={16} />
                      <span className="text-sm">Стихийные бедствия</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-sm"><strong>Лимит:</strong> страховая сумма по договору (обычно стоимость автомобиля)</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Claims Process */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Процесс получения выплаты</h2>
          
          <div className="grid md:grid-cols-5 gap-6">
            {[
              {
                step: "01",
                title: "Уведомление",
                description: "Сообщение страховщику о наступлении страхового случая"
              },
              {
                step: "02",
                title: "Документы",
                description: "Подача заявления и необходимых документов"
              },
              {
                step: "03",
                title: "Экспертиза",
                description: "Проведение независимой оценки ущерба"
              },
              {
                step: "04",
                title: "Решение",
                description: "Получение решения страховой компании"
              },
              {
                step: "05",
                title: "Выплата",
                description: "Получение страхового возмещения или обращение в суд"
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

      {/* Common Issues */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Частые проблемы</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "XCircle",
                title: "Отказ в выплате",
                description: "Необоснованный отказ страховой компании в возмещении ущерба"
              },
              {
                icon: "DollarSign",
                title: "Занижение суммы",
                description: "Выплата меньшей суммы, чем реальный размер ущерба"
              },
              {
                icon: "Clock",
                title: "Затягивание сроков",
                description: "Нарушение сроков рассмотрения заявления и выплаты"
              },
              {
                icon: "FileX",
                title: "Требование лишних документов",
                description: "Запрос документов, не предусмотренных законом"
              },
              {
                icon: "AlertTriangle",
                title: "Навязывание услуг",
                description: "Принуждение к ремонту у определенных партнеров"
              },
              {
                icon: "Ban",
                title: "Неправомерные условия",
                description: "Включение в договор условий, ущемляющих права"
              }
            ].map((issue, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={issue.icon as any} className="text-red-600" size={32} />
                  </div>
                  <CardTitle className="text-lg">{issue.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-sm">
                    {issue.description}
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
          <h2 className="text-4xl font-bold mb-6">Страховая компания отказывает в выплате?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Защитите свои права и получите справедливое возмещение ущерба
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