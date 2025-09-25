import { type StorybookProps, WikiStorybook } from '@dxt-ui/wiki'

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
