import { AiDocItemClasses } from '../../classes/Ai/AiDocItemClasses'
import { AiDocItemComposables } from '../../classes/Ai/AiDocItemComposables'

import type { AiDocTypes } from '../../types/aiTypes'

/** AI Documentation Types/ AI Документация Типы */
export const aiDocTypes: AiDocTypes = [
  {
    check: item => Boolean(item.path.match('/classes/')),
    item: AiDocItemClasses
  },
  {
    check: item => Boolean(item.path.match('/composables/')),
    item: AiDocItemComposables
  }
]
