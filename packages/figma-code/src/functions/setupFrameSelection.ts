import { UI_FIGMA_FRAME_SET_SELECTION } from '@dxtmisha/figma'

import { makeFigmaFrameSelection } from './makeFigmaFrameSelection'
import { toFrameSelection } from './toFrameSelection'

import { FigmaPluginMessenger } from '../classes/FigmaPluginMessenger'

/**
 * Sets up bidirectional frame selection management.
 *
 * 1. Activates automatic selection tracking (Backend -> UI).
 * 2. Sets up a listener for programmatic selection requests (UI -> Backend).
 *
 * Настраивает двустороннее управление выделением фреймов.
 *
 * 1. Активирует автоматическое отслеживание выделения (Backend -> UI).
 * 2. Устанавливает слушатель для запросов программного выделения (UI -> Backend).
 */
export function setupFrameSelection() {
  const message = FigmaPluginMessenger.getInstance()

  makeFigmaFrameSelection()

  message.add(UI_FIGMA_FRAME_SET_SELECTION, ({ id }: { id: string }) => {
    toFrameSelection(id)
      .then()
  })
}
