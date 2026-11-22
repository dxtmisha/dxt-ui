import {
  type AppContext,
  type ComponentInternalInstance,
  getCurrentInstance,
  hasInjectionContext,
  inject,
  type InjectionKey
} from 'vue'
import { executeFunction, isNull, isObject } from '@dxtmisha/functional-basic'
import { getRef } from './ref/getRef'
import type { InjectedValue } from './getInject'
import type { RefOrNormal } from '../types/refTypes'

/**
 * Returns the parent context or component instance that owns the inherited provides map.
 *
 * Возвращает родительский контекст или экземпляр компонента, которому принадлежит наследуемая карта provides.
 * @param instance current Vue component internal instance / текущий внутренний экземпляр компонента Vue
 * @returns parent AppContext or ComponentInternalInstance / родительский AppContext или ComponentInternalInstance
 */
function getParentSource(
  instance: ComponentInternalInstance
): AppContext | ComponentInternalInstance {
  if (
    isNull(instance.parent)
    || ('ce' in instance && instance.ce)
  ) {
    return instance.appContext
  }

  return instance.parent
}

/**
 * Returns the starting provides map for ancestor lookup from the component instance.
 *
 * Возвращает начальный объект provides для поиска по предкам от экземпляра компонента.
 * @param instance current Vue component internal instance / текущий внутренний экземпляр компонента Vue
 * @returns provides object or undefined / объект provides или undefined
 */
function getParentProvides(
  instance: ComponentInternalInstance
): unknown {
  const source = getParentSource(instance)

  if ('provides' in source) {
    return source.provides
  }

  return undefined
}

/**
 * Resolves the nearest non-nullish value from the Vue provide/inject prototype chain or active injection context.
 *
 * Разрешает ближайшее не-nullish значение из цепочки прототипов provide/inject Vue или активного контекста внедрения.
 * @template T Type of the resolved value / Тип разрешённого значения
 * @param key Provide/inject key or InjectionKey / Ключ provide/inject либо InjectionKey
 * @returns Resolved value or undefined / Найденное значение или undefined
 */
function resolveInjectValue<T>(
  key: InjectionKey<RefOrNormal<T>> | string
): unknown {
  const instance = getCurrentInstance()

  if (instance) {
    let current = getParentProvides(instance)

    while (
      isObject(current)
      && current !== Object.prototype
    ) {
      if (Object.hasOwn(current, key)) {
        const value = getRef(Reflect.get(current, key))

        if (!isNull(value)) {
          return value
        }
      }

      current = Object.getPrototypeOf(current)
    }
  } else if (hasInjectionContext()) {
    return getRef(inject(key, undefined))
  }

  return undefined
}

/**
 * Searches up the Vue provide/inject prototype chain for the nearest non-nullish injected value,
 * unwrapping reactive references (`Ref` / `ComputedRef`) at each level.
 * Preserves falsy values (`0`, `false`, `''`, `NaN`) and skips only `null` and `undefined`
 * to continue looking in higher ancestors, returning `defaultValue` when no value is found.
 *
 * Ищет вверх по цепочке прототипов provide/inject Vue ближайшее не-nullish значение,
 * разворачивая реактивные ссылки (`Ref` / `ComputedRef`) на каждом уровне.
 * Сохраняет ложные значения (`0`, `false`, `''`, `NaN`) и пропускает только `null` и `undefined`,
 * продолжая поиск у более высоких предков, либо возвращает `defaultValue`, если значение не найдено.
 *
 * @template T Type of the resolved value / Тип разрешённого значения
 * @template D Type of the default value or factory / Тип значения по умолчанию или фабрики
 * @param key Provide/inject key or InjectionKey / Ключ provide/inject либо InjectionKey
 * @param defaultValue Default value or factory returned when no non-nullish value is found /
 * Значение по умолчанию или фабрика, возвращаемое при отсутствии не-nullish значения
 * @returns Nearest non-nullish unwrapped value, `defaultValue`, or `undefined` /
 * Ближайшее не-nullish распакованное значение, `defaultValue` либо `undefined`
 */
export function getInjectNearest<T = unknown, D = undefined>(
  key: InjectionKey<RefOrNormal<T>> | string,
  defaultValue?: D | (() => D)
): InjectedValue<unknown extends T ? T : NonNullable<T>, D> {
  const value = resolveInjectValue(key)

  return (
    !isNull(value) ? value : executeFunction(defaultValue)
  ) as InjectedValue<unknown extends T ? T : NonNullable<T>, D>
}
