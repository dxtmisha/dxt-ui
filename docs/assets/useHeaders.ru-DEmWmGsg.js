import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/nitro-basic/Composables/useHeaders - Получение заголовков`}),`
`,(0,c.jsx)(t.h1,{id:`useheaders`,children:(0,c.jsx)(t.code,{children:`useHeaders`})}),`
`,(0,c.jsxs)(t.p,{children:[`Композитная функция (composable), которая позволяет получить доступ к заголовкам API текущего запроса. Она может возвращать как весь объект `,(0,c.jsx)(t.code,{children:`Headers`}),`, так и значение конкретного заголовка по его имени.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name?: string`}),` — Опциональное имя заголовка.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Возвращает:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`Headers | undefined`}),` — Если имя не передано, возвращает весь объект заголовков.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`string | undefined`}),` — Если передано имя, возвращает значение этого заголовка.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Пример использования:`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { useHeaders } from '@dxtmisha/nitro-basic'

// Получение конкретного заголовка
const contentType = useHeaders('Content-Type')

// Получение всех заголовков
const headers = useHeaders()
if (headers) {
  console.log(headers.get('Authorization'))
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};