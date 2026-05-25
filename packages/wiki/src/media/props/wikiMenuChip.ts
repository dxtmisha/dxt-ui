import { wikiMenuButton } from './wikiMenuButton'

import { type StorybookArgsToList } from '../../types/storybookTypes'

/**
 * The wikiMenuChip object contains properties for the MenuChip component
 *
 * Объект wikiMenuChip содержит свойства для компонента MenuChip
 */
export const wikiMenuChip: StorybookArgsToList = {
  'menuChip.hideLabelValue': wikiMenuButton['menuButton.hideLabelValue'],
  'menuChip.hideValueIcon': wikiMenuButton['menuButton.hideValueIcon'],
  'menuChip.inputSearchAttrs': wikiMenuButton['menuButton.inputSearchAttrs'],
  'menuChip.labelSeparator': wikiMenuButton['menuButton.labelSeparator'],
  'menuChip.option': wikiMenuButton['menuButton.option']
}
