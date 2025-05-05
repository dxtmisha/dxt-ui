import type { PropertiesFilePath } from '../classes/Properties/PropertiesFile'

export type LibraryData = {
  design: string
  name: string
  alias: string
  codeFull: string
  dir: string
}
export type LibraryItem = {
  name: string
  components: LibraryData[]
}
export type LibraryList = LibraryItem[]

export type LibraryFilesItem = {
  name: string
  path: PropertiesFilePath
  files: string[]
}
export type LibraryFiles = LibraryFilesItem[]

export type LibraryIconItem = {
  name: string
  path: string
  value: string
}
