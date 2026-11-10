// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { ref, type VNode } from 'vue'
import { type ConstrBind, type DesignComponents, DesignName } from '@dxtmisha/functional'
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
    { name: 'getRaw', defaultValue: null }
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
  })
})
