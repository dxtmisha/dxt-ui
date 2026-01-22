import type { LibraryData } from '../../types/libraryTypes'

import { PropertiesConfig } from '../Properties/PropertiesConfig'
import { PropertiesFile } from '../Properties/PropertiesFile'

import { UI_DIRS_COMPONENTS } from '../../config'

export class LibraryAiWikiItem {
  constructor(
    protected readonly item: LibraryData
  ) {
  }

  isAiWiki(): boolean {
    return PropertiesFile.is(this.getPath())
  }

  getCode(): string {
    return this.item.codeFull
  }

  getComponentFileNameAiWiki(): string {
    return `${this.item.codeFull}AiWiki.vue`
  }

  getImport(): string {
    const code = this.item.codeFull
    const path: string[] = [
      '..',
      '..',
      ...this.getPath()
    ]

    return `import ${code} from '${path.join('/')}'`
  }

  protected getPath(): string[] {
    return [
      ...UI_DIRS_COMPONENTS,
      PropertiesConfig.getProjectName(),
      this.item.dir,
      this.getComponentFileNameAiWiki()
    ]
  }
}
