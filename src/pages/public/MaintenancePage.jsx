import PageHero from '../../components/common/PageHero';
import MetaManager from '../../components/seo/MetaManager';

function MaintenancePage() {
  return (
    <>
      <MetaManager
        seo={{
          title: 'Maintenance | School Portal',
          description: 'A future-ready maintenance page for planned website downtime or system notices.',
          openGraph: {
            title: 'Maintenance | School Portal',
            description: 'A future-ready maintenance page for planned website downtime or system notices.',
            type: 'website',
          },
        }}
        canonicalPath="/maintenance"
      />
      <PageHero
        eyebrow="Maintenance"
        title="This page is ready for planned maintenance or temporary public notices."
        description="You can use this route later for controlled downtime, system upgrades, or limited public access periods."
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Maintenance' },
        ]}
      />
    </>
  );
}

export default MaintenancePage;
