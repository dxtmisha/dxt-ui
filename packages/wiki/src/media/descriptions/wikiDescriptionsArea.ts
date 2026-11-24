import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Area component properties
 *
 * Описания свойств компонента Area
 */
export const wikiDescriptionsArea: StorybookComponentsDescriptionItem = {
  name: 'Area',
  description: {
    en: 'Component for rendering content based on the current area context',
    ru: 'Компонент для отображения контента в зависимости от текущего контекста области'
  },
  possibilities: {
    en: [
      'automatic slot selection based on injected area value',
      'fallback to a default area via areaDefault if no injection is found',
      'supports nested areas and context inheritance',
      'renders default slot if no specific area slot matches'
    ],
    ru: [
      'автоматический выбор слота на основе внедренного значения области',
      'возврат к области по умолчанию через areaDefault, если внедрение не найдено',
      'поддержка вложенных областей и наследования контекста',
      'отображение слота по умолчанию, если ни один специфический слот области не подходит'
    ]
  },
  import: [
    'import { ref } from \'vue\'',
    'import { setAreaValue } from \'@dxtmisha/constructor\''
  ],
  render: `
    <DesignComponent v-bind="args">
      <template #header>Header Content (from area-default)</template>
      <template #footer>Footer Content</template>
      <template #default>Default Content</template>
    </DesignComponent>
  `,
  play: `
const text = canvasElement.textContent?.trim()
await expect(text).toBeTruthy()
  `,
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES
    // =========================================================================
    {
      id: 'AreaDefaultFallback',
      name: {
        en: 'Default area selection (areaDefault)',
        ru: 'Выбор области по умолчанию (areaDefault)'
      },
      propsName: ['areaDefault'],
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label">areaDefault="header"</div>
            <DesignComponent area-default="header">
              <template #header>
                <span>Header Slot Rendered</span>
              </template>
              <template #default>
                <span>Default Slot Rendered</span>
              </template>
            </DesignComponent>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label">areaDefault="unknown"</div>
            <DesignComponent area-default="unknown">
              <template #header>
                <span>Header Slot Rendered</span>
              </template>
              <template #default>
                <span>Default Slot Rendered</span>
              </template>
            </DesignComponent>
          </div>
        </div>
      `,
      play: `
const canvas = within(canvasElement)
await expect(canvas.getByText('Header Slot Rendered')).toBeInTheDocument()
await expect(canvas.getByText('Default Slot Rendered')).toBeInTheDocument()
      `
    },
    {
      id: 'AreaDynamicContext',
      name: {
        en: 'Dynamic injected area switching',
        ru: 'Динамическое переключение внедрённой области'
      },
      setup: `
      const activeArea = ref<string | undefined>('header')
      setAreaValue(activeArea)
      const selectArea = (areaName: string | undefined) => {
        activeArea.value = areaName
      }
      return { activeArea, selectArea }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="selectArea('header')">Header</button>
            <button class="wiki-storybook-button" @click="selectArea('sidebar')">Sidebar</button>
            <button class="wiki-storybook-button" @click="selectArea(undefined)">Fallback</button>
          </div>
          <div class="wiki-storybook-card">
            <DesignComponent area-default="fallback">
              <template #header><span>Active Area: Header</span></template>
              <template #sidebar><span>Active Area: Sidebar</span></template>
              <template #fallback><span>Active Area: Fallback</span></template>
              <template #default><span>Active Area: Default</span></template>
            </DesignComponent>
          </div>
        </div>
      `,
      play: `
const canvas = within(canvasElement)
await expect(canvas.getByText('Active Area: Header')).toBeInTheDocument()

await step('Switch to sidebar area', async () => {
  await userEvent.click(canvas.getByRole('button', { name: 'Sidebar' }))
  await expect(canvas.getByText('Active Area: Sidebar')).toBeInTheDocument()
})

await step('Switch to undefined areaDefault fallback', async () => {
  await userEvent.click(canvas.getByRole('button', { name: 'Fallback' }))
  await expect(canvas.getByText('Active Area: Fallback')).toBeInTheDocument()
})
      `
    },

    // =========================================================================
    // TIER 2: TEST STORIES (Constructor Props Only)
    // =========================================================================
    {
      id: 'AreaTestBoundaries',
      name: {
        en: 'Test: Prototype key guard and empty fallback',
        ru: 'Тест: Защита от ключей прототипа и пустой fallback'
      },
      propsName: ['areaDefault'],
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label">prototype key</div>
            <DesignComponent area-default="toString">
              <template #default>
                <span>Safe Prototype Fallback</span>
              </template>
            </DesignComponent>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto" data-testid="area-empty">
            <div class="wiki-storybook-item__label">no matching slots</div>
            <DesignComponent area-default="missing"/>
          </div>
        </div>
      `,
      play: `
const canvas = within(canvasElement)
await expect(canvas.getByText('Safe Prototype Fallback')).toBeInTheDocument()
const emptyContainer = canvasElement.querySelector('[data-testid="area-empty"]')
await expect(emptyContainer).toBeInTheDocument()
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Area'} type={'area'}/>
<Canvas of={Component.AreaDefaultFallback}/>
<Canvas of={Component.AreaDynamicContext}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Area'} type={'slot'}/>
    `
  },
  ai: {
    description: `
A utility component that acts as a dynamic slot switcher based on an "area" context.
It retrieves the current area value from the injection context or uses the 'areaDefault' prop.
It then renders the slot that matches the area name. If no matching slot is found, it falls back to the 'default' slot.
    `,
    hide: true
  }
}
