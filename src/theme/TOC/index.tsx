import React, { useEffect } from 'react';
import TOC from '@theme-original/TOC';

export default function TOCWrapper(
  props: React.ComponentProps<typeof TOC>,
) {
  useEffect(() => {
    const toc = document.querySelector('.table-of-contents');

    if (!toc) {
      return;
    }

    const links = toc.querySelectorAll<HTMLAnchorElement>(
      'a[href^="#"]',
    );

    links.forEach((link) => {
      const href = link.getAttribute('href');

      if (!href) {
        return;
      }

      const id = decodeURIComponent(href.slice(1));

      if (!document.getElementById(id)) {
        link.closest('li')?.remove();
      }
    });
  }, []);

  return <TOC {...props} />;
}
