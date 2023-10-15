/**
 * 获取歌曲播放地址
 */
import { post } from '~/modules/request'
import type { SongPlayUrl } from '~/typing/song'

export const getSongPlayUrl = post<
  {
    id: string | number
    level:
      | 'standard'
      | 'higher'
      | 'exhigh'
      | 'lossless'
      | 'hires'
      | 'jyeffect'
      | 'sky'
      | 'jymaster'
  },
  GetSongPlayUrlResponse
>('/song/url/v1')

export interface GetSongPlayUrlResponse {
  code: number
  data: SongPlayUrl[]
}
