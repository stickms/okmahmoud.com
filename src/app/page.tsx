export default function Home() {
  return (
    <div className='flex flex-col min-h-screen items-center justify-center gap-4'>
      <header>
        <h1 className='text-3xl'>Mahmoud Said</h1>
        <nav className='flex items-center justify-between'>
          <a href='./work' className='pointer-events-none cursor-none text-gray-400'>Work</a>
          <a href='./blog' className='pointer-events-none cursor-none text-gray-400'>Blog</a>
          <a href='https://github.com/stickms'>GitHub</a>
        </nav>
      </header>
      <div>
        a work in progress...
      </div>
    </div>
  );
}
