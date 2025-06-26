import { globby } from 'globby';
import path from 'path';

type Metadata = {
  title: string;
  description: string;
  date: Date;
};

export default async function Blog() {
  const getBlogMetadata = async () => {
    const paths = (
      await globby('public/blog/*.mdx', {
        onlyFiles: true
      })
    ).map((p) => path.basename(p));

    const blogs = [];

    for (const path of paths) {
      const { metadata }: { metadata: Metadata } = await import(
        `@/../public/blog/${path}`
      );

      blogs.push(metadata);
    }

    return blogs;
  };

  getBlogMetadata();

  return (
    <div className='flex min-h-screen min-w-screen flex-col items-center justify-center'>
      <h1 className='text-xl'>a work in progress...</h1>
    </div>
  );
}
