import type { Ref } from 'vue'
import {
  type ConstrBind,
  type ConstrClassObject,
  type ConstrEmit,
  type ConstrItems,
  type ConstrStyles,
  type DesignComponents,
  DesignLogicAbstract,
  type DesignName,
  getObjectNoUndefined
} from '@dxtmisha/functional'

import { CollageBarInclude } from '../CollageBar'
import { CollageItemDimensions } from './CollageItemDimensions'
import { EventClickInclude } from '../../classes/EventClickInclude'
import { IconLiteInclude } from '../Icon'
import { ImageInclude } from '../Image'

import type { CollageItemProps } from './props'
import type { CollageItemComponents, CollageItemEmits, CollageItemSlots } from './types'

/** CollageItem dependency constructors type / Тип конструкторов зависимостей CollageItem */
export type CollageItemConstructors = {
  /** Collage bar manager constructor / Конструктор менеджера панели коллажа */
  collageBar: typeof CollageBarInclude
  /** Dimensions manager constructor / Конструктор менеджера размеров */
  dimensions: typeof CollageItemDimensions
  /** Click event manager constructor / Конструктор менеджера событий клика */
  event: typeof EventClickInclude
  /** Icon manager constructor / Конструктор менеджера иконки */
  icon: typeof IconLiteInclude
  /** Image manager constructor / Конструктор менеджера изображения */
  image: typeof ImageInclude
}

/**
 * CollageItem controller class coordinating image presentation, dimensions, selection indicators,
 * click events, and collage bars with lazy dependency instantiation.
 *
 * Класс контроллера CollageItem, координирующий представление изображения, размеры, индикаторы выбора,
 * события клика и панели коллажа с ленивой инициализацией зависимостей.
 */
export class CollageItem extends DesignLogicAbstract<
  HTMLElement,
  CollageItemComponents,
  CollageItemEmits,
  CollageItemSlots,
  CollageItemProps,
  CollageItemConstructors
> {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<CollageItemConstructors> = {
    collageBar: {
      item: CollageBarInclude,
      canCreate: () => CollageBarInclude.is(this.props, this.slots),
      parameters: () => [
        this.props,
        this.naming,
        this.components
      ]
    },
    dimensions: {
      item: CollageItemDimensions,
      parameters: () => [
        this.props,
        this.naming,
        this.emits
      ]
    },
    event: {
      item: EventClickInclude,
      parameters: () => [
        this.props,
        undefined,
        this.emits
      ]
    },
    icon: {
      item: IconLiteInclude,
      canCreate: () => IconLiteInclude.is({
        icon: this.props.iconCheck ?? 'check_circle'
      }),
      parameters: () => [
        () => ({
          icon: this.props.iconCheck ?? 'check_circle'
        }),
        this.naming,
        this.components
      ]
    },
    image: {
      item: ImageInclude,
      canCreate: () => ImageInclude.is(this.props),
      parameters: () => [
        this.props,
        this.naming,
        this.components,
        this.emits,
        () => getObjectNoUndefined({
          tagImg: true,
          size: this.props.size,
          coordinator: this.props.coordinator,
          x: this.props.x,
          y: this.props.y,
          onLoad: this.i('dimensions').onLoad
        })
      ]
    }
  }

  /**
   * Constructor for CollageItem.
   * Instantiates dimensions immediately during setup to capture parent Collage provide/inject context.
   *
   * Конструктор для CollageItem.
   * Немедленно инициализирует контроллер размеров во время setup для захвата контекста provide/inject родительского Collage.
   * @param props input properties / входные свойства
   * @param element root element ref / ссылка на корневой элемент
   * @param naming component naming helper / помощник именования компонента
   * @param components connected component registry / реестр подключённых компонентов
   * @param slots named slot registry / реестр именованных слотов
   * @param emits component event emitter / функция событий компонента
   * @param constructors dependency constructor overrides / переопределения конструкторов зависимостей
   * @param hasLifecycle whether to register component lifecycle hooks / регистрировать ли хуки жизненного цикла компонента
   */
  constructor(
    props: Readonly<CollageItemProps>,
    element: Ref<HTMLElement | undefined>,
    naming: DesignName,
    components?: DesignComponents<CollageItemComponents, CollageItemProps>,
    slots?: CollageItemSlots,
    emits?: ConstrEmit<CollageItemEmits>,
    constructors?: Partial<CollageItemConstructors>,
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

    this.i('dimensions')
  }

  /**
   * Bindings and data attributes for the root element.
   *
   * Привязки и data-атрибуты для корневого элемента.
   * @returns element bindings object / объект привязок элемента
   */
  get binds(): ConstrBind {
    return this.i('dimensions').binds
  }

  /**
   * Values for the class.
   *
   * Значения для класса.
   * @returns classes values / значения классов
   */
  get classes(): ConstrClassObject {
    const position = this.props.collageBarPosition
      ?? this.props.collageBarAttrs?.position

    if (position) {
      return {
        [this.naming.getStatusClass('collageBarPosition', position)]: true
      }
    }

    return {}
  }

  /**
   * Dynamic inline CSS styles for the root element.
   *
   * Динамические инлайн-стили CSS для корневого элемента.
   * @returns styles object / объект стилей
   */
  get styles(): ConstrStyles {
    return this.i('dimensions').styles
  }

  /**
   * HTML tag for the interactive body element.
   *
   * HTML-тег для интерактивного элемента тела.
   * @returns tag name / название тега
   */
  get tag(): string {
    return this.props.tag || 'a'
  }
}
