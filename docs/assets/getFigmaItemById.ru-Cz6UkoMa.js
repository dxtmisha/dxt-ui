import{i as e}from"./preload-helper-CqJKl217.js";import{i as t,t as n}from"./jsx-runtime-BpINW1Kv.js";import{c as r,f as i,s as a}from"./blocks-CQEzKDSL.js";import{t as o}from"./mdx-react-shim-CpDaEZL9.js";function s(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a,{title:`@dxtmisha/ru/figma-code/Functions/getFigmaItemById - Получение элемента Figma по ID`}),`
`,(0,l.jsx)(n.h1,{id:`getfigmaitembyid`,children:(0,l.jsx)(n.code,{children:`getFigmaItemById`})}),`
`,(0,l.jsxs)(n.p,{children:[`Асинхронная утилита для получения узла Figma по его идентификатору и оборачивания его в экземпляр класса `,(0,l.jsx)(n.code,{children:`FigmaItem`}),`. Это упрощает дальнейшую работу с узлом, такую как проверка типов, управление выделением или экспорт.`]}),`
`,(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`id: string`}),` — Идентификатор (ID) узла Figma.`]}),`
`]}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,l.jsx)(n.code,{children:`Promise<FigmaItem | undefined>`}),` — Экземпляр `,(0,l.jsx)(n.code,{children:`FigmaItem`}),`, оборачивающий узел, или `,(0,l.jsx)(n.code,{children:`undefined`}),`, если узел не найден.`]}),`
`,(0,l.jsx)(n.h2,{id:`типы`,children:`Типы`}),`
`,(0,l.jsx)(n.h3,{id:`figmaitem`,children:`FigmaItem`}),`
`,(0,l.jsx)(n.p,{children:`Класс-обертка для узлов Figma, предоставляющий высокоуровневые методы для:`}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[`Проверки типов узлов (`,(0,l.jsx)(n.code,{children:`isFrame()`}),`, `,(0,l.jsx)(n.code,{children:`isText()`}),` и т.д.).`]}),`
`,(0,l.jsx)(n.li,{children:`Доступа к родительским и дочерним элементам.`}),`
`,(0,l.jsx)(n.li,{children:`Экспорта в различные форматы.`}),`
`,(0,l.jsx)(n.li,{children:`Управления выделением и фокусом вьюпорта.`}),`
`]}),`
`,(0,l.jsx)(n.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,l.jsx)(r,{language:`typescript`,code:`
import { getFigmaItemById } from '@dxtmisha/figma-code'

async function highlightFrame(frameId: string) {
const item = await getFigmaItemById(frameId)

if (item && item.isFrame()) {
  item.toSelection()
  console.log('Выбран фрейм:', item.getName())
} else {
  console.log('Фрейм не найден или не является узлом типа FRAME')
}
}
`})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=n(),o(),i()}))();export{c as default};