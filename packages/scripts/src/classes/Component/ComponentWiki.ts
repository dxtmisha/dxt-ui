import { getNameDirByPaths } from '../../functions/getNameDirByPaths'
import { PropertiesFile, type PropertiesFilePath } from '../Properties/PropertiesFile'

import { UI_DIRS_COMPONENTS } from '../../config'

export class ComponentWiki {
  constructor(
    protected readonly path: string
  ) {
  }

  make(): void {
    console.log('ComponentDoc', this.path, this.getName())
    this
      .readALlFiles()
      .then(() => {

      })
  }

  protected getRoot(): string {
    return process.cwd()
  }

  protected getRootComponent(): string[] {
    return [
      this.getRoot(),
      ...UI_DIRS_COMPONENTS,
      this.path
    ]
  }

  protected getPathComponent(): string[] {
    return [
      ...this.getRootComponent(),
      `${this.getName()}.vue`
    ]
  }

  protected getName(): string {
    return String(getNameDirByPaths(this.getRootComponent()))
  }

  protected saveViteConfig() {
    PropertiesFile.
  }

  protected resetViteConfig() {

  }

  protected readViteTemplatesConfig() {

  }

  protected build() {

  }

  protected async readALlFiles(): Promise<void> {
    const path = this.getPathComponent()
    const content = await this.readFiles(path)

    console.info('content', content)
  }

  protected async readFiles(
    paths: PropertiesFilePath
  ): Promise<Record<string, any>> {
    const path = PropertiesFile.joinPath(paths)

    console.info('path', path)
    // console.info('tree', tree)

    return {}
  }
}
