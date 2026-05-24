import { wikiCheckbox } from './wikiCheckbox'

import { type StorybookArgsToList } from '../../types/storybookTypes'

/**
 * The wikiSwitch object contains properties for the Switch component
 *
 * Объект wikiSwitch содержит свойства для компонента Switch
 */
export const wikiSwitch: StorybookArgsToList = {
  'switch.selected': wikiCheckbox['checkbox.selected'],
  'switch.value': wikiCheckbox['checkbox.value']
}
