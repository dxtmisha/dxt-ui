import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

export const wikiDescriptionsTabsNavigation: StorybookComponentsDescriptionItem = {
  name: 'TabsNavigation',
  description: {
    en: 'Component for managing navigation between tabs. Supports horizontal scrolling, selection management, and focus.',
    ru: 'Компонент для управления навигацией между вкладками. Поддерживает горизонтальную прокрутку, управление выделением и фокусом.'
  },
  possibilities: {
    en: [
      'horizontal scrolling of tabs',
      'management of the selected tab via `selected` and `list`',
      'keyboard support (arrows, Enter, Space)',
      'customization of tab appearance via `tag` and `itemAttrs`',
      'event support: `update:selected`, `update:modelSelected`'
    ],
    ru: [
      'горизонтальная прокрутка вкладок',
      'управление выбранной вкладкой через `selected` и `list`',
      'поддержка клавиатуры (стрелки, Enter, Пробел)',
      'настройка внешнего вида вкладок через `tag` и `itemAttrs`',
      'поддержка событий: `update:selected`, `update:modelSelected`'
    ]
  },
  render: `
    <DesignComponent v-bind="args"/>
  `,
  import: [
    'import { ref } from \'vue\''
  ],
  stories: [
    {
      id: 'TabsNavigationBasic',
      name: {
        en: 'Basic usage',
        ru: 'Базовое использование'
      },
      setup: `
      const list = [
        { label: 'Tab 1', value: '1' },
        { label: 'Tab 2', value: '2' },
        { label: 'Tab 3', value: '3' }
      ]
      const selected = ref('2')
      return { list, selected }
      `,
      template: `
        <DesignComponent :list="list" v-model:selected="selected"/>
      `
    },
    {
      id: 'TabsNavigationVModel',
      name: {
        en: 'Two-way binding (v-model)',
        ru: 'Двусторонняя привязка (v-model)'
      },
      setup: `
      const list = [
        { label: 'Tab 1', value: '1' },
        { label: 'Tab 2', value: '2' },
        { label: 'Tab 3', value: '3' }
      ]
      const selected = ref('1')
      return { list, selected }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <span>Current value: {{ selected }}</span>
            <button class="wiki-storybook-button" @click="selected = '1'">Select Tab 1</button>
            <button class="wiki-storybook-button" @click="selected = '2'">Select Tab 2</button>
            <button class="wiki-storybook-button" @click="selected = '3'">Select Tab 3</button>
          </div>

          <DesignComponent :list="list" v-model:selected="selected"/>
        </div>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'TabsNavigation'} type={'tabsNavigation'}/>
<Canvas of={Component.TabsNavigationBasic}/>
<StorybookDescriptions componentName={'TabsNavigation'} type={'v-model'}/>
<Canvas of={Component.TabsNavigationVModel}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'click'}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Slot'} type={'leading'} />
<StorybookDescriptions componentName={'Slot'} type={'trailing'} />
    `
  },
  ai: {
    description: `
Specialized navigation container for creating horizontal tab bars with automated scrolling and focus management. Designed for switching between filtered views, dashboard sections, or multi-step form progress indicators.
Features intelligent horizontal scrolling with alignment control, keyboard navigation support (arrows, Enter, Space), and customizable tab item rendering via the tag and itemAttrs props. Automatically synchronizes active state through two-way binding and provides leading/trailing slots for auxiliary navigation actions.
Controlled via the list prop for tab definitions and v-model:selected for active state tracking. Use as the base header for complex tabbed layouts or standalone navigation bars requiring high accessibility and smooth interaction across mobile and desktop.
    `
  }
}
