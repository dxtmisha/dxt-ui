import { InputSocialType, type InputSocialList } from '../types/socialTypes'

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
    code: InputSocialType.alipay,
    name: 'Alipay',
    mask: maskId
  },
  {
    code: InputSocialType.baidu,
    name: 'Baidu',
    mask: maskId
  },
  {
    code: InputSocialType.dingtalk,
    name: 'DingTalk',
    mask: maskId
  },
  {
    code: InputSocialType.discord,
    name: 'Discord',
    mask: maskUsername
  },
  {
    code: InputSocialType.douyin,
    name: 'Douyin',
    mask: maskId
  },
  {
    code: InputSocialType.dzen,
    name: 'Dzen',
    prefix: 'https://dzen.ru/',
    mask: maskId
  },
  {
    code: InputSocialType.facebook,
    name: 'Facebook',
    prefix: 'https://www.facebook.com/',
    mask: maskFacebook
  },
  {
    code: InputSocialType.github,
    name: 'GitHub',
    prefix: 'https://github.com/',
    mask: maskHyphenIdStartAlphaNum
  },
  {
    code: InputSocialType.gitlab,
    name: 'GitLab',
    prefix: 'https://gitlab.com/',
    mask: maskHyphenIdStartAlphaNum
  },
  {
    code: InputSocialType.habr,
    name: 'Habr',
    prefix: 'https://habr.com/ru/users/',
    mask: maskId
  },
  {
    code: InputSocialType.instagram,
    name: 'Instagram',
    mask: maskUsername
  },
  {
    code: InputSocialType.line,
    name: 'Line',
    mask: maskId
  },
  {
    code: InputSocialType.linkedin,
    name: 'LinkedIn',
    prefix: 'https://www.linkedin.com/in/',
    mask: maskHyphenIdStartAlphaNum
  },
  {
    code: InputSocialType.medium,
    name: 'Medium',
    mask: { mask: '@*', special: specialId }
  },
  {
    code: InputSocialType.messenger,
    name: 'Messenger',
    prefix: 'https://m.me/',
    mask: maskFacebook
  },
  {
    code: InputSocialType.ok,
    name: 'Odnoklassniki',
    prefix: 'https://ok.ru/',
    mask: maskId
  },
  {
    code: InputSocialType.pinterest,
    name: 'Pinterest',
    prefix: 'https://www.pinterest.com/',
    mask: maskId
  },
  {
    code: InputSocialType.qq,
    name: 'QQ',
    mask: maskNumber
  },
  {
    code: InputSocialType.reddit,
    name: 'Reddit',
    prefix: 'https://www.reddit.com/user/',
    mask: maskUnderHyphenId
  },
  {
    code: InputSocialType.skype,
    name: 'Skype',
    prefix: 'skype:',
    mask: {
      mask: '#*',
      special: {
        '#': { match: matchLetter },
        '*': { match: matchId, rubber: true }
      }
    }
  },
  {
    code: InputSocialType.snapchat,
    name: 'Snapchat',
    mask: maskSnapchatStartLetter
  },
  {
    code: InputSocialType.telegram,
    name: 'Telegram',
    mask: maskUsernameStrictStartLetter
  },
  {
    code: InputSocialType.tiktok,
    name: 'TikTok',
    mask: maskUsername
  },
  {
    code: InputSocialType.tumblr,
    name: 'Tumblr',
    mask: maskFacebook
  },
  {
    code: InputSocialType.twitter,
    name: 'Twitter',
    mask: maskUsernameStrict
  },
  {
    code: InputSocialType.viber,
    name: 'Viber',
    mask: maskPhone
  },
  {
    code: InputSocialType.vk,
    name: 'VKontakte',
    prefix: 'https://vk.com/',
    mask: maskVkStartLetter
  },
  {
    code: InputSocialType.wechat,
    name: 'WeChat',
    mask: maskWechatStartLetter
  },
  {
    code: InputSocialType.weibo,
    name: 'Weibo',
    prefix: 'https://weibo.com/',
    mask: maskId
  },
  {
    code: InputSocialType.whatsapp,
    name: 'WhatsApp',
    prefix: 'https://wa.me/',
    mask: maskPhone
  },
  {
    code: InputSocialType.x,
    name: 'X',
    mask: maskUsernameStrict
  },
  {
    code: InputSocialType.xiaohongshu,
    name: 'Xiaohongshu',
    mask: maskId
  },
  {
    code: InputSocialType.youtube,
    name: 'YouTube',
    prefix: 'https://www.youtube.com/@',
    mask: maskId
  },
  {
    code: InputSocialType.zalo,
    name: 'Zalo',
    prefix: 'https://zalo.me/',
    mask: maskPhone
  },
  {
    code: InputSocialType.zhihu,
    name: 'Zhihu',
    prefix: 'https://www.zhihu.com/people/',
    mask: maskId
  }
]
