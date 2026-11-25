import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Group component properties
 *
 * Описания свойств компонента Group
 */
export const wikiDescriptionsGroup: StorybookComponentsDescriptionItem = {
  name: 'Group',
  description: {
    en: 'A structural component designed to group related content with support for headers, descriptions, and flexible layout options. It uses the <div> tag and <h4> header by default.',
    ru: 'Структурный компонент, предназначенный для группировки связанного контента с поддержкой заголовков, описаний и гибких настроек макета. По умолчанию использует тег <div> и заголовок <h4>.'
  },
  possibilities: {
    en: [
      'standardized grouping of content using <div> tag',
      'support for titles (h4 by default), labels, descriptions, and captions',
      'support for icons',
      'automatic aria-labelledby and aria-describedby synchronization',
      'cascading reactive area context propagation (\'group\' by default)',
      'fully inherits Block component capabilities'
    ],
    ru: [
      'стандартизированная группировка контента с использованием тега <div>',
      'поддержка заголовков (h4 по умолчанию), меток, описаний и подписей',
      'поддержка иконок',
      'автоматическая синхронизация aria-labelledby и aria-describedby',
      'каскадная реактивная передача контекста area (\'group\' по умолчанию)',
      'полностью наследует возможности компонента Block'
    ]
  },
  import: [
    'import { defineComponent, h, ref } from \'vue\'',
    'import { getAreaValue } from \'@dxtmisha/constructor\''
  ],
  render: `
      <DesignComponent v-bind="args">
        <p>
          The Group component serves as a container for grouping thematic content within a page or another component.
          It defaults to using the <code>&lt;div&gt;</code> HTML tag and <code>&lt;h4&gt;</code> for headlines.
        </p>
        <p>
          It inherits all the features of the Block component, providing a consistent way to handle headers, descriptions, and icons.
        </p>
      </DesignComponent>
    `,
  play: `
const component = canvasElement.querySelector('.design-component')
await expect(component).toBeInTheDocument()
await expect(component?.tagName).toBe('DIV')
  `,
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES
    // =========================================================================
    {
      id: 'GroupBasic',
      name: {
        en: 'Basic anatomy',
        ru: 'Базовая структура'
      },
      propsName: ['headline', 'label', 'caption', 'description', 'icon'],
      template: `
        <DesignComponent
          headline="Notifications"
          label="Settings"
          caption="Updated"
          icon="notifications"
          description="Configure how you receive notifications and manage your alert settings for a better user experience."
        >
          <p>
            Control how and when you receive updates from the system. You can choose to be notified about
            important account activities, new features, and marketing updates.
          </p>
          <p>
            Tailor your preferences to stay informed without being overwhelmed by unnecessary messages.
            Changes are saved automatically and applied within a few minutes.
          </p>
        </DesignComponent>
      `,
      play: `
const component = canvasElement.querySelector('.design-component')
await expect(component).toBeInTheDocument()
await expect(component?.tagName).toBe('DIV')
await expect(component?.querySelector('.design-component__headline')).toHaveTextContent('Notifications')
await expect(component?.querySelector('.design-component__description')).toHaveTextContent('Configure how you receive notifications')
const headingElement = component?.querySelector('h4')
await expect(headingElement).toHaveTextContent('Settings')
await expect(component).toHaveAttribute('aria-labelledby', headingElement?.id ?? '')
await expect(component).toHaveAttribute('aria-describedby')
      `
    },
    {
      id: 'GroupSlots',
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
            <span data-testid="group-trailing-slot">Trailing slot</span>
          </template>
        </DesignComponent>
      `,
      play: `
const component = canvasElement.querySelector('.design-component')
await expect(component).toBeInTheDocument()
await expect(component?.querySelector('.design-component__headline')).toHaveTextContent('Headline slot')
await expect(component?.querySelector('.design-component__description')).toHaveTextContent('Description slot')
await expect(component?.querySelector('[data-testid="group-trailing-slot"]')).toHaveTextContent('Trailing slot')
await expect(component).toHaveTextContent('Label slot')
await expect(component).toHaveTextContent('Caption slot')
await expect(component).toHaveTextContent('Default slot')
      `
    },

    // =========================================================================
    // TIER 2: TEST STORIES (Constructor Props Only)
    // =========================================================================
    {
      id: 'GroupTestSemanticsAndHeaderProps',
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
              data-testid="group-semantic"
              tag="section"
              tag-header="h2"
              headline="SECTION"
              label="Explicit IDs"
              label-id="wiki-group-label-id"
              caption="(decorative)"
              caption-decorative
              description="Explicit description ID"
              description-id="wiki-group-description-id"
              :icon="{ icon: 'folder', iconActive: 'star' }"
              selected
              icon-turn
              icon-hide
              icon-dir
              icon-palette
              :icon-attrs="{ 'data-group-icon': 'ok' }"
              :header-attrs="{ class: 'wiki-custom-group-header' }"
            >
              <span>Body text</span>
            </DesignComponent>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label">body-only + numeric 0</div>
            <DesignComponent data-testid="group-minimal" class="wiki-custom-group">
              <span>Only default content</span>
            </DesignComponent>
            <DesignComponent
              data-testid="group-zero"
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
  const semantic = canvasElement.querySelector('[data-testid="group-semantic"]')
  expect(semantic?.tagName).toBe('SECTION')
  expect(semantic).toHaveAttribute('aria-labelledby', 'wiki-group-label-id')
  expect(semantic).toHaveAttribute('aria-describedby', 'wiki-group-description-id')
  expect(semantic?.querySelector('#wiki-group-label-id')?.tagName).toBe('H2')
  expect(semantic?.querySelector('#wiki-group-description-id')).toHaveTextContent('Explicit description ID')
  expect(semantic?.querySelector('.design-component__header')).toHaveClass('wiki-custom-group-header')
  expect(semantic?.querySelector('[data-group-icon="ok"]')).toBeInTheDocument()

  const minimal = canvasElement.querySelector('[data-testid="group-minimal"]')
  expect(minimal?.tagName).toBe('DIV')
  expect(minimal).toHaveClass('wiki-custom-group')
  expect(minimal?.querySelector('.design-component__body')).toBeNull()
  expect(minimal).not.toHaveAttribute('aria-labelledby')
  expect(minimal).not.toHaveAttribute('aria-describedby')

  const zeroGroup = canvasElement.querySelector('[data-testid="group-zero"]')
  expect(zeroGroup?.querySelector('.design-component__headline')).toHaveTextContent('0')
  expect(zeroGroup?.querySelector('h4')).toHaveTextContent('0')
  expect(zeroGroup?.querySelector('.design-component__description')).toHaveTextContent('0')
})
      `
    },
    {
      id: 'GroupTestAreaContext',
      name: {
        en: 'Test: Cascading area context between Group body and embedded Header',
        ru: 'Тест: Каскадный контекст area между телом Group и встроенным Header'
      },
      propsName: ['area'],
      setup: `
      const areaMode = ref('group')
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
await expect(canvasElement.querySelector('[data-testid="probe-body"]')).toHaveTextContent('group')

await step('Switch group area to compact', async () => {
  await userEvent.click(canvas.getByRole('button', { name: 'Switch Area' }))
  await expect(canvasElement.querySelector('[data-testid="probe-trailing"]')).toHaveTextContent('header')
  await expect(canvasElement.querySelector('[data-testid="probe-body"]')).toHaveTextContent('compact')
})
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Group'} type={'group'}/>
<Canvas of={Component.GroupBasic}/>

<StorybookDescriptions componentName={'Block'} type={'differences'}/>
`,
    slots: `
<Canvas of={Component.GroupSlots}/>
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
    Content of the group.
  </DesignComponent>
</div>
    `,
    description: `
Structural component for organizing related content with a standardized header hierarchy. Acts as a semantic wrapper for subsections or grouping elements within a larger section or card.
Features support for headlines (h4 by default), labels, icons, and descriptions. Inherits all capabilities of the Block component, providing a consistent layout for titles and body content.
Controlled via headline, label, and description props. Use for grouping settings, categorizing information, or breaking down complex forms into logical, titled segments.
    `
  }
}
