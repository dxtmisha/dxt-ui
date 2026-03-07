import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-BaLriJNq.js";import{M as i}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function o(t){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"@dxtmisha/ru/functional-basic/Functions/eventStopPropagation - Остановка всплытия события"}),`
`,n.jsx(e.h1,{id:"eventstoppropagation",children:n.jsx(e.code,{children:"eventStopPropagation"})}),`
`,n.jsx(e.p,{children:"Останавливает дальнейшее распространение события в DOM-дереве (всплытие / перехват) и отменяет стандартное действие браузера по умолчанию."}),`
`,n.jsxs(e.p,{children:["Функция является удобной обёрткой над вызовами ",n.jsx(e.code,{children:"event.preventDefault()"})," и ",n.jsx(e.code,{children:"event.stopPropagation()"}),"."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"event: Event"})," — Экземпляр события DOM, который необходимо остановить."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"}),`
`,n.jsx(e.code,{children:"void"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { eventStopPropagation } from '@dxtmisha/functional-basic'

const link = document.createElement('a')
link.href = 'https://example.com'
link.onclick = (e) => {
  // Отменит переход по ссылке и остановит всплытие клика к родителям
  eventStopPropagation(e)
  console.log('Клик перехвачен!')
}
`})})]})}function x(t={}){const{wrapper:e}={...r(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(o,{...t})}):o(t)}export{x as default};
