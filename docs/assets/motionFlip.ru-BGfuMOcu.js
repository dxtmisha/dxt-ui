import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Компонент для выполнения FLIP-анимаций (First, Last, Invert, Play) перестроения дочерних элементов.`}),`
`,(0,c.jsx)(t.p,{children:`MotionFlip автоматически анимирует изменение позиций и размеров дочерних элементов при изменениях макета (например, при сортировке, добавлении или удалении элементов списка).`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Плавные FLIP-анимации перестроения при обновлениях DOM`}),`
`,(0,c.jsxs)(t.li,{children:[`Автоматическое отслеживание изменений DOM с помощью свойства `,(0,c.jsx)(t.code,{children:`auto`})]}),`
`,(0,c.jsxs)(t.li,{children:[`Асинхронное выполнение обновлений через метод `,(0,c.jsx)(t.code,{children:`update`})]}),`
`,(0,c.jsx)(t.li,{children:`Автоматическая очистка стилей после завершения анимации`}),`
`,(0,c.jsxs)(t.li,{children:[`Возможность отключения анимации перестроения с помощью свойства `,(0,c.jsx)(t.code,{children:`disabled`})]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Списки и сетки с изменяемым порядком элементов`}),`
`,(0,c.jsx)(t.li,{children:`Интерфейсы динамической фильтрации и сортировки`}),`
`,(0,c.jsx)(t.li,{children:`Анимации при перетаскивании элементов (drag-and-drop)`}),`
`,(0,c.jsx)(t.li,{children:`Перестановка карточек и элементов галерей`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const flipRef = ref()
const items = ref([1, 2, 3, 4, 5])

const shuffle = async () => {
await flipRef.value?.update(() => {
  items.value = [...items.value].sort(() => Math.random() - 0.5)
})
}
<\/script>

<template>
<button @click="shuffle">Перемешать</button>

<MotionFlip ref="flipRef">
  <div v-for="item in items" :key="item">
    <div class="item">
      Элемент {{ item }}
    </div>
  </div>
</MotionFlip>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};