import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-DymlrBn2.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional-basic/Functions/getMouseClientX - Получение координаты X события`}),`
`,(0,c.jsx)(n.h1,{id:`getmouseclientx`,children:(0,c.jsx)(n.code,{children:`getMouseClientX`})}),`
`,(0,c.jsx)(n.p,{children:`Извлекает X-координату (по горизонтали) указателя (мыши или пальца) относительно видимой области окна браузера (viewport) из объекта события.`}),`
`,(0,c.jsxs)(n.p,{children:[`Функция обрабатывает как обычные события мыши (`,(0,c.jsx)(n.code,{children:`MouseEvent`}),`), так и события касания (`,(0,c.jsx)(n.code,{children:`TouchEvent`}),`), отдавая приоритет свойству `,(0,c.jsx)(n.code,{children:`clientX`}),`. Если `,(0,c.jsx)(n.code,{children:`clientX`}),` не найден в самом событии, производится поиск в массивах касаний `,(0,c.jsx)(n.code,{children:`targetTouches`}),` и `,(0,c.jsx)(n.code,{children:`touches`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`event: MouseEvent & TouchEvent`}),` — Объект события (`,(0,c.jsx)(n.code,{children:`mousemove`}),`, `,(0,c.jsx)(n.code,{children:`touchmove`}),`, `,(0,c.jsx)(n.code,{children:`click`}),` и т.д.).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`number`}),` — X координата курсора/касания. В случае её отсутствия возвращается `,(0,c.jsx)(n.code,{children:`0`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getMouseClientX } from '@dxtmisha/functional-basic'

document.addEventListener('click', (event) => {
  const x = getMouseClientX(event)
  console.log(\`Пользователь кликнул на расстоянии \${x}px от левого края окна\`)
})
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};