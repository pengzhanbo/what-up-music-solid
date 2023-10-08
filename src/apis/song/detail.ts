/**
 * 获取歌曲详细信息
 */
import { post } from '~/modules/request'
import type { Song } from '~/typing/song'

export const getSongDetail = post<
  {
    ids: string | number
  },
  GetSongDetailResponse
>('/song/detail')

export interface GetSongDetailResponse {
  code: number
  songs: Song[]
}
