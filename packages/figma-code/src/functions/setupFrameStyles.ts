import {
  FIGMA_FRAME_STYLES_MESSENGER_NAME,
  type UiFigmaFrameStylesList,
  type UiFigmaFrameStylesMessengerAttributes,
  type UiFigmaFrameStylesMessengerResponse
} from '@dxtmisha/figma'
import { toArray } from '@dxtmisha/functional-basic'

import { FigmaPluginMessenger } from '../classes/FigmaPluginMessenger'
import { getFigmaFrameById } from './getFigmaFrameById'

/**
 * Sets up a listener for style update messages.
 *
 * Настраивает слушатель сообщений об обновлении стилей.
 */
export function setupFrameStyles(): void {
  /** Message instance / Экземпляр сообщения */
  const message = FigmaPluginMessenger.getInstance()

  /**
   * Returns styles for the specified frame.
   *
   * Возвращает стили для указанного фрейма.
   * @param id node ID / идентификатор узла
   * @param children whether to return children styles / возвращать ли стили дочерних элементов
   * @returns promise with frame styles list / промис со списком стилей фрейма
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
    }
  )
}
