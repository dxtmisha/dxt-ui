import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-Dqnce8mp.js";import{M as c}from"./blocks-6V-3VoLN.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-C6i5AnHO.js";function s(t){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"@dxtmisha/functional/ru/Event Utils"}),`
`,n.jsx(e.h1,{id:"утилиты-для-работы-с-событиями",children:"Утилиты для работы с событиями"}),`
`,n.jsx(e.p,{children:"Набор функций для обработки и управления DOM событиями."}),`
`,n.jsx(e.h2,{id:"eventstoppropagation",children:n.jsx(e.code,{children:"eventStopPropagation"})}),`
`,n.jsx(e.p,{children:"Останавливает распространение события и предотвращает выполнение действия по умолчанию."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"event: Event"})," — объект события для остановки"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { eventStopPropagation } from '@dxtmisha/functional'

button.addEventListener('click', (event) => {
  eventStopPropagation(event) // останавливает всплытие и действие по умолчанию
})

form.addEventListener('submit', (event) => {
  if (!isValid) eventStopPropagation(event) // предотвращает отправку
})
`})}),`
`,n.jsx(e.h2,{id:"getkey",children:n.jsx(e.code,{children:"getKey"})}),`
`,n.jsx(e.p,{children:"Возвращает нажатую клавишу из события клавиатуры."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"event: KeyboardEvent"})," — объект события клавиатуры"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { getKey } from '@dxtmisha/functional'

document.addEventListener('keydown', (event) => {
  const key = getKey(event) // 'Enter', 'Escape', 'a', etc.
})
`})}),`
`,n.jsx(e.h2,{id:"getmouseclient",children:n.jsx(e.code,{children:"getMouseClient"})}),`
`,n.jsx(e.p,{children:"Возвращает координаты позиции курсора мыши или места касания."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"event: MouseEvent & TouchEvent"})," — объект события мыши или касания"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { getMouseClient } from '@dxtmisha/functional'

element.addEventListener('click', (event) => {
  const { x, y } = getMouseClient(event) // { x: 100, y: 200 }
})
`})}),`
`,n.jsx(e.h2,{id:"getmouseclientx",children:n.jsx(e.code,{children:"getMouseClientX"})}),`
`,n.jsx(e.p,{children:"Возвращает X-координату позиции курсора мыши или места касания."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"event: MouseEvent & TouchEvent"})," — объект события мыши или касания"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { getMouseClientX } from '@dxtmisha/functional'

const x = getMouseClientX(event) // 100
`})}),`
`,n.jsx(e.h2,{id:"getmouseclienty",children:n.jsx(e.code,{children:"getMouseClientY"})}),`
`,n.jsx(e.p,{children:"Возвращает Y-координату позиции курсора мыши или места касания."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"event: MouseEvent & TouchEvent"})," — объект события мыши или касания"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { getMouseClientY } from '@dxtmisha/functional'

const y = getMouseClientY(event) // 200
`})})]})}function a(t={}){const{wrapper:e}={...i(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(s,{...t})}):s(t)}export{a as default};
