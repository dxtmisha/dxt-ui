import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional-basic/Functions/frame - Циклический requestAnimationFrame`}),`
`,(0,c.jsx)(n.h1,{id:`frame`,children:(0,c.jsx)(n.code,{children:`frame`})}),`
`,(0,c.jsxs)(n.p,{children:[`Утилита, которая циклически вызывает `,(0,c.jsx)(n.code,{children:`requestAnimationFrame`}),` для выполнения покадровой анимации в браузере.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Она полезна для создания плавных анимаций, поскольку браузер самостоятельно оптимизирует частоту кадров (обычно 60 FPS) и не рисует анимацию, когда вкладка неактивна. В средах без DOM (например, SSR) `,(0,c.jsx)(n.code,{children:`requestAnimationFrame`}),` не используется, и функция просто запускает коллбэк синхронно.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`callback: () => void`}),` — Функция, которая отрисовывает или обновляет анимацию на каждом кадре.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`next?: () => boolean`}),` — Функция-условие. Если она возвращает `,(0,c.jsx)(n.code,{children:`true`}),`, анимация продолжится в следующем кадре. Если `,(0,c.jsx)(n.code,{children:`false`}),` — цикл прерывается.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`end?: () => void`}),` — Функция, которая будет вызвана один раз, когда `,(0,c.jsx)(n.code,{children:`next`}),` вернёт `,(0,c.jsx)(n.code,{children:`false`}),` (цикл анимации остановлен).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { frame } from '@dxtmisha/functional-basic'

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
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};