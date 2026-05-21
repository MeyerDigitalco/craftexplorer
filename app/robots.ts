import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://crafterexplorer.co.uk/sitemap.xml',
    host: 'https://crafterexplorer.co.uk',
  }
}
