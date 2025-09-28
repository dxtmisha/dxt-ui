import { type StorybookProps, WikiStorybook } from '@dxtmisha/wiki'

import { ComponentDocDefaults } from '../types'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  // :propsList [!] System label / Системная метка
]

export const ComponentDocWikiStorybook = new WikiStorybook(
  'ComponentDoc',
  propsNames,
  ComponentDocDefaults
)
