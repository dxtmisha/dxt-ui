import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional-basic/Functions/blobToBase64 - Преобразование Blob в Base64`}),`
`,(0,c.jsx)(n.h1,{id:`blobtobase64`,children:(0,c.jsx)(n.code,{children:`blobToBase64`})}),`
`,(0,c.jsxs)(n.p,{children:[`Асинхронно преобразует объекты `,(0,c.jsx)(n.code,{children:`Blob`}),` или `,(0,c.jsx)(n.code,{children:`File`}),` в строку формата Base64 (Data URL).`]}),`
`,(0,c.jsx)(n.p,{children:`Это полезно при подготовке локальных файлов (например, загруженных пользователем изображений) для их предпросмотра в браузере или отправки на сервер в строковом формате.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`blob: Blob`}),` — Объект `,(0,c.jsx)(n.code,{children:`Blob`}),` (или `,(0,c.jsx)(n.code,{children:`File`}),`), который необходимо преобразовать.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`Promise<string | ArrayBuffer | null>`}),` — Возвращает промис, который разрешается в строку Base64 (Data URL) или отклоняется в случае ошибки чтения.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { blobToBase64 } from '@dxtmisha/functional-basic'

async function uploadFile(file: File) {
  try {
    const base64String = await blobToBase64(file)
    console.log(base64String) // 'data:image/png;base64,iVBORw0KGgo...'
  } catch (error) {
    console.error('Ошибка при чтении файла', error)
  }
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};