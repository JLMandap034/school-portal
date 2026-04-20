import { siteSettings } from '../content/siteContent';

export const buildOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'School',
  name: siteSettings.schoolName,
  description: siteSettings.tagline,
  email: siteSettings.contactInfo.email,
  telephone: siteSettings.contactInfo.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: siteSettings.contactInfo.address,
    addressCountry: 'PH',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: siteSettings.mapCoordinates.lat,
    longitude: siteSettings.mapCoordinates.lng,
  },
  sameAs: siteSettings.socialLinks.map((item) => item.href),
});

export const buildArticleSchema = (post) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: post.title,
  description: post.excerpt,
  datePublished: post.publishedAt,
  dateModified: post.updatedAt,
  image: post.coverImage?.src,
  author: {
    '@type': 'Organization',
    name: post.author || siteSettings.schoolName,
  },
  publisher: {
    '@type': 'Organization',
    name: siteSettings.schoolName,
    logo: {
      '@type': 'ImageObject',
      url: siteSettings.logo.src,
    },
  },
});

export const buildEventSchema = (event) => ({
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: event.title,
  description: event.excerpt,
  startDate: event.startDate,
  endDate: event.endDate,
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  eventStatus: 'https://schema.org/EventScheduled',
  image: event.coverImage?.src,
  location: {
    '@type': 'Place',
    name: event.location,
    address: siteSettings.contactInfo.address,
  },
  organizer: {
    '@type': 'Organization',
    name: siteSettings.schoolName,
  },
});
