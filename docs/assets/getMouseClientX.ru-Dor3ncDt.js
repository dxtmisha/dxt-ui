import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-BaLriJNq.js";import{M as s}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function t(c){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...c.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"@dxtmisha/ru/functional-basic/Functions/getMouseClientX - Получение координаты X события"}),`
`,e.jsx(n.h1,{id:"getmouseclientx",children:e.jsx(n.code,{children:"getMouseClientX"})}),`
`,e.jsx(n.p,{children:"Извлекает X-координату (по горизонтали) указателя (мыши или пальца) относительно видимой области окна браузера (viewport) из объекта события."}),`
`,e.jsxs(n.p,{children:["Функция обрабатывает как обычные события мыши (",e.jsx(n.code,{children:"MouseEvent"}),"), так и события касания (",e.jsx(n.code,{children:"TouchEvent"}),"), отдавая приоритет свойству ",e.jsx(n.code,{children:"clientX"}),". Если ",e.jsx(n.code,{children:"clientX"})," не найден в самом событии, производится поиск в массивах касаний ",e.jsx(n.code,{children:"targetTouches"})," и ",e.jsx(n.code,{children:"touches"}),"."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"event: MouseEvent & TouchEvent"})," — Объект события (",e.jsx(n.code,{children:"mousemove"}),", ",e.jsx(n.code,{children:"touchmove"}),", ",e.jsx(n.code,{children:"click"})," и т.д.)."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"}),`
`,e.jsx(n.code,{children:"number"})," — X координата курсора/касания. В случае её отсутствия возвращается ",e.jsx(n.code,{children:"0"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { getMouseClientX } from '@dxtmisha/functional-basic'

document.addEventListener('click', (event) => {
  const x = getMouseClientX(event)
  console.log(\`Пользователь кликнул на расстоянии \${x}px от левого края окна\`)
})
`})})]})}function u(c={}){const{wrapper:n}={...o(),...c.components};return n?e.jsx(n,{...c,children:e.jsx(t,{...c})}):t(c)}export{u as default};
