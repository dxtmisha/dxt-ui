import type { ModelPropsSelected } from '../../types/modelTypes'
import type { MotionAxisSelectedValue } from './basicTypes'

type MotionAxisPropsToken = {
  // :type [!] System label / Системная метка
  axis?: 'x' | 'y' | 'z'
  direction?: 'next' | 'back' | 'auto'
  // :type [!] System label / Системная метка
}

export type MotionAxisPropsBasic
  = ModelPropsSelected<MotionAxisSelectedValue>
    & {
      /** Status/ Статус */
      /** Selected element/ Выбранный элемент */
      selected?: MotionAxisSelectedValue

      /** Style/ Стили */
      /** Whether to animate height change/ Анимировать ли изменение высоты */
      animationHeight?: boolean

      /** Options/ Опции */
      /** Whether the elements are in the DOM/ Находятся ли элементы в DOM */
      inDom?: boolean
      /** List of elements in the DOM for slide/ Список элементов в DOM для слайда */
      inDomSlide?: string[]
    }

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type MotionAxisProps = MotionAxisPropsBasic & MotionAxisPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsMotionAxis = {
  ...{
    // :default [!] System label / Системная метка
    axis: 'x',
    direction: 'auto'
    // :default [!] System label / Системная метка
  }
}
