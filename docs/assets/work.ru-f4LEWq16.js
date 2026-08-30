import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`инструкция-по-работе-с-компонентом`,children:`Инструкция по работе с компонентом`}),`
`,(0,c.jsxs)(t.p,{children:[`Для правильной и корректной работы FLIP-анимации с компонентом `,(0,c.jsx)(t.strong,{children:`MotionFlip`}),` необходимо соблюдать следующие инструкции:`]}),`
`,(0,c.jsx)(t.h3,{id:`1-требования-к-структуре-элементов`,children:`1. Требования к структуре элементов`}),`
`,(0,c.jsxs)(t.p,{children:[`Каждый прямой дочерний элемент компонента `,(0,c.jsx)(t.code,{children:`<MotionFlip>`}),` обязательно должен содержать вложенный элемент (`,(0,c.jsx)(t.code,{children:`>*`}),`).`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Внешний контейнер (обертка):`}),` удерживает место в сетке или макете и сохраняет размеры.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Внутренний элемент:`}),` плавно анимируется по технологии FLIP при изменении порядка, добавлении или удалении.`]}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<MotionFlip ref="flipRef">
<!-- Внешний элемент (контейнер позиционирования) -->
<div v-for="item in items" :key="item" class="item-wrapper">
  <!-- Внутренний элемент (анимируемое содержимое) -->
  <div class="item">
    {{ item }}
  </div>
</div>
</MotionFlip>
`,language:`html`}),`
`,(0,c.jsx)(t.h3,{id:`2-обновление-состояния-и-вызов-анимации`,children:`2. Обновление состояния и вызов анимации`}),`
`,(0,c.jsxs)(t.p,{children:[`По умолчанию компонент работает в ручном режиме. Все изменения массива данных или DOM-структуры должны выполняться внутри колбэка метода `,(0,c.jsx)(t.code,{children:`update()`}),`:`]}),`
`,(0,c.jsx)(i,{code:`
await flipRef.value.update(() => {
// Выполняем изменения в массиве (сортировка, добавление, удаление)
})
`,language:`javascript`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};