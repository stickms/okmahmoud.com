import Image from 'next/image';
import Link from 'next/link';
import Markdown from 'react-markdown';
import { ExternalLink } from '~/components/external-link';
import { resolveImage } from '~/util/image';

type CardParams = {
  title: string;
  image: string;
  link: string;
  description: string;
  footer?: string;
};

const markdownComponents = { a: ExternalLink };

function CardContent({
  title,
  image,
  description,
  footer,
}: Omit<CardParams, 'link'>) {
  const src = resolveImage(image);
  return (
    <div className="relative h-full rounded-md outline pb-1.5">
      <div className="relative h-40 w-full">
        <Image
          className="rounded-t-md object-cover"
          src={src}
          alt={`picture for ${title}`}
          fill
          placeholder="blur"
        />
      </div>
      <div className="m-1.5 whitespace-pre-line">
        <h4 className="font-medium">{title}</h4>
        <Markdown components={markdownComponents}>{description}</Markdown>
      </div>
      {!!footer && (
        <div className="absolute right-0 bottom-0 px-2 pb-1.5 text-sm">
          <Markdown components={markdownComponents}>{footer}</Markdown>
        </div>
      )}
    </div>
  );
}

export function Card({ title, image, description, link, footer }: CardParams) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-(--foreground)! no-underline! hover:underline!"
    >
      <CardContent
        title={title}
        image={image}
        description={description}
        footer={footer}
      />
    </a>
  );
}

export function BlogCard({
  title,
  image,
  description,
  footer,
  link,
}: CardParams) {
  return (
    <Link
      href={link}
      className="w-full rounded-md text-(--foreground)! no-underline! hover:underline!"
    >
      <CardContent
        title={title}
        image={image}
        description={description}
        footer={`*${footer}*`}
      />
    </Link>
  );
}
