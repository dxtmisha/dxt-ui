import { computed, readonly, type Ref, type ToRefs } from 'vue'
import { type ConstrEmit, DesignComp, getBind, Translate } from '@dxtmisha/functional'

import { ModalAbstract } from '../Modal/ModalAbstract'
import { WindowClassesInclude } from '../Window'
import { IconInclude } from '../Icon'
import { LabelInclude } from '../../classes/LabelInclude'
import { DescriptionInclude } from '../../classes/DescriptionInclude'

import type { DialogComponents, DialogEmits, DialogSlots } from './types'
import type { DialogProps } from './props'

/**
 * Dialog
 */
export class Dialog extends ModalAbstract {
  readonly icon: IconInclude
  readonly label: LabelInclude
  readonly description: DescriptionInclude

  readonly windowClasses: WindowClassesInclude

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
    protected readonly props: DialogProps,
    protected readonly refs: ToRefs<DialogProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<DialogComponents, DialogProps>,
    protected readonly slots?: DialogSlots,
    protected readonly emits?: ConstrEmit<DialogEmits>
  ) {
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
                label: Translate.getSync('global-close'),
                value: 'close',
                class: this.windowClasses.get().close,
                onClick: () => this.emits?.('close')
              },
              'label'
            )
          )
        }

        if (props.buttonOk !== null) {
          list.push(getBind(
            props.buttonOk,
            {
              label: Translate.getSync('global-ok'),
              value: 'ok',
              class: this.props.clickOkAndClose ? this.windowClasses.get().close : undefined,
              onClick: () => this.emits?.('ok')
            },
            'label'
          ))
        }

        return {
          list,
          align: 'center'
        }
      })
    )

    this.icon = new IconInclude(
      readonly<any>({ icon: this.iconValue }),
      className,
      components,
      refs.iconAttrs
    )
    this.label = new LabelInclude(
      props,
      className,
      undefined,
      slots,
      undefined,
      undefined,
      true
    )
    this.description = new DescriptionInclude(props, className, slots)

    this.windowClasses = new WindowClassesInclude(classDesign)
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
