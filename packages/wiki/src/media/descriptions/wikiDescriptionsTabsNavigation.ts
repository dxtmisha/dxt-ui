import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for TabsNavigation component properties
 *
 * Описания свойств компонента TabsNavigation
 */
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
      'keyboard support (ArrowLeft, ArrowRight, Home, End, RTL)',
      'customization of tab appearance via `tag` and `itemAttrs`',
      'event support: `click`, `clickLite`, `update:selected`, `update:modelSelected`'
    ],
    ru: [
      'горизонтальная прокрутка вкладок',
      'управление выбранной вкладкой через `selected` и `list`',
      'поддержка клавиатуры (ArrowLeft, ArrowRight, Home, End, RTL)',
      'настройка внешнего вида вкладок через `tag` и `itemAttrs`',
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
    'import type { TabsNavigationExpose } from \'@dxtmisha/constructor/TabsNavigation\''
  ],
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES
    // =========================================================================
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
      `,
      play: `
const tabs = canvasElement.querySelectorAll('[role="tab"]')
await expect(tabs.length).toBe(3)
await expect(tabs[1]).toHaveAttribute('aria-selected', 'true')
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
            <span data-testid="tabs-nav-value">Current value: {{ selected }}</span>
            <button class="wiki-storybook-button" @click="selected = '1'">Select Tab 1</button>
            <button class="wiki-storybook-button" @click="selected = '2'">Select Tab 2</button>
            <button class="wiki-storybook-button" @click="selected = '3'">Select Tab 3</button>
          </div>

          <DesignComponent :list="list" v-model:selected="selected"/>
        </div>
      `,
      play: `
const canvas = within(canvasElement)
await expect(canvas.getByTestId('tabs-nav-value')).toHaveTextContent('1')
await step('Select Tab 3 programmatically', async () => {
  await userEvent.click(canvas.getByRole('button', { name: 'Select Tab 3' }))
  await expect(canvas.getByTestId('tabs-nav-value')).toHaveTextContent('3')
})
      `
    },

    // =========================================================================
    // TIER 2: TEST STORIES (Constructor props only)
    // =========================================================================
    {
      id: 'TabsNavigationTestSlotsKeysAndExpose',
      name: {
        en: 'Test: Slots, custom keys, divider, itemAttrs and expose ids()',
        ru: 'Тест: Слоты, кастомные ключи, разделитель, itemAttrs и expose ids()'
      },
      propsName: ['divider', 'keyLabel', 'keyValue', 'tag', 'itemAttrs'],
      setup: `
      const navigationReference = ref<TabsNavigationExpose | null>(null)
      const selectedKey = ref<number>(0)
      const idsCount = ref<number>(0)
      const customList = [
        { id: 0, title: 'Zero' },
        { id: 1, title: 'One' },
        { id: 2, title: 'Two' }
      ]
      const readIds = () => {
        idsCount.value = Object.keys(navigationReference.value?.ids() ?? {}).length
      }
      return { navigationReference, selectedKey, idsCount, customList, readIds }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="readIds">Read IDs</button>
            <span data-testid="tabs-nav-ids-count">{{ idsCount }}</span>
          </div>
          <DesignComponent
            ref="navigationReference"
            v-model:selected="selectedKey"
            :list="customList"
            :divider="false"
            keyValue="id"
            keyLabel="title"
            tag="span"
            :itemAttrs="{ 'data-tab-custom': 'true' }"
          >
            <template #leading><span data-testid="tabs-leading">Lead</span></template>
            <template #trailing><span data-testid="tabs-trailing">Trail</span></template>
          </DesignComponent>
        </div>
      `,
      play: `
const canvas = within(canvasElement)
await expect(canvas.getByTestId('tabs-leading')).toHaveTextContent('Lead')
await expect(canvas.getByTestId('tabs-trailing')).toHaveTextContent('Trail')
const customTabs = canvasElement.querySelectorAll('[data-tab-custom="true"]')
await expect(customTabs.length).toBe(3)
await expect(customTabs[0].tagName).toBe('SPAN')
await expect(customTabs[0]).toHaveAttribute('aria-selected', 'true')

await step('Read expose ids() count', async () => {
  await userEvent.click(canvas.getByRole('button', { name: 'Read IDs' }))
  await expect(canvas.getByTestId('tabs-nav-ids-count')).toHaveTextContent('3')
})
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
    expose: `
<StorybookDescriptions componentName={'TabsNavigation'} type={'expose.ids'}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'click'}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Slot'} type={'leading'}/>
<StorybookDescriptions componentName={'Slot'} type={'trailing'}/>
    `
  },
  ai: {
    description: `
Specialized navigation container for creating horizontal tab bars with automated scrolling and focus management. Designed for switching between filtered views, dashboard sections, or multi-step form progress indicators.
Features intelligent horizontal scrolling with alignment control, keyboard navigation support (arrows, Home, End, RTL), and customizable tab item rendering via the tag and itemAttrs props. Automatically synchronizes active state through two-way binding and provides leading/trailing slots for auxiliary navigation actions.
Controlled via the list prop for tab definitions and v-model:selected for active state tracking. Use as the base header for complex tabbed layouts or standalone navigation bars requiring high accessibility and smooth interaction across mobile and desktop.
    `
  }
}
