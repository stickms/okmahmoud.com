import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    a: ({ href, children }) => (
      <a target="_blank" rel="noopener noreferrer" href={href}>
        {children}
      </a>
    ),
  };
}
