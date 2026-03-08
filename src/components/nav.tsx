'use client';

// Just to avoid using client components in root/layout.tsx

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaGithub } from 'react-icons/fa';

export function Nav() {
  const pathname = usePathname();

  const isBlog = pathname.startsWith('/blog');

  return (
    <nav className="flex items-center gap-6">
      <Link className={`nav ${!isBlog ? 'target' : ''}`} href="/">
        Work
      </Link>
      <Link className={`nav ${isBlog ? 'target' : ''}`} href="/blog">
        Blog
      </Link>
      <Link
        href="https://github.com/stickms"
        target="_blank"
        rel="noopener noreferrer"
        className="nav icon"
      >
        <FaGithub />
      </Link>
    </nav>
  );
}
