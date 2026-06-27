import { type Ref, type ToRefs } from 'vue'
import { type ConstrEmit, type DesignComp } from '@dxtmisha/functional'

import { BadgeInclude } from '../Badge'
import { ImageInclude } from '../Image'
import { SkeletonInclude } from '../Skeleton'

import { LabelInclude } from '../../classes/LabelInclude'

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

  /** Image controller / Контроллер изображения */
  readonly image: ImageInclude

  /** Label controller / Контроллер метки */
  readonly label: LabelInclude

  /** Badge controller / Контроллер бейджа */
  readonly badge: BadgeInclude

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
    } = {}
  ) {
    const {
      BadgeIncludeConstructor = BadgeInclude,
      ImageIncludeConstructor = ImageInclude,
      LabelIncludeConstructor = LabelInclude,
      SkeletonIncludeConstructor = SkeletonInclude
    } = constructors

    this.skeleton = new SkeletonIncludeConstructor(props, classDesign, ['classBackground'])

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
      props,
      className,
      undefined,
      slots,
      undefined,
      undefined,
      undefined,
      this.skeleton
    )

    this.badge = new BadgeIncludeConstructor(className, props, components)
  }

  /**
   * Returns classes for the skeleton /
   * Возвращает список классов для скелетона
   */
  get classes() {
    return this.skeleton.classes
  }
}
