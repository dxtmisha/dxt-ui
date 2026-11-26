import type { ConstrBind } from '@dxtmisha/functional'
import type { MotionAxisPropsBasic } from './props'

/** Type for the selected value of the axis animation / Тип для выбранного значения анимации оси */
export type MotionAxisSelectedValue = string | undefined

/** Map of slide CSS class names by transition state / Карта имён CSS-классов слайда по состоянию перехода */
export type MotionAxisClassStatus = {
  /** Main class / Основной класс */
  main: string

  /** Class for the previous element / Класс для предыдущего элемента */
  previous: string

  /** Class for the element being prepared / Класс для подготавливаемого элемента */
  preparation: string

  /** Class for the active element / Класс для активного элемента */
  active: string
}

/** Type for the event emission type / Тип для типа вызова события */
export type MotionAxisEmitType = 'start' | 'end'

/** Payload options for the motionAxis transition event / Параметры полезной нагрузки события перехода motionAxis */
export type MotionAxisEmitOptions = {
  /** Event type / Тип события */
  type: MotionAxisEmitType

  /** Selected element / Выбранный элемент */
  selected?: MotionAxisSelectedValue

  /** Previous element / Предыдущий элемент */
  previous?: MotionAxisSelectedValue

  /** Element being prepared / Подготавливаемый элемент */
  preparation?: MotionAxisSelectedValue

  /** Active element / Активный элемент */
  active?: MotionAxisSelectedValue
}

/** Component map for including MotionAxis / Карта компонентов для подключения MotionAxis */
export type MotionAxisComponentInclude = {
  /** Component object / Объект компонента */
  motionAxis?: object
}

/** Emits map for including MotionAxis / Карта событий для подключения MotionAxis */
export type MotionAxisEmitsInclude = {
  /** Event emission / Вызов события */
  motionAxis: [options: MotionAxisEmitOptions]
}

/** Props interface for components including MotionAxis / Интерфейс свойств для компонентов, включающих MotionAxis */
export type MotionAxisPropsInclude<
  MotionAxis extends MotionAxisPropsBasic = MotionAxisPropsBasic
> = {
  /** Selected element / Выбранный элемент */
  selected?: MotionAxisSelectedValue

  /** Component attributes / Атрибуты компонента */
  motionAxisAttrs?: ConstrBind<MotionAxis>
}
