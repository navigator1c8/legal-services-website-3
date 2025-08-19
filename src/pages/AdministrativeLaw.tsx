import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

export default function AdministrativeLaw() {
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
              Административное право
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Защита от административных правонарушений, обжалование штрафов, 
              споры с государственными органами, лицензирование.
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
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Услуги по административному праву</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: "Car",
                title: "Штрафы ГИБДД",
                description: "Обжалование штрафов за нарушения ПДД, лишение прав"
              },
              {
                icon: "Building",
                title: "Споры с госорганами",
                description: "Обжалование решений и действий государственных органов"
              },
              {
                icon: "FileText",
                title: "Лицензирование",
                description: "Получение и продление лицензий, разрешений"
              },
              {
                icon: "AlertTriangle",
                title: "Административные правонарушения",
                description: "Защита по делам об административных правонарушениях"
              },
              {
                icon: "Scale",
                title: "Административные суды",
                description: "Представительство в административных судах"
              },
              {
                icon: "Shield",
                title: "Защита бизнеса",
                description: "Защита от незаконных проверок и санкций"
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

      {/* Traffic Violations */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Нарушения ПДД</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Можно обжаловать</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="Check" className="text-green-600 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold">Превышение скорости</h3>
                    <p className="text-sm text-muted-foreground">При неисправности камер или неточных измерениях</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Check" className="text-green-600 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold">Неправильная парковка</h3>
                    <p className="text-sm text-muted-foreground">При отсутствии запрещающих знаков</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Check" className="text-green-600 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold">Проезд на красный</h3>
                    <p className="text-sm text-muted-foreground">При неисправности светофора</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Check" className="text-green-600 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold">Выезд на встречную</h3>
                    <p className="text-sm text-muted-foreground">При отсутствии разметки или знаков</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Основания для обжалования</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="AlertTriangle" className="text-primary mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold">Нарушение процедуры</h3>
                    <p className="text-sm text-muted-foreground">Неправильное оформление протокола</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="AlertTriangle" className="text-primary mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold">Недостоверные доказательства</h3>
                    <p className="text-sm text-muted-foreground">Некачественные фото или видео</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="AlertTriangle" className="text-primary mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold">Истечение срока давности</h3>
                    <p className="text-sm text-muted-foreground">Нарушение сроков привлечения к ответственности</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="AlertTriangle" className="text-primary mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold">Крайняя необходимость</h3>
                    <p className="text-sm text-muted-foreground">Нарушение для предотвращения большего вреда</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Administrative Penalties */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Виды административных наказаний</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "AlertTriangle",
                title: "Предупреждение",
                description: "Официальное порицание за совершенное правонарушение"
              },
              {
                icon: "DollarSign",
                title: "Штраф",
                description: "Денежное взыскание от 100 рублей до нескольких миллионов"
              },
              {
                icon: "XCircle",
                title: "Лишение права",
                description: "Лишение специального права (управления ТС, охоты и др.)"
              },
              {
                icon: "Clock",
                title: "Арест",
                description: "Административный арест до 15 суток"
              }
            ].map((penalty, index) => (
              <Card key={index} className="text-center bg-white border-0 shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={penalty.icon as any} className="text-primary" size={32} />
                  </div>
                  <CardTitle className="text-lg">{penalty.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">
                    {penalty.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Appeal Process */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Процедура обжалования</h2>
          
          <div className="grid md:grid-cols-5 gap-6">
            {[
              {
                step: "01",
                title: "Получение постановления",
                description: "Изучение постановления о привлечении к ответственности"
              },
              {
                step: "02",
                title: "Подготовка жалобы",
                description: "Составление жалобы с указанием оснований для отмены"
              },
              {
                step: "03",
                title: "Подача жалобы",
                description: "Направление жалобы в вышестоящий орган или суд"
              },
              {
                step: "04",
                title: "Рассмотрение",
                description: "Участие в рассмотрении жалобы, представление доказательств"
              },
              {
                step: "05",
                title: "Решение",
                description: "Получение решения об отмене или оставлении в силе"
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

      {/* Important Deadlines */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Важные сроки</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "Clock",
                title: "10 дней",
                subtitle: "Срок обжалования",
                description: "Со дня получения постановления о привлечении к административной ответственности"
              },
              {
                icon: "Calendar",
                title: "2 месяца",
                subtitle: "Срок давности",
                description: "Общий срок давности привлечения к административной ответственности"
              },
              {
                icon: "Timer",
                title: "60 дней",
                subtitle: "Срок исполнения",
                description: "Срок добровольного исполнения постановления о наложении штрафа"
              }
            ].map((deadline, index) => (
              <Card key={index} className="text-center bg-white border-0 shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={deadline.icon as any} className="text-red-600" size={32} />
                  </div>
                  <CardTitle className="text-3xl text-red-600 mb-2">{deadline.title}</CardTitle>
                  <CardDescription className="text-lg font-semibold">{deadline.subtitle}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{deadline.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Получили незаконный штраф?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Защитите свои права и обжалуйте незаконные административные наказания
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