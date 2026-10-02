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
      getFile: this.item.file.getFile,
      getStatus: () => this.item.status.status,
      delete: () => this.item.event.onDelete(),
      retry: () => this.item.event.onRetry()
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
      main: {},
      ...{
        // :classes [!] System label / Системная метка
        thumbnail: this.getSubClass('thumbnail'),
        thumbnailImage: this.getSubClass('thumbnailImage'),
        body: this.getSubClass('body'),
        label: this.getSubClass('label'),
        caption: this.getSubClass('caption'),
        progress: this.getSubClass('progress'),
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
    return h(
      'div',
      {
        ...this.getAttrs(),
        ...this.item.aria,
        class: this.classes?.value.main
      },
      this.renderChildren()
    )
  }

  /**
   * Rendering method for children nodes based on appearance mode.
   *
   * Метод рендеринга дочерних узлов в зависимости от режима отображения.
   * @returns array of virtual nodes / массив виртуальных нод
   */
  readonly renderChildren = (): VNode[] => {
    if (this.item.appearance.isTile()) {
      return this.renderTile()
    }

    if (this.item.appearance.isCompact()) {
      return this.renderCompact()
    }

    return this.renderList()
  }

  /**
   * Rendering method for tile appearance layout.
   *
   * Метод рендеринга для плиточного режима отображения.
   * @returns array of virtual nodes / массив виртуальных нод
   */
  readonly renderTile = (): VNode[] => {
    return [
      ...this.renderThumbnail(),
      ...this.renderProgress(),
      ...this.renderActions()
    ]
  }

  /**
   * Rendering method for compact appearance layout.
   *
   * Метод рендеринга для компактного режима отображения.
   * @returns array of virtual nodes / массив виртуальных нод
   */
  readonly renderCompact = (): VNode[] => {
    return [
      ...this.item.label.render(),
      ...this.renderStatus(),
      ...this.renderActions()
    ]
  }

  /**
   * Rendering method for list (default) appearance layout.
   *
   * Метод рендеринга для списочного (по умолчанию) режима отображения.
   * @returns array of virtual nodes / массив виртуальных нод
   */
  readonly renderList = (): VNode[] => {
    return [
      ...this.renderThumbnail(),
      ...this.renderBody(),
      ...this.renderActions()
    ]
  }

  /**
   * Rendering method for the action buttons (retry, delete).
   *
   * Метод рендеринга для кнопок действий (повтор, удаление).
   * @returns array of virtual nodes / массив виртуальных нод
   */
  readonly renderActions = (): VNode[] => {
    if (this.props.readonly) {
      return []
    }

    return [
      h(
        'div',
        { class: this.classes?.value.actions },
        [
          ...this.renderButtonRetry(),
          ...this.renderButtonDelete()
        ]
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
          ...this.renderProgress(),
          ...this.renderCaption()
        ]
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
    if (this.item.status.isError()) {
      return this.item.buttonRetry.render(undefined, {
        class: this.classes?.value.buttonRetry
      })
    }

    return []
  }

  /**
   * Rendering method for the caption and status message line.
   *
   * Метод рендеринга для строки подписи и статусного сообщения.
   * @returns array of virtual nodes / массив виртуальных нод
   */
  readonly renderCaption = (): VNode[] => {
    return this.item.caption.render([
      ...this.renderStatus(),
      this.item.status.message
    ])
  }

  /**
   * Rendering method for the progress bar.
   *
   * Метод рендеринга для индикатора прогресса.
   * @returns array of virtual nodes / массив виртуальных нод
   */
  readonly renderProgress = (): VNode[] => {
    if (this.item.status.isUploading()) {
      return this.item.progress.render(undefined, {
        class: this.classes?.value.progress
      })
    }

    return []
  }

  /**
   * Rendering method for the status indicator icon or spinner.
   *
   * Метод рендеринга для иконки индикатора статуса или спиннера.
   * @returns array of virtual nodes / массив виртуальных нод
   */
  readonly renderStatus = (): VNode[] => {
    if (
      this.item.status.isUploaded()
      || this.item.status.isError()
    ) {
      return this.item.iconStatus.renderIcon()
    }

    return []
  }

  /**
   * Rendering method for the thumbnail element.
   *
   * Метод рендеринга для элемента миниатюры.
   * @returns array of virtual nodes / массив виртуальных нод
   */
  readonly renderThumbnail = (): VNode[] => {
    return [
      h(
        'div',
        {
          class: this.classes?.value.thumbnail
        },
        this.item.image.render(undefined, {
          class: this.classes?.value.thumbnailImage
        })
      )
    ]
  }
}
