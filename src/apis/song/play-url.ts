/**
 * 获取歌曲播放地址
 */
import { post } from '~/modules/request'
import type { SongPlayUrl } from '~/typing/song'

export const getSongPlayUrl = post<
  {
    id: string | number
    br?: number
  },
  GetSongPlayUrlResponse
>('/song/url')

export interface GetSongPlayUrlResponse {
  code: number
  data: SongPlayUrl[]
}
