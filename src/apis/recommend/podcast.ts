/**
 * 推荐 电台 / 播客
 */
import { post } from '~/modules/request'

export const getRecommendPodcast = post<never, GetRecommendPodcastResponse>(
  '/personalized/djprogram',
)

export interface GetRecommendPodcastResponse {
  code: number
  category: number
  result: {
    id: number
    name: string
    copywriter: string
    picUrl: string
    type: number
    program: {
      id: number
      name: string
      dj: {
        brand: string
        nickname: string
      }
    }
  }[]
}
