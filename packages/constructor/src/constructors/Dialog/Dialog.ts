import { computed, readonly, type Ref, type ToRefs } from 'vue'
import { type ConstrEmit, type DesignComp, getBind } from '@dxtmisha/functional'

import { LabelInclude } from '../../classes/LabelInclude'
import { DescriptionInclude } from '../../classes/DescriptionInclude'
import { TextInclude } from '../../classes/TextInclude'

import { type ActionsInclude } from '../Actions'
import { type BarsInclude } from '../Bars'
import { IconInclude } from '../Icon'
import { ModalAbstract } from '../Modal/ModalAbstract'
import { WindowClassesInclude, type WindowInclude } from '../Window'

import type { DialogComponents, DialogEmits, DialogSlots } from './types'
import type { DialogProps } from './props'

/**
 * Dialog
 *
 * The class for working with a dialog window.
 * Класс для работы с диалоговым окном.
 */
export class Dialog extends ModalAbstract {
  /** icon/ иконка */
  readonly icon: IconInclude
  /** label/ метка */
  readonly label: LabelInclude
  /** description/ описание */
  readonly description: DescriptionInclude

  /** window classes/ классы окна */
  readonly windowClasses: WindowClassesInclude

  /** text translations/ текстовые переводы */
  readonly text: TextInclude

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
   * @param constructors object with classes/ объект с классами
   * @param constructors.ActionsConstructor class for creating actions/ класс для создания действий
   * @param constructors.BarsConstructor class for creating bars/ класс для создания панелей
   * @param constructors.DescriptionIncludeConstructor class for working with description/ класс для работы с описанием
   * @param constructors.IconIncludeConstructor class for working with icon/ класс для работы с иконкой
   * @param constructors.LabelIncludeConstructor class for working with label/ класс для работы с меткой
   * @param constructors.TextIncludeConstructor class for working with text/ класс для работы с текстом
   * @param constructors.WindowClassesIncludeConstructor class for working with window classes/ класс для работы с классами окна
   * @param constructors.WindowConstructor class for creating a window/ класс для создания окна
   */
  constructor(
    protected readonly props: DialogProps,
    protected readonly refs: ToRefs<DialogProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<DialogComponents, DialogProps>,
    protected readonly slots?: DialogSlots,
    protected readonly emits?: ConstrEmit<DialogEmits>,
    constructors?: {
      ActionsConstructor?: typeof ActionsInclude
      BarsConstructor?: typeof BarsInclude
      DescriptionIncludeConstructor?: typeof DescriptionInclude
      IconIncludeConstructor?: typeof IconInclude
      LabelIncludeConstructor?: typeof LabelInclude
      TextIncludeConstructor?: typeof TextInclude
      WindowClassesIncludeConstructor?: typeof WindowClassesInclude
      WindowConstructor?: typeof WindowInclude
    }
  ) {
    const {
      DescriptionIncludeConstructor = DescriptionInclude,
      IconIncludeConstructor = IconInclude,
      LabelIncludeConstructor = LabelInclude,
      TextIncludeConstructor = TextInclude,
      WindowClassesIncludeConstructor = WindowClassesInclude
    } = constructors ?? {}

    super(
      props,
      refs,
      element,
      classDesign,
      className,
      components,
      slots,
      emits,
      computed(() => ({
        open: props.open,
        image: props.image,

        adaptive: 'modal',
        imagePosition: props.imagePosition,
        closeButton: this.props.closeButton
      })),
      undefined,
      computed(() => {
        const list = []

        if (props.buttonClose !== null) {
          list.push(
            getBind(
              props.buttonClose,
              {
                label: this.text.close.value,
                value: 'close',
                class: this.windowClasses.get().close,
                onClick: () => this.emits?.('close')
              },
              'label',
              true
            )
          )
        }

        if (props.buttonOk !== null) {
          list.push(
            getBind(
              props.buttonOk,
              {
                label: this.text.ok.value,
                value: 'ok',
                class: this.props.clickOkAndClose ? this.windowClasses.get().close : undefined,
                onClick: () => this.emits?.('ok')
              },
              'label',
              true
            )
          )
        }

        return {
          list,
          align: 'center'
        }
      }),
      constructors
    )

    this.icon = new IconIncludeConstructor(
      readonly<any>({ icon: this.iconValue }),
      className,
      components,
      refs.iconAttrs
    )
    this.label = new LabelIncludeConstructor(
      props,
      className,
      undefined,
      slots,
      undefined,
      undefined,
      true
    )
    this.description = new DescriptionIncludeConstructor(props, className, slots)

    this.windowClasses = new WindowClassesIncludeConstructor(classDesign)
    this.text = new TextIncludeConstructor(this.props)
  }

  /**
   * Returns the icon for display.
   *
   * Возвращает иконку для отображения.
   */
  protected readonly iconValue = computed(() => {
    if (this.props.success) {
      return this.props.iconSuccess
    }

    if (this.props.error) {
      return this.props.iconError
    }

    return this.props.icon
  })
}
