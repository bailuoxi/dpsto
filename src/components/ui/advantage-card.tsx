import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';

interface AdvantageCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export function AdvantageCard({ icon: Icon, title, description, className }: AdvantageCardProps) {
  return (
    <Card className={cn('card-hover flex h-full flex-col border-border/50 bg-card', className)}>
      <CardContent className="flex flex-1 flex-col items-center p-8 text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <Icon className="h-8 w-8 text-primary" />
        </div>
        <h3 className="mb-3 text-xl font-semibold text-foreground">{title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
