import { type Ref, type ToRefs } from 'vue'
import { type ConstrEmit, type DesignComp } from '@dxtmisha/functional'

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

/**
 * Class representing the business logic and structure of the Avatar component.
 * It orchestrates label, image, badge, and skeletal loading states.
 *
 * Класс, представляющий бизнес-логику и структуру компонента Avatar.
 * Координирует метку, изображение, бейдж и состояние скелетона при загрузке.
 */
export class Avatar {
  /** Skeleton loading controller / Контроллер скелетона загрузки */
  readonly skeleton: SkeletonInclude

  /** Enabled state controller / Контроллер состояния активности */
  readonly enabled: EnabledInclude

  /** Image controller / Контроллер изображения */
  readonly image: ImageInclude

  /** Label controller / Контроллер метки */
  readonly label: LabelInclude

  /** Badge controller / Контроллер бейджа */
  readonly badge: BadgeInclude

  /** Click event controller / Контроллер события клика */
  readonly event: EventClickInclude

  /**
   * Constructor for Avatar.
   *
   * Конструктор для Avatar.
   * @param props input data / входные данные
   * @param refs input data in the form of reactive elements / входные данные в виде reactive elements
   * @param element input element / элемент ввода
   * @param classDesign design name / название дизайна
   * @param className class name / название класса
   * @param components object for working with components / объект для работы с компонентами
   * @param slots object for working with slots / объект для работы со слотами
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   * @param constructors object with classes / объект с классами
   * @param constructors.BadgeIncludeConstructor class for working with badge / класс для работы с бейджем
   * @param constructors.ImageIncludeConstructor class for working with image / класс для работы с изображением
   * @param constructors.LabelIncludeConstructor class for working with label / класс для работы с меткой
   * @param constructors.SkeletonIncludeConstructor class for working with skeleton / класс для работы со скелетоном
   * @param constructors.EventClickIncludeConstructor class for working with event click / класс для работы с событием клика
   * @param constructors.EnabledIncludeConstructor class for working with enabled state / класс для работы с состоянием активности
   */
  constructor(
    protected readonly props: AvatarProps,
    protected readonly refs: ToRefs<AvatarProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<AvatarComponents, AvatarProps>,
    protected readonly slots?: AvatarSlots,
    protected readonly emits?: ConstrEmit<AvatarEmits>,
    constructors: {
      BadgeIncludeConstructor?: typeof BadgeInclude
      ImageIncludeConstructor?: typeof ImageInclude
      LabelIncludeConstructor?: typeof LabelInclude
      SkeletonIncludeConstructor?: typeof SkeletonInclude
      EventClickIncludeConstructor?: typeof EventClickInclude
      EnabledIncludeConstructor?: typeof EnabledInclude
    } = {}
  ) {
    const {
      BadgeIncludeConstructor = BadgeInclude,
      ImageIncludeConstructor = ImageInclude,
      LabelIncludeConstructor = LabelInclude,
      SkeletonIncludeConstructor = SkeletonInclude,
      EventClickIncludeConstructor = EventClickInclude,
      EnabledIncludeConstructor = EnabledInclude
    } = constructors

    this.skeleton = new SkeletonIncludeConstructor(props, classDesign, ['classBackground'])
    this.enabled = new EnabledIncludeConstructor(props)

    this.image = new ImageIncludeConstructor(
      className,
      props,
      components,
      () => ({
        disabled: this.props.disabled
      }),
      emits
    )

    this.label = new LabelIncludeConstructor(
      () => this.labelProps,
      className,
      undefined,
      slots,
      undefined,
      undefined,
      undefined,
      this.skeleton
    )
    this.badge = new BadgeIncludeConstructor(
      className,
      props,
      components,
      { overlap: 'circular' }
    )

    this.event = new EventClickIncludeConstructor(props, this.enabled, emits)
  }

  /** Tag type / Тип тега */
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
   * Values for attributes (including ARIA attributes). /
   * Возвращает значения для атрибутов (включая ARIA-атрибуты).
   */
  get binds(): Record<string, any> {
    return {
      ...this.event.binds,
      tabindex: this.enabled.isEnabled ? this.props.tabindex : undefined,
      ...AriaStaticInclude.role(this.enabled.isEnabled ? 'button' : 'img'),
      ...AriaStaticInclude.label(this.props.ariaLabel ?? this.props.label)
    }
  }

  /**
   * Returns classes for the skeleton /
   * Возвращает список классов для скелетона
   */
  get classes() {
    return this.skeleton.classes
  }

  /**
   * Returns properties for the label, taking into account the shortening flag. /
   * Возвращает свойства для метки с учетом флага сокращения.
   * @returns label properties / свойства метки
   */
  protected get labelProps(): LabelProps {
    return {
      label: this.getLabel(),
      labelId: this.props.labelId
    }
  }

  /**
   * Returns the label text, shortening it to initials if reduction is enabled. /
   * Возвращает текст метки, сокращая его до инициалов, если включено сокращение.
   * @returns label or initials / метка или инициалы
   */
  protected getLabel(): string | number | undefined {
    if (this.props.reduction) {
      const value = (this.props.label && String(this.props.label).trim()) || undefined

      if (value) {
        return value
          .split(/\s+/)
          .slice(0, 2)
          .map(word => word.charAt(0).toUpperCase())
          .join('')
      }
    }

    return this.props.label
  }
}
