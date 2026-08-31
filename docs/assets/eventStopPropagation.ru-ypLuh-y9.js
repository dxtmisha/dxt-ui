import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/eventStopPropagation - Остановка всплытия события`}),`
`,(0,c.jsx)(t.h1,{id:`eventstoppropagation`,children:(0,c.jsx)(t.code,{children:`eventStopPropagation`})}),`
`,(0,c.jsx)(t.p,{children:`Останавливает дальнейшее распространение события в DOM-дереве (всплытие / перехват) и отменяет стандартное действие браузера по умолчанию.`}),`
`,(0,c.jsxs)(t.p,{children:[`Функция является удобной обёрткой над вызовами `,(0,c.jsx)(t.code,{children:`event.preventDefault()`}),` и `,(0,c.jsx)(t.code,{children:`event.stopPropagation()`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`event: Event`}),` — Экземпляр события DOM, который необходимо остановить.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`void`})]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { eventStopPropagation } from '@dxtmisha/functional-basic'

const link = document.createElement('a')
link.href = 'https://example.com'
link.onclick = (e) => {
  // Отменит переход по ссылке и остановит всплытие клика к родителям
  eventStopPropagation(e)
  console.log('Клик перехвачен!')
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};