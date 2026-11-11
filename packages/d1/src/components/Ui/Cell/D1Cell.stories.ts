import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Cell from './D1Cell.vue'
import { CellWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import D1Skeleton from '../Skeleton/D1Skeleton.vue'
import { ref } from 'vue'
import type { CellExpose as CellExposeType } from '@dxtmisha/constructor/Cell'
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
      <div class="wiki-storybook-item wiki-storybook-item--compact">
      <D1Cell v-bind="args"/>
    </div>
    `
  }),
  play: async ({ canvasElement }) => {
    const component = canvasElement.querySelector<HTMLElement>('.d1-cell')
    await expect(component).toBeInTheDocument()
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const CellIcons: Story = {
  name: 'Иконки и выравнивание по верху',
  render: () => ({
    components: { D1Cell },
    template: `
        
        <div style="display: flex; flex-direction: column; gap: 8px;">
          <D1Cell
            label="Leading Icon"
            description="Primary navigation item with start icon"
            icon="home"
          />
          <D1Cell
            label="Trailing Accessory"
            description="Row with trailing navigation chevron accessory"
            iconTrailing="chevron_right"
          />
          <D1Cell
            label="Dual Icons"
            description="Both leading and trailing accessories configured"
            icon="mail"
            iconTrailing="open_in_new"
          />
          <D1Cell
            label="Top Aligned Icon"
            description="Multi-line extended description showing that the leading icon stays pinned to the top line instead of centering vertically"
            icon="account_circle"
            iconTop
          />
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('Leading Icon')).toBeInTheDocument()
    await expect(canvas.getByText('Trailing Accessory')).toBeInTheDocument()
    await expect(canvas.getByText('Dual Icons')).toBeInTheDocument()
    await expect(canvas.getByText('Top Aligned Icon')).toBeInTheDocument()

    const items = canvasElement.querySelectorAll<HTMLElement>('.d1-cell')
    await expect(items[0].querySelector('.d1-cell__icon')).toBeInTheDocument()
    await expect(items[1].querySelector('.d1-cell__trailing')).toBeInTheDocument()
    await expect(items[2].querySelector('.d1-cell__icon')).toBeInTheDocument()
    await expect(items[2].querySelector('.d1-cell__trailing')).toBeInTheDocument()
    await expect(items[3]).toHaveClass('d1-cell--iconTop')
  }
}
export const CellDynamic: Story = {
  name: 'Динамическое поведение и hover-эффект',
  render: () => ({
    components: { D1Cell },
    setup() {
      const clickCount = ref(0)
      const onCellClick = () => {
        clickCount.value++
      }

      return {
        clickCount,
        onCellClick
      }
    },
    template: `
        
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <D1Cell
            label="Actionable Dynamic Cell"
            description="Clickable row with hover feedback, keyboard focus outline and ripple response"
            dynamic
            dynamicHover
            @click="onCellClick"
          />
          <div data-testid="cell-click-counter" class="wiki-storybook-card" style="font-size: 13px;">
            Total Clicks: {{ clickCount }}
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const dynamicCell = canvas.getByText('Actionable Dynamic Cell').closest<HTMLElement>('.d1-cell')
    await expect(dynamicCell).not.toBeNull()
    await expect(dynamicCell).toHaveClass('d1-cell--dynamic')
    await expect(dynamicCell).toHaveClass('d1-cell--dynamicHover')
    await expect(dynamicCell).toHaveAttribute('role', 'button')
    await expect(dynamicCell).toHaveAttribute('tabindex', '0')

    await userEvent.click(dynamicCell!)
    const counter = canvas.getByTestId('cell-click-counter')
    await expect(counter.textContent).toContain('Total Clicks: 1')
  }
}
export const CellSlots: Story = {
  name: 'Композируемые слоты шаблона',
  render: () => ({
    components: { D1Cell },
    template: `
        
        <D1Cell icon="widgets">
          <template #default>Default Slot Title</template>
          <template #caption>Custom Caption Badge</template>
          <template #description>Custom description content rendered via dedicated description slot</template>
          <template #trailing>
            <span style="font-size: 12px; font-weight: 600; opacity: 0.7;">EXTRA ACTION</span>
          </template>
          <template #body>
            <div style="padding-top: 6px; font-size: 12px; opacity: 0.8; border-top: 1px dashed rgba(128,128,128,0.3); margin-top: 6px;">
              Expandable body slot with supplementary metadata or nested components
            </div>
          </template>
        </D1Cell>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('Default Slot Title')).toBeInTheDocument()
    await expect(canvas.getByText('Custom Caption Badge')).toBeInTheDocument()
    await expect(canvas.getByText('Custom description content rendered via dedicated description slot')).toBeInTheDocument()
    await expect(canvas.getByText('EXTRA ACTION')).toBeInTheDocument()
    await expect(canvas.getByText('Expandable body slot with supplementary metadata or nested components')).toBeInTheDocument()
  }
}
export const CellSkeleton: Story = {
  name: 'Состояние загрузки со скелетоном',
  render: () => ({
    components: { D1Cell, D1Skeleton },
    template: `
        
        <D1Skeleton :active="true">
          <div style="display: flex; flex-direction: column; gap: 8px;">
            <D1Cell
              :isSkeleton="true"
              label="Primary Account Name"
              description="Billing and invoice management summary"
              caption="Active"
            />
            <D1Cell
              :isSkeleton="true"
              label="Extended Network Setting"
              description="Detailed network topology and configuration parameters for data synchronization"
              caption="Pending"
            />
          </div>
        </D1Skeleton>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll<HTMLElement>('.d1-cell')
    await expect(items.length).toBe(2)
  }
}
export const CellExpose: Story = {
  name: 'Программные методы и инспекция',
  render: () => ({
    components: { D1Cell },
    setup() {
      const cellReference = ref<CellExposeType>()
      const inspectedValue = ref<string>('')
      const inspectedDetail = ref<string>('')

      const onInspect = () => {
        inspectedValue.value = String(cellReference.value?.getValue?.() ?? 'none')
        inspectedDetail.value = JSON.stringify(cellReference.value?.getDetail?.() ?? {})
      }

      return {
        cellReference,
        inspectedValue,
        inspectedDetail,
        onInspect
      }
    },
    template: `
        
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <D1Cell
            ref="cellReference"
            label="Inspection Target Row"
            description="Provides programmatic getValue() and getDetail() access"
            value="account-9482"
            :detail="{ role: 'manager', permission: 'admin' }"
          />
          <button
            type="button"
            class="wiki-storybook-button"
            @click="onInspect"
          >
            Inspect Cell Expose
          </button>
          <div class="wiki-storybook-card" style="font-size: 13px;">
            <div><strong>Value:</strong> <span data-testid="expose-value">{{ inspectedValue }}</span></div>
            <div><strong>Detail:</strong> <span data-testid="expose-detail">{{ inspectedDetail }}</span></div>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button', { name: 'Inspect Cell Expose' })
    await userEvent.click(button)

    const valueElement = canvas.getByTestId('expose-value')
    await expect(valueElement.textContent).toBe('account-9482')

    const detailElement = canvas.getByTestId('expose-detail')
    await expect(detailElement.textContent).toContain('manager')
    await expect(detailElement.textContent).toContain('admin')
  }
}
export const CellEventClick: Story = {
  name: 'События click и clickLite',
  render: () => ({
    components: { D1Cell },
    setup() {
      const lastEventName = ref<string>('none')
      const lastEventValue = ref<string>('')

      const handleClick = (_event: MouseEvent, value: any) => {
        lastEventName.value = 'click'
        lastEventValue.value = String(value)
      }

      const handleClickLite = (_event: MouseEvent, value: any) => {
        lastEventName.value = 'clickLite'
        lastEventValue.value = String(value)
      }

      return {
        lastEventName,
        lastEventValue,
        handleClick,
        handleClickLite
      }
    },
    template: `
        
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <D1Cell
            label="Click Event Dispatcher"
            description="Triggers both onClick and onClickLite when clicked"
            value="cell-payload-123"
            dynamic
            @click="handleClick"
            @clickLite="handleClickLite"
          />
          <div class="wiki-storybook-card" style="font-size: 13px;">
            <div><strong>Last Event:</strong> <span data-testid="event-name">{{ lastEventName }}</span></div>
            <div><strong>Payload Value:</strong> <span data-testid="event-value">{{ lastEventValue }}</span></div>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const cell = canvas.getByText('Click Event Dispatcher').closest<HTMLElement>('.d1-cell')
    await expect(cell).not.toBeNull()

    await userEvent.click(cell!)
    const eventName = canvas.getByTestId('event-name')
    const eventValue = canvas.getByTestId('event-value')
    await expect(eventName.textContent).not.toBe('none')
    await expect(eventValue.textContent).toBe('cell-payload-123')
  }
}
export const CellTestStates: Story = {
  name: 'Тест: Отключенное, выбранное, только чтение и состояние фокуса',
  render: () => ({
    components: { D1Cell },
    template: `
        
        <div style="display: flex; flex-direction: column; gap: 8px;">
          <D1Cell
            label="Disabled Cell"
            description="Disabled interaction state"
            disabled
          />
          <D1Cell
            label="Selected Cell"
            description="Selected active item state"
            selected
          />
          <D1Cell
            label="Readonly Cell"
            description="Readonly non-editable display state"
            readonly
          />
          <D1Cell
            label="Focus Cell"
            description="Focus highlight state"
            focus
          />
          <D1Cell
            label="Disabled + Selected"
            description="Simultaneously disabled and selected"
            disabled
            selected
          />
          <D1Cell
            label="Disabled + Readonly"
            description="Simultaneously disabled and readonly"
            disabled
            readonly
          />
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const disabledCell = canvas.getByText('Disabled Cell').closest<HTMLElement>('.d1-cell')
    await expect(disabledCell).toHaveClass('d1-cell--disabled')

    const selectedCell = canvas.getByText('Selected Cell').closest<HTMLElement>('.d1-cell')
    await expect(selectedCell).toHaveClass('d1-cell--selected')

    const readonlyCell = canvas.getByText('Readonly Cell').closest<HTMLElement>('.d1-cell')
    await expect(readonlyCell).toHaveClass('d1-cell--readonly')

    const focusCell = canvas.getByText('Focus Cell').closest<HTMLElement>('.d1-cell')
    await expect(focusCell).toHaveClass('d1-cell--focus')

    const disabledSelectedCell = canvas.getByText('Disabled + Selected').closest<HTMLElement>('.d1-cell')
    await expect(disabledSelectedCell).toHaveClass('d1-cell--disabled')
    await expect(disabledSelectedCell).toHaveClass('d1-cell--selected')

    const disabledReadonlyCell = canvas.getByText('Disabled + Readonly').closest<HTMLElement>('.d1-cell')
    await expect(disabledReadonlyCell).toHaveClass('d1-cell--disabled')
    await expect(disabledReadonlyCell).toHaveClass('d1-cell--readonly')
  }
}
export const CellTestDividers: Story = {
  name: 'Тест: Варианты разделителей и разделители меток',
  render: () => ({
    components: { D1Cell },
    template: `
        
        <div style="display: flex; flex-direction: column;">
          <D1Cell
            label="Default Active Divider"
            divider
          />
          <D1Cell
            label="Adjacent Active Divider"
            divider
          />
          <D1Cell
            label="Disabled Divider"
            :divider="false"
          />
          <D1Cell
            label="Always Label Divider"
            dividerLabel="always"
          />
          <D1Cell
            label="None Label Divider"
            dividerLabel="none"
          />
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const firstCell = canvas.getByText('Default Active Divider').closest<HTMLElement>('.d1-cell')
    await expect(firstCell).toHaveAttribute('data-divider', 'active')

    const secondCell = canvas.getByText('Adjacent Active Divider').closest<HTMLElement>('.d1-cell')
    await expect(secondCell).toHaveAttribute('data-divider', 'active')

    const thirdCell = canvas.getByText('Disabled Divider').closest<HTMLElement>('.d1-cell')
    await expect(thirdCell?.getAttribute('data-divider')).toBeNull()

    const fourthCell = canvas.getByText('Always Label Divider').closest<HTMLElement>('.d1-cell')
    await expect(fourthCell).toHaveClass('d1-cell--dividerLabel--always')

    const fifthCell = canvas.getByText('None Label Divider').closest<HTMLElement>('.d1-cell')
    await expect(fifthCell).toHaveClass('d1-cell--dividerLabel--none')
  }
}
export const CellTestCombinations: Story = {
  name: 'Тест: Связанные свойства и интерактивные комбинации',
  render: () => ({
    components: { D1Cell },
    template: `
        
        <div style="display: flex; flex-direction: column; gap: 8px;">
          <D1Cell
            label="Dynamic + Disabled"
            description="Disabled precedence over dynamic interaction"
            dynamic
            disabled
          />
          <D1Cell
            label="Dynamic + Readonly"
            description="Readonly non-editable dynamic row"
            dynamic
            readonly
          />
          <D1Cell
            label="DynamicHover + Selected"
            description="Combined hover and selected visual indicators"
            dynamicHover
            selected
          />
          <D1Cell
            label="Full Accessory Alignment"
            caption="Caption Text"
            description="Long multi-line description text combined with icon, trailing accessory, and iconTop alignment"
            icon="settings"
            iconTrailing="arrow_forward"
            iconTop
          >
            <template #body>
              <div style="font-size: 12px; opacity: 0.7; margin-top: 4px;">Nested sub-information</div>
            </template>
          </D1Cell>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const dynamicDisabledCell = canvas.getByText('Dynamic + Disabled').closest<HTMLElement>('.d1-cell')
    await expect(dynamicDisabledCell).toHaveClass('d1-cell--disabled')
    await expect(dynamicDisabledCell).toHaveClass('d1-cell--dynamic')

    const dynamicReadonlyCell = canvas.getByText('Dynamic + Readonly').closest<HTMLElement>('.d1-cell')
    await expect(dynamicReadonlyCell).toHaveClass('d1-cell--readonly')
    await expect(dynamicReadonlyCell).toHaveClass('d1-cell--dynamic')

    const dynamicSelectedCell = canvas.getByText('DynamicHover + Selected').closest<HTMLElement>('.d1-cell')
    await expect(dynamicSelectedCell).toHaveClass('d1-cell--dynamicHover')
    await expect(dynamicSelectedCell).toHaveClass('d1-cell--selected')

    const fullCell = canvas.getByText('Full Accessory Alignment').closest<HTMLElement>('.d1-cell')
    await expect(fullCell).toHaveClass('d1-cell--iconTop')
    await expect(canvas.getByText('Nested sub-information')).toBeInTheDocument()
  }
}
// :story-items [!] System label / Системная метка
