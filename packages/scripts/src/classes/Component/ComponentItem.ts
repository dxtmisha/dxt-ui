import { toKebabCase } from '@dxt-ui/functional'

import { PropertiesFile } from '../Properties/PropertiesFile'

import { UI_FILE_PACKAGE } from '../../config'

const DIR_SAMPLE = [__dirname, '..', '..', 'media', 'templates', 'componentDoc']

export class ComponentItem {
  constructor(
    protected readonly path: string
  ) {
  }

  make(): void {
    console.info('Component create:', this.getName())
    console.info('path:', this.path, this.getFilesSample())

    this
      .getFilesSample()
      .forEach((path) => {
        this.writeFile(
          path,
          this.replacement(this.readFile(path))
        )
      })
  }

  protected getName(): string {
    const parts = PropertiesFile.splitForDir(this.path)
    return parts[parts.length - 1]
  }

  protected getProjectName(): string {
    return this.readPackage()?.name ?? 'Project'
  }

  protected getFilePath(path: string): string[] {
    return [...DIR_SAMPLE, path]
  }

  protected getFilesSample(): string[] {
    return PropertiesFile.readDirRecursive(DIR_SAMPLE)
  }

  protected readFile(path: string): string {
    return String(PropertiesFile.readFile(this.getFilePath(path)))
  }

  protected readPackage(): Record<string, any> {
    return PropertiesFile.readFile(UI_FILE_PACKAGE) ?? {}
  }

  protected writeFile(path: string, content: string): void {
    PropertiesFile.writeByPath(
      this.getFilePath(path),
      content
    )
  }

  protected replacement(content: string): string {
    return content
      .replace(/ComponentDoc/g, this.getName())
      .replace(/component-doc/g, toKebabCase(this.getName()))
      .replace(/\[project]/g, this.getProjectName())
  }
}
