import{i as e}from"./preload-helper-CqJKl217.js";import{i as t,t as n}from"./jsx-runtime-BpINW1Kv.js";import{c as r,f as i,s as a}from"./blocks-CQEzKDSL.js";import{t as o}from"./mdx-react-shim-CpDaEZL9.js";function s(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a,{title:`@dxtmisha/ru/figma-code/Functions/getFigmaItemByIdOrRoot - Получение узла Figma или корня документа`}),`
`,(0,l.jsx)(n.h1,{id:`getfigmaitembyidorroot`,children:(0,l.jsx)(n.code,{children:`getFigmaItemByIdOrRoot`})}),`
`,(0,l.jsxs)(n.p,{children:[`Асинхронная утилита, которая получает узел Figma по его ID. Если ID не указан или узел не найден, функция возвращает корень документа (`,(0,l.jsx)(n.code,{children:`figma.root`}),`). Это удобно для операций, которые могут быть направлены как на конкретный элемент, так и на весь документ в целом.`]}),`
`,(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`id?: string`}),` — (Опционально) Идентификатор (ID) узла Figma.`]}),`
`]}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,l.jsx)(n.code,{children:`Promise<T>`}),` — Полученный узел Figma или `,(0,l.jsx)(n.code,{children:`figma.root`}),`.`]}),`
`,(0,l.jsx)(n.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,l.jsx)(r,{language:`typescript`,code:`
import { getFigmaItemByIdOrRoot } from '@dxtmisha/figma-code'

async function getStorageNode(id?: string) {
// Если id указан, пытается получить этот узел.
// В противном случае возвращает figma.root.
const node = await getFigmaItemByIdOrRoot(id)

console.log('Имя целевого узла:', node.name)
}
`})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=n(),o(),i()}))();export{c as default};