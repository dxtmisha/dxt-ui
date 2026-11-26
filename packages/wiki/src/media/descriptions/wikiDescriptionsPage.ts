import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Page component properties
 *
 * Описания свойств компонента Page
 */
export const wikiDescriptionsPage: StorybookComponentsDescriptionItem = {
  name: 'Page',
  description: {
    en: 'A top-level semantic container component representing the main content of a document. It uses the <main> tag and <h1> header by default, inheriting Block capabilities.',
    ru: 'Семантический компонент-контейнер верхнего уровня, представляющий основное содержимое документа. По умолчанию использует тег <main> и заголовок <h1>, наследуя возможности Block.'
  },
  possibilities: {
    en: [
      'semantic wrapper for main content using <main> tag by default',
      'support for primary titles (<h1> by default via tagHeader), headlines, labels, descriptions, and captions',
      'integrated leading icon support via embedded Header',
      'automatic aria-labelledby and aria-describedby synchronization',
      'cascading reactive area context propagation (\'page\' by default)',
      'fully inherits Block component capabilities and slots'
    ],
    ru: [
      'семантическая обёртка для основного контента с тегом <main> по умолчанию',
      'поддержка главных заголовков (<h1> по умолчанию через tagHeader), надзаголовков, меток, описаний и подписей',
      'встроенная поддержка ведущей иконки через Header',
      'автоматическая синхронизация aria-labelledby и aria-describedby',
      'каскадная реактивная передача контекста area (\'page\' по умолчанию)',
      'полностью наследует возможности и слоты компонента Block'
    ]
  },
  import: [
    'import { defineComponent, h, ref } from \'vue\'',
    'import { getAreaValue } from \'@dxtmisha/constructor\''
  ],
  render: `
      <DesignComponent v-bind="args">
        <p>
          The Page component is designed to wrap the unique content of a document.
          It defaults to using the <code>&lt;main&gt;</code> HTML tag, ensuring that the primary content is correctly identified by assistive technologies and search engines.
        </p>
        <p>
          It provides a comprehensive set of features for page-level content presentation, including headlines, labels, descriptions, and icons.
          The default tag for the header label is set to <code>&lt;h1&gt;</code>, establishing the top-level heading for the page.
        </p>
        <p>
          Use Page to encapsulate the core content of your view, separating it from repeated elements like navigation bars or footers.
        </p>
      </DesignComponent>
    `,
  play: `
const component = canvasElement.querySelector('.design-component')
await expect(component).toBeInTheDocument()
await expect(component?.tagName).toBe('MAIN')
  `,
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES
    // =========================================================================
    {
      id: 'PageBasic',
      name: {
        en: 'Basic anatomy',
        ru: 'Базовая структура'
      },
      propsName: ['headline', 'label', 'caption', 'description', 'icon'],
      template: `
        <DesignComponent
          headline="User Dashboard"
          label="Overview"
          caption="Updated"
          icon="dashboard"
          description="View your account analytics and recent activity."
        >
          <p>Welcome to your dashboard. Here you can find a summary of your performance and manage your account settings.</p>
        </DesignComponent>
      `,
      play: `
const component = canvasElement.querySelector('.design-component')
await expect(component).toBeInTheDocument()
await expect(component?.tagName).toBe('MAIN')
await expect(component?.querySelector('.design-component__headline')).toHaveTextContent('User Dashboard')
await expect(component?.querySelector('.design-component__description')).toHaveTextContent('View your account analytics')
const headingElement = component?.querySelector('h1')
await expect(headingElement).toHaveTextContent('Overview')
await expect(component).toHaveAttribute('aria-labelledby', headingElement?.id ?? '')
await expect(component).toHaveAttribute('aria-describedby')
      `
    },
    {
      id: 'PageSlots',
      name: {
        en: 'Slots usage',
        ru: 'Использование слотов'
      },
      template: `
        <DesignComponent>
          <template #default>Default slot</template>
          <template #headline>Headline slot</template>
          <template #label>Label slot</template>
          <template #description>Description slot</template>
          <template #caption>Caption slot</template>
          <template #trailing>
            <span data-testid="page-trailing-slot">Trailing slot</span>
          </template>
        </DesignComponent>
      `,
      play: `
const component = canvasElement.querySelector('.design-component')
await expect(component).toBeInTheDocument()
await expect(component?.querySelector('.design-component__headline')).toHaveTextContent('Headline slot')
await expect(component?.querySelector('.design-component__description')).toHaveTextContent('Description slot')
await expect(component?.querySelector('[data-testid="page-trailing-slot"]')).toHaveTextContent('Trailing slot')
await expect(component).toHaveTextContent('Label slot')
await expect(component).toHaveTextContent('Caption slot')
await expect(component).toHaveTextContent('Default slot')
      `
    },

    // =========================================================================
    // TIER 2: TEST STORIES (Constructor Props Only)
    // =========================================================================
    {
      id: 'PageTestSemanticsAndHeaderProps',
      name: {
        en: 'Test: Semantic tags, header/icon props, explicit ARIA IDs and numeric zero',
        ru: 'Тест: Семантические теги, свойства шапки/иконки, явные ARIA ID и числовой ноль'
      },
      propsName: [
        'tag',
        'tagHeader',
        'headline',
        'label',
        'labelId',
        'caption',
        'captionDecorative',
        'description',
        'descriptionId',
        'icon',
        'iconTurn',
        'iconHide',
        'iconDir',
        'iconPalette',
        'iconAttrs',
        'selected',
        'headerAttrs'
      ],
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label">section + h2 + explicit ARIA IDs + headerAttrs</div>
            <DesignComponent
              data-testid="page-semantic"
              tag="section"
              tag-header="h2"
              headline="SECTION"
              label="Explicit IDs"
              label-id="wiki-page-label-id"
              caption="(decorative)"
              caption-decorative
              description="Explicit description ID"
              description-id="wiki-page-description-id"
              :icon="{ icon: 'folder', iconActive: 'star' }"
              selected
              icon-turn
              icon-hide
              icon-dir
              icon-palette
              :icon-attrs="{ 'data-page-icon': 'ok' }"
              :header-attrs="{ class: 'wiki-custom-page-header' }"
            >
              <span>Body text</span>
            </DesignComponent>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label">body-only + numeric 0</div>
            <DesignComponent data-testid="page-minimal" class="wiki-custom-page">
              <span>Only default content</span>
            </DesignComponent>
            <DesignComponent
              data-testid="page-zero"
              :headline="0"
              :label="0"
              :caption="0"
              :description="0"
            />
          </div>
        </div>
      `,
      play: `
await waitFor(() => {
  const semanticPage = canvasElement.querySelector('[data-testid="page-semantic"]')
  expect(semanticPage?.tagName).toBe('SECTION')
  expect(semanticPage).toHaveAttribute('aria-labelledby', 'wiki-page-label-id')
  expect(semanticPage).toHaveAttribute('aria-describedby', 'wiki-page-description-id')
  expect(semanticPage?.querySelector('#wiki-page-label-id')?.tagName).toBe('H2')
  expect(semanticPage?.querySelector('#wiki-page-description-id')).toHaveTextContent('Explicit description ID')
  expect(semanticPage?.querySelector('[data-event-type="caption"]')).toHaveAttribute('aria-hidden', 'true')
  expect(semanticPage?.querySelector('.design-component__header')).toHaveClass('wiki-custom-page-header')
  expect(semanticPage?.querySelector('[data-page-icon="ok"]')).toBeInTheDocument()

  const minimalPage = canvasElement.querySelector('[data-testid="page-minimal"]')
  expect(minimalPage?.tagName).toBe('MAIN')
  expect(minimalPage).toHaveClass('wiki-custom-page')
  expect(minimalPage?.querySelector('.design-component__body')).toBeNull()
  expect(minimalPage).not.toHaveAttribute('aria-labelledby')
  expect(minimalPage).not.toHaveAttribute('aria-describedby')

  const zeroPage = canvasElement.querySelector('[data-testid="page-zero"]')
  expect(zeroPage?.querySelector('.design-component__headline')).toHaveTextContent('0')
  expect(zeroPage?.querySelector('h1')).toHaveTextContent('0')
  expect(zeroPage?.querySelector('[data-event-type="caption"]')).toHaveTextContent('0')
  expect(zeroPage?.querySelector('[data-event-type="caption"]')).toHaveAttribute('aria-live', 'polite')
  expect(zeroPage?.querySelector('.design-component__description')).toHaveTextContent('0')
})
      `
    },
    {
      id: 'PageTestAreaContext',
      name: {
        en: 'Test: Cascading area context between Page body and embedded Header',
        ru: 'Тест: Каскадный контекст area между телом Page и встроенным Header'
      },
      propsName: ['area'],
      setup: `
      const areaMode = ref('page')
      const setCompact = (): void => {
        areaMode.value = 'compact'
      }
      const AreaProbe = defineComponent({
        props: {
          probeId: {
            type: String,
            required: true
          }
        },
        setup(probeProps: { probeId: string }) {
          return () => h('span', { 'data-testid': probeProps.probeId }, getAreaValue() ?? 'none')
        }
      })
      return { areaMode, setCompact, AreaProbe }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button type="button" class="wiki-storybook-button" @click="setCompact">Switch Area</button>
          </div>
          <DesignComponent label="Cascading Area" :area="areaMode">
            <template #trailing>
              <component :is="AreaProbe" probe-id="probe-trailing"/>
            </template>
            <component :is="AreaProbe" probe-id="probe-body"/>
          </DesignComponent>
        </div>
      `,
      play: `
const canvas = within(canvasElement)
await expect(canvasElement.querySelector('[data-testid="probe-trailing"]')).toHaveTextContent('header')
await expect(canvasElement.querySelector('[data-testid="probe-body"]')).toHaveTextContent('page')

await step('Switch page area to compact', async () => {
  await userEvent.click(canvas.getByRole('button', { name: 'Switch Area' }))
  await expect(canvasElement.querySelector('[data-testid="probe-trailing"]')).toHaveTextContent('header')
  await expect(canvasElement.querySelector('[data-testid="probe-body"]')).toHaveTextContent('compact')
})
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Page'} type={'page'}/>
<Canvas of={Component.PageBasic}/>

<StorybookDescriptions componentName={'Block'} type={'differences'}/>
`,
    slots: `
<Canvas of={Component.PageSlots}/>
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
<StorybookDescriptions componentName={'Slot'} type={'headline'}/>
<StorybookDescriptions componentName={'Slot'} type={'label'}/>
<StorybookDescriptions componentName={'Slot'} type={'description'}/>
<StorybookDescriptions componentName={'Slot'} type={'caption'}/>
<StorybookDescriptions componentName={'Slot'} type={'trailing'}/>
`,
    expose: `
<StorybookDescriptions componentName={'Expose'} type={'labelId'}/>
<StorybookDescriptions componentName={'Expose'} type={'descriptionId'}/>
`
  },
  ai: {
    render: `
<div :class="classDemo.item">
  <DesignComponent v-bind="args">
    Main page content.
  </DesignComponent>
</div>
    `,
    description: `
Top-level structural container designed to wrap the primary content of a view or document. Serves as a semantic root (defaulting to <main>) and establishes the primary document heading hierarchy (defaulting to <h1> via tagHeader).
Features a comprehensive header structure inherited from the Block component, including support for headlines, labels, captions, icons, descriptions, and trailing action areas, with automatic aria-labelledby/aria-describedby wiring and cascading area context ('page' by default).
Controlled via headline, label, caption, description, and icon props, with dedicated slots for content and actions (#default, #headline, #label, #description, #caption, #trailing).
    `
  }
}
