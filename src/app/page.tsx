import workdata from '~/../public/work/data.json';
import { Card } from '~/components/card';
import { ScrollReveal } from '~/components/scroll-reveal';

export default function Home() {
  const visibleWork = workdata.work.filter(({ hidden }) => !hidden);

  return (
    <div className="flex flex-col gap-6">
      <p className="text-center whitespace-pre-line">
        johns hopkins alum{'\n'}
        studying neural circuits of learning{'\n'}& infectious disease modeling
      </p>
      <div>
        <h3 className="text-center sm:text-left">Work</h3>
        <div className="flex flex-wrap items-stretch justify-center gap-4 pt-2">
          {visibleWork.map((data, i) => (
            <ScrollReveal
              key={data.title}
              delay={i * 100}
              className="max-w-full min-w-56 grow basis-0"
            >
              <Card
                title={data.title}
                image={data.image}
                link={data.link}
                description={data.description}
              />
            </ScrollReveal>
          ))}
          {visibleWork.length % 2 === 1 && (
            <div className="max-w-full min-w-56 grow basis-0 self-stretch" />
          )}
        </div>
      </div>
    </div>
  );
}
