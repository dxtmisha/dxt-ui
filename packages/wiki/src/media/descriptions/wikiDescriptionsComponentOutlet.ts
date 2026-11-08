import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for ComponentOutlet component properties
 *
 * Описания свойств компонента ComponentOutlet
 */
export const wikiDescriptionsComponentOutlet: StorybookComponentsDescriptionItem = {
  name: 'ComponentOutlet',
  description: {
    en: 'Dynamic component renderer that resolves and mounts components by key from ComponentStorage with fallback slot support',
    ru: 'Динамический рендерер компонентов, разрешающий и монтирующий компоненты по ключу из ComponentStorage с поддержкой резервного слота'
  },
  possibilities: {
    en: [
      'dynamic component resolution from ComponentStorage by key name',
      'automatic merging of registry default props, runtime props, and fallthrough HTML attributes',
      'transparent forwarding of default and named slots to the resolved component',
      'graceful fallback to the default slot when a component is not registered or name is omitted',
      'direct access to the underlying DOM element via the getElement() expose method'
    ],
    ru: [
      'динамическое разрешение компонентов из ComponentStorage по ключевому имени',
      'автоматическое слияние базовых свойств реестра, свойств времени выполнения и сквозных HTML-атрибутов',
      'прозрачная пересылка стандартного и именованных слотов в разрешенный компонент',
      'безопасный откат к стандартному слоту default, если компонент не зарегистрирован или имя не указано',
      'прямой доступ к корневому DOM-элементу через экспортируемый метод getElement()'
    ]
  },
  import: [
    'import { defineComponent, h, ref } from \'vue\'',
    'import { ComponentStorage } from \'@dxtmisha/functional\''
  ],
  render: `
    <div class="wiki-storybook-item wiki-storybook-item--padding">
      <DesignComponent v-bind="args">
        <div class="wiki-storybook-flex-column">
          <strong>ComponentOutlet Fallback Content</strong>
          <span>Specify a registered component key in the "name" control or render custom fallback content through the default slot.</span>
        </div>
      </DesignComponent>
    </div>
  `,
  play: `
const fallbackBlock = canvasElement.querySelector('.wiki-storybook-item')
await expect(fallbackBlock).toBeTruthy()
await expect(fallbackBlock?.textContent).toContain('ComponentOutlet Fallback Content')
  `,
  stories: [
    {
      id: 'ComponentOutletBasic',
      name: {
        en: 'Basic',
        ru: 'Базовые'
      },
      setup: `
ComponentStorage.register(
  'wiki-outlet-banner',
  defineComponent({
    name: 'WikiOutletBanner',
    props: {
      title: { type: String, default: 'Registered Banner' },
      subtitle: { type: String, default: 'Resolved from ComponentStorage' }
    },
    setup(componentProps: { title: string, subtitle: string }) {
      return () => h(
        'div',
        { class: 'wiki-outlet-banner', 'data-testid': 'outlet-banner' },
        [
          h('strong', { class: 'wiki-outlet-banner__title' }, componentProps.title),
          h('p', { class: 'wiki-outlet-banner__subtitle' }, componentProps.subtitle)
        ]
      )
    }
  }),
  {
    subtitle: 'Default subtitle from ComponentStorage registration'
  }
)

return {}
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            name="wiki-outlet-banner"
            :props="{ title: 'Dynamic Banner Component' }"
          />
          <DesignComponent name="unregistered-component-key">
            <div data-testid="outlet-fallback">
              Fallback content rendered when the requested component is not found in ComponentStorage.
            </div>
          </DesignComponent>
        </div>
      `,
      play: `
const bannerElement = canvasElement.querySelector('[data-testid="outlet-banner"]')
const fallbackElement = canvasElement.querySelector('[data-testid="outlet-fallback"]')

await expect(bannerElement).toBeTruthy()
await expect(bannerElement?.textContent).toContain('Dynamic Banner Component')
await expect(bannerElement?.textContent).toContain('Default subtitle from ComponentStorage registration')
await expect(fallbackElement).toBeTruthy()
await expect(fallbackElement?.textContent).toContain('Fallback content rendered')
      `
    },
    {
      id: 'ComponentOutletSlots',
      name: {
        en: 'Forwarding slots',
        ru: 'Передача слотов'
      },
      setup: `
ComponentStorage.register(
  'wiki-outlet-layout',
  defineComponent({
    name: 'WikiOutletLayout',
    setup(_componentProps: Record<string, any>, { slots }: { slots: Record<string, any> }) {
      return () => h(
        'section',
        { class: 'wiki-outlet-layout', 'data-testid': 'outlet-layout' },
        [
          h('header', { 'data-testid': 'outlet-layout-header' }, slots.header ? slots.header() : 'Default Header'),
          h('div', { 'data-testid': 'outlet-layout-body' }, slots.default ? slots.default() : 'Default Body'),
          h('footer', { 'data-testid': 'outlet-layout-footer' }, slots.footer ? slots.footer() : 'Default Footer')
        ]
      )
    }
  })
)

return {}
      `,
      template: `
        <div class="wiki-storybook-item wiki-storybook-item--padding">
          <DesignComponent name="wiki-outlet-layout">
            <template #header>
              <strong>Custom Header Slot</strong>
            </template>
            <template #default>
              <p>Main body content forwarded through the default slot.</p>
            </template>
            <template #footer>
              <small>Custom Footer Slot</small>
            </template>
          </DesignComponent>
        </div>
      `,
      play: `
const headerElement = canvasElement.querySelector('[data-testid="outlet-layout-header"]')
const bodyElement = canvasElement.querySelector('[data-testid="outlet-layout-body"]')
const footerElement = canvasElement.querySelector('[data-testid="outlet-layout-footer"]')

await expect(headerElement?.textContent).toContain('Custom Header Slot')
await expect(bodyElement?.textContent).toContain('Main body content forwarded through the default slot.')
await expect(footerElement?.textContent).toContain('Custom Footer Slot')
      `
    },
    {
      id: 'ComponentOutletExpose',
      name: {
        en: 'Accessing DOM element via getElement',
        ru: 'Доступ к DOM-элементу через getElement'
      },
      setup: `
ComponentStorage.register(
  'wiki-outlet-article',
  defineComponent({
    name: 'WikiOutletArticle',
    props: {
      heading: { type: String, default: 'Article Heading' }
    },
    setup(componentProps: { heading: string }) {
      return () => h(
        'article',
        { class: 'wiki-outlet-article', 'data-testid': 'outlet-article' },
        componentProps.heading
      )
    }
  })
)

const outletReference = ref<{ getElement: () => HTMLElement | undefined } | null>(null)
const inspectedTagName = ref<string>('none')

const inspectElement = () => {
  const rootElement = outletReference.value?.getElement()
  inspectedTagName.value = rootElement ? rootElement.tagName.toLowerCase() : 'undefined'
}

return {
  outletReference,
  inspectedTagName,
  inspectElement
}
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            ref="outletReference"
            name="wiki-outlet-article"
            :props="{ heading: 'Inspectable Dynamic Article' }"
          />
          <div class="wiki-storybook-flex">
            <button
              type="button"
              data-testid="outlet-inspect-button"
              @click="inspectElement"
            >
              Inspect Element Tag
            </button>
            <span data-testid="outlet-inspected-tag">{{ inspectedTagName }}</span>
          </div>
        </div>
      `,
      play: `
const inspectButton = canvasElement.querySelector('[data-testid="outlet-inspect-button"]') as HTMLButtonElement
const inspectedTagSpan = canvasElement.querySelector('[data-testid="outlet-inspected-tag"]')

await expect(inspectButton).toBeTruthy()
await userEvent.click(inspectButton)
await expect(inspectedTagSpan?.textContent).toBe('article')
      `
    },
    {
      id: 'ComponentOutletTestMergingAndFallback',
      name: {
        en: 'Test: Props merging and dynamic switching',
        ru: 'Тест: Слияние свойств и динамическое переключение'
      },
      setup: `
ComponentStorage.register(
  'wiki-outlet-test-widget',
  defineComponent({
    name: 'WikiOutletTestWidget',
    props: {
      label: { type: String, default: 'Default Label' },
      variant: { type: String, default: 'primary' }
    },
    setup(componentProps: { label: string, variant: string }) {
      return () => h(
        'div',
        {
          class: 'wiki-outlet-test-widget',
          'data-testid': 'outlet-test-widget',
          'data-variant': componentProps.variant
        },
        componentProps.label
      )
    }
  }),
  {
    label: 'Registry Label',
    variant: 'registry-variant'
  }
)

const activeName = ref<string>('wiki-outlet-test-widget')
const toggleComponentName = () => {
  activeName.value = activeName.value === 'wiki-outlet-test-widget'
    ? 'missing-widget-key'
    : 'wiki-outlet-test-widget'
}

return {
  activeName,
  toggleComponentName
}
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            :name="activeName"
            :props="{ label: 'Overridden Runtime Label' }"
            class="custom-fallthrough-class"
          >
            <span data-testid="outlet-test-fallback">Fallback Slot Active</span>
          </DesignComponent>
          <button
            type="button"
            data-testid="outlet-toggle-button"
            @click="toggleComponentName"
          >
            Toggle Outlet Target
          </button>
        </div>
      `,
      play: `
const widgetElement = canvasElement.querySelector('[data-testid="outlet-test-widget"]')
await expect(widgetElement).toBeTruthy()
await expect(widgetElement?.textContent).toBe('Overridden Runtime Label')
await expect(widgetElement?.getAttribute('data-variant')).toBe('registry-variant')
await expect(widgetElement?.classList.contains('custom-fallthrough-class')).toBe(true)

const toggleButton = canvasElement.querySelector('[data-testid="outlet-toggle-button"]') as HTMLButtonElement
await userEvent.click(toggleButton)

const fallbackElement = canvasElement.querySelector('[data-testid="outlet-test-fallback"]')
await expect(fallbackElement).toBeTruthy()
await expect(fallbackElement?.textContent).toBe('Fallback Slot Active')
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'ComponentOutlet'} type={'componentOutlet'}/>
<Canvas of={Component.ComponentOutletBasic}/>
    `,
    expose: `
<StorybookDescriptions componentName={'ComponentOutlet'} type={'expose.getElement'}/>
<Canvas of={Component.ComponentOutletExpose}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
<StorybookDescriptions componentName={'ComponentOutlet'} type={'slot.any'}/>
<Canvas of={Component.ComponentOutletSlots}/>
    `
  },
  ai: {
    render: `
<div :class="classDemo.item">
  <ComponentOutlet v-bind="args">
    <div>Fallback content when component is not registered in ComponentStorage.</div>
  </ComponentOutlet>
</div>
    `,
    description: `
Dynamic component outlet that resolves and renders components registered in ComponentStorage by their unique string key.
Automatically merges default properties registered in ComponentStorage, runtime properties passed via the 'props' attribute, and fallthrough HTML attributes (classes, styles, data attributes).
Forwards all provided slots (default and any named slots) directly to the resolved component, or renders the default slot as fallback content when the target component is not found or 'name' is omitted.
Exposes getElement() for retrieving the underlying root DOM element reference.
    `,
    hide: true
  }
}
