import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

export default function MedicalLaw() {
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
              Медицинское право
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Защита прав пациентов, возмещение вреда от медицинских услуг, 
              споры с медицинскими учреждениями и страховыми компаниями.
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
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Услуги по медицинскому праву</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: "Heart",
                title: "Врачебные ошибки",
                description: "Возмещение вреда от неправильного лечения и диагностики"
              },
              {
                icon: "FileText",
                title: "Права пациентов",
                description: "Защита прав на получение качественной медицинской помощи"
              },
              {
                icon: "Shield",
                title: "Медицинское страхование",
                description: "Споры с страховыми компаниями по ОМС и ДМС"
              },
              {
                icon: "AlertTriangle",
                title: "Некачественные услуги",
                description: "Возмещение ущерба от некачественного медицинского обслуживания"
              },
              {
                icon: "Users",
                title: "Права инвалидов",
                description: "Защита прав людей с ограниченными возможностями"
              },
              {
                icon: "Scale",
                title: "Медицинские споры",
                description: "Представительство в судах по медицинским спорам"
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

      {/* Patient Rights */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Права пациентов</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Основные права</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="Check" className="text-primary mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold">Право на медицинскую помощь</h3>
                    <p className="text-sm text-muted-foreground">Получение качественной и своевременной медицинской помощи</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Check" className="text-primary mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold">Информированное согласие</h3>
                    <p className="text-sm text-muted-foreground">Право знать о своем диагнозе и методах лечения</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Check" className="text-primary mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold">Выбор врача и медучреждения</h3>
                    <p className="text-sm text-muted-foreground">Право выбирать лечащего врача и клинику</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Check" className="text-primary mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold">Конфиденциальность</h3>
                    <p className="text-sm text-muted-foreground">Защита персональных данных и медицинской тайны</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Права при нарушениях</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="Check" className="text-primary mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold">Возмещение вреда</h3>
                    <p className="text-sm text-muted-foreground">Компенсация материального и морального ущерба</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Check" className="text-primary mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold">Обжалование действий</h3>
                    <p className="text-sm text-muted-foreground">Право на жалобу в вышестоящие инстанции</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Check" className="text-primary mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold">Судебная защита</h3>
                    <p className="text-sm text-muted-foreground">Обращение в суд за защитой нарушенных прав</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Check" className="text-primary mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold">Независимая экспертиза</h3>
                    <p className="text-sm text-muted-foreground">Проведение независимой медицинской экспертизы</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Medical Errors */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Виды врачебных ошибок</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "Search",
                title: "Диагностические ошибки",
                description: "Неправильная постановка диагноза, несвоевременное выявление заболевания"
              },
              {
                icon: "Pill",
                title: "Лечебные ошибки",
                description: "Неправильное назначение лекарств, неадекватное лечение"
              },
              {
                icon: "Scissors",
                title: "Хирургические ошибки",
                description: "Ошибки при проведении операций, повреждение органов"
              },
              {
                icon: "FileX",
                title: "Организационные ошибки",
                description: "Нарушение порядка оказания медицинской помощи"
              },
              {
                icon: "AlertCircle",
                title: "Деонтологические ошибки",
                description: "Нарушение этических норм, неуважительное отношение"
              },
              {
                icon: "Clock",
                title: "Несвоевременная помощь",
                description: "Задержка в оказании неотложной медицинской помощи"
              }
            ].map((error, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={error.icon as any} className="text-red-600" size={32} />
                  </div>
                  <CardTitle className="text-lg">{error.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-sm">
                    {error.description}
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
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Как действовать при врачебной ошибке</h2>
          
          <div className="grid md:grid-cols-5 gap-6">
            {[
              {
                step: "01",
                title: "Фиксация фактов",
                description: "Сохранение всех медицинских документов и доказательств"
              },
              {
                step: "02",
                title: "Обращение к главврачу",
                description: "Подача жалобы руководству медицинского учреждения"
              },
              {
                step: "03",
                title: "Независимая экспертиза",
                description: "Проведение независимой медицинской экспертизы"
              },
              {
                step: "04",
                title: "Досудебное урегулирование",
                description: "Попытка решить вопрос в досудебном порядке"
              },
              {
                step: "05",
                title: "Судебное разбирательство",
                description: "Обращение в суд для защиты нарушенных прав"
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

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Пострадали от врачебной ошибки?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Защитите свои права и получите справедливую компенсацию за причиненный вред
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