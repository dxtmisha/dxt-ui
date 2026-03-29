import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional-basic/Functions/getElementImage - Получение элемента изображения`}),`
`,(0,c.jsx)(n.h1,{id:`getelementimage`,children:(0,c.jsx)(n.code,{children:`getElementImage`})}),`
`,(0,c.jsxs)(n.p,{children:[`Служит для безопасного получения узла `,(0,c.jsx)(n.code,{children:`HTMLImageElement`}),`. Если на вход подана строка (ссылка на изображение), функция автоматически создаст тег `,(0,c.jsx)(n.code,{children:`<img>`}),` и назначит ему эту ссылку (`,(0,c.jsx)(n.code,{children:`src`}),`). Если на вход уже передан объект изображения `,(0,c.jsx)(n.code,{children:`HTMLImageElement`}),`, он просто возвращается без изменений.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`image: HTMLImageElement | string`}),` — Элемент изображения или строковый источник (URL).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`HTMLImageElement | undefined`}),` — Готовый к использованию тег `,(0,c.jsx)(n.code,{children:`<img>`}),`, либо `,(0,c.jsx)(n.code,{children:`undefined`}),` если окружение не позволяет его создать (например, нет DOM).`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getElementImage } from '@dxtmisha/functional-basic'

// Передаем строку - ссылка
const img1 = getElementImage('/path/to/image.png')
console.log(img1 instanceof HTMLImageElement) // true
console.log(img1?.src) // 'http://.../path/to/image.png'

// Передаем существующий тег img
const existingImg = document.createElement('img')
const img2 = getElementImage(existingImg)
console.log(img1 === existingImg) // true
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};