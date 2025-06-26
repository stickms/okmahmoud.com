'use client';

import Image from 'next/image';
import Markdown from 'react-markdown';

type WorkCardParams = {
  title: string;
  image: string;
  link: string;
  description: string;
};

export default function WorkCard({
  title,
  image,
  link,
  description
}: WorkCardParams) {
  return (
    <div className='relative max-w-full min-w-[14rem] flex-grow basis-0 self-stretch rounded-md pb-5 outline'>
      <div className='relative h-[10rem] w-full'>
        <Image
          className='rounded-t-md object-cover'
          src={image}
          alt={`picture for ${title}`}
          fill={true}
        />
      </div>
      <div className='p-1.5 whitespace-pre-line'>
        <h3 className='text-lg'>{title}</h3>
        <Markdown>{description}</Markdown>
      </div>
      <div className='absolute right-0 bottom-0 pr-2 pb-1.5'>
        <Markdown>{link}</Markdown>
      </div>
    </div>
  );
}
