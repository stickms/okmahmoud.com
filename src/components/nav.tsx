'use client';

// Just to avoid using client components in root/layout.tsx

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaGithub } from 'react-icons/fa';

export default function Nav() {
	const pathname = usePathname();

	const home = pathname === '/';

	return (
		<nav className="flex items-center gap-6">
			<Link className={'nav ' + (home ? 'target' : '')} href="/">
				Work
			</Link>
			<Link className={'nav ' + (!home ? 'target' : '')} href="/blog">
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
