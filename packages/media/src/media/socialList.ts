import type { InputSocialList } from '../types/socialTypes'

/**
 * Match only letters (case-insensitive) /
 * Сопоставление только букв (без учета регистра)
 */
const matchLetter = /[a-z]/i
/**
 * Match letters and digits (case-insensitive) /
 * Сопоставление букв и цифр (без учета регистра)
 */
const matchAlphaNum = /[a-z0-9]/i
/**
 * Match typical identifier characters (letters, digits, underscore, dot, hyphen) /
 * Сопоставление символов типичного идентификатора (буквы, цифры, подчеркивание, точка, дефис)
 */
const matchId = /[a-z0-9_.-]/i
/**
 * Match strict username characters (letters, digits, underscore) /
 * Сопоставление строгих символов имени пользователя (буквы, цифры, подчеркивание)
 */
const matchUsernameStrict = /[a-z0-9_]/i
/**
 * Match username characters (letters, digits, underscore, dot) /
 * Сопоставление символов имени пользователя (буквы, цифры, подчеркивание, точка)
 */
const matchUsername = /[a-z0-9_.]/i
/**
 * Match hyphenated ID characters (letters, digits, hyphen) /
 * Сопоставление символов идентификатора с дефисом (буквы, цифры, дефис)
 */
const matchHyphenId = /[a-z0-9-]/i
/**
 * Match ID characters with underscore and hyphen /
 * Сопоставление символов идентификатора с подчеркиванием и дефисом
 */
const matchUnderHyphenId = /[a-z0-9_-]/i
/**
 * Match Snapchat username characters (letters, digits, underscore, dot) /
 * Сопоставление символов имени пользователя Snapchat (буквы, цифры, подчеркивание, точка)
 */
const matchSnapchat = /[a-z0-9_.]/i
/**
 * Match WeChat username characters (letters, digits, underscore, hyphen) /
 * Сопоставление символов имени пользователя WeChat (буквы, цифры, подчеркивание, дефис)
 */
const matchWechat = /[a-z0-9_-]/i
/**
 * Match Facebook username characters (letters, digits, dot) /
 * Сопоставление символов имени пользователя Facebook (буквы, цифры, точка)
 */
const matchFacebook = /[a-z0-9.]/i
/**
 * Match only numeric digits /
 * Сопоставление только числовых цифр
 */
const matchNumber = /[0-9]/
/**
 * Match phone number digits and plus sign /
 * Сопоставление цифр номера телефона и знака плюс
 */
const matchPhone = /[0-9+]/

/**
 * Special characters mapping for identifier mask /
 * Отображение специальных символов для маски идентификатора
 */
const specialId = { '*': { match: matchId, rubber: true } }
/**
 * Special characters mapping for strict username mask /
 * Отображение специальных символов для строгой маски имени пользователя
 */
const specialUsernameStrict = { '*': { match: matchUsernameStrict, rubber: true } }
/**
 * Special characters mapping for strict username starting with a letter /
 * Отображение специальных символов для строгого имени пользователя, начинающегося с буквы
 */
const specialUsernameStrictStartLetter = {
  '#': { match: matchLetter },
  '*': { match: matchUsernameStrict, rubber: true }
}
/**
 * Special characters mapping for username mask /
 * Отображение специальных символов для маски имени пользователя
 */
const specialUsername = { '*': { match: matchUsername, rubber: true } }
/**
 * Special characters mapping for hyphenated ID starting with alphanumeric /
 * Отображение специальных символов для идентификатора с дефисом, начинающегося с буквы или цифры
 */
const specialHyphenIdStartAlphaNum = {
  '#': { match: matchAlphaNum },
  '*': { match: matchHyphenId, rubber: true }
}
/**
 * Special characters mapping for ID with underscore and hyphen /
 * Отображение специальных символов для идентификатора с подчеркиванием и дефисом
 */
const specialUnderHyphenId = { '*': { match: matchUnderHyphenId, rubber: true } }
/**
 * Special characters mapping for WeChat ID starting with a letter /
 * Отображение специальных символов для идентификатора WeChat, начинающегося с буквы
 */
const specialWechatStartLetter = {
  '#': { match: matchLetter },
  '*': { match: matchWechat, rubber: true }
}
/**
 * Special characters mapping for Facebook username mask /
 * Отображение специальных символов для маски имени пользователя Facebook
 */
const specialFacebook = { '*': { match: matchFacebook, rubber: true } }
/**
 * Special characters mapping for numeric mask /
 * Отображение специальных символов для числовой маски
 */
const specialNumber = { '*': { match: matchNumber, rubber: true } }
/**
 * Special characters mapping for phone number mask /
 * Отображение специальных символов для маски телефонного номера
 */
const specialPhone = { '*': { match: matchPhone, rubber: true } }
/**
 * Special characters mapping for Snapchat ID starting with a letter /
 * Отображение специальных символов для идентификатора Snapchat, начинающегося с буквы
 */
const specialSnapchatStartLetter = {
  '#': { match: matchLetter },
  '*': { match: matchSnapchat, rubber: true }
}

/**
 * Input mask configuration for general identifier /
 * Конфигурация маски ввода для общего идентификатора
 */
const maskId = { mask: '*', special: specialId }
/**
 * Input mask configuration for strict username starting with @ /
 * Конфигурация маски ввода для строгого имени пользователя, начинающегося с @
 */
const maskUsernameStrict = { mask: '@*', special: specialUsernameStrict }
/**
 * Input mask configuration for strict username starting with @ and a letter /
 * Конфигурация маски ввода для строгого имени пользователя, начинающегося с @ и буквы
 */
const maskUsernameStrictStartLetter = { mask: '@#*', special: specialUsernameStrictStartLetter }
/**
 * Input mask configuration for username starting with @ /
 * Конфигурация маски ввода для имени пользователя, начинающегося с @
 */
const maskUsername = { mask: '@*', special: specialUsername }
/**
 * Input mask configuration for hyphenated ID starting with alphanumeric /
 * Конфигурация маски ввода для идентификатора с дефисом, начинающегося с буквы или цифры
 */
const maskHyphenIdStartAlphaNum = { mask: '#*', special: specialHyphenIdStartAlphaNum }
/**
 * Input mask configuration for ID with underscore and hyphen /
 * Конфигурация маски ввода для идентификатора с подчеркиванием и дефисом
 */
const maskUnderHyphenId = { mask: '*', special: specialUnderHyphenId }
/**
 * Input mask configuration for Snapchat ID starting with @ and a letter /
 * Конфигурация маски ввода для идентификатора Snapchat, начинающегося с @ и буквы
 */
const maskSnapchatStartLetter = { mask: '@#*', special: specialSnapchatStartLetter }
/**
 * Input mask configuration for WeChat ID starting with letter /
 * Конфигурация маски ввода для идентификатора WeChat, начинающегося с буквы
 */
const maskWechatStartLetter = { mask: '#*', special: specialWechatStartLetter }
/**
 * Input mask configuration for VKontakte ID starting with letter /
 * Конфигурация маски ввода для идентификатора ВКонтакте, начинающегося с буквы
 */
const maskVkStartLetter = { mask: '#*', special: specialUsernameStrictStartLetter }
/**
 * Input mask configuration for Facebook username /
 * Конфигурация маски ввода для имени пользователя Facebook
 */
const maskFacebook = { mask: '*', special: specialFacebook }
/**
 * Input mask configuration for numbers only /
 * Конфигурация маски ввода только для цифр
 */
const maskNumber = { mask: '*', special: specialNumber }
/**
 * Input mask configuration for phone numbers starting with + /
 * Конфигурация маски ввода для телефонных номеров, начинающихся с +
 */
const maskPhone = { mask: '+*', special: specialPhone }

/**
 * List of social network configurations with their input mask rules /
 * Список конфигураций социальных сетей с правилами маски ввода
 */
export const inputSocialList: InputSocialList = [
  {
    code: 'alipay',
    name: 'Alipay',
    mask: maskId
  },
  {
    code: 'baidu',
    name: 'Baidu',
    nickname: '@',
    nicknameClear: /^@*([a-z0-9_.-]+)/i,
    mask: maskId
  },
  {
    code: 'dingtalk',
    name: 'DingTalk',
    nickname: '@',
    nicknameClear: /^@*([a-z0-9_.-]+)/i,
    mask: maskId
  },
  {
    code: 'discord',
    name: 'Discord',
    nickname: '@',
    nicknameClear: /^@*([a-z0-9_.]+)/i,
    mask: maskUsername
  },
  {
    code: 'douyin',
    name: 'Douyin',
    nickname: '@',
    nicknameClear: /^@*([a-z0-9_.-]+)/i,
    mask: maskId
  },
  {
    code: 'dzen',
    name: 'Dzen',
    prefix: 'https://dzen.ru/',
    prefixClear: /^dzen\.ru(?:\/|$)/i,
    nickname: '@',
    nicknameClear: /^@*([a-z0-9_.-]+)/i,
    mask: maskId
  },
  {
    code: 'facebook',
    name: 'Facebook',
    prefix: 'https://www.facebook.com/',
    prefixClear: /^facebook\.com(?:\/|$)/i,
    nickname: '@',
    nicknameClear: /^@*([a-z0-9.]+)/i,
    mask: maskFacebook
  },
  {
    code: 'github',
    name: 'GitHub',
    prefix: 'https://github.com/',
    prefixClear: /^github\.com(?:\/|$)/i,
    nickname: '@',
    nicknameClear: /^@*([a-z0-9-]+)/i,
    mask: maskHyphenIdStartAlphaNum
  },
  {
    code: 'gitlab',
    name: 'GitLab',
    prefix: 'https://gitlab.com/',
    prefixClear: /^gitlab\.com(?:\/|$)/i,
    nickname: '@',
    nicknameClear: /^@*([a-z0-9_.-]+)/i,
    mask: maskHyphenIdStartAlphaNum
  },
  {
    code: 'habr',
    name: 'Habr',
    prefix: 'https://habr.com/ru/users/',
    prefixClear: /^habr\.com\/ru\/users(?:\/|$)/i,
    nickname: '@',
    nicknameClear: /^@*([a-z0-9_.-]+)/i,
    mask: maskId
  },
  {
    code: 'instagram',
    name: 'Instagram',
    prefix: 'https://www.instagram.com/',
    prefixClear: /^instagram\.com(?:\/|$)/i,
    nickname: '@',
    nicknameClear: /^@*([a-z0-9_.]+)/i,
    mask: maskUsername
  },
  {
    code: 'line',
    name: 'Line',
    nickname: '@',
    nicknameClear: /^@*([a-z0-9_.-]+)/i,
    mask: maskId
  },
  {
    code: 'linkedin',
    name: 'LinkedIn',
    prefix: 'https://www.linkedin.com/in/',
    prefixClear: /^linkedin\.com\/in(?:\/|$)/i,
    nickname: '@',
    nicknameClear: /^@*([a-z0-9_-]+)/i,
    mask: maskHyphenIdStartAlphaNum
  },
  {
    code: 'medium',
    name: 'Medium',
    prefix: 'https://medium.com/@',
    prefixClear: /^medium\.com(?:\/|$)/i,
    nickname: '@',
    nicknameClear: /^@*([a-z0-9_.-]+)/i,
    mask: { mask: '@*', special: specialId }
  },
  {
    code: 'messenger',
    name: 'Messenger',
    prefix: 'https://m.me/',
    prefixClear: /^m\.me(?:\/|$)/i,
    nickname: '@',
    nicknameClear: /^@*([a-z0-9.]+)/i,
    mask: maskFacebook
  },
  {
    code: 'ok',
    name: 'Odnoklassniki',
    prefix: 'https://ok.ru/',
    prefixClear: /^ok\.ru(?:\/|$)/i,
    nickname: '@',
    nicknameClear: /^@*([a-z0-9_.]+)/i,
    mask: maskId
  },
  {
    code: 'pinterest',
    name: 'Pinterest',
    prefix: 'https://www.pinterest.com/',
    prefixClear: /^pinterest\.com(?:\/|$)/i,
    nickname: '@',
    nicknameClear: /^@*([a-z0-9_.]+)/i,
    mask: maskId
  },
  {
    code: 'qq',
    name: 'QQ',
    mask: maskNumber
  },
  {
    code: 'reddit',
    name: 'Reddit',
    prefix: 'https://www.reddit.com/user/',
    prefixClear: /^reddit\.com\/user(?:\/|$)/i,
    nickname: 'u/',
    nicknameClear: /^(?:u\/)*(?!$|u\/)([a-z0-9_-]+)/i,
    mask: maskUnderHyphenId
  },
  {
    code: 'skype',
    name: 'Skype',
    prefix: 'skype:',
    prefixClear: /^skype:/i,
    mask: {
      mask: '#*',
      special: {
        '#': { match: matchLetter },
        '*': { match: matchId, rubber: true }
      }
    }
  },
  {
    code: 'snapchat',
    name: 'Snapchat',
    prefix: 'https://www.snapchat.com/add/',
    prefixClear: /^snapchat\.com\/add(?:\/|$)/i,
    nickname: '@',
    nicknameClear: /^@*([a-z0-9_.]+)/i,
    mask: maskSnapchatStartLetter
  },
  {
    code: 'telegram',
    name: 'Telegram',
    prefix: 'https://t.me/',
    prefixClear: /^(?:t|telegram)\.me(?:\/|$)/i,
    nickname: '@',
    nicknameClear: /^@*([a-z0-9_]+)/i,
    mask: maskUsernameStrictStartLetter
  },
  {
    code: 'tiktok',
    name: 'TikTok',
    prefix: 'https://www.tiktok.com/@',
    prefixClear: /^tiktok\.com(?:\/|$)/i,
    nickname: '@',
    nicknameClear: /^@*([a-z0-9_.]+)/i,
    mask: maskUsername
  },
  {
    code: 'tumblr',
    name: 'Tumblr',
    prefix: 'https://www.tumblr.com/',
    prefixClear: /^tumblr\.com(?:\/|$)/i,
    nickname: '@',
    nicknameClear: /^@*([a-z0-9_.-]+)/i,
    mask: maskFacebook
  },
  {
    code: 'twitter',
    name: 'Twitter',
    prefix: 'https://twitter.com/',
    prefixClear: /^(?:twitter|x)\.com(?:\/|$)/i,
    nickname: '@',
    nicknameClear: /^@*([a-z0-9_]+)/i,
    mask: maskUsernameStrict
  },
  {
    code: 'viber',
    name: 'Viber',
    mask: maskPhone
  },
  {
    code: 'vk',
    name: 'VKontakte',
    prefix: 'https://vk.com/',
    prefixClear: /^vk\.com(?:\/|$)/i,
    nickname: '@',
    nicknameClear: /^@*([a-z0-9_.]+)/i,
    mask: maskVkStartLetter
  },
  {
    code: 'wechat',
    name: 'WeChat',
    nickname: '@',
    nicknameClear: /^@*([a-z0-9_-]+)/i,
    mask: maskWechatStartLetter
  },
  {
    code: 'weibo',
    name: 'Weibo',
    prefix: 'https://weibo.com/',
    prefixClear: /^weibo\.com(?:\/|$)/i,
    nickname: '@',
    nicknameClear: /^@*([a-z0-9_.-]+)/i,
    mask: maskId
  },
  {
    code: 'whatsapp',
    name: 'WhatsApp',
    prefix: 'https://wa.me/',
    prefixClear: /^wa\.me(?:\/|$)/i,
    mask: maskPhone
  },
  {
    code: 'x',
    name: 'X',
    prefix: 'https://x.com/',
    prefixClear: /^(?:x|twitter)\.com(?:\/|$)/i,
    nickname: '@',
    nicknameClear: /^@*([a-z0-9_]+)/i,
    mask: maskUsernameStrict
  },
  {
    code: 'xiaohongshu',
    name: 'Xiaohongshu',
    nickname: '@',
    nicknameClear: /^@*([a-z0-9_.-]+)/i,
    mask: maskId
  },
  {
    code: 'youtube',
    name: 'YouTube',
    prefix: 'https://www.youtube.com/@',
    prefixClear: /^youtube\.com(?:\/|$)/i,
    nickname: '@',
    nicknameClear: /^@*([a-z0-9_.-]+)/i,
    mask: maskId
  },
  {
    code: 'zalo',
    name: 'Zalo',
    prefix: 'https://zalo.me/',
    prefixClear: /^zalo\.me(?:\/|$)/i,
    mask: maskPhone
  },
  {
    code: 'zhihu',
    name: 'Zhihu',
    prefix: 'https://www.zhihu.com/people/',
    prefixClear: /^zhihu\.com\/people(?:\/|$)/i,
    nickname: '@',
    nicknameClear: /^@*([a-z0-9_.-]+)/i,
    mask: maskId
  }
]
