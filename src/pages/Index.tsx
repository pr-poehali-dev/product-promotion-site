import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const features = [
    {
      icon: "Watch",
      title: "Швейцарский механизм",
      description: "Точность до доли секунды благодаря легендарному швейцарскому качеству"
    },
    {
      icon: "Shield",
      title: "Защита от воды",
      description: "Водонепроницаемость до 100 метров для любых условий"
    },
    {
      icon: "Gem",
      title: "Премиум материалы",
      description: "Нержавеющая сталь и сапфировое стекло высшего класса"
    },
    {
      icon: "Infinity",
      title: "Пожизненная гарантия",
      description: "Уверенность в качестве на долгие годы"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-montserrat text-2xl font-bold tracking-tight">
            CHRONOS
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#hero" className="text-sm font-medium hover:text-accent transition-colors">Главная</a>
            <a href="#features" className="text-sm font-medium hover:text-accent transition-colors">Преимущества</a>
            <Button variant="default" className="bg-primary hover:bg-primary/90">
              Купить
            </Button>
          </div>
          <button className="md:hidden">
            <Icon name="Menu" size={24} />
          </button>
        </div>
      </nav>

      <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="inline-block">
                <span className="text-sm font-medium tracking-wider text-muted-foreground uppercase">
                  Новая коллекция 2025
                </span>
              </div>
              <h1 className="font-montserrat text-5xl md:text-7xl font-bold leading-tight tracking-tight">
                Время —<br />
                это роскошь
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                Швейцарское качество встречается с современным дизайном. 
                Каждая деталь создана для тех, кто ценит совершенство.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                  Смотреть коллекцию
                </Button>
                <Button size="lg" variant="outline" className="border-2">
                  Узнать больше
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-8">
                <div>
                  <div className="font-montserrat text-3xl font-bold">500+</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
                <div className="h-12 w-px bg-border" />
                <div>
                  <div className="font-montserrat text-3xl font-bold">15</div>
                  <div className="text-sm text-muted-foreground">Лет на рынке</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent rounded-full blur-3xl" />
              <img 
                src="https://cdn.poehali.dev/projects/1abb3ca0-2d86-4805-9a3b-c6b8f14abd2b/files/93ad2ef3-4596-414c-8e8c-bade7e2f9294.jpg"
                alt="Luxury Watch"
                className="relative w-full h-auto animate-float drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
        
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2" />
      </section>

      <section id="features" className="py-20 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <span className="text-sm font-medium tracking-wider text-accent uppercase mb-4 block">
              Почему мы
            </span>
            <h2 className="font-montserrat text-4xl md:text-5xl font-bold mb-6">
              Преимущества наших часов
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Каждая модель создана с вниманием к деталям и любовью к часовому искусству
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card border-border animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6 inline-flex p-4 rounded-2xl bg-accent/10">
                  <Icon name={feature.icon} size={32} className="text-accent" />
                </div>
                <h3 className="font-montserrat text-xl font-semibold mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <img 
                src="https://cdn.poehali.dev/projects/1abb3ca0-2d86-4805-9a3b-c6b8f14abd2b/files/309faa9e-75f6-47bf-ad00-f285700ce283.jpg"
                alt="Watch Mechanism"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            
            <div className="space-y-6 order-1 md:order-2">
              <span className="text-sm font-medium tracking-wider text-accent uppercase">
                Мастерство
              </span>
              <h2 className="font-montserrat text-4xl md:text-5xl font-bold leading-tight">
                Искусство<br />часовых механизмов
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Каждый элемент механизма создан вручную швейцарскими мастерами 
                с многолетним опытом. Сотни деталей работают в идеальной синхронии, 
                создавая шедевр часового искусства.
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <Icon name="Check" size={20} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Ручная сборка</h4>
                    <p className="text-sm text-muted-foreground">Каждые часы собираются вручную опытным мастером</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <Icon name="Check" size={20} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Контроль качества</h4>
                    <p className="text-sm text-muted-foreground">Многоступенчатая проверка на каждом этапе производства</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <Icon name="Check" size={20} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Пожизненное обслуживание</h4>
                    <p className="text-sm text-muted-foreground">Бесплатное сервисное обслуживание на протяжении всей жизни часов</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-montserrat text-4xl md:text-5xl font-bold mb-6">
            Начните свою историю времени
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Запишитесь на личную консультацию в нашем бутике или закажите онлайн с доставкой
          </p>
          <Button size="lg" variant="secondary" className="px-8">
            Связаться с нами
          </Button>
        </div>
      </section>

      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="font-montserrat text-xl font-bold mb-4">CHRONOS</div>
              <p className="text-sm text-muted-foreground">
                Швейцарское качество и современный дизайн
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Коллекции</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Бутики</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Доставка</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Гарантия</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <a href="#" className="hover:text-accent transition-colors">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="hover:text-accent transition-colors">
                  <Icon name="Facebook" size={20} />
                </a>
                <a href="#" className="hover:text-accent transition-colors">
                  <Icon name="Twitter" size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © 2025 CHRONOS. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
