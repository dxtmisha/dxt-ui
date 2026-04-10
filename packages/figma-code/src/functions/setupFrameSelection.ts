import { UI_FIGMA_FRAME_SET_SELECTION } from '@dxtmisha/figma'
import { FigmaPluginMessenger } from '../classes/FigmaPluginMessenger'
import { toFrameSelection } from './toFrameSelection'

/**
 * Sets up the selection by message.
 *
 * Устанавливает выборку по сообщению.
 */
export function setupFrameSelectionByMessage() {
  const message = FigmaPluginMessenger.getInstance()

  message.add(UI_FIGMA_FRAME_SET_SELECTION, ({ id }: { id: string }) => {
    toFrameSelection(id)
      .then()
  })
}
