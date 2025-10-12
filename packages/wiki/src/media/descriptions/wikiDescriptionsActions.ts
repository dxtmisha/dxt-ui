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
      id: 'ActionsBasic',
      name: {
        en: 'Basic',
        ru: 'Базовые'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            :list="[
              { label: 'Cancel' },
              { label: 'Save', primary: true }
            ]"
          />
        </div>
      `
    },
    {
      id: 'ActionsAlignment',
      name: {
        en: 'Alignment',
        ru: 'Выравнивание'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            align="left"
            :list="[
              { label: 'Cancel' },
              { label: 'Save', primary: true }
            ]"
          />
          <DesignComponent
            align="center"
            :list="[
              { label: 'Cancel' },
              { label: 'Save', primary: true }
            ]"
          />
          <DesignComponent
            align="right"
            :list="[
              { label: 'Cancel' },
              { label: 'Save', primary: true }
            ]"
          />
          <DesignComponent
            align="block"
            :list="[
              { label: 'Cancel' },
              { label: 'Save', primary: true }
            ]"
          />
        </div>
      `
    },
    {
      id: 'ActionsPrimarySecondary',
      name: {
        en: 'Primary & Secondary Groups',
        ru: 'Основная и вторичная группы'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            :list="[
              { label: 'Cancel' },
              { label: 'Save', primary: true }
            ]"
            :list-secondary="[
              { label: 'Delete', text: true }
            ]"
          />
        </div>
      `
    },
    {
      id: 'ActionsFlexible',
      name: {
        en: 'Flexible Layout',
        ru: 'Гибкая раскладка'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            flexible="adaptive"
            :list="[
              { label: 'Cancel' },
              { label: 'Apply' },
              { label: 'Save', primary: true }
            ]"
          />
        </div>
      `
    },
    {
      id: 'ActionsCustomButtons',
      name: {
        en: 'Custom Button Styles',
        ru: 'Пользовательские стили кнопок'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            :list="[
              { label: 'Cancel', outlined: true },
              { label: 'Save', primary: true }
            ]"
            :button-attrs="{ size: 'large' }"
          />
        </div>
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
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
<StorybookDescriptions componentName={'Slot'} type={'secondary'}/>
    `
  }
}
