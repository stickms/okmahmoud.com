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
    <div className='flex w-full flex-col gap-4 pt-2'>
      <p className='text-center whitespace-pre-line'>
        the following words are my own{'\n'}and so are any mistakes
      </p>
      <div>
        <h3 className='text-center sm:text-left'>Blog</h3>
        <div className='flex flex-wrap items-center justify-center gap-4 pt-2'>
          {blogs
            .filter(({ published }) => published)
            .map((data, index) => (
              <BlogCard
                key={index}
                title={data.title}
                image={data.image}
                link={data.link}
                description={data.description}
                footer={data.date.toLocaleDateString('en-US', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric'
                })}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
