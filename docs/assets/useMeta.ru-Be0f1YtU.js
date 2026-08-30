import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional/Composables/useMeta - Управление мета-тегами`}),`
`,(0,c.jsx)(t.h1,{id:`usemeta`,children:(0,c.jsx)(t.code,{children:`useMeta`})}),`
`,(0,c.jsx)(t.p,{children:`Composable для реактивного управления мета-тегами (HTML, Open Graph, Twitter Card) с автоматической синхронизацией DOM. Использует паттерн singleton — все компоненты используют одно состояние мета-тегов.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Возвращает:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`title: Ref<string>`}),` — реактивный заголовок страницы (без суффикса).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`description: Ref<string>`}),` — реактивный мета-тег description.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`keyword: Ref<string>`}),` — реактивный мета-тег keywords.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`image: Ref<string>`}),` — реактивный URL изображения для Open Graph / Twitter Card.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`canonical: Ref<string>`}),` — реактивный канонический URL.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`robots: Ref<MetaRobots>`}),` — реактивная директива robots.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`author: Ref<string>`}),` — реактивный мета-тег author.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`siteName: Ref<string>`}),` — реактивное название сайта.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getHtmlMeta(): string`}),` — генерирует HTML-строку для всех мета-тегов (полезно для SSR).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setSuffix(suffix: string): void`}),` — устанавливает суффикс для заголовка страницы.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`meta: Meta`}),` — базовый экземпляр `,(0,c.jsx)(t.code,{children:`Meta`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`пример-использования`,children:`Пример использования`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { useMeta } from '@dxtmisha/functional'

const { title, description } = useMeta()

title.value = 'Заголовок страницы'
description.value = 'Описание моей крутой страницы'
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};