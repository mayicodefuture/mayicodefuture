// ************************
// Strapi

type CoverImageFormat = {
  hash: string
  ext: string
  mime: string
  width: number
  height: number
  size: number
  url: string
}

export type TagType = {
  id?: number
  label: string
  textColor: string
  backgroundColor: string
  created_at?: string
  updated_at?: string
}

export type ArticleType = {
  id: string
  title: string
  content: string
  description: string
  timeOfReading: number
  coverImage: {
    id: number
    name: string
    alternativeText: string
    caption: string
    width: number
    height: number
    formats: {
      thumbnail: CoverImageFormat
      small: CoverImageFormat
      medium: CoverImageFormat
      large: CoverImageFormat
    }
    hash: string
    ext: string
    mime: string
    size: number
    url: string
    previewUrl: string | null
    provider: string
    provider_metadata: string | null
    created_at: string
    updated_at: string
  }
  tags: TagType[]
  created_at: string
  updated_at: string
}
