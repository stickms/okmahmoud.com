import Card from '@/components/card';
import workdata from '@/../public/work/data.json';

export default function Home() {
  return (
    <div className='flex flex-col gap-4 pt-2'>
      <p className='text-center whitespace-pre-line'>
        fourth-year undergraduate at johns hopkins{'\n'}
        studying neuroscience & computer science
      </p>
      <div>
        <h3 className='text-center sm:text-left'>Work</h3>
        <div className='flex flex-wrap items-center justify-center gap-4 pt-2'>
          {workdata.work.map((data, index) => (
            <Card
              key={index}
              title={data.title}
              image={data.image}
              footer={data.link}
              description={data.description}
            />
          ))}
          {/* Odd numbered elements? We add a buffer */}
          {workdata.work.length % 2 === 1 && (
            <div className='max-w-full min-w-[14rem] flex-grow basis-0 self-stretch' />
          )}
        </div>
      </div>
    </div>
  );
}
