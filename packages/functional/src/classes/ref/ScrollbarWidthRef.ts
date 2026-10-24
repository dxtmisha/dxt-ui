import { computed, ref } from 'vue'
import { isDomRuntime, ScrollbarWidth } from '@dxtmisha/functional-basic'

/**
 * Reactive wrapper for asynchronous scrollbar measurement. In a DOM runtime it requests the scrollbar flag and pixel width independently through `ScrollbarWidth`.
 *
 * Реактивная обёртка асинхронного измерения полосы прокрутки. В DOM-среде независимо запрашивает флаг и ширину в пикселях через `ScrollbarWidth`.
 */
export class ScrollbarWidthRef {
  /** Result of ScrollbarWidth.is(): true for a measured width other than -1 that is at most 8 pixels; initially undefined. / Результат ScrollbarWidth.is(): true для измеренной ширины не равной -1 и не больше 8 пикселей; изначально undefined. */
  readonly item = ref<boolean>()

  /** Width in pixels; initially 0 and updated independently. / Ширина в пикселях; изначально 0, обновляется независимо. */
  readonly width = ref<number>(0)

  /**
   * Initializes ScrollbarWidthRef with the supplied configuration.
   *
   * Инициализирует ScrollbarWidthRef с переданными настройками.
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

  /** True once item is defined, regardless of the flag value or width readiness. / Истина после определения item независимо от значения флага и готовности ширины. */
  readonly is = computed<boolean>(() => this.item.value !== undefined)
}
