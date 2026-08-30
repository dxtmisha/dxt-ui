import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Компонент для создания анимированного эффекта волны при клике на элемент.`}),`
`,(0,c.jsx)(t.p,{children:`Ripple создает визуальную обратную связь при взаимодействии пользователя с интерактивными элементами, автоматически отслеживая клики и генерируя анимированную волну, расширяющуюся от точки касания. Эффект улучшает пользовательский опыт, делая интерфейс более отзывчивым и современным.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Автоматическое отслеживание событий клика`}),`
`,(0,c.jsx)(t.li,{children:`Анимация волны от точки касания`}),`
`,(0,c.jsxs)(t.li,{children:[`Управление через свойство `,(0,c.jsx)(t.code,{children:`disabled`})]}),`
`,(0,c.jsx)(t.li,{children:`Автоматическое удаление анимации после завершения`}),`
`,(0,c.jsx)(t.li,{children:`Поддержка любых интерактивных элементов`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Кнопки и ссылки`}),`
`,(0,c.jsx)(t.li,{children:`Карточки и списки`}),`
`,(0,c.jsx)(t.li,{children:`Переключатели и чекбоксы`}),`
`,(0,c.jsx)(t.li,{children:`Элементы меню и навигации`}),`
`,(0,c.jsx)(t.li,{children:`Интерактивные иконки`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<template>
<!-- Кнопка с эффектом волны -->
<button style="position: relative;">
  Нажми меня
  <Ripple />
</button>

<!-- Отключенный эффект -->
<button style="position: relative;">
  Без эффекта
  <Ripple :disabled="true" />
</button>

<!-- Карточка с эффектом -->
<div class="card" style="position: relative; cursor: pointer;">
  <h3>Интерактивная карточка</h3>
  <p>Содержимое карточки</p>
  <Ripple />
</div>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};