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
      'multiple sizes from extra small to 5xl',
      'various color palettes'
    ],
    ru: [
      'множественные размеры от очень маленького до 5xl',
      'различные цветовые палитры'
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
Placeholder component used for structural presentation, testing, or laying out interfaces early in development. Provides a simple geometric shape to represent where a future component will be placed.
Features configurable sizes (from 'xs' to '5xl') and customizable color palettes. Acts as a lightweight visual anchor without complex logic or dependencies.
Controlled via size and palette props. Use during prototyping to define layout structures before final components are implemented or for testing responsive container behavior.
    `
  }
}
