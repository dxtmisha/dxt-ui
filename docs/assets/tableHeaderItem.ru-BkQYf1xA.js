import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(t.p,{children:[`Компонент ячейки заголовка таблицы, представляющий тег `,(0,c.jsx)(t.code,{children:`<th>`}),`. Расширяет все возможности `,(0,c.jsx)(t.code,{children:`TableItem`}),` и включает встроенную поддержку отображения всплывающих подсказок для предоставления дополнительной информации или руководства прямо из ячейки заголовка.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Ключевые особенности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Расширяет свойства и функции `,(0,c.jsx)(t.code,{children:`TableItem`}),` (выравнивание, настройка тегов, липкость)`]}),`
`,(0,c.jsxs)(t.li,{children:[`Поддержка стандартных HTML-тегов (свойство `,(0,c.jsx)(t.code,{children:`tag`}),`, по умолчанию `,(0,c.jsx)(t.code,{children:`th`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[`Встроенная поддержка всплывающих подсказок, запускаемая иконкой (`,(0,c.jsx)(t.code,{children:`iconTooltip`}),` или `,(0,c.jsx)(t.code,{children:`help-circle`}),` по умолчанию)`]}),`
`,(0,c.jsxs)(t.li,{children:[`Слот для размещения сложного HTML или пользовательского содержимого внутри всплывающей подсказки (слот `,(0,c.jsx)(t.code,{children:`tooltip`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[`Настройка подсказки через свойства `,(0,c.jsx)(t.code,{children:`tooltipLabel`}),` и `,(0,c.jsx)(t.code,{children:`tooltipDescription`})]}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
<\/script>

<template>
<table>
  <thead>
    <tr>
      <!-- Простая ячейка заголовка -->
      <TableHeaderItem value="Заголовок 1" />

      <!-- Заголовок со встроенной подсказкой -->
      <TableHeaderItem
        label="Заголовок с подсказкой"
        tooltipLabel="Пояснение"
        tooltipDescription="Это объясняет назначение данной колонки."
      />
    </tr>
  </thead>
</table>
</template>
`,language:`html`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsx)(t.p,{children:`TableHeaderItem идеально подходит для заголовков, требующих пояснительного текста, помогая пользователям понять столбцы данных без загромождения основного вида таблицы.`}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};