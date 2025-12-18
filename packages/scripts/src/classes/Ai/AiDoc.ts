import { GitRead } from '../Git/GitRead'

import type { GitFileItem } from '../../types/gitTypes'
import { AiDocItem } from './AiDocItem.ts'

export class AiDoc {
  constructor(
    protected readonly type: string = 'storybook',
    protected readonly path: string = 'src/storybook',
    protected readonly dirs?: string[]
  ) {
  }

  make() {
    console.log(`AI documentation: ${this.path}`)

    this.makeClass().then()
  }

  async makeClass() {
    console.log('')
    console.log('Classes...')

    for (const item of this.getListClasses()) {
      await this.makeItem(item)
    }
  }

  protected getListClasses() {
    return GitRead.filterByDirectory(
      GitRead.getClassesList()
    )
  }

  protected async makeItem(item: GitFileItem) {
    const docItem = new AiDocItem(this.path, item)
    await docItem.make()
  }
}
