import socialIconAlipay from '../assets/socials/alipay.svg'
import socialIconBaidu from '../assets/socials/baidu.svg'
import socialIconDingtalk from '../assets/socials/dingtalk.svg'
import socialIconDiscord from '../assets/socials/discord.svg'
import socialIconDouyin from '../assets/socials/douyin.svg'
import socialIconDzen from '../assets/socials/dzen.svg'
import socialIconFacebook from '../assets/socials/facebook.svg'
import socialIconGithub from '../assets/socials/github.svg'
import socialIconGitlab from '../assets/socials/gitlab.svg'
import socialIconHabr from '../assets/socials/habr.svg'
import socialIconInstagram from '../assets/socials/instagram.svg'
import socialIconLine from '../assets/socials/line.svg'
import socialIconLinkedin from '../assets/socials/linkedin.svg'
import socialIconMedium from '../assets/socials/medium.svg'
import socialIconMessenger from '../assets/socials/messenger.svg'
import socialIconOk from '../assets/socials/ok.svg'
import socialIconPinterest from '../assets/socials/pinterest.svg'
import socialIconQq from '../assets/socials/qq.svg'
import socialIconReddit from '../assets/socials/reddit.svg'
import socialIconSkype from '../assets/socials/skype.svg'
import socialIconSnapchat from '../assets/socials/snapchat.svg'
import socialIconTelegram from '../assets/socials/telegram.svg'
import socialIconTiktok from '../assets/socials/tiktok.svg'
import socialIconTumblr from '../assets/socials/tumblr.svg'
import socialIconTwitter from '../assets/socials/twitter.svg'
import socialIconViber from '../assets/socials/viber.svg'
import socialIconVk from '../assets/socials/vk.svg'
import socialIconWechat from '../assets/socials/wechat.svg'
import socialIconWeibo from '../assets/socials/weibo.svg'
import socialIconWhatsapp from '../assets/socials/whatsapp.svg'
import socialIconX from '../assets/socials/x.svg'
import socialIconXiaohongshu from '../assets/socials/xiaohongshu.svg'
import socialIconYoutube from '../assets/socials/youtube.svg'
import socialIconZalo from '../assets/socials/zalo.svg'
import socialIconZhihu from '../assets/socials/zhihu.svg'

import {
  InputSocialType,
  type InputSocialIcons,
  type InputSocialList
} from '../types/socialTypes'

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
 * Social icons dictionary by code /
 * Словарь иконок социальных сетей по коду
 */
export const socialIcons: InputSocialIcons = {
  [InputSocialType.alipay]: socialIconAlipay,
  [InputSocialType.baidu]: socialIconBaidu,
  [InputSocialType.dingtalk]: socialIconDingtalk,
  [InputSocialType.discord]: socialIconDiscord,
  [InputSocialType.douyin]: socialIconDouyin,
  [InputSocialType.dzen]: socialIconDzen,
  [InputSocialType.facebook]: socialIconFacebook,
  [InputSocialType.github]: socialIconGithub,
  [InputSocialType.gitlab]: socialIconGitlab,
  [InputSocialType.habr]: socialIconHabr,
  [InputSocialType.instagram]: socialIconInstagram,
  [InputSocialType.line]: socialIconLine,
  [InputSocialType.linkedin]: socialIconLinkedin,
  [InputSocialType.medium]: socialIconMedium,
  [InputSocialType.messenger]: socialIconMessenger,
  [InputSocialType.ok]: socialIconOk,
  [InputSocialType.pinterest]: socialIconPinterest,
  [InputSocialType.qq]: socialIconQq,
  [InputSocialType.reddit]: socialIconReddit,
  [InputSocialType.skype]: socialIconSkype,
  [InputSocialType.snapchat]: socialIconSnapchat,
  [InputSocialType.telegram]: socialIconTelegram,
  [InputSocialType.tiktok]: socialIconTiktok,
  [InputSocialType.tumblr]: socialIconTumblr,
  [InputSocialType.twitter]: socialIconTwitter,
  [InputSocialType.viber]: socialIconViber,
  [InputSocialType.vk]: socialIconVk,
  [InputSocialType.wechat]: socialIconWechat,
  [InputSocialType.weibo]: socialIconWeibo,
  [InputSocialType.whatsapp]: socialIconWhatsapp,
  [InputSocialType.x]: socialIconX,
  [InputSocialType.xiaohongshu]: socialIconXiaohongshu,
  [InputSocialType.youtube]: socialIconYoutube,
  [InputSocialType.zalo]: socialIconZalo,
  [InputSocialType.zhihu]: socialIconZhihu
}

/**
 * List of social network configurations with their input mask rules /
 * Список конфигураций социальных сетей с правилами маски ввода
 */
export const inputSocialList: InputSocialList = [
  {
    code: InputSocialType.alipay,
    name: 'Alipay',
    icon: socialIconAlipay,
    mask: maskId
  },
  {
    code: InputSocialType.baidu,
    name: 'Baidu',
    icon: socialIconBaidu,
    mask: maskId
  },
  {
    code: InputSocialType.dingtalk,
    name: 'DingTalk',
    icon: socialIconDingtalk,
    mask: maskId
  },
  {
    code: InputSocialType.discord,
    name: 'Discord',
    icon: socialIconDiscord,
    mask: maskUsername
  },
  {
    code: InputSocialType.douyin,
    name: 'Douyin',
    icon: socialIconDouyin,
    mask: maskId
  },
  {
    code: InputSocialType.dzen,
    name: 'Dzen',
    icon: socialIconDzen,
    prefix: 'https://dzen.ru/',
    mask: maskId
  },
  {
    code: InputSocialType.facebook,
    name: 'Facebook',
    icon: socialIconFacebook,
    prefix: 'https://www.facebook.com/',
    mask: maskFacebook
  },
  {
    code: InputSocialType.github,
    name: 'GitHub',
    icon: socialIconGithub,
    prefix: 'https://github.com/',
    mask: maskHyphenIdStartAlphaNum
  },
  {
    code: InputSocialType.gitlab,
    name: 'GitLab',
    icon: socialIconGitlab,
    prefix: 'https://gitlab.com/',
    mask: maskHyphenIdStartAlphaNum
  },
  {
    code: InputSocialType.habr,
    name: 'Habr',
    icon: socialIconHabr,
    prefix: 'https://habr.com/ru/users/',
    mask: maskId
  },
  {
    code: InputSocialType.instagram,
    name: 'Instagram',
    icon: socialIconInstagram,
    mask: maskUsername
  },
  {
    code: InputSocialType.line,
    name: 'Line',
    icon: socialIconLine,
    mask: maskId
  },
  {
    code: InputSocialType.linkedin,
    name: 'LinkedIn',
    icon: socialIconLinkedin,
    prefix: 'https://www.linkedin.com/in/',
    mask: maskHyphenIdStartAlphaNum
  },
  {
    code: InputSocialType.medium,
    name: 'Medium',
    icon: socialIconMedium,
    mask: { mask: '@*', special: specialId }
  },
  {
    code: InputSocialType.messenger,
    name: 'Messenger',
    icon: socialIconMessenger,
    prefix: 'https://m.me/',
    mask: maskFacebook
  },
  {
    code: InputSocialType.ok,
    name: 'Odnoklassniki',
    icon: socialIconOk,
    prefix: 'https://ok.ru/',
    mask: maskId
  },
  {
    code: InputSocialType.pinterest,
    name: 'Pinterest',
    icon: socialIconPinterest,
    prefix: 'https://www.pinterest.com/',
    mask: maskId
  },
  {
    code: InputSocialType.qq,
    name: 'QQ',
    icon: socialIconQq,
    mask: maskNumber
  },
  {
    code: InputSocialType.reddit,
    name: 'Reddit',
    icon: socialIconReddit,
    prefix: 'https://www.reddit.com/user/',
    mask: maskUnderHyphenId
  },
  {
    code: InputSocialType.skype,
    name: 'Skype',
    icon: socialIconSkype,
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
    icon: socialIconSnapchat,
    mask: maskSnapchatStartLetter
  },
  {
    code: InputSocialType.telegram,
    name: 'Telegram',
    icon: socialIconTelegram,
    mask: maskUsernameStrictStartLetter
  },
  {
    code: InputSocialType.tiktok,
    name: 'TikTok',
    icon: socialIconTiktok,
    mask: maskUsername
  },
  {
    code: InputSocialType.tumblr,
    name: 'Tumblr',
    icon: socialIconTumblr,
    mask: maskFacebook
  },
  {
    code: InputSocialType.twitter,
    name: 'Twitter',
    icon: socialIconTwitter,
    mask: maskUsernameStrict
  },
  {
    code: InputSocialType.viber,
    name: 'Viber',
    icon: socialIconViber,
    mask: maskPhone
  },
  {
    code: InputSocialType.vk,
    name: 'VKontakte',
    icon: socialIconVk,
    prefix: 'https://vk.com/',
    mask: maskVkStartLetter
  },
  {
    code: InputSocialType.wechat,
    name: 'WeChat',
    icon: socialIconWechat,
    mask: maskWechatStartLetter
  },
  {
    code: InputSocialType.weibo,
    name: 'Weibo',
    icon: socialIconWeibo,
    prefix: 'https://weibo.com/',
    mask: maskId
  },
  {
    code: InputSocialType.whatsapp,
    name: 'WhatsApp',
    icon: socialIconWhatsapp,
    prefix: 'https://wa.me/',
    mask: maskPhone
  },
  {
    code: InputSocialType.x,
    name: 'X',
    icon: socialIconX,
    mask: maskUsernameStrict
  },
  {
    code: InputSocialType.xiaohongshu,
    name: 'Xiaohongshu',
    icon: socialIconXiaohongshu,
    mask: maskId
  },
  {
    code: InputSocialType.youtube,
    name: 'YouTube',
    icon: socialIconYoutube,
    prefix: 'https://www.youtube.com/@',
    mask: maskId
  },
  {
    code: InputSocialType.zalo,
    name: 'Zalo',
    icon: socialIconZalo,
    prefix: 'https://zalo.me/',
    mask: maskPhone
  },
  {
    code: InputSocialType.zhihu,
    name: 'Zhihu',
    icon: socialIconZhihu,
    prefix: 'https://www.zhihu.com/people/',
    mask: maskId
  }
]
