import type { MaskPropsBasic } from '../Mask'

export enum InputSocialType {
  /** Alipay / Алипэй */
  alipay = 'alipay',
  /** Baidu / Байду */
  baidu = 'baidu',
  /** DingTalk / ДингТок */
  dingtalk = 'dingtalk',
  /** Discord / Дискорд */
  discord = 'discord',
  /** Douyin / Доуинь */
  douyin = 'douyin',
  /** Dzen / Дзен */
  dzen = 'dzen',
  /** Facebook / Фейсбук */
  facebook = 'facebook',
  /** GitHub / Гитхаб */
  github = 'github',
  /** GitLab / Гитлаб */
  gitlab = 'gitlab',
  /** Habr / Хабр */
  habr = 'habr',
  /** Instagram / Инстаграм */
  instagram = 'instagram',
  /** Line / Лайн */
  line = 'line',
  /** LinkedIn / Линкедин */
  linkedin = 'linkedin',
  /** Medium / Медиум */
  medium = 'medium',
  /** Messenger / Мессенджер */
  messenger = 'messenger',
  /** Odnoklassniki / Одноклассники */
  ok = 'ok',
  /** Pinterest / Пинтерест */
  pinterest = 'pinterest',
  /** QQ / КьюКью */
  qq = 'qq',
  /** Reddit / Реддит */
  reddit = 'reddit',
  /** Skype / Скайп */
  skype = 'skype',
  /** Snapchat / Снапчат */
  snapchat = 'snapchat',
  /** Telegram / Телеграм */
  telegram = 'telegram',
  /** TikTok / Тикток */
  tiktok = 'tiktok',
  /** Tumblr / Тамблер */
  tumblr = 'tumblr',
  /** Twitter / Твиттер */
  twitter = 'twitter',
  /** Viber / Вайбер */
  viber = 'viber',
  /** VKontakte / ВКонтакте */
  vk = 'vk',
  /** WeChat / Вичат */
  wechat = 'wechat',
  /** Weibo / Вейбо */
  weibo = 'weibo',
  /** WhatsApp / Ватсап */
  whatsapp = 'whatsapp',
  /** X / Х */
  x = 'x',
  /** Xiaohongshu / Сяохуншу */
  xiaohongshu = 'xiaohongshu',
  /** YouTube / Ютуб */
  youtube = 'youtube',
  /** Zalo / Зало */
  zalo = 'zalo',
  /** Zhihu / Чжиху */
  zhihu = 'zhihu'
}

/**
 * Type of social network value / Тип значения социальной сети
 */
export type InputSocialTypeValue = `${InputSocialType}`

export type InputSocialItem = {
  code: InputSocialType | InputSocialTypeValue
  name: string
  prefix?: string
  suffix?: string
  mask?: string | MaskPropsBasic
}
export type InputSocialList = InputSocialItem[]

/**
 * Interface for describing which components need to be connected for InputSocial work/
 * Интерфейс для описания, какие компоненты надо подключить для работы InputSocial
 */
export type InputSocialComponentInclude = {
  /** InputSocial component configuration/ Конфигурация компонента ввода */
  inputSocial?: object
}
