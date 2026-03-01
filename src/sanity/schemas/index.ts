import { artisan } from './artisan'
import { collection } from './collection'
import { product } from './product'
import { siteSettings, announcement, newsletter } from './siteSettings'

export const schemaTypes = [
  // Documents
  artisan,
  collection,
  product,
  siteSettings,
  announcement,
  newsletter,
]
