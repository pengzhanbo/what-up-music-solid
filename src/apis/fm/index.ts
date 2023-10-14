import { post } from '~/modules/request'
import type { Album, Artist } from '~/typing'

export const getPersonalFM = post<never, GetPersonalFMResponse>(
  '/personal_fm',
  false,
)

export interface GetPersonalFMResponse {
  code: number
  popAdjust: boolean
  data: GetPersonalFMData[]
}

export interface GetPersonalFMData {
  id: number
  name: number
  alias: string[]
  artists: Artist[]
  album: Album
  copyright: 0 | 1 | null
  reason: string
  starred: boolean
  mvid: number
  hrMusic: any
  hMusic: any
  sqMusic: any
  bMusic: any
}
