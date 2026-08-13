import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/getMouseClientX - Получение координаты X события`}),`
`,(0,c.jsx)(t.h1,{id:`getmouseclientx`,children:(0,c.jsx)(t.code,{children:`getMouseClientX`})}),`
`,(0,c.jsx)(t.p,{children:`Извлекает X-координату (по горизонтали) указателя (мыши или пальца) относительно видимой области окна браузера (viewport) из объекта события.`}),`
`,(0,c.jsxs)(t.p,{children:[`Функция обрабатывает как обычные события мыши (`,(0,c.jsx)(t.code,{children:`MouseEvent`}),`), так и события касания (`,(0,c.jsx)(t.code,{children:`TouchEvent`}),`), отдавая приоритет свойству `,(0,c.jsx)(t.code,{children:`clientX`}),`. Если `,(0,c.jsx)(t.code,{children:`clientX`}),` не найден в самом событии, производится поиск в массивах касаний `,(0,c.jsx)(t.code,{children:`targetTouches`}),` и `,(0,c.jsx)(t.code,{children:`touches`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`event: MouseEvent & TouchEvent`}),` — Объект события (`,(0,c.jsx)(t.code,{children:`mousemove`}),`, `,(0,c.jsx)(t.code,{children:`touchmove`}),`, `,(0,c.jsx)(t.code,{children:`click`}),` и т.д.).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`number`}),` — X координата курсора/касания. В случае её отсутствия возвращается `,(0,c.jsx)(t.code,{children:`0`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getMouseClientX } from '@dxtmisha/functional-basic'

document.addEventListener('click', (event) => {
  const x = getMouseClientX(event)
  console.log(\`Пользователь кликнул на расстоянии \${x}px от левого края окна\`)
})
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};