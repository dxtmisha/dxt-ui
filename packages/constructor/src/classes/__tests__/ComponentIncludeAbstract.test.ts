// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { reactive, ref, shallowRef, type VNode } from 'vue'
import { type ConstrBind, type DesignComponents, DesignLifecycleAbstract, DesignName } from '@dxtmisha/functional'
import { ComponentIncludeAbstract } from '../ComponentIncludeAbstract'
import type { ComponentIncludeExposeItem } from '../../types/componentInclude'

/** Test properties interface / Интерфейс тестовых свойств */
interface TestProps {
  /** Custom value / Пользовательское значение */
  value?: string
  /** Empty optional field / Пустое опциональное поле */
  emptyField?: string
  /** Sub-component attributes / Атрибуты субкомпонента */
  subAttrs?: ConstrBind<TestExtraProps>
}

/** Test extra properties interface / Интерфейс дополнительных тестовых свойств */
interface TestExtraProps {
  /** Data custom attribute / Пользовательский data-атрибут */
  'data-custom'?: string
  /** Aria expanded state / Состояние aria-expanded */
  'aria-expanded'?: boolean
  /** CSS class / CSS-класс */
  'class'?: string
  /** Click handler / Обработчик клика */
  'onClick'?: (...args: unknown[]) => void
}

/** Test exposed methods interface / Интерфейс экспортируемых тестовых методов */
interface TestExpose {
  /** Focus method / Метод фокусировки */
  focus: () => boolean
  /** String value getter / Геттер строкового значения */
  getValue: () => string
  /** Numeric count getter / Геттер числового счётчика */
  getCount: () => number
  /** Raw object getter / Геттер сырого объекта */
  getRaw: (prefix?: string) => unknown
  /** Optional string getter without default / Опциональный геттер строки без значения по умолчанию */
  getOptionalString?: () => string | undefined
  /** Optional number getter without default / Опциональный геттер числа без значения по умолчанию */
  getOptionalNumber?: () => number | undefined
}

/**
 * Concrete test implementation of ComponentIncludeAbstract.
 *
 * Конкретная тестовая реализация ComponentIncludeAbstract.
 */
class TestComponentInclude extends ComponentIncludeAbstract<
  TestProps,
  TestExtraProps,
  TestExpose
> {
  protected readonly name = 'test-sub'
  protected readonly propsAttrsName = 'subAttrs' as const
  protected override readonly exposeItems: ComponentIncludeExposeItem[] = [
    { name: 'focus', method: 'focus', type: 'boolean', defaultValue: false },
    { name: 'getValue', method: 'value', type: 'string', defaultValue: 'default' },
    { name: 'getCount', type: 'number', defaultValue: 0 },
    { name: 'getRaw', defaultValue: null },
    { name: 'getOptionalString', type: 'string' },
    { name: 'getOptionalNumber', type: 'number' }
  ]

  /**
   * Exposes getAttrs for unit testing.
   *
   * Предоставляет getAttrs для модульного тестирования.
   * @param attrs override attributes / переопределяющие атрибуты
   * @returns merged attributes / объединённые атрибуты
   */
  public testGetAttrs(attrs?: Partial<ConstrBind<TestExtraProps>>): Partial<ConstrBind<TestExtraProps>> {
    return this.getAttrs(attrs)
  }

  /**
   * Exposes getClassName for unit testing.
   *
   * Предоставляет getClassName для модульного тестирования.
   * @returns BEM class name / имя класса по BEM
   */
  public testGetClassName(): string {
    return this.getClassName()
  }

  /**
   * Exposes getExtra for unit testing.
   *
   * Предоставляет getExtra для модульного тестирования.
   * @returns extra attributes / дополнительные атрибуты
   */
  public testGetExtra(): Partial<ConstrBind<TestExtraProps>> | undefined {
    return this.getExtra()
  }

  /**
   * Exposes getProps for unit testing.
   *
   * Предоставляет getProps для модульного тестирования.
   * @returns cleaned properties / очищенные свойства
   */
  public testGetProps(): TestProps {
    return this.getProps()
  }

  /**
   * Exposes getPropsAttrs for unit testing.
   *
   * Предоставляет getPropsAttrs для модульного тестирования.
   * @returns sub-component attributes / атрибуты субкомпонента
   */
  public testGetPropsAttrs(): ConstrBind<TestProps> | undefined {
    return this.getPropsAttrs()
  }

  /**
   * Sets the internal element reference value for testing.
   *
   * Устанавливает внутреннее значение ссылки на элемент для тестирования.
   * @param value element instance / экземпляр элемента
   */
  public setElementValue(value?: ConstrBind<TestExpose>): void {
    this.element.value = value
  }
}

/**
 * Minimal implementation without element ref or propsAttrsName.
 *
 * Минимальная реализация без ссылки на элемент и без propsAttrsName.
 */
class MinimalComponentInclude extends ComponentIncludeAbstract<TestProps, TestExtraProps> {
  protected override readonly hasInitElement = false
  protected readonly name = 'minimal'
  protected readonly propsAttrsName = undefined
}

describe('ComponentIncludeAbstract', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('Standard functional requirements (Happy path)', () => {
    it('should return the BEM sub-element class name via getClassName()', () => {
      const include = new TestComponentInclude({}, new DesignName('parent.class'))
      expect(include.testGetClassName()).toBe('parent-class__test-sub')
      expect(include.is).toBe(true)
    })

    it('should resolve and strip undefined properties in getProps()', () => {
      const getProperties = (): TestProps => ({ value: 'active', emptyField: undefined })
      const include = new TestComponentInclude(getProperties, new DesignName('parent.class'))

      expect(include.testGetProps()).toEqual({ value: 'active' })
    })

    it('should extract custom attributes from props via getPropsAttrs()', () => {
      const props: TestProps = { subAttrs: { 'data-custom': 'hello' } }
      const include = new TestComponentInclude(props, new DesignName('parent.class'))

      expect(include.testGetPropsAttrs()).toEqual({ 'data-custom': 'hello' })
    })

    it('should resolve reactive and function extra attributes via getExtra()', () => {
      const extraRef = ref<Partial<ConstrBind<TestExtraProps>>>({ 'aria-expanded': true })
      const include = new TestComponentInclude({}, new DesignName('parent.class'), undefined, extraRef)

      expect(include.testGetExtra()).toEqual({ 'aria-expanded': true })
    })

    it('should construct reactive binds including element ref and merge override attrs in getAttrs()', () => {
      const include = new TestComponentInclude(
        { subAttrs: { 'data-custom': 'from-props' } },
        new DesignName('parent.class')
      )
      const binds = include.binds.value

      expect(binds.ref).toBeDefined()
      expect(binds.class).toBe('parent-class__test-sub')
      expect(binds['data-custom']).toBe('from-props')

      const merged = include.testGetAttrs({ 'class': 'custom-override', 'aria-expanded': true })
      expect(merged['aria-expanded']).toBe(true)
      expect(merged['data-custom']).toBe('from-props')
      expect(merged.class).toContain('parent-class__test-sub')
      expect(merged.class).toContain('custom-override')
    })

    it('should compose event handlers across extra, propsAttrs, and call-site attrs via mergeProps without overwriting', () => {
      const callOrder: string[] = []
      const extraClick = vi.fn(() => callOrder.push('extra'))
      const propsClick = vi.fn(() => callOrder.push('props'))
      const callSiteClick = vi.fn(() => callOrder.push('callSite'))

      const include = new TestComponentInclude(
        {
          subAttrs: {
            'data-custom': undefined,
            'onClick': propsClick
          }
        },
        new DesignName('parent.class'),
        undefined,
        {
          'data-custom': 'preserved-from-extra',
          'onClick': extraClick
        }
      )

      const binds = include.binds.value
      expect(binds['data-custom']).toBe('preserved-from-extra')
      expect(Array.isArray(binds.onClick)).toBe(true)

      const merged = include.testGetAttrs({ onClick: callSiteClick })
      const handlers = Array.isArray(merged.onClick) ? merged.onClick : [merged.onClick]
      for (const handler of handlers) {
        if (typeof handler === 'function') {
          handler()
        }
      }

      expect(extraClick).toHaveBeenCalledOnce()
      expect(propsClick).toHaveBeenCalledOnce()
      expect(callSiteClick).toHaveBeenCalledOnce()
      expect(callOrder).toEqual(['callSite', 'extra', 'props'])
    })

    it('should proxy and cast exposed sub-component methods across boolean, string, number, and default types', () => {
      const include = new TestComponentInclude({}, new DesignName('parent.class'))
      const expose = include.expose

      expect(expose.focus()).toBe(false)
      expect(expose.getValue()).toBe('default')
      expect(expose.getCount()).toBe(0)
      expect(expose.getRaw()).toBeNull()

      const mockFocus = vi.fn().mockReturnValue(1)
      const mockValue = vi.fn().mockReturnValue(42)
      const mockCount = vi.fn().mockReturnValue('7')
      const mockRaw = vi.fn((prefix?: string) => ({ prefix }))

      include.setElementValue({
        focus: mockFocus,
        value: mockValue,
        getCount: mockCount,
        getRaw: mockRaw
      } as unknown as ConstrBind<TestExpose>)

      expect(expose.focus()).toBe(true)
      expect(mockFocus).toHaveBeenCalledOnce()

      expect(expose.getValue()).toBe('42')
      expect(mockValue).toHaveBeenCalledOnce()

      expect(expose.getCount()).toBe(7)
      expect(mockCount).toHaveBeenCalledOnce()

      expect(expose.getRaw('item')).toEqual({ prefix: 'item' })
      expect(mockRaw).toHaveBeenCalledExactlyOnceWith('item')
      expect(include.getElement()).toBeDefined()
    })

    it('should delegate rendering to DesignComponents.render when components are provided and isShow returns true', () => {
      const mockedVNode = { type: 'div' } as unknown as VNode
      const renderMock = vi.fn().mockReturnValue([mockedVNode])
      const componentsMock = {
        render: renderMock
      } as unknown as DesignComponents<Record<string, object>, TestProps>

      const include = new TestComponentInclude(
        {},
        new DesignName('parent.class'),
        componentsMock,
        undefined,
        'default-idx'
      )
      const result = include.render()

      expect(renderMock).toHaveBeenCalledWith(
        'test-sub',
        expect.objectContaining({ class: 'parent-class__test-sub' }),
        undefined,
        'default-idx'
      )
      expect(result).toEqual([mockedVNode])
    })
  })

  describe('Boundary values, optional configurations, and fallback branches', () => {
    it('should omit ref in binds when hasInitElement is false and return undefined when propsAttrsName is absent', () => {
      const minimal = new MinimalComponentInclude(undefined, new DesignName('parent.class'))

      expect(minimal.binds.value.ref).toBeUndefined()
      expect(minimal.binds.value.class).toBe('parent-class__minimal')
      expect(minimal.expose).toEqual({})
    })

    it('should return an empty array from render() when components registry is missing or isShow() returns false', () => {
      const renderMock = vi.fn().mockReturnValue([])
      const componentsMock = {
        render: renderMock
      } as unknown as DesignComponents<Record<string, object>, TestProps>

      const withoutComponents = new TestComponentInclude({}, new DesignName('parent.class'))
      expect(withoutComponents.render()).toEqual([])

      const withComponents = new TestComponentInclude({}, new DesignName('parent.class'), componentsMock)
      expect(withComponents.render(undefined, undefined, () => false)).toEqual([])
      expect(renderMock).not.toHaveBeenCalled()
    })

    it('should preserve falsy boundary values (0, false, "") in props, extra, propsAttrs, and expose results', () => {
      const include = new TestComponentInclude(
        {
          value: '',
          subAttrs: {
            'data-custom': '',
            'aria-expanded': false,
            'tabindex': 0
          }
        },
        new DesignName('parent.class'),
        undefined,
        {
          'data-custom': 'fallback',
          'tabindex': 1
        }
      )

      expect(include.testGetProps()).toEqual({
        value: '',
        subAttrs: {
          'data-custom': '',
          'aria-expanded': false,
          'tabindex': 0
        }
      })
      expect(include.binds.value['data-custom']).toBe('')
      expect(include.binds.value['aria-expanded']).toBe(false)
      expect(include.binds.value.tabindex).toBe(0)

      include.setElementValue({
        focus: () => false,
        value: () => '',
        getCount: () => 0,
        getRaw: () => false
      } as unknown as ConstrBind<TestExpose>)

      expect(include.expose.focus()).toBe(false)
      expect(include.expose.getValue()).toBe('')
      expect(include.expose.getCount()).toBe(0)
      expect(include.expose.getRaw()).toBe(false)
    })

    it('should fall back to defaultValue when element method is missing or returns nullish and preserve undefined for string/number without defaultValue', () => {
      const include = new TestComponentInclude({}, new DesignName('parent.class'))

      expect(include.expose.getOptionalString?.()).toBeUndefined()
      expect(include.expose.getOptionalNumber?.()).toBeUndefined()

      include.setElementValue({
        focus: undefined,
        value: () => null,
        getCount: () => undefined,
        getRaw: () => undefined,
        getOptionalString: () => undefined,
        getOptionalNumber: () => null
      } as unknown as ConstrBind<TestExpose>)

      expect(include.expose.focus()).toBe(false)
      expect(include.expose.getValue()).toBe('default')
      expect(include.expose.getCount()).toBe(0)
      expect(include.expose.getRaw()).toBeNull()
      expect(include.expose.getOptionalString?.()).toBeUndefined()
      expect(include.expose.getOptionalNumber?.()).toBeUndefined()

      include.setElementValue({
        getOptionalString: () => 123,
        getOptionalNumber: () => '456'
      } as unknown as ConstrBind<TestExpose>)

      expect(include.expose.getOptionalString?.()).toBe('123')
      expect(include.expose.getOptionalNumber?.()).toBe(456)
    })

    it('should override constructor index with render index and forward slotsChildren', () => {
      const mockedVNode = { type: 'span' } as unknown as VNode
      const renderMock = vi.fn().mockReturnValue([mockedVNode])
      const componentsMock = {
        render: renderMock
      } as unknown as DesignComponents<Record<string, object>, TestProps>
      const slots = { default: () => 'slot-content' }

      const include = new TestComponentInclude(
        {},
        new DesignName('parent.class'),
        componentsMock,
        undefined,
        'default-index'
      )

      include.render(slots, { 'aria-expanded': true }, undefined, 'override-index')
      expect(renderMock).toHaveBeenLastCalledWith(
        'test-sub',
        expect.objectContaining({ 'aria-expanded': true }),
        slots,
        'override-index'
      )

      include.render(slots, undefined, undefined, '')
      expect(renderMock).toHaveBeenLastCalledWith(
        'test-sub',
        expect.objectContaining({ class: 'parent-class__test-sub' }),
        slots,
        ''
      )
    })
  })

  describe('Reactivity, lifecycle, immutability, and security boundaries', () => {
    it('should reactively recompute binds when props or extra change without mutating caller objects', () => {
      const reactiveProps = reactive<TestProps>({
        subAttrs: { 'data-custom': 'initial' }
      })
      const initialExtra: Partial<ConstrBind<TestExtraProps>> = {
        'aria-expanded': false
      }
      const reactiveExtra = shallowRef<Partial<ConstrBind<TestExtraProps>>>(initialExtra)
      const originalExtraSnapshot: Partial<ConstrBind<TestExtraProps>> = { ...initialExtra }

      const include = new TestComponentInclude(
        () => reactiveProps,
        new DesignName('parent.class'),
        undefined,
        () => reactiveExtra
      )

      expect(include.binds.value['data-custom']).toBe('initial')
      expect(include.binds.value['aria-expanded']).toBe(false)

      reactiveProps.subAttrs = { 'data-custom': 'updated' }
      reactiveExtra.value = { 'aria-expanded': true }

      expect(include.binds.value['data-custom']).toBe('updated')
      expect(include.binds.value['aria-expanded']).toBe(true)
      expect(originalExtraSnapshot).toEqual({ 'aria-expanded': false })
    })

    it('should filter prototype pollution keys from props, propsAttrs, and extra', () => {
      const polluted = JSON.parse('{"__proto__":{"polluted":true},"data-custom":"safe"}') as Record<string, unknown>
      const include = new TestComponentInclude(
        { subAttrs: polluted as ConstrBind<TestExtraProps> },
        new DesignName('parent.class'),
        undefined,
        polluted as Partial<ConstrBind<TestExtraProps>>
      )

      const binds = include.binds.value as Record<string, unknown>
      expect(binds['data-custom']).toBe('safe')
      expect(Object.hasOwn(binds, '__proto__')).toBe(false)
      expect(({} as Record<string, unknown>).polluted).toBeUndefined()
    })

    it('should extend DesignLifecycleAbstract and isolate state across separate instances', () => {
      const first = new TestComponentInclude({ subAttrs: { 'data-custom': 'first' } }, new DesignName('first.item'))
      const second = new TestComponentInclude({ subAttrs: { 'data-custom': 'second' } }, new DesignName('second.item'))

      expect(first).toBeInstanceOf(DesignLifecycleAbstract)
      first.setElementValue({ focus: () => true } as unknown as ConstrBind<TestExpose>)

      expect(first.getElement()).toBeDefined()
      expect(second.getElement()).toBeUndefined()
      expect(first.binds.value['data-custom']).toBe('first')
      expect(second.binds.value['data-custom']).toBe('second')
    })
  })
})
