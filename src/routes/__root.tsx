import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'

import '../styles.css'
import { SITE_DESCRIPTION, SITE_NAME, SITE_TAGLINE } from '../config'

const OG_TITLE = `${SITE_NAME} — ${SITE_TAGLINE}`

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: `${SITE_NAME} — ${SITE_TAGLINE}`,
      },
      {
        name: 'description',
        content: SITE_DESCRIPTION,
      },
      {
        name: 'theme-color',
        content: '#0B0B12',
      },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: OG_TITLE },
      { property: 'og:description', content: SITE_DESCRIPTION },
      { property: 'og:site_name', content: SITE_NAME },
      { property: 'og:image', content: '/og-image.png' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: OG_TITLE },
      { name: 'twitter:description', content: SITE_DESCRIPTION },
      { name: 'twitter:image', content: '/og-image.png' },
    ],
    links: [
      { rel: 'icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body className="bg-[#0B0B12] text-white antialiased">
        {children}
        <Scripts />
      </body>
    </html>
  )
}
