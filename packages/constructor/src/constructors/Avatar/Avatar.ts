import {
  type ConstrBind,
  type ConstrClassObject,
  type ConstrItems,
  DesignLogicAbstract
} from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { EnabledInclude } from '../../classes/EnabledInclude'
import { EventClickInclude } from '../../classes/EventClickInclude'
import { LabelInclude } from '../../classes/LabelInclude'

import { BadgeInclude } from '../Badge'
import { ImageInclude } from '../Image'
import { SkeletonInclude } from '../Skeleton'

import type { LabelProps } from '../../types/labelTypes'
import type { AvatarComponents, AvatarEmits, AvatarSlots } from './types'
import type { AvatarProps } from './props'

/** Avatar dependency constructors type / Тип конструкторов зависимостей Avatar */
export type AvatarConstructors = {
  /** Badge include constructor / Конструктор подключения бейджа */
  badge: typeof BadgeInclude
  /** Enabled state constructor / Конструктор состояния активности */
  enabled: typeof EnabledInclude
  /** Event click constructor / Конструктор события клика */
  event: typeof EventClickInclude
  /** Image include constructor / Конструктор подключения изображения */
  image: typeof ImageInclude
  /** Label include constructor / Конструктор подключения метки */
  label: typeof LabelInclude
  /** Skeleton include constructor / Конструктор подключения скелетона */
  skeleton: typeof SkeletonInclude
}

/**
 * Class representing the business logic and structure of the Avatar component.
 * It orchestrates label, image, badge, click events, and skeletal loading states.
 *
 * Класс, представляющий бизнес-логику и структуру компонента Avatar.
 * Координирует метку, изображение, бейдж, события клика и состояние скелетона при загрузке.
 */
export class Avatar extends DesignLogicAbstract<
  HTMLDivElement,
  AvatarComponents,
  AvatarEmits,
  AvatarSlots,
  AvatarProps,
  AvatarConstructors
> {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<AvatarConstructors> = {
    badge: {
      item: BadgeInclude,
      canCreate: () => BadgeInclude.is(this.props),
      parameters: () => [
        this.props,
        this.naming,
        this.components,
        { overlap: 'circular' }
      ]
    },
    enabled: {
      item: EnabledInclude,
      parameters: () => [this.props]
    },
    event: {
      item: EventClickInclude,
      parameters: () => [
        this.props,
        () => this.i('enabled'),
        this.emits
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
        () => ({
          disabled: this.props.disabled
        })
      ]
    },
    label: {
      item: LabelInclude,
      canCreate: () => LabelInclude.is(this.labelProps, this.slots),
      parameters: () => [
        () => this.labelProps,
        this.naming,
        undefined,
        this.slots,
        undefined,
        undefined,
        undefined,
        () => this.callInstance('skeleton', item => item)
      ]
    },
    skeleton: {
      item: SkeletonInclude,
      canCreate: () => SkeletonInclude.is(this.props),
      parameters: () => [
        this.props,
        this.naming,
        ['classBackground']
      ]
    }
  }

  /**
   * Returns HTML and ARIA attribute bindings for the root avatar element.
   *
   * Возвращает привязки HTML и ARIA-атрибутов для корневого элемента аватара.
   * @returns root element bindings / привязки корневого элемента
   */
  get binds(): ConstrBind {
    const isEnabled = this.i('enabled').isEnabled

    return {
      ...this.i('event').binds,
      tabindex: isEnabled ? this.props.tabindex : undefined,
      ...AriaStaticInclude.role(this.role),
      ...AriaStaticInclude.label(this.props.ariaLabel ?? this.props.label)
    }
  }

  /**
   * Returns computed classes for the avatar root element.
   *
   * Возвращает вычисляемые классы для корневого элемента аватара.
   * @returns classes object / объект классов
   */
  get classes(): ConstrClassObject {
    return this.callInstance('skeleton', item => item.classes, {})
  }

  /**
   * Returns the ARIA role for the root avatar element.
   *
   * Возвращает ARIA-роль для корневого элемента аватара.
   * @returns role attribute or undefined / атрибут role или undefined
   */
  get role(): string | undefined {
    if (this.tag === 'a') {
      return undefined
    }

    return this.i('enabled').isEnabled ? 'button' : 'img'
  }

  /**
   * Returns the root tag name (`a` when link props are provided, otherwise `div`).
   *
   * Возвращает имя корневого тега (`a` при наличии свойств ссылки, иначе `div`).
   * @returns tag name / имя тега
   */
  get tag(): string {
    if (
      this.props.to
      || this.props.href
    ) {
      return 'a'
    }

    return 'div'
  }

  /**
   * Returns properties for the label, taking into account the shortening flag.
   *
   * Возвращает свойства для метки с учётом флага сокращения.
   * @returns label properties / свойства метки
   */
  protected get labelProps(): LabelProps {
    return {
      label: this.getLabel(),
      labelId: this.props.labelId
    }
  }

  /**
   * Returns the label text, shortening it to initials if reduction is enabled.
   *
   * Возвращает текст метки, сокращая его до инициалов, если включено сокращение.
   * @returns label or initials / метка или инициалы
   */
  protected getLabel(): string | number | undefined {
    if (
      this.props.reduction
      && this.props.label !== undefined
      && this.props.label !== null
    ) {
      const value = String(this.props.label).trim()

      if (value) {
        return value
          .split(/\s+/)
          .slice(0, 2)
          .map(word => Array.from(word)[0]?.toUpperCase() ?? '')
          .join('')
      }
    }

    return this.props.label
  }
}
