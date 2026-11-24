import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Container component properties
 *
 * Описания свойств компонента Container
 */
export const wikiDescriptionsContainer: StorybookComponentsDescriptionItem = {
  name: 'Container',
  description: {
    en: 'A lightweight layout container for centering and constraining content width with configurable horizontal alignment and area context propagation.',
    ru: 'Легковесный компонент-контейнер для центрирования и ограничения ширины контента с настраиваемым горизонтальным выравниванием и передачей контекста области.'
  },
  possibilities: {
    en: [
      'horizontal alignment with align: left | center | right',
      'configurable width and horizontal margins via design tokens',
      'default slot for wrapping arbitrary content',
      'area context propagation through the area prop',
      'direct DOM element access via expose().elementHtml'
    ],
    ru: [
      'горизонтальное выравнивание через align: left | center | right',
      'настройка ширины и горизонтальных отступов через дизайн-токены',
      'слот default для оборачивания произвольного контента',
      'передача контекста области через свойство area',
      'прямой доступ к корневому DOM-элементу через expose().elementHtml'
    ]
  },
  import: [
    'import { ref } from \'vue\''
  ],
  render: `
    <DesignComponent v-bind="args">
      <p>
        Container helps keep content readable by limiting line length and controlling side spacing.
      </p>
      <p>
        Use it as a base layout wrapper for page sections, forms, and content blocks.
      </p>
    </DesignComponent>
  `,
  play: `
const containerElement = canvasElement.querySelector<HTMLElement>('.design-component')
await expect(containerElement).toBeInTheDocument()
await expect(containerElement).toHaveTextContent('Container helps keep content readable')
  `,
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES (User-Facing)
    // =========================================================================
    {
      id: 'ContainerAlignment',
      name: {
        en: 'Horizontal alignment (left, center, right)',
        ru: 'Горизонтальное выравнивание (left, center, right)'
      },
      propsName: ['align'],
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">align="left"</div>
            <DesignComponent align="left" data-testid="container-align-left">
              Left aligned container content
            </DesignComponent>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">align="center"</div>
            <DesignComponent align="center" data-testid="container-align-center">
              Center aligned container content
            </DesignComponent>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">align="right"</div>
            <DesignComponent align="right" data-testid="container-align-right">
              Right aligned container content
            </DesignComponent>
          </div>
        </div>
      `,
      play: `
const leftElement = canvasElement.querySelector<HTMLElement>('[data-testid="container-align-left"]')
const centerElement = canvasElement.querySelector<HTMLElement>('[data-testid="container-align-center"]')
const rightElement = canvasElement.querySelector<HTMLElement>('[data-testid="container-align-right"]')

await expect(leftElement).toHaveClass('design-component--align--left')
await expect(centerElement).toHaveClass('design-component--align--center')
await expect(rightElement).toHaveClass('design-component--align--right')
      `
    },
    {
      id: 'ContainerAreaContext',
      name: {
        en: 'Area context propagation',
        ru: 'Передача контекста области (area)'
      },
      components: ['Area'],
      propsName: ['area'],
      setup: `
      const activeArea = ref<string>('container')
      const setArea = (areaName: string) => {
        activeArea.value = areaName
      }
      return {
        activeArea,
        setArea
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <button type="button" class="wiki-storybook-button" @click="setArea('container')">container</button>
            <button type="button" class="wiki-storybook-button" @click="setArea('header')">header</button>
            <button type="button" class="wiki-storybook-button" @click="setArea('sidebar')">sidebar</button>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <DesignComponent :area="activeArea" data-testid="container-area-host">
              <DesignArea>
                <template #container>
                  <span data-testid="area-output">Active area slot: container</span>
                </template>
                <template #header>
                  <span data-testid="area-output">Active area slot: header</span>
                </template>
                <template #sidebar>
                  <span data-testid="area-output">Active area slot: sidebar</span>
                </template>
              </DesignArea>
            </DesignComponent>
          </div>
        </div>
      `,
      play: `
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
      `
    },

    // =========================================================================
    // TIER 2: TEST STORIES (Constructor-level QA only — NEVER in documentation)
    // =========================================================================
    {
      id: 'ContainerTestAttrsAndExpose',
      name: {
        en: 'Test: Fallthrough attributes, nested containers and expose elementHtml',
        ru: 'Тест: Сквозные атрибуты, вложенные контейнеры и expose elementHtml'
      },
      components: ['Area'],
      propsName: ['align', 'area'],
      setup: `
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
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            ref="containerReference"
            area="outer"
            align="left"
            class="custom-container-class"
            style="--custom-container-marker: 1;"
            aria-label="Primary Container"
            data-testid="container-outer"
          >
            <DesignArea>
              <template #outer>
                <span data-testid="outer-area-value">outer</span>
              </template>
            </DesignArea>
            <DesignComponent area="inner" align="right" data-testid="container-inner">
              <DesignArea>
                <template #inner>
                  <span data-testid="inner-area-value">inner</span>
                </template>
              </DesignArea>
            </DesignComponent>
          </DesignComponent>
          <div class="wiki-storybook-flex-align-center">
            <button type="button" class="wiki-storybook-button" @click="inspectHost">Inspect Host</button>
            <span data-testid="container-tag-report">{{ tagReport }}</span>
          </div>
        </div>
      `,
      play: `
const canvas = within(canvasElement)
const outerElement = canvasElement.querySelector<HTMLElement>('[data-testid="container-outer"]')
const innerElement = canvasElement.querySelector<HTMLElement>('[data-testid="container-inner"]')

await expect(outerElement).toHaveClass('design-component')
await expect(outerElement).toHaveClass('design-component--align--left')
await expect(outerElement).toHaveClass('custom-container-class')
await expect(outerElement).toHaveAttribute('aria-label', 'Primary Container')
expect(outerElement?.style.getPropertyValue('--custom-container-marker').trim()).toBe('1')

await expect(innerElement).toHaveClass('design-component--align--right')
await expect(canvasElement.querySelector('[data-testid="outer-area-value"]')).toHaveTextContent('outer')
await expect(canvasElement.querySelector('[data-testid="inner-area-value"]')).toHaveTextContent('inner')

await step('Inspect expose().elementHtml', async () => {
  await userEvent.click(canvas.getByRole('button', { name: 'Inspect Host' }))
  await expect(canvasElement.querySelector('[data-testid="container-tag-report"]')).toHaveTextContent('div')
})
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Container'} type={'container'}/>
<Canvas of={Component.ContainerAlignment}/>
<Canvas of={Component.ContainerAreaContext}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
    `
  },
  ai: {
    render: `
<div :class="classDemo.item">
  <DesignComponent v-bind="args">
    Main content goes here.
  </DesignComponent>
</div>
    `,
    description: `
Layout wrapper used to constrain content width and manage horizontal spacing in a predictable way.
Supports alignment options (left, center, right), width tokens, area context propagation, and side margins so page content keeps consistent rhythm across breakpoints.
Use as a foundational container around sections, forms, and text-heavy blocks to improve readability and layout consistency.
    `
  }
}
