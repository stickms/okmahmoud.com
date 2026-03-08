import type { StaticImageData } from 'next/image';

export function resolveImage(path: string): StaticImageData {
  const [dir, filename] = [
    path.substring(1, path.lastIndexOf('/')),
    path.substring(path.lastIndexOf('/') + 1),
  ];

  // eslint-disable-next-line @typescript-eslint/no-require-imports
  return require(`~/../public/${dir}/${filename}`).default;
}
