import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`ScrollSticky — это вспомогательный компонент разметки, который предоставляет липкую синхронизированную горизонтальную полосу прокрутки для прокручиваемых контейнеров содержимого.
Обычно он используется для рендеринга кастомного скроллбара, который остается видимым в нижней части области просмотра, даже когда основной контейнер с контентом выше экрана, что улучшает читаемость и навигацию на десктопных платформах.`}),`
`,(0,c.jsx)(t.p,{children:`Компонент поддерживает двустороннюю синхронизацию: прокрутка липкого скроллбара прокручивает целевой контейнер, а прокрутка целевого контейнера обновляет положение липкого скроллбара.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Ключевые особенности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Липкое позиционирование внизу контейнера или области просмотра`}),`
`,(0,c.jsx)(t.li,{children:`Двусторонняя синхронизация прокрутки с целевым прокручиваемым элементом`}),`
`,(0,c.jsx)(t.li,{children:`Поддержка кастомной стилизации элемента прокрутки`}),`
`,(0,c.jsx)(t.li,{children:`Встроенное отслеживание изменений размеров для динамической адаптации к размерам элементов и окон`}),`
`,(0,c.jsx)(t.li,{children:`Скрытие стандартного системного скроллбара для чистоты отображения`}),`
`,(0,c.jsxs)(t.li,{children:[`Управление видимостью скроллбара (свойство `,(0,c.jsx)(t.code,{children:`visible`}),`)`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Большие таблицы данных со множеством колонок, требующие горизонтальной прокрутки`}),`
`,(0,c.jsx)(t.li,{children:`Горизонтальные карточки или сетки внутри высоких контейнеров контента`}),`
`,(0,c.jsx)(t.li,{children:`Адаптивные списки, требующие постоянной видимости элементов управления прокруткой`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<template>
<div class="table-container">
  <ScrollSticky>
    <table class="data-table">
      <!-- Scrollable table content -->
    </table>
  </ScrollSticky>
</div>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};