import { toArray } from '@dxtmisha/functional-basic'
import {
  FIGMA_FRAME_STYLES_MESSENGER_NAME,
  type UiFigmaFrameStylesList,
  type UiFigmaFrameStylesMessengerAttributes,
  type UiFigmaFrameStylesMessengerResponse
} from '@dxtmisha/figma'

import { getFigmaFrameById } from './getFigmaFrameById'
import { FigmaPluginMessenger } from '../classes/FigmaPluginMessenger'

/**
 * Sets up a listener for style update messages.
 *
 * Настраивает слушатель сообщений об обновлении стилей.
 */
export function setupFrameStyles() {
  /** Message instance/ Экземпляр сообщения */
  const message = FigmaPluginMessenger.getInstance()

  /**
   * Returns styles for the specified frame.
   *
   * Возвращает стили для указанного фрейма.
   * @param id node ID / идентификатор узла
   * @param children whether to return children styles / возвращать ли стили дочерних элементов
   */
  const getFrame = async (
    id: string,
    children: boolean
  ): Promise<UiFigmaFrameStylesList> => {
    const frame = await getFigmaFrameById(id)

    if (frame) {
      if (children) {
        return await frame.getItemsStyles()
      }

      return await frame.getMainItemsStyles()
    }

    return []
  }

  message.add(
    FIGMA_FRAME_STYLES_MESSENGER_NAME,
    async ({ ids, children }: UiFigmaFrameStylesMessengerAttributes) => {
      const idList = toArray(ids)
      const data: UiFigmaFrameStylesMessengerResponse = []

      for (const id of idList) {
        data.push({
          id,
          data: await getFrame(id, children ?? true)
        })
      }

      message.post(FIGMA_FRAME_STYLES_MESSENGER_NAME, data)
    })
}
