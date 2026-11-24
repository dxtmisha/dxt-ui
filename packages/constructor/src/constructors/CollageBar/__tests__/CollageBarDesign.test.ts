// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { createApp, defineComponent, h, nextTick, reactive } from 'vue'
import type { ConstrStyles } from '@dxtmisha/functional'

import { CollageBar } from '../CollageBar'
import { CollageBarDesign } from '../CollageBarDesign'
import type { CollageBarProps } from '../props'
import type {
  CollageBarClasses,
  CollageBarComponents,
  CollageBarExpose
} from '../types'

/**
 * Inspectable CollageBarDesign subclass exposing protected initialization hooks for unit testing.
 *
 * Проверяемый подкласс CollageBarDesign, открывающий защищённые хуки инициализации для модульного тестирования.
 */
class InspectableCollageBarDesign extends CollageBarDesign<
  CollageBarComponents,
  CollageBarExpose,
  CollageBarClasses,
  CollageBarProps
> {
  /**
   * Returns computed class map configuration.
   *
   * Возвращает конфигурацию карты классов.
   * @returns partial class map / частичная карта классов
   */
  getClassesConfig(): Partial<CollageBarClasses> {
    return this.initClasses()
  }

  /**
   * Returns computed styles configuration.
   *
   * Возвращает конфигурацию стилей.
   * @returns styles map / карта стилей
   */
  getStylesConfig(): ConstrStyles {
    return this.initStyles()
  }

  /**
   * Returns internal logic orchestrator instance.
   *
   * Возвращает внутренний экземпляр оркестратора логики.
   * @returns CollageBar orchestrator / оркестратор CollageBar
   */
  getLogicItem(): CollageBar {
    return this.item
  }
}

/** Cleanup callbacks for mounted Vue applications / Обработчики очистки смонтированных приложений Vue */
const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(unmount => unmount())
  document.body.innerHTML = ''
  vi.restoreAllMocks()
})

describe('CollageBarDesign (unit)', () => {
  it('should initialize classes, empty styles, and expose event methods with elementHtml ref', async () => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    cleanups.push(() => container.remove())

    let exposed!: CollageBarExpose & { elementHtml?: { value?: HTMLElement } }
    let classes!: Partial<CollageBarClasses>
    let styles!: ConstrStyles

    const Component = defineComponent({
      setup() {
        const props: CollageBarProps = reactive({
          value: 'bar-1',
          detail: { index: 3 }
        })
        const design = new InspectableCollageBarDesign('d1.collageBar', props)

        classes = design.getClassesConfig()
        styles = design.getStylesConfig()
        exposed = design.expose()

        return design.render()
      }
    })

    const app = createApp(Component)
    app.mount(container)
    cleanups.push(() => app.unmount())
    await nextTick()

    expect(classes.main).toEqual({})
    expect(classes.context).toBe('d1-collageBar__context')
    expect(classes.label).toBe('d1-collageBar__label')
    expect(classes.description).toBe('d1-collageBar__description')
    expect(classes.button).toBe('d1-collageBar__button')
    expect(styles).toEqual({})

    expect(exposed.getValue?.()).toBe('bar-1')
    expect(exposed.getDetail?.()).toEqual({ index: 3 })
    expect(exposed.elementHtml?.value).toBeInstanceOf(HTMLElement)
    expect(exposed.elementHtml?.value?.tagName).toBe('FIGCAPTION')
  })

  it('should return empty arrays from renderContext and renderBody when no content or slots exist', async () => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    cleanups.push(() => container.remove())

    let designInstance!: InspectableCollageBarDesign

    const Component = defineComponent({
      setup() {
        const props: CollageBarProps = reactive({})
        designInstance = new InspectableCollageBarDesign('d1.collageBar', props)

        return designInstance.render()
      }
    })

    const app = createApp(Component)
    app.mount(container)
    cleanups.push(() => app.unmount())
    await nextTick()

    expect(designInstance.renderBody()).toEqual([])
    expect(designInstance.renderContext()).toEqual([])
    expect(container.querySelector('.d1-collageBar__context')).toBeNull()
    expect(designInstance.getLogicItem().hasInstance('label')).toBe(false)
    expect(designInstance.getLogicItem().hasInstance('description')).toBe(false)
    expect(designInstance.getLogicItem().hasInstance('button')).toBe(false)
    expect(designInstance.getLogicItem().hasInstance('event')).toBe(false)
  })

  it('should render context wrapper around label, description, and body slot and merge external attrs', async () => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    cleanups.push(() => container.remove())

    let bodyNodesCount = 0
    let contextNodesCount = 0

    const Component = defineComponent({
      setup() {
        const props: CollageBarProps = reactive({
          label: 'Design Title',
          description: 'Design Description',
          tag: 'section'
        })
        const design = new InspectableCollageBarDesign('d1.collageBar', props)
        const render = design.render()

        return () => {
          bodyNodesCount = design.renderBody().length
          contextNodesCount = design.renderContext().length
          return render()
        }
      }
    })

    const Root = defineComponent({
      setup() {
        return () => h(
          Component,
          {
            'data-testid': 'collage-bar-root',
            'class': 'external-class',
            'style': { opacity: '0.9' }
          },
          {
            body: () => h('p', { class: 'custom-body' }, 'Body Slot'),
            trailing: () => h('span', { class: 'custom-trailing' }, 'Trailing Slot')
          }
        )
      }
    })

    const app = createApp(Root)
    app.mount(container)
    cleanups.push(() => app.unmount())
    await nextTick()

    const root = container.firstElementChild as HTMLElement
    expect(root.tagName).toBe('SECTION')
    expect(root.getAttribute('data-testid')).toBe('collage-bar-root')
    expect(root.classList.contains('external-class')).toBe(true)
    expect(root.style.opacity).toBe('0.9')

    expect(bodyNodesCount).toBe(3)
    expect(contextNodesCount).toBe(1)

    const context = root.querySelector('.d1-collageBar__context')
    expect(context).not.toBeNull()
    expect(context?.querySelector('.d1-collageBar__label')?.textContent).toBe('Design Title')
    expect(context?.querySelector('.d1-collageBar__description')?.textContent).toBe('Design Description')
    expect(context?.querySelector('.custom-body')?.textContent).toBe('Body Slot')
    expect(context?.querySelector('.custom-trailing')).toBeNull()
    expect(root.querySelector('.custom-trailing')?.textContent).toBe('Trailing Slot')
  })

  it('should support custom ItemConstructor injection', async () => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    cleanups.push(() => container.remove())

    class CustomCollageBar extends CollageBar {
      override get tag(): string {
        return 'aside'
      }
    }

    const Component = defineComponent({
      setup() {
        const props: CollageBarProps = reactive({ label: 'Injected' })
        const design = new CollageBarDesign(
          'd1.collageBar',
          props,
          undefined,
          CustomCollageBar
        )

        return design.render()
      }
    })

    const app = createApp(Component)
    app.mount(container)
    cleanups.push(() => app.unmount())
    await nextTick()

    expect(container.firstElementChild?.tagName).toBe('ASIDE')
  })
})
