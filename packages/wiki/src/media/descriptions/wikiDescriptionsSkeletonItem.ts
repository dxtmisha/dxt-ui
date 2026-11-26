import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for SkeletonItem component properties
 *
 * Описания свойств компонента SkeletonItem
 */
export const wikiDescriptionsSkeletonItem: StorybookComponentsDescriptionItem = {
  name: 'SkeletonItem',
  description: {
    en: 'An individual skeleton placeholder item element',
    ru: 'Отдельный элемент заглушки скелетона'
  },
  possibilities: {
    en: [
      'configurable text, background, and border placeholder tokens',
      'SSR-deterministic placeholder generation with configurable length or range',
      'support for static label (including numeric zero) or custom slot content',
      'flexible tag property supporting HTML tags and Vue components (object or functional)',
      'automatic aria-hidden for decorative generated placeholders and safe plain-text escaping'
    ],
    ru: [
      'настраиваемые токены заглушек для текста, фона и рамки',
      'детерминированная при SSR генерация текста с настраиваемой длиной или диапазоном',
      'поддержка статического текста (включая числовой 0) или пользовательского содержимого слота',
      'гибкое свойство tag с поддержкой HTML-тегов и Vue-компонентов (объектных и функциональных)',
      'автоматический aria-hidden для декоративных заглушек и безопасное экранирование текста'
    ]
  },
  render: `
    <DesignComponent v-bind="args"/>
  `,
  play: `
const item = canvasElement.querySelector('.design-component')
await expect(item).toBeInTheDocument()
  `,
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES
    // =========================================================================
    {
      id: 'SkeletonItemSkeleton',
      name: {
        en: 'Skeleton',
        ru: 'Скелетон'
      },
      components: ['Skeleton'],
      template: `
        <DesignSkeleton :active="true">
          <div class="wiki-storybook-flex-column">
            <DesignComponent label="Lorem ipsum dolor sit amet..." text/>
            <DesignComponent label="Lorem ipsum dolor sit amet..." textVariant/>
            <DesignComponent label="Lorem ipsum dolor sit amet..." background/>
            <DesignComponent label="Lorem ipsum dolor sit amet..." backgroundVariant/>
            <DesignComponent label="Lorem ipsum dolor sit amet..." border/>
            <DesignComponent label="Lorem ipsum dolor sit amet..." borderVariant/>
          </div>
        </DesignSkeleton>
      `,
      play: `
const items = canvasElement.querySelectorAll('.design-component')
await expect(items.length).toBe(6)
await expect(items[0]).toHaveTextContent('Lorem ipsum dolor sit amet...')
      `
    },

    // =========================================================================
    // TIER 2: TEST STORIES (Constructor props only)
    // =========================================================================
    {
      id: 'SkeletonItemTestPropsAndSecurity',
      name: {
        en: 'Test: Tag, length formats, zero label, itemAttrs, ARIA and XSS safety',
        ru: 'Тест: Теги, форматы length, метка 0, itemAttrs, ARIA и защита от XSS'
      },
      propsName: ['tag', 'label', 'length', 'itemAttrs', 'text', 'textVariant', 'background', 'backgroundVariant', 'border', 'borderVariant'],
      components: ['Skeleton'],
      template: `
        <DesignSkeleton :active="false">
          <div class="wiki-storybook-flex-column">
            <DesignComponent tag="h4" text :label="0" data-testid="skeleton-zero"/>
            <DesignComponent tag="span" textVariant :length="4" data-testid="skeleton-decorative"/>
            <DesignComponent tag="p" text :length="[2, 5]" aria-label="Loading summary" data-testid="skeleton-aria"/>
            <DesignComponent text length="Custom length string" :itemAttrs="{ 'data-custom': 'yes' }" data-testid="skeleton-attrs"/>
            <DesignComponent text label="<img src=x onerror=alert(1)>" data-testid="skeleton-xss"/>
            <DesignComponent background data-testid="skeleton-slot"><span>Custom Slot</span></DesignComponent>
          </div>
        </DesignSkeleton>
      `,
      play: `
const canvas = within(canvasElement)

const zeroItem = canvas.getByTestId('skeleton-zero')
await expect(zeroItem.tagName).toBe('H4')
await expect(zeroItem).toHaveTextContent('0')
await expect(zeroItem).not.toHaveAttribute('aria-hidden')

const decorativeItem = canvas.getByTestId('skeleton-decorative')
await expect(decorativeItem.tagName).toBe('SPAN')
await expect(decorativeItem).toHaveAttribute('aria-hidden', 'true')

const ariaItem = canvas.getByTestId('skeleton-aria')
await expect(ariaItem).toHaveAttribute('aria-label', 'Loading summary')
await expect(ariaItem).not.toHaveAttribute('aria-hidden')

const attrsItem = canvas.getByTestId('skeleton-attrs')
await expect(attrsItem).toHaveAttribute('data-custom', 'yes')
await expect(attrsItem).toHaveTextContent('Custom length string')

const xssItem = canvas.getByTestId('skeleton-xss')
await expect(xssItem.querySelector('img')).toBeNull()
await expect(xssItem).toHaveTextContent('<img src=x onerror=alert(1)>')

const slotItem = canvas.getByTestId('skeleton-slot')
await expect(slotItem).toHaveTextContent('Custom Slot')
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'SkeletonItem'} type={'skeletonItem'}/>
<Canvas of={Component.SkeletonItemSkeleton}/>
<StorybookDescriptions componentName={'SkeletonItem'} type={'text'}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
    `
  },
  ai: {
    render: `
<div :class="classDemo.item">
  <Skeleton :active="true">
    <SkeletonItem v-bind="args" text/>
  </Skeleton>
</div>
    `,
    description: `
An individual skeleton item component for generating custom-shaped loading placeholders, text lines, backgrounds, and borders within a Skeleton component.
Supports automatic SSR-deterministic placeholder generation based on the length prop (number or [min, max] range), static label text, or custom slot content.
Controlled via boolean style token props (text, textVariant, background, backgroundVariant, border, borderVariant) and the tag prop. Use inside a Skeleton container to assemble custom loading layouts.
    `
  }
}
