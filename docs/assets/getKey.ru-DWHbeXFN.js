import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-DC9WpFni.js";import{M as d}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(c){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...c.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"@dxtmisha/ru/functional-basic/Functions/getKey - Получение кода нажатой клавиши"}),`
`,e.jsx(n.h1,{id:"getkey",children:e.jsx(n.code,{children:"getKey"})}),`
`,e.jsxs(n.p,{children:["Возвращает код или имя клавиши, которая была нажата, на основе объекта ",e.jsx(n.code,{children:"KeyboardEvent"}),". Эта утилита стандартизирует способ извлечения ключа, безопасно пытаясь получить значения свойств в следующем порядке приоритета: ",e.jsx(n.code,{children:"event.key"})," → ",e.jsx(n.code,{children:"event.code"})," → строковое значение ",e.jsx(n.code,{children:"event.keyCode"}),". Если ничего не найдено, возвращает ",e.jsx(n.code,{children:"undefined"}),"."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"event: KeyboardEvent"})," — Событие клавиатуры (возникающее при ",e.jsx(n.code,{children:"keydown"}),", ",e.jsx(n.code,{children:"keyup"})," или ",e.jsx(n.code,{children:"keypress"}),")."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"}),`
`,e.jsx(n.code,{children:"string"})," — Название или код нажатой клавиши (например, ",e.jsx(n.code,{children:"'Enter'"}),", ",e.jsx(n.code,{children:"'Escape'"}),", ",e.jsx(n.code,{children:"'A'"}),")."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { getKey } from '@dxtmisha/functional-basic'

document.addEventListener('keydown', (e) => {
  const keyName = getKey(e)
  
  if (keyName === 'Escape') {
    console.log('Пользователь нажал Escape! Закрываем меню.')
  }
})
`})})]})}function j(c={}){const{wrapper:n}={...o(),...c.components};return n?e.jsx(n,{...c,children:e.jsx(s,{...c})}):s(c)}export{j as default};
