import { post } from '~/modules/request'

/**
 * 调用此接口 , 可刷新登录状态,返回内容包含新的cookie(不支持刷新二维码登录的cookie)
 */
export const refreshLogin = post('/login/refresh', false)

/**
 * 可获取登录状态
 */
export const loginState = post('/login/status', false)
