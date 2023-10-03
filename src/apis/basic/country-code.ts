import { post } from '~/modules/request'

/**
 * 获取国家编码列表
 */
export const getCountryCode = post('/countries/code/list')
