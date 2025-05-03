import { computed, type VNode } from 'vue'
import { type ConstrEmit, DesignComponents, getBind, getRef, type RefOrNormal } from '@dxt-ui/functional'

import type { ImageEventData, ImageUseComponents, ImageUseEmits, ImageUseProps } from './basicTypes.ts'

/**
 * Класс для подключения и работы с компонентом изображения.
 *
 * A class for connecting to and working with the image component.
 */
export class ImageInclude {
  /**
   * Constructor for working with images.
   *
   * Конструктор для работы с изображениями.
   * @param props input parameter/ входной параметр
   * @param components object for working with components/ объект для работы с компонентами
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   * @param extra additional parameter/ дополнительный параметр
   */
  constructor(
    protected readonly props: ImageUseProps,
    protected readonly components?: DesignComponents<ImageUseComponents, ImageUseProps>,
    protected readonly emits?: ConstrEmit<ImageUseEmits>,
    protected readonly extra?: RefOrNormal<Record<string, any>>
  ) {
  }

  /**
   * Проверяет, есть ли изображение/ Checks if an image exists
   */
  readonly isImage = computed<boolean>(() => Boolean(this.props.image))

  /**
   * Возвращает данные для передачи компоненту/ Returns data to pass to the component
   */
  readonly bind = computed(() => getBind(this.props.image, getRef(this.extra), 'value'))

  render(): VNode[] {
    if (
      this.components
      && this.isImage.value
    ) {
      return this.components.render('image', this.bind.value)
    }

    return []
  }

  onLoad(event: ImageEventData) {
    this.emits?.('load', event)
  }
}
