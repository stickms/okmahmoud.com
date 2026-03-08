import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="absolute top-0 -mt-50 flex h-screen flex-col items-center justify-center gap-8 pt-120 pb-20">
      <h1>404 - Not Found</h1>
      <Link href=".">Home</Link>
    </div>
  );
}
