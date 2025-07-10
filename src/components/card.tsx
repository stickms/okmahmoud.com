'use client';

import Image from 'next/image';
import Link from 'next/link';
import Markdown from 'react-markdown';

type CardParams = {
  title: string;
  image: string;
  footer: string;
  description: string;
};

export default function Card({
  title,
  image,
  description,
  footer
}: CardParams) {
  return (
    <div className='relative max-w-full min-w-[14rem] flex-grow basis-0 self-stretch rounded-md pb-6 outline'>
      <div className='relative h-[10rem] w-full'>
        <Image
          className='rounded-t-md object-cover'
          src={image}
          alt={`picture for ${title}`}
          fill={true}
          priority
        />
      </div>
      <div className='p-1.5 whitespace-pre-line'>
        <h4>{title}</h4>
        <Markdown
          components={{
            a: ({ href, children }) => (
              <a target='_blank' rel='noopener noreferrer' href={href}>
                {children}
              </a>
            )
          }}
        >
          {description}
        </Markdown>
      </div>
      <div className='absolute right-0 bottom-0 px-2 pb-1.5'>
        <Markdown
          components={{
            a: ({ href, children }) => (
              <a target='_blank' rel='noopener noreferrer' href={href}>
                {children}
              </a>
            )
          }}
        >
          {footer}
        </Markdown>
      </div>
    </div>
  );
}

export function BlogCard({
  title,
  image,
  description,
  footer,
  link
}: CardParams & { link: string }) {
  return (
    <Link
      href={link}
      className='!text-[var(--foreground)] !no-underline'
      style={undefined}
    >
      <div className='w-full rounded-md hover:underline'>
        <Card
          title={title}
          image={image}
          description={description}
          footer={`*${footer}*`}
        />
      </div>
    </Link>
  );
}
