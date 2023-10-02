import { post } from '~/modules/request'

/**
 * 直接调用此接口, 可获取游客cookie,如果遇到其他接口未登录状态报400状态码需要验证的错误,
 * 可使用此接口获取游客cookie避免报错
 */
export const loginByAnonymous = post('/register/anonimous', false)
