// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, reactive, type Ref } from 'vue'
import type { ConstrClasses, ConstrStyles } from '@dxtmisha/functional'

import { TabItemDesign } from '../../TabItem'
import { defaultsSegmentControlItem, type SegmentControlItemPropsBasic } from '../props'
import { SegmentControlItem } from '../SegmentControlItem'
import { SegmentControlItemDesign } from '../SegmentControlItemDesign'
import type {
  SegmentControlItemClasses,
  SegmentControlItemComponents,
  SegmentControlItemExpose
} from '../types'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(unmount => unmount())
  vi.restoreAllMocks()
})

/**
 * Inspectable SegmentControlItemDesign exposing protected methods and orchestrator instance for unit verification.
 *
 * Проверяемый SegmentControlItemDesign, открывающий защищённые методы и экземпляр оркестратора для модульного тестирования.
 */
class InspectableSegmentControlItemDesign extends SegmentControlItemDesign<
  SegmentControlItemComponents,
  SegmentControlItemExpose,
  SegmentControlItemClasses,
  SegmentControlItemPropsBasic
> {
  /**
   * Returns logic orchestrator instance.
   *
   * Возвращает экземпляр логического оркестратора.
   * @returns SegmentControlItem orchestrator instance / экземпляр оркестратора SegmentControlItem
   */
  get orchestrator(): SegmentControlItem {
    return this.item
  }

  /**
   * Calls protected initClasses for verification.
   *
   * Вызывает защищённый метод initClasses для проверки.
   * @returns class map / карта классов
   */
  getInitClasses(): Partial<SegmentControlItemClasses> {
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

describe('SegmentControlItemDesign', () => {
  it('should inherit TabItemDesign, instantiate SegmentControlItem by default, bind ref to elementHtml, and expose event getters', async () => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    cleanups.push(() => container.remove())

    let designInstance!: InspectableSegmentControlItemDesign
    let elementHtmlRef!: Ref<HTMLElement | undefined>
    let exposedResult!: SegmentControlItemExpose

    const Component = defineComponent({
      setup() {
        const props: SegmentControlItemPropsBasic = reactive({
          ...defaultsSegmentControlItem,
          label: 'Quarterly',
          index: 'quarterly-segment',
          value: 'quarterly-value',
          detail: { quarter: 1 }
        })

        const classesToken = computed<ConstrClasses>(() => ({
          main: {
            'd1-segmentControlItem': true
          }
        }))

        designInstance = new InspectableSegmentControlItemDesign('d1.segmentControlItem', props, {
          classes: classesToken
        })

        exposedResult = designInstance.expose()
        elementHtmlRef = (exposedResult as SegmentControlItemExpose & { elementHtml: Ref<HTMLElement | undefined> }).elementHtml

        return designInstance.render()
      }
    })

    const app = createApp(Component)
    app.mount(container)
    cleanups.push(() => app.unmount())
    await nextTick()

    expect(designInstance).toBeInstanceOf(SegmentControlItemDesign)
    expect(designInstance).toBeInstanceOf(TabItemDesign)
    expect(designInstance.orchestrator).toBeInstanceOf(SegmentControlItem)

    const rootElement = container.querySelector('.d1-segmentControlItem')
    expect(rootElement).not.toBeNull()
    expect(rootElement?.tagName.toLowerCase()).toBe('button')
    expect(rootElement?.getAttribute('type')).toBe('button')
    expect(rootElement?.getAttribute('data-value')).toBe('quarterly-segment')
    expect(rootElement?.getAttribute('role')).toBe('tab')
    expect(elementHtmlRef.value).toBe(rootElement)

    expect(typeof exposedResult.getValue).toBe('function')
    expect(typeof exposedResult.getDetail).toBe('function')
    expect(exposedResult.getValue?.()).toBe('quarterly-value')
    expect(exposedResult.getDetail?.()).toEqual({ quarter: 1 })
  })

  it('should initialize design subclasses under segmentControlItem namespace and empty styles object', async () => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    cleanups.push(() => container.remove())

    let designClasses!: Partial<SegmentControlItemClasses>
    let designStyles!: ConstrStyles

    const Component = defineComponent({
      setup() {
        const props: SegmentControlItemPropsBasic = reactive({})
        const design = new InspectableSegmentControlItemDesign('d1.segmentControlItem', props)

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
      'd1-segmentControlItem--loading': false
    })
    expect(designClasses.label).toBe('d1-segmentControlItem__label')
    expect(designClasses.icon).toBe('d1-segmentControlItem__icon')
    expect(designClasses.badge).toBe('d1-segmentControlItem__badge')
    expect(designStyles).toEqual({})
  })

  it('should preserve lazy instantiation of optional inclusions during minimal render', async () => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    cleanups.push(() => container.remove())

    let designInstance!: InspectableSegmentControlItemDesign

    const Component = defineComponent({
      setup() {
        const props: SegmentControlItemPropsBasic = reactive({
          disabled: true
        })

        designInstance = new InspectableSegmentControlItemDesign('d1.segmentControlItem', props)
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

  it('should merge external attrs class, style, and onClick with SegmentControlItem binds via mergeProps', async () => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    cleanups.push(() => container.remove())

    const externalClick = vi.fn()
    const emitClick = vi.fn()

    const Component = defineComponent({
      inheritAttrs: false,
      setup() {
        const props: SegmentControlItemPropsBasic = reactive({
          label: 'Merge Segment',
          value: 'merge-segment'
        })

        const classesToken = computed<ConstrClasses>(() => ({
          main: {
            'd1-segmentControlItem': true
          }
        }))

        const design = new SegmentControlItemDesign<
          SegmentControlItemComponents,
          SegmentControlItemExpose,
          SegmentControlItemClasses,
          SegmentControlItemPropsBasic
        >('d1.segmentControlItem', props, {
          classes: classesToken,
          emits: emitClick
        })

        return design.render()
      }
    })

    const app = createApp({
      render() {
        return h(Component, {
          class: 'custom-segment-cls',
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
    expect(buttonElement.classList.contains('d1-segmentControlItem')).toBe(true)
    expect(buttonElement.classList.contains('custom-segment-cls')).toBe(true)
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

    class CustomSegmentControlItem extends SegmentControlItem {
      override get tag(): string {
        return 'article'
      }
    }

    const Component = defineComponent({
      setup() {
        const props: SegmentControlItemPropsBasic = reactive({ label: 'Custom Segment' })
        const design = new SegmentControlItemDesign<
          SegmentControlItemComponents,
          SegmentControlItemExpose,
          SegmentControlItemClasses,
          SegmentControlItemPropsBasic
        >('d1.segmentControlItem', props, undefined, CustomSegmentControlItem)

        return design.render()
      }
    })

    const app = createApp(Component)
    app.mount(container)
    cleanups.push(() => app.unmount())
    await nextTick()

    expect(container.querySelector('article')?.textContent).toBe('Custom Segment')
  })
})
