'use client';

// Just to avoid using client components in root/layout.tsx

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function PageSwitch() {
  const pathname = usePathname();

  if (pathname === '/blog') {
    return <Link href='/'>Work</Link>;
  } else if (pathname.startsWith('/blog/')) {
    return (
      <div className='flex gap-6'>
        <Link href='/'>Work</Link>
        <Link href='/blog'>Blog</Link>
      </div>
    );
  }

  return <Link href='/blog'>Blog</Link>;
}

export function BioText() {
  const pathname = usePathname();

  if (pathname.startsWith('/blog/')) {
    return null;
  }

  return (
    <p className='text-center whitespace-pre-line'>
      fourth-year undergraduate at johns hopkins{'\n'}
      studying neuroscience & computer science
    </p>
  );
}
