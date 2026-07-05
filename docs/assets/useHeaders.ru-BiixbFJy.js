import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/nitro-basic/Composables/useHeaders - Получение заголовков`}),`
`,(0,c.jsx)(n.h1,{id:`useheaders`,children:(0,c.jsx)(n.code,{children:`useHeaders`})}),`
`,(0,c.jsxs)(n.p,{children:[`Композитная функция (composable), которая позволяет получить доступ к заголовкам API текущего запроса. Она может возвращать как весь объект `,(0,c.jsx)(n.code,{children:`Headers`}),`, так и значение конкретного заголовка по его имени.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name?: string`}),` — Опциональное имя заголовка.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Возвращает:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`Headers | undefined`}),` — Если имя не передано, возвращает весь объект заголовков.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`string | undefined`}),` — Если передано имя, возвращает значение этого заголовка.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Пример использования:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { useHeaders } from '@dxtmisha/nitro-basic'

// Получение конкретного заголовка
const contentType = useHeaders('Content-Type')

// Получение всех заголовков
const headers = useHeaders()
if (headers) {
  console.log(headers.get('Authorization'))
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};