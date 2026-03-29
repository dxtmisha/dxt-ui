import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional/Composables/useMeta - Управление мета-тегами`}),`
`,(0,c.jsx)(n.h1,{id:`usemeta`,children:(0,c.jsx)(n.code,{children:`useMeta`})}),`
`,(0,c.jsx)(n.p,{children:`Composable для реактивного управления мета-тегами (HTML, Open Graph, Twitter Card) с автоматической синхронизацией DOM. Использует паттерн singleton — все компоненты используют одно состояние мета-тегов.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Возвращает:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`title: Ref<string>`}),` — реактивный заголовок страницы (без суффикса).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`description: Ref<string>`}),` — реактивный мета-тег description.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`keyword: Ref<string>`}),` — реактивный мета-тег keywords.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`image: Ref<string>`}),` — реактивный URL изображения для Open Graph / Twitter Card.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`canonical: Ref<string>`}),` — реактивный канонический URL.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`robots: Ref<MetaRobots>`}),` — реактивная директива robots.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`author: Ref<string>`}),` — реактивный мета-тег author.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`siteName: Ref<string>`}),` — реактивное название сайта.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getHtmlMeta(): string`}),` — генерирует HTML-строку для всех мета-тегов (полезно для SSR).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setSuffix(suffix: string): void`}),` — устанавливает суффикс для заголовка страницы.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`meta: Meta`}),` — базовый экземпляр `,(0,c.jsx)(n.code,{children:`Meta`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`пример-использования`,children:`Пример использования`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { useMeta } from '@dxtmisha/functional'

const { title, description } = useMeta()

title.value = 'Заголовок страницы'
description.value = 'Описание моей крутой страницы'
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};