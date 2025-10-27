import { computed, ref } from 'vue'
import { ScrollbarWidth } from '@dxtmisha/functional-basic'

/**
 * Class for getting the scroll width as a reactive item.
 *
 * Класс для получения ширины скролла в виде реактивного элемента.
 */
export class ScrollbarWidthRef {
  /**
   * Reactive item.
   *
   * Реактивный элемент.
   */
  readonly item = ref<boolean>()

  /**
   * Constructor
   */
  constructor() {
    ScrollbarWidth.is().then((is) => {
      this.item.value = is
    })
  }

  /**
   * Checks whether the scroll width is defined.
   *
   * Проверяет, определена ли ширина скролла.
   */
  readonly is = computed<boolean>(() => this.item.value !== undefined)
}
