/**
 * Supported social network types / Поддерживаемые типы социальных сетей
 */
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

/** Type of social network value / Тип значения социальной сети */
export type InputSocialTypeValue = `${InputSocialType}` | InputSocialType

/**
 * Interface describing a social network configuration item /
 * Интерфейс, описывающий элемент конфигурации социальной сети
 */
export type InputSocialItem<Mask = any> = {
  /** Social network unique identifier / Уникальный идентификатор социальной сети */
  code: InputSocialType | InputSocialTypeValue
  /** Display name of the social network / Отображаемое название социальной сети */
  name: string
  /** URL prefix for the user profile / Префикс URL для профиля пользователя */
  prefix?: string
  /** URL suffix for the user profile / Суффикс URL для профиля пользователя */
  suffix?: string
  /** Input mask configuration / Настройка маски ввода */
  mask?: Mask
  /** Custom icon name or path / Имя или путь к кастомной иконке */
  icon?: string
}

/** List of social network configurations / Список конфигураций социальных сетей */
export type InputSocialList = InputSocialItem[]

/** List of custom icons for social networks / Список кастомных иконок для социальных сетей */
export type InputSocialIcons = Partial<Record<InputSocialType, string>>
