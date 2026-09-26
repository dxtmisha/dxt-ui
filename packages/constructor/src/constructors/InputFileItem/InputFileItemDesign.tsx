import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { InputFileItem } from './InputFileItem'

import type { InputFileItemPropsBasic } from './props'
import type {
  InputFileItemClasses,
  InputFileItemComponents,
  InputFileItemEmits,
  InputFileItemExpose,
  InputFileItemSlots
} from './types'

/**
 * Design constructor class representing the visual assembly of the InputFileItem component.
 * It manages class lists, style lists, exposure options, and h-rendering.
 *
 * Класс конструктора дизайна, представляющий визуальную сборку компонента InputFileItem.
 * Управляет списками классов, стилей, экспортом свойств и рендерингом виртуальных узлов.
 */
export class InputFileItemDesign<
  COMP extends InputFileItemComponents,
  EXPOSE extends InputFileItemExpose,
  CLASSES extends InputFileItemClasses,
  P extends InputFileItemPropsBasic
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    InputFileItemEmits,
    EXPOSE,
    InputFileItemSlots,
    CLASSES,
    P
  > {
  /** Orchestrator item / Элемент оркестратора */
  protected readonly item: InputFileItem

  /**
   * Constructor.
   *
   * Конструктор.
   * @param name class name / название класса
   * @param props properties / свойства
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor constructors item class / класс элемента конструкторов
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, InputFileItemEmits, P>,
    ItemConstructor: typeof InputFileItem = InputFileItem
  ) {
    super(
      name,
      props,
      options
    )

    this.item = new ItemConstructor(
      this.props,
      this.refs,
      this.element,
      this.getDesign(),
      this.getName(),
      this.components,
      this.slots,
      this.emits
    )

    this.init()
  }

  /**
   * Initialization of all the necessary properties for work.
   *
   * Инициализация всех необходимых свойств для работы.
   * @returns object of exported properties / объект экспортируемых свойств
   */
  protected initExpose(): EXPOSE {
    return {
      file: this.props.file,
      status: this.item.statusItem.status,
      delete: () => this.item.eventItem.onDelete(),
      retry: () => this.item.eventItem.onRetry()
    } as EXPOSE
  }

  /**
   * Improvement of the obtained list of classes.
   *
   * Доработка полученного списка классов.
   * @returns list of classes / список классов
   */
  protected initClasses(): Partial<CLASSES> {
    return {
      main: this.item.classes,
      ...{
        // :classes [!] System label / Системная метка
        thumbnail: this.getSubClass('thumbnail'),
        thumbnailImage: this.getSubClass('thumbnailImage'),
        thumbnailPlaceholder: this.getSubClass('thumbnailPlaceholder'),
        body: this.getSubClass('body'),
        label: this.getSubClass('label'),
        caption: this.getSubClass('caption'),
        message: this.getSubClass('message'),
        progress: this.getSubClass('progress'),
        status: this.getSubClass('status'),
        actions: this.getSubClass('actions'),
        buttonDelete: this.getSubClass('buttonDelete'),
        buttonRetry: this.getSubClass('buttonRetry')
        // :classes [!] System label / Системная метка
      }
    } as Partial<CLASSES>
  }

  /**
   * Refinement of the received list of styles.
   *
   * Доработка полученного списка стилей.
   * @returns list of styles / список стилей
   */
  protected initStyles(): ConstrStyles {
    return {}
  }

  /**
   * Main rendering method.
   *
   * Главный метод рендеринга.
   * @returns rendered virtual node / отрендеренная виртуальная нода
   */
  protected initRender(): VNode {
    const appearance = this.props.appearance ?? 'list'

    if (appearance === 'tile') {
      return h(
        'div',
        {
          ...this.getAttrs(),
          ...this.item.binds,
          ref: this.element,
          class: this.classes?.value.main,
          style: this.styles?.value
        },
        [
          ...this.renderThumbnail(),
          ...(this.item.statusItem.isUploading ? this.renderProgress() : []),
          ...this.renderActions(),
          ...this.item.ripple.render()
        ]
      )
    }

    if (appearance === 'compact') {
      return h(
        'div',
        {
          ...this.getAttrs(),
          ...this.item.binds,
          ref: this.element,
          class: this.classes?.value.main,
          style: this.styles?.value
        },
        [
          ...this.item.label.render(),
          ...this.renderStatus(),
          ...this.renderActions(),
          ...this.item.ripple.render()
        ]
      )
    }

    return h(
      'div',
      {
        ...this.getAttrs(),
        ...this.item.binds,
        ref: this.element,
        class: this.classes?.value.main,
        style: this.styles?.value
      },
      [
        ...this.renderThumbnail(),
        ...this.renderBody(),
        ...this.renderActions(),
        ...this.item.ripple.render()
      ]
    )
  }

  /**
   * Rendering method for the thumbnail element.
   *
   * Метод рендеринга для элемента миниатюры.
   * @returns array of virtual nodes / массив виртуальных нод
   */
  readonly renderThumbnail = (): VNode[] => {
    if (!this.item.fileItem.hasThumbnail) {
      return []
    }

    const slotThumbnail = this.initSlot('thumbnail')
    if (slotThumbnail.length > 0) {
      return [
        h(
          'div',
          {
            class: [
              this.classes?.value.thumbnail,
              {
                [`${this.getName()}__thumbnail--checkered`]: this.props.checkered,
                [`${this.getName()}__thumbnail--error`]: this.item.statusItem.isError
              }
            ]
          },
          slotThumbnail
        )
      ]
    }

    return [
      h(
        'div',
        {
          class: [
            this.classes?.value.thumbnail,
            {
              [`${this.getName()}__thumbnail--checkered`]: this.props.checkered,
              [`${this.getName()}__thumbnail--error`]: this.item.statusItem.isError
            }
          ]
        },
        this.renderThumbnailContent()
      )
    ]
  }

  /**
   * Rendering method for the content inside thumbnail.
   *
   * Метод рендеринга для содержимого внутри миниатюры.
   * @returns array of virtual nodes / массив виртуальных нод
   */
  readonly renderThumbnailContent = (): VNode[] => {
    if (this.item.fileItem.imageValue) {
      return this.item.image.render()
    }

    return [
      h(
        'div',
        { class: this.classes?.value.thumbnailPlaceholder },
        this.components?.render('icon', {
          icon: this.props.iconFile ?? 'description'
        }) ?? []
      )
    ]
  }

  /**
   * Rendering method for the body section (label and caption/progress).
   *
   * Метод рендеринга для основной секции (метка и подпись/прогресс).
   * @returns array of virtual nodes / массив виртуальных нод
   */
  readonly renderBody = (): VNode[] => {
    return [
      h(
        'div',
        { class: this.classes?.value.body },
        [
          ...this.item.label.render(),
          ...this.renderCaption()
        ]
      )
    ]
  }

  /**
   * Rendering method for the caption and status message line.
   *
   * Метод рендеринга для строки подписи и статусного сообщения.
   * @returns array of virtual nodes / массив виртуальных нод
   */
  readonly renderCaption = (): VNode[] => {
    const slotCaption = this.initSlot('caption')
    if (slotCaption.length > 0) {
      return [
        h(
          'div',
          { class: this.classes?.value.caption },
          slotCaption
        )
      ]
    }

    const children: VNode[] = []

    if (this.item.statusItem.isUploading) {
      children.push(
        h(
          'span',
          { class: this.classes?.value.message },
          this.item.statusItem.message
        ),
        ...this.renderProgress()
      )
    } else if (this.item.statusItem.isUploaded || this.item.statusItem.isError) {
      children.push(
        ...this.renderStatus(),
        h(
          'span',
          {
            class: [
              this.classes?.value.message,
              {
                [`${this.getName()}__message--success`]: this.item.statusItem.isUploaded,
                [`${this.getName()}__message--error`]: this.item.statusItem.isError
              }
            ]
          },
          this.item.statusItem.message
        )
      )
    } else if (this.item.statusItem.message) {
      children.push(
        h(
          'span',
          { class: this.classes?.value.message },
          this.item.statusItem.message
        )
      )
    }

    if (children.length === 0) {
      return []
    }

    return [
      h(
        'div',
        { class: this.classes?.value.caption },
        children
      )
    ]
  }

  /**
   * Rendering method for the status indicator icon or spinner.
   *
   * Метод рендеринга для иконки индикатора статуса или спиннера.
   * @returns array of virtual nodes / массив виртуальных нод
   */
  readonly renderStatus = (): VNode[] => {
    const slotStatus = this.initSlot('status')
    if (slotStatus.length > 0) {
      return slotStatus
    }

    if (this.item.statusItem.isUploading) {
      return this.item.progress.render(undefined, {
        circular: true,
        class: this.classes?.value.status
      })
    }

    if (this.item.statusItem.isUploaded || this.item.statusItem.isError) {
      return [
        h(
          'span',
          {
            class: [
              this.classes?.value.status,
              {
                [`${this.getName()}__status--success`]: this.item.statusItem.isUploaded,
                [`${this.getName()}__status--error`]: this.item.statusItem.isError
              }
            ]
          },
          this.item.iconStatus.render()
        )
      ]
    }

    return []
  }

  /**
   * Rendering method for the progress bar.
   *
   * Метод рендеринга для индикатора прогресса.
   * @returns array of virtual nodes / массив виртуальных нод
   */
  readonly renderProgress = (): VNode[] => {
    if (!this.item.statusItem.isUploading) {
      return []
    }

    return this.item.progress.render(undefined, {
      class: this.classes?.value.progress
    })
  }

  /**
   * Rendering method for the action buttons (retry, delete).
   *
   * Метод рендеринга для кнопок действий (повтор, удаление).
   * @returns array of virtual nodes / массив виртуальных нод
   */
  readonly renderActions = (): VNode[] => {
    const slotActions = this.initSlot('actions')
    if (slotActions.length > 0) {
      return [
        h(
          'div',
          { class: this.classes?.value.actions },
          slotActions
        )
      ]
    }

    const buttons: VNode[] = []

    if (this.item.statusItem.isError) {
      buttons.push(...this.renderButtonRetry())
    }

    buttons.push(...this.renderButtonDelete())

    if (buttons.length === 0) {
      return []
    }

    return [
      h(
        'div',
        { class: this.classes?.value.actions },
        buttons
      )
    ]
  }

  /**
   * Rendering method for the delete action button.
   *
   * Метод рендеринга для кнопки действия удаления.
   * @returns array of virtual nodes / массив виртуальных нод
   */
  readonly renderButtonDelete = (): VNode[] => {
    return this.item.buttonDelete.render(undefined, {
      class: this.classes?.value.buttonDelete
    })
  }

  /**
   * Rendering method for the retry action button.
   *
   * Метод рендеринга для кнопки действия повтора.
   * @returns array of virtual nodes / массив виртуальных нод
   */
  readonly renderButtonRetry = (): VNode[] => {
    return this.item.buttonRetry.render(undefined, {
      class: this.classes?.value.buttonRetry
    })
  }
}
