import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-BaLriJNq.js";import{M as r}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function i(s){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"@dxtmisha/ru/functional-basic/Functions/frame - Циклический requestAnimationFrame"}),`
`,n.jsx(e.h1,{id:"frame",children:n.jsx(e.code,{children:"frame"})}),`
`,n.jsxs(e.p,{children:["Утилита, которая циклически вызывает ",n.jsx(e.code,{children:"requestAnimationFrame"})," для выполнения покадровой анимации в браузере."]}),`
`,n.jsxs(e.p,{children:["Она полезна для создания плавных анимаций, поскольку браузер самостоятельно оптимизирует частоту кадров (обычно 60 FPS) и не рисует анимацию, когда вкладка неактивна. В средах без DOM (например, SSR) ",n.jsx(e.code,{children:"requestAnimationFrame"})," не используется, и функция просто запускает коллбэк синхронно."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"callback: () => void"})," — Функция, которая отрисовывает или обновляет анимацию на каждом кадре."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"next?: () => boolean"})," — Функция-условие. Если она возвращает ",n.jsx(e.code,{children:"true"}),", анимация продолжится в следующем кадре. Если ",n.jsx(e.code,{children:"false"})," — цикл прерывается."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"end?: () => void"})," — Функция, которая будет вызвана один раз, когда ",n.jsx(e.code,{children:"next"})," вернёт ",n.jsx(e.code,{children:"false"})," (цикл анимации остановлен)."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"}),`
`,n.jsx(e.code,{children:"void"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { frame } from '@dxtmisha/functional-basic'

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
`})})]})}function m(s={}){const{wrapper:e}={...o(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}export{m as default};
