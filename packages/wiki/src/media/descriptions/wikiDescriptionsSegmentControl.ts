import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

export const wikiDescriptionsSegmentControl: StorybookComponentsDescriptionItem = {
  name: 'SegmentControl',
  description: {
    en: 'Component for managing navigation between segment items. Supports horizontal scrolling, selection management, and focus.',
    ru: 'Компонент для управления навигацией между сегментированными элементами. Поддерживает горизонтальную прокрутку, управление выделением и фокусом.'
  },
  possibilities: {
    en: [
      'horizontal scrolling of segments',
      'management of the selected segment via `selected` and `list`',
      'keyboard support (arrows, Enter, Space)',
      'customization of segment appearance via `tag` and `itemAttrs`',
      'event support: `update:selected`, `update:modelSelected`'
    ],
    ru: [
      'горизонтальная прокрутка сегментов',
      'управление выбранным сегментом через `selected` и `list`',
      'поддержка клавиатуры (стрелки, Enter, Пробел)',
      'настройка внешнего вида сегментов через `tag` и `itemAttrs`',
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
      id: 'SegmentControlVModel',
      name: {
        en: 'Two-way binding (v-model)',
        ru: 'Двусторонняя привязка (v-model)'
      },
      setup: `
      const list = [
        { label: 'Segment 1', value: '1' },
        { label: 'Segment 2', value: '2' },
        { label: 'Segment 3', value: '3' }
      ]
      const selected = ref('1')
      return { list, selected }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <span>Current value: {{ selected }}</span>
            <button class="wiki-storybook-button" @click="selected = '1'">Select Segment 1</button>
            <button class="wiki-storybook-button" @click="selected = '2'">Select Segment 2</button>
            <button class="wiki-storybook-button" @click="selected = '3'">Select Segment 3</button>
          </div>

          <DesignComponent :list="list" v-model:selected="selected"/>
        </div>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'SegmentControl'} type={'segmentControl'}/>

<StorybookDescriptions componentName={'TabsNavigation'} type={'v-model'}/>
<Canvas of={Component.SegmentControlVModel}/>
    `,
    expose: `
<StorybookDescriptions componentName={'TabsNavigation'} type={'expose.ids'}/>
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
Specialized navigation container for creating segment controls with automated scrolling and focus management. Designed for switching between filtered views or dashboard sections.
Features intelligent horizontal scrolling with alignment control, keyboard navigation support (arrows, Enter, Space), and customizable segment item rendering via the tag and itemAttrs props. Automatically synchronizes active state through two-way binding and provides leading/trailing slots for auxiliary navigation actions.
Controlled via the list prop for segment definitions and v-model:selected for active state tracking. Use as a standalone segmented bar requiring high accessibility and smooth interaction across mobile and desktop.
    `
  }
}
