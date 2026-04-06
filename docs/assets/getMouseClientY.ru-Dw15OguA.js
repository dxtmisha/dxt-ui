import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/functional-basic/Functions/getMouseClientY - Получение координаты Y события`}),`
`,(0,c.jsx)(n.h1,{id:`getmouseclienty`,children:(0,c.jsx)(n.code,{children:`getMouseClientY`})}),`
`,(0,c.jsx)(n.p,{children:`Извлекает Y-координату (по вертикали) указателя (мыши или пальца) относительно видимой области окна браузера (viewport) из объекта события.`}),`
`,(0,c.jsxs)(n.p,{children:[`Функция обрабатывает как обычные события мыши (`,(0,c.jsx)(n.code,{children:`MouseEvent`}),`), так и события касания (`,(0,c.jsx)(n.code,{children:`TouchEvent`}),`), отдавая приоритет свойству `,(0,c.jsx)(n.code,{children:`clientY`}),`. Если `,(0,c.jsx)(n.code,{children:`clientY`}),` не найден в самом событии, производится поиск в массивах касаний `,(0,c.jsx)(n.code,{children:`targetTouches`}),` и `,(0,c.jsx)(n.code,{children:`touches`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`event: MouseEvent & TouchEvent`}),` — Объект события (`,(0,c.jsx)(n.code,{children:`mousemove`}),`, `,(0,c.jsx)(n.code,{children:`touchmove`}),`, `,(0,c.jsx)(n.code,{children:`click`}),` и т.д.).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`number`}),` — Y координата курсора/касания. В случае её отсутствия возвращается `,(0,c.jsx)(n.code,{children:`0`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getMouseClientY } from '@dxtmisha/functional-basic'

document.addEventListener('click', (event) => {
  const y = getMouseClientY(event)
  console.log(\`Пользователь кликнул на расстоянии \${y}px от верхнего края окна\`)
})
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};