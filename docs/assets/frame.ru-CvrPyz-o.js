import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/frame - Циклический requestAnimationFrame`}),`
`,(0,c.jsx)(t.h1,{id:`frame`,children:(0,c.jsx)(t.code,{children:`frame`})}),`
`,(0,c.jsxs)(t.p,{children:[`Утилита, которая циклически вызывает `,(0,c.jsx)(t.code,{children:`requestAnimationFrame`}),` для выполнения покадровой анимации в браузере.`]}),`
`,(0,c.jsx)(t.p,{children:`Она полезна для создания плавных анимаций, поскольку браузер самостоятельно оптимизирует частоту кадров (обычно 60 FPS) и не рисует анимацию, когда вкладка неактивна.`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`SSR поведение:`}),`
В средах без DOM (например, SSR) `,(0,c.jsx)(t.code,{children:`requestAnimationFrame`}),` не используется. Функция выполняет `,(0,c.jsx)(t.code,{children:`callback`}),` один раз синхронно и сразу вызывает `,(0,c.jsx)(t.code,{children:`end`}),` (цикл через `,(0,c.jsx)(t.code,{children:`next`}),` не запускается), чтобы предотвратить переполнение стека и блокировку потока на сервере.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`callback: () => void`}),` — Функция, которая отрисовывает или обновляет анимацию на каждом кадре.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`next?: () => boolean`}),` — Функция-условие. Если она возвращает `,(0,c.jsx)(t.code,{children:`true`}),` (только в браузере), анимация продолжится в следующем кадре.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`end?: () => void`}),` — Функция, которая будет вызвана один раз, когда цикл анимации завершен.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`void`})]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { frame } from '@dxtmisha/functional-basic'

const element = document.getElementById('box')
let position = 0

// Анимация: сдвигаем блок на 1px каждый кадр, пока позиция < 100
frame(
  // callback (обновление кадра)
  () => {
    position += 1
    if (element) {
      element.style.transform = \`translateX(\${position}px)\`
    }
  },
  // next (продолжать ли)
  () => position < 100,
  // end (когда закончено)
  () => console.log('Анимация завершена!')
)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};