import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Компонент для выбора дочерних элементов внутри области путем рисования прямоугольника выделения (выделение рамкой) или клика.`}),`
`,(0,c.jsx)(t.p,{children:`SelectableArea управляет выбором элементов по координатам, автоматически отображая визуальный прямоугольник выделения при перетаскивании курсора по контейнеру. Компонент вычисляет границы пересечения для дочерних элементов, соответствующих целевым селекторам, помечает их как выбранные и вызывает соответствующие события изменения состояния. Это полезно для реализации выделений в файловых менеджерах, сетках элементов или на интерактивных холстах.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Выделение перетаскиванием мыши (выделение рамкой)`}),`
`,(0,c.jsx)(t.li,{children:`Поддержка выделения по клику`}),`
`,(0,c.jsxs)(t.li,{children:[`Настройка HTML-тега обертки (свойство `,(0,c.jsx)(t.code,{children:`tag`}),`)`]}),`
`,(0,c.jsx)(t.li,{children:`Расчет пересечений для вложенных элементов`}),`
`,(0,c.jsxs)(t.li,{children:[`Реактивное связывание состояний для свойств `,(0,c.jsx)(t.code,{children:`active`}),` и `,(0,c.jsx)(t.code,{children:`selected`})]}),`
`,(0,c.jsx)(t.li,{children:`Полная поддержка клавиатурной навигации и событий`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Выделение файлов/папок в стиле рабочего стола`}),`
`,(0,c.jsx)(t.li,{children:`Групповое выделение элементов в таблицах и сетках`}),`
`,(0,c.jsx)(t.li,{children:`Выделение графических объектов на холстах редактирования`}),`
`,(0,c.jsx)(t.li,{children:`Интерактивные компоненты дашбордов`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const selected = ref(['1', '2'])
<\/script>

<template>
<SelectableArea v-model:selected="selected">
  <template #default="{ className, classClick, onClick }">
    <div style="display: flex; gap: 8px;">
      <div
        v-for="item in 5"
        :key="item"
        :class="[className, classClick]"
        :data-value="item"
        @click="onClick"
      >
        Элемент {{ item }}
      </div>
    </div>
  </template>
</SelectableArea>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};