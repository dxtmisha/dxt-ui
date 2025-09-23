import { PropertiesFile } from '../Properties/PropertiesFile'

export class ComponentItem {
  constructor(
    protected readonly path: string
  ) {
  }

  make(): void {
    console.info('Component create:', this.getName())
    console.info('path:', this.path)
  }

  protected getName(): string {
    const parts = PropertiesFile.splitForDir(this.path)
    return parts[parts.length - 1]
  }
}
