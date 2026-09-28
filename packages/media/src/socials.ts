import socialIconAlipay from './assets/socials/alipay.svg'
import socialIconBaidu from './assets/socials/baidu.svg'
import socialIconDingtalk from './assets/socials/dingtalk.svg'
import socialIconDiscord from './assets/socials/discord.svg'
import socialIconDouyin from './assets/socials/douyin.svg'
import socialIconDzen from './assets/socials/dzen.svg'
import socialIconFacebook from './assets/socials/facebook.svg'
import socialIconGithub from './assets/socials/github.svg'
import socialIconGitlab from './assets/socials/gitlab.svg'
import socialIconHabr from './assets/socials/habr.svg'
import socialIconInstagram from './assets/socials/instagram.svg'
import socialIconLine from './assets/socials/line.svg'
import socialIconLinkedin from './assets/socials/linkedin.svg'
import socialIconMedium from './assets/socials/medium.svg'
import socialIconMessenger from './assets/socials/messenger.svg'
import socialIconOk from './assets/socials/ok.svg'
import socialIconPinterest from './assets/socials/pinterest.svg'
import socialIconQq from './assets/socials/qq.svg'
import socialIconReddit from './assets/socials/reddit.svg'
import socialIconSkype from './assets/socials/skype.svg'
import socialIconSnapchat from './assets/socials/snapchat.svg'
import socialIconTelegram from './assets/socials/telegram.svg'
import socialIconTiktok from './assets/socials/tiktok.svg'
import socialIconTumblr from './assets/socials/tumblr.svg'
import socialIconTwitter from './assets/socials/twitter.svg'
import socialIconViber from './assets/socials/viber.svg'
import socialIconVk from './assets/socials/vk.svg'
import socialIconWechat from './assets/socials/wechat.svg'
import socialIconWeibo from './assets/socials/weibo.svg'
import socialIconWhatsapp from './assets/socials/whatsapp.svg'
import socialIconX from './assets/socials/x.svg'
import socialIconXiaohongshu from './assets/socials/xiaohongshu.svg'
import socialIconYoutube from './assets/socials/youtube.svg'
import socialIconZalo from './assets/socials/zalo.svg'
import socialIconZhihu from './assets/socials/zhihu.svg'

import { MediaSocial } from './classes/MediaSocial'
import {
  InputSocialType,
  type InputSocialIcons
} from './types/socialTypes'

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
 * Registers default social network icons in the MediaSocial registry.
 *
 * Регистрирует стандартные иконки социальных сетей в реестре MediaSocial.
 */
export function registerSocialIcons(): void {
  MediaSocial.addIcons(socialIcons)
}
