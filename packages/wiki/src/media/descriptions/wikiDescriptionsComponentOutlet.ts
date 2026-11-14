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
    'import { defineComponent, h, ref, type Slots } from \'vue\'',
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
await expect(fallbackBlock).toBeInTheDocument()
await expect(fallbackBlock?.textContent).toContain('ComponentOutlet Fallback Content')
  `,
  stories: [
    {
      id: 'ComponentOutletBasic',
      name: {
        en: 'Basic usage and fallback',
        ru: 'Базовое использование и резервный слот'
      },
      setup: `
      ComponentStorage.add(
        'wiki-outlet-banner',
        defineComponent({
          name: 'WikiOutletBanner',
          props: {
            title: { type: String, default: 'Registered Banner' },
            subtitle: { type: String, default: 'Resolved from ComponentStorage' },
            badge: { type: String, default: 'DEFAULT' }
          },
          setup(componentProps: { title: string, subtitle: string, badge: string }) {
            return () => h(
              'div',
              {
                'class': 'wiki-outlet-banner',
                'data-testid': 'outlet-banner',
                'data-badge': componentProps.badge
              },
              [
                h('strong', { class: 'wiki-outlet-banner__title' }, componentProps.title),
                h('p', { class: 'wiki-outlet-banner__subtitle' }, componentProps.subtitle)
              ]
            )
          }
        }),
        {
          subtitle: 'Default subtitle from ComponentStorage registration',
          badge: 'STORAGE'
        }
      )

      return {}
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Registered component (name="wiki-outlet-banner")</div>
            <DesignComponent
              name="wiki-outlet-banner"
              :props="{ title: 'Dynamic Banner Component' }"
            />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Unregistered fallback (name="unregistered-component-key")</div>
            <DesignComponent name="unregistered-component-key">
              <div data-testid="outlet-fallback">
                Fallback content rendered when the requested component is not found in ComponentStorage.
              </div>
            </DesignComponent>
          </div>
        </div>
      `,
      play: `
const bannerElement = canvasElement.querySelector<HTMLElement>('[data-testid="outlet-banner"]')
const fallbackElement = canvasElement.querySelector<HTMLElement>('[data-testid="outlet-fallback"]')

await expect(bannerElement).toBeInTheDocument()
await expect(bannerElement).toHaveClass('design-component')
await expect(bannerElement).toHaveAttribute('data-badge', 'STORAGE')
expect(bannerElement?.textContent).toContain('Dynamic Banner Component')
expect(bannerElement?.textContent).toContain('Default subtitle from ComponentStorage registration')

await expect(fallbackElement).toBeInTheDocument()
expect(fallbackElement?.textContent).toContain('Fallback content rendered')
      `
    },
    {
      id: 'ComponentOutletSlots',
      name: {
        en: 'Forwarding default, named and scoped slots',
        ru: 'Передача стандартного, именованных и scoped-слотов'
      },
      setup: `
      ComponentStorage.add(
        'wiki-outlet-layout',
        defineComponent({
          name: 'WikiOutletLayout',
          props: {
            sectionTitle: { type: String, default: 'Overview' }
          },
          setup(componentProps: { sectionTitle: string }, { slots }: { slots: Slots }) {
            return () => h(
              'section',
              { 'class': 'wiki-outlet-layout', 'data-testid': 'outlet-layout' },
              [
                h(
                  'header',
                  { 'data-testid': 'outlet-layout-header' },
                  slots.header ? slots.header({ title: componentProps.sectionTitle }) : 'Default Header'
                ),
                h(
                  'div',
                  { 'data-testid': 'outlet-layout-body' },
                  slots.default ? slots.default() : 'Default Body'
                ),
                h(
                  'footer',
                  { 'data-testid': 'outlet-layout-footer' },
                  slots.footer ? slots.footer() : 'Default Footer'
                )
              ]
            )
          }
        }),
        {
          sectionTitle: 'Dashboard Overview'
        }
      )

      return {}
      `,
      template: `
        <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
          <DesignComponent name="wiki-outlet-layout">
            <template #header="{ title }">
              <strong>Custom Header: {{ title }}</strong>
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
const layoutElement = canvasElement.querySelector<HTMLElement>('[data-testid="outlet-layout"]')
const headerElement = canvasElement.querySelector<HTMLElement>('[data-testid="outlet-layout-header"]')
const bodyElement = canvasElement.querySelector<HTMLElement>('[data-testid="outlet-layout-body"]')
const footerElement = canvasElement.querySelector<HTMLElement>('[data-testid="outlet-layout-footer"]')

await expect(layoutElement).toBeInTheDocument()
await expect(layoutElement).toHaveClass('design-component')
expect(headerElement?.textContent).toContain('Custom Header: Dashboard Overview')
expect(bodyElement?.textContent).toContain('Main body content forwarded through the default slot.')
expect(footerElement?.textContent).toContain('Custom Footer Slot')
      `
    },
    {
      id: 'ComponentOutletExpose',
      name: {
        en: 'Accessing resolved instance via getElement',
        ru: 'Доступ к разрешённому экземпляру через getElement'
      },
      setup: `
      ComponentStorage.add(
        'wiki-outlet-article',
        defineComponent({
          name: 'WikiOutletArticle',
          props: {
            heading: { type: String, default: 'Article Heading' }
          },
          setup(componentProps: { heading: string }, { expose }) {
            const articleElement = ref<HTMLElement>()

            expose({
              getSummary: () => componentProps.heading,
              getTagName: () => articleElement.value?.tagName.toLowerCase() ?? 'none'
            })

            return () => h(
              'article',
              {
                'ref': articleElement,
                'class': 'wiki-outlet-article',
                'data-testid': 'outlet-article'
              },
              componentProps.heading
            )
          }
        })
      )

      const outletReference = ref<{
        getElement: <T = { getSummary: () => string, getTagName: () => string }>() => T | undefined
      } | null>(null)
      const inspectedTagName = ref<string>('none')

      const inspectElement = () => {
        const resolvedInstance = outletReference.value?.getElement()
        inspectedTagName.value = resolvedInstance
          ? resolvedInstance.getTagName() + ': ' + resolvedInstance.getSummary()
          : 'undefined'
      }

      return {
        outletReference,
        inspectedTagName,
        inspectElement
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <DesignComponent
              ref="outletReference"
              name="wiki-outlet-article"
              :props="{ heading: 'Inspectable Dynamic Article' }"
            />
          </div>
          <div class="wiki-storybook-flex-align-center">
            <button
              type="button"
              class="wiki-storybook-button"
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
const canvas = within(canvasElement)
const articleElement = canvasElement.querySelector<HTMLElement>('[data-testid="outlet-article"]')
const inspectedTagSpan = canvasElement.querySelector<HTMLElement>('[data-testid="outlet-inspected-tag"]')

await expect(articleElement).toBeInTheDocument()
await expect(articleElement).toHaveClass('design-component')
expect(inspectedTagSpan?.textContent).toBe('none')

await step('Inspect resolved component instance via getElement()', async () => {
  const inspectButton = canvas.getByRole('button', { name: 'Inspect Element Tag' })
  await userEvent.click(inspectButton)
  expect(inspectedTagSpan?.textContent).toBe('article: Inspectable Dynamic Article')
})
      `
    },
    {
      id: 'ComponentOutletTestPropsAndFallthrough',
      name: {
        en: 'Test: Props merging, addList, falsy overrides and fallthrough attributes',
        ru: 'Тест: Слияние свойств, addList, falsy-значения и сквозные атрибуты'
      },
      setup: `
      ComponentStorage.addList([
        {
          name: 'wiki-outlet-test-merged',
          component: defineComponent({
            name: 'WikiOutletTestMerged',
            props: {
              label: { type: String, default: 'Component Default' },
              variant: { type: String, default: 'default' },
              count: { type: Number, default: 1 },
              active: { type: Boolean, default: false }
            },
            setup(componentProps: { label: string, variant: string, count: number, active: boolean }) {
              return () => h(
                'div',
                {
                  'data-testid': 'outlet-merged-item',
                  'data-variant': componentProps.variant,
                  'data-count': String(componentProps.count),
                  'data-active': String(componentProps.active),
                  'data-label': componentProps.label
                },
                componentProps.label
              )
            }
          }),
          props: {
            label: 'Storage Default Label',
            variant: 'storage-elevated',
            count: 10,
            active: true,
            class: 'storage-class',
            style: { '--storage-offset': '4px' }
          }
        },
        {
          name: 'wiki-outlet-test-plain',
          component: defineComponent({
            name: 'WikiOutletTestPlain',
            props: {
              status: { type: String, default: 'ready' }
            },
            setup(componentProps: { status: string }) {
              return () => h(
                'span',
                {
                  'data-testid': 'outlet-plain-item',
                  'data-status': componentProps.status
                },
                componentProps.status
              )
            }
          })
        }
      ])

      return {}
      `,
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Storage + runtime props + fallthrough attrs</div>
            <DesignComponent
              id="custom-outlet-host"
              name="wiki-outlet-test-merged"
              :props="{
                label: 'Runtime Override Label',
                class: 'runtime-class',
                style: { '--runtime-offset': '8px' }
              }"
              class="fallthrough-class"
              style="--fallthrough-offset: 12px;"
              data-custom="fallthrough-attr"
              aria-label="Merged Outlet Item"
            />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Falsy runtime overrides (0, false, empty string)</div>
            <DesignComponent
              name="wiki-outlet-test-merged"
              :props="{
                label: '',
                count: 0,
                active: false
              }"
            />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Plain registration without default or runtime props</div>
            <DesignComponent name="wiki-outlet-test-plain"/>
          </div>
        </div>
      `,
      play: `
const mergedItems = canvasElement.querySelectorAll<HTMLElement>('[data-testid="outlet-merged-item"]')
const plainItem = canvasElement.querySelector<HTMLElement>('[data-testid="outlet-plain-item"]')

await expect(mergedItems.length).toBe(2)
await expect(plainItem).toBeInTheDocument()

// 1. Merged storage defaults + runtime props + fallthrough attributes, classes, and styles
const firstMerged = mergedItems[0]
await expect(firstMerged).toHaveClass('design-component')
await expect(firstMerged).toHaveClass('storage-class')
await expect(firstMerged).toHaveClass('runtime-class')
await expect(firstMerged).toHaveClass('fallthrough-class')
await expect(firstMerged).toHaveAttribute('id', 'custom-outlet-host')
await expect(firstMerged).toHaveAttribute('data-custom', 'fallthrough-attr')
await expect(firstMerged).toHaveAttribute('aria-label', 'Merged Outlet Item')
await expect(firstMerged).toHaveAttribute('data-variant', 'storage-elevated')
await expect(firstMerged).toHaveAttribute('data-count', '10')
await expect(firstMerged).toHaveAttribute('data-active', 'true')
expect(firstMerged.textContent).toBe('Runtime Override Label')
expect(firstMerged.style.getPropertyValue('--storage-offset')).toBe('4px')
expect(firstMerged.style.getPropertyValue('--runtime-offset')).toBe('8px')
expect(firstMerged.style.getPropertyValue('--fallthrough-offset')).toBe('12px')

// 2. Falsy overrides (count: 0, active: false, label: '') are preserved over truthy storage defaults
const secondMerged = mergedItems[1]
await expect(secondMerged).toHaveClass('design-component')
await expect(secondMerged).toHaveClass('storage-class')
await expect(secondMerged).toHaveAttribute('data-variant', 'storage-elevated')
await expect(secondMerged).toHaveAttribute('data-count', '0')
await expect(secondMerged).toHaveAttribute('data-active', 'false')
await expect(secondMerged).toHaveAttribute('data-label', '')
expect(secondMerged.textContent).toBe('')

// 3. Plain registered component without storage defaults or runtime props uses its own prop defaults
await expect(plainItem).toHaveClass('design-component')
await expect(plainItem).toHaveAttribute('data-status', 'ready')
expect(plainItem?.textContent).toBe('ready')
      `
    },
    {
      id: 'ComponentOutletTestFallbackStates',
      name: {
        en: 'Test: Unregistered, empty and omitted name fallback states',
        ru: 'Тест: Резервные состояния при незарегистрированном, пустом и пропущенном name'
      },
      setup: `
      const emptyOutletReference = ref<{ getElement: () => Element | undefined } | null>(null)

      return {
        emptyOutletReference
      }
      `,
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Omitted name + default slot</div>
            <DesignComponent>
              <span data-testid="fallback-omitted">Fallback when name is omitted</span>
            </DesignComponent>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Empty name="" + default slot</div>
            <DesignComponent name="">
              <span data-testid="fallback-empty-name">Fallback when name is empty string</span>
            </DesignComponent>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Unregistered name + ignored props + default slot</div>
            <DesignComponent
              name="missing-component-key"
              :props="{ ignoredProp: 'value' }"
            >
              <span data-testid="fallback-unregistered">Fallback when component is unregistered</span>
            </DesignComponent>
          </div>
          <div
            class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding"
            data-testid="empty-fallback-host"
          >
            <DesignComponent
              ref="emptyOutletReference"
              name="missing-without-slot"
            />
          </div>
        </div>
      `,
      play: `
const omittedFallback = canvasElement.querySelector<HTMLElement>('[data-testid="fallback-omitted"]')
const emptyNameFallback = canvasElement.querySelector<HTMLElement>('[data-testid="fallback-empty-name"]')
const unregisteredFallback = canvasElement.querySelector<HTMLElement>('[data-testid="fallback-unregistered"]')
const emptyHost = canvasElement.querySelector<HTMLElement>('[data-testid="empty-fallback-host"]')

await expect(omittedFallback).toBeInTheDocument()
expect(omittedFallback?.textContent).toBe('Fallback when name is omitted')

await expect(emptyNameFallback).toBeInTheDocument()
expect(emptyNameFallback?.textContent).toBe('Fallback when name is empty string')

await expect(unregisteredFallback).toBeInTheDocument()
expect(unregisteredFallback?.textContent).toBe('Fallback when component is unregistered')

// Unregistered component without default slot renders no child element
await expect(emptyHost).toBeInTheDocument()
expect(emptyHost?.children.length).toBe(0)
      `
    },
    {
      id: 'ComponentOutletTestReactiveSwitching',
      name: {
        en: 'Test: Reactive component switching and runtime prop updates',
        ru: 'Тест: Реактивное переключение компонентов и обновление свойств'
      },
      setup: `
      ComponentStorage.add(
        'wiki-outlet-alpha',
        defineComponent({
          name: 'WikiOutletAlpha',
          props: {
            label: { type: String, default: 'Alpha Default' }
          },
          setup(componentProps: { label: string }) {
            return () => h(
              'button',
              {
                'type': 'button',
                'data-testid': 'outlet-dynamic-node'
              },
              componentProps.label
            )
          }
        }),
        {
          label: 'Alpha Storage Default'
        }
      )

      ComponentStorage.add(
        'wiki-outlet-beta',
        defineComponent({
          name: 'WikiOutletBeta',
          props: {
            label: { type: String, default: 'Beta Default' }
          },
          setup(componentProps: { label: string }) {
            return () => h(
              'article',
              {
                'data-testid': 'outlet-dynamic-node'
              },
              componentProps.label
            )
          }
        }),
        {
          label: 'Beta Storage Default'
        }
      )

      const activeName = ref<string>('wiki-outlet-alpha')
      const activeProps = ref<Record<string, string> | undefined>({
        label: 'Alpha Initial Runtime'
      })

      const showAlphaUpdated = () => {
        activeName.value = 'wiki-outlet-alpha'
        activeProps.value = { label: 'Alpha Updated Runtime' }
      }

      const showBetaDefault = () => {
        activeName.value = 'wiki-outlet-beta'
        activeProps.value = undefined
      }

      const showFallback = () => {
        activeName.value = 'unregistered-target'
        activeProps.value = undefined
      }

      return {
        activeName,
        activeProps,
        showAlphaUpdated,
        showBetaDefault,
        showFallback
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <button
              type="button"
              class="wiki-storybook-button"
              @click="showAlphaUpdated"
            >
              Update Alpha Props
            </button>
            <button
              type="button"
              class="wiki-storybook-button"
              @click="showBetaDefault"
            >
              Switch to Beta
            </button>
            <button
              type="button"
              class="wiki-storybook-button"
              @click="showFallback"
            >
              Switch to Fallback
            </button>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <DesignComponent
              :name="activeName"
              :props="activeProps"
            >
              <span data-testid="outlet-dynamic-fallback">Fallback Slot Active</span>
            </DesignComponent>
          </div>
        </div>
      `,
      play: `
const canvas = within(canvasElement)

// Initial state: Alpha component rendered as <button> with runtime prop override
const initialNode = canvasElement.querySelector<HTMLElement>('[data-testid="outlet-dynamic-node"]')
await expect(initialNode).toBeInTheDocument()
await expect(initialNode).toHaveClass('design-component')
expect(initialNode?.tagName.toLowerCase()).toBe('button')
expect(initialNode?.textContent).toBe('Alpha Initial Runtime')

await step('Update runtime props on Alpha component', async () => {
  const updateAlphaButton = canvas.getByRole('button', { name: 'Update Alpha Props' })
  await userEvent.click(updateAlphaButton)

  const updatedNode = canvasElement.querySelector<HTMLElement>('[data-testid="outlet-dynamic-node"]')
  expect(updatedNode?.tagName.toLowerCase()).toBe('button')
  expect(updatedNode?.textContent).toBe('Alpha Updated Runtime')
})

await step('Switch outlet target to Beta component with storage default props', async () => {
  const switchBetaButton = canvas.getByRole('button', { name: 'Switch to Beta' })
  await userEvent.click(switchBetaButton)

  const betaNode = canvasElement.querySelector<HTMLElement>('[data-testid="outlet-dynamic-node"]')
  await expect(betaNode).toBeInTheDocument()
  await expect(betaNode).toHaveClass('design-component')
  expect(betaNode?.tagName.toLowerCase()).toBe('article')
  expect(betaNode?.textContent).toBe('Beta Storage Default')
})

await step('Switch outlet target to unregistered name to render fallback slot', async () => {
  const switchFallbackButton = canvas.getByRole('button', { name: 'Switch to Fallback' })
  await userEvent.click(switchFallbackButton)

  const missingNode = canvasElement.querySelector('[data-testid="outlet-dynamic-node"]')
  const fallbackNode = canvasElement.querySelector<HTMLElement>('[data-testid="outlet-dynamic-fallback"]')
  expect(missingNode).toBeNull()
  await expect(fallbackNode).toBeInTheDocument()
  expect(fallbackNode?.textContent).toBe('Fallback Slot Active')
})

await step('Switch back to Alpha component', async () => {
  const updateAlphaButton = canvas.getByRole('button', { name: 'Update Alpha Props' })
  await userEvent.click(updateAlphaButton)

  const restoredNode = canvasElement.querySelector<HTMLElement>('[data-testid="outlet-dynamic-node"]')
  await expect(restoredNode).toBeInTheDocument()
  expect(restoredNode?.tagName.toLowerCase()).toBe('button')
  expect(restoredNode?.textContent).toBe('Alpha Updated Runtime')
})
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
