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
