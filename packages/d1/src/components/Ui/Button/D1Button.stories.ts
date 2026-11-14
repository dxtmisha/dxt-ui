import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Button from './D1Button.vue'
import { ButtonWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import D1Skeleton from '../Skeleton/D1Skeleton.vue'
import { ref } from 'vue'
import type { EventClickValue } from '@dxtmisha/constructor/Button'
import { expect, within, userEvent } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Button',
  component: D1Button,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: ButtonWikiStorybook.getDescription()
      }
    }
  },
  argTypes: ButtonWikiStorybook.getWiki(),
  args: ButtonWikiStorybook.getValues()
} satisfies Meta<typeof D1Button>

export default meta

type Story = StoryObj<typeof meta>

export const Button: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1Button },
    setup: () => ({ args }),
    template: `
      <div class="wiki-storybook-flex">
      <D1Button v-bind="args">Button</D1Button>
    </div>
    `
  }),
  play: async ({ canvasElement }) => {
    const component = canvasElement.querySelector<HTMLElement>('.d1-button')
    await expect(component).toBeInTheDocument()
    await expect(component).toHaveTextContent('Button')
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const ButtonBasic: Story = {
  name: 'Базовые',
  render: () => ({
    components: { D1Button },
    template: `
        
        <div class="wiki-storybook-flex">
          <D1Button label="Button"/>
          <D1Button icon="home" label="Button with Icon"/>
          <D1Button icon-trailing="arrow_forward" label="Trailing Icon"/>
          <D1Button icon="home" icon-trailing="arrow_forward" label="Both Icons"/>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll<HTMLElement>('.d1-button')
    await expect(items.length).toBe(4)

    await expect(items[0]).toHaveTextContent('Button')
    await expect(items[1]).toHaveClass('d1-button--icon')
    await expect(items[1].querySelector('.d1-button__icon')).toBeInTheDocument()
    await expect(items[2].querySelector('.d1-button__trailing')).toBeInTheDocument()
    await expect(items[3].querySelector('.d1-button__icon')).toBeInTheDocument()
    await expect(items[3].querySelector('.d1-button__trailing')).toBeInTheDocument()
  }
}
export const ButtonPrimary: Story = {
  name: 'Основные (primary)',
  render: () => ({
    components: { D1Button },
    template: `
        
        <div class="wiki-storybook-flex">
          <D1Button primary label="Primary"/>
          <D1Button primary icon="home" label="With Icon"/>
          <D1Button primary selected label="Selected"/>
          <D1Button primary disabled label="Disabled"/>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll<HTMLElement>('.d1-button')
    await expect(items.length).toBe(4)

    await expect(items[0]).toHaveClass('d1-button--primary')
    await expect(items[1]).toHaveClass('d1-button--icon')
    await expect(items[2]).toHaveClass('d1-button--selected')
    await expect(items[3]).toHaveClass('d1-button--disabled')
    await expect(items[3]).toBeDisabled()
  }
}
export const ButtonSecondary: Story = {
  name: 'Второстепенные (secondary)',
  render: () => ({
    components: { D1Button },
    template: `
        
        <div class="wiki-storybook-flex">
          <D1Button secondary label="Secondary"/>
          <D1Button secondary icon="home" label="With Icon"/>
          <D1Button secondary selected label="Selected"/>
          <D1Button secondary disabled label="Disabled"/>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll<HTMLElement>('.d1-button')
    await expect(items.length).toBe(4)

    await expect(items[0]).toHaveClass('d1-button--secondary')
    await expect(items[1]).toHaveClass('d1-button--icon')
    await expect(items[2]).toHaveClass('d1-button--selected')
    await expect(items[3]).toHaveClass('d1-button--disabled')
    await expect(items[3]).toBeDisabled()
  }
}
export const ButtonOutline: Story = {
  name: 'Контурные (outline)',
  render: () => ({
    components: { D1Button },
    template: `
        
        <div class="wiki-storybook-flex">
          <D1Button outline label="Outline"/>
          <D1Button outline icon="home" label="With Icon"/>
          <D1Button outline selected label="Selected"/>
          <D1Button outline disabled label="Disabled"/>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll<HTMLElement>('.d1-button')
    await expect(items.length).toBe(4)

    await expect(items[0]).toHaveClass('d1-button--outline')
    await expect(items[1]).toHaveClass('d1-button--icon')
    await expect(items[2]).toHaveClass('d1-button--selected')
    await expect(items[3]).toHaveClass('d1-button--disabled')
    await expect(items[3]).toBeDisabled()
  }
}
export const ButtonText: Story = {
  name: 'Текстовые (text)',
  render: () => ({
    components: { D1Button },
    template: `
        
        <div class="wiki-storybook-flex">
          <D1Button text label="Text"/>
          <D1Button text icon="home" label="With Icon"/>
          <D1Button text selected label="Selected"/>
          <D1Button text disabled label="Disabled"/>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll<HTMLElement>('.d1-button')
    await expect(items.length).toBe(4)

    await expect(items[0]).toHaveClass('d1-button--text')
    await expect(items[1]).toHaveClass('d1-button--icon')
    await expect(items[2]).toHaveClass('d1-button--selected')
    await expect(items[3]).toHaveClass('d1-button--disabled')
    await expect(items[3]).toBeDisabled()
  }
}
export const ButtonAdaptive: Story = {
  name: 'Адаптивные',
  render: () => ({
    components: { D1Button },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Default</div>
            <D1Button icon="home" label="Button"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Adaptive block</div>
            <D1Button adaptive="block" icon="home" label="Block Button"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Adaptive auto</div>
            <D1Button adaptive="auto" icon="home" label="Auto Width"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Adaptive iconAlways</div>
            <D1Button adaptive="iconAlways" icon="home" label="Icon Only"/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll<HTMLElement>('.d1-button')
    await expect(items.length).toBe(4)

    await expect(items[0]).toBeInTheDocument()
    await expect(items[1]).toHaveClass('d1-button--adaptive--block')
    await expect(items[2]).toHaveClass('d1-button--adaptive--auto')
    await expect(items[3]).toHaveClass('d1-button--adaptive--iconAlways')
  }
}
export const ButtonSkeleton: Story = {
  name: 'Скелетон',
  render: () => ({
    components: { D1Button, D1Skeleton },
    template: `
        
        <D1Skeleton :active="true">
          <div class="wiki-storybook-flex">
            <D1Button is-skeleton label="Loading Action"/>
            <D1Button is-skeleton primary label="Confirming..."/>
          </div>
        </D1Skeleton>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll<HTMLElement>('.d1-button')
    await expect(items.length).toBe(2)

    await expect(items[0]).toHaveClass('d1-skeleton__background')
    await expect(items[1]).toHaveClass('d1-skeleton__background')
  }
}
export const ButtonEvents: Story = {
  name: 'События (Click & ClickLite)',
  render: () => ({
    components: { D1Button },
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
            <D1Button primary label="Click Me" @click="onClick" @click-lite="onClickLite"/>
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
    components: { D1Button },
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
            <D1Button
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
    components: { D1Button },
    template: `
        
        <div class="wiki-storybook-flex">
          <D1Button primary>
            <template #default>
              <span>Custom <strong>Rich Default</strong> Content</span>
            </template>
          </D1Button>
          <D1Button secondary icon="star">
            <template #default>
              <span>Custom <em>Icon Slot</em></span>
            </template>
          </D1Button>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll<HTMLElement>('.d1-button')
    await expect(items.length).toBe(2)

    await expect(items[0]).toHaveTextContent('Rich Default')
    await expect(items[1]).toHaveTextContent('Icon Slot')
  }
}
export const ButtonTestStates: Story = {
  name: 'Тест: Отключенное, только для чтения, загрузка, фокус и комбинированные состояния',
  render: () => ({
    components: { D1Button },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">disabled</div>
            <D1Button disabled label="Disabled"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">readonly</div>
            <D1Button readonly label="Readonly"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">loading</div>
            <D1Button loading label="Loading"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">focus</div>
            <D1Button focus label="Focus"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">disabled + selected</div>
            <D1Button disabled selected label="Disabled Selected"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">loading + disabled</div>
            <D1Button loading disabled label="Loading Disabled"/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll<HTMLElement>('.d1-button')
    await expect(items.length).toBe(6)

    // 1. disabled
    await expect(items[0]).toHaveClass('d1-button--disabled')
    await expect(items[0]).toBeDisabled()

    // 2. readonly
    await expect(items[1]).toHaveClass('d1-button--readonly')

    // 3. loading: has loading sub-class, progress indicator, and aria-disabled
    await expect(items[2].querySelector('.d1-button__loading')).toBeInTheDocument()
    await expect(items[2]).toHaveAttribute('aria-disabled', 'true')

    // 4. focus
    await expect(items[3]).toHaveClass('d1-button--focus')

    // 5. disabled + selected
    await expect(items[4]).toHaveClass('d1-button--disabled')
    await expect(items[4]).toHaveClass('d1-button--selected')
    await expect(items[4]).toBeDisabled()

    // 6. loading + disabled
    await expect(items[5].querySelector('.d1-button__loading')).toBeInTheDocument()
    await expect(items[5]).toHaveClass('d1-button--disabled')
    await expect(items[5]).toBeDisabled()
  }
}
export const ButtonTestTokensAndModifiers: Story = {
  name: 'Тест: Инвертированные, сеточные, контейнерные и выравнивающие модификаторы',
  render: () => ({
    components: { D1Button },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">inverse</div>
            <D1Button inverse label="Inverse Button"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">grid</div>
            <D1Button grid icon="home" label="Grid Layout"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">container</div>
            <D1Button container="iconSm" icon="home" label="Container Query"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">textAlign: left</div>
            <D1Button text-align="left" adaptive="block" label="Left Aligned"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">textAlign: center</div>
            <D1Button text-align="center" adaptive="block" label="Center Aligned"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">textAlign: right</div>
            <D1Button text-align="right" adaptive="block" label="Right Aligned"/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll<HTMLElement>('.d1-button')
    await expect(items.length).toBe(6)

    await expect(items[0]).toHaveClass('d1-button--inverse')
    await expect(items[1]).toHaveClass('d1-button--grid')
    await expect(items[2]).toHaveClass('d1-button--container--iconSm')
    await expect(items[3]).toHaveClass('d1-button--textAlign--left')
    await expect(items[4]).toHaveClass('d1-button--textAlign--center')
    await expect(items[5]).toHaveClass('d1-button--textAlign--right')
  }
}
// :story-items [!] System label / Системная метка
