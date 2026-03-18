import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DC9WpFni.js";import{M as t}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function c(o){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"@dxtmisha/ru/functional-basic/Functions/getMouseClient - Получение координат X и Y события"}),`
`,e.jsx(n.h1,{id:"getmouseclient",children:e.jsx(n.code,{children:"getMouseClient"})}),`
`,e.jsx(n.p,{children:"Извлекает X и Y координаты указателя (мыши или пальца) относительно видимой области окна браузера (viewport) из объекта события."}),`
`,e.jsxs(n.p,{children:["Функция обрабатывает как обычные события мыши (",e.jsx(n.code,{children:"MouseEvent"}),"), так и события касания (",e.jsx(n.code,{children:"TouchEvent"}),"), обеспечивая единый интерфейс (возвращает объект типа ",e.jsx(n.code,{children:"ImageCoordinator"})," со свойствами ",e.jsx(n.code,{children:"x"})," и ",e.jsx(n.code,{children:"y"}),"). Это полезно при создании drag-and-drop интерфейсов, слайдеров и других интерактивных элементов, работающих на разных устройствах."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"event: MouseEvent & TouchEvent"})," — Объект события (",e.jsx(n.code,{children:"mousemove"}),", ",e.jsx(n.code,{children:"touchmove"}),", ",e.jsx(n.code,{children:"click"})," и т.д.)."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"}),`
`,e.jsx(n.code,{children:"ImageCoordinator"})," — Объект, содержащий свойства ",e.jsx(n.code,{children:"x"})," и ",e.jsx(n.code,{children:"y"})," (координаты). Если координаты не найдены в событии, возвращается ",e.jsx(n.code,{children:"{ x: 0, y: 0 }"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { getMouseClient } from '@dxtmisha/functional-basic'

document.addEventListener('mousemove', (event) => {
  const coords = getMouseClient(event)
  console.log(\`Курсор сейчас на X: \${coords.x}, Y: \${coords.y}\`)
})

document.addEventListener('touchmove', (event) => {
  const coords = getMouseClient(event)
  console.log(\`Палец сейчас на X: \${coords.x}, Y: \${coords.y}\`)
})
`})})]})}function u(o={}){const{wrapper:n}={...s(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(c,{...o})}):c(o)}export{u as default};
