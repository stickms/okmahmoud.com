import WorkCard from '@/components/workcard';
import { work } from '@/../public/work/data.json';

export default function Home() {
  return (
    <div className='flex min-h-screen w-screen justify-center py-20 sm:pt-30'>
      <div className='flex w-[40rem] max-w-[85vw] flex-col gap-4'>
        <header className='flex w-full flex-col items-center sm:flex-row sm:justify-between'>
          <div className='flex flex-col text-center sm:text-left'>
            <h1 className='text-3xl'>Mahmoud Said</h1>
            <p>msaid6 [at] jhu [dot] edu</p>
          </div>
          <nav className='flex items-center gap-8'>
            <a
              href='./blog'
              className='pointer-events-none opacity-50 brightness-90'
            >
              Blog
            </a>
            <a href='https://github.com/stickms'>GitHub</a>
          </nav>
        </header>
        <div>
          <p className='text-center whitespace-pre-line'>
            fourth-year undergraduate at johns hopkins{'\n'}
            studying neuroscience & computer science
          </p>
        </div>
        <div className='flex flex-col pt-10'>
          <h2 className='text-center text-xl sm:text-left'>Work</h2>
          <div className='flex flex-wrap items-center justify-center gap-4 pt-2'>
            {work.map((data, index) => (
              <WorkCard
                key={index}
                title={data.title}
                image={data.image}
                link={data.link}
                description={data.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
