import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{c as r,f as i,s as a}from"./blocks-CKlddtvc.js";import{t as o}from"./mdx-react-shim-B1U8VZv0.js";function s(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a,{title:`@dxtmisha/ru/figma-code/Functions/toFrameSelection - Выделение и фокус на фрейме`}),`
`,(0,l.jsx)(n.h1,{id:`toframeselection`,children:(0,l.jsx)(n.code,{children:`toFrameSelection`})}),`
`,(0,l.jsx)(n.p,{children:`Асинхронная утилита, которая находит узел Figma по его ID, перемещает к нему вьюпорт и выделяет его. Если узел находится на другой странице, функция автоматически переключит текущую страницу.`}),`
`,(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`id?: string`}),` — (Опционально) Идентификатор (ID) узла для выделения.`]}),`
`]}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,l.jsx)(n.code,{children:`Promise<void>`})]}),`
`,(0,l.jsx)(n.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,l.jsx)(r,{language:`typescript`,code:`
import { toFrameSelection } from '@dxtmisha/figma-code'

async function jumpToElement(nodeId: string) {
await toFrameSelection(nodeId)
console.log('Вид перемещен и узел выделен')
}
`})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=n(),o(),i()}))();export{c as default};