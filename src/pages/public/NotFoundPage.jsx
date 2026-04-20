import EmptyState from '../../components/states/EmptyState';
import MetaManager from '../../components/seo/MetaManager';

function NotFoundPage() {
  return (
    <>
      <MetaManager
        seo={{
          title: 'Page Not Found | School Portal',
          description: 'The page you requested could not be found.',
          openGraph: {
            title: 'Page Not Found | School Portal',
            description: 'The page you requested could not be found.',
            type: 'website',
          },
        }}
        canonicalPath="/404"
      />
      <section className="section section--full">
        <div className="container">
          <EmptyState
            title="Page not found"
            description="The page you requested does not exist or may have moved. The 404 page is ready for future CMS-aware link handling."
            action={{ label: 'Return Home', to: '/' }}
          />
        </div>
      </section>
    </>
  );
}

export default NotFoundPage;
