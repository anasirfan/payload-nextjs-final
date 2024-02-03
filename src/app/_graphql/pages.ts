import { LINK_FIELDS } from './link'
import { MEDIA } from './media'
import { META } from './meta'

export const PAGES = `
  query Pages {
    Pages(limit: 300)  {
      docs {
        slug
      }
    }
  }
`

export const PAGE = `
  query Page($slug: String, $draft: Boolean) {
    Pages(where: { slug: { equals: $slug }}, limit: 1, draft: $draft) {
      docs {
        id
        title
        hero {
          type
          richText
          links {
            link ${LINK_FIELDS()}
          }
          ${MEDIA}
        }
        aboutUs {
          aboutus_heading
          aboutus_desc
          ${MEDIA}       
        }
        carousel {
          ${MEDIA}
          title
          description
          link
          id
        }
        applications {
          description
          boxes {
            title
            ${MEDIA}
            shortDescription
            link
          }
        }
        corporate {
          id
          heading
          description
          logos {
            ${MEDIA}
          }
        }
        products {
          description
          boxes {
            title
            ${MEDIA}
            short_deescription
            link
          }
        }
        ${META}
      }
    }
  }
`
