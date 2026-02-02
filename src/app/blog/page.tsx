import { BlogCard } from '~/components/card';
import { blogFiles } from '~/util/pages';
import type { BlogMetadata } from '~/util/types';

type BlogData = BlogMetadata & {
	link: string;
};

export default async function Blog() {
	const getBlogMetadata = async () => {
		const blogs: BlogData[] = [];

		for (const filename of blogFiles) {
			const { metadata }: { metadata: BlogMetadata } = await import(
				`~/../public/blog/${filename}.mdx`
			);

			blogs.push({ ...metadata, link: `/blog/${filename}` });
		}

		return blogs;
	};

	const blogs = await getBlogMetadata();

	return (
		<div className="flex w-full flex-col gap-6">
			<p className="text-center whitespace-pre-line">
				for whenever i feel like writing something
			</p>
			<div>
				<h3 className="text-center sm:text-left">Blog</h3>
				<div className="flex flex-wrap items-center justify-center gap-4 pt-2">
					{!!blogs.length && <h4 className="mt-16">nothing here yet...</h4>}
					{blogs
						.filter(({ published }) => published)
						.map((data) => (
							<BlogCard
								key={data.title}
								title={data.title}
								image={data.image}
								link={data.link}
								description={data.description}
								footer={data.date.toLocaleDateString('en-US', {
									day: 'numeric',
									month: 'long',
									year: 'numeric',
								})}
							/>
						))}
				</div>
			</div>
		</div>
	);
}
