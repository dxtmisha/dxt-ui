import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Actions component properties
 *
 * Описания свойств компонента Actions
 */
export const wikiDescriptionsActions: StorybookComponentsDescriptionItem = {
  name: 'Actions',
  description: {
    en: 'A flexible container component for organizing action buttons with primary and secondary groups, supporting various alignment options and adaptive behavior.',
    ru: 'Гибкий компонент-контейнер для организации кнопок действий с основной и вторичной группами, поддерживающий различные варианты выравнивания и адаптивное поведение.'
  },
  possibilities: {
    en: [
      'Organizes action buttons into primary and secondary groups',
      'Supports multiple alignment modes: left, right, center, block',
      'Flexible layout that adapts to available space',
      'Automatic spacing between button groups',
      'Customizable button attributes for each group',
      'Responsive behavior with adaptive breakpoints',
      'Supports both array-based and slot-based button rendering'
    ],
    ru: [
      'Организует кнопки действий в основные и вторичные группы',
      'Поддерживает несколько режимов выравнивания: left, right, center, block',
      'Гибкая раскладка, адаптирующаяся к доступному пространству',
      'Автоматическое расстояние между группами кнопок',
      'Настраиваемые атрибуты кнопок для каждой группы',
      'Адаптивное поведение с точками перехода',
      'Поддерживает рендеринг кнопок через массив и слоты'
    ]
  },
  import: [],
  stories: [
    {
      id: 'ActionsSlots',
      name: {
        en: 'Slots usage',
        ru: 'Использование слотов'
      },
      template: `
        <DesignComponent>
          <template #secondary>
            Secondary Slot
          </template>
          <template #default>
            Default Slot
          </template>
        </DesignComponent>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Actions'} type={'actions'}/>
<StorybookDescriptions componentName={'Actions'} type={'list'}/>
<StorybookDescriptions componentName={'Actions'} type={'flexible'}/>
    `,
    slots: `
<Canvas of={Component.ActionsSlots}/>
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
<StorybookDescriptions componentName={'Slot'} type={'secondary'}/>
    `
  },
  ai: {
    description: `
Layout container for action button groups, typically used in dialog footers, cards, or forms. Manages spacing, alignment, and separation between primary (main) and secondary action sets.
Supports multiple alignments (left, center, right, block) and takes arrays of button props (list, listSecondary) to automatically render Button components.
Features both array-based and slot-based rendering for maximum flexibility. Use for standardizing button layouts and ensuring consistent spacing.
    `
  }
}
