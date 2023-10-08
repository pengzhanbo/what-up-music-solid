/**
 * 获取歌词
 */
import { post } from '~/modules/request'
import type { SongLyric } from '~/typing/song'

export const getSongLyric = post<
  {
    id: number
  },
  GetSongLyric
>('/lyric/new')

export interface GetSongLyric {
  code: number
  qfy: boolean
  sfy: boolean
  sgc: boolean
  // 逐句歌词
  lrc: SongLyric
  // 逐字歌词
  yrc: SongLyric
}
