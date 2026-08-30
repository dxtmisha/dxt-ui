import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/getElementImage - Получение элемента изображения`}),`
`,(0,c.jsx)(t.h1,{id:`getelementimage`,children:(0,c.jsx)(t.code,{children:`getElementImage`})}),`
`,(0,c.jsxs)(t.p,{children:[`Служит для безопасного получения узла `,(0,c.jsx)(t.code,{children:`HTMLImageElement`}),`. Если на вход подана строка (ссылка на изображение), функция автоматически создаст тег `,(0,c.jsx)(t.code,{children:`<img>`}),` и назначит ему эту ссылку (`,(0,c.jsx)(t.code,{children:`src`}),`). Если на вход уже передан объект изображения `,(0,c.jsx)(t.code,{children:`HTMLImageElement`}),`, он просто возвращается без изменений.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`image: HTMLImageElement | string`}),` — Элемент изображения или строковый источник (URL).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`HTMLImageElement | undefined`}),` — Готовый к использованию тег `,(0,c.jsx)(t.code,{children:`<img>`}),`, либо `,(0,c.jsx)(t.code,{children:`undefined`}),` если окружение не позволяет его создать (например, нет DOM).`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getElementImage } from '@dxtmisha/functional-basic'

// Передаем строку - ссылка
const img1 = getElementImage('/path/to/image.png')
console.log(img1 instanceof HTMLImageElement) // true
console.log(img1?.src) // 'http://.../path/to/image.png'

// Передаем существующий тег img
const existingImg = document.createElement('img')
const img2 = getElementImage(existingImg)
console.log(img1 === existingImg) // true
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};