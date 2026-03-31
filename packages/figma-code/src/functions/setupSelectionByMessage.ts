import { UI_FIGMA_FRAME_SET_SELECTION } from '@dxtmisha/figma'
import { useFigmaPluginMessenger } from '../composables/useFigmaPluginMessenger'
import { toFrameSelection } from './toFrameSelection'

/**
 * Sets up the selection by message.
 *
 * Устанавливает выборку по сообщению.
 */
export function setupSelectionByMessage() {
  const message = useFigmaPluginMessenger()

  message.add(UI_FIGMA_FRAME_SET_SELECTION, ({ id }: { id: string }) => {
    console.log('id', id)
    toFrameSelection(id)
      .then()
  })
}
