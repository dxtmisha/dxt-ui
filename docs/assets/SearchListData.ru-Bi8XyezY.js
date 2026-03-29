import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional-basic/Classes/SearchListData - Управление Данными Поиска`}),`
`,(0,c.jsx)(n.h1,{id:`класс-searchlistdata`,children:`Класс SearchListData`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`SearchListData`}),` управляет исходным списком данных и связанным с ним кэшем поиска. Он отвечает за форматирование элементов, извлечение значений из вложенных путей и применение тегов выделения к совпадающим строкам.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Отложенная инициализация (Lazy)`}),` — реализует генерацию кэша по требованию, гарантируя, что затраты производительности происходят только при активном выполнении поиска.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Кэширование поиска`}),` — генерирует плоское строковое представление указанных столбцов для каждого элемента для быстрого поиска.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Поддержка вложенных путей`}),` — возможность извлекать данные из глубоких структур объектов (например, `,(0,c.jsx)(n.code,{children:`'user.profile.name'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Автоматическое выделение`}),` — оборачивает совпадающие части строки в HTML-теги для визуальной обратной связи.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Форматирование CamelCase`}),` — преобразует пути столбцов в удобные имена свойств (например, `,(0,c.jsx)(n.code,{children:`'user.name'`}),` превращается в `,(0,c.jsx)(n.code,{children:`'userNameSearch'`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[`Для инициализации объекта вызовите конструктор `,(0,c.jsx)(n.code,{children:`SearchListData(list, columns, item, options)`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`list: T[]`}),` — исходный массив элементов данных.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`columns?: string[]`}),` — массив путей к свойствам для поиска.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`item: SearchListItem`}),` — состояние элемента поиска.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options: SearchListOptions`}),` — параметры конфигурации.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { SearchListData, SearchListItem, SearchListOptions } from '@dxtmisha/functional-basic'

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
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`информационные`,children:`Информационные`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`is(): boolean`}),` — Проверяет, инициализированы ли и список, и столбцы.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isList(): boolean`}),` — Проверяет, предоставлен ли исходный список.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getList(): T[]`}),` — Возвращает исходный список данных.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getColumns(): string[] | undefined`}),` — Возвращает текущие столбцы поиска.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`findCacheItem(item: T)`}),` — Находит кэшированное значение поиска для конкретного исходного элемента.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`настройка-сеттеры`,children:`Настройка (Сеттеры)`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setList(list: T[]): this`}),` — Обновляет список данных и регенерирует кэш.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setColumns(columns?: string[]): this`}),` — Обновляет столбцы поиска и регенерирует кэш.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`обработка`,children:`Обработка`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toFormatItem(item: T, selection: boolean): object`}),` — Преобразует исходный элемент в отформатированный с тегами выделения.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`forEach(callback: Function): Array`}),` — Перебирает кэш и возвращает список элементов, отформатированных через callback.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`формирование-кэша`,children:`Формирование кэша`}),`
`,(0,c.jsx)(n.p,{children:`Система поиска использует стратегию отложенной инициализации (lazy initialization) для оптимизации производительности при работе с большими списками:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Генерация по требованию`}),`: Кэш не создается при создании экземпляра класса. Вместо этого он формируется только в тот момент, когда операция поиска запрашивает его в первый раз.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Инвалидация кэша`}),`: Вызов `,(0,c.jsx)(n.code,{children:`setList()`}),` или `,(0,c.jsx)(n.code,{children:`setColumns()`}),` автоматически сбрасывает существующий кэш. Он будет незаметно перестроен при следующем поиске.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Плоское представление`}),`: Для создания кэша класс проходит по исходному списку и извлекает значения из указанных `,(0,c.jsx)(n.code,{children:`columns`}),` (включая глубокие пути). Эти значения преобразуются в строки и объединяются в одну длинную строку, разделенную пробелами. Эта объединенная строка сохраняется в `,(0,c.jsx)(n.code,{children:`SearchCacheItem.value`}),` и используется во всех последующих высокоскоростных проверках регулярными выражениями. Такой подход полностью исключает сложный обход объектов во время активного набора текста пользователем.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`типы`,children:`Типы`}),`
`,(0,c.jsx)(n.h3,{id:`searchcacheitem`,children:`SearchCacheItem`}),`
`,(0,c.jsx)(n.p,{children:`Объект, представляющий отдельный элемент в кэше поиска:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`item: T`}),` — ссылка на исходный элемент данных.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: string`}),` — плоское строковое представление доступных для поиска столбцов.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`searchcache`,children:`SearchCache`}),`
`,(0,c.jsxs)(n.p,{children:[`Коллекция объектов `,(0,c.jsx)(n.code,{children:`SearchCacheItem`}),`, используемая для эффективного поиска:
`,(0,c.jsx)(n.code,{children:`type SearchCache<T> = SearchCacheItem<T>[]`})]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};