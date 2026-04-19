import { computed, ref } from 'vue'
import { isDomRuntime, ScrollbarWidth } from '@dxtmisha/functional-basic'

/**
 * Class for getting the scroll width as a reactive item.
 *
 * Класс для получения ширины скролла в виде реактивного элемента.
 */
export class ScrollbarWidthRef {
  /** Reactive item/ Реактивный элемент */
  readonly item = ref<boolean>()

  /** Reactive width/ Реактивная ширина */
  readonly width = ref<number>(0)

  /**
   * Constructor
   */
  constructor() {
    if (isDomRuntime()) {
      ScrollbarWidth.is().then((is) => {
        this.item.value = is
      })

      ScrollbarWidth.get().then((width) => {
        this.width.value = width
      })
    }
  }

  /**
   * Checks whether the scroll width is defined.
   *
   * Проверяет, определена ли ширина скролла.
   */
  readonly is = computed<boolean>(() => this.item.value !== undefined)
}
