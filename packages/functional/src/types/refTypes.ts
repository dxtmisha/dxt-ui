import { type ComputedRef, type Ref, type VNode, type VNodeArrayChildren } from 'vue'

/**
 * Union type for Vue reactive references (computed or ref)/
 * Объединенный тип для Vue реактивных ссылок (computed или ref)
 */
export type RefType<T> = ComputedRef<T> | Ref<T>

/**
 * Union type for Vue reactive references that can be undefined/
 * Объединенный тип для Vue реактивных ссылок, которые могут быть undefined
 */
export type RefUndefined<T> = RefType<T | undefined>

/**
 * Union type that can be either a Vue reactive reference or a normal value/
 * Объединенный тип, который может быть либо Vue реактивной ссылкой, либо обычным значением
 */
export type RefOrNormal<T> = RefType<T> | T

/**
 * Union type for Vue raw children content
 * (strings, numbers, booleans, VNodes, arrays, functions)/
 * Объединенный тип для Vue сырого содержимого дочерних элементов
 * (строки, числа, булевы, VNode, массивы, функции)
 */
export type RawChildren = string | number | boolean | VNode | VNodeArrayChildren | (() => any)

/**
 * Type for Vue raw slots with optional stability flag/
 * Тип для Vue сырых слотов с опциональным флагом стабильности
 */
export type RawSlots = {
  /** Slot name mapping to unknown content/ Маппинг имени слота к неизвестному содержимому */
  [name: string]: unknown
  /**
   * Optional stability flag for performance optimization/
   * Опциональный флаг стабильности для оптимизации производительности
   */
  $stable?: boolean
}
