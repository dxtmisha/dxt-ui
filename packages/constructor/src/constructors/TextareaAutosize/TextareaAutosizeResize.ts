import { nextTick, type Ref, ref, watch } from 'vue'
import { TextareaAutosizeValue } from './TextareaAutosizeValue'
import type { TextareaAutosizeProps } from './props'

/**
 * Class for managing the height of the field.
 *
 * Класс управления высотой поля.
 */
export class TextareaAutosizeResize {
  readonly clone = ref<HTMLDivElement>()

  /**
   * Constructor
   * @param props input data/ входные данные
   * @param element input element/ элемент ввода
   * @param value object for working with values/ объект для работы со значениями
   */
  constructor(
    protected readonly props: Readonly<TextareaAutosizeProps>,
    protected readonly element: Ref<HTMLTextAreaElement | undefined>,
    protected readonly value: TextareaAutosizeValue
  ) {
    watch(this.value.item, this.on)
    nextTick().then(() => requestAnimationFrame(this.on))
  }

  /**
   * Changes the size of the field.
   *
   * Изменяет размер поля.
   */
  readonly updateSize = () => {
    if (this.isElements()) {
      const style = getComputedStyle(this.element.value)
      const styleClone = this.clone.value.style

      styleClone.paddingTop = style.paddingTop
      styleClone.paddingRight = style.paddingRight
      styleClone.paddingBottom = style.paddingBottom
      styleClone.paddingLeft = style.paddingLeft
      styleClone.width = `${this.element.value.offsetWidth}px`
    }
  }

  /**
   * Event for updating size and value.
   *
   * Событие для обновления размера и значения.
   */
  readonly on = () => {
    this.updateSize()
    this.updateValue()
  }

  /**
   * Event for changing the value.
   *
   * Событие для изменения значения.
   * @param event invoked event/ вызываемое событие
   */
  readonly onInput = (event: InputEvent) => {
    this.value.on(event)

    this.updateSize()
    this.updateValue()
  }

  /**
   * Checks if all elements are present.
   *
   * Проверяет, есть ли все элементы.
   */
  protected isElements(): this is {
    element: Ref<HTMLInputElement>
    clone: Ref<HTMLDivElement>
  } {
    return Boolean(
      this.props.autosize
      && this.element.value
      && getComputedStyle(this.element.value).getPropertyValue('--sys-field-sizing-none') === '"--YES--"'
      && this.clone.value
    )
  }

  /**
   * Updates the content of the clone element.
   *
   * Обновляет содержимое элемента клона.
   */
  protected updateValue() {
    if (this.isElements()) {
      this.clone.value.innerText = `${this.value.item.value} --`

      requestAnimationFrame(this.updateHeight)
    }
  }

  /**
   * Updates the height of the field.
   *
   * Обновляет высоту поля.
   */
  protected readonly updateHeight = () => {
    if (this.isElements()) {
      this.element.value.style.height = `${this.clone.value.offsetHeight}px`
    }
  }
}
