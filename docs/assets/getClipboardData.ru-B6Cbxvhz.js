import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-DymlrBn2.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional-basic/Functions/getClipboardData - Получение данных из буфера обмена`}),`
`,(0,c.jsx)(n.h1,{id:`getclipboarddata`,children:(0,c.jsx)(n.code,{children:`getClipboardData`})}),`
`,(0,c.jsx)(n.p,{children:`Асинхронно извлекает текст из буфера обмена.`}),`
`,(0,c.jsxs)(n.p,{children:[`Эта функция в первую очередь пытается получить текстовые данные из переданного события `,(0,c.jsx)(n.code,{children:`ClipboardEvent`}),` (например, при обработке события `,(0,c.jsx)(n.code,{children:`paste`}),`). Если событие не передано или в нём нет данных, функция производит чтение (возврат ответа в виде текста) напрямую из системного буфера обмена через `,(0,c.jsx)(n.code,{children:`navigator.clipboard.readText()`}),`.`]}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsxs)(n.p,{children:[`Примечание: Использование `,(0,c.jsx)(n.code,{children:`navigator.clipboard.readText()`}),` требует безопасного (HTTPS) контекста и может потребовать от пользователя разрешения на чтение буфера обмена в некоторых браузерах.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`event?: ClipboardEvent`}),` — Событие буфера обмена (опционально), возникающее при действиях cut (вырезать), copy (копировать), paste (вставить).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`Promise<string>`}),` — Возвращает промис со строкой текста из буфера обмена, либо пустую строку в случае неудачи.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getClipboardData } from '@dxtmisha/functional-basic'

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
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};