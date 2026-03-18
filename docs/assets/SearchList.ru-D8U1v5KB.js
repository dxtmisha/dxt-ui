import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/ru/functional-basic/Classes/SearchList - Продвинутое Управление Списком Поиска"}),`
`,e.jsx(n.h1,{id:"класс-searchlist",children:"Класс SearchList"}),`
`,e.jsxs(n.p,{children:["Класс ",e.jsx(n.code,{children:"SearchList"})," является основной точкой входа для реализации списков с возможностью поиска. Он координирует работу хранилища данных, состояния элемента поиска, логики сопоставления и параметров конфигурации для обеспечения бесперебойного процесса поиска."]}),`
`,e.jsx(n.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Координированный поиск"})," — автоматически обновляет сопоставитель и регенерирует результаты при изменении поисковых значений или данных."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Гибкие результаты"})," — предоставляет метод ",e.jsx(n.code,{children:"to()"}),", который возвращает либо весь список, либо отфильтрованные результаты с опциональной HTML-подсветкой."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Простая интеграция"})," — простой API для установки данных, столбцов и значений поиска."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:'Поддержка "Return Everything"'})," — можно настроить на отображение всего списка с выделением совпадений или только подходящих элементов."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Оптимизированная производительность"})," — использует глобальную утилиту ",e.jsx(n.code,{children:"forEach"})," для быстрой обработки, когда поиск не активен, обходя генерацию кэша для максимальной эффективности."]}),`
`]}),`
`,e.jsx(n.h2,{id:"инициализация",children:"Инициализация"}),`
`,e.jsxs(n.p,{children:["Для инициализации объекта вызовите конструктор ",e.jsx(n.code,{children:"SearchList(list, columns, value, options)"}),"."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"list: T[]"})," — исходный массив элементов данных."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"columns?: string[]"})," — пути к свойствам для поиска."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value?: string"})," — начальное значение поиска."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options?: SearchOptions"})," — конфигурация поиска."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { SearchList } from '@dxtmisha/functional'

const mockData = [
  { id: 1, name: 'Search Engine', category: 'Web' },
  { id: 2, name: 'List Manager', category: 'Utility' }
]

const search = new SearchList(mockData, ['name', 'category'], 'engine')

// Получение отфильтрованных и подсвеченных результатов
const results = search.to()
`})}),`
`,e.jsx(n.h2,{id:"управление-данными",children:"Управление данными"}),`
`,e.jsx(n.h3,{id:"to",children:e.jsx(n.code,{children:"to"})}),`
`,e.jsxs(n.p,{children:["Метод ",e.jsx(n.code,{children:"to()"})," обрабатывает текущий список данных в соответствии с поисковым запросом и возвращает массив отформатированных результатов."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"SearchFormatList<T, K>"})," — список элементов, где каждое доступное для поиска поле дополнено свойством ",e.jsx(n.code,{children:"...Search"}),", содержащим HTML-подсветку совпадений."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Поведение:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Поиск активен"}),": Если длина поисковой строки больше или равна ",e.jsx(n.code,{children:"limit"}),", метод фильтрует список (если только ",e.jsx(n.code,{children:"returnEverything"})," не равно true) и применяет теги подсветки к совпадающему тексту."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Поиск неактивен"}),": Если поиск пуст или слишком короток, метод возвращает исходные элементы списка, отформатированные с их поисковыми свойствами, но без каких-либо выделений и с ",e.jsx(n.code,{children:"searchActive: false"}),"."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const results = search.to()

results.forEach(item => {
  if (item.searchActive) {
    console.log(\`Найдено совпадение: \${item.nameSearch}\`)
  }
})
`})}),`
`,e.jsx(n.h2,{id:"методы",children:"Методы"}),`
`,e.jsx(n.h3,{id:"информационные-геттеры",children:"Информационные (Геттеры)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getData(): SearchListData"})," — Возвращает внутренний экземпляр управления данными."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getList(): T[]"})," — Возвращает исходный список данных."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getColumns(): string[] | undefined"})," — Возвращает текущие столбцы поиска."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getItem(): SearchListItem"})," — Возвращает экземпляр состояния элемента поиска."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getValue(): string | undefined"})," — Возвращает текущую строку поиска."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getOptions(): SearchListOptions"})," — Возвращает экземпляр управления опциями."]}),`
`]}),`
`,e.jsx(n.h3,{id:"настройка-сеттеры",children:"Настройка (Сеттеры)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setList(list: T[]): this"})," — Устанавливает новый список данных."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setColumns(columns?: string[]): this"})," — Устанавливает новые столбцы поиска."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setValue(value?: string): this"})," — Устанавливает новое значение поиска и инициирует обновление сопоставителя."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setOptions(options: SearchOptions): this"})," — Устанавливает новые параметры поиска."]}),`
`]}),`
`,e.jsx(n.h2,{id:"типы",children:"Типы"}),`
`,e.jsx(n.h3,{id:"searchoptions",children:"SearchOptions"}),`
`,e.jsxs(n.p,{children:["Объект конфигурации для поведения ",e.jsx(n.code,{children:"SearchList"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"limit?: number"})," — минимальная длина символов для запуска поиска (по умолчанию: ",e.jsx(n.code,{children:"2"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"returnEverything?: boolean"})," — если ",e.jsx(n.code,{children:"true"}),", возвращает все элементы вместо фильтрации; несовпадающие элементы будут иметь ",e.jsx(n.code,{children:"searchActive: false"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"delay?: number"})," — задержка в миллисекундах (используется высокоуровневыми компонентами)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"findExactMatch?: boolean"})," — если ",e.jsx(n.code,{children:"true"}),', использует режим "Точная фраза"; иначе использует "Содержит все слова".']}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"classSearchName?: string"})," — пользовательский CSS класс для тегов подсветки ",e.jsx(n.code,{children:"<span />"}),"."]}),`
`]}),`
`,e.jsx(n.h3,{id:"searchformatitem",children:"SearchFormatItem"}),`
`,e.jsxs(n.p,{children:["Структура элемента, возвращаемого методом ",e.jsx(n.code,{children:"to()"}),". Она включает в себя все исходные поля элемента данных плюс динамические поля, связанные с поиском:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"[key]Search: string"})," — (Динамическое) значение соответствующего столбца, потенциально содержащее теги ",e.jsx(n.code,{children:"<span />"})," для совпадений."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"searchActive?: boolean"})," — логический флаг, указывающий, соответствует ли элемент текущим критериям поиска."]}),`
`]}),`
`,e.jsx(n.h3,{id:"searchformatlist",children:"SearchFormatList"}),`
`,e.jsxs(n.p,{children:[`Список отформатированных элементов поиска:
`,e.jsx(n.code,{children:"type SearchFormatList<T, K> = SearchFormatItem<T, K>[]"})]}),`
`,e.jsx(n.h3,{id:"searchitem",children:"SearchItem"}),`
`,e.jsxs(n.p,{children:[`Общий объект, по которому можно осуществлять поиск:
`,e.jsx(n.code,{children:"type SearchItem = Record<string, any>"})]}),`
`,e.jsx(n.h3,{id:"searchlistvalue",children:"SearchListValue"}),`
`,e.jsxs(n.p,{children:[`Значение входного списка:
`,e.jsx(n.code,{children:"type SearchListValue<T> = T[] | undefined"})]})]})}function j(s={}){const{wrapper:n}={...c(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{j as default};
