import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for BreadcrumbItem component
 *
 * Описания свойств компонента BreadcrumbItem
 */
export const wikiDescriptionsBreadcrumbItem: StorybookComponentsDescriptionItem = {
  name: 'BreadcrumbItem',
  description: {
    en: 'Individual navigation step element in a breadcrumbs trail with automatic link/current-page semantics',
    ru: 'Отдельный шаг навигации в цепочке хлебных крошек с автоматической семантикой ссылки и текущей страницы'
  },
  possibilities: {
    en: [
      'text label, default slot, and leading icon support',
      'disabled and readonly (aria-current="page") states',
      'directional back navigation mode with customizable separator icons',
      'native href, router link (to), and click/keyboard event payloads',
      'skeleton loading state for label and leading icon'
    ],
    ru: [
      'поддержка текстовой метки, слота по умолчанию и ведущей иконки',
      'состояния блокировки (disabled) и текущей страницы (readonly с aria-current="page")',
      'режим обратной навигации (back) с настраиваемыми иконками стрелки',
      'поддержка нативного href, маршрутов роутера (to) и событий клика/клавиатуры',
      'состояние загрузки скелетона для метки и ведущей иконки'
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
  `,
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES
    // =========================================================================
    {
      id: 'BreadcrumbItemBasic',
      name: {
        en: 'Trail states (link, disabled, readonly & back)',
        ru: 'Состояния шага (ссылка, блокировка, текущая страница и возврат)'
      },
      propsName: ['label', 'icon', 'href', 'disabled', 'readonly', 'back'],
      template: `
        <div class="wiki-storybook-flex">
          <DesignComponent data-testid="crumb-basic-link" label="Home" icon="home" href="#home" />
          <DesignComponent data-testid="crumb-basic-disabled" label="Archived" disabled />
          <DesignComponent data-testid="crumb-basic-readonly" label="Current Page" readonly />
          <DesignComponent data-testid="crumb-basic-back" label="Back to Parent" back href="#parent" />
        </div>
      `,
      play: `
const link = canvasElement.querySelector('[data-testid="crumb-basic-link"]')
const disabled = canvasElement.querySelector('[data-testid="crumb-basic-disabled"]')
const readonlyItem = canvasElement.querySelector('[data-testid="crumb-basic-readonly"]')
const backItem = canvasElement.querySelector('[data-testid="crumb-basic-back"]')

await expect(link?.tagName).toBe('A')
await expect(link).toHaveAttribute('href', '#home')
await expect(disabled).toHaveAttribute('aria-disabled', 'true')
await expect(readonlyItem?.tagName).toBe('SPAN')
await expect(readonlyItem).toHaveAttribute('aria-current', 'page')
await expect(readonlyItem?.querySelector('.design-component__iconArrow')).toBeNull()
await expect(backItem).toHaveClass('design-component--back')
      `
    },
    {
      id: 'BreadcrumbItemSkeleton',
      name: {
        en: 'Skeleton',
        ru: 'Скелетон'
      },
      propsName: ['isSkeleton', 'icon', 'label'],
      components: ['Skeleton'],
      template: `
        <DesignSkeleton :active="true">
          <DesignComponent data-testid="crumb-skeleton" isSkeleton icon="home" label="Breadcrumb item" />
        </DesignSkeleton>
      `,
      play: `
const item = canvasElement.querySelector('[data-testid="crumb-skeleton"]')
await expect(item).toBeInTheDocument()
await expect(item?.querySelector('.design-component__label')).toBeInTheDocument()
      `
    },

    // =========================================================================
    // TIER 2: TEST STORIES (Constructor Props Only)
    // =========================================================================
    {
      id: 'BreadcrumbItemTestPropsAndEvents',
      name: {
        en: 'Test: Custom arrows, labelId, slot, numeric zero, events & expose',
        ru: 'Тест: Пользовательские стрелки, labelId, слот, числовой ноль, события и expose'
      },
      propsName: [
        'label',
        'labelId',
        'icon',
        'iconArrowLeft',
        'iconArrowRight',
        'back',
        'value',
        'detail',
        'index',
        'to'
      ],
      setup: `
      const clicks = ref(0)
      const lastValue = ref('')
      const exposedValue = ref('')
      const itemRef = ref<{ getValue?: () => unknown } | null>(null)
      const onAction = (_event: MouseEvent, payload: { value?: unknown }) => {
        clicks.value += 1
        lastValue.value = String(payload.value)
        exposedValue.value = String(itemRef.value?.getValue?.() ?? '')
      }
      return { clicks, lastValue, exposedValue, itemRef, onAction }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <DesignComponent
              ref="itemRef"
              data-testid="crumb-test-action"
              label="Catalog"
              label-id="wiki-crumb-lbl-id"
              icon="folder"
              icon-arrow-right="arrow_forward"
              icon-arrow-left="arrow_back"
              value="catalog-val"
              :detail="{ depth: 1 }"
              :index="1"
              @click="onAction"
            />
            <DesignComponent
              data-testid="crumb-test-slot"
              :to="{ path: '/docs' }"
              icon-arrow-right="arrow_forward"
            >
              <span>Slot Crumb</span>
            </DesignComponent>
            <DesignComponent
              data-testid="crumb-test-zero"
              :label="0"
              :value="0"
              readonly
            />
          </div>
          <div data-testid="crumb-test-state">{{ clicks }}|{{ lastValue }}|{{ exposedValue }}</div>
        </div>
      `,
      play: `
const action = canvasElement.querySelector('[data-testid="crumb-test-action"]')
await expect(action).toHaveAttribute('role', 'link')
await expect(action).toHaveAttribute('tabindex', '0')
await expect(action).toHaveAttribute('data-value', 'catalog-val')
await expect(action?.querySelector('#wiki-crumb-lbl-id')).toHaveTextContent('Catalog')
await expect(action?.querySelector('.design-component__iconArrow')).toHaveAttribute('aria-hidden', 'true')

await expect(canvasElement.querySelector('[data-testid="crumb-test-slot"]')).toHaveTextContent('Slot Crumb')
await expect(canvasElement.querySelector('[data-testid="crumb-test-zero"]')).toHaveTextContent('0')

await step('Click interactive breadcrumb item and verify payload + expose', async () => {
  if (action) {
    await userEvent.click(action)
  }
  await expect(canvasElement.querySelector('[data-testid="crumb-test-state"]')).toHaveTextContent('1|catalog-val|catalog-val')
})
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'BreadcrumbItem'} type={'breadcrumbItem'}/>
<Canvas of={Component.BreadcrumbItemBasic}/>
<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.BreadcrumbItemSkeleton}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'click'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Expose'} type={'getValue'}/>
<StorybookDescriptions componentName={'Expose'} type={'getDetail'}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
    `
  },
  ai: {
    description: `
Individual navigation step component inside breadcrumbs hierarchy. Automatically renders an interactive <a> element or a static <span aria-current="page"> when readonly, supporting text labels, leading icons, directional separator arrows, router navigation, skeleton loading, and click emissions.
    `,
    hide: true
  }
}
