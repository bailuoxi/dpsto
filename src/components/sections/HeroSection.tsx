import { Button } from '@/components/ui/button';

export function HeroSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background">
      {/* 品牌标识 */}
      <div className="absolute left-8 top-8 z-10">
        <h1 className="text-2xl font-bold tracking-wider text-foreground">DPSTO</h1>
      </div>

      {/* 主内容 */}
      <div className="section-container relative z-10 text-center">
        <h2 className="mb-8 text-5xl font-bold leading-tight text-foreground md:text-6xl lg:text-7xl">
          专注于打造独立游戏
          <br />
          本地化解决方案
        </h2>
        <Button
          size="lg"
          onClick={scrollToContact}
          className="bg-primary px-8 py-6 text-lg font-medium text-primary-foreground hover:bg-primary/90"
        >
          立即咨询
        </Button>
      </div>

      {/* 装饰性渐变背景 */}
      <div className="absolute inset-0 -z-0 opacity-30">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-chart-2/20 blur-3xl" />
      </div>
    </section>
  );
}
