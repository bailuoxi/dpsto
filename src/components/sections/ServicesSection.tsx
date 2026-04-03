import { ServiceCard } from '@/components/ui/service-card';
import { servicesData } from '@/data/content';

export function ServicesSection() {
  return (
    <section className="bg-background py-20">
      <div className="section-container">
        <h2 className="mb-12 text-center text-4xl font-bold text-foreground">特色服务</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
