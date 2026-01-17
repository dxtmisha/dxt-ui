import * as rollup from 'rollup'
import * as vite from 'vite'

import { UiPluginImport } from '../classes/Plugin/UiPluginImport.ts'
import { UiPluginTool } from '../classes/Plugin/UiPluginTool.ts'

type UiPluginsOptions = {
  importComponents?: boolean
  icon?: boolean
  flag?: boolean
  style?: string | false
  api?: string
  apiUrl?: string
  translate?: string
  translateUrl?: string
}

/**
 * Plugin for working with the design system.
 *
 * Плагин для работы с системой дизайна.
 */
export default function uiVitePlugin(
  packageName: string,
  options: UiPluginsOptions = {}
): vite.Plugin {
  const imports = new UiPluginImport(packageName)
  let first: boolean = true
  // let mode: string = 'production'

  return {
    name: 'vite-plugin-design-ui',
    enforce: 'pre',
    /* apply(_, env): boolean {
      mode = env.mode
      return true
    }, */
    transform(code: string, id: string): rollup.TransformResult {
      if (
        first
        && UiPluginTool.isJs(id)
      ) {
        imports.importStyle()
        first = false
      }

      if (options?.importComponents ?? true) {
        code = new PluginImport(imports, id, code).init()
      }

      if (options?.style !== false) {
        code = new PluginStyles(id, code, options?.style).init()
      }

      return {
        code
      }
    }
  }
}
