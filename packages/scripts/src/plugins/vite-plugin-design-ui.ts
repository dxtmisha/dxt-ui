import type { Plugin as VitePlugin } from 'vite'

import { Plugin } from '../classes/Plugin/Plugin'

import type { DesignPluginOptions } from '../types/designTypes'
import type { LibraryComponentList } from '../types/libraryTypes'

export function uiVitePlugin(
  design: string,
  packageName: string,
  componentsReg: RegExp,
  componentsList: LibraryComponentList,
  name: string,
  options: DesignPluginOptions = {}
): VitePlugin {
  return new Plugin(
    design,
    packageName,
    componentsReg,
    componentsList,
    name,
    options
  )
    .init()
}
