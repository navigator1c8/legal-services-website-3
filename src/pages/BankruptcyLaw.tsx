import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

export default function BankruptcyLaw() {
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
              Банкротство
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Процедуры банкротства физических и юридических лиц. 
              Списание долгов, защита от кредиторов, антикризисное управление.
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
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Услуги по банкротству</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: "User",
                title: "Банкротство граждан",
                description: "Процедура банкротства физических лиц, списание долгов"
              },
              {
                icon: "Building",
                title: "Банкротство юридических лиц",
                description: "Ликвидация компаний через процедуру банкротства"
              },
              {
                icon: "Shield",
                title: "Защита от кредиторов",
                description: "Оспаривание требований кредиторов, защита имущества"
              },
              {
                icon: "RefreshCw",
                title: "Антикризисное управление",
                description: "Восстановление платежеспособности предприятий"
              },
              {
                icon: "FileText",
                title: "Мировое соглашение",
                description: "Заключение мирового соглашения с кредиторами"
              },
              {
                icon: "Scale",
                title: "Оспаривание сделок",
                description: "Признание сделок недействительными в рамках банкротства"
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

      {/* Personal vs Corporate */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Виды банкротства</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="User" className="text-primary" size={32} />
                </div>
                <CardTitle className="text-2xl text-center">Банкротство граждан</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h3 className="font-semibold">Условия:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-3">
                      <Icon name="Check" className="text-primary mt-1" size={16} />
                      <span className="text-sm">Долг от 500 000 рублей</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Icon name="Check" className="text-primary mt-1" size={16} />
                      <span className="text-sm">Просрочка более 3 месяцев</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Icon name="Check" className="text-primary mt-1" size={16} />
                      <span className="text-sm">Неспособность погасить долги</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold">Результат:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-3">
                      <Icon name="Check" className="text-primary mt-1" size={16} />
                      <span className="text-sm">Списание долгов</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Icon name="Check" className="text-primary mt-1" size={16} />
                      <span className="text-sm">Сохранение единственного жилья</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Building" className="text-primary" size={32} />
                </div>
                <CardTitle className="text-2xl text-center">Банкротство юридических лиц</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h3 className="font-semibold">Условия:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-3">
                      <Icon name="Check" className="text-primary mt-1" size={16} />
                      <span className="text-sm">Долг от 300 000 рублей</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Icon name="Check" className="text-primary mt-1" size={16} />
                      <span className="text-sm">Просрочка более 3 месяцев</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Icon name="Check" className="text-primary mt-1" size={16} />
                      <span className="text-sm">Неплатежеспособность</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold">Процедуры:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-3">
                      <Icon name="Check" className="text-primary mt-1" size={16} />
                      <span className="text-sm">Наблюдение</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Icon name="Check" className="text-primary mt-1" size={16} />
                      <span className="text-sm">Внешнее управление</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Icon name="Check" className="text-primary mt-1" size={16} />
                      <span className="text-sm">Конкурсное производство</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Этапы процедуры</h2>
          
          <div className="grid md:grid-cols-5 gap-6">
            {[
              {
                step: "01",
                title: "Анализ ситуации",
                description: "Оценка возможности банкротства"
              },
              {
                step: "02",
                title: "Подготовка документов",
                description: "Сбор необходимых справок и документов"
              },
              {
                step: "03",
                title: "Подача заявления",
                description: "Обращение в арбитражный суд"
              },
              {
                step: "04",
                title: "Судебные заседания",
                description: "Участие в судебных процедурах"
              },
              {
                step: "05",
                title: "Завершение процедуры",
                description: "Получение определения о банкротстве"
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
          <h2 className="text-4xl font-bold mb-6">Не можете справиться с долгами?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Банкротство может стать законным способом решения финансовых проблем
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