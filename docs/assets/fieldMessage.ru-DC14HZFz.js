import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Компонент для отображения вспомогательных и валидационных сообщений под полями формы.`}),`
`,(0,c.jsx)(t.p,{children:`FieldMessage централизует управление текстовыми подсказками и сообщениями об ошибках в формах. Компонент автоматически определяет приоритет отображения (ошибки валидации выше подсказок), поддерживает принудительное показ через forceShow и интегрируется с полями ввода и счетчиками символов. Предоставляет гибкую систему слотов для кастомизации и работает как со статическими, так и с реактивными значениями.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Два типа сообщений: вспомогательное (helper) и валидационное (validation)`}),`
`,(0,c.jsx)(t.li,{children:`Приоритет сообщений — валидационное сообщение перекрывает вспомогательное`}),`
`,(0,c.jsx)(t.li,{children:`Умная видимость — автоматическая логика отображения на основе переданных значений`}),`
`,(0,c.jsx)(t.li,{children:`Принудительное отображение через свойство forceShow`}),`
`,(0,c.jsx)(t.li,{children:`Гибкие источники — поддержка статических и реактивных значений`}),`
`,(0,c.jsx)(t.li,{children:`Интеграция с FieldCounter для комплексных форм`}),`
`,(0,c.jsx)(t.li,{children:`Настраиваемый рендеринг через систему дизайна и слоты`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Вспомогательные подсказки под полями ввода`}),`
`,(0,c.jsx)(t.li,{children:`Отображение ошибок валидации в формах`}),`
`,(0,c.jsx)(t.li,{children:`Динамические сообщения с реактивным контентом`}),`
`,(0,c.jsx)(t.li,{children:`Комплексные формы с счетчиками и валидацией`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<template>
<!-- Подсказка -->
<Component helper="Введите ваше имя" />

<!-- Ошибка валидации -->
<Component validation="Минимум 3 символа" />

<!-- Слоты -->
<Component>
  <template #helper>💡 Подсказка</template>
  <template #validation>⚠️ Ошибка</template>
</Component>
</template>
`,language:`html`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsx)(t.p,{children:`Компонент фокусируется на текстовых сообщениях и должен использоваться совместно с элементами управления вводом.`}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};