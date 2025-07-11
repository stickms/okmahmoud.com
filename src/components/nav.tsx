'use client';

// Just to avoid using client components in root/layout.tsx

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Nav() {
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
