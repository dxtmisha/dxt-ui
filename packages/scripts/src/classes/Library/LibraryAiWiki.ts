import type { LibraryData } from '../../types/libraryTypes'

import { PropertiesConfig } from '../Properties/PropertiesConfig'
import { PropertiesFile } from '../Properties/PropertiesFile'

import { UI_DIRS_COMPONENTS } from '../../config'

export class LibraryAiWiki {
  constructor(
    protected readonly item: LibraryData
  ) {
  }

  isAiWiki(): boolean {
    return PropertiesFile.is(this.getAiWiki())
  }

  getComponentFileNameAiWiki(): string {
    return `${this.item.codeFull}AiWiki.vue`
  }

  getAiWiki(): string[] {
    return [
      ...UI_DIRS_COMPONENTS,
      PropertiesConfig.getProjectName(),
      this.item.dir,
      this.getComponentFileNameAiWiki()
    ]
  }
}
