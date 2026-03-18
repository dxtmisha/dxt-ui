import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"@dxtmisha/ru/functional-basic/Classes/SearchListData - Управление Данными Поиска"}),`
`,n.jsx(e.h1,{id:"класс-searchlistdata",children:"Класс SearchListData"}),`
`,n.jsxs(e.p,{children:["Класс ",n.jsx(e.code,{children:"SearchListData"})," управляет исходным списком данных и связанным с ним кэшем поиска. Он отвечает за форматирование элементов, извлечение значений из вложенных путей и применение тегов выделения к совпадающим строкам."]}),`
`,n.jsx(e.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Отложенная инициализация (Lazy)"})," — реализует генерацию кэша по требованию, гарантируя, что затраты производительности происходят только при активном выполнении поиска."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Кэширование поиска"})," — генерирует плоское строковое представление указанных столбцов для каждого элемента для быстрого поиска."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Поддержка вложенных путей"})," — возможность извлекать данные из глубоких структур объектов (например, ",n.jsx(e.code,{children:"'user.profile.name'"}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Автоматическое выделение"})," — оборачивает совпадающие части строки в HTML-теги для визуальной обратной связи."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Форматирование CamelCase"})," — преобразует пути столбцов в удобные имена свойств (например, ",n.jsx(e.code,{children:"'user.name'"})," превращается в ",n.jsx(e.code,{children:"'userNameSearch'"}),")."]}),`
`]}),`
`,n.jsx(e.h2,{id:"инициализация",children:"Инициализация"}),`
`,n.jsxs(e.p,{children:["Для инициализации объекта вызовите конструктор ",n.jsx(e.code,{children:"SearchListData(list, columns, item, options)"}),"."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"list: T[]"})," — исходный массив элементов данных."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"columns?: string[]"})," — массив путей к свойствам для поиска."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"item: SearchListItem"})," — состояние элемента поиска."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"options: SearchListOptions"})," — параметры конфигурации."]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { SearchListData, SearchListItem, SearchListOptions } from '@dxtmisha/functional-basic'

const options = new SearchListOptions()
const item = new SearchListItem('alice', options)
const data = new SearchListData(
  [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }],
  ['name'],
  item,
  options
)

const results = data.forEach((origItem, value) => {
  return data.toFormatItem(origItem, true)
})
`})}),`
`,n.jsx(e.h2,{id:"методы",children:"Методы"}),`
`,n.jsx(e.h3,{id:"информационные",children:"Информационные"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"is(): boolean"})," — Проверяет, инициализированы ли и список, и столбцы."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"isList(): boolean"})," — Проверяет, предоставлен ли исходный список."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getList(): T[]"})," — Возвращает исходный список данных."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getColumns(): string[] | undefined"})," — Возвращает текущие столбцы поиска."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"findCacheItem(item: T)"})," — Находит кэшированное значение поиска для конкретного исходного элемента."]}),`
`]}),`
`,n.jsx(e.h3,{id:"настройка-сеттеры",children:"Настройка (Сеттеры)"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"setList(list: T[]): this"})," — Обновляет список данных и регенерирует кэш."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"setColumns(columns?: string[]): this"})," — Обновляет столбцы поиска и регенерирует кэш."]}),`
`]}),`
`,n.jsx(e.h3,{id:"обработка",children:"Обработка"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"toFormatItem(item: T, selection: boolean): object"})," — Преобразует исходный элемент в отформатированный с тегами выделения."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"forEach(callback: Function): Array"})," — Перебирает кэш и возвращает список элементов, отформатированных через callback."]}),`
`]}),`
`,n.jsx(e.h2,{id:"формирование-кэша",children:"Формирование кэша"}),`
`,n.jsx(e.p,{children:"Система поиска использует стратегию отложенной инициализации (lazy initialization) для оптимизации производительности при работе с большими списками:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Генерация по требованию"}),": Кэш не создается при создании экземпляра класса. Вместо этого он формируется только в тот момент, когда операция поиска запрашивает его в первый раз."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Инвалидация кэша"}),": Вызов ",n.jsx(e.code,{children:"setList()"})," или ",n.jsx(e.code,{children:"setColumns()"})," автоматически сбрасывает существующий кэш. Он будет незаметно перестроен при следующем поиске."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Плоское представление"}),": Для создания кэша класс проходит по исходному списку и извлекает значения из указанных ",n.jsx(e.code,{children:"columns"})," (включая глубокие пути). Эти значения преобразуются в строки и объединяются в одну длинную строку, разделенную пробелами. Эта объединенная строка сохраняется в ",n.jsx(e.code,{children:"SearchCacheItem.value"})," и используется во всех последующих высокоскоростных проверках регулярными выражениями. Такой подход полностью исключает сложный обход объектов во время активного набора текста пользователем."]}),`
`]}),`
`,n.jsx(e.h2,{id:"типы",children:"Типы"}),`
`,n.jsx(e.h3,{id:"searchcacheitem",children:"SearchCacheItem"}),`
`,n.jsx(e.p,{children:"Объект, представляющий отдельный элемент в кэше поиска:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"item: T"})," — ссылка на исходный элемент данных."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: string"})," — плоское строковое представление доступных для поиска столбцов."]}),`
`]}),`
`,n.jsx(e.h3,{id:"searchcache",children:"SearchCache"}),`
`,n.jsxs(e.p,{children:["Коллекция объектов ",n.jsx(e.code,{children:"SearchCacheItem"}),`, используемая для эффективного поиска:
`,n.jsx(e.code,{children:"type SearchCache<T> = SearchCacheItem<T>[]"})]})]})}function x(s={}){const{wrapper:e}={...c(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}export{x as default};
