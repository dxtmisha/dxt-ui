import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/getClipboardData - Получение данных из буфера обмена`}),`
`,(0,c.jsx)(t.h1,{id:`getclipboarddata`,children:(0,c.jsx)(t.code,{children:`getClipboardData`})}),`
`,(0,c.jsx)(t.p,{children:`Асинхронно извлекает текст из буфера обмена.`}),`
`,(0,c.jsxs)(t.p,{children:[`Эта функция в первую очередь пытается получить текстовые данные из переданного события `,(0,c.jsx)(t.code,{children:`ClipboardEvent`}),` (например, при обработке события `,(0,c.jsx)(t.code,{children:`paste`}),`). Если событие не передано или в нём нет данных, функция производит чтение (возврат ответа в виде текста) напрямую из системного буфера обмена через `,(0,c.jsx)(t.code,{children:`navigator.clipboard.readText()`}),`.`]}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[`Примечание: Использование `,(0,c.jsx)(t.code,{children:`navigator.clipboard.readText()`}),` требует безопасного (HTTPS) контекста и может потребовать от пользователя разрешения на чтение буфера обмена в некоторых браузерах.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`event?: ClipboardEvent`}),` — Событие буфера обмена (опционально), возникающее при действиях cut (вырезать), copy (копировать), paste (вставить).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`Promise<string>`}),` — Возвращает промис со строкой текста из буфера обмена, либо пустую строку в случае неудачи.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getClipboardData } from '@dxtmisha/functional-basic'

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
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};