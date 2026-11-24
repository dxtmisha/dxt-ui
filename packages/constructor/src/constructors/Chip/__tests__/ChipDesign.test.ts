// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, reactive, type Ref } from 'vue'
import type { ConstrClasses, ConstrStyles } from '@dxtmisha/functional'

import { Button } from '../../Button'
import { Chip } from '../Chip'
import { ChipDesign } from '../ChipDesign'
import { defaultsChip, type ChipPropsBasic } from '../props'
import type { ChipClasses, ChipComponents, ChipExpose } from '../types'

/**
 * Inspectable ChipDesign subclass exposing protected item, initClasses, and initStyles for unit assertions.
 *
 * Проверяемый подкласс ChipDesign, открывающий защищённые item, initClasses и initStyles для модульных проверок.
 */
class InspectableChipDesign extends ChipDesign<
  ChipComponents,
  ChipExpose,
  ChipClasses,
  ChipPropsBasic
> {
  /**
   * Returns underlying logic orchestrator instance.
   *
   * Возвращает экземпляр оркестратора бизнес-логики.
   * @returns orchestrator instance / экземпляр оркестратора
   */
  get logicItem(): Button {
    return this.item
  }

  /**
   * Exposes initialized subclasses map.
   *
   * Предоставляет инициализированную карту подклассов.
   * @returns subclasses map / карта подклассов
   */
  getInitClasses(): Partial<ChipClasses> {
    return this.initClasses()
  }

  /**
   * Exposes initialized styles map.
   *
   * Предоставляет инициализированную карту стилей.
   * @returns styles map / карта стилей
   */
  getInitStyles(): ConstrStyles {
    return this.initStyles()
  }
}

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(unmount => unmount())
  vi.restoreAllMocks()
})

describe('ChipDesign', () => {
  it('should instantiate Chip as default ItemConstructor, bind ref to elementHtml, and expose event getters', async () => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    cleanups.push(() => container.remove())

    let designInstance!: InspectableChipDesign
    let elementHtmlRef!: Ref<HTMLElement | undefined>
    let exposedResult!: ChipExpose

    const Component = defineComponent({
      setup() {
        const props: ChipPropsBasic = reactive({
          ...defaultsChip,
          label: 'Filter tag',
          value: 'chip-value',
          detail: { group: 'filters' }
        })

        const classesToken = computed<ConstrClasses>(() => ({
          main: {
            'd1-chip': true
          }
        }))

        designInstance = new InspectableChipDesign('d1.chip', props, {
          classes: classesToken
        })

        exposedResult = designInstance.expose()
        elementHtmlRef = (exposedResult as unknown as { elementHtml: Ref<HTMLElement | undefined> }).elementHtml

        return designInstance.render()
      }
    })

    const app = createApp(Component)
    app.mount(container)
    cleanups.push(() => app.unmount())

    await nextTick()

    expect(designInstance.logicItem).toBeInstanceOf(Chip)
    expect(designInstance.logicItem).toBeInstanceOf(Button)

    const rootElement = container.querySelector('.d1-chip')
    expect(rootElement).not.toBeNull()
    expect(rootElement?.tagName.toLowerCase()).toBe('span')
    expect(rootElement?.getAttribute('data-value')).toBe('chip-value')
    expect(rootElement?.getAttribute('role')).toBe('button')
    expect(rootElement?.getAttribute('tabindex')).toBe('0')
    expect(elementHtmlRef.value).toBe(rootElement)

    expect(typeof exposedResult.getValue).toBe('function')
    expect(typeof exposedResult.getDetail).toBe('function')
    expect(exposedResult.getValue?.()).toBe('chip-value')
    expect(exposedResult.getDetail?.()).toEqual({ group: 'filters' })
  })

  it('should accept custom ItemConstructor override via Dependency Injection', async () => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    cleanups.push(() => container.remove())

    class CustomChip extends Chip {
      readonly customMarker = true
    }

    let designInstance!: InspectableChipDesign

    const Component = defineComponent({
      setup() {
        const props: ChipPropsBasic = reactive({ ...defaultsChip, label: 'Custom' })

        designInstance = new InspectableChipDesign(
          'd1.chip',
          props,
          undefined,
          CustomChip
        )

        return designInstance.render()
      }
    })

    const app = createApp(Component)
    app.mount(container)
    cleanups.push(() => app.unmount())

    await nextTick()

    expect(designInstance.logicItem).toBeInstanceOf(CustomChip)
    expect((designInstance.logicItem as CustomChip).customMarker).toBe(true)
  })

  it('should initialize chip BEM subclasses and empty default styles', async () => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    cleanups.push(() => container.remove())

    let designClasses!: Partial<ChipClasses>
    let designStyles!: ConstrStyles

    const Component = defineComponent({
      setup() {
        const props: ChipPropsBasic = reactive({ ...defaultsChip })
        const design = new InspectableChipDesign('d1.chip', props)

        designClasses = design.getInitClasses()
        designStyles = design.getInitStyles()

        return design.render()
      }
    })

    const app = createApp(Component)
    app.mount(container)
    cleanups.push(() => app.unmount())

    await nextTick()

    expect(designClasses.label).toBe('d1-chip__label')
    expect(designClasses.icon).toBe('d1-chip__icon')
    expect(designClasses.trailing).toBe('d1-chip__trailing')
    expect(designClasses.loading).toBe('d1-chip__loading')
    expect(designStyles).toEqual({})
  })

  it('should merge external attrs class, style, and onClick handlers with Chip binds', async () => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    cleanups.push(() => container.remove())

    const externalClick = vi.fn()
    const emitClick = vi.fn()

    const Component = defineComponent({
      inheritAttrs: false,
      setup() {
        const props: ChipPropsBasic = reactive({
          ...defaultsChip,
          label: 'Merge Test'
        })

        const classesToken = computed<ConstrClasses>(() => ({
          main: {
            'd1-chip': true
          }
        }))

        const design = new ChipDesign<
          ChipComponents,
          ChipExpose,
          ChipClasses,
          ChipPropsBasic
        >('d1.chip', props, {
          classes: classesToken,
          emits: emitClick
        })

        return design.render()
      }
    })

    const app = createApp({
      render() {
        return h(Component, {
          class: 'custom-chip-class',
          style: 'color: red',
          onClick: externalClick
        })
      }
    })

    app.mount(container)
    cleanups.push(() => app.unmount())

    await nextTick()

    const chipElement = container.querySelector('span.d1-chip') as HTMLSpanElement
    expect(chipElement).not.toBeNull()
    expect(chipElement.classList.contains('d1-chip')).toBe(true)
    expect(chipElement.classList.contains('custom-chip-class')).toBe(true)
    expect(chipElement.getAttribute('style')).toContain('color: red')

    chipElement.click()
    expect(externalClick).toHaveBeenCalledTimes(1)
    expect(emitClick).toHaveBeenCalledWith('click', expect.any(Object), expect.any(Object))
    expect(emitClick).toHaveBeenCalledWith('clickLite', expect.any(Object))
  })
})
