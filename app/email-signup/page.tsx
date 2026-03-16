import siteMetadata from '@/data/siteMetadata'
import NewsletterForm from 'pliny/ui/NewsletterForm'

export default function EmailConfirmation() {
  return (
    <div className="flex flex-col items-start justify-start md:mt-24 md:items-center md:justify-center">
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm title="Sign up to get papers in The Lines Game!" />
        </div>
      )}
    </div>
  )
}
