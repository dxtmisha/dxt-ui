// ai-none

import { watch, type WatchStopHandle } from 'vue'
import { DesignLifecycleAbstract } from '@dxtmisha/functional'

import type { FormElements } from './FormElements'
import type { FormElementsNative } from './FormElementsNative'

import type { FormElementsData, FormElementsValues } from './basicTypes'
import type { FormPropsBasic } from './props'

/**
 * Class for managing Form values.
 * Coordinates reading, writing, reactive synchronization, and resetting of values across custom child elements and native form controls.
 *
 * Класс для управления значениями формы (Form).
 * Координирует чтение, запись, реактивную синхронизацию и сброс значений между кастомными дочерними элементами и нативными элементами управления формы.
 */
export class FormValue extends DesignLifecycleAbstract {
  /**
   * Checks whether initial or controlled form values are provided in props.
   *
   * Проверяет, переданы ли начальные или контролируемые значения формы в свойствах.
   * @param props incoming form properties / входящие свойства формы
   * @returns true if value or modelValue is defined / true, если задано value или modelValue
   */
  static is(props?: Readonly<FormPropsBasic>): boolean {
    return Boolean(props?.value || props?.modelValue)
  }

  /** Cached initial form values / Закешированные исходные значения формы */
  protected cache: FormElementsValues = {}

  /** Cleanup handle for modelValue prop watcher / Обработчик остановки наблюдателя за свойством modelValue */
  protected stopWatchModelValue?: WatchStopHandle

  /** Cleanup handle for value prop watcher / Обработчик остановки наблюдателя за свойством value */
  protected stopWatchValue?: WatchStopHandle

  /**
   * Constructor for FormValue.
   *
   * Конструктор для FormValue.
   * @param props incoming form properties / входящие свойства формы
   * @param elements lazy getter for custom child elements manager / ленивый геттер менеджера кастомных дочерних элементов
   * @param native lazy getter for native form elements manager / ленивый геттер менеджера нативных элементов формы
   */
  constructor(
    protected readonly props: Readonly<FormPropsBasic>,
    protected readonly elements: () => FormElements,
    protected readonly native: () => FormElementsNative
  ) {
    super()

    if (this.props.value) {
      this.cache = { ...this.props.value }
    } else if (this.props.modelValue) {
      this.cache = { ...this.props.modelValue }
    }
  }

  /**
   * Returns current object of form element values keyed by element name.
   *
   * Возвращает текущий объект со значениями элементов формы, где ключами являются имена элементов.
   * @returns object with name to value mapping / объект сопоставления имени и значения
   */
  readonly get = (): FormElementsValues => {
    if (this.props.native) {
      return this.native().getValues()
    }

    return this.elements().getValues()
  }

  /**
   * Returns cached initial form values.
   *
   * Возвращает закешированные исходные значения формы.
   * @returns cached initial values / закешированные исходные значения
   */
  getCache(): FormElementsValues {
    return this.cache
  }

  /**
   * Returns current object of form element validation data.
   *
   * Возвращает текущий объект с данными валидации элементов формы.
   * @returns object with name to validation data mapping / объект сопоставления имени и данных валидации
   */
  getData(): FormElementsData {
    if (this.props.native) {
      return this.native().get()
    }

    return this.elements().getData()
  }

  /**
   * Returns the value of an element by name.
   *
   * Возвращает значение элемента по имени.
   * @param name element name / имя элемента
   * @returns element value or undefined / значение элемента или undefined
   */
  getValue(name: string): unknown {
    if (this.props.native) {
      return this.native().getValue(name)
    }

    return this.elements().getValue(name)
  }

  /**
   * Sets the value of a form element by name.
   *
   * Устанавливает значение элемента формы по имени.
   * @param name element name / имя элемента
   * @param value new value / новое значение
   */
  readonly set = (name: string, value: unknown): void => {
    if (this.props.native) {
      this.native().set(name, value)
    } else {
      this.elements().set(name, value)
    }
  }

  /**
   * Sets values for form elements without altering omitted fields.
   *
   * Устанавливает значения для элементов формы без изменения неуказанных полей.
   * @param values object of element values keyed by name / объект значений элементов по имени
   */
  readonly setValues = (values: FormElementsValues): void => {
    if (this.props.native) {
      this.native().setValues(values)
    } else {
      this.elements().setValues(values)
    }
  }

  /**
   * Sets values for all form elements.
   * If a value is not provided for an element, clears it.
   *
   * Устанавливает значения для всех элементов формы.
   * Если значение для элемента не передано, очищает его.
   * @param values object of element values keyed by name / объект значений элементов по имени
   */
  readonly setValuesAll = (values: FormElementsValues): void => {
    if (this.props.native) {
      this.native().setValuesAll(values)
    } else {
      this.elements().setValuesAll(values)
    }
  }

  /**
   * Updates cached reactive form data when in native mode.
   *
   * Обновляет кешированные реактивные данные формы в нативном режиме.
   * @returns current instance / текущий экземпляр
   */
  readonly update = (): this => {
    if (this.props.native) {
      this.native().update()
    }

    return this
  }

  /**
   * Resets form element values to cached initial values.
   *
   * Сбрасывает значения элементов формы к закешированным исходным значениям.
   */
  readonly reset = (): void => {
    if (this.props.native) {
      this.native().reset(this.cache)
    } else {
      this.elements().reset(this.cache)
    }
  }

  /**
   * Applies cached initial values and starts watching controlled value props on mount.
   *
   * Применяет закешированные начальные значения и запускает наблюдение за контролируемыми свойствами значений при монтировании.
   */
  override readonly onMounted = (): void => {
    if (Object.keys(this.cache).length > 0) {
      this.setValues(this.cache)
    }

    this.stopWatchValue?.()
    this.stopWatchValue = watch(() => this.props.value, (value) => {
      if (value) {
        this.setValuesAll(value)
      }
    })

    this.stopWatchModelValue?.()
    this.stopWatchModelValue = watch(() => this.props.modelValue, (value) => {
      if (value) {
        this.setValuesAll(value)
      }
    })
  }

  /**
   * Stops watching controlled value props on unmount.
   *
   * Останавливает наблюдение за контролируемыми свойствами значений при размонтировании.
   */
  override readonly onUnmounted = (): void => {
    this.stopWatchValue?.()
    this.stopWatchModelValue?.()
    this.stopWatchValue = undefined
    this.stopWatchModelValue = undefined
  }
}
