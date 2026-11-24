import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Block from './D1Block.vue'
import { BlockWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { defineComponent, h, ref } from 'vue'
import { getAreaValue } from '@dxtmisha/constructor'
import { expect, within, userEvent, waitFor } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Block',
  component: D1Block,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: BlockWikiStorybook.getDescription()
      }
    }
  },
  argTypes: BlockWikiStorybook.getWiki(),
  args: BlockWikiStorybook.getValues()
} satisfies Meta<typeof D1Block>

export default meta

type Story = StoryObj<typeof meta>

export const Block: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1Block },
    setup: () => ({ args }),
    template: `
      <D1Block v-bind="args">
        <p>
          The Block component serves as a fundamental building unit for constructing structured user interfaces.
        </p>
      </D1Block>
    `
  }),
  play: async ({ canvasElement }) => {
    const component = canvasElement.querySelector('.d1-block')
    await expect(component).toBeInTheDocument()
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const BlockBasic: Story = {
  name: 'Базовая структура',
  render: () => ({
    components: { D1Block },
    template: `
        
        <D1Block
          headline="Account Settings"
          label="Profile Information"
          caption="Updated"
          description="Manage your personal details and public profile presence."
          icon="person"
        >
          <p>Welcome to your profile overview. Here you can update your name, bio, and contact information.</p>
        </D1Block>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const component = canvasElement.querySelector('.d1-block')
    await expect(component).toBeInTheDocument()
    await expect(component?.querySelector('.d1-block__headline')).toHaveTextContent('Account Settings')
    await expect(component?.querySelector('.d1-block__description')).toHaveTextContent('Manage your personal details')
    await expect(component).toHaveAttribute('aria-labelledby')
    await expect(component).toHaveAttribute('aria-describedby')
  }
}
export const BlockSlots: Story = {
  name: 'Использование слотов',
  render: () => ({
    components: { D1Block },
    template: `
        
        <D1Block>
          <template #default>Default slot</template>
          <template #headline>Headline slot</template>
          <template #label>Label slot</template>
          <template #description>Description slot</template>
          <template #caption>Caption slot</template>
          <template #trailing>
            <span data-testid="block-trailing-slot">Trailing slot</span>
          </template>
        </D1Block>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const component = canvasElement.querySelector('.d1-block')
    await expect(component?.querySelector('.d1-block__headline')).toHaveTextContent('Headline slot')
    await expect(component?.querySelector('.d1-block__description')).toHaveTextContent('Description slot')
    await expect(component?.querySelector('[data-testid="block-trailing-slot"]')).toHaveTextContent('Trailing slot')
    await expect(component).toHaveTextContent('Label slot')
    await expect(component).toHaveTextContent('Caption slot')
    await expect(component).toHaveTextContent('Default slot')
  }
}
export const BlockTestSemanticsAndHeaderProps: Story = {
  name: 'Тест: Семантические теги, свойства шапки/иконки, явные ARIA ID и числовой ноль',
  render: () => ({
    components: { D1Block },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label">section + h2 + explicit ARIA IDs + headerAttrs</div>
            <D1Block
              data-testid="block-semantic"
              tag="section"
              tag-header="h2"
              headline="SECTION"
              label="Explicit IDs"
              label-id="wiki-block-lbl-id"
              caption="(decorative)"
              caption-decorative
              description="Explicit description ID"
              description-id="wiki-block-desc-id"
              :icon="{ icon: 'folder', iconActive: 'star' }"
              selected
              icon-turn
              icon-hide
              icon-dir
              icon-palette
              :icon-attrs="{ 'data-blk-icon': 'ok' }"
              :header-attrs="{ class: 'wiki-custom-block-header' }"
            >
              <span>Body text</span>
            </D1Block>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label">body-only + numeric 0</div>
            <D1Block data-testid="block-minimal" class="wiki-custom-block">
              <span>Only default content</span>
            </D1Block>
            <D1Block
              data-testid="block-zero"
              :headline="0"
              :label="0"
              :caption="0"
              :description="0"
            />
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    await waitFor(() => {
      const semantic = canvasElement.querySelector('[data-testid="block-semantic"]')
      expect(semantic?.tagName).toBe('SECTION')
      expect(semantic).toHaveAttribute('aria-labelledby', 'wiki-block-lbl-id')
      expect(semantic).toHaveAttribute('aria-describedby', 'wiki-block-desc-id')
      expect(semantic?.querySelector('#wiki-block-lbl-id')?.tagName).toBe('H2')
      expect(semantic?.querySelector('#wiki-block-desc-id')).toHaveTextContent('Explicit description ID')
      expect(semantic?.querySelector('.d1-block__header')).toHaveClass('wiki-custom-block-header')
      expect(semantic?.querySelector('[data-blk-icon="ok"]')).toBeInTheDocument()

      const minimal = canvasElement.querySelector('[data-testid="block-minimal"]')
      expect(minimal).toHaveClass('wiki-custom-block')
      expect(minimal?.querySelector('.d1-block__body')).toBeNull()
      expect(minimal).not.toHaveAttribute('aria-labelledby')

      const zeroBlock = canvasElement.querySelector('[data-testid="block-zero"]')
      expect(zeroBlock?.querySelector('.d1-block__headline')).toHaveTextContent('0')
      expect(zeroBlock?.querySelector('.d1-block__description')).toHaveTextContent('0')
    })
  }
}
export const BlockTestAreaContext: Story = {
  name: 'Тест: Каскадный контекст area между телом Block и встроенным Header',
  render: () => ({
    components: { D1Block },
    setup() {
      const areaMode = ref('block')
      const setCompact = () => {
        areaMode.value = 'compact'
      }
      const AreaProbe = defineComponent({
        props: {
          probeId: {
            type: String,
            required: true
          }
        },
        setup(props) {
          return () => h('span', { 'data-testid': props.probeId }, getAreaValue() ?? 'none')
        }
      })
      return { areaMode, setCompact, AreaProbe }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button type="button" class="wiki-storybook-button" @click="setCompact">Switch Area</button>
          </div>
          <D1Block label="Cascading Area" :area="areaMode">
            <template #trailing>
              <component :is="AreaProbe" probe-id="probe-trailing"/>
            </template>
            <component :is="AreaProbe" probe-id="probe-body"/>
          </D1Block>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    await expect(canvasElement.querySelector('[data-testid="probe-trailing"]')).toHaveTextContent('header')
    await expect(canvasElement.querySelector('[data-testid="probe-body"]')).toHaveTextContent('block')

    await step('Switch block area to compact', async () => {
      await userEvent.click(canvas.getByRole('button', { name: 'Switch Area' }))
      await expect(canvasElement.querySelector('[data-testid="probe-trailing"]')).toHaveTextContent('header')
      await expect(canvasElement.querySelector('[data-testid="probe-body"]')).toHaveTextContent('compact')
    })
  }
}
// :story-items [!] System label / Системная метка
