import { describe, it, expect } from 'vitest'
import { DesignConstructorBasicAbstract } from '../DesignConstructorBasicAbstract'
import { DesignComponentsAbstract } from '../DesignComponentsAbstract'
import type {
  ConstrClass,
  ConstrClasses,
  ConstrComponent,
  ConstrEmit,
  ConstrItem,
  ConstrStyles
} from '../../../types/constructorTypes'

class DummyComponents extends DesignComponentsAbstract<ConstrComponent, ConstrItem> {
  getModification(): ConstrItem | undefined {
    return undefined
  }

  renderOne(): undefined {
    return undefined
  }

  protected computeModification(): ConstrItem {
    return {}
  }
}

type TestExpose = {
  testValue: string
}

class TestDesignConstructor extends DesignConstructorBasicAbstract<
  ConstrComponent,
  ConstrItem,
  TestExpose,
  ConstrItem,
  ConstrClasses,
  ConstrItem
> {
  protected readonly components = new DummyComponents()

  constructor(
    name: string,
    props: ConstrItem = {},
    options?: {
      emits?: ConstrEmit<ConstrItem>
      attrs?: ConstrItem
      slots?: ConstrItem
    }
  ) {
    super(name, props, options)
    this.dataExpose = this.initExpose()
  }

  public testToClass(classes?: ConstrClass) {
    return this.toClass(classes)
  }

  public testToClassName<T extends ConstrItem>(classes?: ConstrItem): T {
    return this.toClassName<T>(classes)
  }

  public testInitName(name: string): string[] {
    return this.initName(name)
  }

  public getProps() {
    return this.props
  }

  public getEmits() {
    return this.emits
  }

  public getSlots() {
    return this.slots
  }

  public getDataExpose() {
    return this.dataExpose
  }

  protected initExpose(): TestExpose {
    return { testValue: 'exposed' }
  }

  protected initClasses(): Partial<ConstrClasses> {
    return { main: 'test-main' }
  }

  protected initStyles(): ConstrStyles {
    return { color: 'red' }
  }
}

describe('DesignConstructorBasicAbstract', () => {
  it('correctly initializes properties from constructor arguments', () => {
    const props = { disabled: true }
    const emits = (() => {}) as unknown as ConstrEmit<ConstrItem>
    const attrs = { id: 'btn', class: 'custom-class', style: 'color: blue' }
    const slots = { default: 'Content' }

    const instance = new TestDesignConstructor('d1.button', props, { emits, attrs, slots })

    expect(instance.getName()).toBe('d1-button')
    expect(instance.getDesign()).toBe('d1')
    expect(instance.getProps()).toBe(props)
    expect(instance.getEmits()).toBe(emits)
    expect(instance.getSlots()).toBe(slots)
    expect(instance.getDataExpose()).toEqual({ testValue: 'exposed' })
  })

  describe('getName() and getDesign()', () => {
    it('formats kebab-cased names into camelCased parts and joins with hyphen', () => {
      const instance = new TestDesignConstructor('my-design.action-sheet')
      expect(instance.getName()).toBe('myDesign-actionSheet')
      expect(instance.getDesign()).toBe('myDesign')
    })

    it('works with single-level component name', () => {
      const instance = new TestDesignConstructor('button')
      expect(instance.getName()).toBe('button')
      expect(instance.getDesign()).toBe('button')
    })
  })

  describe('getSubClass()', () => {
    it('returns BEM element class name for string input', () => {
      const instance = new TestDesignConstructor('d1.button')
      expect(instance.getSubClass('icon')).toBe('d1-button__icon')
    })

    it('returns BEM element class name for array input', () => {
      const instance = new TestDesignConstructor('d1.button')
      expect(instance.getSubClass(['icon', 'wrapper'])).toBe('d1-button__icon__wrapper')
    })
  })

  describe('getStatusClass()', () => {
    it('returns BEM modifier class name for string input', () => {
      const instance = new TestDesignConstructor('d1.button')
      expect(instance.getStatusClass('primary')).toBe('d1-button--primary')
    })

    it('returns BEM modifier class name for array input', () => {
      const instance = new TestDesignConstructor('d1.button')
      expect(instance.getStatusClass(['theme', 'dark'])).toBe('d1-button--theme--dark')
    })
  })

  describe('getStyle()', () => {
    it('returns CSS custom property name for string input', () => {
      const instance = new TestDesignConstructor('d1.button')
      expect(instance.getStyle('padding')).toBe('--d1-button-sys-padding')
    })

    it('returns CSS custom property name for array input', () => {
      const instance = new TestDesignConstructor('d1.button')
      expect(instance.getStyle(['font', 'size'])).toBe('--d1-button-sys-font-size')
    })
  })

  describe('getAttrs()', () => {
    it('strips class, className, and style from attributes', () => {
      const attrs = {
        id: 'element-id',
        title: 'Tool tip',
        class: 'vue-class',
        className: 'react-class',
        style: 'color: red',
        'aria-hidden': 'true'
      }
      const instance = new TestDesignConstructor('d1.button', {}, { attrs })

      expect(instance.getAttrs()).toEqual({
        id: 'element-id',
        title: 'Tool tip',
        'aria-hidden': 'true'
      })
    })

    it('returns empty object when attrs is undefined', () => {
      const instance = new TestDesignConstructor('d1.button')
      expect(instance.getAttrs()).toEqual({})
    })
  })

  describe('toClass()', () => {
    const instance = new TestDesignConstructor('d1.button')

    it('transforms non-empty string into object', () => {
      expect(instance.testToClass('btn-active')).toEqual({ 'btn-active': true })
    })

    it('returns empty object for whitespace-only or empty string', () => {
      expect(instance.testToClass('')).toEqual({})
      expect(instance.testToClass('   ')).toEqual({})
    })

    it('transforms array of strings into single object key joined by spaces', () => {
      expect(instance.testToClass(['btn', 'btn--large', ''])).toEqual({
        'btn btn--large': true
      })
    })

    it('returns empty object for empty array', () => {
      expect(instance.testToClass([])).toEqual({})
    })

    it('preserves existing class object', () => {
      const classObj = { 'btn-primary': true, 'btn-disabled': false }
      expect(instance.testToClass(classObj)).toEqual(classObj)
    })

    it('returns empty object for undefined or null', () => {
      expect(instance.testToClass(undefined)).toEqual({})
    })
  })

  describe('toClassName()', () => {
    const instance = new TestDesignConstructor('d1.button')

    it('replaces ?? with full component name and ? with design name', () => {
      const classes = {
        '??': true,
        '??__icon': true,
        '?--dark': false,
        'standard-class': true
      }

      expect(instance.testToClassName(classes)).toEqual({
        'd1-button': true,
        'd1-button__icon': true,
        'd1--dark': false,
        'standard-class': true
      })
    })

    it('returns empty object for non-object input', () => {
      expect(instance.testToClassName(undefined)).toEqual({})
      expect(instance.testToClassName(null as unknown as ConstrItem)).toEqual({})
    })
  })

  describe('initName()', () => {
    const instance = new TestDesignConstructor('d1.button')

    it('splits dot-separated names and converts each segment to camelCase', () => {
      expect(instance.testInitName('my-theme.icon-button')).toEqual(['myTheme', 'iconButton'])
    })

    it('limits split to 2 segments', () => {
      expect(instance.testInitName('part-one.part-two.part-three')).toHaveLength(2)
      expect(instance.testInitName('part-one.part-two.part-three')).toEqual(['partOne', 'partTwo'])
    })
  })
})
