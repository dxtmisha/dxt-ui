import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional-basic/Classes/MetaManager - Управление мета-тегами`}),`
`,(0,c.jsx)(n.h1,{id:`класс-metamanager`,children:`Класс MetaManager`}),`
`,(0,c.jsx)(n.p,{children:`Базовый generic-класс для синхронизации мета-тегов HTML-документа. Читает существующие теги из DOM при инициализации и обеспечивает единый интерфейс для их чтения и записи.`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс является родительским для `,(0,c.jsx)(n.code,{children:`MetaOg`}),`, `,(0,c.jsx)(n.code,{children:`MetaTwitter`}),` и `,(0,c.jsx)(n.code,{children:`Meta`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс является `,(0,c.jsx)(n.strong,{children:`абстрактным`}),`. Вы не можете создать его экземпляр напрямую через `,(0,c.jsx)(n.code,{children:`new MetaManager()`}),`. Вместо этого его необходимо расширить.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры конструктора (для потомков):`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`listMeta: T`}),` — список имён мета-тегов, которыми будет управлять менеджер.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isProperty?: boolean`}),` — определяет используемый атрибут: `,(0,c.jsx)(n.code,{children:`true`}),` для `,(0,c.jsx)(n.code,{children:`property`}),` (Open Graph), `,(0,c.jsx)(n.code,{children:`false`}),` для `,(0,c.jsx)(n.code,{children:`name`}),` (стандартные теги). По умолчанию: `,(0,c.jsx)(n.code,{children:`false`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { MetaManager } from '@dxtmisha/functional-basic'

// Пример расширения
class MyMeta extends MetaManager<string[]> {
  constructor() {
    super(['description', 'keywords'])
  }
}

const myMeta = new MyMeta()
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getListMeta(): T`}),` — возвращает список имён управляемых тегов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(name): string`}),` — возвращает содержимое тега по имени. Если не установлен — `,(0,c.jsx)(n.code,{children:`''`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getItems(): MetaList<T>`}),` — возвращает объект со всеми тегами: `,(0,c.jsx)(n.code,{children:`{ [name]: content }`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`set(name, content): this`}),` — устанавливает тег в DOM (создаёт если нет). Поддерживает цепочку.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setByList(metaList): this`}),` — устанавливает несколько тегов из объекта. Поддерживает цепочку.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`генерация-html`,children:`Генерация HTML`}),`
`,(0,c.jsx)(n.h3,{id:`html-string`,children:(0,c.jsx)(n.code,{children:`html(): string`})}),`
`,(0,c.jsxs)(n.p,{children:[`Генерирует HTML-строку для всех управляемых тегов с заполненным `,(0,c.jsx)(n.code,{children:`content`}),`. Используется для SSR.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`manager.set('description', 'Моё описание').set('keywords', 'vue, typescript')

manager.html()
// '<meta name="description" content="Моё описание"><meta name="keywords" content="vue, typescript">'
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};