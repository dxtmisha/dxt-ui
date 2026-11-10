import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Cell from './D1Cell.vue'
import { CellWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import D1Skeleton from '../Skeleton/D1Skeleton.vue'
import { ref } from 'vue'
import { expect, within, userEvent } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Cell',
  component: D1Cell,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: CellWikiStorybook.getDescription()
      }
    }
  },
  argTypes: CellWikiStorybook.getWiki(),
  args: CellWikiStorybook.getValues()
} satisfies Meta<typeof D1Cell>

export default meta

type Story = StoryObj<typeof meta>

export const Cell: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1Cell },
    setup: () => ({ args }),
    template: `
      <D1Cell v-bind="args"/>
    <D1Cell v-bind="args"/>
    <D1Cell v-bind="args"/>
    `
  })
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const CellSkeleton: Story = {
  name: 'Загрузка скелетона',
  render: () => ({
    components: { D1Cell, D1Skeleton },
    template: `
        
        <D1Skeleton :active="true">
          <D1Cell
            :isSkeleton="true"
            caption="Caption"
            description="Short description"
            label="Label A"
          />
          <D1Cell
            :isSkeleton="true"
            caption="Caption"
            description="A bit longer description for the cell component."
            label="Label Example"
          />
        </D1Skeleton>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const cellElements = canvasElement.querySelectorAll('.d1-cell')
    expect(cellElements.length).toBeGreaterThanOrEqual(2)
  }
}
export const CellSlots: Story = {
  name: 'Использование слотов',
  render: () => ({
    components: { D1Cell },
    template: `
        
        <D1Cell icon="home">
          <template #default>Default slot content</template>
          <template #description>Description slot content</template>
          <template #caption>Caption slot content</template>
          <template #trailing>Trailing slot content</template>
          <template #body>Body slot content</template>
        </D1Cell>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByText('Default slot content')).toBeInTheDocument()
    expect(canvas.getByText('Description slot content')).toBeInTheDocument()
    expect(canvas.getByText('Caption slot content')).toBeInTheDocument()
    expect(canvas.getByText('Trailing slot content')).toBeInTheDocument()
    expect(canvas.getByText('Body slot content')).toBeInTheDocument()
  }
}
export const CellIcons: Story = {
  name: 'Начальная и завершающая иконки',
  render: () => ({
    components: { D1Cell },
    template: `
        
        <div style="display: flex; flex-direction: column; gap: 8px;">
          <D1Cell
            label="Home navigation"
            description="Leading icon aligned with text"
            icon="home"
          />
          <D1Cell
            label="Settings section"
            description="Trailing chevron accessory"
            iconTrailing="chevron_right"
          />
          <D1Cell
            label="Profile account"
            description="Leading icon aligned to top row"
            icon="person"
            iconTop
          />
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByText('Home navigation')).toBeInTheDocument()
    expect(canvas.getByText('Settings section')).toBeInTheDocument()
    expect(canvas.getByText('Profile account')).toBeInTheDocument()
  }
}
export const CellDynamic: Story = {
  name: 'Динамическое и интерактивное поведение',
  render: () => ({
    components: { D1Cell },
    setup() {
      const clickedCount = ref(0)
      const onClick = () => {
        clickedCount.value++
      }

      return {
        clickedCount,
        onClick
      }
    },
    template: `
        
        <div style="display: flex; flex-direction: column; gap: 8px;">
          <D1Cell
            label="Clickable cell item"
            description="Click to increment counter"
            dynamic
            dynamicHover
            @click="onClick"
          />
          <div data-testid="counter-value" style="font-size: 12px;">Clicks: {{ clickedCount }}</div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const clickable = canvas.getByText('Clickable cell item')
    expect(clickable).toBeInTheDocument()
    await userEvent.click(clickable)
    const counter = canvas.getByTestId('counter-value')
    expect(counter.textContent).toContain('Clicks: 1')
  }
}
export const CellTestStates: Story = {
  name: 'Тест: Отключенное, выбранное, только чтение и состояние фокуса',
  render: () => ({
    components: { D1Cell },
    template: `
        
        <div style="display: flex; flex-direction: column; gap: 8px;">
          <D1Cell
            label="Disabled cell"
            description="Disabled interaction"
            disabled
          />
          <D1Cell
            label="Selected cell"
            description="Selected state"
            selected
          />
          <D1Cell
            label="Readonly cell"
            description="Readonly state"
            readonly
          />
          <D1Cell
            label="Focus cell"
            description="Focus state"
            focus
          />
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const disabledElement = canvas.getByText('Disabled cell').closest('.d1-cell')
    expect(disabledElement?.className).toContain('disabled')

    const selectedElement = canvas.getByText('Selected cell').closest('.d1-cell')
    expect(selectedElement?.className).toContain('selected')

    const readonlyElement = canvas.getByText('Readonly cell').closest('.d1-cell')
    expect(readonlyElement?.className).toContain('readonly')

    const focusElement = canvas.getByText('Focus cell').closest('.d1-cell')
    expect(focusElement?.className).toContain('focus')
  }
}
export const CellTestDividers: Story = {
  name: 'Тест: Варианты разделителей и разделители меток',
  render: () => ({
    components: { D1Cell },
    template: `
        
        <div style="display: flex; flex-direction: column;">
          <D1Cell
            label="Item with default divider"
            divider
          />
          <D1Cell
            label="Item with disabled divider"
            :divider="false"
          />
          <D1Cell
            label="Item with always divider label"
            dividerLabel="always"
          />
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const firstCell = canvas.getByText('Item with default divider').closest('.d1-cell')
    expect(firstCell?.getAttribute('data-divider')).toBe('active')

    const secondCell = canvas.getByText('Item with disabled divider').closest('.d1-cell')
    expect(secondCell?.getAttribute('data-divider')).toBeNull()

    const thirdCell = canvas.getByText('Item with always divider label').closest('.d1-cell')
    expect(thirdCell?.className).toContain('dividerLabel')
  }
}
export const CellTestTagsAndRoles: Story = {
  name: 'Тест: Семантические теги, кастомные роли и ARIA',
  render: () => ({
    components: { D1Cell },
    template: `
        
        <div style="display: flex; flex-direction: column; gap: 8px;">
          <D1Cell
            label="Section tag item"
            tag="section"
          />
          <D1Cell
            label="Custom role listitem"
            role="listitem"
          />
          <D1Cell
            label="Dynamic button role"
            dynamic
          />
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const sectionCell = canvas.getByText('Section tag item').closest('section')
    expect(sectionCell).not.toBeNull()

    const listitemCell = canvas.getByText('Custom role listitem').closest('[role="listitem"]')
    expect(listitemCell).not.toBeNull()

    const dynamicCell = canvas.getByText('Dynamic button role').closest('[role="button"]')
    expect(dynamicCell).not.toBeNull()
    expect(dynamicCell?.getAttribute('tabindex')).toBe('0')
  }
}
export const CellTestProgress: Story = {
  name: 'Тест: Индикатор выполнения прогресс-бара',
  render: () => ({
    components: { D1Cell },
    template: `
        
        <D1Cell
          label="Cell with loading progress"
          description="In-flight asynchronous process"
          loading
        />
      
    `
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const cell = canvas.getByText('Cell with loading progress').closest('.d1-cell')
    expect(cell).not.toBeNull()
  }
}
// :story-items [!] System label / Системная метка
