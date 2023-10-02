/**
 * 查询歌手列表 分页、分类
 */
import { post } from '~/modules/request'
import type { Artist } from '~/typing'

export const getArtistList = post<GetArtistListParams, GetArtistListResponse>(
  '/artist/list',
)

export interface GetArtistListParams {
  limit?: number
  offset?: number
  type?: string
  area?: string
  initial?: string
}

export interface GetArtistListResponse {
  code: number
  artists: Artist[]
  more: boolean
}
