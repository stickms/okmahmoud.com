import Image from 'next/image';
import Link from 'next/link';
import Markdown from 'react-markdown';
import ExternalLink from '~/components/external-link';

type CardParams = {
  title: string;
  image: string;
  footer: string;
  description: string;
};

const markdownComponents = { a: ExternalLink };

export default function Card({
  title,
  image,
  description,
  footer,
}: CardParams) {
  return (
    <div className="relative max-w-full min-w-56 grow basis-0 self-stretch rounded-md pb-6 outline">
      <div className="relative h-40 w-full">
        <Image
          className="rounded-t-md object-cover"
          src={image}
          alt={`picture for ${title}`}
          fill
        />
      </div>
      <div className="p-1.5 whitespace-pre-line">
        <h4>{title}</h4>
        <Markdown components={markdownComponents}>{description}</Markdown>
      </div>
      <div className="absolute right-0 bottom-0 px-2 pb-1.5 text-sm">
        <Markdown components={markdownComponents}>{footer}</Markdown>
      </div>
    </div>
  );
}

export function BlogCard({
  title,
  image,
  description,
  footer,
  link,
}: CardParams & { link: string }) {
  return (
    <Link href={link} className="w-full text-(--foreground)! no-underline!">
      <div className="rounded-md hover:underline">
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
