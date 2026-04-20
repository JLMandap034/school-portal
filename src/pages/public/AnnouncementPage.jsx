import PageHero from '../../components/common/PageHero';
import MetaManager from '../../components/seo/MetaManager';
import { announcements } from '../../content/siteContent';

function AnnouncementPage() {
  const item = announcements[0];

  return (
    <>
      <MetaManager
        seo={{
          title: `${item.title} | School Portal`,
          description: item.excerpt,
          openGraph: {
            title: `${item.title} | School Portal`,
            description: item.excerpt,
            type: 'website',
          },
        }}
        canonicalPath="/announcements/featured"
      />
      <PageHero
        eyebrow="Announcement"
        title={item.title}
        description={item.excerpt}
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Announcement' },
        ]}
      />
    </>
  );
}

export default AnnouncementPage;
