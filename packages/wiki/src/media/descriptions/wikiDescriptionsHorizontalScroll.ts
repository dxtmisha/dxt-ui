import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for HorizontalScroll component properties
 *
 * Описания свойств компонента HorizontalScroll
 */
export const wikiDescriptionsHorizontalScroll: StorybookComponentsDescriptionItem = {
  name: 'HorizontalScroll',
  description: {
    en: 'Component for creating a horizontally scrollable container. Supports smooth scrolling to the selected element.',
    ru: 'Компонент для создания горизонтально прокручиваемого контейнера. Поддерживает плавную прокрутку к выбранному элементу.'
  },
  possibilities: {
    en: [
      'horizontal scrolling of content',
      'automatic scrolling to the selected element on mount',
      'support for custom tags',
      'slot for content with binding data for items'
    ],
    ru: [
      'горизонтальная прокрутка контента',
      'автоматическая прокрутка к выбранному элементу при монтировании',
      'поддержка пользовательских тегов',
      'слот для контента с данными привязки для элементов'
    ]
  },
  import: [
    'import { ref } from \'vue\'',
    'import type { HorizontalScrollExpose } from \'@dxtmisha/constructor/HorizontalScroll\''
  ],
  render: `
    <DesignComponent v-bind="args">
      <template #default="{ classItem }">
        <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.94 0.06 25);">Item 1</div>
        <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.95 0.06 50);">Item 2</div>
        <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.96 0.07 70);">Item 3</div>
        <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.97 0.08 85);">Item 4</div>
        <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.96 0.08 110);">Item 5</div>
        <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.95 0.07 140);">Item 6</div>
        <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.95 0.06 160);">Item 7</div>
        <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.94 0.05 175);">Item 8</div>
      </template>
    </DesignComponent>
  `,
  play: `
const container = canvasElement.querySelector('.design-component')
await expect(container).toBeInTheDocument()
const items = canvasElement.querySelectorAll('.design-component__item')
await expect(items.length).toBe(8)
  `,
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES
    // =========================================================================
    {
      id: 'HorizontalScrollBasic',
      name: {
        en: 'Basic Usage',
        ru: 'Базовое использование'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent>
            <template #default="{ classItem }">
              <div class="wiki-storybook-flex-center" :class="classItem" style="height: 128px; background: oklch(0.93 0.08 305);">Item 1</div>
              <div class="wiki-storybook-flex-center" :class="classItem" style="height: 128px; background: oklch(0.93 0.08 325);">Item 2</div>
              <div class="wiki-storybook-flex-center" :class="classItem" style="height: 128px; background: oklch(0.93 0.08 345);">Item 3</div>
            </template>
          </DesignComponent>

          <DesignComponent>
            <template #default="{ classItem, classItemSelected }">
              <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.94 0.06 25);">Item 1</div>
              <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.95 0.06 50);">Item 2</div>
              <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.96 0.07 70);">Item 3</div>
              <div class="wiki-storybook-flex-center" :class="[classItem, classItemSelected]" style="width: 256px; height: 128px; background: oklch(0.97 0.08 85);">Item 4</div>
              <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.96 0.08 110);">Item 5</div>
              <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.95 0.07 140);">Item 6</div>
            </template>
          </DesignComponent>
        </div>
      `,
      play: `
const containers = canvasElement.querySelectorAll('.design-component')
await expect(containers.length).toBe(2)
const selectedItem = canvasElement.querySelector('.design-component__item--selected')
await expect(selectedItem).toBeInTheDocument()
await expect(selectedItem).toHaveTextContent('Item 4')
      `
    },

    // =========================================================================
    // TIER 2: TEST STORIES (Constructor Props Only — NEVER in documentation)
    // =========================================================================
    {
      id: 'HorizontalScrollTestTagsAndExpose',
      name: {
        en: 'Test: Tags, slot binds and expose API',
        ru: 'Тест: Теги, привязки слота и expose API'
      },
      propsName: ['tag'],
      setup: `
      const scrollReference = ref<HorizontalScrollExpose | null>(null)
      const elementTag = ref<string>('')

      const inspectScroll = (): void => {
        scrollReference.value?.toSelected()
        elementTag.value = scrollReference.value?.getElement()?.tagName ?? ''
      }

      return {
        scrollReference,
        elementTag,
        inspectScroll
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex wiki-storybook-flex-align-center">
            <button type="button" class="wiki-storybook-button" @click="inspectScroll">
              Inspect and Scroll
            </button>
            <span data-testid="hs-expose-tag">{{ elementTag }}</span>
          </div>

          <DesignComponent
            ref="scrollReference"
            tag="nav"
            aria-label="Test scroll navigation"
            data-testid="hs-test-nav"
          >
            <template #default="{ binds, classItemSelected }">
              <div v-bind="binds" style="min-width: 240px;">First</div>
              <div v-bind="binds" :class="classItemSelected" style="min-width: 240px;">Selected</div>
            </template>
          </DesignComponent>
        </div>
      `,
      play: `
const canvas = within(canvasElement)
const navElement = canvasElement.querySelector('[data-testid="hs-test-nav"]')
await expect(navElement?.tagName).toBe('NAV')
await expect(navElement).toHaveAttribute('aria-label', 'Test scroll navigation')
await expect(navElement?.querySelectorAll('.design-component__item').length).toBe(2)

await step('Call expose toSelected and getElement via button', async () => {
  await userEvent.click(canvas.getByRole('button', { name: 'Inspect and Scroll' }))
  await waitFor(() => {
    expect(canvas.getByTestId('hs-expose-tag')).toHaveTextContent('NAV')
  })
})
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'HorizontalScroll'} type={'horizontalScroll'}/>
<StorybookDescriptions componentName={'HorizontalScroll'} type={'selected'}/>
<Canvas of={Component.HorizontalScrollBasic}/>
    `,
    expose: `
<StorybookDescriptions componentName={'HorizontalScroll'} type={'expose.toSelected'}/>
    `
  },
  ai: {
    description: `
Container component that enables horizontal scrolling for large content sets like galleries, item lists, or tab bars. Ensures smooth navigation when the body exceeds the viewport width.
Features automated scroll-to-selected behavior on mount and exposes a programmatic method (toSelected) for navigation. Provides scoped slot bindings to ensure correct item styling and selection tracking.
Controlled via the tag prop for root element customization. Use for product carousels, category filters, or any horizontally-oriented navigation menus in space-constrained layouts.
    `,
    hide: true
  }
}
