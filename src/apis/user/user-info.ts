import { post } from '~/modules/request'

/**
 * 登录后调用此接口 , 传入用户 id, 可以获取用户详情
 */
export const userDetail = post<{
  id: string
}>('/user/detail')

/**
 * 登录后调用此接口 ,可获取用户账号信息
 */
export const userAccount = post<
  never,
  {
    code: number
    account: UserAccount
    profile: UserProfile
  }
>('/user/account')

/**
 * 获取用户信息 , 歌单，收藏，mv, dj 数量
 */
export const userSubCount = post('/user/subcount')

/**
 * 登录后调用此接口 ,
 * 可以获取用户等级信息,
 * 包含当前登录天数,听歌次数,下一等级需要的登录天数和听歌次数,当前等级进度,
 * @see https://music.163.com/#/user/level
 */
export const userLevel = post('/user/level')

/**
 * 登录后调用此接口 , 可以获取用户绑定信息
 */
export const userBinding = post<{
  uid: string // 用户 id
}>('/user/binding')

/**
 * 登录后调用此接口,可获取私信和通知数量信息
 */
export const userPersonalLetter = post('/pl/count')

export interface UserAccount {
  id: string | number
  userName: string
  type: number
  status: number
  whitelistAuthority: number
  createTime: number
  tokenVersion: number
  ban: number
  baoyueVersion: number
  donateVersion: number
  vipType: number
  anonimousUser: boolean
  paidFee: boolean
}

export interface UserProfile {
  userId: number | string
  userType: number
  nickname: string
  avatarImgId: number
  avatarUrl: string
  backgroundImgId: number
  backgroundUrl: string
  signature: string
  createTime: number
  userName: string
  accountType: number
  shortUserName: string
  birthday: number
  authority: number
  gender: number
  accountStatus: number
  province: number
  city: number
  authStatus: number
  description: null | string
  detailDescription: null | string
  defaultAvatar: boolean
  expertTags: null | string | string[]
  experts: null | string
  djStatus: number
  locationStatus: number
  vipType: number
  followed: boolean
  mutual: boolean
  authenticated: boolean
  lastLoginTime: number
  lastLoginIP: string
  remarkName: null | string
  viptypeVersion: number
  authenticationTypes: number
  avatarDetail: null | string
  anchor: boolean
}
