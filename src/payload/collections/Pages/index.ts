import type { CollectionConfig } from 'payload/types'

import { admins } from '../../access/admins'
import { adminsOrPublished } from '../../access/adminsOrPublished'
import { Archive } from '../../blocks/ArchiveBlock'
import { CallToAction } from '../../blocks/CallToAction'
import { Content } from '../../blocks/Content'
import { MediaBlock } from '../../blocks/MediaBlock'
import { hero } from '../../fields/hero'
import { slugField } from '../../fields/slug'
import { populateArchiveBlock } from '../../hooks/populateArchiveBlock'
import { populatePublishedAt } from '../../hooks/populatePublishedAt'
import { revalidatePage } from './hooks/revalidatePage'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
    preview: doc => {
      return `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/preview?url=${encodeURIComponent(
        `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/${doc.slug !== 'home' ? doc.slug : ''}`,
      )}&secret=${process.env.PAYLOAD_PUBLIC_DRAFT_SECRET}`
    },
  },
  hooks: {
    beforeChange: [populatePublishedAt],
    afterChange: [revalidatePage],
    afterRead: [populateArchiveBlock],
  },
  versions: {
    drafts: true,
  },
  access: {
    read: adminsOrPublished,
    update: admins,
    create: admins,
    delete: admins,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Hero',
          fields: [hero],
        },
        {
          label: 'Content',
          fields: [
            {
              name: 'layout',
              type: 'blocks',
              required: true,
              blocks: [CallToAction, Content, MediaBlock, Archive],
            },
          ],
        },
        {
          label: 'About Us',
          fields: [
            {
              name: 'aboutUs',
              type: 'array',
              fields: [
                {
                  name: 'aboutus_heading',
                  label: 'Heading',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'aboutus_desc',
                  label: 'Description',
                  type: 'richText',
                  required: true,
                },
                {
                  name: 'media',
                  label: 'About Us Image',
                  type: 'upload',
                  relationTo: 'media',
                },
              ],
            },
          ],
        },
        {
          label: 'Testimonials',
          fields: [
            {
              name: 'carousel',
              label: 'Testimonial Carousel',
              type: 'array',
              fields: [
                {
                  name: 'media',
                  label: 'Image',
                  type: 'upload',
                  relationTo: 'media',
                },
                {
                  name: 'title',
                  label: 'Title',
                  type: 'text',
                },
                {
                  name: 'description',
                  label: 'Text',
                  type: 'textarea',
                },
                {
                  name: 'link',
                  label: 'Link',
                  type: 'text',
                },
              ],
            },
          ],
        },
        {
          label: 'Products/Applications',
          fields: [
            {
              name: 'products',
              label: 'Products',
              type: 'array',
              fields: [
                {
                  name: 'description',
                  label: 'Description',
                  type: 'textarea',
                },
                {
                  name: 'boxes',
                  label: 'Boxes',
                  type: 'array',
                  fields: [
                    {
                      name: 'title',
                      label: 'Title',
                      type: 'text',
                    },
                    {
                      name: 'media',
                      label: 'Image',
                      type: 'upload',
                      relationTo: 'media',
                    },
                    {
                      name: 'short_deescription',
                      label: 'Short Description',
                      type: 'textarea',
                    },
                    {
                      name: 'link',
                      label: 'Link',
                      type: 'text',
                    },
                  ],
                },
              ],
            },
            {
              name: 'applications',
              label: 'Applications',
              type: 'array',
              fields: [
                {
                  name: 'description',
                  label: 'Description',
                  type: 'textarea',
                },
                {
                  name: 'boxes',
                  label: 'Boxes',
                  type: 'array',
                  fields: [
                    {
                      name: 'title',
                      label: 'Title',
                      type: 'text',
                    },
                    {
                      name: 'media',
                      label: 'Image',
                      type: 'upload',
                      relationTo: 'media',
                    },
                    {
                      name: 'shortDescription',
                      label: 'Short Description',
                      type: 'textarea',
                    },
                    {
                      name: 'link',
                      label: 'Link',
                      type: 'text',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'Corporate Components',
          fields: [
            {
              name: 'corporate',
              type: 'array',
              fields: [
                {
                  name: 'heading',
                  label: 'Heading',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'description',
                  label: 'Description',
                  type: 'richText',
                  required: true,
                },
                {
                  name: 'logos',
                  type: 'array',
                  fields: [
                    {
                      name: 'media',
                      label: 'Image',
                      type: 'upload',
                      relationTo: 'media',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    slugField(),
  ],
}
