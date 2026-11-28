import {
  executeFunctionRef,
  type RefOrNormalOrFunction
} from '@dxtmisha/functional'
import { ref } from 'vue'
import { AriaStaticInclude } from '../AriaStaticInclude'
import type { AriaList } from '../../types/ariaTypes'

/**
 * Class for managing the active child element state, CSS active class,
 * and reactive `aria-activedescendant` ID within a directional focus container.
 *
 * Класс для управления состоянием активного дочернего элемента, активным CSS-классом
 * и реактивным ID для `aria-activedescendant` внутри контейнера направленного фокуса.
 */
export class FocusDirectionActive<E extends HTMLElement = HTMLElement> {
  /** Currently active focus element / Текущий активный элемент фокуса */
  protected current?: HTMLElement

  /**
   * Constructor for FocusDirectionActive.
   *
   * Конструктор для FocusDirectionActive.
   * @param element reference or getter for the parent element / ссылка или геттер родительского элемента
   * @param selector selector for elements participating in focus / селектор элементов, участвующих в фокусировке
   * @param activeSelector selector for default element to receive focus / селектор элемента, получающего фокус по умолчанию
   * @param activeClass CSS class name indicating that element is focused / имя CSS-класса для указания, что элемент сейчас в фокусе
   */
  constructor(
    protected readonly element: RefOrNormalOrFunction<E | undefined>,
    protected readonly selector: string = '.sys-focusDirection__item',
    protected readonly activeSelector: string = '.sys-focusDirection__item--active',
    protected readonly activeClass: string = 'sys-focusDirection__item--active'
  ) {
  }

  /** Reactive ID of the currently active descendant element / Реактивный ID текущего активного дочернего элемента */
  protected readonly activeId = ref<string | undefined>(undefined)

  /**
   * Returns ARIA attributes for the active descendant.
   *
   * Возвращает ARIA-атрибуты для активного потомка.
   * @returns ARIA attributes object / объект ARIA-атрибутов
   */
  get aria(): AriaList {
    return AriaStaticInclude.activedescendant(this.activeId.value)
  }

  /**
   * Returns the reactive ID of the currently active descendant element.
   *
   * Возвращает реактивный ID текущего активного дочернего элемента.
   * @returns active element ID or undefined / ID активного элемента или undefined
   */
  get id(): string | undefined {
    return this.activeId.value
  }

  /**
   * Checks whether an active element is currently present and valid.
   *
   * Проверяет, присутствует ли в данный момент валидный активный элемент.
   * @returns true if active element exists / true, если активный элемент существует
   */
  is(): boolean {
    return Boolean(this.get())
  }

  /**
   * Gets the currently active child element from cache or container DOM,
   * invalidating detached or foreign DOM references.
   *
   * Получает текущий активный дочерний элемент из кэша или DOM контейнера,
   * сбрасывая отсоединённые или сторонние DOM-ссылки.
   * @returns active element or undefined / активный элемент или undefined
   */
  get(): HTMLElement | undefined {
    this.resetInvalid()

    if (
      !this.current
      && this.activeClass
    ) {
      this.current = this.getElement()
        ?.querySelector<HTMLElement>(`.${this.activeClass}`) ?? undefined

      this.syncId()
    }

    return this.current
  }

  /**
   * Resolves the parent container element from a ref, raw value, or getter function.
   *
   * Получает родительский элемент контейнера из ref, прямого значения или функции-геттера.
   * @returns parent container element or undefined / родительский элемент контейнера или undefined
   */
  getElement(): E | undefined {
    return executeFunctionRef(this.element)
  }

  /**
   * Sets the specified child element as active, updating its active class and synced ID.
   *
   * Устанавливает указанный дочерний элемент активным, обновляя его активный класс и синхронизированный ID.
   * @param targetElement child element to activate / дочерний элемент для активации
   * @returns this instance / текущий экземпляр
   */
  set(targetElement: HTMLElement): this {
    this.clearClasses()

    if (this.activeClass) {
      targetElement.classList.add(this.activeClass)
    }

    this.current = targetElement
    this.syncId()

    return this
  }

  /**
   * Resets the cached active element reference and synced ID without modifying DOM classes.
   *
   * Сбрасывает кэшированную ссылку на активный элемент и синхронизированный ID без изменения DOM-классов.
   * @returns this instance / текущий экземпляр
   */
  reset(): this {
    this.current = undefined
    this.activeId.value = undefined

    return this
  }

  /**
   * Clears the cached active state and removes the active class from all child elements.
   *
   * Сбрасывает кэшированное активное состояние и удаляет активный класс со всех дочерних элементов.
   * @returns this instance / текущий экземпляр
   */
  clear(): this {
    this.reset()
    this.clearClasses()

    return this
  }

  /**
   * Initializes the default child element as active if none is currently selected.
   *
   * Инициализирует начальный дочерний элемент по умолчанию, если активный элемент ещё не выбран.
   * @returns this instance / текущий экземпляр
   */
  initDefault(): this {
    if (!this.get()) {
      this.activateDefault()
    }

    return this
  }

  /**
   * Resets the cached active element reference if it is detached from the DOM or outside the container.
   *
   * Сбрасывает кэшированную ссылку на активный элемент, если он удалён из DOM или находится вне контейнера.
   */
  protected resetInvalid(): void {
    if (
      this.current
      && (
        !this.current.isConnected
        || !this.getElement()?.contains(this.current)
      )
    ) {
      this.reset()
    }
  }

  /**
   * Finds and activates the default child element inside the container.
   *
   * Находит и активирует дочерний элемент по умолчанию внутри контейнера.
   */
  protected activateDefault(): void {
    const container = this.getElement()

    if (!container) {
      return
    }

    const targetElement = (this.activeSelector && container.querySelector<HTMLElement>(this.activeSelector))
      || (this.selector && container.querySelector<HTMLElement>(this.selector))

    if (targetElement) {
      this.set(targetElement)
    }
  }

  /**
   * Removes the active class from all elements inside the container.
   *
   * Удаляет активный класс со всех элементов внутри контейнера.
   */
  protected clearClasses(): void {
    if (!this.activeClass) {
      return
    }

    this.getElement()
      ?.querySelectorAll(`.${this.activeClass}`)
      .forEach((activeElementItem) => {
        activeElementItem.classList.remove(this.activeClass)
      })
  }

  /**
   * Synchronizes the reactive active descendant ID from the current active element.
   *
   * Синхронизирует реактивный ID активного потомка из текущего активного элемента.
   */
  protected syncId(): void {
    this.activeId.value = this.current?.id || undefined
  }
}
