import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional-basic/Classes/SearchListMatcher - Логика Сопоставления Поиска`}),`
`,(0,c.jsx)(n.h1,{id:`класс-searchlistmatcher`,children:`Класс SearchListMatcher`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`SearchListMatcher`}),` отвечает за основную логику сопоставления. Он преобразует текущую строку поиска в регулярное выражение и предоставляет методы для проверки соответствия различных значений данных этому выражению.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Динамическая генерация RegExp`}),` — автоматически создает или сбрасывает сопоставитель при изменении поискового запроса или опций.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Режимы поиска`}),` — поддерживает как стандартный частичный поиск, так и режим точного совпадения на основе `,(0,c.jsx)(n.code,{children:`SearchListOptions`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Эффективная проверка`}),` — использует высокопроизводительные методы регулярных выражений для поиска совпадений в данных.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[`Для инициализации объекта вызовите конструктор `,(0,c.jsx)(n.code,{children:`SearchListMatcher(item, options)`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`item: SearchListItem`}),` — состояние элемента поиска, содержащее значение.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options: SearchListOptions`}),` — параметры конфигурации (например, `,(0,c.jsx)(n.code,{children:`findExactMatch`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { SearchListMatcher, SearchListItem, SearchListOptions } from '@dxtmisha/functional-basic'

const options = new SearchListOptions({ findExactMatch: false })
const item = new SearchListItem('admin', options)
const matcher = new SearchListMatcher(item, options)

console.log(matcher.isSelection('System Administrator')) // true
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`информационные`,children:`Информационные`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`is(): boolean`}),` — Проверяет, инициализировано ли внутреннее регулярное выражение.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isSelection(value: string): boolean`}),` — Проверяет, соответствует ли данное значение текущему поисковому выражению.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(): RegExp | undefined`}),` — Возвращает текущий экземпляр регулярного выражения.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`управление`,children:`Управление`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`update(): void`}),` — Переинициализирует сопоставитель на основе текущего состояния элемента поиска и опций.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`режимы-поиска`,children:`Режимы поиска`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс поддерживает два основных режима сопоставления, которые управляются опцией `,(0,c.jsx)(n.code,{children:`findExactMatch`}),` в `,(0,c.jsx)(n.code,{children:`SearchListOptions`}),`:`]}),`
`,(0,c.jsx)(n.h3,{id:`1-содержит-все-слова-по-умолчанию`,children:`1. Содержит все слова (По умолчанию)`}),`
`,(0,c.jsxs)(n.p,{children:[`Когда `,(0,c.jsx)(n.code,{children:`findExactMatch`}),` установлено в `,(0,c.jsx)(n.code,{children:`false`}),`, строка поиска разбивается на отдельные слова. Совпадение считается найденным только если `,(0,c.jsx)(n.strong,{children:`каждое слово`}),` присутствует в целевой строке, независимо от их порядка.`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Пример`}),`: Поиск `,(0,c.jsx)(n.code,{children:`"игровая мышь"`}),` найдет и `,(0,c.jsx)(n.code,{children:`"Мышь игровая"`}),`, и `,(0,c.jsx)(n.code,{children:`"Игровая профессиональная мышь"`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`2-точная-фраза`,children:`2. Точная фраза`}),`
`,(0,c.jsxs)(n.p,{children:[`Когда `,(0,c.jsx)(n.code,{children:`findExactMatch`}),` установлено в `,(0,c.jsx)(n.code,{children:`true`}),`, строка поиска рассматривается как единая непрерывная фраза. Совпадение считается найденным только если `,(0,c.jsx)(n.strong,{children:`точная последовательность`}),` символов (без учета регистра) присутствует в целевой строке.`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Пример`}),`: Поиск `,(0,c.jsx)(n.code,{children:`"игровая мышь"`}),` найдет `,(0,c.jsx)(n.code,{children:`"Классная игровая мышь"`}),`, но `,(0,c.jsx)(n.strong,{children:`не найдет`}),` `,(0,c.jsx)(n.code,{children:`"Мышь для игровой приставки"`}),`.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};