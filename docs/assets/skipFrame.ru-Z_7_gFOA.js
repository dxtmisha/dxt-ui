import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/skipFrame - Пропуск кадров анимации`}),`
`,(0,c.jsx)(t.h1,{id:`skipframe`,children:(0,c.jsx)(t.code,{children:`skipFrame`})}),`
`,(0,c.jsxs)(t.p,{children:[`Асинхронная утилита, которая пропускает указанное количество кадров анимации (`,(0,c.jsx)(t.code,{children:`requestAnimationFrame`}),`) или выполняет функцию обратного вызова внутри них.`]}),`
`,(0,c.jsx)(t.p,{children:`Она полезна для ожидания обновления DOM, завершения перерисовки браузера перед выполнением следующей операции (например, перед чтением размеров элементов или обработкой рендеринга), а также для выполнения кода на определенном кадре анимации.`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`SSR поведение:`}),`
В средах без DOM (например, SSR) `,(0,c.jsx)(t.code,{children:`requestAnimationFrame`}),` не используется. Функция разрешается немедленно без вызова `,(0,c.jsx)(t.code,{children:`requestAnimationFrame`}),`, предотвращая блокировку потока на сервере.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`callback?: () => T | Promise<T>`}),` — Опциональная функция обратного вызова, которая будет выполнена на целевом кадре анимации.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`count?: number = 1`}),` — Количество кадров анимации для пропуска (по умолчанию `,(0,c.jsx)(t.code,{children:`1`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`Promise<T | void>`}),` — Промис, разрешающийся на кадре анимации с результатом выполнения коллбэка (или `,(0,c.jsx)(t.code,{children:`undefined`}),`, если коллбэк не передан).`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { skipFrame } from '@dxtmisha/functional-basic'

// Ожидание следующего кадра (1 кадр по умолчанию)
await skipFrame()

// Пропуск нескольких кадров (например, 2 кадра)
await skipFrame(undefined, 2)

// Выполнение коллбэка после пропуска кадров
const result = await skipFrame(() => {
  return document.getElementById('box')?.getBoundingClientRect()
}, 2)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};