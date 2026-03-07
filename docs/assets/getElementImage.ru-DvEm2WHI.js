import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-BaLriJNq.js";import{M as o}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function i(t){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"@dxtmisha/ru/functional-basic/Functions/getElementImage - Получение элемента изображения"}),`
`,e.jsx(n.h1,{id:"getelementimage",children:e.jsx(n.code,{children:"getElementImage"})}),`
`,e.jsxs(n.p,{children:["Служит для безопасного получения узла ",e.jsx(n.code,{children:"HTMLImageElement"}),". Если на вход подана строка (ссылка на изображение), функция автоматически создаст тег ",e.jsx(n.code,{children:"<img>"})," и назначит ему эту ссылку (",e.jsx(n.code,{children:"src"}),"). Если на вход уже передан объект изображения ",e.jsx(n.code,{children:"HTMLImageElement"}),", он просто возвращается без изменений."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"image: HTMLImageElement | string"})," — Элемент изображения или строковый источник (URL)."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"}),`
`,e.jsx(n.code,{children:"HTMLImageElement | undefined"})," — Готовый к использованию тег ",e.jsx(n.code,{children:"<img>"}),", либо ",e.jsx(n.code,{children:"undefined"})," если окружение не позволяет его создать (например, нет DOM)."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { getElementImage } from '@dxtmisha/functional-basic'

// Передаем строку - ссылка
const img1 = getElementImage('/path/to/image.png')
console.log(img1 instanceof HTMLImageElement) // true
console.log(img1?.src) // 'http://.../path/to/image.png'

// Передаем существующий тег img
const existingImg = document.createElement('img')
const img2 = getElementImage(existingImg)
console.log(img1 === existingImg) // true
`})})]})}function a(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{a as default};
