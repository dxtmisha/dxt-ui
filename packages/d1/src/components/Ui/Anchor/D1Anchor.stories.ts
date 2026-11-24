import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Anchor from './D1Anchor.vue'
import { AnchorWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { ref } from 'vue'
import type { AnchorExpose } from '@dxtmisha/constructor/Anchor'
import { expect, within, userEvent } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Anchor',
  component: D1Anchor,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: AnchorWikiStorybook.getDescription()
      }
    }
  },
  argTypes: AnchorWikiStorybook.getWiki(),
  args: AnchorWikiStorybook.getValues()
} satisfies Meta<typeof D1Anchor>

export default meta

type Story = StoryObj<typeof meta>

export const Anchor: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1Anchor },
    setup: () => ({ args }),
    template: `
      <D1Anchor v-bind="args"/>
    `
  }),
  play: async ({ canvasElement }) => {
    const anchor = canvasElement.querySelector('a')
    await expect(anchor).toBeInTheDocument()
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const AnchorBasic: Story = {
  name: 'Базовая навигация и слоты',
  render: () => ({
    components: { D1Anchor },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1Anchor
            name="wiki-basic"
            label="Basic Anchor"
            :shift="64"
            behavior="smooth"
          />
          <D1Anchor
            name="wiki-object-icon"
            label="Object Icon Anchor"
            :icon-link="{ icon: 'link', turn: true }"
          />
          <D1Anchor name="wiki-slot">
            Default Slot Anchor
          </D1Anchor>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const links = canvasElement.querySelectorAll('.d1-anchor')
    await expect(links.length).toBe(3)
    await expect(links[0]).toHaveAttribute('href', '#wiki-basic')
    await expect(links[0]).toHaveAttribute('aria-current', 'page')
    await expect(links[2]).toHaveTextContent('Default Slot Anchor')
  }
}
export const AnchorCopy: Story = {
  name: 'Режим копирования в буфер обмена',
  render: () => ({
    components: { D1Anchor },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1Anchor
            name="wiki-copy"
            label="Copy Permalink"
            is-copy
            :delay-hide="600"
            text-copied-clipboard="Copied!"
          />
          <D1Anchor
            name="wiki-copy-slot"
            label="Custom Tooltip Slot"
            is-copy
            tooltip-label="Saved"
          >
            <template #tooltip>
              <span>Permalink ready</span>
            </template>
          </D1Anchor>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const links = canvasElement.querySelectorAll('.d1-anchor')
    await expect(links.length).toBe(2)
    await expect(links[0]).toHaveAttribute('role', 'button')
    await expect(links[0]).not.toHaveAttribute('href')
    await expect(links[0]).toHaveAttribute('tabindex', '0')
  }
}
export const AnchorHideAndExpose: Story = {
  name: 'Скрытый якорь и программный вызов go()',
  render: () => ({
    components: { D1Anchor },
    setup() {
      const targetAnchor = ref<AnchorExpose | null>(null)
      const navigated = ref(false)
      const onGo = () => {
        targetAnchor.value?.go()
        navigated.value = true
      }
      return { targetAnchor, navigated, onGo }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex wiki-storybook-flex-align-center">
            <button type="button" class="wiki-storybook-button" @click="onGo">
              Go to Hidden Anchor
            </button>
            <span data-testid="anchor-go-status">navigated:{{ navigated }}</span>
          </div>
          <D1Anchor
            ref="targetAnchor"
            name="wiki-hidden-target"
            hide
            :shift="32"
          />
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const hiddenAnchor = canvasElement.querySelector('a[name="wiki-hidden-target"]')
    await expect(hiddenAnchor).toBeInTheDocument()
    await expect(hiddenAnchor).toHaveAttribute('aria-hidden', 'true')

    const goButton = canvas.getByRole('button', { name: 'Go to Hidden Anchor' })
    await userEvent.click(goButton)
    await expect(canvas.getByTestId('anchor-go-status')).toHaveTextContent('navigated:true')
  }
}
export const AnchorTestPropsAndAria: Story = {
  name: 'Тест: Свойства, числовой 0, отсутствие name, параметры скролла и ARIA',
  render: () => ({
    components: { D1Anchor },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div data-testid="anchor-zero">
            <D1Anchor
              name="test-zero"
              :label="0"
              label-id="test-anchor-zero-id"
              shift="16"
              behavior="auto"
              block="center"
              inline="nearest"
            />
          </div>
          <div data-testid="anchor-copy-icon-only">
            <D1Anchor
              name="test-copy-only"
              is-copy
              icon-tag="tag"
              icon-content-copy="content_copy"
              :delay-hide="400"
              text-copied-clipboard="Copied link"
              tooltip-label="Link"
              tooltip-description="Copied to clipboard"
              :tooltip-attrs="{ arrowShow: true }"
            />
          </div>
          <div data-testid="anchor-implicit-hide">
            <D1Anchor name="test-implicit-hide"/>
          </div>
          <div data-testid="anchor-no-name">
            <D1Anchor label="Should not render"/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const zeroLink = canvasElement.querySelector('[data-testid="anchor-zero"] a')
    await expect(zeroLink).toHaveAttribute('href', '#test-zero')
    await expect(zeroLink).toHaveAttribute('aria-current', 'page')
    await expect(zeroLink).toHaveTextContent('0')
    await expect(canvasElement.querySelector('#test-anchor-zero-id')).toBeInTheDocument()

    const copyOnlyLink = canvasElement.querySelector('[data-testid="anchor-copy-icon-only"] a')
    await expect(copyOnlyLink).toHaveAttribute('role', 'button')
    await expect(copyOnlyLink).not.toHaveAttribute('href')

    const implicitHideLink = canvasElement.querySelector('[data-testid="anchor-implicit-hide"] a')
    await expect(implicitHideLink).toHaveAttribute('aria-hidden', 'true')
    await expect(implicitHideLink).toHaveAttribute('name', 'test-implicit-hide')

    const noNameLink = canvasElement.querySelector('[data-testid="anchor-no-name"] a')
    await expect(noNameLink).toBeNull()
  }
}
// :story-items [!] System label / Системная метка
