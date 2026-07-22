import { type Ref, type ToRefs } from 'vue'
import {
  type ConstrClass,
  type ConstrEmit,
  type DesignComp,
  isArray,
  isNumber,
  toNumber,
  getRandomText
} from '@dxtmisha/functional'

import { Skeleton, type SkeletonClassesList } from '../Skeleton'

import type { SkeletonItemComponents, SkeletonItemEmits, SkeletonItemSlots } from './types'
import type { SkeletonItemProps } from './props'

/**
 * Class for working with the skeleton item.
 *
 * Класс для работы с элементом скелетона.
 */
export class SkeletonItem {
  /** List of classes for the skeleton / Список классов для скелетона */
  protected readonly classesSkeleton: SkeletonClassesList

  /**
   * Constructor
   * @param props input data/ входные данные
   * @param refs input data in the form of reactive elements/ входные данные в виде реактивных элементов
   * @param element input element/ элемент ввода
   * @param classDesign design name/ название дизайна
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param slots object for working with slots/ объект для работы со слотами
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   */
  constructor(
    protected readonly props: SkeletonItemProps,
    protected readonly refs: ToRefs<SkeletonItemProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<SkeletonItemComponents, SkeletonItemProps>,
    protected readonly slots?: SkeletonItemSlots,
    protected readonly emits?: ConstrEmit<SkeletonItemEmits>
  ) {
    this.classesSkeleton = Skeleton.getClassesListByDesign(classDesign)
  }

  /**
   * Returns the tag name or component.
   *
   * Возвращает название тега или компонент.
   */
  get tag(): any {
    return this.props.tag ?? 'div'
  }

  /**
   * Returns the text.
   *
   * Возвращает текст.
   */
  get label(): string | number {
    return this.props.label || this.initLabel()
  }

  /**
   * Returns a list of active classes.
   *
   * Возвращает список активных классов.
   */
  get classes(): ConstrClass {
    return {
      [this.classesSkeleton.classText]: Boolean(this.props.text),
      [this.classesSkeleton.classTextVariant]: Boolean(this.props.textVariant),
      [this.classesSkeleton.classBackground]: Boolean(this.props.background),
      [this.classesSkeleton.classBackgroundVariant]: Boolean(this.props.backgroundVariant),
      [this.classesSkeleton.classBorder]: Boolean(this.props.border),
      [this.classesSkeleton.classBorderVariant]: Boolean(this.props.borderVariant)
    }
  }

  /**
   * Values for attributes.
   *
   * Возвращает значения для атрибутов.
   * @returns attributes object / объект атрибутов
   */
  get binds(): Record<string, any> {
    return {
      ...this.props.props,
      ref: this.element
    }
  }

  /**
   * Checks if the tag is an object.
   *
   * Проверяет, является ли тег объектом.
   * @returns true if tag is an object / true, если тег является объектом
   */
  isObject(): boolean {
    return typeof this.props.tag === 'object'
  }

  /**
   * Generates text for output.
   *
   * Генерирует текст для вывода.
   * @returns generated string / сгенерированная строка
   */
  protected initLabel(): string {
    const length = this.props.length

    if (isArray(length)) {
      return getRandomText(
        length?.[0] ?? 2,
        length?.[1] ?? 6
      )
    }

    if (isNumber(length)) {
      return getRandomText(
        toNumber(length),
        toNumber(length)
      )
    }

    return String(this.props.length ?? '')
  }
}
