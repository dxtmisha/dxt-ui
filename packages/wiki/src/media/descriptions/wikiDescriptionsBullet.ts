import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Bullet component properties
 *
 * Описания свойств компонента Bullet
 */
export const wikiDescriptionsBullet: StorybookComponentsDescriptionItem = {
  name: 'Bullet',
  description: {
    en: 'Semantic <ul> container component for displaying structured bulleted lists from arrays, HTML, or slots',
    ru: 'Семантический компонент-контейнер <ul> для отображения структурированных маркированных списков из массивов, HTML или слотов'
  },
  possibilities: {
    en: [
      'renders semantic <ul> list items from a string or number array (list)',
      'forwards shared properties and attributes to child items (itemAttrs)',
      'renders sanitized HTML list markup with automatic <li> styling (html)',
      'supports zero-duplication skeleton loading (isSkeleton) and custom #default slot items'
    ],
    ru: [
      'рендерит семантический список <ul> из массива строк или чисел (list)',
      'передаёт общие свойства и атрибуты дочерним элементам (itemAttrs)',
      'рендерит санитизированную HTML-разметку списка с автостилизацией <li> (html)',
      'поддерживает скелетон загрузки без дублирования (isSkeleton) и слот по умолчанию (#default)'
    ]
  },
  import: [],
  render: `
    <DesignComponent v-bind="args"/>
  `,
  play: `
const component = canvasElement.querySelector('.design-component')
await expect(component).toBeInTheDocument()
await expect(component?.tagName).toBe('UL')
  `,
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES
    // =========================================================================
    {
      id: 'BulletHtml',
      name: {
        en: 'HTML Content',
        ru: 'Содержимое HTML'
      },
      propsName: ['html'],
      template: `
        <DesignComponent
          data-testid="bullet-html"
          html="<li>First parsed item with <strong>emphasis</strong></li><li class='custom-li'>Second parsed item</li>"
        />
      `,
      play: `
const list = canvasElement.querySelector('[data-testid="bullet-html"]')
const items = list?.querySelectorAll('li') ?? []
await expect(items.length).toBe(2)
await expect(items[0]).toHaveTextContent('First parsed item with emphasis')
await expect(items[1]?.classList.contains('custom-li')).toBe(true)
      `
    },
    {
      id: 'BulletSkeleton',
      name: {
        en: 'Skeleton',
        ru: 'Скелетон'
      },
      propsName: ['isSkeleton', 'list'],
      components: ['Skeleton'],
      template: `
        <DesignSkeleton :active="true">
          <DesignComponent
            data-testid="bullet-skeleton"
            isSkeleton
            :list="['Loading bullet item one', 'Loading bullet item two']"
          />
        </DesignSkeleton>
      `,
      play: `
const list = canvasElement.querySelector('[data-testid="bullet-skeleton"]')
const items = list?.querySelectorAll('li') ?? []
await expect(items.length).toBe(2)
      `
    },

    // =========================================================================
    // TIER 2: TEST STORIES (Constructor Props Only)
    // =========================================================================
    {
      id: 'BulletTestAttrsAndSlot',
      name: {
        en: 'Test: Numeric zero, itemAttrs forwarding & default slot',
        ru: 'Тест: Числовой ноль, проброс itemAttrs и слот default'
      },
      propsName: ['list', 'itemAttrs'],
      components: ['BulletItem'],
      template: `
        <DesignComponent
          data-testid="bullet-attrs-slot"
          :list="['Primary item', 0]"
          :item-attrs="{ 'data-shared': 'yes' }"
        >
          <DesignBulletItem data-testid="bullet-slot-child" description="Appended slot item" />
        </DesignComponent>
      `,
      play: `
const list = canvasElement.querySelector('[data-testid="bullet-attrs-slot"]')
const items = list?.querySelectorAll('li') ?? []
await expect(items.length).toBe(3)
await expect(items[0]?.getAttribute('data-shared')).toBe('yes')
await expect(items[1]).toHaveTextContent('0')
await expect(canvasElement.querySelector('[data-testid="bullet-slot-child"]')).toHaveTextContent('Appended slot item')
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Bullet'} type={'bullet'}/>

<StorybookDescriptions componentName={'Bullet'} type={'html'}/>
<Canvas of={Component.BulletHtml}/>

<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.BulletSkeleton}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
    `
  },
  ai: {
    render: `
<div :class="classDemo.item">
  <DesignComponent
    v-bind="args"
    :list="['Structured list item one', 'Structured list item two', 'Structured list item three']"
  />
</div>
    `,
    description: `
Semantic <ul> bullet list container component. Supports rendering items from a string or number array (list prop), forwarding shared item properties (itemAttrs), rendering sanitized HTML list strings with automatic <li> class injection (html prop), skeleton loading state (isSkeleton), or custom BulletItem children via default slot.
`
  }
}
