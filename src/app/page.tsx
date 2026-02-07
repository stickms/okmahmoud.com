import workdata from '~/../public/work/data.json';
import Card from '~/components/card';

export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      <p className="text-center whitespace-pre-line">
        johns hopkins alum{'\n'}
        studying neural circuits of learning{'\n'}& infectious disease modeling
      </p>
      <div>
        <h3 className="text-center sm:text-left">Work</h3>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          {workdata.work
            .filter(({ hidden }) => !hidden)
            .map((data) => (
              <Card
                key={data.title}
                title={data.title}
                image={data.image}
                footer={data.link}
                description={data.description}
              />
            ))}
          {/* Odd numbered elements? We add a buffer */}
          {workdata.work.length % 2 === 1 && (
            <div className="max-w-full min-w-56 grow basis-0 self-stretch" />
          )}
        </div>
      </div>
    </div>
  );
}
