import path from 'node:path';
import { globby } from 'globby';

// Only the names of the files, no extensions
async function getBlogFiles() {
  return (
    await globby('public/blog/*.mdx', {
      onlyFiles: true,
    })
  ).map((name) => path.basename(name).replace(/\.[^/.]+$/, ''));
}

export const blogFiles = await getBlogFiles();
