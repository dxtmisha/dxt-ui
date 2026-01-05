import { AiDocItemClasses } from '../../classes/Ai/AiDocItemClasses'

import type { AiDocTypes } from '../../types/aiTypes'

/** AI Documentation Types/ AI Документация Типы */
export const aiDocTypes: AiDocTypes = [
  {
    check: item => Boolean(item.path.match('/classes/')),
    item: AiDocItemClasses
  }
]
