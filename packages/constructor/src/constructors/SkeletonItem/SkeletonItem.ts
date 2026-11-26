import { computed, type Component, type Ref } from 'vue'
import {
  type ConstrBind,
  type ConstrClassObject,
  type ConstrEmit,
  type ConstrItems,
  type DesignComponents,
  DesignLogicAbstract,
  type DesignName,
  getRandomText,
  isArray,
  isFunction,
  isNumber,
  isObject,
  strFill,
  toNumber
} from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { Skeleton, type SkeletonClassesList } from '../Skeleton'

import type { AriaList } from '../../types/ariaTypes'
import type { SkeletonItemProps } from './props'
import type {
  SkeletonItemComponents,
  SkeletonItemEmits,
  SkeletonItemSlots
} from './types'

/** SkeletonItem dependency constructors type / Тип конструкторов зависимостей SkeletonItem */
export type SkeletonItemConstructors = {
  // No subordinate constructors / Нет дочерних конструкторов
}

/**
 * Class for managing the SkeletonItem component logic.
 * Resolves skeleton token classes, root tag or component, custom attributes, and static or generated placeholder text.
 *
 * Класс для управления логикой компонента SkeletonItem.
 * Вычисляет классы токенов скелетона, корневой тег или компонент, пользовательские атрибуты и статический либо сгенерированный текст-заглушку.
 */
export class SkeletonItem extends DesignLogicAbstract<
  HTMLDivElement,
  SkeletonItemComponents,
  SkeletonItemEmits,
  SkeletonItemSlots,
  SkeletonItemProps,
  SkeletonItemConstructors
> {
  /** List of classes for the skeleton / Список классов для скелетона */
  protected readonly classesSkeleton: SkeletonClassesList

  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<SkeletonItemConstructors> = {}

  /**
   * Constructor for initializing SkeletonItem logic.
   *
   * Конструктор для инициализации логики SkeletonItem.
   * @param props input properties / входные свойства
   * @param element root element reference / ссылка на корневой элемент
   * @param naming component naming helper / помощник именования компонента
   * @param components connected component registry / реестр подключённых компонентов
   * @param slots named slot registry / реестр именованных слотов
   * @param emits component event emitter / функция событий компонента
   * @param constructors dependency constructor overrides / переопределения конструкторов зависимостей
   * @param hasLifecycle whether to register component lifecycle hooks / регистрировать ли хуки жизненного цикла компонента
   */
  constructor(
    props: Readonly<SkeletonItemProps>,
    element: Ref<HTMLDivElement | undefined>,
    naming: DesignName,
    components?: DesignComponents<SkeletonItemComponents, SkeletonItemProps>,
    slots?: SkeletonItemSlots,
    emits?: ConstrEmit<SkeletonItemEmits>,
    constructors?: Partial<SkeletonItemConstructors>,
    hasLifecycle: boolean = true
  ) {
    super(
      props,
      element,
      naming,
      components,
      slots,
      emits,
      constructors,
      hasLifecycle
    )

    this.classesSkeleton = Skeleton.getClassesListByDesign(this.naming.getDesign())
  }

  /**
   * Normalized primitive key for `length` to prevent re-generation when inline array literals (`:length="[2, 4]"`) keep equal bounds across parent re-renders.
   *
   * Нормализованный примитивный ключ для `length`, предотвращающий перегенерацию при передаче новых массивов (`:length="[2, 4]"`) с теми же границами при перерисовке родителя.
   */
  protected readonly lengthKey = computed<string>(() => {
    const length = this.props.length

    if (isArray(length)) {
      return `range:${length[0] ?? 2}:${length[1] ?? 6}`
    }

    if (typeof length === 'number' && !Number.isFinite(length)) {
      return 'empty'
    }

    if (isNumber(length)) {
      return `count:${toNumber(length)}`
    }

    return `text:${String(length ?? '')}`
  })

  /**
   * Memoized placeholder text that stays deterministic during SSR/hydration and stable across unrelated re-renders.
   *
   * Мемоизированный текст-заглушка, детерминированный при SSR/гидрации и стабильный при сторонних ре-рендерах.
   */
  protected readonly generatedLabel = computed<string>(() => {
    const key = this.lengthKey.value

    if (key.startsWith('range:')) {
      const [, minRaw, maxRaw] = key.split(':')
      const min = toNumber(minRaw ?? 2)
      const max = toNumber(maxRaw ?? 6)

      return this.isMounted.value
        ? getRandomText(min, max)
        : this.initDeterministicLabel(Math.round((min + max) / 2))
    }

    if (key === 'empty') {
      return ''
    }

    if (key.startsWith('count:')) {
      const count = toNumber(key.slice(6))

      return this.isMounted.value
        ? getRandomText(count, count)
        : this.initDeterministicLabel(count)
    }

    return key.slice(5)
  })

  /**
   * Returns ARIA attributes for decorative auto-generated placeholder content.
   *
   * Возвращает ARIA-атрибуты для декоративного автоматически сгенерированного текста-заглушки.
   * @returns ARIA attributes map / карта ARIA-атрибутов
   */
  get aria(): AriaList {
    if (
      this.isDecorativePlaceholder()
      && !this.props.itemAttrs?.['aria-label']
      && !this.props.itemAttrs?.['aria-labelledby']
      && !this.props.itemAttrs?.ariaLabel
      && !this.props.itemAttrs?.ariaLabelledby
    ) {
      return AriaStaticInclude.hidden()
    }

    return {}
  }

  /**
   * Returns computed attribute bindings for the root element.
   *
   * Возвращает вычисляемые привязки атрибутов для корневого элемента.
   * @returns attributes object / объект атрибутов
   */
  get binds(): ConstrBind {
    return {
      ...this.props.itemAttrs
    }
  }

  /**
   * Returns a map of active skeleton classes.
   *
   * Возвращает карту активных классов скелетона.
   * @returns map of active classes / карта активных классов
   */
  get classes(): ConstrClassObject {
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
   * Returns static label content or memoized placeholder text.
   *
   * Возвращает статическое содержимое метки или мемоизированный текст-заглушку.
   * @returns text or numeric content / текстовое или числовое содержимое
   */
  get label(): string | number {
    if (
      this.props.label !== undefined
      && this.props.label !== ''
    ) {
      return this.props.label
    }

    return this.generatedLabel.value
  }

  /**
   * Returns the tag name or component.
   *
   * Возвращает название тега или компонент.
   * @returns HTML tag name or Vue component / имя HTML-тега или Vue-компонент
   */
  get tag(): string | Component {
    return this.props.tag ?? 'div'
  }

  /**
   * Checks if the tag is a Vue component (object or functional component).
   *
   * Проверяет, является ли тег Vue-компонентом (объектным или функциональным).
   * @returns true if tag is a component / true, если тег является компонентом
   */
  isObject(): boolean {
    return isObject(this.props.tag) || isFunction(this.props.tag)
  }

  /**
   * Checks if the rendered output is decorative auto-generated placeholder text (`#`).
   *
   * Проверяет, является ли выводимое содержимое декоративным автогенерируемым текстом-заглушкой (`#`).
   * @returns true if decorative auto-generated placeholder / true, если используется декоративная автогенерация
   */
  protected isDecorativePlaceholder(): boolean {
    return (
      !this.isObject()
      && !this.slots?.default
      && (this.props.label === undefined || this.props.label === '')
      && (isArray(this.props.length) || isNumber(this.props.length))
    )
  }

  /**
   * Generates deterministic placeholder words for SSR and initial hydration.
   *
   * Генерирует детерминированные слова-заглушки для SSR и начальной гидрации.
   * @param count word count / количество слов
   * @returns deterministic placeholder string / детерминированная строка-заглушка
   */
  protected initDeterministicLabel(count: number): string {
    const safeCount = Math.max(0, Math.floor(Number.isFinite(count) ? count : 0))
    const words: string[] = []

    for (let index = 0; index < safeCount; index++) {
      words.push(strFill('#', 4 + ((index * 3) % 7)))
    }

    return words.join(' ')
  }
}
