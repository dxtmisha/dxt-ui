import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Anchor component properties
 *
 * Описания свойств компонента Anchor
 */
export const wikiDescriptionsAnchor: StorybookComponentsDescriptionItem = {
  name: 'Anchor',
  description: {
    en: 'Component for creating anchor navigation links, hidden scroll targets, and click-to-copy permalinks',
    ru: 'Компонент для создания якорных ссылок, скрытых целей прокрутки и копируемых постоянных ссылок'
  },
  possibilities: {
    en: [
      'smooth in-page scrolling with configurable shift, behavior, block, and inline options',
      'automatic navigation on mount when location.hash matches the anchor name',
      'copy-to-clipboard permalink mode (isCopy) with integrated Tooltip and active icon feedback',
      'keyboard accessibility with role="button" and Enter/Space activation in copy mode',
      'hidden aria-hidden scroll targets (hide) controllable via exposed go() method',
      'support for string and object IconValue configurations as well as #default and #tooltip slots'
    ],
    ru: [
      'плавная прокрутка с настройкой shift, behavior, block и inline',
      'автоматическая навигация при монтировании при совпадении location.hash с именем якоря',
      'режим копирования постоянной ссылки (isCopy) с интегрированным Tooltip и активной иконкой',
      'клавиатурная доступность с role="button" и активацией по Enter/Space в режиме копирования',
      'скрытые цели прокрутки (hide) с aria-hidden="true" и программным методом go()',
      'поддержка строковых и объектных IconValue, а также слотов #default и #tooltip'
    ]
  },
  import: [
    'import { ref } from \'vue\'',
    'import type { AnchorExpose } from \'@dxtmisha/constructor/Anchor\''
  ],
  render: `
    <DesignComponent v-bind="args"/>
  `,
  play: `
    const anchor = canvasElement.querySelector('a')
    await expect(anchor).toBeInTheDocument()
  `,
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES (Included in documentation.body/expose/slots)
    // =========================================================================
    {
      id: 'AnchorBasic',
      name: {
        en: 'Basic navigation and slots',
        ru: 'Базовая навигация и слоты'
      },
      propsName: ['name', 'label', 'iconLink', 'shift', 'behavior'],
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            name="wiki-basic"
            label="Basic Anchor"
            :shift="64"
            behavior="smooth"
          />
          <DesignComponent
            name="wiki-object-icon"
            label="Object Icon Anchor"
            :icon-link="{ icon: 'link', turn: true }"
          />
          <DesignComponent name="wiki-slot">
            Default Slot Anchor
          </DesignComponent>
        </div>
      `,
      play: `
        const links = canvasElement.querySelectorAll('.design-component')
        await expect(links.length).toBe(3)
        await expect(links[0]).toHaveAttribute('href', '#wiki-basic')
        await expect(links[0]).toHaveAttribute('aria-current', 'page')
        await expect(links[2]).toHaveTextContent('Default Slot Anchor')
      `
    },
    {
      id: 'AnchorCopy',
      name: {
        en: 'Copy to clipboard mode',
        ru: 'Режим копирования в буфер обмена'
      },
      propsName: ['isCopy', 'iconTag', 'iconContentCopy', 'delayHide', 'textCopiedClipboard', 'tooltipLabel'],
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            name="wiki-copy"
            label="Copy Permalink"
            is-copy
            :delay-hide="600"
            text-copied-clipboard="Copied!"
          />
          <DesignComponent
            name="wiki-copy-slot"
            label="Custom Tooltip Slot"
            is-copy
            tooltip-label="Saved"
          >
            <template #tooltip>
              <span>Permalink ready</span>
            </template>
          </DesignComponent>
        </div>
      `,
      play: `
        const links = canvasElement.querySelectorAll('.design-component')
        await expect(links.length).toBe(2)
        await expect(links[0]).toHaveAttribute('role', 'button')
        await expect(links[0]).not.toHaveAttribute('href')
        await expect(links[0]).toHaveAttribute('tabindex', '0')
      `
    },
    {
      id: 'AnchorHideAndExpose',
      name: {
        en: 'Hidden anchor and exposed go()',
        ru: 'Скрытый якорь и программный вызов go()'
      },
      propsName: ['hide', 'shift'],
      setup: `
      const targetAnchor = ref<AnchorExpose | null>(null)
      const navigated = ref(false)
      const onGo = () => {
        targetAnchor.value?.go()
        navigated.value = true
      }
      return { targetAnchor, navigated, onGo }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex wiki-storybook-flex-align-center">
            <button type="button" class="wiki-storybook-button" @click="onGo">
              Go to Hidden Anchor
            </button>
            <span data-testid="anchor-go-status">navigated:{{ navigated }}</span>
          </div>
          <DesignComponent
            ref="targetAnchor"
            name="wiki-hidden-target"
            hide
            :shift="32"
          />
        </div>
      `,
      play: `
        const canvas = within(canvasElement)
        const hiddenAnchor = canvasElement.querySelector('a[name="wiki-hidden-target"]')
        await expect(hiddenAnchor).toBeInTheDocument()
        await expect(hiddenAnchor).toHaveAttribute('aria-hidden', 'true')

        const goButton = canvas.getByRole('button', { name: 'Go to Hidden Anchor' })
        await userEvent.click(goButton)
        await expect(canvas.getByTestId('anchor-go-status')).toHaveTextContent('navigated:true')
      `
    },

    // =========================================================================
    // TIER 2: TEST STORIES (Prefixed with AnchorTest... and "Test: " / "Тест: ")
    // ONLY for constructor-level props/behavior!
    // =========================================================================
    {
      id: 'AnchorTestPropsAndAria',
      name: {
        en: 'Test: Props, numeric 0, missing name, scroll options and ARIA',
        ru: 'Тест: Свойства, числовой 0, отсутствие name, параметры скролла и ARIA'
      },
      propsName: [
        'name',
        'label',
        'labelId',
        'hide',
        'isCopy',
        'iconLink',
        'iconTag',
        'iconContentCopy',
        'delayHide',
        'textCopiedClipboard',
        'tooltipLabel',
        'tooltipDescription',
        'tooltipAttrs',
        'shift',
        'behavior',
        'block',
        'inline'
      ],
      template: `
        <div class="wiki-storybook-flex-column">
          <div data-testid="anchor-zero">
            <DesignComponent
              name="test-zero"
              :label="0"
              label-id="test-anchor-zero-id"
              shift="16"
              behavior="auto"
              block="center"
              inline="nearest"
            />
          </div>
          <div data-testid="anchor-copy-icon-only">
            <DesignComponent
              name="test-copy-only"
              is-copy
              icon-tag="tag"
              icon-content-copy="content_copy"
              :delay-hide="400"
              text-copied-clipboard="Copied link"
              tooltip-label="Link"
              tooltip-description="Copied to clipboard"
              :tooltip-attrs="{ arrowShow: true }"
            />
          </div>
          <div data-testid="anchor-implicit-hide">
            <DesignComponent name="test-implicit-hide"/>
          </div>
          <div data-testid="anchor-no-name">
            <DesignComponent label="Should not render"/>
          </div>
        </div>
      `,
      play: `
        const zeroLink = canvasElement.querySelector('[data-testid="anchor-zero"] a')
        await expect(zeroLink).toHaveAttribute('href', '#test-zero')
        await expect(zeroLink).toHaveAttribute('aria-current', 'page')
        await expect(zeroLink).toHaveTextContent('0')
        await expect(canvasElement.querySelector('#test-anchor-zero-id')).toBeInTheDocument()

        const copyOnlyLink = canvasElement.querySelector('[data-testid="anchor-copy-icon-only"] a')
        await expect(copyOnlyLink).toHaveAttribute('role', 'button')
        await expect(copyOnlyLink).not.toHaveAttribute('href')

        const implicitHideLink = canvasElement.querySelector('[data-testid="anchor-implicit-hide"] a')
        await expect(implicitHideLink).toHaveAttribute('aria-hidden', 'true')
        await expect(implicitHideLink).toHaveAttribute('name', 'test-implicit-hide')

        const noNameLink = canvasElement.querySelector('[data-testid="anchor-no-name"] a')
        await expect(noNameLink).toBeNull()
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Anchor'} type={'anchor'}/>
<Canvas of={Component.AnchorBasic}/>
<StorybookDescriptions componentName={'Anchor'} type={'isCopy'}/>
<Canvas of={Component.AnchorCopy}/>
<StorybookDescriptions componentName={'Anchor'} type={'hide'}/>
<StorybookDescriptions componentName={'Anchor'} type={'scroll'}/>
`,
    expose: `
<Canvas of={Component.AnchorHideAndExpose}/>
<StorybookDescriptions componentName={'Anchor'} type={'expose.go'}/>
`,
    slots: `
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
<StorybookDescriptions componentName={'Slot'} type={'tooltip'}/>
`
  },
  ai: {
    render: `
<div :class="classDemo.item">
  <Anchor name="example" label="Section Anchor" v-bind="args"/>
</div>
    `,
    description: `
Navigation component for creating internal page anchors, invisible scroll targets, and click-to-copy permalinks. Wraps the native <a> element with smooth scrolling, History API hash updates, and clipboard integration.
Supports regular hash navigation (aria-current="page"), copy-to-clipboard mode (isCopy with role="button", Enter/Space activation, active icon swap, and Tooltip feedback), and hidden scroll targets (hide with aria-hidden="true" and exposed go() method).
    `
  }
}
