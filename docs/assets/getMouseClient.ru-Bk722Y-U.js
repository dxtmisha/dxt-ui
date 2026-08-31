import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/getMouseClient - Получение координат X и Y события`}),`
`,(0,c.jsx)(t.h1,{id:`getmouseclient`,children:(0,c.jsx)(t.code,{children:`getMouseClient`})}),`
`,(0,c.jsx)(t.p,{children:`Извлекает X и Y координаты указателя (мыши или пальца) относительно видимой области окна браузера (viewport) из объекта события.`}),`
`,(0,c.jsxs)(t.p,{children:[`Функция обрабатывает как обычные события мыши (`,(0,c.jsx)(t.code,{children:`MouseEvent`}),`), так и события касания (`,(0,c.jsx)(t.code,{children:`TouchEvent`}),`), обеспечивая единый интерфейс (возвращает объект типа `,(0,c.jsx)(t.code,{children:`ImageCoordinator`}),` со свойствами `,(0,c.jsx)(t.code,{children:`x`}),` и `,(0,c.jsx)(t.code,{children:`y`}),`). Это полезно при создании drag-and-drop интерфейсов, слайдеров и других интерактивных элементов, работающих на разных устройствах.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`event: MouseEvent | TouchEvent`}),` — Объект события (`,(0,c.jsx)(t.code,{children:`mousemove`}),`, `,(0,c.jsx)(t.code,{children:`touchmove`}),`, `,(0,c.jsx)(t.code,{children:`click`}),` и т.д.).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`ImageCoordinator`}),` — Объект, содержащий свойства `,(0,c.jsx)(t.code,{children:`x`}),` и `,(0,c.jsx)(t.code,{children:`y`}),` (координаты). Если координаты не найдены в событии, возвращается `,(0,c.jsx)(t.code,{children:`{ x: 0, y: 0 }`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getMouseClient } from '@dxtmisha/functional-basic'

document.addEventListener('mousemove', (event) => {
  const coords = getMouseClient(event)
  console.log(\`Курсор сейчас на X: \${coords.x}, Y: \${coords.y}\`)
})

document.addEventListener('touchmove', (event) => {
  const coords = getMouseClient(event)
  console.log(\`Палец сейчас на X: \${coords.x}, Y: \${coords.y}\`)
})
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};