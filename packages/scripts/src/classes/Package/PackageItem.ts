import { PropertiesFile } from '../Properties/PropertiesFile'

const DIR_SAMPLE = [__dirname, '..', '..', 'media', 'templates', 'packages']

type PackageInitItemFile = {
  file: string
  path: string
  content: string
}

export class PackageInitItem {
  constructor(
    protected readonly dir: string[],
    protected readonly type: string,
    protected readonly templates?: string
  ) {
  }

  make() {
    console.log('Package init in:', this.dir)

    this.getSample()
      .forEach((item) => {
        console.log('item', item)
        this.writeFile(item.file, item.content)
      })
  }

  protected getSample(): PackageInitItemFile[] {
    return this.getFileByList([...DIR_SAMPLE, this.type])
  }

  protected getTemplates(): string[] {
    return this.templates
      ? PropertiesFile.readDirRecursive(this.templates)
      : []
  }

  protected getFile(
    file: string,
    path: string[]
  ): PackageInitItemFile {
    return {
      file: PropertiesFile.joinPath([...this.dir, file]),
      path: PropertiesFile.joinPath(path),
      content: String(PropertiesFile.readFileOnly(path))
    }
  }

  protected getFileByList(dir: string[]): PackageInitItemFile[] {
    const list = PropertiesFile.readDirRecursive(dir)
    const data: PackageInitItemFile[] = []

    list.forEach((item) => {
      data.push(this.getFile(item, [...dir, item]))
    })

    return data
  }

  protected writeFile(path: string, content: string): void {
    PropertiesFile.writeByPath(path, content)
    PropertiesFile.chmod(path)
  }
}
