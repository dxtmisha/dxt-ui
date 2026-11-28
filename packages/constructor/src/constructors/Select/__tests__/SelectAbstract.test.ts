import './testWarnings'
import { describe, expect, it, vi } from 'vitest'
import { effectScope, reactive, ref } from 'vue'
import { type ConstrItems, DesignName, type ListSelectedList } from '@dxtmisha/functional'

import { FieldAttributesInclude } from '../../../classes/Field/FieldAttributesInclude'
import { FieldChangeInclude } from '../../../classes/Field/FieldChangeInclude'
import { FieldCodeInclude } from '../../../classes/Field/FieldCodeInclude'
import { FieldElementInclude } from '../../../classes/Field/FieldElementInclude'
import { FieldEventInclude } from '../../../classes/Field/FieldEventInclude'
import { FieldFormInclude } from '../../../classes/Field/FieldFormInclude'
import { FieldValidationInclude } from '../../../classes/Field/FieldValidationInclude'
import { FieldValueInclude } from '../../../classes/Field/FieldValueInclude'
import { MenuInclude, type MenuSlotInclude } from '../../Menu'

import {
  SelectAbstract,
  type SelectAbstractConstructors,
  type SelectAbstractProps
} from '../SelectAbstract'

/**
 * Concrete subclass exposing protected SelectAbstract helpers for unit testing.
 *
 * Конкретный подкласс, открывающий защищенные помощники SelectAbstract для модульного тестирования.
 */
class ConcreteSelectAbstract extends SelectAbstract {
  protected override readonly constructorItems: ConstrItems<SelectAbstractConstructors> = {
    attributes: {
      item: FieldAttributesInclude,
      parameters: () => [this.props]
    },
    change: {
      item: FieldChangeInclude,
      parameters: () => [this.props]
    },
    code: {
      item: FieldCodeInclude,
      parameters: () => [this.props]
    },
    elementItem: {
      item: FieldElementInclude,
      parameters: () => [this.props, this.element]
    },
    event: {
      item: FieldEventInclude,
      parameters: () => [
        this.props,
        () => this.i('change'),
        () => this.i('value'),
        () => this.i('validation'),
        this.emits,
        () => this.callInstance('form', item => item)
      ]
    },
    form: {
      item: FieldFormInclude,
      canCreate: () => FieldFormInclude.is(this.props),
      parameters: () => [
        this.props,
        () => this.i('value'),
        () => this.i('validation')
      ]
    },
    menu: {
      item: MenuInclude,
      parameters: () => [
        this.props,
        this.naming,
        this.components,
        () => this.getMenuExtra()
      ]
    },
    validation: {
      item: FieldValidationInclude,
      parameters: () => [
        this.props,
        () => this.i('attributes'),
        () => this.i('value'),
        () => this.i('change'),
        () => this.i('code'),
        undefined,
        this.isMounted
      ]
    },
    value: {
      item: FieldValueInclude<ListSelectedList>,
      parameters: () => [
        this.props,
        () => this.i('elementItem'),
        undefined,
        true,
        false,
        true
      ]
    }
  }

  constructor(
    props: Readonly<SelectAbstractProps>,
    slots?: MenuSlotInclude
  ) {
    super(
      props,
      ref<HTMLElement | undefined>(),
      new DesignName('d1.select'),
      undefined,
      slots
    )

    this.i('event')
    this.i('validation')
    this.callInstance('form', item => item)
  }

  getIconTrailing() {
    return this.iconTrailing
  }

  getSelectionStyle() {
    return this.selectionStyle
  }

  checkIsArrow() {
    return this.isArrow()
  }

  checkIsSlot() {
    return this.isSlot()
  }

  readMenuExtra() {
    return this.getMenuExtra()
  }

  triggerSlotClick(value?: string) {
    this.onClick(value)
  }
}

describe('SelectAbstract', () => {
  describe('Trailing Icon Resolution (iconTrailing)', () => {
    it('should return iconArrowDown by default and prefer iconTrailing when provided', () => {
      const scope = effectScope()
      scope.run(() => {
        const props = reactive<SelectAbstractProps>({ iconArrowDown: 'arrow_down' })
        const instance = new ConcreteSelectAbstract(props)

        expect(instance.getIconTrailing()).toBe('arrow_down')

        props.iconTrailing = 'custom_trailing'
        expect(instance.getIconTrailing()).toBe('custom_trailing')
      })
      scope.stop()
    })

    it('should hide trailing icon when disabled or arrow navigation is enabled', () => {
      const scope = effectScope()
      scope.run(() => {
        const props = reactive<SelectAbstractProps>({
          iconArrowDown: 'arrow_down',
          disabled: true
        })
        const instance = new ConcreteSelectAbstract(props)

        expect(instance.getIconTrailing()).toBeUndefined()

        props.disabled = false
        props.arrow = 'carousel'
        expect(instance.getIconTrailing()).toBeUndefined()

        props.arrow = 'none'
        expect(instance.getIconTrailing()).toBe('arrow_down')
      })
      scope.stop()
    })
  })

  describe('Selection Style Resolution (selectionStyle)', () => {
    it('should map auto selectionStyle to radio in single mode and checkbox in multiple mode', () => {
      const scope = effectScope()
      scope.run(() => {
        const props = reactive<SelectAbstractProps>({
          selectionStyle: 'auto',
          multiple: false
        })
        const instance = new ConcreteSelectAbstract(props)

        expect(instance.getSelectionStyle()).toBe('radio')

        props.multiple = true
        expect(instance.getSelectionStyle()).toBe('checkbox')
      })
      scope.stop()
    })

    it('should preserve explicit selectionStyle values', () => {
      const scope = effectScope()
      scope.run(() => {
        const props = reactive<SelectAbstractProps>({ selectionStyle: 'checkbox' })
        const instance = new ConcreteSelectAbstract(props)

        expect(instance.getSelectionStyle()).toBe('checkbox')

        props.selectionStyle = 'none'
        expect(instance.getSelectionStyle()).toBe('none')
      })
      scope.stop()
    })
  })

  describe('Arrow and Context Slot Detection', () => {
    it('should detect arrow mode for carousel/stepper and reject none/undefined', () => {
      const scope = effectScope()
      scope.run(() => {
        const props = reactive<SelectAbstractProps>({})
        const instance = new ConcreteSelectAbstract(props)

        expect(instance.checkIsArrow()).toBe(false)

        props.arrow = 'none'
        expect(instance.checkIsArrow()).toBe(false)

        props.arrow = 'carousel'
        expect(instance.checkIsArrow()).toBe(true)

        props.arrow = 'stepper'
        expect(instance.checkIsArrow()).toBe(true)
      })
      scope.stop()
    })

    it('should detect contextTop and contextBottom slots independently', () => {
      const scope = effectScope()
      scope.run(() => {
        const withoutSlots = new ConcreteSelectAbstract(reactive<SelectAbstractProps>({}))
        const withTopSlot = new ConcreteSelectAbstract(reactive<SelectAbstractProps>({}), {
          contextTop: () => []
        })
        const withBottomSlot = new ConcreteSelectAbstract(reactive<SelectAbstractProps>({}), {
          contextBottom: () => []
        })

        expect(withoutSlots.checkIsSlot()).toBe(false)
        expect(withTopSlot.checkIsSlot()).toBe(true)
        expect(withBottomSlot.checkIsSlot()).toBe(true)
      })
      scope.stop()
    })
  })

  describe('Menu Configuration (getMenuExtra) and Slot Click (onClick)', () => {
    it('should build complete menu configuration including function option resolution and window hide state', () => {
      const scope = effectScope()
      scope.run(() => {
        const optionResolver = vi.fn(() => [
          { label: 'Option Alpha', value: 'alpha' },
          { label: 'Option Beta', value: 'beta' }
        ])

        const props = reactive<SelectAbstractProps>({
          label: 'Country',
          helperMessage: 'Select your country',
          option: optionResolver as unknown as SelectAbstractProps['option'],
          multiple: true,
          max: 3,
          showSearch: true,
          filterMode: true,
          hideList: false,
          selectionStyle: 'auto',
          arrow: 'carousel'
        })

        const instance = new ConcreteSelectAbstract(props)
        const extra = instance.readMenuExtra()

        expect(optionResolver).toHaveBeenCalled()
        expect(extra.tag).toBe('span')
        expect(extra.barsLabel).toBe('Country')
        expect(extra.barsDescription).toBe('Select your country')
        expect(extra.autoClose).toBe(false)
        expect(extra.disabled).toBeFalsy()
        expect(extra.max).toBe(3)
        expect(extra.showSearch).toBe(true)
        expect(extra.filterMode).toBe(true)
        expect(extra.selectionStyle).toBe('checkbox')
        expect(extra.isSelectedByValue).toBe(true)
        expect(extra.ariaMultiselectable).toBe(true)
        expect(extra.windowAttrs).toEqual({ hide: false, widthMatch: true })
        expect(typeof extra.onUpdateValue).toBe('function')
      })
      scope.stop()
    })

    it('should hide popup window when option is empty and no context slots exist', () => {
      const scope = effectScope()
      scope.run(() => {
        const emptyInstance = new ConcreteSelectAbstract(reactive<SelectAbstractProps>({ option: [] }))
        const slotInstance = new ConcreteSelectAbstract(reactive<SelectAbstractProps>({ option: [] }), {
          contextBottom: () => []
        })

        expect(emptyInstance.readMenuExtra().windowAttrs?.hide).toBe(true)
        expect(slotInstance.readMenuExtra().windowAttrs?.hide).toBe(false)
      })
      scope.stop()
    })

    it('should disable menu when either disabled or readonly is true', () => {
      const scope = effectScope()
      scope.run(() => {
        const props = reactive<SelectAbstractProps>({ readonly: true })
        const instance = new ConcreteSelectAbstract(props)

        expect(instance.readMenuExtra().disabled).toBe(true)

        props.readonly = false
        props.disabled = true
        expect(instance.readMenuExtra().disabled).toBe(true)
      })
      scope.stop()
    })

    it('should update value on slot click for non-empty values and ignore empty/undefined', () => {
      const scope = effectScope()
      scope.run(() => {
        const instance = new ConcreteSelectAbstract(reactive<SelectAbstractProps>({ value: 'initial' }))

        instance.triggerSlotClick(undefined)
        expect(instance.i('value').get()).toBe('initial')

        instance.triggerSlotClick('')
        expect(instance.i('value').get()).toBe('initial')

        instance.triggerSlotClick('updated')
        expect(instance.i('value').get()).toBe('updated')
      })
      scope.stop()
    })
  })
})
