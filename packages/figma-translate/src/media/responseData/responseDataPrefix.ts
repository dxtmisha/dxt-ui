import { ApiMethodItem, type ApiResponseItem } from '@dxtmisha/functional-basic'
import type { TranslatePrefixList } from '../../types/TranslateTypes'

export const responseDataPrefix: ApiResponseItem = {
  path: 'translate/prefix',
  method: ApiMethodItem.get,
  request: '*any',
  response: {
    status: 'success',
    data: [
      {
        label: 'Основной макет',
        value: 'main',
        description: 'Базовая структура страниц сайта'
      },
      {
        label: 'Панель управления',
        value: 'dashboard',
        description: 'Интерфейс администратора и личного кабинета'
      },
      {
        label: 'Посадочная страница',
        value: 'landing',
        description: 'Маркетинговые блоки и промо-материалы'
      },
      {
        label: 'Мобильное меню',
        value: 'mobile_menu',
        description: 'Навигация для мобильных устройств'
      }
    ] as TranslatePrefixList
  },
  lag: true
}
