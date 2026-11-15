import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Dummy component properties
 *
 * Описания свойств компонента Dummy
 */
export const wikiDescriptionsDummy: StorybookComponentsDescriptionItem = {
  name: 'Dummy',
  description: {
    en: 'A placeholder component used for structural presentation or testing',
    ru: 'Компонент-заглушка, используемый для структурного представления или тестирования'
  },
  possibilities: {
    en: [
      'lightweight structural placeholder',
      'simple slot container for prototyping'
    ],
    ru: [
      'лёгкая структурная заглушка',
      'простой контейнер со слотом для прототипирования'
    ]
  },
  import: [],
  stories: [],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Dummy'} type={'dummy'}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
    `
  },
  ai: {
    description: `
Placeholder component used for structural presentation, testing, or laying out interfaces early in development. Provides a lightweight visual anchor without complex logic or dependencies.
Use during prototyping to define layout structures before final components are implemented or for testing container behavior.
    `,
    hide: true
  }
}
