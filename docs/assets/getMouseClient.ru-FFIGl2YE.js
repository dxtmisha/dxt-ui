import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional-basic/Functions/getMouseClient - Получение координат X и Y события`}),`
`,(0,c.jsx)(n.h1,{id:`getmouseclient`,children:(0,c.jsx)(n.code,{children:`getMouseClient`})}),`
`,(0,c.jsx)(n.p,{children:`Извлекает X и Y координаты указателя (мыши или пальца) относительно видимой области окна браузера (viewport) из объекта события.`}),`
`,(0,c.jsxs)(n.p,{children:[`Функция обрабатывает как обычные события мыши (`,(0,c.jsx)(n.code,{children:`MouseEvent`}),`), так и события касания (`,(0,c.jsx)(n.code,{children:`TouchEvent`}),`), обеспечивая единый интерфейс (возвращает объект типа `,(0,c.jsx)(n.code,{children:`ImageCoordinator`}),` со свойствами `,(0,c.jsx)(n.code,{children:`x`}),` и `,(0,c.jsx)(n.code,{children:`y`}),`). Это полезно при создании drag-and-drop интерфейсов, слайдеров и других интерактивных элементов, работающих на разных устройствах.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`event: MouseEvent & TouchEvent`}),` — Объект события (`,(0,c.jsx)(n.code,{children:`mousemove`}),`, `,(0,c.jsx)(n.code,{children:`touchmove`}),`, `,(0,c.jsx)(n.code,{children:`click`}),` и т.д.).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`ImageCoordinator`}),` — Объект, содержащий свойства `,(0,c.jsx)(n.code,{children:`x`}),` и `,(0,c.jsx)(n.code,{children:`y`}),` (координаты). Если координаты не найдены в событии, возвращается `,(0,c.jsx)(n.code,{children:`{ x: 0, y: 0 }`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getMouseClient } from '@dxtmisha/functional-basic'

document.addEventListener('mousemove', (event) => {
  const coords = getMouseClient(event)
  console.log(\`Курсор сейчас на X: \${coords.x}, Y: \${coords.y}\`)
})

document.addEventListener('touchmove', (event) => {
  const coords = getMouseClient(event)
  console.log(\`Палец сейчас на X: \${coords.x}, Y: \${coords.y}\`)
})
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};