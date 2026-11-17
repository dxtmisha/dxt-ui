import {
  type Ref,
  shallowRef,
  watch,
  type WatchStopHandle
} from 'vue'
import {
  type ConstrClassObject,
  DesignLifecycleAbstract,
  type DesignName,
  isDomRuntime,
  useLazyItemByMarginRef
} from '@dxtmisha/functional'

import type { ListItemProps } from './props'

/**
 * Class managing lazy content rendering for ListItem via IntersectionObserver.
 * Keeps placeholder dimensions for off-screen items while deferring heavy child rendering until visible.
 *
 * Класс управления ленивым рендерингом содержимого ListItem через IntersectionObserver.
 * Сохраняет размеры-заглушки для элементов вне экрана и откладывает рендеринг тяжёлых дочерних узлов до их появления.
 */
export class ListItemLazy extends DesignLifecycleAbstract {
  /**
   * Determines whether lazy rendering is enabled for ListItem.
   *
   * Определяет, включен ли ленивый рендеринг для ListItem.
   * @param props input properties / входные свойства
   * @returns true if lazy mode is active / true, если ленивый режим активен
   */
  static is(props?: Readonly<ListItemProps>): boolean {
    return Boolean(props?.lazy)
  }

  /** Lazy observer registration / Регистрация ленивого наблюдателя */
  protected lazyItem?: ReturnType<typeof useLazyItemByMarginRef>

  /** Stop handle for props watcher / Функция остановки наблюдателя свойств */
  protected stopPropsWatch?: WatchStopHandle

  /** Stop handle for observer status watcher / Функция остановки наблюдателя статуса видимости */
  protected stopStatusWatch?: WatchStopHandle

  /** Visibility state controlling child rendering / Состояние видимости, управляющее рендерингом дочерних узлов */
  protected readonly visible = shallowRef<boolean>(!isDomRuntime())

  /**
   * Constructor
   *
   * Конструктор
   * @param props input properties / входные свойства
   * @param element target HTML element reference / ссылка на целевой HTML-элемент
   * @param naming component naming helper / помощник именования компонента
   */
  constructor(
    protected readonly props: Readonly<ListItemProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly naming: DesignName
  ) {
    super()
  }

  /**
   * Mount lifecycle hook starting lazy visibility tracking on client.
   *
   * Хук монтирования, запускающий отслеживание видимости на клиенте.
   */
  override readonly onMounted = (): void => {
    this.stopPropsWatch = watch(
      () => [this.props.lazy, this.props.lazyMargin],
      () => this.update(),
      { immediate: true }
    )
  }

  /**
   * Cleanup lifecycle hook releasing lazy observer registration and watchers.
   *
   * Хук размонтирования, освобождающий регистрацию наблюдателя и активные наблюдатели.
   */
  override readonly onUnmounted = (): void => {
    this.stopPropsWatch?.()
    this.stopPropsWatch = undefined
    this.reset()
  }

  /**
   * Returns CSS classes for lazy loading states.
   *
   * Возвращает CSS-классы для состояний ленивого рендеринга.
   * @returns classes object / объект классов
   */
  get classes(): ConstrClassObject {
    const isLazy = this.isLazy()
    const isVisible = this.is()

    return {
      [this.naming.getStatusClass('lazy')]: isLazy,
      [this.naming.getStatusClass('lazy', 'visible')]: isLazy && isVisible,
      [this.naming.getStatusClass('lazy', 'hidden')]: isLazy && !isVisible
    }
  }

  /**
   * Checks whether lazy rendering is active via props.
   *
   * Проверяет, активирован ли ленивый рендеринг через свойства.
   * @returns true when lazy prop is enabled / true, если включено свойство lazy
   */
  isLazy(): boolean {
    return ListItemLazy.is(this.props)
  }

  /**
   * Checks whether child elements should be rendered in the current frame.
   *
   * Проверяет, должны ли дочерние элементы отображаться в текущем кадре.
   * @returns true if children should render / true, если дочерние элементы должны рендериться
   */
  is(): boolean {
    if (!this.isLazy()) {
      return true
    }

    return this.visible.value
  }

  /**
   * Synchronizes observer registration with current props.
   *
   * Синхронизирует регистрацию наблюдателя с текущими свойствами.
   */
  protected update(): void {
    this.reset()

    if (!this.isLazy()) {
      this.visible.value = true
      return
    }

    if (!isDomRuntime()) {
      this.visible.value = true
      return
    }

    this.lazyItem = useLazyItemByMarginRef(this.element, this.props.lazyMargin)
    this.stopStatusWatch = watch(
      this.lazyItem.lazyItemStatus,
      (status) => {
        this.visible.value = Boolean(status)
      },
      { immediate: true }
    )
  }

  /**
   * Stops active observer registration and status watcher.
   *
   * Останавливает активную регистрацию наблюдателя и наблюдатель статуса.
   */
  protected reset(): void {
    this.stopStatusWatch?.()
    this.stopStatusWatch = undefined

    this.lazyItem?.removeLazyItem()
    this.lazyItem = undefined
  }
}
