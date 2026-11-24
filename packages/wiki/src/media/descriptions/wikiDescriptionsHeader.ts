import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Header component properties
 *
 * Описания свойств компонента Header
 */
export const wikiDescriptionsHeader: StorybookComponentsDescriptionItem = {
  name: 'Header',
  description: {
    en: 'Component for displaying semantic section headers with icons, captions, and trailing content',
    ru: 'Компонент для отображения семантических заголовков разделов с иконками, подписями и правым контентом'
  },
  possibilities: {
    en: [
      'support for semantic heading tags (h1-h6)',
      'built-in support for icons and accessible captions',
      'customizable trailing content via slots with automatic spacer',
      'automatic reactive area value propagation',
      'standardized typography and spacing'
    ],
    ru: [
      'поддержка семантических HTML-тегов заголовков (h1-h6)',
      'встроенная поддержка иконок и доступных подписей',
      'настраиваемый правый контент через слоты с автоматическим разделителем',
      'автоматическая реактивная передача значения области',
      'стандартизированная типографика и отступы'
    ]
  },
  import: [
    'import { defineComponent, h, ref } from \'vue\'',
    'import { getAreaValue } from \'@dxtmisha/constructor\''
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
      id: 'HeaderBasic',
      name: {
        en: 'Heading levels (h1 - h6)',
        ru: 'Уровни заголовков (h1 - h6)'
      },
      propsName: ['label', 'caption', 'tag'],
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent label="Header Level 1" caption="h1" tag="h1"/>
          <DesignComponent label="Header Level 2" caption="h2" tag="h2"/>
          <DesignComponent label="Header Level 3" caption="h3" tag="h3"/>
          <DesignComponent label="Header Level 4" caption="h4" tag="h4"/>
          <DesignComponent label="Header Level 5" caption="h5" tag="h5"/>
          <DesignComponent label="Header Level 6" caption="h6" tag="h6"/>
        </div>
      `,
      play: `
const labels = canvasElement.querySelectorAll('.design-component__label')
await expect(labels.length).toBe(6)
await expect(labels[0]?.tagName).toBe('H1')
await expect(labels[1]?.tagName).toBe('H2')
await expect(labels[2]?.tagName).toBe('H3')
await expect(labels[3]?.tagName).toBe('H4')
await expect(labels[4]?.tagName).toBe('H5')
await expect(labels[5]?.tagName).toBe('H6')
      `
    },
    {
      id: 'HeaderIcons',
      name: {
        en: 'Icons and captions',
        ru: 'Иконки и подписи'
      },
      propsName: ['icon', 'iconTurn', 'caption', 'captionDecorative'],
      setup: `
      const turned = ref(false)
      const toggleTurn = () => {
        turned.value = !turned.value
      }
      return { turned, toggleTurn }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button type="button" class="wiki-storybook-button" @click="toggleTurn">Toggle Icon Turn</button>
          </div>
          <div class="wiki-storybook-card">
            <DesignComponent
              icon="expand_more"
              :icon-turn="turned"
              label="Expandable Section"
              caption="12 items"
            />
          </div>
          <div class="wiki-storybook-card">
            <DesignComponent
              icon="info"
              label="Decorative Caption Example"
              caption="(optional)"
              caption-decorative
            />
          </div>
        </div>
      `,
      play: `
const canvas = within(canvasElement)
const components = canvasElement.querySelectorAll('.design-component')
await expect(components.length).toBe(2)

const firstCaption = components[0]?.querySelector('.design-component__caption')
const secondCaption = components[1]?.querySelector('.design-component__caption')
await expect(firstCaption).toHaveAttribute('aria-live', 'polite')
await expect(secondCaption).toHaveAttribute('aria-hidden', 'true')

await step('Toggle icon turn state', async () => {
  await userEvent.click(canvas.getByRole('button', { name: 'Toggle Icon Turn' }))
  await waitFor(() => {
    const iconElement = components[0]?.querySelector('.design-component__icon')
    expect(iconElement?.className).toContain('--turn')
  })
})
      `
    },
    {
      id: 'HeaderSlots',
      name: {
        en: 'Slots',
        ru: 'Слоты'
      },
      template: `
        <div class="wiki-storybook-card">
          <DesignComponent>
            <template #default>Custom label slot</template>
            <template #caption>Custom caption slot</template>
            <template #trailing>
              <span data-testid="header-trailing-content">Trailing slot</span>
            </template>
          </DesignComponent>
        </div>
      `,
      play: `
const component = canvasElement.querySelector('.design-component')
await expect(component?.querySelector('.design-component__label')).toHaveTextContent('Custom label slot')
await expect(component?.querySelector('.design-component__caption')).toHaveTextContent('Custom caption slot')
await expect(component?.querySelector('.design-component__space')).toBeInTheDocument()
await expect(component?.querySelector('[data-testid="header-trailing-content"]')).toHaveTextContent('Trailing slot')
      `
    },

    // =========================================================================
    // TIER 2: TEST STORIES (Constructor Props Only)
    // =========================================================================
    {
      id: 'HeaderTestPropsAndStates',
      name: {
        en: 'Test: Icon modifiers, labelId, numeric zero and coupled states',
        ru: 'Тест: Модификаторы иконки, labelId, числовой ноль и комбинированные состояния'
      },
      propsName: [
        'label',
        'labelId',
        'caption',
        'captionDecorative',
        'icon',
        'iconTurn',
        'iconHide',
        'iconDir',
        'iconPalette',
        'iconAttrs',
        'selected'
      ],
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label">iconTurn + iconHide + iconDir + iconPalette + selected</div>
            <DesignComponent
              data-testid="header-coupled-icon"
              label="Coupled Icon Props"
              label-id="custom-header-label-id"
              :icon="{ icon: 'home', iconActive: 'star' }"
              selected
              icon-turn
              icon-hide
              icon-dir
              icon-palette
              :icon-attrs="{ 'data-custom-icon': 'verified' }"
            />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label">numeric 0 label + caption</div>
            <DesignComponent
              data-testid="header-numeric-zero"
              :label="0"
              :caption="0"
            />
          </div>
        </div>
      `,
      play: `
await waitFor(() => {
  const coupled = canvasElement.querySelector('[data-testid="header-coupled-icon"]')
  const labelElement = coupled?.querySelector('#custom-header-label-id')
  expect(labelElement?.tagName).toBe('H3')
  expect(labelElement).toHaveTextContent('Coupled Icon Props')

  const iconElement = coupled?.querySelector('.design-component__icon')
  expect(iconElement).toBeInTheDocument()
  expect(iconElement?.className).toContain('--turn')
  expect(iconElement?.className).toContain('--hide')
  expect(iconElement?.className).toContain('--dir')
  expect(iconElement?.className).toContain('--asPalette')
  expect(iconElement).toHaveAttribute('data-custom-icon', 'verified')

  const zeroHeader = canvasElement.querySelector('[data-testid="header-numeric-zero"]')
  expect(zeroHeader?.querySelector('.design-component__label')).toHaveTextContent('0')
  expect(zeroHeader?.querySelector('.design-component__caption')).toHaveTextContent('0')
})
      `
    },
    {
      id: 'HeaderTestAreaAndAttributes',
      name: {
        en: 'Test: Reactive area context and external attribute merging',
        ru: 'Тест: Реактивный контекст area и слияние внешних атрибутов'
      },
      propsName: ['area'],
      setup: `
      const areaName = ref('header')
      const switchArea = (nextArea: string) => {
        areaName.value = nextArea
      }
      const AreaProbe = defineComponent({
        setup() {
          return () => h('span', { 'data-testid': 'header-area-probe' }, getAreaValue() ?? 'none')
        }
      })
      return { areaName, switchArea, AreaProbe }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button type="button" class="wiki-storybook-button" @click="switchArea('compact')">Set Compact Area</button>
          </div>
          <DesignComponent
            data-testid="header-area-host"
            class="custom-header-class"
            label="Area Host"
            :area="areaName"
          >
            <template #trailing>
              <component :is="AreaProbe"/>
            </template>
          </DesignComponent>
        </div>
      `,
      play: `
const canvas = within(canvasElement)
const host = canvasElement.querySelector('[data-testid="header-area-host"]')
await expect(host).toHaveClass('design-component')
await expect(host).toHaveClass('custom-header-class')
await expect(canvasElement.querySelector('[data-testid="header-area-probe"]')).toHaveTextContent('header')

await step('Update area prop reactively', async () => {
  await userEvent.click(canvas.getByRole('button', { name: 'Set Compact Area' }))
  await expect(canvasElement.querySelector('[data-testid="header-area-probe"]')).toHaveTextContent('compact')
})
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Header'} type={'header'}/>
<Canvas of={Component.HeaderBasic}/>
<Canvas of={Component.HeaderIcons}/>
    `,
    events: ``,
    expose: ``,
    slots: `
<Canvas of={Component.HeaderSlots}/>
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
<StorybookDescriptions componentName={'Slot'} type={'caption'}/>
<StorybookDescriptions componentName={'Slot'} type={'trailing'}/>
    `
  },
  ai: {
    render: `
<div :class="classDemo.item">
  <DesignComponent icon="folder" label="Section Header" caption="12 items" tag="h3" v-bind="args"/>
</div>
    `,
    description: `
Component for creating structured headers with integrated support for icons and captions.
Allows flexible control over the semantic HTML heading tag (h1-h6) to maintain proper document hierarchy.
Includes automatic area context propagation and support for custom trailing content.
    `
  }
}
