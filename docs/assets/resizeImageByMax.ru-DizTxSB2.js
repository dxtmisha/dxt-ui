import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as c}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(i){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"@dxtmisha/ru/functional-basic/Functions/resizeImageByMax - Изменение размера изображения по максимальной стороне"}),`
`,e.jsx(n.h1,{id:"resizeimagebymax",children:e.jsx(n.code,{children:"resizeImageByMax"})}),`
`,e.jsx(n.p,{children:"Изменяет размер изображения пропорционально, чтобы оно вписывалось в заданные ограничения максимального размера (по ширине, высоте или автоматически по большей стороне). Возвращает Data URL с уменьшенным изображением в формате Base64."}),`
`,e.jsx(n.p,{children:"Функция полезна для сжатия изображений на лету перед их отправкой на сервер."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"image: HTMLImageElement | string"})," — Элемент изображения или URL-адрес."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"maxSize: number"})," — Максимальный допустимый размер в пикселях (для ширины или высоты)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"type: ResizeImageByMaxType"})," — Стратегия масштабирования: ",e.jsx(n.code,{children:"'auto'"}),", ",e.jsx(n.code,{children:"'width'"}),", или ",e.jsx(n.code,{children:"'height'"}),". По умолчанию ",e.jsx(n.code,{children:"'auto'"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"typeData?: string"})," — Опциональный MIME-тип для результирующего Data URL (например, ",e.jsx(n.code,{children:"'image/jpeg'"}),"). По умолчанию ",e.jsx(n.code,{children:"'image/png'"}),"."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"}),`
`,e.jsx(n.code,{children:"string | undefined"})," — Строка Data URL с изображением нового размера, или ",e.jsx(n.code,{children:"undefined"}),", если изображение невозможно обработать или оно меньше/равно ",e.jsx(n.code,{children:"maxSize"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { resizeImageByMax } from '@dxtmisha/functional-basic'

const imgElement = document.querySelector('img')
const resizedDataUrl = resizeImageByMax(imgElement, 800)

console.log(resizedDataUrl) 
// 'data:image/png;base64,iVBORw0KGgo...'
`})})]})}function m(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{m as default};
