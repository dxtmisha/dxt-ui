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
  files: string[]
}
export type LibraryFiles = LibraryFilesItem[]
