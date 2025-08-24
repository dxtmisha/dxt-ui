import { computed, ref, type ToRefs, watch } from 'vue'
import type { BarsProps } from './props'

/**
 * Управление action‑режимом для Bars.
 *
 * Controls Bars action mode.
 */
export class BarsAction {
  /** Текущее состояние action‑режима / Current action mode state */
  readonly action = ref<boolean>(false)

  /**
   * Constructor
   * @param props input data/ входные данные
   * @param refs input data in the form of reactive elements/ входные данные в виде реактивных элементов
   */
  constructor(
    protected readonly props: BarsProps,
    protected readonly refs: ToRefs<BarsProps>
  ) {
    if (refs.action) {
      watch(
        refs.action,
        (action) => {
          this.action.value = Boolean(action)
        },
        { immediate: true }
      )
    }
  }

  /** Вычисляемый флаг активности action / Computed active flag */
  readonly is = computed<boolean>(() => this.props.action || this.action.value)

  /**
   * Включить action‑режим.
   *
   * Enable action mode.
   */
  open() {
    if (!this.action.value) {
      this.action.value = true
    }
  }

  /**
   * Выключить action‑режим.
   *
   * Disable action mode.
   */
  close() {
    if (this.action.value) {
      this.action.value = false
    }
  }
}
