import { buildConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import path from 'path'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

// Collections
import { Media } from './collections/Media'
import { Products } from './collections/Products'
import { Collections } from './collections/Collections'
import { Artisans } from './collections/Artisans'
import { Newsletters } from './collections/Newsletters'
import { Users } from './collections/Users'

// Globals
import { SiteSettings } from './globals/SiteSettings'
import { Announcement } from './globals/Announcement'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Users,
    Media,
    Products,
    Collections,
    Artisans,
    Newsletters,
  ],
  globals: [
    SiteSettings,
    Announcement,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || 'your-payload-secret-key-change-this',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URI || path.resolve(dirname, '../../database.sqlite'),
    },
  }),
  sharp,
})
