import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/functional-basic/Classes/SearchList - Продвинутое Управление Списком Поиска`}),`
`,(0,c.jsx)(n.h1,{id:`класс-searchlist`,children:`Класс SearchList`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`SearchList`}),` является основной точкой входа для реализации списков с возможностью поиска. Он координирует работу хранилища данных, состояния элемента поиска, логики сопоставления и параметров конфигурации для обеспечения бесперебойного процесса поиска.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Координированный поиск`}),` — автоматически обновляет сопоставитель и регенерирует результаты при изменении поисковых значений или данных.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Гибкие результаты`}),` — предоставляет метод `,(0,c.jsx)(n.code,{children:`to()`}),`, который возвращает либо весь список, либо отфильтрованные результаты с опциональной HTML-подсветкой.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Простая интеграция`}),` — простой API для установки данных, столбцов и значений поиска.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Поддержка "Return Everything"`}),` — можно настроить на отображение всего списка с выделением совпадений или только подходящих элементов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Оптимизированная производительность`}),` — использует глобальную утилиту `,(0,c.jsx)(n.code,{children:`forEach`}),` для быстрой обработки, когда поиск не активен, обходя генерацию кэша для максимальной эффективности.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[`Для инициализации объекта вызовите конструктор `,(0,c.jsx)(n.code,{children:`SearchList(list, columns, value, options)`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`list: T[]`}),` — исходный массив элементов данных.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`columns?: string[]`}),` — пути к свойствам для поиска.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value?: string`}),` — начальное значение поиска.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: SearchOptions`}),` — конфигурация поиска.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { SearchList } from '@dxtmisha/functional'

const mockData = [
  { id: 1, name: 'Search Engine', category: 'Web' },
  { id: 2, name: 'List Manager', category: 'Utility' }
]

const search = new SearchList(mockData, ['name', 'category'], 'engine')

// Получение отфильтрованных и подсвеченных результатов
const results = search.to()
`})}),`
`,(0,c.jsx)(n.h2,{id:`управление-данными`,children:`Управление данными`}),`
`,(0,c.jsx)(n.h3,{id:`to`,children:(0,c.jsx)(n.code,{children:`to`})}),`
`,(0,c.jsxs)(n.p,{children:[`Метод `,(0,c.jsx)(n.code,{children:`to()`}),` обрабатывает текущий список данных в соответствии с поисковым запросом и возвращает массив отформатированных результатов.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`SearchFormatList<T, K>`}),` — список элементов, где каждое доступное для поиска поле дополнено свойством `,(0,c.jsx)(n.code,{children:`...Search`}),`, содержащим HTML-подсветку совпадений.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Поведение:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Поиск активен`}),`: Если длина поисковой строки больше или равна `,(0,c.jsx)(n.code,{children:`limit`}),`, метод фильтрует список (если только `,(0,c.jsx)(n.code,{children:`returnEverything`}),` не равно true) и применяет теги подсветки к совпадающему тексту.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Поиск неактивен`}),`: Если поиск пуст или слишком короток, метод возвращает исходные элементы списка, отформатированные с их поисковыми свойствами, но без каких-либо выделений и с `,(0,c.jsx)(n.code,{children:`searchActive: false`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const results = search.to()

results.forEach(item => {
  if (item.searchActive) {
    console.log(\`Найдено совпадение: \${item.nameSearch}\`)
  }
})
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`информационные-геттеры`,children:`Информационные (Геттеры)`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getData(): SearchListData`}),` — Возвращает внутренний экземпляр управления данными.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getList(): T[]`}),` — Возвращает исходный список данных.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getColumns(): string[] | undefined`}),` — Возвращает текущие столбцы поиска.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getItem(): SearchListItem`}),` — Возвращает экземпляр состояния элемента поиска.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getValue(): string | undefined`}),` — Возвращает текущую строку поиска.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getOptions(): SearchListOptions`}),` — Возвращает экземпляр управления опциями.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`настройка-сеттеры`,children:`Настройка (Сеттеры)`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setList(list: T[]): this`}),` — Устанавливает новый список данных.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setColumns(columns?: string[]): this`}),` — Устанавливает новые столбцы поиска.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setValue(value?: string): this`}),` — Устанавливает новое значение поиска и инициирует обновление сопоставителя.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setOptions(options: SearchOptions): this`}),` — Устанавливает новые параметры поиска.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`типы`,children:`Типы`}),`
`,(0,c.jsx)(n.h3,{id:`searchoptions`,children:`SearchOptions`}),`
`,(0,c.jsxs)(n.p,{children:[`Объект конфигурации для поведения `,(0,c.jsx)(n.code,{children:`SearchList`}),`:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`limit?: number`}),` — минимальная длина символов для запуска поиска (по умолчанию: `,(0,c.jsx)(n.code,{children:`2`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`returnEverything?: boolean`}),` — если `,(0,c.jsx)(n.code,{children:`true`}),`, возвращает все элементы вместо фильтрации; несовпадающие элементы будут иметь `,(0,c.jsx)(n.code,{children:`searchActive: false`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`delay?: number`}),` — задержка в миллисекундах (используется высокоуровневыми компонентами).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`findExactMatch?: boolean`}),` — если `,(0,c.jsx)(n.code,{children:`true`}),`, использует режим "Точная фраза"; иначе использует "Содержит все слова".`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`classSearchName?: string`}),` — пользовательский CSS класс для тегов подсветки `,(0,c.jsx)(n.code,{children:`<span />`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`searchformatitem`,children:`SearchFormatItem`}),`
`,(0,c.jsxs)(n.p,{children:[`Структура элемента, возвращаемого методом `,(0,c.jsx)(n.code,{children:`to()`}),`. Она включает в себя все исходные поля элемента данных плюс динамические поля, связанные с поиском:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`[key]Search: string`}),` — (Динамическое) значение соответствующего столбца, потенциально содержащее теги `,(0,c.jsx)(n.code,{children:`<span />`}),` для совпадений.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`searchActive?: boolean`}),` — логический флаг, указывающий, соответствует ли элемент текущим критериям поиска.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`searchformatlist`,children:`SearchFormatList`}),`
`,(0,c.jsxs)(n.p,{children:[`Список отформатированных элементов поиска:
`,(0,c.jsx)(n.code,{children:`type SearchFormatList<T, K> = SearchFormatItem<T, K>[]`})]}),`
`,(0,c.jsx)(n.h3,{id:`searchitem`,children:`SearchItem`}),`
`,(0,c.jsxs)(n.p,{children:[`Общий объект, по которому можно осуществлять поиск:
`,(0,c.jsx)(n.code,{children:`type SearchItem = Record<string, any>`})]}),`
`,(0,c.jsx)(n.h3,{id:`searchlistvalue`,children:`SearchListValue`}),`
`,(0,c.jsxs)(n.p,{children:[`Значение входного списка:
`,(0,c.jsx)(n.code,{children:`type SearchListValue<T> = T[] | undefined`})]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};