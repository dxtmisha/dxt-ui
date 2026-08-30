import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`работа-с-валютой`,children:`Работа с валютой`}),`
`,(0,c.jsxs)(t.p,{children:[`Свойства `,(0,c.jsx)(t.code,{children:`type`}),`, `,(0,c.jsx)(t.code,{children:`currency`}),`, `,(0,c.jsx)(t.code,{children:`currencyHide`}),`, `,(0,c.jsx)(t.code,{children:`language`}),` и `,(0,c.jsx)(t.code,{children:`fraction`}),` предназначены для управления форматированием денежных значений с автоматической подстановкой символа валюты и локализацией.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Свойства:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`type`}),` — тип инпута (устанавливается значение `,(0,c.jsx)(t.code,{children:`currency`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`currency`}),` — код валюты (например, `,(0,c.jsx)(t.code,{children:`USD`}),`, `,(0,c.jsx)(t.code,{children:`EUR`}),`, `,(0,c.jsx)(t.code,{children:`RUB`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`currencyHide`}),` — скрывает символ валюты в поле ввода`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`language`}),` — код локали для форматирования (например, `,(0,c.jsx)(t.code,{children:`ru-RU`}),`, `,(0,c.jsx)(t.code,{children:`en-US`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`fraction`}),` — количество знаков после запятой (по умолчанию `,(0,c.jsx)(t.code,{children:`2`}),`)`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Свойства работают совместно: `,(0,c.jsx)(t.code,{children:`type="currency"`}),` автоматически активирует режим валютного форматирования с двумя знаками после запятой. `,(0,c.jsx)(t.code,{children:`currency`}),` определяет символ, который добавляется к отформатированному числу (`,(0,c.jsx)(t.code,{children:`$`}),`, `,(0,c.jsx)(t.code,{children:`€`}),`, `,(0,c.jsx)(t.code,{children:`₽`}),`). При установке `,(0,c.jsx)(t.code,{children:`currencyHide`}),` символ валюты не отображается, но форматирование числа сохраняется. Свойство `,(0,c.jsx)(t.code,{children:`language`}),` влияет на разделители тысяч, десятичный разделитель и позицию символа валюты. Количество десятичных знаков можно изменить через `,(0,c.jsx)(t.code,{children:`fraction`}),`, перезаписав значение по умолчанию.`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'
const value = ref('1234.56')
<\/script>

<template>
<!-- Стандартный валютный инпут -->
<Input v-model="value" type="currency" currency="USD" language="en-US" label="Цена" />

<!-- Валюта с русской локалью -->
<Input v-model="value" type="currency" currency="RUB" language="ru-RU" label="Зарплата" />

<!-- Валюта без символа -->
<Input v-model="value" type="currency" currency="EUR" currency-hide language="de-DE" label="Сумма" />

<!-- Валюта с тремя знаками -->
<Input v-model="value" type="currency" currency="USD" language="en-US" :fraction="3" label="Точная сумма" />

<!-- Только числовое форматирование -->
<Input v-model="value" type="number-format" language="ru-RU" label="Число" />
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};