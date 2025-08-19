import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

export default function ConstructionLaw() {
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
              Строительное право
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Правовое сопровождение строительных проектов. Получение разрешений, 
              договоры подряда, споры с застройщиками, долевое строительство.
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
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Услуги по строительному праву</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: "FileText",
                title: "Разрешения на строительство",
                description: "Получение всех необходимых разрешительных документов"
              },
              {
                icon: "Handshake",
                title: "Договоры подряда",
                description: "Составление и анализ строительных договоров"
              },
              {
                icon: "Building",
                title: "Долевое строительство",
                description: "Защита прав участников долевого строительства"
              },
              {
                icon: "Scale",
                title: "Строительные споры",
                description: "Разрешение конфликтов между участниками строительства"
              },
              {
                icon: "CheckCircle",
                title: "Ввод в эксплуатацию",
                description: "Оформление документов для ввода объектов в эксплуатацию"
              },
              {
                icon: "Shield",
                title: "Строительная экспертиза",
                description: "Независимая экспертиза качества строительных работ"
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

      {/* Construction Stages */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Этапы строительства</h2>
          
          <div className="grid md:grid-cols-5 gap-6">
            {[
              {
                step: "01",
                title: "Проектирование",
                description: "Разработка проектной документации, получение экспертизы"
              },
              {
                step: "02",
                title: "Разрешения",
                description: "Получение разрешения на строительство и других документов"
              },
              {
                step: "03",
                title: "Строительство",
                description: "Выполнение строительно-монтажных работ"
              },
              {
                step: "04",
                title: "Приемка",
                description: "Приемка выполненных работ, устранение недостатков"
              },
              {
                step: "05",
                title: "Ввод в эксплуатацию",
                description: "Получение разрешения на ввод объекта в эксплуатацию"
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

      {/* Shared Construction */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Долевое строительство</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Права участников ДДУ</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="Check" className="text-primary mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold">Получение квартиры</h3>
                    <p className="text-sm text-muted-foreground">В срок и в соответствии с договором</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Check" className="text-primary mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold">Контроль качества</h3>
                    <p className="text-sm text-muted-foreground">Требование устранения недостатков</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Check" className="text-primary mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold">Информация о ходе строительства</h3>
                    <p className="text-sm text-muted-foreground">Получение отчетов о строительстве</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Check" className="text-primary mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold">Компенсация при нарушениях</h3>
                    <p className="text-sm text-muted-foreground">Неустойка за просрочку передачи</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Защита от недобросовестных застройщиков</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="AlertTriangle" className="text-red-500 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold">Нарушение сроков</h3>
                    <p className="text-sm text-muted-foreground">Просрочка сдачи объекта</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="AlertTriangle" className="text-red-500 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold">Изменение проекта</h3>
                    <p className="text-sm text-muted-foreground">Самовольное изменение планировки</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="AlertTriangle" className="text-red-500 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold">Некачественное строительство</h3>
                    <p className="text-sm text-muted-foreground">Нарушение строительных норм</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="AlertTriangle" className="text-red-500 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold">Банкротство застройщика</h3>
                    <p className="text-sm text-muted-foreground">Включение в реестр кредиторов</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Необходимые документы</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Для получения разрешения</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Icon name="Check" className="text-primary" size={16} />
                  <span className="text-sm">Правоустанавливающие документы на земельный участок</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" className="text-primary" size={16} />
                  <span className="text-sm">Проектная документация</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" className="text-primary" size={16} />
                  <span className="text-sm">Положительное заключение экспертизы</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" className="text-primary" size={16} />
                  <span className="text-sm">Схема планировочной организации</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Для ввода в эксплуатацию</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Icon name="Check" className="text-primary" size={16} />
                  <span className="text-sm">Разрешение на строительство</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" className="text-primary" size={16} />
                  <span className="text-sm">Акт приемки объекта</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" className="text-primary" size={16} />
                  <span className="text-sm">Заключение о соответствии</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" className="text-primary" size={16} />
                  <span className="text-sm">Технический план объекта</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Для договора подряда</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Icon name="Check" className="text-primary" size={16} />
                  <span className="text-sm">Техническое задание</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" className="text-primary" size={16} />
                  <span className="text-sm">Смета на выполнение работ</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" className="text-primary" size={16} />
                  <span className="text-sm">График выполнения работ</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" className="text-primary" size={16} />
                  <span className="text-sm">Документы подрядчика</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Планируете строительство?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Получите профессиональную правовую поддержку на всех этапах строительного проекта
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