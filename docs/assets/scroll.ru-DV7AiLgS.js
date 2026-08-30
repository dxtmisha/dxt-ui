import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`настройка-прокрутки`,children:`Настройка прокрутки`}),`
`,(0,c.jsxs)(t.p,{children:[`Свойства `,(0,c.jsx)(t.code,{children:`behavior`}),`, `,(0,c.jsx)(t.code,{children:`block`}),`, `,(0,c.jsx)(t.code,{children:`inline`}),` и `,(0,c.jsx)(t.code,{children:`shift`}),` управляют поведением прокрутки к элементу при переходе по якорю.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Свойства:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`behavior`}),` — определяет анимацию прокрутки (`,(0,c.jsx)(t.code,{children:`auto`}),`, `,(0,c.jsx)(t.code,{children:`smooth`}),`, `,(0,c.jsx)(t.code,{children:`instant`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`block`}),` — вертикальное выравнивание элемента (`,(0,c.jsx)(t.code,{children:`start`}),`, `,(0,c.jsx)(t.code,{children:`center`}),`, `,(0,c.jsx)(t.code,{children:`end`}),`, `,(0,c.jsx)(t.code,{children:`nearest`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`inline`}),` — горизонтальное выравнивание элемента (`,(0,c.jsx)(t.code,{children:`start`}),`, `,(0,c.jsx)(t.code,{children:`center`}),`, `,(0,c.jsx)(t.code,{children:`end`}),`, `,(0,c.jsx)(t.code,{children:`nearest`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`shift`}),` — смещение прокрутки от верхнего края (в пикселях)`]}),`
`]}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Примечание:`}),` Если задано свойство `,(0,c.jsx)(t.code,{children:`shift`}),`, компонент использует `,(0,c.jsx)(t.code,{children:`window.scrollTo`}),` вместо `,(0,c.jsx)(t.code,{children:`element.scrollIntoView`}),`. В этом случае свойства `,(0,c.jsx)(t.code,{children:`block`}),` и `,(0,c.jsx)(t.code,{children:`inline`}),` игнорируются, и прокрутка всегда выполняется к верхней границе элемента с учетом указанного смещения.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:`Эти свойства позволяют настроить, как именно страница будет прокручиваться к целевому элементу. Например, можно сделать плавную прокрутку или изменить позиционирование элемента на экране после прокрутки.`}),`
`,(0,c.jsx)(i,{code:`
<template>
<Anchor
  href="#target"
  behavior="smooth"
  block="center"
  inline="nearest"
>
  Перейти к элементу
</Anchor>

<Anchor
  href="#target"
  :shift="100"
>
  Перейти со смещением
</Anchor>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};