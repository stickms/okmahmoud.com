import Card from '@/components/card';
import workdata from '@/../public/work/data.json';

export default function Home() {
  return (
    <div className='flex flex-col pt-10'>
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
      </div>
    </div>
  );
}
