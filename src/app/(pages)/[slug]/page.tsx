import React from 'react'
import { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { Header, Page } from '../../../payload/payload-types'
import { staticHome } from '../../../payload/seed/home-static'
import { fetchDoc } from '../../_api/fetchDoc'
import { fetchDocs } from '../../_api/fetchDocs'
import  Bar from '../../_components/Bar/Bar'
import { generateMeta } from '../../_utilities/generateMeta'
import AboutUs from '../../_components/AboutUs'
import ProductApplications from '../../_components/ProductAppilications'
import Testimonials from '../../_components/Testimonials'
import OtherComponents from '../../_components/OtherComponents'
// import { Header } from '../../_components/Header'
import HeroSlider from '../../_components/HeroSilder/HeroSlider';
import { fetchHeader } from '../../_api/fetchGlobals'
import { hero } from '../../../payload/fields/hero'

export const dynamic = 'force-dynamic'

export default async function Page({ params: { slug = 'home' } }) {
  const { isEnabled: isDraftMode } = draftMode()

  let page: Page | null = null
  let header: Header | null = null


  try {
    page = await fetchDoc<Page>({
      collection: 'pages',
      slug,
      draft: isDraftMode,
    })


    header = await fetchHeader()
  } catch (error) {
    // when deploying this template on Payload Cloud, this page needs to build before the APIs are live
    // so swallow the error here and simply render the page with fallback data where necessary
    // in production you may want to redirect to a 404  page or at least log the error somewhere
    // console.error(error)
  }

  // if no `home` page exists, render a static one using dummy content
  // you should delete this code once you have a home page in the CMS
  // this is really only useful for those who are demoing this template
  if (!page && slug === 'home') {
    // page = staticHome
    return notFound()
  }

  if (!page) {
    return notFound()
  }



  return (
    <React.Fragment>
      {/* <Header content={page.aboutUs}/> */}
      <HeroSlider header={header} hero= {page.hero}/>

      <Bar/>
      <AboutUs content={page.aboutUs} />
      <ProductApplications products={page.products} applications={page.applications} />
      {/* <br/> */}
      <OtherComponents corporate={page.corporate} />
      <Testimonials content={page.carousel} />
      {/* <Blocks
        blocks={layout}
        disableTopPadding={!hero || hero?.type === 'none' || hero?.type === 'lowImpact'}
      /> */}
    </React.Fragment>
  )
}

export async function generateStaticParams() {
  try {
    const pages = await fetchDocs<Page>('pages')

    return pages?.map(({ slug }) => slug)
  } catch (error) {
    return []
  }
}

export async function generateMetadata({ params: { slug = 'home' } }): Promise<Metadata> {
  const { isEnabled: isDraftMode } = draftMode()

  let page: Page | null = null

  try {
    page = await fetchDoc<Page>({
      collection: 'pages',
      slug,
      draft: isDraftMode,
    })
  } catch (error) {
    // don't throw an error if the fetch fails
    // this is so that we can render static fallback pages for the demo
    // when deploying this template on Payload Cloud, this page needs to build before the APIs are live
    // in production you may want to redirect to a 404  page or at least log the error somewhere
  }

  if (!page) {
    if (slug === 'home') page = staticHome
  }

  return generateMeta({ doc: page })
}
