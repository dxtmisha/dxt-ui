import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Tabs component
 *
 * Описания свойств компонента Tabs
 */
export const wikiDescriptionsTabs: StorybookComponentsDescriptionItem = {
  name: 'Tabs',
  description: {
    en: 'Compound tabbed interface component combining TabsNavigation and MotionAxis for synchronized navigation and animated content switching.',
    ru: 'Составной компонент вкладок, объединяющий TabsNavigation и MotionAxis для синхронизированной навигации и анимированного переключения контента.'
  },
  possibilities: {
    en: [
      'synchronized tab navigation (`TabsNavigation`) and animated slide panels (`MotionAxis`)',
      'flexible tab configuration via `tabs` list or configuration object, `tabItemAttrs`, and `tabsNavigationAttrs`',
      'custom item keys (`keyValue`, `keyLabel`), numeric keys including `0`, divider support, and custom tags',
      'two-way binding (`v-model:selected`) and controlled updates (`:selected` + `@update:selected`)',
      'per-tab states (`disabled`, `loading`, `isSkeleton`) and accessible ARIA `tablist`, `tab`, and `tabpanel` linkage',
      'transition configuration via `motionAxisAttrs` (`axis`, `direction`, `animationHeight`, `inDom`) and lifecycle events (`click`, `clickLite`, `motionAxis`)'
    ],
    ru: [
      'синхронизированная навигация по вкладкам (`TabsNavigation`) и анимированные панели контента (`MotionAxis`)',
      'гибкая настройка вкладок через массив или объект конфигурации `tabs`, `tabItemAttrs` и `tabsNavigationAttrs`',
      'пользовательские ключи элементов (`keyValue`, `keyLabel`), числовые ключи включая `0`, разделитель (`divider`) и пользовательские теги',
      'двусторонняя привязка (`v-model:selected`) и управляемое обновление (`:selected` + `@update:selected`)',
      'состояния отдельных вкладок (`disabled`, `loading`, `isSkeleton`) и доступная ARIA-связь `tablist`, `tab` и `tabpanel`',
      'настройка анимации через `motionAxisAttrs` (`axis`, `direction`, `animationHeight`, `inDom`) и события (`click`, `clickLite`, `motionAxis`)'
    ]
  },
  import: [
    'import { ref } from \'vue\'',
    'import type { ListSelectedList } from \'@dxtmisha/functional\'',
    'import type { EventClickValue } from \'@dxtmisha/constructor\'',
    'import type { MotionAxisEmitOptions } from \'@dxtmisha/constructor/MotionAxis\'',
    'import type { TabsExpose } from \'@dxtmisha/constructor/Tabs\''
  ],
  render: `
<DesignComponent v-bind="args">
  <template #home>Welcome to your personal dashboard! Here you can see an overview of your activity.</template>
  <template #profile>Manage your personal information, security settings, and preferences.</template>
  <template #messages>You have 3 unread messages. Connect with your colleagues and friends.</template>
  <template #settings>Adjust your application settings to suit your needs.</template>
  <template #dashboard>View your analytics and performance metrics in real-time.</template>
  <template #notifications>Stay updated with the latest alerts and announcements.</template>
</DesignComponent>
  `,
  play: `
const tablist = canvasElement.querySelector<HTMLElement>('[role="tablist"]')
await expect(tablist).toBeInTheDocument()
await expect(tablist).toHaveAttribute('aria-orientation', 'horizontal')

const tabs = canvasElement.querySelectorAll<HTMLElement>('[role="tab"]')
await expect(tabs.length).toBeGreaterThan(0)

const tabpanel = canvasElement.querySelector<HTMLElement>('[role="tabpanel"]')
await expect(tabpanel).toBeInTheDocument()
  `,
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES
    // =========================================================================
    {
      id: 'TabsBasic',
      name: {
        en: 'Basic usage',
        ru: 'Базовое использование'
      },
      template: `
        <DesignComponent
          :tabs="[
            { label: 'Home', value: 'home' },
            { label: 'Profile', value: 'profile' },
            { label: 'Settings', value: 'settings' }
          ]"
          selected="home"
        >
          <template #home>Home section content</template>
          <template #profile>Profile section content</template>
          <template #settings>Settings section content</template>
        </DesignComponent>
      `,
      play: `
const tablist = canvasElement.querySelector<HTMLElement>('[role="tablist"]')
await expect(tablist).toBeInTheDocument()
await expect(tablist).toHaveAttribute('aria-orientation', 'horizontal')

const tabs = canvasElement.querySelectorAll<HTMLElement>('[role="tab"]')
await expect(tabs.length).toBe(3)
await expect(tabs[0]).toHaveAttribute('aria-selected', 'true')
await expect(tabs[1]).toHaveAttribute('aria-selected', 'false')

const initialPanel = canvasElement.querySelector<HTMLElement>('[role="tabpanel"]')
await expect(initialPanel).toBeInTheDocument()
await expect(initialPanel).toHaveTextContent('Home section content')

await step('Switch to Profile tab by click', async () => {
  await userEvent.click(tabs[1])
  await waitFor(() => {
    expect(tabs[1]).toHaveAttribute('aria-selected', 'true')
    const panels = canvasElement.querySelectorAll<HTMLElement>('[role="tabpanel"]')
    const hasProfilePanel = Array.from(panels).some(panel => panel.textContent?.includes('Profile section content'))
    expect(hasProfilePanel).toBe(true)
  })
})
      `
    },
    {
      id: 'TabsVModel',
      name: {
        en: 'Two-way binding (v-model:selected)',
        ru: 'Двусторонняя привязка (v-model:selected)'
      },
      setup: `
      const selected = ref('tab1')
      const tabList = [
        { label: 'Tab 1', value: 'tab1' },
        { label: 'Tab 2', value: 'tab2' },
        { label: 'Tab 3', value: 'tab3' }
      ]
      return {
        selected,
        tabList
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <span data-testid="tabs-vmodel-value">Current value: {{ selected }}</span>
            <button class="wiki-storybook-button" @click="selected = 'tab1'">Select Tab 1</button>
            <button class="wiki-storybook-button" @click="selected = 'tab2'">Select Tab 2</button>
            <button class="wiki-storybook-button" @click="selected = 'tab3'">Select Tab 3</button>
          </div>

          <DesignComponent
            :tabs="tabList"
            v-model:selected="selected"
          >
            <template #tab1>Content 1</template>
            <template #tab2>Content 2</template>
            <template #tab3>Content 3</template>
          </DesignComponent>
        </div>
      `,
      play: `
const canvas = within(canvasElement)
await expect(canvas.getByTestId('tabs-vmodel-value')).toHaveTextContent('tab1')

await step('Switch to Tab 3 programmatically', async () => {
  await userEvent.click(canvas.getByRole('button', { name: 'Select Tab 3' }))
  await waitFor(() => {
    expect(canvas.getByTestId('tabs-vmodel-value')).toHaveTextContent('tab3')
    const panels = canvasElement.querySelectorAll<HTMLElement>('[role="tabpanel"]')
    const hasContent3 = Array.from(panels).some(panel => panel.textContent?.includes('Content 3'))
    expect(hasContent3).toBe(true)
  })
})

await step('Switch to Tab 2 by clicking tab item', async () => {
  const tabs = canvasElement.querySelectorAll<HTMLElement>('[role="tab"]')
  await userEvent.click(tabs[1])
  await waitFor(() => {
    expect(canvas.getByTestId('tabs-vmodel-value')).toHaveTextContent('tab2')
    expect(tabs[1]).toHaveAttribute('aria-selected', 'true')
  })
})
      `
    },
    {
      id: 'TabsSkeleton',
      name: {
        en: 'Skeleton state',
        ru: 'Состояние скелетона'
      },
      components: ['Skeleton'],
      template: `
        <DesignSkeleton :active="true">
          <DesignComponent
            :tabs="[
              { label: 'Overview', value: 'overview' },
              { label: 'Activity', value: 'activity' },
              { label: 'Reports', value: 'reports' }
            ]"
            :tab-item-attrs="{ isSkeleton: true }"
            selected="overview"
          >
            <template #overview>Loading overview...</template>
            <template #activity>Loading activity...</template>
            <template #reports>Loading reports...</template>
          </DesignComponent>
        </DesignSkeleton>
      `,
      play: `
const tablist = canvasElement.querySelector<HTMLElement>('[role="tablist"]')
await expect(tablist).toBeInTheDocument()
const tabs = canvasElement.querySelectorAll<HTMLElement>('[role="tab"]')
await expect(tabs.length).toBe(3)
const tabpanel = canvasElement.querySelector<HTMLElement>('[role="tabpanel"]')
await expect(tabpanel).toBeInTheDocument()
      `
    },

    // =========================================================================
    // TIER 2: TEST STORIES (Constructor props only — never in documentation)
    // =========================================================================
    {
      id: 'TabsTestConfigAndKeys',
      name: {
        en: 'Test: Config object, custom keys (numeric 0), divider and tabsNavigationAttrs',
        ru: 'Тест: Объект конфигурации, кастомные ключи (числовой 0), разделитель и tabsNavigationAttrs'
      },
      propsName: ['tabs', 'tabItemAttrs', 'tabsNavigationAttrs'],
      setup: `
      const numericTabsConfig = {
        list: [
          { id: 0, title: 'Zero' },
          { id: 1, title: 'One' },
          { id: 2, title: 'Two' }
        ],
        keyValue: 'id',
        keyLabel: 'title',
        divider: true
      }

      const customNavigationAttrs = {
        list: [
          { code: 'alpha', name: 'Alpha' },
          { code: 'beta', name: 'Beta' }
        ],
        keyValue: 'code',
        keyLabel: 'name',
        divider: true,
        tag: 'span'
      }

      return {
        numericTabsConfig,
        customNavigationAttrs
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div data-testid="tabs-numeric-block">
            <DesignComponent :tabs="numericTabsConfig">
              <template #0>Zero slide content</template>
              <template #1>One slide content</template>
              <template #2>Two slide content</template>
            </DesignComponent>
          </div>

          <div data-testid="tabs-navigation-attrs-block">
            <DesignComponent
              :tabs-navigation-attrs="customNavigationAttrs"
              :tab-item-attrs="{ 'data-tab-custom': 'true' }"
            >
              <template #alpha>Alpha slide content</template>
              <template #beta>Beta slide content</template>
            </DesignComponent>
          </div>
        </div>
      `,
      play: `
const canvas = within(canvasElement)

const numericBlock = canvas.getByTestId('tabs-numeric-block')
const numericTabs = numericBlock.querySelectorAll<HTMLElement>('[role="tab"]')
await expect(numericTabs.length).toBe(3)
await expect(numericTabs[0]).toHaveAttribute('aria-selected', 'true')
await expect(numericTabs[0]).toHaveTextContent('Zero')
await expect(numericBlock.querySelector('[role="tabpanel"]')).toHaveTextContent('Zero slide content')

await step('Switch from numeric 0 to numeric 1 tab', async () => {
  await userEvent.click(numericTabs[1])
  await waitFor(() => {
    expect(numericTabs[1]).toHaveAttribute('aria-selected', 'true')
    const panels = numericBlock.querySelectorAll<HTMLElement>('[role="tabpanel"]')
    const hasOnePanel = Array.from(panels).some(panel => panel.textContent?.includes('One slide content'))
    expect(hasOnePanel).toBe(true)
  })
})

const navigationBlock = canvas.getByTestId('tabs-navigation-attrs-block')
const customTabs = navigationBlock.querySelectorAll<HTMLElement>('[data-tab-custom="true"]')
await expect(customTabs.length).toBe(2)
await expect(customTabs[0].tagName).toBe('SPAN')
await expect(customTabs[0]).toHaveAttribute('aria-selected', 'true')
await expect(navigationBlock.querySelector('[role="tabpanel"]')).toHaveTextContent('Alpha slide content')

await step('Switch custom tabsNavigationAttrs tab to Beta', async () => {
  await userEvent.click(customTabs[1])
  await waitFor(() => {
    expect(customTabs[1]).toHaveAttribute('aria-selected', 'true')
    const panels = navigationBlock.querySelectorAll<HTMLElement>('[role="tabpanel"]')
    const hasBetaPanel = Array.from(panels).some(panel => panel.textContent?.includes('Beta slide content'))
    expect(hasBetaPanel).toBe(true)
  })
})
      `
    },
    {
      id: 'TabsTestControlledEventsAndExpose',
      name: {
        en: 'Test: Controlled selected, events and expose API',
        ru: 'Тест: Управляемый selected, события и expose API'
      },
      propsName: ['tabs', 'selected'],
      setup: `
      const tabsReference = ref<TabsExpose | null>(null)
      const currentTab = ref<ListSelectedList>('first')
      const lastClickSummary = ref('none')
      const lastClickLiteSummary = ref('none')
      const motionAxisCount = ref(0)
      const exposeSummary = ref('none')

      const tabItems = [
        { label: 'First', value: 'first', detail: { section: 'intro' } },
        { label: 'Second', value: 'second', detail: { section: 'details' } },
        { label: 'Third', value: 'third', detail: { section: 'summary' } }
      ]

      const onUpdateSelected = (nextSelected: ListSelectedList) => {
        currentTab.value = nextSelected
      }

      const onTabClick = (_event: MouseEvent, options: EventClickValue) => {
        lastClickSummary.value = String(options.value) + ':' + String(options.detail?.section ?? '')
      }

      const onTabClickLite = (options: EventClickValue) => {
        lastClickLiteSummary.value = String(options.value)
      }

      const onMotionAxis = (_options: MotionAxisEmitOptions) => {
        motionAxisCount.value += 1
      }

      const inspectExpose = () => {
        const hasGetValue = typeof tabsReference.value?.getValue === 'function'
        const hasGetDetail = typeof tabsReference.value?.getDetail === 'function'
        tabsReference.value?.getValue?.()
        tabsReference.value?.getDetail?.()
        exposeSummary.value = String(hasGetValue) + '|' + String(hasGetDetail)
      }

      return {
        tabsReference,
        currentTab,
        lastClickSummary,
        lastClickLiteSummary,
        motionAxisCount,
        exposeSummary,
        tabItems,
        onUpdateSelected,
        onTabClick,
        onTabClickLite,
        onMotionAxis,
        inspectExpose
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="inspectExpose">Inspect expose</button>
            <span data-testid="tabs-controlled-selected">{{ currentTab }}</span>
            <span data-testid="tabs-click-output">{{ lastClickSummary }}</span>
            <span data-testid="tabs-click-lite-output">{{ lastClickLiteSummary }}</span>
            <span data-testid="tabs-motion-count">{{ motionAxisCount }}</span>
            <span data-testid="tabs-expose-output">{{ exposeSummary }}</span>
          </div>

          <DesignComponent
            ref="tabsReference"
            :tabs="tabItems"
            :selected="currentTab"
            @update:selected="onUpdateSelected"
            @click="onTabClick"
            @click-lite="onTabClickLite"
            @motion-axis="onMotionAxis"
          >
            <template #first>First panel content</template>
            <template #second>Second panel content</template>
            <template #third>Third panel content</template>
          </DesignComponent>
        </div>
      `,
      play: `
const canvas = within(canvasElement)
await expect(canvas.getByTestId('tabs-controlled-selected')).toHaveTextContent('first')

await step('Click second tab and verify controlled update and click events', async () => {
  const tabs = canvasElement.querySelectorAll<HTMLElement>('[role="tab"]')
  await userEvent.click(tabs[1])
  await waitFor(() => {
    expect(canvas.getByTestId('tabs-controlled-selected')).toHaveTextContent('second')
    expect(canvas.getByTestId('tabs-click-output')).toHaveTextContent('second:details')
    expect(canvas.getByTestId('tabs-click-lite-output')).toHaveTextContent('second')
    const panels = canvasElement.querySelectorAll<HTMLElement>('[role="tabpanel"]')
    const hasSecondPanel = Array.from(panels).some(panel => panel.textContent?.includes('Second panel content'))
    expect(hasSecondPanel).toBe(true)
  })
})

await step('Verify exposed getValue() and getDetail() methods', async () => {
  await userEvent.click(canvas.getByRole('button', { name: 'Inspect expose' }))
  await expect(canvas.getByTestId('tabs-expose-output')).toHaveTextContent('true|true')
})
      `
    },
    {
      id: 'TabsTestStatesAndMotionAxis',
      name: {
        en: 'Test: Disabled, loading tabs, ARIA linkage and motionAxisAttrs',
        ru: 'Тест: Отключенные, загружаемые вкладки, ARIA-связь и motionAxisAttrs'
      },
      propsName: ['tabs', 'selected', 'motionAxisAttrs'],
      setup: `
      const selected = ref('active')
      const stateTabs = [
        { label: 'Active', value: 'active' },
        { label: 'Disabled', value: 'disabled', disabled: true },
        { label: 'Loading', value: 'loading', loading: true },
        { label: 'Available', value: 'available' }
      ]
      return {
        selected,
        stateTabs
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <span data-testid="tabs-state-selected">{{ selected }}</span>
          <DesignComponent
            :tabs="stateTabs"
            v-model:selected="selected"
            :motion-axis-attrs="{ axis: 'y', inDom: true, animationHeight: true }"
          >
            <template #active>Active panel</template>
            <template #disabled>Disabled panel</template>
            <template #loading>Loading panel</template>
            <template #available>Available panel</template>
          </DesignComponent>
        </div>
      `,
      play: `
const canvas = within(canvasElement)
const tabs = canvasElement.querySelectorAll<HTMLElement>('[role="tab"]')
await expect(tabs.length).toBe(4)

const panels = canvasElement.querySelectorAll<HTMLElement>('[role="tabpanel"]')
await expect(panels.length).toBe(4)

const firstTabId = tabs[0].getAttribute('id')
await expect(firstTabId).toBeTruthy()
await expect(panels[0]).toHaveAttribute('aria-labelledby', firstTabId!)

await step('Clicking disabled tab keeps current selection and verifies motionAxisAttrs', async () => {
  await expect(tabs[1]).toHaveAttribute('aria-disabled', 'true')
  await userEvent.click(tabs[1])
  await expect(canvas.getByTestId('tabs-state-selected')).toHaveTextContent('active')
  await expect(tabs[0]).toHaveAttribute('aria-selected', 'true')
  const motionAxisElement = canvasElement.querySelector<HTMLElement>('.d1-motionAxis')
  await expect(motionAxisElement?.className).toContain('--axis--y')
})

await step('Clicking available tab switches selection', async () => {
  await userEvent.click(tabs[3])
  await waitFor(() => {
    expect(canvas.getByTestId('tabs-state-selected')).toHaveTextContent('available')
    expect(tabs[3]).toHaveAttribute('aria-selected', 'true')
  })
})
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Tabs'} type={'tabs'}/>
<Canvas of={Component.TabsBasic}/>

<StorybookDescriptions componentName={'Tabs'} type={'v-model'}/>
<Canvas of={Component.TabsVModel}/>

<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.TabsSkeleton}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'click'}/>
<StorybookDescriptions componentName={'MotionAxis'} type={'events'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Expose'} type={'getValue'}/>
<StorybookDescriptions componentName={'Expose'} type={'getDetail'}/>
    `
  },
  ai: {
    description: `
High-level compound component that integrates TabsNavigation and MotionAxis to provide a complete, animated tabbed interface. Simplifies the creation of multi-view layouts where each section is logically separated and visually transitioned.
Features automated coordination between the navigation bar and the content area, including direction-aware sliding animations, custom keys (including numeric 0), divider configuration, and accessible ARIA tablist/tab/tabpanel linkage. Supports dynamic tab lists or config objects, centralized state management via v-model:selected or controlled selected + update:selected, and modular content distribution through named slots matching tab values.
Controlled via the tabs prop for structure and v-model:selected for active state. Use for main dashboard views, complex settings panels, or any multi-step interface requiring a polished, interactive navigation experience with high performance.
    `
  }
}
