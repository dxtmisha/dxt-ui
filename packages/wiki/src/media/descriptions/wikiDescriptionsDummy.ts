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
Dummy is a basic skeleton or placeholder component used mainly for testing or laying out interfaces early in development.

**Key Features:**
1. **Size:** Configurable via the \`size\` prop (e.g., 'sm', 'md', 'lg').
2. **Palette:** Customizable colors through the \`palette\` prop (e.g., 'red', 'blue', 'green').

**Usage Examples:**

- **Basic Dummy:** \`<Dummy />\`
- **Colored Dummy with Size:** \`<Dummy size="lg" palette="primary" />\`
    `
  }
}
