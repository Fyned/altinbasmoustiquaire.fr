import SEOHead from '../common/SEOHead'
import { seoConfig } from '../../lib/seo'

export default function PageWrapper({ seoKey, children, className }) {
  const seo = seoConfig[seoKey]

  return (
    <>
      {seo && (
        <SEOHead
          title={seo.title}
          description={seo.description}
          canonical={seo.canonical}
          noindex={seo.noindex}
        />
      )}
      <main className={className}>
        {children}
      </main>
    </>
  )
}
