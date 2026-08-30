import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Classes/SearchListItem - Управление Элементом Поиска`}),`
`,(0,c.jsx)(t.h1,{id:`класс-searchlistitem`,children:`Класс SearchListItem`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`SearchListItem`}),` представляет текущее состояние ввода поиска. Он управляет значением для поиска и определяет, следует ли запускать операцию поиска на основе настроенных параметров.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Управление значением`}),` — предоставляет удобные методы для получения и установки строки поиска.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Логика активации`}),` — определяет, должен ли быть запущен поиск, основываясь на длине строки поиска.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Типизация`}),` — включает Type Guards для проверки заполненности значения.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(t.p,{children:[`Для инициализации объекта вызовите конструктор `,(0,c.jsx)(t.code,{children:`SearchListItem(value, options)`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: string | undefined`}),` — начальное значение поиска.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options: SearchListOptions`}),` — экземпляр `,(0,c.jsx)(t.code,{children:`SearchListOptions`}),` для получения лимита поиска.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { SearchListItem, SearchListOptions } from '@dxtmisha/functional-basic'

const options = new SearchListOptions({ limit: 3 })
const item = new SearchListItem('he', options)

console.log(item.isSearch()) // false (длина < 3)
item.set('hello')
console.log(item.isSearch()) // true (длина >= 3)
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`информационные`,children:`Информационные`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`is(): boolean`}),` — Проверяет, что текущее значение не является пустым или undefined.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isSearch(): boolean`}),` — Проверяет, следует ли выполнять поиск (значение существует И длина >= лимита).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`get(): string`}),` — Возвращает текущее значение поиска в виде строки.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`настройка-сеттеры`,children:`Настройка (Сеттеры)`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`set(value?: string): this`}),` — Устанавливает новое значение поиска и возвращает текущий экземпляр.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`активация-поиска`,children:`Активация поиска`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`SearchListItem`}),` выступает в роли фильтра, который определяет, должна ли система поиска начать обработку данных. Это реализуется через метод `,(0,c.jsx)(t.code,{children:`isSearch()`}),`, который использует опцию `,(0,c.jsx)(t.code,{children:`limit`}),` из `,(0,c.jsx)(t.code,{children:`SearchListOptions`}),`.`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Минимальная длина (`,(0,c.jsx)(t.code,{children:`limit`}),`)`]}),`: Поиск считается активным только в том случае, если количество символов в строке поиска больше или равно установленному лимиту.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Поведение по умолчанию`}),`: По умолчанию лимит равен `,(0,c.jsx)(t.code,{children:`2`}),`. Это означает, что поиск по букве `,(0,c.jsx)(t.code,{children:`"а"`}),` не запустит процесс сопоставления, а по `,(0,c.jsx)(t.code,{children:`"ад"`}),` или `,(0,c.jsx)(t.code,{children:`"админ"`}),` — запустит.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:`Эта логика помогает избежать лишних вычислений и "шумных" результатов, когда пользователь ввел только один символ.`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};