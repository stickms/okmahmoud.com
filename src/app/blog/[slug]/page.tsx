import { blogFiles } from '@/util/pages';
import { BlogMetadata } from '@/util/types';
import { MDXContent } from 'mdx/types';
import { redirect } from 'next/navigation';
import { Metadata } from 'next';
import Image from 'next/image';

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { metadata }: { metadata: BlogMetadata } = await import(
    `@/../public/blog/${slug}.mdx`
  );

  return {
    title: metadata.title
  };
}

export function generateStaticParams() {
  return blogFiles.map((filename) => ({
    slug: filename
  }));
}

export default async function BlogPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!blogFiles.includes(slug)) {
    redirect('/404');
  }

  const {
    default: Content,
    metadata
  }: { default: MDXContent; metadata: BlogMetadata } = await import(
    `@/../public/blog/${slug}.mdx`
  );

  return (
    <div className='flex w-full flex-col gap-8'>
      {/* Metadata: image, title, desc, date */}
      <header className='flex flex-col gap-2'>
        <div className='flex flex-col items-end'>
          <div className='relative h-[16rem] w-full overflow-clip rounded-lg outline'>
            <Image
              className='object-cover'
              src={metadata.image}
              alt='Blog cover picture'
              fill
            />
          </div>
          {metadata.caption && (
            <p className='text-sm italic'>{metadata.caption}</p>
          )}
        </div>
        <div className='flex flex-col text-center sm:text-left'>
          <h1 className='text-3xl'>{metadata.title}</h1>
          <p>{metadata.description}</p>
        </div>
      </header>
      <hr className='mx-auto h-px w-[80%] border-none bg-[var(--foreground)] opacity-50' />
      <article className='prose'>
        <Content />
      </article>
      <hr className='mx-auto h-px w-[80%] border-none bg-[var(--foreground)] opacity-50' />
      <footer>
        <p className='text-center text-sm italic sm:text-left'>
          Published on{' '}
          {metadata.date.toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
          })}
        </p>
      </footer>
    </div>
  );
}
