import { wikiIcon } from './wikiIcon'
import { wikiInformation } from './wikiInformation'

import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

/**
 * The wikiInputSocial object contains descriptions of all properties for the InputSocial component
 *
 * Объект wikiInputSocial содержит описание всех свойств для компонента InputSocial
 */
export const wikiInputSocial: StorybookArgsToList = {
  'inputSocial.icon': {
    type: wikiIcon['icon.icon'].type,
    options: {
      ...wikiIcon['icon.icon'].options,
      value: undefined
    }
  },
  'inputSocial.label': {
    type: wikiInformation.label.type,
    options: {
      ...wikiInformation.label.options,
      value: undefined
    }
  },
  'inputSocial.socialIcons': {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.icon,
      type: 'Record<string, string>',
      description: {
        en: 'Icons for social networks',
        ru: 'Иконки для социальных сетей'
      }
    },
    hide: true
  },
  'inputSocial.socialType': {
    type: StorybookControl.select,
    options: {
      category: StorybookCategory.value,
      type: 'string',
      description: {
        en: 'Type of social network',
        ru: 'Тип социальной сети'
      },
      value: 'telegram'
    }
  }
}
