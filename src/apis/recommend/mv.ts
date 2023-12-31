/**
 * 推荐 最新MV
 */
import { post } from '~/modules/request'

export const getRecommendMV = post<never, GetRecommendMVResponse>(
  '/personalized/mv',
)

export interface GetRecommendMVResponse {
  code: number
  category: number
  result: {
    id: number
    type: number
    name: string
    copywriter: string
    picUrl: string
    playCount: number
    artists: {
      id: number
      name: string
    }[]
    artistsName: string
    artistId: string
  }[]
}
