import configPromise from '@payload-config'
import { getPayload } from 'payload'
import type { Payload } from 'payload'

let cachedPayload: Payload | null = null

export async function getPayloadClient(): Promise<Payload> {
  if (cachedPayload) {
    return cachedPayload
  }

  const payload = await getPayload({
    config: configPromise,
  })

  cachedPayload = payload
  return payload
}

// Helper to get image URL from Payload media
export function getMediaUrl(media: { url?: string } | string | null | undefined): string {
  if (!media) return ''
  if (typeof media === 'string') return media
  return media.url || ''
}
