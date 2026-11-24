import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Breadcrumbs component
 *
 * Описания свойств компонента Breadcrumbs
 */
export const wikiDescriptionsBreadcrumbs: StorybookComponentsDescriptionItem = {
  name: 'Breadcrumbs',
  description: {
    en: 'Hierarchical navigation trail component rendering a semantic <nav> landmark of BreadcrumbItem steps',
    ru: 'Иерархический компонент навигационной цепочки, рендерящий семантический ориентир <nav> из шагов BreadcrumbItem'
  },
  possibilities: {
    en: [
      'automatic trail rendering from a declarative list array',
      'shared item customization via itemAttrs',
      'last item automatically configured as readonly (aria-current="page")',
      'localized landmark aria-label via textBreadcrumb',
      'click and clickLite event propagation and skeleton loading state'
    ],
    ru: [
      'автоматический рендеринг цепочки из декларативного массива list',
      'общая настройка дочерних элементов через itemAttrs',
      'автоматическое назначение последнего элемента текущей страницей (readonly с aria-current="page")',
      'локализованный aria-label ориентира через textBreadcrumb',
      'проброс событий click и clickLite и состояние загрузки скелетона'
    ]
  },
  import: [
    'import { ref } from \'vue\''
  ],
  render: `
      <DesignComponent v-bind="args"/>
    `,
  play: `
const component = canvasElement.querySelector('.design-component')
await expect(component).toBeInTheDocument()
await expect(component?.tagName).toBe('NAV')
  `,
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES
    // =========================================================================
    {
      id: 'BreadcrumbsBasic',
      name: {
        en: 'Basic navigation trail',
        ru: 'Базовая навигационная цепочка'
      },
      propsName: ['list', 'textBreadcrumb'],
      template: `
        <DesignComponent
          data-testid="breadcrumbs-basic"
          text-breadcrumb="Documentation Trail"
          :list="[
            { label: 'Home', icon: 'home', href: '#home' },
            { label: 'Components', href: '#components' },
            { label: 'Breadcrumbs' }
          ]"
        />
      `,
      play: `
const nav = canvasElement.querySelector('[data-testid="breadcrumbs-basic"]')
await expect(nav?.tagName).toBe('NAV')
await expect(nav).toHaveAttribute('aria-label', 'Documentation Trail')
const items = nav?.querySelectorAll('.design-component__item') ?? []
await expect(items.length).toBe(3)
await expect(items[0]?.tagName).toBe('A')
await expect(items[2]?.tagName).toBe('SPAN')
await expect(items[2]).toHaveAttribute('aria-current', 'page')
      `
    },
    {
      id: 'BreadcrumbsSkeleton',
      name: {
        en: 'Skeleton',
        ru: 'Скелетон'
      },
      propsName: ['isSkeleton', 'list'],
      components: ['Skeleton'],
      template: `
        <DesignSkeleton :active="true">
          <DesignComponent
            data-testid="breadcrumbs-skeleton"
            isSkeleton
            :list="[
              { label: 'Home', icon: 'home' },
              { label: 'Components' },
              { label: 'Breadcrumbs' }
            ]"
          />
        </DesignSkeleton>
      `,
      play: `
const nav = canvasElement.querySelector('[data-testid="breadcrumbs-skeleton"]')
await expect(nav).toBeInTheDocument()
await expect(nav?.querySelectorAll('.design-component__item').length).toBe(3)
      `
    },

    // =========================================================================
    // TIER 2: TEST STORIES (Constructor Props Only)
    // =========================================================================
    {
      id: 'BreadcrumbsTestItemAttrsAndEvents',
      name: {
        en: 'Test: itemAttrs, clickable tail override, disabled, numeric zero & click events',
        ru: 'Тест: itemAttrs, интерактивный последний шаг, disabled, числовой ноль и события клика'
      },
      propsName: ['list', 'itemAttrs', 'textBreadcrumb'],
      setup: `
      const lastClicked = ref('')
      const onTrailClick = (payload: { value?: unknown }) => {
        lastClicked.value = String(payload.value ?? '')
      }
      return { lastClicked, onTrailClick }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            data-testid="breadcrumbs-test"
            :item-attrs="{ iconArrowRight: 'arrow_forward' }"
            :list="[
              { label: 'Root', value: 'root-step' },
              { label: 'Disabled', value: 'disabled-step', disabled: true },
              { label: 0, value: 0 }
            ]"
            @click-lite="onTrailClick"
          />
          <DesignComponent
            data-testid="breadcrumbs-back"
            :list="[{ label: 'Back to Catalog', href: '#catalog', back: true, readonly: false }]"
          />
          <div data-testid="breadcrumbs-test-clicked">{{ lastClicked }}</div>
        </div>
      `,
      play: `
const nav = canvasElement.querySelector('[data-testid="breadcrumbs-test"]')
const items = nav?.querySelectorAll('.design-component__item') ?? []
await expect(items.length).toBe(3)
await expect(items[1]).toHaveAttribute('aria-disabled', 'true')
await expect(items[2]?.tagName).toBe('SPAN')
await expect(items[2]).toHaveAttribute('aria-current', 'page')
await expect(items[2]).toHaveTextContent('0')

const backItem = canvasElement.querySelector('[data-testid="breadcrumbs-back"] .design-component__item')
await expect(backItem?.tagName).toBe('A')

await step('Click interactive first item and verify clickLite payload', async () => {
  const firstItem = items[0]
  if (firstItem) {
    await userEvent.click(firstItem)
  }
  await expect(canvasElement.querySelector('[data-testid="breadcrumbs-test-clicked"]')).toHaveTextContent('root-step')
})
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Breadcrumbs'} type={'breadcrumbs'}/>
<Canvas of={Component.BreadcrumbsBasic}/>
<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.BreadcrumbsSkeleton}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'click'}/>
    `
  },
  ai: {
    render: `
<div :class="classDemo.item">
  <DesignComponent
    v-bind="args"
    :list="args.list ?? [
      { label: 'Home', icon: 'home', href: '#' },
      { label: 'Catalog', href: '#catalog' },
      { label: 'Current Page' }
    ]"
  />
</div>
    `,
    description: `
Hierarchical navigation trail component rendering a semantic <nav> landmark. Automatically renders BreadcrumbItem steps from the list prop, applies shared itemAttrs, marks the final item with aria-current="page", and forwards click events.
    `
  }
}
