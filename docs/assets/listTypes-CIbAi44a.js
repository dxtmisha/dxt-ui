import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-Dqnce8mp.js";import{M as a}from"./blocks-6V-3VoLN.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-C6i5AnHO.js";function i(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"@dxtmisha/functional/en/Types/listTypes"}),`
`,e.jsx(t.h1,{id:"list-types-listtypes",children:"List Types (listTypes)"}),`
`,e.jsx(t.p,{children:"A set of specialized TypeScript types for working with lists, data items, and their states. Ensures type safety when creating interactive lists with support for selection, focus, search, and grouping."}),`
`,e.jsx(t.h2,{id:"list-item-types",children:"List Item Types"}),`
`,e.jsx(t.h3,{id:"listtype",children:e.jsx(t.code,{children:"ListType"})}),`
`,e.jsx(t.p,{children:"Type of list item that defines its purpose and behavior."}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typescript",children:`type ListType = 'item' | 'space' | 'line' | 'subtitle' | 'html' | 'menu' | 'menu-group' | 'group'

// Usage
const listItems: { type: ListType; content: string }[] = [
  { type: 'subtitle', content: 'Main Actions' },
  { type: 'item', content: 'Create Document' },
  { type: 'item', content: 'Open File' },
  { type: 'line', content: '' }, // separator
  { type: 'menu-group', content: 'Settings' },
  { type: 'menu', content: 'Preferences' },
  { type: 'space', content: '' }, // empty space
  { type: 'html', content: '<strong>HTML content</strong>' },
  { type: 'group', content: 'Group of elements' }
]
`})}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"Item Types:"})}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"'item'"})," — regular list item with selection capability"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"'space'"})," — empty space for creating indents"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"'line'"})," — horizontal separator line"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"'subtitle'"})," — subtitle or category"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"'html'"})," — HTML content"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"'menu'"})," — menu item"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"'menu-group'"})," — group of menu items"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"'group'"})," — group of related items"]}),`
`]}),`
`,e.jsx(t.h2,{id:"basic-data-structures",children:"Basic Data Structures"}),`
`,e.jsx(t.h3,{id:"listdatabasic",children:e.jsx(t.code,{children:"ListDataBasic"})}),`
`,e.jsx(t.p,{children:"Basic data structure for list item."}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typescript",children:`type ListDataBasic = {
  label?: NumberOrString
  value?: any
  search?: string
}

// Usage
const basicItems: ListDataBasic[] = [
  {
    label: 'User 1',
    value: { id: 1, name: 'John Doe' },
    search: 'john doe user'
  },
  {
    label: 42,
    value: 'number-item',
    search: 'number 42'
  },
  {
    label: 'Simple item'
    // value and search are optional
  }
]
`})}),`
`,e.jsx(t.h3,{id:"listdataitemitem",children:e.jsx(t.code,{children:"ListDataItem<Item>"})}),`
`,e.jsx(t.p,{children:"Extended list item with type and index."}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typescript",children:`type ListDataItem<Item extends ListDataBasic = ListDataBasic> = ConstrBind<
  Item & {
    parent?: string
    type: ListType
    index: string
  }
>

// Usage
interface UserItem extends ListDataBasic {
  label: string
  value: { id: number; email: string }
  avatar?: string
}

const userItems: ListDataItem<UserItem>[] = [
  {
    label: 'Administrator',
    value: { id: 1, email: 'admin@example.com' },
    avatar: '/avatars/admin.jpg',
    type: 'item',
    index: 'user-1',
    parent: 'admin-group',
    class: 'user-item admin',
    style: { backgroundColor: '#f0f0f0' }
  }
]
`})}),`
`,e.jsx(t.h3,{id:"listlistitem",children:e.jsx(t.code,{children:"ListList<Item>"})}),`
`,e.jsx(t.p,{children:"Array of list data items."}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typescript",children:`type ListList<Item extends ListDataBasic = ListDataBasic> = ListDataItem<Item>[]

// Usage
const navigationList: ListList = [
  {
    label: 'Home',
    value: '/',
    type: 'item',
    index: 'nav-home'
  },
  {
    label: 'About',
    value: '/about',
    type: 'item',
    index: 'nav-about'
  }
]
`})}),`
`,e.jsx(t.h3,{id:"listrecorditem",children:e.jsx(t.code,{children:"ListRecord<Item>"})}),`
`,e.jsx(t.p,{children:"List or record structure for list data."}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typescript",children:`type ListRecord<Item extends ListDataBasic = ListDataBasic> = ListList<Item> | Record<string, any>

// Usage as array
const arrayRecord: ListRecord = [
  { label: 'Item 1', type: 'item', index: '1' },
  { label: 'Item 2', type: 'item', index: '2' }
]

// Usage as object
const objectRecord: ListRecord = {
  users: { label: 'Users', count: 10 },
  settings: { label: 'Settings', active: true }
}
`})}),`
`,e.jsx(t.h2,{id:"extended-types-with-state",children:"Extended Types with State"}),`
`,e.jsx(t.h3,{id:"listdatafullitemitem",children:e.jsx(t.code,{children:"ListDataFullItem<Item>"})}),`
`,e.jsx(t.p,{children:"Extended list item with additional state properties."}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typescript",children:`type ListDataFullItem<Item extends ListDataBasic = ListDataBasic> = ListDataItem<Item> & {
  focus: boolean
  highlight?: string
  selected: boolean
}

// Usage
const interactiveItem: ListDataFullItem = {
  label: 'Active item',
  value: 'active-item',
  type: 'item',
  index: 'item-1',
  focus: true,        // item has focus
  highlight: 'Activ', // highlighted text portion
  selected: false     // not selected
}
`})}),`
`,e.jsx(t.h3,{id:"listdatafullitem",children:e.jsx(t.code,{children:"ListDataFull<Item>"})}),`
`,e.jsx(t.p,{children:"Array of extended list items with state."}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typescript",children:`type ListDataFull<Item extends ListDataBasic = ListDataBasic> = ListDataFullItem<Item>[]

// Usage
const interactiveList: ListDataFull = [
  {
    label: 'First item',
    value: 1,
    type: 'item',
    index: 'item-1',
    focus: false,
    selected: true
  },
  {
    label: 'Second item',
    value: 2,
    type: 'item',
    index: 'item-2',
    focus: true,
    highlight: 'Seco',
    selected: false
  }
]
`})}),`
`,e.jsx(t.h2,{id:"input-data-types",children:"Input Data Types"}),`
`,e.jsx(t.h3,{id:"listlistinputitemitem",children:e.jsx(t.code,{children:"ListListInputItem<Item>"})}),`
`,e.jsx(t.p,{children:"Input item for list creation."}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typescript",children:`type ListListInputItem<Item extends ListDataBasic = ListDataBasic> = ConstrBind<Item>

// Usage
const inputItem: ListListInputItem = {
  label: 'New item',
  value: 'new-item',
  search: 'new item search',
  class: 'input-item',
  style: { color: 'blue' }
}
`})}),`
`,e.jsx(t.h3,{id:"listlistinputitem",children:e.jsx(t.code,{children:"ListListInput<Item>"})}),`
`,e.jsx(t.p,{children:"Various input formats for list creation."}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typescript",children:`type ListListInput<Item extends ListDataBasic = ListDataBasic> =
  | ListListInputItem<Item>[]
  | string[]
  | Record<string, ListListInputItem<Item>>
  | Record<string, string>

// Array of objects
const objectArray: ListListInput = [
  { label: 'Item 1', value: 1 },
  { label: 'Item 2', value: 2 }
]

// Array of strings
const stringArray: ListListInput = ['Option 1', 'Option 2', 'Option 3']

// Object with objects
const objectRecord: ListListInput = {
  first: { label: 'First', value: 1 },
  second: { label: 'Second', value: 2 }
}

// Object with strings
const stringRecord: ListListInput = {
  en: 'English',
  ru: 'Russian',
  de: 'German'
}
`})}),`
`,e.jsx(t.h2,{id:"item-selection-types",children:"Item Selection Types"}),`
`,e.jsx(t.h3,{id:"listselecteditem",children:e.jsx(t.code,{children:"ListSelectedItem"})}),`
`,e.jsx(t.p,{children:"Single selected item identifier."}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typescript",children:`type ListSelectedItem = NumberOrStringOrBoolean

// Usage
const selectedItems: ListSelectedItem[] = [
  'item-1',    // string ID
  42,          // numeric ID
  true,        // boolean value
  false
]
`})}),`
`,e.jsx(t.h3,{id:"listselectedlist",children:e.jsx(t.code,{children:"ListSelectedList"})}),`
`,e.jsx(t.p,{children:"Single or multiple selected items."}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typescript",children:`type ListSelectedList = ListSelectedItem | ListSelectedItem[]

// Single selection
const singleSelection: ListSelectedList = 'selected-item'

// Multiple selection
const multipleSelection: ListSelectedList = ['item-1', 'item-2', 42, true]
`})}),`
`,e.jsx(t.h3,{id:"listname",children:e.jsx(t.code,{children:"ListName"})}),`
`,e.jsx(t.p,{children:"Name of selected list item."}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typescript",children:`type ListName = string | number | undefined

// Usage
const itemNames: ListName[] = [
  'home',
  'about',
  42,
  undefined  // item without name
]
`})}),`
`,e.jsx(t.h3,{id:"listnames",children:e.jsx(t.code,{children:"ListNames"})}),`
`,e.jsx(t.p,{children:"Array of list item names."}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typescript",children:`type ListNames = ListName[]

// Usage
const selectedNames: ListNames = ['home', 'profile', 42, undefined]

function getSelectedNames(list: ListDataFull): ListNames {
  return list
    .filter(item => item.selected)
    .map(item => item.label as ListName)
}
`})}),`
`,e.jsx(t.h2,{id:"practical-examples",children:"Practical Examples"}),`
`,e.jsx(t.h3,{id:"navigation-system",children:"Navigation System"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typescript",children:`import type { ListDataFull, ListType, ListSelectedList } from '@dxtmisha/functional'

interface NavigationItem extends ListDataBasic {
  label: string
  value: string
  icon?: string
  badge?: number
}

const navigationData: ListDataFull<NavigationItem> = [
  {
    label: 'Dashboard',
    value: '/dashboard',
    icon: 'dashboard',
    type: 'subtitle',
    index: 'nav-dashboard-title',
    focus: false,
    selected: false
  },
  {
    label: 'Home',
    value: '/dashboard/home',
    icon: 'home',
    type: 'item',
    index: 'nav-home',
    focus: false,
    selected: true
  },
  {
    label: 'Analytics',
    value: '/dashboard/analytics',
    icon: 'chart',
    badge: 5,
    type: 'item',
    index: 'nav-analytics',
    focus: true,
    selected: false
  }
]
`})}),`
`,e.jsx(t.h3,{id:"searchable-list-with-filtering",children:"Searchable List with Filtering"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typescript",children:`import type { ListListInput, ListDataFull } from '@dxtmisha/functional'

class SearchableList<T extends ListDataBasic> {
  constructor(private data: ListListInput<T>) {}

  search(query: string): ListDataFull<T> {
    return this.normalizeData(this.data)
      .map(item => ({
        ...item,
        focus: false,
        selected: false,
        highlight: this.getHighlight(item.label?.toString() || '', query)
      }))
      .filter(item => this.matchesSearch(item, query))
  }

  private matchesSearch(item: ListDataFull<T>[0], query: string): boolean {
    const searchText = item.search || item.label?.toString() || ''
    return searchText.toLowerCase().includes(query.toLowerCase())
  }

  private getHighlight(text: string, query: string): string | undefined {
    if (!query) return undefined

    const index = text.toLowerCase().indexOf(query.toLowerCase())
    return index >= 0 ? text.substring(index, index + query.length) : undefined
  }
}
`})}),`
`,e.jsx(t.h3,{id:"multi-level-menu",children:"Multi-level Menu"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typescript",children:`import type { ListDataItem, ListList } from '@dxtmisha/functional'

interface MenuItemData extends ListDataBasic {
  label: string
  value: string
  children?: MenuItemData[]
}

function createNestedMenu(items: MenuItemData[], parentId?: string): ListList<MenuItemData> {
  const result: ListList<MenuItemData> = []

  items.forEach((item, index) => {
    const itemId = \`\${parentId || 'root'}-\${index}\`

    // Add main item
    result.push({
      ...item,
      type: 'menu',
      index: itemId,
      parent: parentId
    })

    // Add child items
    if (item.children && item.children.length > 0) {
      result.push({
        label: '',
        value: '',
        type: 'menu-group',
        index: \`\${itemId}-group\`,
        parent: itemId
      })

      const childItems = createNestedMenu(item.children, itemId)
      result.push(...childItems)
    }
  })

  return result
}
`})}),`
`,e.jsx(t.h3,{id:"selection-management",children:"Selection Management"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typescript",children:`import type { ListSelectedList, ListDataFull, ListNames } from '@dxtmisha/functional'

class ListSelectionManager {
  constructor(private list: ListDataFull) {}

  getSelected(): ListSelectedList {
    return this.list
      .filter(item => item.selected)
      .map(item => item.value)
  }

  getSelectedNames(): ListNames {
    return this.list
      .filter(item => item.selected)
      .map(item => item.label as ListName)
  }

  selectItems(values: ListSelectedList): void {
    const valuesToSelect = Array.isArray(values) ? values : [values]

    this.list.forEach(item => {
      item.selected = valuesToSelect.includes(item.value)
    })
  }

  toggleSelection(value: ListSelectedItem): void {
    const item = this.list.find(item => item.value === value)
    if (item) {
      item.selected = !item.selected
    }
  }

  clearSelection(): void {
    this.list.forEach(item => {
      item.selected = false
    })
  }
}
`})}),`
`,e.jsx(t.h3,{id:"creating-lists-from-various-formats",children:"Creating Lists from Various Formats"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typescript",children:`import type { ListListInput, ListDataItem } from '@dxtmisha/functional'

function createListFromInput<T extends ListDataBasic>(
  input: ListListInput<T>
): ListDataItem<T>[] {
  if (Array.isArray(input)) {
    if (typeof input[0] === 'string') {
      // Array of strings
      return (input as string[]).map((label, index) => ({
        label,
        value: label,
        type: 'item',
        index: \`item-\${index}\`
      }))
    } else {
      // Array of objects
      return (input as ListListInputItem<T>[]).map((item, index) => ({
        ...item,
        type: 'item',
        index: item.index || \`item-\${index}\`
      }))
    }
  } else {
    // Object record
    return Object.entries(input).map(([key, value]) => {
      if (typeof value === 'string') {
        return {
          label: value,
          value: key,
          type: 'item',
          index: key
        }
      } else {
        return {
          ...value,
          type: 'item',
          index: key
        }
      }
    })
  }
}
`})}),`
`,e.jsx(t.p,{children:"These list types provide complete type safety for creating interactive lists, menus, navigation, and other components with support for selection, search, and grouping of elements."})]})}function u(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{u as default};
