import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Classes/SearchList - Продвинутое Управление Списком Поиска`}),`
`,(0,c.jsx)(t.h1,{id:`класс-searchlist`,children:`Класс SearchList`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`SearchList`}),` является основной точкой входа для реализации списков с возможностью поиска. Он координирует работу хранилища данных, состояния элемента поиска, логики сопоставления и параметров конфигурации для обеспечения бесперебойного процесса поиска.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Координированный поиск`}),` — автоматически обновляет сопоставитель и регенерирует результаты при изменении поисковых значений или данных.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Гибкие результаты`}),` — предоставляет метод `,(0,c.jsx)(t.code,{children:`to()`}),`, который возвращает либо весь список, либо отфильтрованные результаты с опциональной HTML-подсветкой.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Простая интеграция`}),` — простой API для установки данных, столбцов и значений поиска.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Поддержка "Return Everything"`}),` — можно настроить на отображение всего списка с выделением совпадений или только подходящих элементов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Оптимизированная производительность`}),` — использует глобальную утилиту `,(0,c.jsx)(t.code,{children:`forEach`}),` для быстрой обработки, когда поиск не активен, обходя генерацию кэша для максимальной эффективности.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(t.p,{children:[`Для инициализации объекта вызовите конструктор `,(0,c.jsx)(t.code,{children:`SearchList(list, columns, value, options)`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`list: T[]`}),` — исходный массив элементов данных.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`columns?: string[]`}),` — пути к свойствам для поиска.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value?: string`}),` — начальное значение поиска.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options?: SearchOptions`}),` — конфигурация поиска.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { SearchList } from '@dxtmisha/functional'

const mockData = [
  { id: 1, name: 'Search Engine', category: 'Web' },
  { id: 2, name: 'List Manager', category: 'Utility' }
]

const search = new SearchList(mockData, ['name', 'category'], 'engine')

// Получение отфильтрованных и подсвеченных результатов
const results = search.to()
`})}),`
`,(0,c.jsx)(t.h2,{id:`управление-данными`,children:`Управление данными`}),`
`,(0,c.jsx)(t.h3,{id:`to`,children:(0,c.jsx)(t.code,{children:`to`})}),`
`,(0,c.jsxs)(t.p,{children:[`Метод `,(0,c.jsx)(t.code,{children:`to()`}),` обрабатывает текущий список данных в соответствии с поисковым запросом и возвращает массив отформатированных результатов.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`SearchFormatList<T, K>`}),` — список элементов, где каждое доступное для поиска поле дополнено свойством `,(0,c.jsx)(t.code,{children:`...Search`}),`, содержащим HTML-подсветку совпадений.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Поведение:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Поиск активен`}),`: Если длина поисковой строки больше или равна `,(0,c.jsx)(t.code,{children:`limit`}),`, метод фильтрует список (если только `,(0,c.jsx)(t.code,{children:`returnEverything`}),` не равно true) и применяет теги подсветки к совпадающему тексту.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Поиск неактивен`}),`: Если поиск пуст или слишком короток, метод возвращает исходные элементы списка, отформатированные с их поисковыми свойствами, но без каких-либо выделений и с `,(0,c.jsx)(t.code,{children:`searchActive: false`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`const results = search.to()

results.forEach(item => {
  if (item.searchActive) {
    console.log(\`Найдено совпадение: \${item.nameSearch}\`)
  }
})
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`информационные-геттеры`,children:`Информационные (Геттеры)`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getData(): SearchListData`}),` — Возвращает внутренний экземпляр управления данными.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getList(): T[]`}),` — Возвращает исходный список данных.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getColumns(): string[] | undefined`}),` — Возвращает текущие столбцы поиска.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getItem(): SearchListItem`}),` — Возвращает экземпляр состояния элемента поиска.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getValue(): string | undefined`}),` — Возвращает текущую строку поиска.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getOptions(): SearchListOptions`}),` — Возвращает экземпляр управления опциями.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`настройка-сеттеры`,children:`Настройка (Сеттеры)`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setList(list: T[]): this`}),` — Устанавливает новый список данных.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setColumns(columns?: string[]): this`}),` — Устанавливает новые столбцы поиска.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setValue(value?: string): this`}),` — Устанавливает новое значение поиска и инициирует обновление сопоставителя.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setOptions(options: SearchOptions): this`}),` — Устанавливает новые параметры поиска.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`типы`,children:`Типы`}),`
`,(0,c.jsx)(t.h3,{id:`searchoptions`,children:`SearchOptions`}),`
`,(0,c.jsxs)(t.p,{children:[`Объект конфигурации для поведения `,(0,c.jsx)(t.code,{children:`SearchList`}),`:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`limit?: number`}),` — минимальная длина символов для запуска поиска (по умолчанию: `,(0,c.jsx)(t.code,{children:`2`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`returnEverything?: boolean`}),` — если `,(0,c.jsx)(t.code,{children:`true`}),`, возвращает все элементы вместо фильтрации; несовпадающие элементы будут иметь `,(0,c.jsx)(t.code,{children:`searchActive: false`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`delay?: number`}),` — задержка в миллисекундах (используется высокоуровневыми компонентами).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`findExactMatch?: boolean`}),` — если `,(0,c.jsx)(t.code,{children:`true`}),`, использует режим "Точная фраза"; иначе использует "Содержит все слова".`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`classSearchName?: string`}),` — пользовательский CSS класс для тегов подсветки `,(0,c.jsx)(t.code,{children:`<span />`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`searchformatitem`,children:`SearchFormatItem`}),`
`,(0,c.jsxs)(t.p,{children:[`Структура элемента, возвращаемого методом `,(0,c.jsx)(t.code,{children:`to()`}),`. Она включает в себя все исходные поля элемента данных плюс динамические поля, связанные с поиском:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`[key]Search: string`}),` — (Динамическое) значение соответствующего столбца, потенциально содержащее теги `,(0,c.jsx)(t.code,{children:`<span />`}),` для совпадений.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`searchActive?: boolean`}),` — логический флаг, указывающий, соответствует ли элемент текущим критериям поиска.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`searchformatlist`,children:`SearchFormatList`}),`
`,(0,c.jsxs)(t.p,{children:[`Список отформатированных элементов поиска:
`,(0,c.jsx)(t.code,{children:`type SearchFormatList<T, K> = SearchFormatItem<T, K>[]`})]}),`
`,(0,c.jsx)(t.h3,{id:`searchitem`,children:`SearchItem`}),`
`,(0,c.jsxs)(t.p,{children:[`Общий объект, по которому можно осуществлять поиск:
`,(0,c.jsx)(t.code,{children:`type SearchItem = Record<string, any>`})]}),`
`,(0,c.jsx)(t.h3,{id:`searchlistvalue`,children:`SearchListValue`}),`
`,(0,c.jsxs)(t.p,{children:[`Значение входного списка:
`,(0,c.jsx)(t.code,{children:`type SearchListValue<T> = T[] | undefined`})]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};