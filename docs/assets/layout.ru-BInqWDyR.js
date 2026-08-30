import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{d as i,f as a,s as o}from"./blocks-C5PYTnT8.js";function s(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...n(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{title:`@dxtmisha/ru/wiki/styles/# Макетные утилиты`}),`
`,(0,l.jsx)(t.h1,{id:`макетные-утилиты`,children:`Макетные утилиты`}),`
`,(0,l.jsx)(t.p,{children:`Набор CSS-классов для организации пространственной структуры демонстрационных зон в Storybook и Wiki. Эти классы позволяют быстро создавать сетки, флекс-контейнеры и ограничивать ширину контента.`}),`
`,(0,l.jsxs)(t.p,{children:[`Все классы имеют префикс `,(0,l.jsx)(t.code,{children:`.wiki-storybook-`}),`.`]}),`
`,(0,l.jsx)(t.h2,{id:`контейнер`,children:`Контейнер`}),`
`,(0,l.jsxs)(t.p,{children:[`Класс `,(0,l.jsx)(t.code,{children:`.wiki-storybook-container`}),` инициализирует контейнер типа `,(0,l.jsx)(t.code,{children:`inline-size`}),`. Это позволяет вложенным элементам использовать `,(0,l.jsx)(t.code,{children:`@container`}),` запросы.`]}),`
`,(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:`language-html`,children:`<div class="wiki-storybook-container">
  <!-- Контент, реагирующий на ширину этого контейнера -->
</div>
`})}),`
`,(0,l.jsx)(t.h2,{id:`сетка`,children:`Сетка`}),`
`,(0,l.jsxs)(t.p,{children:[`Класс `,(0,l.jsx)(t.code,{children:`.wiki-storybook-group`}),` создает CSS Grid контейнер с 12 колонками и стандартным отступом `,(0,l.jsx)(t.code,{children:`8px`}),`.`]}),`
`,(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:`language-html`,children:`<div class="wiki-storybook-group">
  <div class="wiki-storybook-item wiki-storybook-item--squared--xs">Span XS</div>
  <div class="wiki-storybook-item wiki-storybook-item--squared--xs">Span XS</div>
  <div class="wiki-storybook-item wiki-storybook-item--squared--sm">Span SM</div>
</div>
`})}),`
`,(0,l.jsx)(i,{children:(0,l.jsxs)(`div`,{class:`wiki-storybook-group`,children:[(0,l.jsx)(`div`,{class:`wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding wiki-storybook-item--squared--xs`,children:`Span XS`}),(0,l.jsx)(`div`,{class:`wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding wiki-storybook-item--squared--xs`,children:`Span XS`}),(0,l.jsx)(`div`,{class:`wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding wiki-storybook-item--squared--sm`,children:`Span SM`})]})}),`
`,(0,l.jsx)(t.h2,{id:`флекс-слои`,children:`Флекс-слои`}),`
`,(0,l.jsx)(t.p,{children:`Утилиты для быстрого выравнивания элементов по горизонтали или вертикали.`}),`
`,(0,l.jsx)(t.h3,{id:`стандартный-flex`,children:`Стандартный Flex`}),`
`,(0,l.jsxs)(t.p,{children:[`Класс `,(0,l.jsx)(t.code,{children:`.wiki-storybook-flex`}),` — горизонтальный стек с переносом и отступом `,(0,l.jsx)(t.code,{children:`8px`}),`.`]}),`
`,(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:`language-html`,children:`<div class="wiki-storybook-flex">
    <div class="wiki-storybook-item">1</div>
    <div class="wiki-storybook-item">2</div>
    <div class="wiki-storybook-item">3</div>
</div>
`})}),`
`,(0,l.jsx)(i,{children:(0,l.jsxs)(`div`,{class:`wiki-storybook-flex`,children:[(0,l.jsx)(`div`,{class:`wiki-storybook-item wiki-storybook-item--widthAuto wiki-storybook-item--auto wiki-storybook-item--padding`,children:`1`}),(0,l.jsx)(`div`,{class:`wiki-storybook-item wiki-storybook-item--widthAuto wiki-storybook-item--auto wiki-storybook-item--padding`,children:`2`}),(0,l.jsx)(`div`,{class:`wiki-storybook-item wiki-storybook-item--widthAuto wiki-storybook-item--auto wiki-storybook-item--padding`,children:`3`})]})}),`
`,(0,l.jsx)(t.h3,{id:`центрирование-flex-center`,children:`Центрирование (Flex Center)`}),`
`,(0,l.jsxs)(t.p,{children:[`Класс `,(0,l.jsx)(t.code,{children:`.wiki-storybook-flex-center`}),` выравнивает контент строго по центру.`]}),`
`,(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:`language-html`,children:`<div class="wiki-storybook-flex-center">
    <div class="wiki-storybook-item">1</div>
    <div class="wiki-storybook-item">2</div>
    <div class="wiki-storybook-item">3</div>
</div>
`})}),`
`,(0,l.jsx)(i,{children:(0,l.jsxs)(`div`,{class:`wiki-storybook-flex-center`,children:[(0,l.jsx)(`div`,{class:`wiki-storybook-item wiki-storybook-item--widthAuto wiki-storybook-item--auto wiki-storybook-item--padding`,children:`1`}),(0,l.jsx)(`div`,{class:`wiki-storybook-item wiki-storybook-item--widthAuto wiki-storybook-item--auto wiki-storybook-item--padding`,children:`2`}),(0,l.jsx)(`div`,{class:`wiki-storybook-item wiki-storybook-item--widthAuto wiki-storybook-item--auto wiki-storybook-item--padding`,children:`3`})]})}),`
`,(0,l.jsx)(t.h3,{id:`выравнивание-по-центру-flex-align-center`,children:`Выравнивание по центру (Flex Align Center)`}),`
`,(0,l.jsxs)(t.p,{children:[`Класс `,(0,l.jsx)(t.code,{children:`.wiki-storybook-flex-align-center`}),` выравнивает элементы по горизонтали с центрированием по вертикали.`]}),`
`,(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:`language-html`,children:`<div class="wiki-storybook-flex-align-center">
    <div class="wiki-storybook-item">1</div>
    <div class="wiki-storybook-item">2</div>
    <div class="wiki-storybook-item">3</div>
</div>
`})}),`
`,(0,l.jsx)(i,{children:(0,l.jsxs)(`div`,{class:`wiki-storybook-flex-align-center`,children:[(0,l.jsx)(`div`,{class:`wiki-storybook-item wiki-storybook-item--widthAuto wiki-storybook-item--auto wiki-storybook-item--padding`,children:`1`}),(0,l.jsx)(`div`,{class:`wiki-storybook-item wiki-storybook-item--widthAuto wiki-storybook-item--auto wiki-storybook-item--padding`,children:`2`}),(0,l.jsx)(`div`,{class:`wiki-storybook-item wiki-storybook-item--widthAuto wiki-storybook-item--auto wiki-storybook-item--padding`,children:`3`})]})}),`
`,(0,l.jsx)(t.h3,{id:`вертикальный-стек-flex-column`,children:`Вертикальный стек (Flex Column)`}),`
`,(0,l.jsxs)(t.p,{children:[`Класс `,(0,l.jsx)(t.code,{children:`.wiki-storybook-flex-column`}),` располагает элементы вертикально с отступом `,(0,l.jsx)(t.code,{children:`16px`}),`.`]}),`
`,(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:`language-html`,children:`<div class="wiki-storybook-flex-column">
    <div class="wiki-storybook-item">1</div>
    <div class="wiki-storybook-item">2</div>
    <div class="wiki-storybook-item">3</div>
</div>
`})}),`
`,(0,l.jsx)(i,{children:(0,l.jsxs)(`div`,{class:`wiki-storybook-flex-column`,children:[(0,l.jsx)(`div`,{class:`wiki-storybook-item wiki-storybook-item--widthAuto wiki-storybook-item--auto wiki-storybook-item--padding`,children:`1`}),(0,l.jsx)(`div`,{class:`wiki-storybook-item wiki-storybook-item--widthAuto wiki-storybook-item--auto wiki-storybook-item--padding`,children:`2`}),(0,l.jsx)(`div`,{class:`wiki-storybook-item wiki-storybook-item--widthAuto wiki-storybook-item--auto wiki-storybook-item--padding`,children:`3`})]})})]})}function c(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;function u(){return(u=e((()=>{l=r(),t(),a()})))()}u();export{c as default};