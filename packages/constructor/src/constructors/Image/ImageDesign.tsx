import { computed, h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { Image } from './Image'

import {
  type ImageEventItem,
  type ImageRootAttrs,
  type ImageTypeItem,
  ImageTypeValue
} from './basicTypes'
import {
  type ImageClasses,
  type ImageComponents,
  type ImageEmits,
  type ImageExpose,
  type ImageSlots
} from './types'
import type { ImagePropsBasic } from './props'

/**
 * Assembles image, icon and PDF markup from the Image logic constructor.
 * Exposes the image API and connects reactive bindings to the rendered elements.
 *
 * Собирает разметку изображений, иконок и PDF на основе логического конструктора Image.
 * Предоставляет API изображения и связывает реактивные привязки с элементами разметки.
 */
export class ImageDesign<
  COMP extends ImageComponents,
  EXPOSE extends ImageExpose,
  CLASSES extends ImageClasses,
  P extends ImagePropsBasic
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    ImageEmits,
    EXPOSE,
    ImageSlots,
    CLASSES,
    P
  > {
  /** Image logic constructor / Логический конструктор изображения */
  protected readonly item: Image

  /**
   * Creates the image logic and initializes rendering and the exposed API.
   *
   * Создаёт логику изображения и инициализирует рендеринг и публичный API.
   * @param name class name / название класса
   * @param props properties / свойства
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor image item class / класс элемента изображения
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, ImageEmits, P>,
    ItemConstructor: typeof Image = Image
  ) {
    super(
      name,
      props,
      options
    )

    this.item = new ItemConstructor(
      this.props,
      this.element,
      this.naming,
      this.components,
      this.slots,
      this.emits
    )
  }

  /** Shared image element bindings / Общие привязки элемента изображения */
  readonly propsImage = computed<ImageRootAttrs>(() => ({
    ...this.getAttrs(),
    ref: this.element,
    key: 'image',
    class: this.classes?.value.main
  }))

  /** Root image bindings with styles and accessibility / Корневые привязки изображения со стилями и доступностью */
  readonly propsMain = computed<ImageRootAttrs>(() => ({
    ...this.propsImage.value,
    ...this.item.binds,
    style: this.styles?.value
  }))

  /**
   * Improvement of the obtained list of classes.
   *
   * Доработка полученного списка классов.
   * @returns image classes / классы изображения
   */
  protected initClasses(): Partial<CLASSES> {
    return {
      main: this.item.classes,
      ...{
        // :classes [!] System label / Системная метка
        // :classes [!] System label / Системная метка
      }
    } as Partial<CLASSES>
  }

  /**
   * Exposes the current image type and loaded data.
   *
   * Предоставляет текущий тип изображения и загруженные данные.
   * @returns public image API / публичный API изображения
   */
  protected initExpose(): EXPOSE {
    return {
      getType: (): ImageTypeItem => this.item.i('type').get(),
      getData: (): ImageEventItem => this.item.i('data').image.value
    } as EXPOSE
  }

  /**
   * A method for rendering.
   *
   * Метод для рендеринга.
   * @returns rendered image root / отрендеренный корневой элемент изображения
   */
  protected initRender(): VNode {
    const img = this.item.i('img')

    if (img.isPicture()) {
      return this.renderPicture()
    }

    if (img.is()) {
      return this.renderImg()
    }

    return h(
      'span',
      this.propsMain.value,
      this.renderValue()
    )
  }

  /**
   * Refinement of the received list of styles.
   *
   * Доработка полученного списка стилей.
   * @returns image styles / стили изображения
   */
  protected initStyles(): ConstrStyles {
    return this.item.styles
  }

  /**
   * Rendering the img tag.
   *
   * Рендеринг тега img.
   * @returns rendered img VNode / отрендеренный VNode img
   */
  protected readonly renderImg = (): VNode => {
    return h('span', this.propsImage.value, this.renderImgItem())
  }

  /**
   * Rendering the img item.
   *
   * Рендеринг элемента img.
   * @returns rendered img item VNode / отрендеренный VNode элемента img
   */
  protected readonly renderImgItem = (): VNode => {
    return h('img', this.item.i('img').binds.value)
  }

  /**
   * Rendering the picture tag.
   *
   * Рендеринг тега picture.
   * @returns rendered picture VNode / отрендеренный VNode picture
   */
  protected readonly renderPicture = (): VNode => {
    const list = this.item.i('img').picture.value
    const children: VNode[] = []

    if (list) {
      list.forEach(
        item => children.push(h('source', item))
      )
    }

    children.push(this.renderImgItem())

    return h('picture', this.propsImage.value, children)
  }

  /**
   * Rendering the value for the component.
   *
   * Рендеринг значения для компонента.
   * @returns rendered value / отрендеренное значение
   */
  protected readonly renderValue = (): string | VNode | undefined => {
    if (this.item.i('type').get() === ImageTypeValue.pdf) {
      return h(
        'object',
        this.item.valueBinds
      )
    }

    if (
      this.item.i('type').get() === ImageTypeValue.flagCompressed
    ) {
      return h(
        'span',
        { class: `ui-sys-flags ui-sys-flags--${this.item.i('text').get()}` }
      )
    }

    return this.item.i('text').get()
  }
}
