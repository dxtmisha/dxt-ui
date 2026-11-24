import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Container from './D1Container.vue'
import { ContainerWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import D1Area from '../Area/D1Area.vue'
import { ref } from 'vue'
import { expect, within, userEvent } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Container',
  component: D1Container,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: ContainerWikiStorybook.getDescription()
      }
    }
  },
  argTypes: ContainerWikiStorybook.getWiki(),
  args: ContainerWikiStorybook.getValues()
} satisfies Meta<typeof D1Container>

export default meta

type Story = StoryObj<typeof meta>

export const Container: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1Container },
    setup: () => ({ args }),
    template: `
      <D1Container v-bind="args">
      <p>
        Container helps keep content readable by limiting line length and controlling side spacing.
      </p>
      <p>
        Use it as a base layout wrapper for page sections, forms, and content blocks.
      </p>
    </D1Container>
    `
  }),
  play: async ({ canvasElement }) => {
    const containerElement = canvasElement.querySelector<HTMLElement>('.d1-container')
    await expect(containerElement).toBeInTheDocument()
    await expect(containerElement).toHaveTextContent('Container helps keep content readable')
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const ContainerAlignment: Story = {
  name: 'Горизонтальное выравнивание (left, center, right)',
  render: () => ({
    components: { D1Container },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">align="left"</div>
            <D1Container align="left" data-testid="container-align-left">
              Left aligned container content
            </D1Container>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">align="center"</div>
            <D1Container align="center" data-testid="container-align-center">
              Center aligned container content
            </D1Container>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">align="right"</div>
            <D1Container align="right" data-testid="container-align-right">
              Right aligned container content
            </D1Container>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const leftElement = canvasElement.querySelector<HTMLElement>('[data-testid="container-align-left"]')
    const centerElement = canvasElement.querySelector<HTMLElement>('[data-testid="container-align-center"]')
    const rightElement = canvasElement.querySelector<HTMLElement>('[data-testid="container-align-right"]')

    await expect(leftElement).toHaveClass('d1-container--align--left')
    await expect(centerElement).toHaveClass('d1-container--align--center')
    await expect(rightElement).toHaveClass('d1-container--align--right')
  }
}
export const ContainerAreaContext: Story = {
  name: 'Передача контекста области (area)',
  render: () => ({
    components: { D1Container, D1Area },
    setup() {
      const activeArea = ref<string>('container')
      const setArea = (areaName: string) => {
        activeArea.value = areaName
      }
      return {
        activeArea,
        setArea
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <button type="button" class="wiki-storybook-button" @click="setArea('container')">container</button>
            <button type="button" class="wiki-storybook-button" @click="setArea('header')">header</button>
            <button type="button" class="wiki-storybook-button" @click="setArea('sidebar')">sidebar</button>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <D1Container :area="activeArea" data-testid="container-area-host">
              <D1Area>
                <template #container>
                  <span data-testid="area-output">Active area slot: container</span>
                </template>
                <template #header>
                  <span data-testid="area-output">Active area slot: header</span>
                </template>
                <template #sidebar>
                  <span data-testid="area-output">Active area slot: sidebar</span>
                </template>
              </D1Area>
            </D1Container>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    await expect(canvasElement.querySelector('[data-testid="area-output"]')).toHaveTextContent('Active area slot: container')

    await step('Switch area to header', async () => {
      await userEvent.click(canvas.getByRole('button', { name: 'header' }))
      await expect(canvasElement.querySelector('[data-testid="area-output"]')).toHaveTextContent('Active area slot: header')
    })

    await step('Switch area to sidebar', async () => {
      await userEvent.click(canvas.getByRole('button', { name: 'sidebar' }))
      await expect(canvasElement.querySelector('[data-testid="area-output"]')).toHaveTextContent('Active area slot: sidebar')
    })
  }
}
export const ContainerTestAttrsAndExpose: Story = {
  name: 'Тест: Сквозные атрибуты, вложенные контейнеры и expose elementHtml',
  render: () => ({
    components: { D1Container, D1Area },
    setup() {
      const containerReference = ref<{ elementHtml?: HTMLElement } | null>(null)
      const tagReport = ref<string>('uninspected')

      const inspectHost = () => {
        const hostElement = containerReference.value?.elementHtml
        tagReport.value = hostElement ? hostElement.tagName.toLowerCase() : 'undefined'
      }

      return {
        containerReference,
        tagReport,
        inspectHost
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1Container
            ref="containerReference"
            area="outer"
            align="left"
            class="custom-container-class"
            style="--custom-container-marker: 1;"
            aria-label="Primary Container"
            data-testid="container-outer"
          >
            <D1Area>
              <template #outer>
                <span data-testid="outer-area-value">outer</span>
              </template>
            </D1Area>
            <D1Container area="inner" align="right" data-testid="container-inner">
              <D1Area>
                <template #inner>
                  <span data-testid="inner-area-value">inner</span>
                </template>
              </D1Area>
            </D1Container>
          </D1Container>
          <div class="wiki-storybook-flex-align-center">
            <button type="button" class="wiki-storybook-button" @click="inspectHost">Inspect Host</button>
            <span data-testid="container-tag-report">{{ tagReport }}</span>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const outerElement = canvasElement.querySelector<HTMLElement>('[data-testid="container-outer"]')
    const innerElement = canvasElement.querySelector<HTMLElement>('[data-testid="container-inner"]')

    await expect(outerElement).toHaveClass('d1-container')
    await expect(outerElement).toHaveClass('d1-container--align--left')
    await expect(outerElement).toHaveClass('custom-container-class')
    await expect(outerElement).toHaveAttribute('aria-label', 'Primary Container')
    expect(outerElement?.style.getPropertyValue('--custom-container-marker').trim()).toBe('1')

    await expect(innerElement).toHaveClass('d1-container--align--right')
    await expect(canvasElement.querySelector('[data-testid="outer-area-value"]')).toHaveTextContent('outer')
    await expect(canvasElement.querySelector('[data-testid="inner-area-value"]')).toHaveTextContent('inner')

    await step('Inspect expose().elementHtml', async () => {
      await userEvent.click(canvas.getByRole('button', { name: 'Inspect Host' }))
      await expect(canvasElement.querySelector('[data-testid="container-tag-report"]')).toHaveTextContent('div')
    })
  }
}
// :story-items [!] System label / Системная метка
