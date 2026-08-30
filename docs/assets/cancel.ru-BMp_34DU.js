import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`кнопка-очистки`,children:`Кнопка очистки`}),`
`,(0,c.jsxs)(t.p,{children:[`Свойства `,(0,c.jsx)(t.code,{children:`cancel`}),` и `,(0,c.jsx)(t.code,{children:`cancelShow`}),` предназначены для управления отображением иконки очистки поля.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Свойства:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`cancel`}),` — режим отображения кнопки очистки (`,(0,c.jsx)(t.code,{children:`auto`}),` или `,(0,c.jsx)(t.code,{children:`always`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`cancelShow`}),` — условный флаг видимости, используется только в режиме `,(0,c.jsx)(t.code,{children:`auto`})]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Свойства работают совместно: если `,(0,c.jsx)(t.code,{children:`cancel`}),` установлен в `,(0,c.jsx)(t.code,{children:`auto`}),`, иконка очистки отображается только при выполнении условий `,(0,c.jsx)(t.code,{children:`cancelShow = true`}),`, поле активно (не `,(0,c.jsx)(t.code,{children:`disabled`}),`/`,(0,c.jsx)(t.code,{children:`readonly`}),`) и не включён режим стрелок (`,(0,c.jsx)(t.code,{children:`arrowCarousel`}),`/`,(0,c.jsx)(t.code,{children:`arrowStepper`}),`). При `,(0,c.jsx)(t.code,{children:`cancel = always`}),` иконка отображается принудительно (кроме случаев `,(0,c.jsx)(t.code,{children:`disabled`}),`/`,(0,c.jsx)(t.code,{children:`readonly`}),` или активных стрелок), значение `,(0,c.jsx)(t.code,{children:`cancelShow`}),` игнорируется. Режимы стрелок имеют приоритет над кнопкой очистки — при активной навигации cancel скрывается независимо от настроек.`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref, computed } from 'vue'

const value = ref('')
const hasValue = computed(() => value.value.length > 0)
<\/script>

<template>
<!-- Автоматический режим с условием -->
<Field
  label="Поиск"
  cancel="auto"
  :cancel-show="hasValue"
>
  <template #default="{ id, className }">
    <input :id="id" :class="className" v-model="value" />
  </template>
</Field>

<!-- Принудительный показ -->
<Field
  label="Фильтр"
  cancel="always"
>
  <template #default="{ id, className }">
    <input :id="id" :class="className" v-model="value" />
  </template>
</Field>

<!-- С обработчиком события -->
<Field
  label="Ввод"
  cancel="auto"
  :cancel-show="hasValue"
  @click="value = ''"
>
  <template #default="{ id, className }">
    <input :id="id" :class="className" v-model="value" />
  </template>
</Field>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};