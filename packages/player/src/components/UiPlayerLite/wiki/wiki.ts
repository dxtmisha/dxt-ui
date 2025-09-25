import { type StorybookProps, WikiStorybook } from '@dxt-ui/wiki'

import { UiPlayerLiteDefaults } from '../types'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  // :propsList [!] System label / Системная метка
]

export const UiPlayerLiteWikiStorybook = new WikiStorybook(
  'UiPlayerLite',
  propsNames,
  UiPlayerLiteDefaults
)
