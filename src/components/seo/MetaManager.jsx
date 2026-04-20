import { useEffect } from 'react';
import { siteSettings } from '../../content/siteContent';

const upsertMetaTag = (selector, attributes) => {
  let tag = document.head.querySelector(selector);

  if (!tag) {
    tag = document.createElement('meta');
    document.head.appendChild(tag);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    tag.setAttribute(key, value);
  });
};

function MetaManager({ seo, canonicalPath = '' }) {
  useEffect(() => {
    if (!seo) {
      return undefined;
    }

    document.title = seo.title;

    upsertMetaTag('meta[name="description"]', {
      name: 'description',
      content: seo.description,
    });

    upsertMetaTag('meta[property="og:title"]', {
      property: 'og:title',
      content: seo.openGraph?.title || seo.title,
    });
    upsertMetaTag('meta[property="og:description"]', {
      property: 'og:description',
      content: seo.openGraph?.description || seo.description,
    });
    upsertMetaTag('meta[property="og:type"]', {
      property: 'og:type',
      content: seo.openGraph?.type || 'website',
    });
    upsertMetaTag('meta[property="og:image"]', {
      property: 'og:image',
      content: seo.openGraph?.image?.src || siteSettings.logo.src,
    });

    let canonicalLink = document.head.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', `https://www.schoolportal.edu.ph${canonicalPath}`);

    return undefined;
  }, [canonicalPath, seo]);

  return null;
}

export default MetaManager;
