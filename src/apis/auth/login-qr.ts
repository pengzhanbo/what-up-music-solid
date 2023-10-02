import { post } from '~/modules/request'

/**
 * 调用此接口可生成一个 key
 */
export const generateQRKey = post<
  never,
  {
    code: number
    data: {
      code: number
      unikey: string
    }
  }
>('/login/qr/key', false)

export interface GenerateQRParams {
  key: string
  qrimg?: 1
}

export interface GenerateQRResPonse {
  code: number
  data: {
    qrurl: string
    qrimg: string
  }
}

/**
 * 调用此接口传入上一个接口生成的 key 可生成二维码图片的 base64 和二维码信息,
 * 可使用 base64 展示图片,或者使用二维码信息内容自行使用第三方二维码生成库渲染二维码
 */
export const generateQR = post<GenerateQRParams, GenerateQRResPonse>(
  '/login/qr/create',
  false,
)

export interface CheckQRKeyParams {
  key: string
  noCookie?: 'true'
}

export interface CheckQRKeyResponse {
  cookie: string
  code: 800 | 801 | 802 | 803
  message: string
}

/**
 * 轮询此接口可获取二维码扫码状态,
 * 800 为二维码过期,
 * 801 为等待扫码,
 * 802 为待确认,
 * 803 为授权登录成功(803 状态码下会返回 cookies),
 * 如扫码后返回502,则需加上noCookie参数,如&noCookie=true
 */
export const checkQRKey = post<CheckQRKeyParams, CheckQRKeyResponse>(
  '/login/qr/check',
  false,
)
