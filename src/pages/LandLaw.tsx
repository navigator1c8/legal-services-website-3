import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

export default function LandLaw() {
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
              Земельное право
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Оформление земельных участков, изменение категории земель, 
              земельные споры, получение разрешений на строительство.
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
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Услуги по земельному праву</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: "MapPin",
                title: "Оформление участков",
                description: "Получение земельных участков в собственность или аренду"
              },
              {
                icon: "FileText",
                title: "Межевание",
                description: "Определение границ земельных участков, кадастровые работы"
              },
              {
                icon: "RefreshCw",
                title: "Изменение категории",
                description: "Перевод земель из одной категории в другую"
              },
              {
                icon: "Building2",
                title: "Разрешения на строительство",
                description: "Получение разрешительной документации для строительства"
              },
              {
                icon: "Scale",
                title: "Земельные споры",
                description: "Разрешение конфликтов по земельным участкам"
              },
              {
                icon: "Zap",
                title: "Подключение коммуникаций",
                description: "Оформление технических условий на подключение"
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

      {/* Land Categories */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Категории земель</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "Tractor",
                title: "Сельскохозяйственного назначения",
                description: "Земли для ведения сельского хозяйства",
                usage: ["Растениеводство", "Животноводство", "Фермерские хозяйства"]
              },
              {
                icon: "Building",
                title: "Населенных пунктов",
                description: "Земли в границах городов и поселков",
                usage: ["Жилая застройка", "Общественная застройка", "Производственная"]
              },
              {
                icon: "Factory",
                title: "Промышленности",
                description: "Земли для промышленных объектов",
                usage: ["Промышленность", "Энергетика", "Транспорт"]
              },
              {
                icon: "Trees",
                title: "Лесного фонда",
                description: "Покрытые лесной растительностью",
                usage: ["Лесное хозяйство", "Охрана лесов", "Лесопользование"]
              },
              {
                icon: "Droplets",
                title: "Водного фонда",
                description: "Земли водных объектов",
                usage: ["Водохранилища", "Реки", "Озера"]
              },
              {
                icon: "Shield",
                title: "Особо охраняемых территорий",
                description: "Земли природоохранного назначения",
                usage: ["Заповедники", "Национальные парки", "Памятники природы"]
              }
            ].map((category, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={category.icon as any} className="text-primary" size={32} />
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Разрешенное использование:</h4>
                    <ul className="space-y-1">
                      {category.usage.map((use, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <Icon name="Check" className="text-primary" size={14} />
                          <span className="text-xs">{use}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Процесс оформления участка</h2>
          
          <div className="grid md:grid-cols-5 gap-6">
            {[
              {
                step: "01",
                title: "Выбор участка",
                description: "Поиск и выбор подходящего земельного участка"
              },
              {
                step: "02",
                title: "Проверка документов",
                description: "Анализ правового статуса и обременений"
              },
              {
                step: "03",
                title: "Межевание",
                description: "Определение точных границ участка"
              },
              {
                step: "04",
                title: "Оформление права",
                description: "Подача документов в Росреестр"
              },
              {
                step: "05",
                title: "Получение документов",
                description: "Получение выписки из ЕГРН"
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

      {/* Documents */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Необходимые документы</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Для физических лиц</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="Check" className="text-primary mt-1" size={20} />
                  <span>Паспорт гражданина РФ</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Check" className="text-primary mt-1" size={20} />
                  <span>Заявление о предоставлении участка</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Check" className="text-primary mt-1" size={20} />
                  <span>Схема расположения участка</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Check" className="text-primary mt-1" size={20} />
                  <span>Документы об оплате госпошлины</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Для юридических лиц</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="Check" className="text-primary mt-1" size={20} />
                  <span>Учредительные документы</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Check" className="text-primary mt-1" size={20} />
                  <span>Выписка из ЕГРЮЛ</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Check" className="text-primary mt-1" size={20} />
                  <span>Доверенность представителя</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Check" className="text-primary mt-1" size={20} />
                  <span>Документы о целевом использовании</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Нужна помощь с земельными вопросами?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Получите профессиональную помощь в оформлении земельных участков
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