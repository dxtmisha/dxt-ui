import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Button component properties
 *
 * Описания свойств компонента Button
 */
export const wikiDescriptionsButton: StorybookComponentsDescriptionItem = {
  name: 'Button',
  description: {
    en: 'Interactive button component for triggering actions, navigation, and form workflows with built-in icons, progress indicators, skeleton loading, and accessibility.',
    ru: 'Интерактивный компонент кнопки для вызова действий, навигации и сценариев форм со встроенными иконками, индикатором загрузки, скелетоном и доступностью.'
  },
  possibilities: {
    en: [
      'multiple visual variants: primary, secondary, outline, text, and custom palettes',
      'leading, trailing, or dual icons support with Material symbols and custom assets',
      'integrated progress indicator with seamless loading transition and aria-disabled state',
      'polymorphic container rendering as button, link (a/href/to), or custom tag with keyboard focus',
      'full interaction state management: focus, hover, active, selected, readonly, and disabled',
      'zero-duplication skeleton loading mode via isSkeleton inside DesignSkeleton',
      'adaptive layout scaling (block, iconAlways, auto) and container query support',
      'programmatic event inspection and data binding via getValue() and getDetail()'
    ],
    ru: [
      'множественные визуальные варианты: primary, secondary, outline, text и пользовательские палитры',
      'поддержка ведущей, завершающей или обеих иконок с Material-символами и пользовательскими ассетами',
      'встроенный индикатор прогресса с плавным переходом загрузки и состоянием aria-disabled',
      'полиморфный рендеринг контейнера: кнопка, ссылка (a/href/to) или кастомный тег с фокусом клавиатуры',
      'полное управление состояниями взаимодействия: focus, hover, active, selected, readonly и disabled',
      'режим скелетона без дублирования верстки через isSkeleton внутри DesignSkeleton',
      'адаптивное масштабирование разметки (block, iconAlways, auto) и поддержка container queries',
      'программный доступ к данным событий и привязкам через getValue() и getDetail()'
    ]
  },
  render: `
    <div class="wiki-storybook-flex">
      <DesignComponent v-bind="args">Button</DesignComponent>
    </div>
  `,
  play: `
const component = canvasElement.querySelector<HTMLElement>('.design-component')
await expect(component).toBeInTheDocument()
await expect(component).toHaveTextContent('Button')
  `,
  import: [
    'import { ref } from \'vue\''
  ],
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES (Included in documentation.body/events/expose/slots)
    // =========================================================================
    {
      id: 'ButtonBasic',
      name: {
        en: 'Basic',
        ru: 'Базовые'
      },
      template: `
        <div class="wiki-storybook-flex">
          <DesignComponent label="Button"/>
          <DesignComponent icon="home" label="Button with Icon"/>
          <DesignComponent icon-trailing="arrow_forward" label="Trailing Icon"/>
          <DesignComponent icon="home" icon-trailing="arrow_forward" label="Both Icons"/>
        </div>
      `,
      play: `
const items = canvasElement.querySelectorAll<HTMLElement>('.design-component')
await expect(items.length).toBe(4)

await expect(items[0]).toHaveTextContent('Button')
await expect(items[1]).toHaveClass('design-component--icon')
await expect(items[1].querySelector('.design-component__icon')).toBeInTheDocument()
await expect(items[2].querySelector('.design-component__trailing')).toBeInTheDocument()
await expect(items[3].querySelector('.design-component__icon')).toBeInTheDocument()
await expect(items[3].querySelector('.design-component__trailing')).toBeInTheDocument()
      `
    },
    {
      id: 'ButtonPrimary',
      name: {
        en: 'Primary',
        ru: 'Основные (primary)'
      },
      propsName: 'primary',
      template: `
        <div class="wiki-storybook-flex">
          <DesignComponent primary label="Primary"/>
          <DesignComponent primary icon="home" label="With Icon"/>
          <DesignComponent primary selected label="Selected"/>
          <DesignComponent primary disabled label="Disabled"/>
        </div>
      `,
      play: `
const items = canvasElement.querySelectorAll<HTMLElement>('.design-component')
await expect(items.length).toBe(4)

await expect(items[0]).toHaveClass('design-component--primary')
await expect(items[1]).toHaveClass('design-component--icon')
await expect(items[2]).toHaveClass('design-component--selected')
await expect(items[3]).toHaveClass('design-component--disabled')
await expect(items[3]).toBeDisabled()
      `
    },
    {
      id: 'ButtonSecondary',
      name: {
        en: 'Secondary',
        ru: 'Второстепенные (secondary)'
      },
      propsName: 'secondary',
      template: `
        <div class="wiki-storybook-flex">
          <DesignComponent secondary label="Secondary"/>
          <DesignComponent secondary icon="home" label="With Icon"/>
          <DesignComponent secondary selected label="Selected"/>
          <DesignComponent secondary disabled label="Disabled"/>
        </div>
      `,
      play: `
const items = canvasElement.querySelectorAll<HTMLElement>('.design-component')
await expect(items.length).toBe(4)

await expect(items[0]).toHaveClass('design-component--secondary')
await expect(items[1]).toHaveClass('design-component--icon')
await expect(items[2]).toHaveClass('design-component--selected')
await expect(items[3]).toHaveClass('design-component--disabled')
await expect(items[3]).toBeDisabled()
      `
    },
    {
      id: 'ButtonOutline',
      name: {
        en: 'Outline',
        ru: 'Контурные (outline)'
      },
      propsName: 'outline',
      template: `
        <div class="wiki-storybook-flex">
          <DesignComponent outline label="Outline"/>
          <DesignComponent outline icon="home" label="With Icon"/>
          <DesignComponent outline selected label="Selected"/>
          <DesignComponent outline disabled label="Disabled"/>
        </div>
      `,
      play: `
const items = canvasElement.querySelectorAll<HTMLElement>('.design-component')
await expect(items.length).toBe(4)

await expect(items[0]).toHaveClass('design-component--outline')
await expect(items[1]).toHaveClass('design-component--icon')
await expect(items[2]).toHaveClass('design-component--selected')
await expect(items[3]).toHaveClass('design-component--disabled')
await expect(items[3]).toBeDisabled()
      `
    },
    {
      id: 'ButtonText',
      name: {
        en: 'Text',
        ru: 'Текстовые (text)'
      },
      propsName: 'text',
      template: `
        <div class="wiki-storybook-flex">
          <DesignComponent text label="Text"/>
          <DesignComponent text icon="home" label="With Icon"/>
          <DesignComponent text selected label="Selected"/>
          <DesignComponent text disabled label="Disabled"/>
        </div>
      `,
      play: `
const items = canvasElement.querySelectorAll<HTMLElement>('.design-component')
await expect(items.length).toBe(4)

await expect(items[0]).toHaveClass('design-component--text')
await expect(items[1]).toHaveClass('design-component--icon')
await expect(items[2]).toHaveClass('design-component--selected')
await expect(items[3]).toHaveClass('design-component--disabled')
await expect(items[3]).toBeDisabled()
      `
    },
    {
      id: 'ButtonAdaptive',
      name: {
        en: 'Adaptive',
        ru: 'Адаптивные'
      },
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Default</div>
            <DesignComponent icon="home" label="Button"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Adaptive block</div>
            <DesignComponent adaptive="block" icon="home" label="Block Button"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Adaptive iconAlways</div>
            <DesignComponent adaptive="iconAlways" icon="home" label="Icon Only"/>
          </div>
        </div>
      `,
      play: `
const items = canvasElement.querySelectorAll<HTMLElement>('.design-component')
await expect(items.length).toBe(3)

await expect(items[0]).toBeInTheDocument()
await expect(items[1]).toHaveClass('design-component--adaptive--block')
await expect(items[2]).toHaveClass('design-component--adaptive--iconAlways')
      `
    },
    {
      id: 'ButtonSkeleton',
      name: {
        en: 'Skeleton',
        ru: 'Скелетон'
      },
      components: ['Skeleton'],
      template: `
        <DesignSkeleton :active="true">
          <div class="wiki-storybook-flex">
            <DesignComponent is-skeleton label="Loading Action"/>
            <DesignComponent is-skeleton primary label="Confirming..."/>
          </div>
        </DesignSkeleton>
      `,
      play: `
const items = canvasElement.querySelectorAll<HTMLElement>('.design-component')
await expect(items.length).toBe(2)

await expect(items[0]).toHaveClass('d1-skeleton__background')
await expect(items[1]).toHaveClass('d1-skeleton__background')
      `
    },
    {
      id: 'ButtonEvents',
      name: {
        en: 'Events (Click)',
        ru: 'События (Click)'
      },
      setup: `
      const clickCount = ref(0)
      const lastDetail = ref('')

      const onClick = (event: MouseEvent) => {
        clickCount.value++
        lastDetail.value = 'Clicked at ' + event.clientX + 'x' + event.clientY
      }

      return {
        clickCount,
        lastDetail,
        onClick
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <DesignComponent primary label="Click Me" @click="onClick"/>
          </div>
          <div class="wiki-storybook-card">
            <div>Clicks: <span class="click-counter">{{ clickCount }}</span></div>
            <div>Detail: <span class="click-detail">{{ lastDetail }}</span></div>
          </div>
        </div>
      `,
      play: `
const canvas = within(canvasElement)
const button = canvas.getByText('Click Me')
const counter = canvasElement.querySelector<HTMLElement>('.click-counter')

await expect(counter).toHaveTextContent('0')
await step('Click button', async () => {
  await userEvent.click(button)
})
await expect(counter).toHaveTextContent('1')
      `
    },
    {
      id: 'ButtonExpose',
      name: {
        en: 'Expose (getValue & getDetail)',
        ru: 'Экспорт методов (getValue & getDetail)'
      },
      setup: `
      const buttonReference = ref()
      const exposedValue = ref('')
      const exposedDetail = ref('')

      const onInspect = () => {
        if (buttonReference.value) {
          exposedValue.value = String(buttonReference.value.getValue?.() ?? '')
          exposedDetail.value = JSON.stringify(buttonReference.value.getDetail?.() ?? {})
        }
      }

      return {
        buttonReference,
        exposedValue,
        exposedDetail,
        onInspect
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <DesignComponent
              ref="buttonReference"
              label="Action with Data"
              value="order-submit-action"
              :detail="{ orderId: 4096, verified: true }"
            />
            <button class="wiki-storybook-button inspect-button" @click="onInspect">
              Inspect Expose
            </button>
          </div>
          <div class="wiki-storybook-card">
            <div>Value: <span class="exposed-value">{{ exposedValue }}</span></div>
            <div>Detail: <span class="exposed-detail">{{ exposedDetail }}</span></div>
          </div>
        </div>
      `,
      play: `
const canvas = within(canvasElement)
const inspectButton = canvas.getByText('Inspect Expose')
const valueOutput = canvasElement.querySelector<HTMLElement>('.exposed-value')
const detailOutput = canvasElement.querySelector<HTMLElement>('.exposed-detail')

await step('Inspect exposed values', async () => {
  await userEvent.click(inspectButton)
})

await expect(valueOutput).toHaveTextContent('order-submit-action')
await expect(detailOutput).toHaveTextContent('orderId')
      `
    },
    {
      id: 'ButtonSlots',
      name: {
        en: 'Slots (default & label)',
        ru: 'Слоты (default & label)'
      },
      template: `
        <div class="wiki-storybook-flex">
          <DesignComponent primary>
            <template #default>
              <span>Custom <strong>Rich Default</strong> Content</span>
            </template>
          </DesignComponent>
          <DesignComponent secondary>
            <template #label>
              <span>Custom <em>Scoped Label</em></span>
            </template>
          </DesignComponent>
        </div>
      `,
      play: `
const items = canvasElement.querySelectorAll<HTMLElement>('.design-component')
await expect(items.length).toBe(2)

await expect(items[0]).toHaveTextContent('Rich Default')
await expect(items[1]).toHaveTextContent('Scoped Label')
      `
    },

    // =========================================================================
    // TIER 2: TEST STORIES (Prefixed with ButtonTest... and "Test: " / "Тест: ")
    // NEVER add Tier 2 stories to the documentation section below!
    // =========================================================================
    {
      id: 'ButtonTestStates',
      name: {
        en: 'Test: Disabled, readonly, loading, focus and combined states',
        ru: 'Тест: Отключенное, только для чтения, загрузка, фокус и комбинированные состояния'
      },
      propsName: ['disabled', 'readonly', 'loading', 'focus', 'selected'],
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">disabled</div>
            <DesignComponent disabled label="Disabled"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">readonly</div>
            <DesignComponent readonly label="Readonly"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">loading</div>
            <DesignComponent loading label="Loading"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">focus</div>
            <DesignComponent focus label="Focus"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">disabled + selected</div>
            <DesignComponent disabled selected label="Disabled Selected"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">loading + disabled</div>
            <DesignComponent loading disabled label="Loading Disabled"/>
          </div>
        </div>
      `,
      play: `
const items = canvasElement.querySelectorAll<HTMLElement>('.design-component')
await expect(items.length).toBe(6)

// 1. disabled
await expect(items[0]).toHaveClass('design-component--disabled')
await expect(items[0]).toBeDisabled()

// 2. readonly
await expect(items[1]).toHaveClass('design-component--readonly')

// 3. loading: has loading sub-class, progress indicator, and aria-disabled
await expect(items[2]).toHaveClass('design-component--loading')
await expect(items[2].querySelector('.design-component__loading')).toBeInTheDocument()
await expect(items[2]).toHaveAttribute('aria-disabled', 'true')

// 4. focus
await expect(items[3]).toHaveClass('design-component--focus')

// 5. disabled + selected
await expect(items[4]).toHaveClass('design-component--disabled')
await expect(items[4]).toHaveClass('design-component--selected')
await expect(items[4]).toBeDisabled()

// 6. loading + disabled
await expect(items[5]).toHaveClass('design-component--loading')
await expect(items[5]).toHaveClass('design-component--disabled')
await expect(items[5]).toBeDisabled()
      `
    },
    {
      id: 'ButtonTestTagsAndTypes',
      name: {
        en: 'Test: Tag polymorphism, link attributes and custom types',
        ru: 'Тест: Полиморфизм тегов, атрибуты ссылок и типы кнопок'
      },
      propsName: ['tag', 'type', 'href', 'target', 'ariaLabel'],
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">tag: button (submit)</div>
            <DesignComponent tag="button" type="submit" label="Submit Form"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">tag: a (href + target)</div>
            <DesignComponent href="https://example.com" target="_blank" label="External Link"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">tag: span (custom)</div>
            <DesignComponent tag="span" aria-label="Accessible Span" label="Span Button"/>
          </div>
        </div>
      `,
      play: `
const items = canvasElement.querySelectorAll<HTMLElement>('.design-component')
await expect(items.length).toBe(3)

// 1. Tag button with type submit
expect(items[0].tagName).toBe('BUTTON')
await expect(items[0]).toHaveAttribute('type', 'submit')

// 2. Tag a with href and target
expect(items[1].tagName).toBe('A')
await expect(items[1]).toHaveAttribute('href', 'https://example.com')
await expect(items[1]).toHaveAttribute('target', '_blank')

// 3. Tag span with role button and tabindex
expect(items[2].tagName).toBe('SPAN')
await expect(items[2]).toHaveAttribute('role', 'button')
await expect(items[2]).toHaveAttribute('tabindex', '0')
await expect(items[2]).toHaveAttribute('aria-label', 'Accessible Span')
      `
    },
    {
      id: 'ButtonTestTokensAndModifiers',
      name: {
        en: 'Test: Inverse, grid and text alignment tokens',
        ru: 'Тест: Инвертированные, сеточные и выравнивающие модификаторы'
      },
      propsName: ['inverse', 'grid', 'textAlign'],
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">inverse</div>
            <DesignComponent inverse label="Inverse Button"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">grid</div>
            <DesignComponent grid icon="home" label="Grid Layout"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">textAlign: left</div>
            <DesignComponent text-align="left" adaptive="block" label="Left Aligned"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">textAlign: right</div>
            <DesignComponent text-align="right" adaptive="block" label="Right Aligned"/>
          </div>
        </div>
      `,
      play: `
const items = canvasElement.querySelectorAll<HTMLElement>('.design-component')
await expect(items.length).toBe(4)

await expect(items[0]).toHaveClass('design-component--inverse')
await expect(items[1]).toHaveClass('design-component--grid')
await expect(items[2]).toHaveClass('design-component--textAlign--left')
await expect(items[3]).toHaveClass('design-component--textAlign--right')
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Button'} type={'button'}/>
<Canvas of={Component.ButtonBasic}/>

<template prop="primary">
<StorybookDescriptions componentName={'Button'} type={'primary'}/>
<Canvas of={Component.ButtonPrimary}/>
</template>

<template prop="secondary">
<StorybookDescriptions componentName={'Button'} type={'secondary'}/>
<Canvas of={Component.ButtonSecondary}/>
</template>

<template prop="outline">
<StorybookDescriptions componentName={'Button'} type={'outline'}/>
<Canvas of={Component.ButtonOutline}/>
</template>

<template prop="text">
<StorybookDescriptions componentName={'Button'} type={'text'}/>
<Canvas of={Component.ButtonText}/>
</template>

<StorybookDescriptions componentName={'Style'} type={'adaptive'}/>
<Canvas of={Component.ButtonAdaptive}/>

<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.ButtonSkeleton}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'click'}/>
<Canvas of={Component.ButtonEvents}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Expose'} type={'getValue'}/>
<StorybookDescriptions componentName={'Expose'} type={'getDetail'}/>
<Canvas of={Component.ButtonExpose}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
<Canvas of={Component.ButtonSlots}/>
    `
  },
  ai: {
    description: `
Fundamental interactive component for user actions, navigation, and form workflows. Supports various visual styles (primary, secondary, outline, text), states (active, selected, disabled, readonly, loading, focus), and content configurations.
Features built-in support for leading and trailing icons (Material Symbols), integrated progress indicators (circular and linear), and disabled/selected states. Includes native-like navigation via "to" (Vue Router) or "href" (external) props and supports skeleton loading via isSkeleton.
Highly customizable through design tokens and adaptive layout options (block, iconAlways). Controlled primarily via click events and various styling props. Use for call-to-actions, navigation links, or icon-only toggle buttons.
    `
  }
}
