import type { FormattersDataColumns, FormattersDataListList, FormattersList } from '../types/formattersTypes'

export class Formatters<
  List extends FormattersDataListList,
  Key extends FormattersDataColumns<List>
> {
  constructor(
    protected list: List,
    protected columns: Key,
    protected options: FormattersList
  ) {

  }

  setColumns(columns: Key): this {
    this.columns = columns
    return this
  }

  setList(list: List): this {
    this.list = list
    return this
  }

  setOptions(options: FormattersList): this {
    this.options = options
    return this
  }

  to() {

  }
}
