import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Компонент для отображения счетчика символов и лимитов ввода в полях форм с поддержкой настраиваемых шаблонов форматирования.`}),`
`,(0,c.jsx)(t.p,{children:`FieldCounter обеспечивает визуальную обратную связь о количестве введенных символов, автоматически форматирует отображение в зависимости от наличия максимального лимита и поддерживает гибкую настройку через шаблоны с плейсхолдерами. Компонент интегрируется с текстовыми полями и областями ввода, предоставляя пользователю информацию об ограничениях и оставшемся месте для ввода.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Отображение текущего количества введенных символов`}),`
`,(0,c.jsx)(t.li,{children:`Автоматический показ максимального лимита при его наличии`}),`
`,(0,c.jsx)(t.li,{children:`Гибкие шаблоны форматирования с плейсхолдерами [c] и [m]`}),`
`,(0,c.jsx)(t.li,{children:`Автоматическое определение формата (50 / 100 или просто 50)`}),`
`,(0,c.jsx)(t.li,{children:`Поддержка строковых и числовых значений counter и maxlength`}),`
`,(0,c.jsx)(t.li,{children:`Умное управление видимостью через свойство counterShow`}),`
`,(0,c.jsx)(t.li,{children:`Компактное отображение для экономии пространства`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Текстовые поля с ограничением по количеству символов`}),`
`,(0,c.jsx)(t.li,{children:`Многострочные текстовые области (textarea) для описаний`}),`
`,(0,c.jsx)(t.li,{children:`Поля ввода комментариев с лимитами`}),`
`,(0,c.jsx)(t.li,{children:`Формы с требованиями к минимальной/максимальной длине`}),`
`,(0,c.jsx)(t.li,{children:`SMS-редакторы с подсчетом символов`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<template>
<!-- Базовый счетчик -->
<Component :counter="10" />

<!-- С лимитом -->
<Component :counter="10" :maxlength="100" />

<!-- Кастомный шаблон -->
<Component :counter="5" :maxlength="50" template="[c] / [m]" />
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};