import type { Meta, StoryObj } from '@storybook/vue3-vite'

import UiButton from './UiButton.vue'
import { ButtonWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import UiSkeleton from '../Skeleton/UiSkeleton.vue'
import { ref } from 'vue'
import type { EventClickValue } from '@dxtmisha/constructor/Button'
import { expect, within, userEvent } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'ui/Button',
  component: UiButton,
  parameters: {
    design: 'ui',
    docs: {
      description: {
        component: ButtonWikiStorybook.getDescription()
      }
    }
  },
  argTypes: ButtonWikiStorybook.getWiki(),
  args: ButtonWikiStorybook.getValues()
} satisfies Meta<typeof UiButton>

export default meta

type Story = StoryObj<typeof meta>

export const Button: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { UiButton },
    setup: () => ({ args }),
    template: `
      <div class="wiki-storybook-flex">
      <UiButton v-bind="args">Button</UiButton>
    </div>
    `
  }),
  play: async ({ canvasElement }) => {
    const component = canvasElement.querySelector<HTMLElement>('.ui-button')
    await expect(component).toBeInTheDocument()
    await expect(component).toHaveTextContent('Button')
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const ButtonBasic: Story = {
  name: 'Базовые',
  render: () => ({
    components: { UiButton },
    template: `
        
        <div class="wiki-storybook-flex">
          <UiButton label="Button"/>
          <UiButton icon="home" label="Button with Icon"/>
          <UiButton icon-trailing="arrow_forward" label="Trailing Icon"/>
          <UiButton icon="home" icon-trailing="arrow_forward" label="Both Icons"/>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll<HTMLElement>('.ui-button')
    await expect(items.length).toBe(4)

    await expect(items[0]).toHaveTextContent('Button')
    await expect(items[1]).toHaveClass('ui-button--icon')
    await expect(items[1].querySelector('.ui-button__icon')).toBeInTheDocument()
    await expect(items[2].querySelector('.ui-button__trailing')).toBeInTheDocument()
    await expect(items[3].querySelector('.ui-button__icon')).toBeInTheDocument()
    await expect(items[3].querySelector('.ui-button__trailing')).toBeInTheDocument()
  }
}
export const ButtonAdaptive: Story = {
  name: 'Адаптивные',
  render: () => ({
    components: { UiButton },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Default</div>
            <UiButton icon="home" label="Button"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Adaptive block</div>
            <UiButton adaptive="block" icon="home" label="Block Button"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Adaptive auto</div>
            <UiButton adaptive="auto" icon="home" label="Auto Width"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Adaptive iconAlways</div>
            <UiButton adaptive="iconAlways" icon="home" label="Icon Only"/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll<HTMLElement>('.ui-button')
    await expect(items.length).toBe(4)

    await expect(items[0]).toBeInTheDocument()
    await expect(items[1]).toHaveClass('ui-button--adaptive--block')
    await expect(items[2]).toHaveClass('ui-button--adaptive--auto')
    await expect(items[3]).toHaveClass('ui-button--adaptive--iconAlways')
  }
}
export const ButtonSkeleton: Story = {
  name: 'Скелетон',
  render: () => ({
    components: { UiButton, UiSkeleton },
    template: `
        
        <UiSkeleton :active="true">
          <div class="wiki-storybook-flex">
            <UiButton is-skeleton label="Loading Action"/>
            <UiButton is-skeleton primary label="Confirming..."/>
          </div>
        </UiSkeleton>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll<HTMLElement>('.ui-button')
    await expect(items.length).toBe(2)

    await expect(items[0]).toHaveClass('d1-skeleton__background')
    await expect(items[1]).toHaveClass('d1-skeleton__background')
  }
}
export const ButtonEvents: Story = {
  name: 'События (Click & ClickLite)',
  render: () => ({
    components: { UiButton },
    setup() {
      const clickCount = ref(0)
      const clickLiteCount = ref(0)
      const lastDetail = ref('')

      const onClick = (event: MouseEvent, _value?: EventClickValue) => {
        clickCount.value++
        lastDetail.value = 'Clicked at ' + event.clientX + 'x' + event.clientY
      }

      const onClickLite = (_value?: EventClickValue) => {
        clickLiteCount.value++
      }

      return {
        clickCount,
        clickLiteCount,
        lastDetail,
        onClick,
        onClickLite
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <UiButton primary label="Click Me" @click="onClick" @click-lite="onClickLite"/>
          </div>
          <div class="wiki-storybook-card">
            <div>Clicks: <span class="click-counter">{{ clickCount }}</span></div>
            <div>Lite Clicks: <span class="click-lite-counter">{{ clickLiteCount }}</span></div>
            <div>Detail: <span class="click-detail">{{ lastDetail }}</span></div>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByText('Click Me')
    const counter = canvasElement.querySelector<HTMLElement>('.click-counter')
    const liteCounter = canvasElement.querySelector<HTMLElement>('.click-lite-counter')

    await expect(counter).toHaveTextContent('0')
    await expect(liteCounter).toHaveTextContent('0')
    await step('Click button', async () => {
      await userEvent.click(button)
    })
    await expect(counter).toHaveTextContent('1')
    await expect(liteCounter).toHaveTextContent('1')
  }
}
export const ButtonExpose: Story = {
  name: 'Экспорт методов (getValue & getDetail)',
  render: () => ({
    components: { UiButton },
    setup() {
      const buttonReference = ref()
      const exposedValue = ref('')
      const exposedDetail = ref('')

      const onInspect = () => {
        if (buttonReference.value) {
          exposedValue.value = String(buttonReference.value.getValue?.() ?? '')
          exposedDetail.value = JSON.stringify(buttonReference.value.getDetail?.() ?? {})
        }
      }

      return {
        buttonReference,
        exposedValue,
        exposedDetail,
        onInspect
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <UiButton
              ref="buttonReference"
              label="Action with Data"
              value="order-submit-action"
              :detail="{ orderId: 4096, verified: true }"
            />
            <button class="wiki-storybook-button inspect-button" @click="onInspect">
              Inspect Expose
            </button>
          </div>
          <div class="wiki-storybook-card">
            <div>Value: <span class="exposed-value">{{ exposedValue }}</span></div>
            <div>Detail: <span class="exposed-detail">{{ exposedDetail }}</span></div>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const inspectButton = canvas.getByText('Inspect Expose')
    const valueOutput = canvasElement.querySelector<HTMLElement>('.exposed-value')
    const detailOutput = canvasElement.querySelector<HTMLElement>('.exposed-detail')

    await step('Inspect exposed values', async () => {
      await userEvent.click(inspectButton)
    })

    await expect(valueOutput).toHaveTextContent('order-submit-action')
    await expect(detailOutput).toHaveTextContent('orderId')
  }
}
export const ButtonSlots: Story = {
  name: 'Слоты (default)',
  render: () => ({
    components: { UiButton },
    template: `
        
        <div class="wiki-storybook-flex">
          <UiButton primary>
            <template #default>
              <span>Custom <strong>Rich Default</strong> Content</span>
            </template>
          </UiButton>
          <UiButton secondary icon="star">
            <template #default>
              <span>Custom <em>Icon Slot</em></span>
            </template>
          </UiButton>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll<HTMLElement>('.ui-button')
    await expect(items.length).toBe(2)

    await expect(items[0]).toHaveTextContent('Rich Default')
    await expect(items[1]).toHaveTextContent('Icon Slot')
  }
}
export const ButtonTestStates: Story = {
  name: 'Тест: Отключенное, только для чтения, загрузка, фокус и комбинированные состояния',
  render: () => ({
    components: { UiButton },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">disabled</div>
            <UiButton disabled label="Disabled"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">readonly</div>
            <UiButton readonly label="Readonly"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">loading</div>
            <UiButton loading label="Loading"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">focus</div>
            <UiButton focus label="Focus"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">disabled + selected</div>
            <UiButton disabled selected label="Disabled Selected"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">loading + disabled</div>
            <UiButton loading disabled label="Loading Disabled"/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll<HTMLElement>('.ui-button')
    await expect(items.length).toBe(6)

    // 1. disabled
    await expect(items[0]).toHaveClass('ui-button--disabled')
    await expect(items[0]).toBeDisabled()

    // 2. readonly
    await expect(items[1]).toHaveClass('ui-button--readonly')

    // 3. loading: has loading sub-class, progress indicator, and aria-disabled
    await expect(items[2].querySelector('.ui-button__loading')).toBeInTheDocument()
    await expect(items[2]).toHaveAttribute('aria-disabled', 'true')

    // 4. focus
    await expect(items[3]).toHaveClass('ui-button--focus')

    // 5. disabled + selected
    await expect(items[4]).toHaveClass('ui-button--disabled')
    await expect(items[4]).toHaveClass('ui-button--selected')
    await expect(items[4]).toBeDisabled()

    // 6. loading + disabled
    await expect(items[5].querySelector('.ui-button__loading')).toBeInTheDocument()
    await expect(items[5]).toHaveClass('ui-button--disabled')
    await expect(items[5]).toBeDisabled()
  }
}
export const ButtonTestTokensAndModifiers: Story = {
  name: 'Тест: Инвертированные, сеточные, контейнерные и выравнивающие модификаторы',
  render: () => ({
    components: { UiButton },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">inverse</div>
            <UiButton inverse label="Inverse Button"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">grid</div>
            <UiButton grid icon="home" label="Grid Layout"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">container</div>
            <UiButton container="iconSm" icon="home" label="Container Query"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">textAlign: left</div>
            <UiButton text-align="left" adaptive="block" label="Left Aligned"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">textAlign: center</div>
            <UiButton text-align="center" adaptive="block" label="Center Aligned"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">textAlign: right</div>
            <UiButton text-align="right" adaptive="block" label="Right Aligned"/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll<HTMLElement>('.ui-button')
    await expect(items.length).toBe(6)

    await expect(items[0]).toHaveClass('ui-button--inverse')
    await expect(items[1]).toHaveClass('ui-button--grid')
    await expect(items[2]).toHaveClass('ui-button--container--iconSm')
    await expect(items[3]).toHaveClass('ui-button--textAlign--left')
    await expect(items[4]).toHaveClass('ui-button--textAlign--center')
    await expect(items[5]).toHaveClass('ui-button--textAlign--right')
  }
}
// :story-items [!] System label / Системная метка
