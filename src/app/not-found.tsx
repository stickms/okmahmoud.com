import Link from 'next/link';

export default function NotFound() {
	return (
		<div className="absolute top-0 mt-[-12.5rem] flex h-screen flex-col items-center justify-center gap-8 pt-[30rem] pb-20">
			<h1>404 - Not Found</h1>
			<Link href=".">Home</Link>
		</div>
	);
}
