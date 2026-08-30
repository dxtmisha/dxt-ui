import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`маскирование-ввода`,children:`Маскирование ввода`}),`
`,(0,c.jsxs)(t.p,{children:[`Свойства `,(0,c.jsx)(t.code,{children:`mask`}),`, `,(0,c.jsx)(t.code,{children:`maskVisible`}),`, `,(0,c.jsx)(t.code,{children:`maskNone`}),` и `,(0,c.jsx)(t.code,{children:`maskAttrs`}),` предназначены для управления форматированным вводом с автоматической подстановкой разделителей и контролем символов в заданных позициях.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Свойства:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`mask`}),` — шаблон маски в виде строки (например, `,(0,c.jsx)(t.code,{children:`+1 (***) ***-****`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`maskVisible`}),` — управляет отображением символов-заполнителей (по умолчанию `,(0,c.jsx)(t.code,{children:`true`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`maskNone`}),` — полностью отключает маску`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`maskAttrs`}),` — объект с расширенными настройками маски`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Свойства работают совместно: `,(0,c.jsx)(t.code,{children:`mask`}),` определяет структуру форматирования, где специальный символ (по умолчанию `,(0,c.jsx)(t.code,{children:`*`}),`) определяет позиции для ввода цифр, а остальные символы (пробелы, скобки, дефисы) автоматически подставляются как фиксированные разделители. `,(0,c.jsx)(t.code,{children:`maskVisible`}),` управляет отображением незаполненных позиций, где при значении `,(0,c.jsx)(t.code,{children:`true`}),` они отображаются символами-заполнителями `,(0,c.jsx)(t.code,{children:`_`}),`, а при `,(0,c.jsx)(t.code,{children:`false`}),` показываются только введённые символы с разделителями. `,(0,c.jsx)(t.code,{children:`maskNone`}),` позволяет полностью отключить логику маскирования, превращая поле в обычный текстовый инпут. `,(0,c.jsx)(t.code,{children:`maskAttrs`}),` обеспечивает доступ к расширенным настройкам, позволяя настраивать специальные символы (`,(0,c.jsx)(t.code,{children:`special`}),`), регулярные выражения для проверки (`,(0,c.jsx)(t.code,{children:`match`}),`), кастомные символы-заполнители (`,(0,c.jsx)(t.code,{children:`view`}),`), паттерны валидации (`,(0,c.jsx)(t.code,{children:`pattern`}),`) и резиновые группы (`,(0,c.jsx)(t.code,{children:`rubber`}),`).`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'
const value = ref('')
<\/script>

<template>
<!-- Телефон США -->
<Input v-model="value" type="tel" mask="+1 (###) ###-####" placeholder="+1 (555) 000-0000" label="Телефон" />

<!-- Кредитная карта -->
<Input v-model="value" type="text" mask="#### #### #### ####" placeholder="0000 0000 0000 0000" label="Карта" />

<!-- Без отображения символов-заполнителей -->
<Input v-model="value" type="tel" mask="+1 (###) ###-####" :mask-visible="false" label="Без заполнителя" />
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};