import { computed, onMounted, ref } from 'vue'
import type { ClientOnlyPropsInclude } from '../types/clientOnlyTypes'

/**
 * Class for managing component rendering only on the client side.
 *
 * Класс для управления рендерингом компонента только на стороне клиента.
 */
export class ClientOnlyInclude {
  /** Check if the component is mounted / Проверка, смонтирован ли компонент */
  isMounted = ref<boolean>(false)

  /**
   * Constructor
   * @param props input data / входные данные
   */
  constructor(
    protected readonly props: ClientOnlyPropsInclude
  ) {
    onMounted(() => {
      this.isMounted.value = true
    })
  }

  /** Is the component ready for rendering / Готов ли компонент к рендерингу */
  readonly isRender = computed(() => !this.props.clientOnly || this.isMounted.value)
}
