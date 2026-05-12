import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for ButtonGroup component properties
 *
 * Описания свойств компонента ButtonGroup
 */
export const wikiDescriptionsButtonGroup: StorybookComponentsDescriptionItem = {
  name: 'ButtonGroup',
  description: {
    en: 'A container component for grouping multiple buttons together.',
    ru: 'Компонент-контейнер для группировки нескольких кнопок вместе.'
  },
  possibilities: {
    en: [
      'horizontal and vertical orientations',
      'automatic wrapping for horizontal layout',
      'passing shared attributes to all buttons',
      'flexible content via list prop or default slot',
      'consistent spacing between buttons'
    ],
    ru: [
      'горизонтальная и вертикальная ориентация',
      'автоматический перенос для горизонтального расположения',
      'передача общих атрибутов всем кнопкам',
      'гибкий контент через свойство list или слот по умолчанию',
      'согласованные отступы между кнопками'
    ]
  },
  import: [],
  stories: [
    {
      id: 'ButtonGroupSlots',
      name: {
        en: 'Slots usage',
        ru: 'Использование слотов'
      },
      template: `
        <DesignComponent>
          <template #default>
            Default Slot
          </template>
        </DesignComponent>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'ButtonGroup'} type={'buttonGroup'}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'click'}/>
    `,
    slots: `
<Canvas of={Component.ButtonGroupSlots}/>
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
    `
  },
  ai: {
    description: `
The ButtonGroup component is used to group several buttons together into a single layout.
It supports both horizontal and vertical orientations and can automatically wrap buttons if they don't fit in a single line.
Buttons can be defined via the 'list' property as an array of button configurations or via the default slot.
The 'buttonAttrs' property allows applying shared attributes (like style, size, etc.) to all buttons in the group at once.
    `
  }
}
