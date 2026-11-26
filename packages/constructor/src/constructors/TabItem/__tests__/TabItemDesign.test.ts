// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, reactive, type Ref } from 'vue'
import type { ConstrClasses, ConstrStyles } from '@dxtmisha/functional'

import { defaultsTabItem, type TabItemPropsBasic } from '../props'
import { TabItem } from '../TabItem'
import { TabItemDesign } from '../TabItemDesign'
import type {
  TabItemClasses,
  TabItemComponents,
  TabItemExpose
} from '../types'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(unmount => unmount())
  vi.restoreAllMocks()
})

/**
 * Inspectable TabItemDesign exposing protected methods and orchestrator instance for unit verification.
 *
 * Проверяемый TabItemDesign, открывающий защищённые методы и экземпляр оркестратора для модульного тестирования.
 */
class InspectableTabItemDesign extends TabItemDesign<
  TabItemComponents,
  TabItemExpose,
  TabItemClasses,
  TabItemPropsBasic
> {
  /**
   * Returns logic orchestrator instance.
   *
   * Возвращает экземпляр логического оркестратора.
   * @returns TabItem orchestrator instance / экземпляр оркестратора TabItem
   */
  get orchestrator(): TabItem {
    return this.item
  }

  /**
   * Calls protected initClasses for verification.
   *
   * Вызывает защищённый метод initClasses для проверки.
   * @returns class map / карта классов
   */
  getInitClasses(): Partial<TabItemClasses> {
    return this.initClasses()
  }

  /**
   * Calls protected initStyles for verification.
   *
   * Вызывает защищённый метод initStyles для проверки.
   * @returns styles object / объект стилей
   */
  getInitStyles(): ConstrStyles {
    return this.initStyles()
  }
}

describe('TabItemDesign', () => {
  it('should render element in DOM, bind ref to elementHtml, and expose event getters', async () => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    cleanups.push(() => container.remove())

    let elementHtmlRef!: Ref<HTMLElement | undefined>
    let exposedResult!: TabItemExpose

    const Component = defineComponent({
      setup() {
        const props: TabItemPropsBasic = reactive({
          ...defaultsTabItem,
          label: 'Details',
          index: 'details-tab',
          value: 'details-value',
          detail: { tab: 1 }
        })

        const classesToken = computed<ConstrClasses>(() => ({
          main: {
            'd1-tabItem': true
          }
        }))

        const design = new TabItemDesign<
          TabItemComponents,
          TabItemExpose,
          TabItemClasses,
          TabItemPropsBasic
        >('d1.tabItem', props, {
          classes: classesToken
        })

        exposedResult = design.expose()
        elementHtmlRef = (exposedResult as TabItemExpose & { elementHtml: Ref<HTMLElement | undefined> }).elementHtml

        return design.render()
      }
    })

    const app = createApp(Component)
    app.mount(container)
    cleanups.push(() => app.unmount())
    await nextTick()

    const rootElement = container.querySelector('.d1-tabItem')
    expect(rootElement).not.toBeNull()
    expect(rootElement?.tagName.toLowerCase()).toBe('button')
    expect(rootElement?.getAttribute('type')).toBe('button')
    expect(rootElement?.getAttribute('data-value')).toBe('details-tab')
    expect(rootElement?.getAttribute('role')).toBe('tab')
    expect(elementHtmlRef.value).toBe(rootElement)

    expect(typeof exposedResult.getValue).toBe('function')
    expect(typeof exposedResult.getDetail).toBe('function')
    expect(exposedResult.getValue?.()).toBe('details-value')
    expect(exposedResult.getDetail?.()).toEqual({ tab: 1 })
  })

  it('should initialize design subclasses and empty styles object', async () => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    cleanups.push(() => container.remove())

    let designClasses!: Partial<TabItemClasses>
    let designStyles!: ConstrStyles

    const Component = defineComponent({
      setup() {
        const props: TabItemPropsBasic = reactive({})
        const design = new InspectableTabItemDesign('d1.tabItem', props)

        designClasses = design.getInitClasses()
        designStyles = design.getInitStyles()

        return design.render()
      }
    })

    const app = createApp(Component)
    app.mount(container)
    cleanups.push(() => app.unmount())
    await nextTick()

    expect(designClasses.main).toEqual({
      'd1-tabItem--loading': false
    })
    expect(designClasses.label).toBe('d1-tabItem__label')
    expect(designClasses.icon).toBe('d1-tabItem__icon')
    expect(designClasses.badge).toBe('d1-tabItem__badge')
    expect(designStyles).toEqual({})
  })

  it('should preserve lazy instantiation of optional inclusions during minimal render', async () => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    cleanups.push(() => container.remove())

    let designInstance!: InspectableTabItemDesign

    const Component = defineComponent({
      setup() {
        const props: TabItemPropsBasic = reactive({
          disabled: true
        })

        designInstance = new InspectableTabItemDesign('d1.tabItem', props)
        return designInstance.render()
      }
    })

    const app = createApp(Component)
    app.mount(container)
    cleanups.push(() => app.unmount())
    await nextTick()

    expect(designInstance.orchestrator.hasInstance('icon')).toBe(false)
    expect(designInstance.orchestrator.hasInstance('label')).toBe(false)
    expect(designInstance.orchestrator.hasInstance('badge')).toBe(false)
    expect(designInstance.orchestrator.hasInstance('ripple')).toBe(false)
    expect(designInstance.orchestrator.hasInstance('skeleton')).toBe(false)
    expect(designInstance.orchestrator.hasInstance('event')).toBe(true)
  })

  it('should merge external attrs class, style, and onClick with TabItem binds via mergeProps', async () => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    cleanups.push(() => container.remove())

    const externalClick = vi.fn()
    const emitClick = vi.fn()

    const Component = defineComponent({
      inheritAttrs: false,
      setup() {
        const props: TabItemPropsBasic = reactive({
          label: 'Merge Tab',
          value: 'merge-tab'
        })

        const classesToken = computed<ConstrClasses>(() => ({
          main: {
            'd1-tabItem': true
          }
        }))

        const design = new TabItemDesign<
          TabItemComponents,
          TabItemExpose,
          TabItemClasses,
          TabItemPropsBasic
        >('d1.tabItem', props, {
          classes: classesToken,
          emits: emitClick
        })

        return design.render()
      }
    })

    const app = createApp({
      render() {
        return h(Component, {
          class: 'custom-tab-cls',
          style: 'color: red',
          onClick: externalClick
        })
      }
    })

    app.mount(container)
    cleanups.push(() => app.unmount())
    await nextTick()

    const buttonElement = container.querySelector('button') as HTMLButtonElement
    expect(buttonElement).not.toBeNull()
    expect(buttonElement.classList.contains('d1-tabItem')).toBe(true)
    expect(buttonElement.classList.contains('custom-tab-cls')).toBe(true)
    expect(buttonElement.getAttribute('style')).toContain('color: red')

    buttonElement.click()
    expect(externalClick).toHaveBeenCalledTimes(1)
    expect(emitClick).toHaveBeenCalledWith('click', expect.any(Object), expect.any(Object))
    expect(emitClick).toHaveBeenCalledWith('clickLite', expect.any(Object))
  })

  it('should support custom ItemConstructor dependency injection', async () => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    cleanups.push(() => container.remove())

    class CustomTabItem extends TabItem {
      override get tag(): string {
        return 'article'
      }
    }

    const Component = defineComponent({
      setup() {
        const props: TabItemPropsBasic = reactive({ label: 'Custom Item' })
        const design = new TabItemDesign<
          TabItemComponents,
          TabItemExpose,
          TabItemClasses,
          TabItemPropsBasic
        >('d1.tabItem', props, undefined, CustomTabItem)

        return design.render()
      }
    })

    const app = createApp(Component)
    app.mount(container)
    cleanups.push(() => app.unmount())
    await nextTick()

    expect(container.querySelector('article')?.textContent).toBe('Custom Item')
  })
})
