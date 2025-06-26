import { BlogCard } from '@/components/card';
import { blogFiles } from '@/util/pages';
import { BlogMetadata } from '@/util/types';

type BlogData = BlogMetadata & {
  link: string;
};

export default async function Blog() {
  const getBlogMetadata = async () => {
    const blogs: BlogData[] = [];

    for (const filename of blogFiles) {
      const { metadata }: { metadata: BlogMetadata } = await import(
        `@/../public/blog/${filename}.mdx`
      );

      blogs.push({ ...metadata, link: `/blog/${filename}` });
    }

    return blogs;
  };

  const blogs = await getBlogMetadata();

  return (
    <div className='flex flex-col pt-10'>
      <h3 className='text-center sm:text-left'>Blog</h3>
      <div className='flex flex-wrap items-center justify-center gap-4 pt-2'>
        {blogs.map((data, index) => (
          <BlogCard
            key={index}
            title={data.title}
            image={data.image}
            link={data.link}
            description={data.description}
            footer={data.date.toLocaleDateString('en-US')}
          />
        ))}
      </div>
    </div>
  );
}
