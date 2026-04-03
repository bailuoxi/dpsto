import { processData } from '@/data/content';

export function ProcessSection() {
  return (
    <section className="bg-background py-20">
      <div className="section-container">
        <h2 className="mb-12 text-center text-4xl font-bold text-foreground">服务流程</h2>
        <div className="mx-auto max-w-4xl">
          <div className="rounded-lg bg-card p-8 shadow-sm md:p-12">
            <div className="space-y-6">
              {processData.map((process) => (
                <div key={process.step} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                    {process.step}
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-foreground">{process.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {process.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
