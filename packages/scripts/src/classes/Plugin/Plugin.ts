import type { TransformResult } from 'rollup'
import type { Plugin as VitePlugin } from 'vite'

import { PluginTool } from './PluginTool'
import { PluginData } from './PluginData'
import { PluginImport } from './PluginImport'
import { PluginComponents } from './PluginComponents'

import type { DesignPluginOptions } from '../../types/designTypes'
import type { LibraryComponentList } from '../../types/libraryTypes'

export class Plugin {
  protected readonly data: PluginData

  protected first: boolean = true
  protected mode: string = 'production'

  constructor(
    protected readonly design: string,
    protected readonly packageName: string,
    protected readonly componentsReg: RegExp,
    protected readonly componentsList: LibraryComponentList,
    protected readonly name: string = 'vite-plugin-design-ui',
    protected readonly options: DesignPluginOptions = {}
  ) {
    this.data = new PluginData(
      design,
      packageName,
      componentsReg,
      componentsList
    )
  }

  init(): VitePlugin {
    return {
      name: this.name,
      enforce: 'pre',
      apply: (_, env): boolean => {
        this.mode = env.mode
        return true
      },
      transform: (code: string, id: string): TransformResult => {
        return this.transform(code, id)
      },
      ...this.options?.viteOptions
    }
  }

  protected isComponents(): boolean {
    return Boolean(this.options?.component ?? true)
  }

  protected transform(code: string, id: string): TransformResult {
    if (
      this.first
      && PluginTool.isJs(id)
    ) {
      code = this.initMain(code)
      this.first = false
    }

    code = this.initComponents(id, code)

    if (options?.style !== false) {
      code = new PluginStyles(id, code, options?.style).init()
    }

    return {
      code
    }
  }

  protected initMain(code: string): string {
    const imports = new PluginImport(this.packageName, code)

    imports.importStyle()

    return imports.get()
  }

  protected initComponents(
    id: string,
    code: string
  ): string {
    if (this.isComponents()) {
      return new PluginComponents(id, code, this.data).init()
    }

    return code
  }
}
