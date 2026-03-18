import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(o){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"@dxtmisha/ru/functional-basic/Functions/blobToBase64 - Преобразование Blob в Base64"}),`
`,n.jsx(e.h1,{id:"blobtobase64",children:n.jsx(e.code,{children:"blobToBase64"})}),`
`,n.jsxs(e.p,{children:["Асинхронно преобразует объекты ",n.jsx(e.code,{children:"Blob"})," или ",n.jsx(e.code,{children:"File"})," в строку формата Base64 (Data URL)."]}),`
`,n.jsx(e.p,{children:"Это полезно при подготовке локальных файлов (например, загруженных пользователем изображений) для их предпросмотра в браузере или отправки на сервер в строковом формате."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"blob: Blob"})," — Объект ",n.jsx(e.code,{children:"Blob"})," (или ",n.jsx(e.code,{children:"File"}),"), который необходимо преобразовать."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"}),`
`,n.jsx(e.code,{children:"Promise<string | ArrayBuffer | null>"})," — Возвращает промис, который разрешается в строку Base64 (Data URL) или отклоняется в случае ошибки чтения."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { blobToBase64 } from '@dxtmisha/functional-basic'

async function uploadFile(file: File) {
  try {
    const base64String = await blobToBase64(file)
    console.log(base64String) // 'data:image/png;base64,iVBORw0KGgo...'
  } catch (error) {
    console.error('Ошибка при чтении файла', error)
  }
}
`})})]})}function h(o={}){const{wrapper:e}={...r(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(s,{...o})}):s(o)}export{h as default};
