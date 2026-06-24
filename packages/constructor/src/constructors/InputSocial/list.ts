import { InputSocialType, type InputSocialList } from './basicTypes'

export const inputSocialList: InputSocialList = [
  {
    code: InputSocialType.facebook,
    name: 'Facebook',
    prefix: 'https://www.facebook.com/',
    mask: {
      mask: '*',
      special: {
        '*': {
          match: /[a-z0-9.:/]/i,
          rubber: true
        }
      }
    }
  },
  {
    code: InputSocialType.instagram,
    name: 'Instagram',
    mask: {
      mask: '@*',
      special: {
        '*': {
          match: /[a-z0-9_\-.]/i,
          rubber: true
        }
      }
    }
  },
  {
    code: InputSocialType.linkedin,
    name: 'LinkedIn',
    prefix: 'https://www.linkedin.com/in/',
    mask: {
      mask: '*',
      special: {
        '*': {
          match: /[a-z0-9_.:/]/i,
          rubber: true
        }
      }
    }
  },
  {
    code: InputSocialType.telegram,
    name: 'Telegram',
    mask: {
      mask: '@#*',
      special: {
        '#': {
          match: /[a-z]/i
        },
        '*': {
          match: /[a-z0-9_]/i,
          rubber: true
        }
      }
    }
  },
  {
    code: InputSocialType.vk,
    name: 'VKontakte',
    prefix: 'https://vk.com/',
    mask: {
      mask: '*',
      special: {
        '*': {
          match: /[a-z0-9_.:/]/i,
          rubber: true
        }
      }
    }
  }
]
