import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Area from './D1Area.vue'
import { AreaWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { ref } from 'vue'
import { setAreaValue } from '@dxtmisha/constructor'
import { expect, within, userEvent } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Area',
  component: D1Area,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: AreaWikiStorybook.getDescription()
      }
    }
  },
  argTypes: AreaWikiStorybook.getWiki(),
  args: AreaWikiStorybook.getValues()
} satisfies Meta<typeof D1Area>

export default meta

type Story = StoryObj<typeof meta>

export const Area: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1Area },
    setup: () => ({ args }),
    template: `
      <D1Area v-bind="args">
      <template #header>Header Content (from area-default)</template>
      <template #footer>Footer Content</template>
      <template #default>Default Content</template>
    </D1Area>
    `
  }),
  play: async ({ canvasElement }) => {
    const text = canvasElement.textContent?.trim()
    await expect(text).toBeTruthy()
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const AreaDefaultFallback: Story = {
  name: 'Выбор области по умолчанию (areaDefault)',
  render: () => ({
    components: { D1Area },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label">areaDefault="header"</div>
            <D1Area area-default="header">
              <template #header>
                <span>Header Slot Rendered</span>
              </template>
              <template #default>
                <span>Default Slot Rendered</span>
              </template>
            </D1Area>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label">areaDefault="unknown"</div>
            <D1Area area-default="unknown">
              <template #header>
                <span>Header Slot Rendered</span>
              </template>
              <template #default>
                <span>Default Slot Rendered</span>
              </template>
            </D1Area>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('Header Slot Rendered')).toBeInTheDocument()
    await expect(canvas.getByText('Default Slot Rendered')).toBeInTheDocument()
  }
}
export const AreaDynamicContext: Story = {
  name: 'Динамическое переключение внедрённой области',
  render: () => ({
    components: { D1Area },
    setup() {
      const activeArea = ref<string | undefined>('header')
      setAreaValue(activeArea)
      const selectArea = (areaName: string | undefined) => {
        activeArea.value = areaName
      }
      return { activeArea, selectArea }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="selectArea('header')">Header</button>
            <button class="wiki-storybook-button" @click="selectArea('sidebar')">Sidebar</button>
            <button class="wiki-storybook-button" @click="selectArea(undefined)">Fallback</button>
          </div>
          <div class="wiki-storybook-card">
            <D1Area area-default="fallback">
              <template #header><span>Active Area: Header</span></template>
              <template #sidebar><span>Active Area: Sidebar</span></template>
              <template #fallback><span>Active Area: Fallback</span></template>
              <template #default><span>Active Area: Default</span></template>
            </D1Area>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
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
  }
}
export const AreaTestBoundaries: Story = {
  name: 'Тест: Защита от ключей прототипа и пустой fallback',
  render: () => ({
    components: { D1Area },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label">prototype key</div>
            <D1Area area-default="toString">
              <template #default>
                <span>Safe Prototype Fallback</span>
              </template>
            </D1Area>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto" data-testid="area-empty">
            <div class="wiki-storybook-item__label">no matching slots</div>
            <D1Area area-default="missing"/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('Safe Prototype Fallback')).toBeInTheDocument()
    const emptyContainer = canvasElement.querySelector('[data-testid="area-empty"]')
    await expect(emptyContainer).toBeInTheDocument()
  }
}
// :story-items [!] System label / Системная метка
