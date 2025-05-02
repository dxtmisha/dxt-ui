import { computed, type VNode } from 'vue'
import {
  type ConstrEmit,
  DesignComponents,
  getBind,
  getRef,
  type RefOrNormal
} from '@dxt-ui/functional'

import type {
  ImageEventData,
  ImageUseComponents,
  ImageUseEmits,
  ImageUseProps
} from './basicTypes'

/**
 * Constructor for working with images.
 *
 * Конструктор для работы с изображениями.
 * @param props input parameter/ входной параметр
 * @param components object for working with components/ объект для работы с компонентами
 * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
 * @param extra additional parameter/ дополнительный параметр
 */
export function useImage(
  props: ImageUseProps,
  components?: DesignComponents<ImageUseComponents, ImageUseProps>,
  emits?: ConstrEmit<ImageUseEmits>,
  extra?: RefOrNormal<Record<string, any>>
) {
  const imageBind = computed(() => getBind(props.image, getRef(extra), 'value'))

  return {
    isImage: computed<boolean>(() => Boolean(props.image)),
    imageBind,

    onLoad(event: ImageEventData) {
      emits?.('load', event)
    },

    renderImage(): VNode[] {
      if (
        components
        && props.image
      ) {
        return components.render(
          'image',
          imageBind.value,
          undefined,
          'icon'
        )
      }

      return []
    }
  }
}
