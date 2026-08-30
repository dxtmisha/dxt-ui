import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`управление-поиском-и-выделением`,children:`Управление поиском и выделением`}),`
`,(0,c.jsxs)(t.p,{children:[`Свойства `,(0,c.jsx)(t.code,{children:`highlight`}),` и `,(0,c.jsx)(t.code,{children:`highlightLengthStart`}),` работают в связке для управления подсветкой совпадений при поиске по элементам списка. Они устанавливают строку поиска и минимальную длину запроса для активации визуального выделения найденных фрагментов.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Свойства:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`highlight`}),` — строка для поиска и подсветки в элементах списка`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`highlightLengthStart`}),` — минимальная длина строки поиска для начала выделения, по умолчанию `,(0,c.jsx)(t.code,{children:`2`})]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Выделение совпадений активируется автоматически: когда длина `,(0,c.jsx)(t.code,{children:`highlight`}),` меньше `,(0,c.jsx)(t.code,{children:`highlightLengthStart`}),`, поиск работает, но визуальное выделение не применяется. При достижении минимальной длины компонент начинает подсвечивать найденные фрагменты во всей иерархии списка. Поиск работает в реальном времени и учитывает вложенные элементы в группах и меню. Используйте `,(0,c.jsx)(t.code,{children:`highlightLengthStart`}),` для предотвращения чрезмерного выделения при коротких запросах.`]}),`
`,(0,c.jsx)(i,{code:`
<!-- Стандартный поиск с выделением от 2 символов -->
<List :list="items" highlight="текст" />

<!-- Поиск с выделением от 3 символов -->
<List :list="items" highlight="abc" :highlightLengthStart="3" />

<!-- Динамический поиск с v-model -->
<List :list="items" :highlight="searchQuery" :highlightLengthStart="1" />

<!-- Поиск без минимального порога -->
<List :list="products" :highlight="filter" :highlightLengthStart="0" />
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};