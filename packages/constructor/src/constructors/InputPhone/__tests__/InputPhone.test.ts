// @vitest-environment jsdom
import { describe, expect, it, vi } from 'vitest'
import { effectScope, nextTick, reactive, ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'

import { InputPhone, type InputPhoneConstructors } from '../InputPhone'
import type { InputPhoneProps } from '../props'

vi.mock('vue', async () => {
  const actual = await vi.importActual<typeof import('vue')>('vue')
  return {
    ...actual,
    inject: vi.fn().mockReturnValue(undefined),
    onMounted: (fn: () => void) => fn()
  }
})

/**
 * Inspectable subclass exposing instances map and condition lifecycle triggers for test verification.
 *
 * Подкласс для проверки карты экземпляров зависимостей и вызовов условий.
 */
class InspectableInputPhone extends InputPhone {
  /**
   * Returns currently instantiated sub-constructors.
   *
   * Возвращает созданные на текущий момент подконструкторы.
   * @returns map of instantiated sub-constructors / карта созданных подконструкторов
   */
  get instantiatedItems(): Partial<Record<keyof InputPhoneConstructors, unknown>> {
    return this.instances
  }

  /**
   * Simulates component mount lifecycle.
   *
   * Симулирует жизненный цикл монтирования компонента.
   */
  triggerMounted(): void {
    this.isMounted.value = true
    this.callLifecycle('onMounted')
    this.initConditions()
  }

  /**
   * Simulates component unmount lifecycle.
   *
   * Симулирует жизненный цикл размонтирования компонента.
   */
  triggerUnmounted(): void {
    this.isMounted.value = false
    this.callLifecycle('onUnmounted')
  }
}

describe('InputPhone', () => {
  it('should not instantiate any subordinate classes eagerly upon creation', () => {
    const scope = effectScope()
    const props: InputPhoneProps = reactive({})
    const element = ref<HTMLElement>()
    const naming = new DesignName('d1.inputPhone')

    const inputPhone = scope.run(() => new InspectableInputPhone(props, element, naming))!

    expect(inputPhone).toBeDefined()
    expect(Object.keys(inputPhone.instantiatedItems)).toHaveLength(0)

    scope.stop()
  })

  it('should lazily instantiate subordinate classes via i()', () => {
    const scope = effectScope()
    const props: InputPhoneProps = reactive({ countryDefault: 'US' })
    const element = ref<HTMLElement>()
    const naming = new DesignName('d1.inputPhone')

    const inputPhone = scope.run(() => new InspectableInputPhone(props, element, naming))!

    const data = inputPhone.i('data')
    expect(data).toBeDefined()
    expect(data.country.value).toBe('US')
    expect(inputPhone.instantiatedItems.data).toBe(data)
    expect(inputPhone.instantiatedItems.phoneMask).toBeUndefined()

    const phoneMask = inputPhone.i('phoneMask')
    expect(phoneMask).toBeDefined()
    expect(inputPhone.instantiatedItems.phoneMask).toBe(phoneMask)

    scope.stop()
  })

  it('should activate form conditionally when props.name is provided on mount', async () => {
    const scope = effectScope()
    const props: InputPhoneProps = reactive({})
    const element = ref<HTMLElement>()
    const naming = new DesignName('d1.inputPhone')

    const inputPhone = scope.run(() => new InspectableInputPhone(props, element, naming))!

    inputPhone.triggerMounted()
    await nextTick()
    expect(inputPhone.instantiatedItems.form).toBeUndefined()

    props.name = 'phone'
    await nextTick()
    expect(inputPhone.instantiatedItems.form).toBeDefined()

    scope.stop()
  })

  it('should support constructor overrides', () => {
    const scope = effectScope()
    const props: InputPhoneProps = reactive({})
    const element = ref<HTMLElement>()
    const naming = new DesignName('d1.inputPhone')

    class CustomChange {
      readonly custom = true
    }

    const inputPhone = scope.run(() => new InspectableInputPhone(
      props,
      element,
      naming,
      undefined,
      undefined,
      undefined,
      {
        change: CustomChange as unknown as InputPhoneConstructors['change']
      }
    ))!

    expect(inputPhone.i('change')).toBeInstanceOf(CustomChange)

    scope.stop()
  })

  it('should call onMounted on instantiated lifecycle classes when mounted', () => {
    const scope = effectScope()
    const props: InputPhoneProps = reactive({ countryDefault: 'US' })
    const element = ref<HTMLElement>()
    const naming = new DesignName('d1.inputPhone')

    const inputPhone = scope.run(() => new InspectableInputPhone(props, element, naming))!
    const data = inputPhone.i('data')
    const onMountedSpy = vi.spyOn(data, 'onMounted')

    inputPhone.triggerMounted()
    expect(onMountedSpy).toHaveBeenCalledTimes(1)

    scope.stop()
  })
})
