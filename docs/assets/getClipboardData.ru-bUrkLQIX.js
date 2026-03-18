import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as s}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function o(t){const e={blockquote:"blockquote",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"@dxtmisha/ru/functional-basic/Functions/getClipboardData - Получение данных из буфера обмена"}),`
`,n.jsx(e.h1,{id:"getclipboarddata",children:n.jsx(e.code,{children:"getClipboardData"})}),`
`,n.jsx(e.p,{children:"Асинхронно извлекает текст из буфера обмена."}),`
`,n.jsxs(e.p,{children:["Эта функция в первую очередь пытается получить текстовые данные из переданного события ",n.jsx(e.code,{children:"ClipboardEvent"})," (например, при обработке события ",n.jsx(e.code,{children:"paste"}),"). Если событие не передано или в нём нет данных, функция производит чтение (возврат ответа в виде текста) напрямую из системного буфера обмена через ",n.jsx(e.code,{children:"navigator.clipboard.readText()"}),"."]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["Примечание: Использование ",n.jsx(e.code,{children:"navigator.clipboard.readText()"})," требует безопасного (HTTPS) контекста и может потребовать от пользователя разрешения на чтение буфера обмена в некоторых браузерах."]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"event?: ClipboardEvent"})," — Событие буфера обмена (опционально), возникающее при действиях cut (вырезать), copy (копировать), paste (вставить)."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"}),`
`,n.jsx(e.code,{children:"Promise<string>"})," — Возвращает промис со строкой текста из буфера обмена, либо пустую строку в случае неудачи."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { getClipboardData } from '@dxtmisha/functional-basic'

// Использование напрямую
document.querySelector('#paste-btn')?.addEventListener('click', async () => {
  const text = await getClipboardData()
  console.log('Текст из буфера:', text)
})

// Использование в обработчике события 'paste'
document.addEventListener('paste', async (event) => {
  const text = await getClipboardData(event)
  console.log('Вставлен текст:', text)
})
`})})]})}function x(t={}){const{wrapper:e}={...r(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(o,{...t})}):o(t)}export{x as default};
