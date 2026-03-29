import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional-basic/Functions/eventStopPropagation - Остановка всплытия события`}),`
`,(0,c.jsx)(n.h1,{id:`eventstoppropagation`,children:(0,c.jsx)(n.code,{children:`eventStopPropagation`})}),`
`,(0,c.jsx)(n.p,{children:`Останавливает дальнейшее распространение события в DOM-дереве (всплытие / перехват) и отменяет стандартное действие браузера по умолчанию.`}),`
`,(0,c.jsxs)(n.p,{children:[`Функция является удобной обёрткой над вызовами `,(0,c.jsx)(n.code,{children:`event.preventDefault()`}),` и `,(0,c.jsx)(n.code,{children:`event.stopPropagation()`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`event: Event`}),` — Экземпляр события DOM, который необходимо остановить.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { eventStopPropagation } from '@dxtmisha/functional-basic'

const link = document.createElement('a')
link.href = 'https://example.com'
link.onclick = (e) => {
  // Отменит переход по ссылке и остановит всплытие клика к родителям
  eventStopPropagation(e)
  console.log('Клик перехвачен!')
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};