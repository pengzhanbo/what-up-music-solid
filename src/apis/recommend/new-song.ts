/**
 * 推荐 最新音乐
 */
import { post } from '~/modules/request'

export const getRecommendNewSong = post<never, GetRecommendNewSongResponse>(
  '/personalized/newsong',
)

export interface GetRecommendNewSongResponse {
  code: number
  category: number
  result: {
    id: number
    type: number
    name: string
    copywriter: null | string
    picUrl: string
    canDislike: boolean
    song: {
      id: number
      name: string
      alias: string[]
      mvid: number
      hrMusic: null | any
      sqMusic: null | any
      artists: {
        id: number
        name: string
      }[]
    }
  }[]
}
