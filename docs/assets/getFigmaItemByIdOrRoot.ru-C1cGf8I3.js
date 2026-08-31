import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a,s as o}from"./blocks-8NMpF0hx.js";function s(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{title:`@dxtmisha/ru/figma-code/Functions/getFigmaItemByIdOrRoot - Получение узла Figma или корня документа`}),`
`,(0,l.jsx)(t.h1,{id:`getfigmaitembyidorroot`,children:(0,l.jsx)(t.code,{children:`getFigmaItemByIdOrRoot`})}),`
`,(0,l.jsxs)(t.p,{children:[`Асинхронная утилита, которая получает узел Figma по его ID. Если ID не указан или узел не найден, функция возвращает корень документа (`,(0,l.jsx)(t.code,{children:`figma.root`}),`). Это удобно для операций, которые могут быть направлены как на конкретный элемент, так и на весь документ в целом.`]}),`
`,(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`id?: string`}),` — (Опционально) Идентификатор (ID) узла Figma.`]}),`
`]}),`
`,(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,l.jsx)(t.code,{children:`Promise<T>`}),` — Полученный узел Figma или `,(0,l.jsx)(t.code,{children:`figma.root`}),`.`]}),`
`,(0,l.jsx)(t.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,l.jsx)(i,{language:`typescript`,code:`
import { getFigmaItemByIdOrRoot } from '@dxtmisha/figma-code'

async function getStorageNode(id?: string) {
// Если id указан, пытается получить этот узел.
// В противном случае возвращает figma.root.
const node = await getFigmaItemByIdOrRoot(id)

console.log('Имя целевого узла:', node.name)
}
`})]})}function c(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;function u(){return(u=e((()=>{l=r(),t(),a()})))()}u();export{c as default};