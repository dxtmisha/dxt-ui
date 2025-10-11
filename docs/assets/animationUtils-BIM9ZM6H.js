import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-C8vOrmRQ.js";import{M as r}from"./blocks-Cpz0g9q0.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CFZkzvey.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"@dxtmisha/functional/ru/Animation Utils"}),`
`,n.jsx(e.h1,{id:"утилиты-анимации",children:"Утилиты анимации"}),`
`,n.jsx(e.p,{children:"Набор функций для работы с анимациями и кадрами отрисовки."}),`
`,n.jsx(e.h2,{id:"frame",children:n.jsx(e.code,{children:"frame"})}),`
`,n.jsx(e.p,{children:"Циклически вызывает requestAnimationFrame до выполнения условия остановки. Используется для создания плавных анимаций."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"callback: () => void"})," — функция, вызываемая на каждом кадре анимации"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"next?: () => boolean"})," — функция условия продолжения (опционально)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"end?: () => void"})," — функция, выполняемая при завершении анимации (опционально)"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { frame } from '@dxtmisha/functional'

// Простая анимация
let count = 0
frame(
  () => console.log(\`Кадр \${count++}\`), // выполняется каждый кадр
  () => count < 10, // условие продолжения
  () => console.log('Анимация завершена') // выполняется при остановке
)

// Анимация движения элемента
let position = 0
frame(
  () => element.style.left = \`\${position++}px\`,
  () => position < 200
)
`})})]})}function x(o={}){const{wrapper:e}={...i(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(t,{...o})}):t(o)}export{x as default};
