import { readdirSync } from 'node:fs';
import { join } from 'node:path';

// Only the names of the files, no extensions
export const blogFiles = readdirSync(join(process.cwd(), 'src/content/blog'))
  .filter((f) => f.endsWith('.mdx'))
  .map((f) => f.replace(/\.mdx$/, ''));
