// ai-none

import {
  computed,
  effectScope,
  type EffectScope,
  type Ref,
  ref,
  watch,
  type WatchHandle
} from 'vue'
import {
  DesignLifecycleAbstract,
  EventRef,
  getElementId,
  toNumber,
  useLazyItemByMarginRef
} from '@dxtmisha/functional'

import { ImageAdaptiveGroup } from './ImageAdaptiveGroup'
import { ImageCalculationList } from './ImageCalculationList'
import type { ImageData } from './ImageData'

import { type ImageElement, type ImageSize } from './basicTypes'
import { type ImageProps } from './props'

/**
 * Types of image scaling axis /
 * Типы осей масштабирования изображения
 */
enum ImageAdaptiveItemType {
  /** Scaling by X axis / Масштабирование по оси X */
  x = 'x',
  /** Scaling by Y axis / Масштабирование по оси Y */
  y = 'y'
}

/** Basic group name / Базовое название группы */
const GROUP_BASIC = 'basic'

/**
 * The value in pixels indicating when an element is still considered active,
 * even if it has gone off the screen. /
 * Значение в пикселях, указывающее, когда элемент считается еще активным,
 * даже если он ушел за экран.
 */
export const MAX_BEYOND = 512

/**
 * A class for managing the adapted scaling of a specific element.
 * It calculates the object's proportions and determines the necessary
 * image size to maintain visual consistency within a group.
 *
 * Класс для управления адаптированным масштабированием конкретного элемента.
 * Вычисляет пропорции объекта и определяет необходимый размер изображения
 * для поддержания визуальной целостности внутри группы.
 */
export class ImageAdaptiveItem extends DesignLifecycleAbstract {
  /**
   * Checks if adaptivity is enabled in properties.
   *
   * Проверяет, включена ли адаптивность в свойствах.
   * @param props input data / входные данные
   * @returns true if adaptivity is enabled / true, если адаптивность включена
   */
  static is(props?: ImageProps): boolean {
    return Boolean(props?.adaptive)
  }

  /** Scaling percentages / Проценты масштабирования */
  protected readonly percent = ref<ImageSize>({
    width: 0,
    height: 0
  })

  /** Reactive DOM dimensions / Реактивные размеры DOM */
  protected readonly elementSize = ref<ImageSize>({ width: 0, height: 0 })

  /** Resize manager available only during active adaptation / Менеджер resize, доступный только при активной адаптации */
  protected resize?: EventRef<HTMLElement, Event>

  /** Scope of reactive resize watchers / Область реактивных наблюдателей resize */
  protected resizeScope?: EffectScope

  /** Lazy item tracking instance / Экземпляр отслеживания появления */
  protected lazy?: ReturnType<typeof useLazyItemByMarginRef>

  /** Watch handle for lazy loading / Дескриптор наблюдения за ленивой загрузкой */
  protected lazyStatus?: WatchHandle

  /** Checks if the element is within the active calculation area / Проверяет, находится ли элемент в активной зоне вычисления */
  protected beyond: boolean = false

  /**
   * Constructor for creating a scaling manager for an element.
   *
   * Конструктор для создания менеджера масштабирования элемента.
   * @param props input data / входные данные
   * @param element image element for scaling / элемент изображения для масштабирования
   * @param isMounted whether the component is mounted / смонтирован ли компонент
   * @param data function returning ImageData object / функция, возвращающая объект ImageData
   */
  constructor(
    protected readonly props: ImageProps,
    protected readonly element: Ref<ImageElement>,
    protected readonly isMounted: Ref<boolean>,
    protected readonly data: () => ImageData
  ) {
    super()
  }

  /** Callback after component mounting / Обработчик после монтирования компонента */
  override readonly onMounted = (): void => {
    watch(
      () => [
        this.is(),
        this.width,
        this.height,
        this.group,
        this.props.adaptiveAlways,
        this.element.value,
        (this.width || this.height) ? this.data().image.value : undefined
      ] as const,
      () => {
        if (this.is()) {
          this.add()
        } else {
          this.remove()
        }
      },
      { immediate: true }
    )
  }

  /** Callback after component unmounting / Обработчик после демонтирования компонента */
  override readonly onUnmounted = (): void => {
    this.remove()
  }

  /**
   * Calculation of the base size of the image to determine how to scale the image.
   *
   * Вычисление базового размера изображения, чтобы определить, как надо масштабировать изображение.
   * @returns base size in pixels / базовый размер в пикселях
   */
  readonly size = computed<number>(() => {
    const data = this.data()

    if (
      this.element.value
      && data.isImage()
    ) {
      const item = data.image.value

      switch (this.type) {
        case ImageAdaptiveItemType.x:
          if (!item.width) {
            return 0
          }

          return item.height * (this.elementSize.value.width * this.percent.value.width / item.width)
        case ImageAdaptiveItemType.y:
          if (!item.height) {
            return 0
          }

          return item.width * (this.elementSize.value.height * this.percent.value.height / item.height)
      }
    }

    return 0
  })

  /**
   * Multiplier for determining the level of image scaling relative to other elements.
   *
   * Множитель для определения уровня масштабирования изображения относительно других элементов.
   * @returns scaling factor / коэффициент масштабирования
   */
  readonly factor = computed<number>(() => {
    if (this.element.value) {
      const size = this.size.value
      const { width, height } = this.elementSize.value

      if (
        this.type === ImageAdaptiveItemType.x
        && size > height
      ) {
        return height / size
      }

      if (
        this.type === ImageAdaptiveItemType.y
        && size > width
      ) {
        return width / size
      }
    }

    return 1
  })

  /**
   * Is the element active for size alignment.
   *
   * Активен ли элемент для выравнивания размера.
   * @returns true if active / true, если активен
   */
  get active(): boolean {
    return Boolean(
      ImageAdaptiveItem.is(this.props)
      && this.isMounted.value
      && (this.width || this.height)
    )
    && this.data().isImage()
  }

  /**
   * Returns values for the background-size property.
   *
   * Возвращает значения для свойства background-size.
   * @returns background size string or null / строка размера фона или null
   */
  get backgroundSize(): string | null {
    const factorMax = ImageCalculationList.get(this.group).factorMax

    switch (this.type) {
      case ImageAdaptiveItemType.x:
        return `${100 * this.percent.value.width * factorMax}% auto`
      case ImageAdaptiveItemType.y:
        return `auto ${100 * this.percent.value.height * factorMax}%`
    }

    return null
  }

  /**
   * Returns the name of the group.
   *
   * Возвращает название группы.
   * @returns group name / название группы
   */
  get group(): string {
    return this.props.adaptiveGroup ?? GROUP_BASIC
  }

  /**
   * Returns the identifier of the element.
   *
   * Возвращает идентификатор элемента.
   * @returns identifier string / строка идентификатора
   */
  get id(): string {
    return getElementId(this.element.value)
  }

  /**
   * Returns the axis for scaling.
   *
   * Возвращает ось для масштабирования.
   * @returns adaptive item type or undefined / тип адаптивного элемента или undefined
   */
  get type(): ImageAdaptiveItemType | undefined {
    if (
      this.width
      && this.percent.value.width > 0
    ) {
      return ImageAdaptiveItemType.x
    }

    if (
      this.height
      && this.percent.value.height > 0
    ) {
      return ImageAdaptiveItemType.y
    }

    return undefined
  }

  /**
   * Returns the physical width of the object.
   *
   * Возвращает физическую ширину объекта.
   * @returns physical width / физическая ширина
   */
  get width(): number {
    return toNumber(this.props.objectWidth ?? 0)
  }

  /**
   * Returns the physical height of the object.
   *
   * Возвращает физическую высоту объекта.
   * @returns physical height / физическая высота
   */
  get height(): number {
    return toNumber(this.props.objectHeight ?? 0)
  }

  /**
   * Checks if the element’s conditions are suitable for scaling.
   *
   * Проверяет, подходят ли условия элемента для масштабирования.
   * @returns true if conditions are suitable for scaling / true, если условия подходят для масштабирования
   */
  is(): boolean {
    return this.active && Boolean(this.element.value?.closest('body'))
  }

  /**
   * Checks if the element is available for group calculation (visible or within the preload margin).
   *
   * Проверяет, доступен ли элемент для группового вычисления (видим или в пределах отступа предзагрузки).
   * @returns true if the element is available for calculation / true, если элемент доступен для вычисления
   */
  isBeyond(): boolean {
    return this.beyond
  }

  /**
   * Checks for compliance with the group.
   *
   * Проверяет на соответствие группе.
   * @param name name of the checked group / название проверяемой группы
   * @returns true if the group name matches / true, если имя группы совпадает
   */
  isGroup(name: string): boolean {
    return this.group === name
  }

  /**
   * Returns target image element.
   *
   * Возвращает целевой элемент изображения.
   * @returns image element / элемент изображения
   */
  getElement(): ImageElement {
    return this.element.value
  }

  /**
   * Size change for calculation.
   *
   * Изменение размера для вычисления.
   * @param width width value / значение ширины
   * @param height height value / значение высоты
   * @returns instance of this class / экземпляр этого класса
   */
  setPercent(width: number, height: number): this {
    if (
      this.percent.value.width !== width
      || this.percent.value.height !== height
    ) {
      this.percent.value = {
        width,
        height
      }
    }

    return this
  }

  /**
   * Adds the element to the adaptive group and initializes lazy and resize tracking.
   *
   * Добавляет элемент в адаптивную группу и инициализирует ленивое отслеживание и resize.
   * @returns instance of this class / экземпляр этого класса
   */
  readonly add = (): this => {
    this.initLazy()
    this.initResize()
    this.setElementSize()
    ImageAdaptiveGroup.add(this)

    return this
  }

  /**
   * Removes the element from the adaptive group and resets lazy and resize tracking.
   *
   * Удаляет элемент из адаптивной группы и сбрасывает ленивое отслеживание и resize.
   * @returns instance of this class / экземпляр этого класса
   */
  readonly remove = (): this => {
    this.beyond = false
    this.setPercent(0, 0)
    this.resetLazy()
    this.resetResize()
    ImageAdaptiveGroup.remove(this)

    return this
  }

  /**
   * Updates reactive DOM dimensions and schedules group recalculation.
   *
   * Обновляет реактивные размеры DOM и планирует пересчёт группы.
   * @returns instance of this class / экземпляр этого класса
   */
  readonly update = (): this => {
    this.setElementSize()
    ImageAdaptiveGroup.make()

    return this
  }

  /**
   * Updating the visibility and activity status of the element.
   *
   * Обновление статуса видимости и активности элемента.
   * @returns instance of this class / экземпляр этого класса
   */
  make(): this {
    this.setElementSize()
    this.beyond = false

    if (
      this.element.value
      && this.is()
    ) {
      this.beyond = Boolean(this.props.adaptiveAlways || this.lazy?.lazyItemStatus.value)
    }

    return this
  }

  /**
   * Reads current DOM dimensions into reactive state when they change.
   *
   * Считывает текущие размеры DOM в реактивное состояние при их изменении.
   * @returns instance of this class / экземпляр этого класса
   */
  protected setElementSize(): this {
    const width = this.element.value?.offsetWidth ?? 0
    const height = this.element.value?.offsetHeight ?? 0

    if (
      this.elementSize.value.width !== width
      || this.elementSize.value.height !== height
    ) {
      this.elementSize.value = { width, height }
    }

    return this
  }

  /**
   * Resets lazy tracking and stops the active watcher.
   *
   * Сбрасывает ленивое отслеживание и останавливает активный наблюдатель.
   * @returns instance of this class / экземпляр этого класса
   */
  protected resetLazy(): this {
    if (this.lazyStatus) {
      this.lazyStatus()
      this.lazyStatus = undefined
    }

    if (this.lazy) {
      this.lazy.removeLazyItem()
      this.lazy = undefined
    }

    return this
  }

  /**
   * Stops resize tracking, disposes its reactive watchers and clears the manager.
   *
   * Останавливает отслеживание resize, освобождает его реактивные наблюдатели и очищает менеджер.
   * @returns instance of this class / экземпляр этого класса
   */
  protected resetResize(): this {
    this.resize?.stop()
    this.resizeScope?.stop()
    this.resize = undefined
    this.resizeScope = undefined

    return this
  }

  /**
   * Initializes lazy tracking if needed.
   *
   * Инициализирует ленивое отслеживание при необходимости.
   * @returns instance of this class / экземпляр этого класса
   */
  protected initLazy(): this {
    if (!this.lazy) {
      this.lazy = useLazyItemByMarginRef(this.element, `${MAX_BEYOND}px 0px`)
      this.lazyStatus = watch(this.lazy.lazyItemStatus, () => {
        ImageAdaptiveGroup.make()
      })
    }

    return this
  }

  /**
   * Creates resize tracking only for an active adaptive element.
   *
   * Создаёт отслеживание resize только для активного адаптивного элемента.
   * @returns instance of this class / экземпляр этого класса
   */
  protected initResize(): this {
    if (!this.resize && this.is()) {
      this.resizeScope = effectScope(true)
      this.resize = this.resizeScope.run(() => new EventRef<HTMLElement, Event>(
        this.element,
        undefined,
        'resize',
        this.update
      ).start())
    }

    return this
  }
}
