import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for SegmentControl component properties
 *
 * Описания свойств компонента SegmentControl
 */
export const wikiDescriptionsSegmentControl: StorybookComponentsDescriptionItem = {
  name: 'SegmentControl',
  description: {
    en: 'Component for managing navigation between segment items. Supports horizontal scrolling, selection management, and focus.',
    ru: 'Компонент для управления навигацией между сегментированными элементами. Поддерживает горизонтальную прокрутку, управление выделением и фокусом.'
  },
  possibilities: {
    en: [
      'horizontal scrolling of segments with block or left alignment',
      'management of the selected segment via `selected` and `list`',
      'keyboard support (ArrowLeft, ArrowRight, Home, End, Enter, Space, RTL)',
      'customization of segment appearance via `tag` and `itemAttrs`',
      'event support: `click`, `clickLite`, `update:selected`, `update:modelSelected`'
    ],
    ru: [
      'горизонтальная прокрутка сегментов с выравниванием по ширине или левому краю',
      'управление выбранным сегментом через `selected` и `list`',
      'поддержка клавиатуры (ArrowLeft, ArrowRight, Home, End, Enter, Пробел, RTL)',
      'настройка внешнего вида сегментов через `tag` и `itemAttrs`',
      'поддержка событий: `click`, `clickLite`, `update:selected`, `update:modelSelected`'
    ]
  },
  render: `
    <DesignComponent v-bind="args"/>
  `,
  play: `
const tablist = canvasElement.querySelector('[role="tablist"]')
await expect(tablist).toBeInTheDocument()
await expect(tablist).toHaveAttribute('aria-orientation', 'horizontal')
  `,
  import: [
    'import { ref } from \'vue\'',
    'import type { SegmentControlExpose } from \'@dxtmisha/constructor/SegmentControl\''
  ],
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES
    // =========================================================================
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
            <span data-testid="segment-control-value">Current value: {{ selected }}</span>
            <button class="wiki-storybook-button" @click="selected = '1'">Select Segment 1</button>
            <button class="wiki-storybook-button" @click="selected = '2'">Select Segment 2</button>
            <button class="wiki-storybook-button" @click="selected = '3'">Select Segment 3</button>
          </div>

          <DesignComponent :list="list" v-model:selected="selected"/>
        </div>
      `,
      play: `
const canvas = within(canvasElement)
await expect(canvas.getByTestId('segment-control-value')).toHaveTextContent('1')
await step('Select Segment 3 programmatically', async () => {
  await userEvent.click(canvas.getByRole('button', { name: 'Select Segment 3' }))
  await expect(canvas.getByTestId('segment-control-value')).toHaveTextContent('3')
})
      `
    },

    // =========================================================================
    // TIER 2: TEST STORIES (Constructor props only)
    // =========================================================================
    {
      id: 'SegmentControlTestSlotsKeysAndExpose',
      name: {
        en: 'Test: Slots, custom keys, divider, itemAttrs and expose ids()',
        ru: 'Тест: Слоты, кастомные ключи, разделитель, itemAttrs и expose ids()'
      },
      propsName: ['divider', 'keyLabel', 'keyValue', 'tag', 'itemAttrs'],
      setup: `
      const segmentControlReference = ref<SegmentControlExpose | null>(null)
      const selectedKey = ref<number>(0)
      const idsCount = ref<number>(0)
      const customList = [
        { id: 0, title: 'Zero' },
        { id: 1, title: 'One' },
        { id: 2, title: 'Two' }
      ]
      const readIds = () => {
        idsCount.value = Object.keys(segmentControlReference.value?.ids() ?? {}).length
      }
      return { segmentControlReference, selectedKey, idsCount, customList, readIds }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="readIds">Read IDs</button>
            <span data-testid="segment-control-ids-count">{{ idsCount }}</span>
          </div>
          <DesignComponent
            ref="segmentControlReference"
            v-model:selected="selectedKey"
            :list="customList"
            :divider="true"
            keyValue="id"
            keyLabel="title"
            tag="span"
            :itemAttrs="{ 'data-segment-custom': 'true' }"
          >
            <template #leading><span data-testid="segment-leading">Lead</span></template>
            <template #trailing><span data-testid="segment-trailing">Trail</span></template>
          </DesignComponent>
        </div>
      `,
      play: `
const canvas = within(canvasElement)
await expect(canvas.getByTestId('segment-leading')).toHaveTextContent('Lead')
await expect(canvas.getByTestId('segment-trailing')).toHaveTextContent('Trail')
const customSegments = canvasElement.querySelectorAll('[data-segment-custom="true"]')
await expect(customSegments.length).toBe(3)
await expect(customSegments[0].tagName).toBe('SPAN')
await expect(customSegments[0]).toHaveAttribute('aria-selected', 'true')

await step('Read expose ids() count', async () => {
  await userEvent.click(canvas.getByRole('button', { name: 'Read IDs' }))
  await expect(canvas.getByTestId('segment-control-ids-count')).toHaveTextContent('3')
})
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
Features intelligent horizontal scrolling with block or left alignment control, keyboard navigation support (arrows, Home, End, Enter, Space, RTL), and customizable segment item rendering via the tag and itemAttrs props. Automatically synchronizes active state through two-way binding and provides leading/trailing slots for auxiliary navigation actions.
Controlled via the list prop for segment definitions and v-model:selected for active state tracking. Use as a standalone segmented bar requiring high accessibility and smooth interaction across mobile and desktop.
    `
  }
}
