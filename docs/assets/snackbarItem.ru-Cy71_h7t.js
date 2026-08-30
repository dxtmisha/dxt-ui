import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`описание`,children:`Описание`}),`
`,(0,c.jsxs)(t.p,{children:[`Компонент представляет собой отдельную карточку уведомления внутри `,(0,c.jsx)(t.code,{children:`Snackbar`}),`. Он отвечает за визуальное представление сообщения, включая заголовок, текст, иконки и действия.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Отображение меток (label), описаний (description) и основного текста`}),`
`,(0,c.jsx)(t.li,{children:`Поддержка иконок (начальной и конечной)`}),`
`,(0,c.jsx)(t.li,{children:`Кнопка закрытия (крестик) по умолчанию`}),`
`,(0,c.jsx)(t.li,{children:`Поддержка дополнительного действия (кнопка)`}),`
`,(0,c.jsx)(t.li,{children:`Гибкая настройка через слоты для сложного контента`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Отображение короткого текстового сообщения`}),`
`,(0,c.jsx)(t.li,{children:`Уведомление с кнопкой "Отмена" или "Повторить"`}),`
`,(0,c.jsx)(t.li,{children:`Карточка с иконкой статуса (Success, Error, Info)`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<template>
<!-- Базовое использование -->
<SnackbarItem
  label="Сообщение успешно отправлено"
  icon="check"
/>

<!-- С кнопкой действия -->
<SnackbarItem
  description="Ваша подписка истекает через 3 дня."
  button="Продлить"
  @click="onRenew"
/>

<!-- С пользовательским контентом -->
<SnackbarItem>
  <div class="custom-content">
    <strong>Внимание!</strong>
    <p>Произошла непредвиденная ошибка на сервере.</p>
  </div>
</SnackbarItem>
</template>
`,language:`html`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[`SnackbarItem обычно не используется самостоятельно, а рендерится автоматически компонентом `,(0,c.jsx)(t.code,{children:`Snackbar`}),` на основе переданного списка данных.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};