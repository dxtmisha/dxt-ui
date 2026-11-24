import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Block component properties
 *
 * Описания свойств компонента Block
 */
export const wikiDescriptionsBlock: StorybookComponentsDescriptionItem = {
  name: 'Block',
  description: {
    en: 'A versatile structural container with support for headlines, headers, icons, captions, descriptions, and semantic ARIA linking',
    ru: 'Универсальный структурный контейнер с поддержкой надзаголовков, шапок, иконок, подписей, описаний и семантических ARIA-связей'
  },
  possibilities: {
    en: [
      'displaying headline, header label, caption, and description',
      'integrated leading icon support via embedded Header',
      'customizable root HTML tag and heading tag level (tagHeader)',
      'automatic aria-labelledby and aria-describedby synchronization',
      'cascading reactive area context propagation'
    ],
    ru: [
      'отображение надзаголовка, метки шапки, подписи и описания',
      'встроенная поддержка ведущей иконки через Header',
      'настраиваемый корневой HTML-тег и уровень заголовка (tagHeader)',
      'автоматическая синхронизация aria-labelledby и aria-describedby',
      'каскадная реактивная передача контекста area'
    ]
  },
  import: [
    'import { defineComponent, h, ref } from \'vue\'',
    'import { getAreaValue } from \'@dxtmisha/constructor\''
  ],
  render: `
      <DesignComponent v-bind="args">
        <p>
          The Block component serves as a fundamental building unit for constructing structured user interfaces.
        </p>
      </DesignComponent>
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
      id: 'BlockBasic',
      name: {
        en: 'Basic anatomy',
        ru: 'Базовая структура'
      },
      propsName: ['headline', 'label', 'caption', 'description', 'icon'],
      template: `
        <DesignComponent
          headline="Account Settings"
          label="Profile Information"
          caption="Updated"
          description="Manage your personal details and public profile presence."
          icon="person"
        >
          <p>Welcome to your profile overview. Here you can update your name, bio, and contact information.</p>
        </DesignComponent>
      `,
      play: `
const component = canvasElement.querySelector('.design-component')
await expect(component).toBeInTheDocument()
await expect(component?.querySelector('.design-component__headline')).toHaveTextContent('Account Settings')
await expect(component?.querySelector('.design-component__description')).toHaveTextContent('Manage your personal details')
await expect(component).toHaveAttribute('aria-labelledby')
await expect(component).toHaveAttribute('aria-describedby')
      `
    },
    {
      id: 'BlockSlots',
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
            <span data-testid="block-trailing-slot">Trailing slot</span>
          </template>
        </DesignComponent>
      `,
      play: `
const component = canvasElement.querySelector('.design-component')
await expect(component?.querySelector('.design-component__headline')).toHaveTextContent('Headline slot')
await expect(component?.querySelector('.design-component__description')).toHaveTextContent('Description slot')
await expect(component?.querySelector('[data-testid="block-trailing-slot"]')).toHaveTextContent('Trailing slot')
await expect(component).toHaveTextContent('Label slot')
await expect(component).toHaveTextContent('Caption slot')
await expect(component).toHaveTextContent('Default slot')
      `
    },

    // =========================================================================
    // TIER 2: TEST STORIES (Constructor Props Only)
    // =========================================================================
    {
      id: 'BlockTestSemanticsAndHeaderProps',
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
            </DesignComponent>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label">body-only + numeric 0</div>
            <DesignComponent data-testid="block-minimal" class="wiki-custom-block">
              <span>Only default content</span>
            </DesignComponent>
            <DesignComponent
              data-testid="block-zero"
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
  const semantic = canvasElement.querySelector('[data-testid="block-semantic"]')
  expect(semantic?.tagName).toBe('SECTION')
  expect(semantic).toHaveAttribute('aria-labelledby', 'wiki-block-lbl-id')
  expect(semantic).toHaveAttribute('aria-describedby', 'wiki-block-desc-id')
  expect(semantic?.querySelector('#wiki-block-lbl-id')?.tagName).toBe('H2')
  expect(semantic?.querySelector('#wiki-block-desc-id')).toHaveTextContent('Explicit description ID')
  expect(semantic?.querySelector('.design-component__header')).toHaveClass('wiki-custom-block-header')
  expect(semantic?.querySelector('[data-blk-icon="ok"]')).toBeInTheDocument()

  const minimal = canvasElement.querySelector('[data-testid="block-minimal"]')
  expect(minimal).toHaveClass('wiki-custom-block')
  expect(minimal?.querySelector('.design-component__body')).toBeNull()
  expect(minimal).not.toHaveAttribute('aria-labelledby')

  const zeroBlock = canvasElement.querySelector('[data-testid="block-zero"]')
  expect(zeroBlock?.querySelector('.design-component__headline')).toHaveTextContent('0')
  expect(zeroBlock?.querySelector('.design-component__description')).toHaveTextContent('0')
})
      `
    },
    {
      id: 'BlockTestAreaContext',
      name: {
        en: 'Test: Cascading area context between Block body and embedded Header',
        ru: 'Тест: Каскадный контекст area между телом Block и встроенным Header'
      },
      propsName: ['area'],
      setup: `
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
await expect(canvasElement.querySelector('[data-testid="probe-body"]')).toHaveTextContent('block')

await step('Switch block area to compact', async () => {
  await userEvent.click(canvas.getByRole('button', { name: 'Switch Area' }))
  await expect(canvasElement.querySelector('[data-testid="probe-trailing"]')).toHaveTextContent('header')
  await expect(canvasElement.querySelector('[data-testid="probe-body"]')).toHaveTextContent('compact')
})
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Block'} type={'block'}/>
<Canvas of={Component.BlockBasic}/>

<StorybookDescriptions componentName={'Block'} type={'differences'}/>
`,
    slots: `
<Canvas of={Component.BlockSlots}/>
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
    Main content goes here.
  </DesignComponent>
</div>
    `,
    description: `
Versatile structural container for organizing content with a standardized layout. Automatically arranges headlines, icons, labels, captions, descriptions, and body content within a unified block element.
Features support for semantic HTML tags (e.g., section, article), automatic aria-labelledby/aria-describedby wiring, and cascading area context.
    `
  }
}
