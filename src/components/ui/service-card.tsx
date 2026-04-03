import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  className?: string;
}

export function ServiceCard({ image, title, description, className }: ServiceCardProps) {
  return (
    <Card className={cn('card-hover flex h-full flex-col overflow-hidden border-border/50 bg-card', className)}>
      <div className="aspect-video w-full overflow-hidden bg-muted">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="flex flex-1 flex-col p-6">
        <h3 className="mb-3 text-xl font-semibold text-foreground">{title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
