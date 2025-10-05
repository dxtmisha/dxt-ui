import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-DB_maGql.js";import{M as a}from"./blocks-BL7C26xN.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CpPdPYqc.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"@dxtmisha/functional/ru/Types/listTypes"}),`
`,e.jsx(n.h1,{id:"типы-списков-listtypes",children:"Типы списков (listTypes)"}),`
`,e.jsx(n.p,{children:"Набор специализированных TypeScript типов для работы со списками, элементами данных и их состояниями. Обеспечивает типобезопасность при создании интерактивных списков с поддержкой выбора, фокуса, поиска и группировки."}),`
`,e.jsx(n.h2,{id:"типы-элементов-списка",children:"Типы элементов списка"}),`
`,e.jsx(n.h3,{id:"listtype",children:e.jsx(n.code,{children:"ListType"})}),`
`,e.jsx(n.p,{children:"Тип элемента списка, определяющий его назначение и поведение."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`type ListType = 'item' | 'space' | 'line' | 'subtitle' | 'html' | 'menu' | 'menu-group' | 'group'

// Использование
const listItems: { type: ListType; content: string }[] = [
  { type: 'subtitle', content: 'Основные действия' },
  { type: 'item', content: 'Создать документ' },
  { type: 'item', content: 'Открыть файл' },
  { type: 'line', content: '' }, // разделитель
  { type: 'menu-group', content: 'Настройки' },
  { type: 'menu', content: 'Параметры' },
  { type: 'space', content: '' }, // пустое пространство
  { type: 'html', content: '<strong>HTML контент</strong>' },
  { type: 'group', content: 'Группа элементов' }
]
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Типы элементов:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'item'"})," — обычный элемент списка с возможностью выбора"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'space'"})," — пустое пространство для создания отступов"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'line'"})," — горизонтальная линия-разделитель"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'subtitle'"})," — подзаголовок или категория"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'html'"})," — HTML контент"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'menu'"})," — элемент меню"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'menu-group'"})," — группа элементов меню"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'group'"})," — группа связанных элементов"]}),`
`]}),`
`,e.jsx(n.h2,{id:"базовые-структуры-данных",children:"Базовые структуры данных"}),`
`,e.jsx(n.h3,{id:"listdatabasic",children:e.jsx(n.code,{children:"ListDataBasic"})}),`
`,e.jsx(n.p,{children:"Базовая структура данных для элемента списка."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`type ListDataBasic = {
  label?: NumberOrString
  value?: any
  search?: string
}

// Использование
const basicItems: ListDataBasic[] = [
  {
    label: 'Пользователь 1',
    value: { id: 1, name: 'John Doe' },
    search: 'john doe user'
  },
  {
    label: 42,
    value: 'number-item',
    search: 'число 42'
  },
  {
    label: 'Простой элемент'
    // value и search опциональны
  }
]
`})}),`
`,e.jsx(n.h3,{id:"listdataitemitem",children:e.jsx(n.code,{children:"ListDataItem<Item>"})}),`
`,e.jsx(n.p,{children:"Расширенный элемент списка с типом и индексом."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`type ListDataItem<Item extends ListDataBasic = ListDataBasic> = ConstrBind<
  Item & {
    parent?: string
    type: ListType
    index: string
  }
>

// Использование
interface UserItem extends ListDataBasic {
  label: string
  value: { id: number; email: string }
  avatar?: string
}

const userItems: ListDataItem<UserItem>[] = [
  {
    label: 'Администратор',
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
`,e.jsx(n.h3,{id:"listlistitem",children:e.jsx(n.code,{children:"ListList<Item>"})}),`
`,e.jsx(n.p,{children:"Массив элементов данных списка."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`type ListList<Item extends ListDataBasic = ListDataBasic> = ListDataItem<Item>[]

// Использование
const navigationList: ListList = [
  {
    label: 'Главная',
    value: '/',
    type: 'item',
    index: 'nav-home'
  },
  {
    label: 'О компании',
    value: '/about',
    type: 'item',
    index: 'nav-about'
  }
]
`})}),`
`,e.jsx(n.h3,{id:"listrecorditem",children:e.jsx(n.code,{children:"ListRecord<Item>"})}),`
`,e.jsx(n.p,{children:"Структура списка или записи для данных списка."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`type ListRecord<Item extends ListDataBasic = ListDataBasic> = ListList<Item> | Record<string, any>

// Использование как массив
const arrayRecord: ListRecord = [
  { label: 'Item 1', type: 'item', index: '1' },
  { label: 'Item 2', type: 'item', index: '2' }
]

// Использование как объект
const objectRecord: ListRecord = {
  users: { label: 'Пользователи', count: 10 },
  settings: { label: 'Настройки', active: true }
}
`})}),`
`,e.jsx(n.h2,{id:"расширенные-типы-с-состоянием",children:"Расширенные типы с состоянием"}),`
`,e.jsx(n.h3,{id:"listdatafullitemitem",children:e.jsx(n.code,{children:"ListDataFullItem<Item>"})}),`
`,e.jsx(n.p,{children:"Расширенный элемент списка с дополнительными свойствами состояния."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`type ListDataFullItem<Item extends ListDataBasic = ListDataBasic> = ListDataItem<Item> & {
  focus: boolean
  highlight?: string
  selected: boolean
}

// Использование
const interactiveItem: ListDataFullItem = {
  label: 'Активный элемент',
  value: 'active-item',
  type: 'item',
  index: 'item-1',
  focus: true,        // элемент в фокусе
  highlight: 'Актив', // выделенная часть текста
  selected: false     // не выбран
}
`})}),`
`,e.jsx(n.h3,{id:"listdatafullitem",children:e.jsx(n.code,{children:"ListDataFull<Item>"})}),`
`,e.jsx(n.p,{children:"Массив расширенных элементов списка с состоянием."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`type ListDataFull<Item extends ListDataBasic = ListDataBasic> = ListDataFullItem<Item>[]

// Использование
const interactiveList: ListDataFull = [
  {
    label: 'Первый элемент',
    value: 1,
    type: 'item',
    index: 'item-1',
    focus: false,
    selected: true
  },
  {
    label: 'Второй элемент',
    value: 2,
    type: 'item',
    index: 'item-2',
    focus: true,
    highlight: 'Втор',
    selected: false
  }
]
`})}),`
`,e.jsx(n.h2,{id:"входные-типы-данных",children:"Входные типы данных"}),`
`,e.jsx(n.h3,{id:"listlistinputitemitem",children:e.jsx(n.code,{children:"ListListInputItem<Item>"})}),`
`,e.jsx(n.p,{children:"Входной элемент для создания списка."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`type ListListInputItem<Item extends ListDataBasic = ListDataBasic> = ConstrBind<Item>

// Использование
const inputItem: ListListInputItem = {
  label: 'Новый элемент',
  value: 'new-item',
  search: 'новый элемент поиск',
  class: 'input-item',
  style: { color: 'blue' }
}
`})}),`
`,e.jsx(n.h3,{id:"listlistinputitem",children:e.jsx(n.code,{children:"ListListInput<Item>"})}),`
`,e.jsx(n.p,{children:"Различные форматы входных данных для создания списка."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`type ListListInput<Item extends ListDataBasic = ListDataBasic> =
  | ListListInputItem<Item>[]
  | string[]
  | Record<string, ListListInputItem<Item>>
  | Record<string, string>

// Массив объектов
const objectArray: ListListInput = [
  { label: 'Элемент 1', value: 1 },
  { label: 'Элемент 2', value: 2 }
]

// Массив строк
const stringArray: ListListInput = ['Опция 1', 'Опция 2', 'Опция 3']

// Объект с объектами
const objectRecord: ListListInput = {
  first: { label: 'Первый', value: 1 },
  second: { label: 'Второй', value: 2 }
}

// Объект со строками
const stringRecord: ListListInput = {
  ru: 'Русский',
  en: 'English',
  de: 'Deutsch'
}
`})}),`
`,e.jsx(n.h2,{id:"типы-выбора-элементов",children:"Типы выбора элементов"}),`
`,e.jsx(n.h3,{id:"listselecteditem",children:e.jsx(n.code,{children:"ListSelectedItem"})}),`
`,e.jsx(n.p,{children:"Идентификатор одного выбранного элемента."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`type ListSelectedItem = NumberOrStringOrBoolean

// Использование
const selectedItems: ListSelectedItem[] = [
  'item-1',    // строковый ID
  42,          // числовой ID
  true,        // булево значение
  false
]
`})}),`
`,e.jsx(n.h3,{id:"listselectedlist",children:e.jsx(n.code,{children:"ListSelectedList"})}),`
`,e.jsx(n.p,{children:"Один или несколько выбранных элементов."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`type ListSelectedList = ListSelectedItem | ListSelectedItem[]

// Одиночный выбор
const singleSelection: ListSelectedList = 'selected-item'

// Множественный выбор
const multipleSelection: ListSelectedList = ['item-1', 'item-2', 42, true]
`})}),`
`,e.jsx(n.h3,{id:"listname",children:e.jsx(n.code,{children:"ListName"})}),`
`,e.jsx(n.p,{children:"Название выбранного элемента списка."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`type ListName = string | number | undefined

// Использование
const itemNames: ListName[] = [
  'home',
  'about',
  42,
  undefined  // элемент без названия
]
`})}),`
`,e.jsx(n.h3,{id:"listnames",children:e.jsx(n.code,{children:"ListNames"})}),`
`,e.jsx(n.p,{children:"Массив названий выбранных элементов списка."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`type ListNames = ListName[]

// Использование
const selectedNames: ListNames = ['home', 'profile', 42, undefined]

function getSelectedNames(list: ListDataFull): ListNames {
  return list
    .filter(item => item.selected)
    .map(item => item.label as ListName)
}
`})}),`
`,e.jsx(n.h2,{id:"практические-примеры",children:"Практические примеры"}),`
`,e.jsx(n.h3,{id:"система-навигации",children:"Система навигации"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import type { ListDataFull, ListType, ListSelectedList } from '@dxtmisha/functional'

interface NavigationItem extends ListDataBasic {
  label: string
  value: string
  icon?: string
  badge?: number
}

const navigationData: ListDataFull<NavigationItem> = [
  {
    label: 'Панель управления',
    value: '/dashboard',
    icon: 'dashboard',
    type: 'subtitle',
    index: 'nav-dashboard-title',
    focus: false,
    selected: false
  },
  {
    label: 'Главная',
    value: '/dashboard/home',
    icon: 'home',
    type: 'item',
    index: 'nav-home',
    focus: false,
    selected: true
  },
  {
    label: 'Аналитика',
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
`,e.jsx(n.h3,{id:"поисковый-список-с-фильтрацией",children:"Поисковый список с фильтрацией"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import type { ListListInput, ListDataFull } from '@dxtmisha/functional'

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
`,e.jsx(n.h3,{id:"многоуровневое-меню",children:"Многоуровневое меню"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import type { ListDataItem, ListList } from '@dxtmisha/functional'

interface MenuItemData extends ListDataBasic {
  label: string
  value: string
  children?: MenuItemData[]
}

function createNestedMenu(items: MenuItemData[], parentId?: string): ListList<MenuItemData> {
  const result: ListList<MenuItemData> = []

  items.forEach((item, index) => {
    const itemId = \`\${parentId || 'root'}-\${index}\`

    // Добавляем основной элемент
    result.push({
      ...item,
      type: 'menu',
      index: itemId,
      parent: parentId
    })

    // Добавляем дочерние элементы
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
`,e.jsx(n.h3,{id:"управление-выбором-элементов",children:"Управление выбором элементов"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import type { ListSelectedList, ListDataFull, ListNames } from '@dxtmisha/functional'

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
`,e.jsx(n.h3,{id:"создание-списка-из-различных-форматов",children:"Создание списка из различных форматов"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import type { ListListInput, ListDataItem } from '@dxtmisha/functional'

function createListFromInput<T extends ListDataBasic>(
  input: ListListInput<T>
): ListDataItem<T>[] {
  if (Array.isArray(input)) {
    if (typeof input[0] === 'string') {
      // Массив строк
      return (input as string[]).map((label, index) => ({
        label,
        value: label,
        type: 'item',
        index: \`item-\${index}\`
      }))
    } else {
      // Массив объектов
      return (input as ListListInputItem<T>[]).map((item, index) => ({
        ...item,
        type: 'item',
        index: item.index || \`item-\${index}\`
      }))
    }
  } else {
    // Объект-запись
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
`,e.jsx(n.p,{children:"Эти типы списков обеспечивают полную типизацию для создан��я интерактивных списков, меню, навигации и других компонентов с поддержкой выбора, поиска и группировки элементов."})]})}function u(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{u as default};
