import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

/**
 * The wikiClockDial object contains properties for the ClockDial component
 *
 * Объект wikiClockDial содержит свойства для компонента ClockDial
 */
export const wikiClockDial: StorybookArgsToList = {
  'clockDial.clock': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.status,
      description: {
        en: 'Display mode as a clock (selection disabled)',
        ru: 'Режим отображения часов (без выбора)'
      }
    },
    isDemo: true
  },
  'clockDial.type': {
    type: StorybookControl.select,
    options: {
      category: StorybookCategory.style,
      type: ['12', '24', 'minute', 'second'],
      description: {
        en: 'Clock dial display type',
        ru: 'Тип отображения циферблата часов'
      }
    },
    isDemo: true
  }
}
