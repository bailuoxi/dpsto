import { AdvantageCard } from '@/components/ui/advantage-card';
import { Lightbulb, TrendingUp, Shield } from 'lucide-react';
import { advantagesData } from '@/data/content';

const icons = [Lightbulb, TrendingUp, Shield];

export function AdvantagesSection() {
  return (
    <section className="bg-muted py-20">
      <div className="section-container">
        <h2 className="mb-12 text-center text-4xl font-bold text-foreground">服务优势</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {advantagesData.map((advantage, index) => (
            <AdvantageCard key={index} icon={icons[index]} {...advantage} />
          ))}
        </div>
      </div>
    </section>
  );
}
