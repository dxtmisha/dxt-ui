import { getNameDirByPaths } from '../../functions/getNameDirByPaths'

export class ComponentWiki {
  constructor() {
  }

  make(): void {
    console.log('ComponentDoc', this.getName())
    this
      .readALlFiles()
      .then(() => {

      })
  }

  protected getRoot(): string {
    return process.cwd().replace(/wiki$/g, '')
  }

  protected getName(): string {
    return getNameDirByPaths(this.getRoot())
  }

  protected async readALlFiles(): Promise<string> {

  }
}
