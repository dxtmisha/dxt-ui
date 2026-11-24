import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Header from './D1Header.vue'
import { HeaderWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { defineComponent, h, ref } from 'vue'
import { getAreaValue } from '@dxtmisha/constructor'
import { expect, within, userEvent, waitFor } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Header',
  component: D1Header,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: HeaderWikiStorybook.getDescription()
      }
    }
  },
  argTypes: HeaderWikiStorybook.getWiki(),
  args: HeaderWikiStorybook.getValues()
} satisfies Meta<typeof D1Header>

export default meta

type Story = StoryObj<typeof meta>

export const Header: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1Header },
    setup: () => ({ args }),
    template: `
      <D1Header v-bind="args"/>
    `
  }),
  play: async ({ canvasElement }) => {
    const component = canvasElement.querySelector('.d1-header')
    await expect(component).toBeInTheDocument()
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const HeaderBasic: Story = {
  name: 'Уровни заголовков (h1 - h6)',
  render: () => ({
    components: { D1Header },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1Header label="Header Level 1" caption="h1" tag="h1"/>
          <D1Header label="Header Level 2" caption="h2" tag="h2"/>
          <D1Header label="Header Level 3" caption="h3" tag="h3"/>
          <D1Header label="Header Level 4" caption="h4" tag="h4"/>
          <D1Header label="Header Level 5" caption="h5" tag="h5"/>
          <D1Header label="Header Level 6" caption="h6" tag="h6"/>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const labels = canvasElement.querySelectorAll('.d1-header__label')
    await expect(labels.length).toBe(6)
    await expect(labels[0]?.tagName).toBe('H1')
    await expect(labels[1]?.tagName).toBe('H2')
    await expect(labels[2]?.tagName).toBe('H3')
    await expect(labels[3]?.tagName).toBe('H4')
    await expect(labels[4]?.tagName).toBe('H5')
    await expect(labels[5]?.tagName).toBe('H6')
  }
}
export const HeaderIcons: Story = {
  name: 'Иконки и подписи',
  render: () => ({
    components: { D1Header },
    setup() {
      const turned = ref(false)
      const toggleTurn = () => {
        turned.value = !turned.value
      }
      return { turned, toggleTurn }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button type="button" class="wiki-storybook-button" @click="toggleTurn">Toggle Icon Turn</button>
          </div>
          <div class="wiki-storybook-card">
            <D1Header
              icon="expand_more"
              :icon-turn="turned"
              label="Expandable Section"
              caption="12 items"
            />
          </div>
          <div class="wiki-storybook-card">
            <D1Header
              icon="info"
              label="Decorative Caption Example"
              caption="(optional)"
              caption-decorative
            />
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const components = canvasElement.querySelectorAll('.d1-header')
    await expect(components.length).toBe(2)

    const firstCaption = components[0]?.querySelector('.d1-header__caption')
    const secondCaption = components[1]?.querySelector('.d1-header__caption')
    await expect(firstCaption).toHaveAttribute('aria-live', 'polite')
    await expect(secondCaption).toHaveAttribute('aria-hidden', 'true')

    await step('Toggle icon turn state', async () => {
      await userEvent.click(canvas.getByRole('button', { name: 'Toggle Icon Turn' }))
      await waitFor(() => {
        const iconElement = components[0]?.querySelector('.d1-header__icon')
        expect(iconElement?.className).toContain('--turn')
      })
    })
  }
}
export const HeaderSlots: Story = {
  name: 'Слоты',
  render: () => ({
    components: { D1Header },
    template: `
        
        <div class="wiki-storybook-card">
          <D1Header>
            <template #default>Custom label slot</template>
            <template #caption>Custom caption slot</template>
            <template #trailing>
              <span data-testid="header-trailing-content">Trailing slot</span>
            </template>
          </D1Header>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const component = canvasElement.querySelector('.d1-header')
    await expect(component?.querySelector('.d1-header__label')).toHaveTextContent('Custom label slot')
    await expect(component?.querySelector('.d1-header__caption')).toHaveTextContent('Custom caption slot')
    await expect(component?.querySelector('.d1-header__space')).toBeInTheDocument()
    await expect(component?.querySelector('[data-testid="header-trailing-content"]')).toHaveTextContent('Trailing slot')
  }
}
export const HeaderTestPropsAndStates: Story = {
  name: 'Тест: Модификаторы иконки, labelId, числовой ноль и комбинированные состояния',
  render: () => ({
    components: { D1Header },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label">iconTurn + iconHide + iconDir + iconPalette + selected</div>
            <D1Header
              data-testid="header-coupled-icon"
              label="Coupled Icon Props"
              label-id="custom-header-label-id"
              :icon="{ icon: 'home', iconActive: 'star' }"
              selected
              icon-turn
              icon-hide
              icon-dir
              icon-palette
              :icon-attrs="{ 'data-custom-icon': 'verified' }"
            />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label">numeric 0 label + caption</div>
            <D1Header
              data-testid="header-numeric-zero"
              :label="0"
              :caption="0"
            />
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    await waitFor(() => {
      const coupled = canvasElement.querySelector('[data-testid="header-coupled-icon"]')
      const labelElement = coupled?.querySelector('#custom-header-label-id')
      expect(labelElement?.tagName).toBe('H3')
      expect(labelElement).toHaveTextContent('Coupled Icon Props')

      const iconElement = coupled?.querySelector('.d1-header__icon')
      expect(iconElement).toBeInTheDocument()
      expect(iconElement?.className).toContain('--turn')
      expect(iconElement?.className).toContain('--hide')
      expect(iconElement?.className).toContain('--dir')
      expect(iconElement?.className).toContain('--asPalette')
      expect(iconElement).toHaveAttribute('data-custom-icon', 'verified')

      const zeroHeader = canvasElement.querySelector('[data-testid="header-numeric-zero"]')
      expect(zeroHeader?.querySelector('.d1-header__label')).toHaveTextContent('0')
      expect(zeroHeader?.querySelector('.d1-header__caption')).toHaveTextContent('0')
    })
  }
}
export const HeaderTestAreaAndAttributes: Story = {
  name: 'Тест: Реактивный контекст area и слияние внешних атрибутов',
  render: () => ({
    components: { D1Header },
    setup() {
      const areaName = ref('header')
      const switchArea = (nextArea: string) => {
        areaName.value = nextArea
      }
      const AreaProbe = defineComponent({
        setup() {
          return () => h('span', { 'data-testid': 'header-area-probe' }, getAreaValue() ?? 'none')
        }
      })
      return { areaName, switchArea, AreaProbe }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button type="button" class="wiki-storybook-button" @click="switchArea('compact')">Set Compact Area</button>
          </div>
          <D1Header
            data-testid="header-area-host"
            class="custom-header-class"
            label="Area Host"
            :area="areaName"
          >
            <template #trailing>
              <component :is="AreaProbe"/>
            </template>
          </D1Header>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const host = canvasElement.querySelector('[data-testid="header-area-host"]')
    await expect(host).toHaveClass('d1-header')
    await expect(host).toHaveClass('custom-header-class')
    await expect(canvasElement.querySelector('[data-testid="header-area-probe"]')).toHaveTextContent('header')

    await step('Update area prop reactively', async () => {
      await userEvent.click(canvas.getByRole('button', { name: 'Set Compact Area' }))
      await expect(canvasElement.querySelector('[data-testid="header-area-probe"]')).toHaveTextContent('compact')
    })
  }
}
// :story-items [!] System label / Системная метка
