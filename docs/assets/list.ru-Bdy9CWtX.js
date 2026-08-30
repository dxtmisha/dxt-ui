import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`управление-группами-кнопок-действий`,children:`Управление группами кнопок действий`}),`
`,(0,c.jsxs)(t.p,{children:[`Свойства `,(0,c.jsx)(t.code,{children:`list`}),` и `,(0,c.jsx)(t.code,{children:`listSecondary`}),` работают в связке для организации кнопок в контейнере Actions. Они управляют рендерингом основной и вторичной групп кнопок с автоматическим применением атрибутов и визуальным разделением.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Свойства:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`list`}),` — массив конфигураций для основных кнопок действий (Отмена, Сохранить, Применить)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`listSecondary`}),` — массив конфигураций для вторичных кнопок (Удалить, Сбросить, Экспорт)`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Каждый элемент массива представляет собой объект с конфигурацией кнопки, поддерживающий все свойства компонента Button (label, icon, disabled, primary, loading и другие). Компонент автоматически применяет базовые атрибуты из `,(0,c.jsx)(t.code,{children:`buttonAttrs`}),` к основным кнопкам и из `,(0,c.jsx)(t.code,{children:`buttonSecondaryAttrs`}),` к вторичным. Вторичные кнопки располагаются отдельно с автоматическим спейсером и скрываются в режимах `,(0,c.jsx)(t.code,{children:`align="center"`}),` и `,(0,c.jsx)(t.code,{children:`align="block"`}),`. Используйте `,(0,c.jsx)(t.code,{children:`list`}),` для основных действий и `,(0,c.jsx)(t.code,{children:`listSecondary`}),` для деструктивных или менее важных операций.`]}),`
`,(0,c.jsx)(i,{code:`
<!-- Основные кнопки -->
<Actions
:list="[
  { label: 'Отмена', onClick: () => close() },
  { label: 'Сохранить', primary: true, onClick: () => save() }
]"
/>

<!-- Основные и вторичные кнопки -->
<Actions
:list="[
  { label: 'Отмена' },
  { label: 'Сохранить', primary: true }
]"
:list-secondary="[
  { label: 'Удалить', text: true, icon: 'delete', palette: 'error' }
]"
/>

<!-- Кнопки с динамическим состоянием -->
<Actions
:list="[
  { label: 'Отмена', disabled: isProcessing },
  { label: 'Сохранить', primary: true, loading: isLoading }
]"
:button-attrs="{ size: 'medium' }"
/>

<!-- Вторичные кнопки с настройками -->
<Actions
:list="[{ label: 'Закрыть' }]"
:list-secondary="[
  { label: 'Экспорт', icon: 'download' },
  { label: 'Справка', icon: 'help' }
]"
:button-secondary-attrs="{ size: 'small', text: true }"
/>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};