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

  /**
   * Checks if action mode is possible.
   *
   * Проверяет, возможен ли режим действий.
   */
  readonly isPossible = computed<boolean>(() => Boolean(
    this.props.actionLabel
    || this.props.actionDescription
    || this.props.actionBars
  ))

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
