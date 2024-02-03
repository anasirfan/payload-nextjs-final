import React from 'react'
import { Metadata } from 'next'

import { AdminBar } from './_components/AdminBar'
import { Footer } from './_components/Footer'
import { Header } from './_components/Header'
import { Providers } from './_providers'
import { InitTheme } from './_providers/Theme/InitTheme'
import { mergeOpenGraph } from './_utilities/mergeOpenGraph'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import CssBaseline from '@mui/material/CssBaseline'
import { ChakraCustomProvider } from './_providers/ChakraCustomProvider'

import './_css/app.scss'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <InitTheme />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link href="https://db.onlinewebfonts.com/c/bb018e64d01355748d8ddc53553850b9?family=Cerebri+Sans+Regular" rel="stylesheet"/>
      </head>
      
      
      <body>
        <Providers>
          {/* <AdminBar /> */}
          {/* @ts-ignore */}
            <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <CssBaseline />
            {/* <ChakraCustomProvider> */}

              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
             
              {/* <Header /> */}
              {children}
              {/* </ChakraCustomProvider> */}
            </AppRouterCacheProvider>
             {/* @ts-ignore */}
          
          {/* @ts-expect-error */}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL || 'https://payloadcms.com'),
  twitter: {
    card: 'summary_large_image',
    creator: '@payloadcms',
  },
  openGraph: mergeOpenGraph(),
}
