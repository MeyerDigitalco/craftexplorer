import type { MetadataRoute } from 'next'

const BASE = 'https://crafterexplorer.co.uk'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const routes = ['', '/products', '/about', '/consulting', '/contact', '/privacy', '/legal']
  return routes.map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: path === '' ? 'monthly' : 'yearly',
    priority: path === '' ? 1 : path === '/products' ? 0.9 : 0.7,
  }))
}
