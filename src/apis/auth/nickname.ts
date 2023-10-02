import { post } from '~/modules/request'

/**
 * 刚注册的账号(需登录),调用此接口 ,可初始化昵称
 */
export const initNickname = post<{
  nickname: string
}>('/activate/init/profile', false)

/**
 * 可检测昵称是否重复,并提供备用昵称
 */
export const checkNickname = post<{
  nickname: string
}>('/nickname/check', false)
