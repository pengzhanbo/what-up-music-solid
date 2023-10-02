import { post } from '~/modules/request'

/**
 * 退出登录
 */
export const logout = post('/logout', false)
