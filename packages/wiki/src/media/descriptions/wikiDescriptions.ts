import type { StorybookComponentsDescription } from '../../types/storybookTypes'

import { wikiDescriptionsImage } from './wikiDescriptionsImage'

export const wikiDescriptions: StorybookComponentsDescription = [
  {
    name: 'Icon',
    description: {
      en: 'Icon component for displaying icons',
      ru: 'Компонент иконки для отображения иконок'
    }
  },
  wikiDescriptionsImage
]
