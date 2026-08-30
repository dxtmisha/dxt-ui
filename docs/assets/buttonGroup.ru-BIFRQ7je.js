import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Компонент для группировки нескольких кнопок в единый блок.`}),`
`,(0,c.jsx)(t.p,{children:`ButtonGroup позволяет организовать кнопки в логические группы с общей стилизацией и выравниванием. Поддерживает горизонтальную и вертикальную ориентацию, автоматический перенос элементов и передачу общих атрибутов всем вложенным кнопкам.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Горизонтальная и вертикальная ориентация`}),`
`,(0,c.jsx)(t.li,{children:`Автоматический перенос кнопок (wrap) при нехватке места`}),`
`,(0,c.jsxs)(t.li,{children:[`Передача общих атрибутов (размер, стиль, цвет) всем кнопкам через `,(0,c.jsx)(t.code,{children:`buttonAttrs`})]}),`
`,(0,c.jsxs)(t.li,{children:[`Гибкое управление списком кнопок через массив `,(0,c.jsx)(t.code,{children:`list`}),` или слот `,(0,c.jsx)(t.code,{children:`default`})]}),`
`,(0,c.jsx)(t.li,{children:`Согласованные отступы между кнопками в группе`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Панели инструментов (toolbars)`}),`
`,(0,c.jsx)(t.li,{children:`Группы переключателей или действий в формах`}),`
`,(0,c.jsx)(t.li,{children:`Навигационные блоки`}),`
`,(0,c.jsx)(t.li,{children:`Блоки управления в карточках или списках`}),`
`,(0,c.jsx)(t.li,{children:`Выбор опций (фильтры, сортировка)`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<template>
<!-- Базовое использование через список -->
<ButtonGroup 
  :list="[
    { label: 'Назад', icon: 'arrow_back' },
    { label: 'Главная', icon: 'home' },
    { label: 'Вперед', iconTrailing: 'arrow_forward' }
  ]" 
/>

<!-- С общими атрибутами и вертикальной ориентацией -->
<ButtonGroup 
  orientation="vertical"
  :buttonAttrs="{ primary: true, outline: true }"
  :list="[
    { label: 'Сохранить', icon: 'save' },
    { label: 'Удалить', icon: 'delete' }
  ]"
/>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};