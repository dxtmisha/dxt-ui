import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`кнопки-показать-еще-и-показать-предыдущие`,children:`Кнопки «Показать еще» и «Показать предыдущие»`}),`
`,(0,c.jsxs)(t.p,{children:[`Свойства `,(0,c.jsx)(t.code,{children:`showMore`}),` и `,(0,c.jsx)(t.code,{children:`showMorePrev`}),` реализуют паттерн накопительной загрузки: контент постепенно раскрывается путём добавления записей в конец или начало уже отображаемого списка — в отличие от традиционной пагинации, которая целиком заменяет текущую страницу. Каждая кнопка решает отдельную UX-задачу и размещается на `,(0,c.jsx)(t.strong,{children:`отдельном экземпляре Pagination`}),`; совместное использование на одном компоненте не предусмотрено.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Свойства:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`showMore`}),` — отображает триггер загрузки под списком, который добавляет следующую страницу записей в конец при нажатии`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`showMorePrev`}),` — отображает триггер загрузки над списком, который добавляет предыдущую страницу записей в начало при нажатии`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`showMore`})}),` реализует классическую прогрессивную загрузку в стиле ленты: пользователь начинает с первой страницы и постепенно подгружает дополнительные записи вниз, не теряя ранее полученный контент. Паттерн идеально подходит для каталогов товаров, лент активности и любых списков, где важнее сохранить контекст прокрутки, чем обеспечить точную навигацию по позиции.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`showMorePrev`})}),` решает принципиально иную задачу. Когда пользователь открывает список по прямой ссылке (например, `,(0,c.jsx)(t.code,{children:`?page=5`}),`), закладке или после перезагрузки страницы в середине сессии — отрисованный список начинается не с первого элемента. Записи страниц с 1 по 4 отсутствуют в DOM, хотя логически являются частью набора данных. `,(0,c.jsx)(t.code,{children:`showMorePrev`}),` позволяет получить эти недостающие записи и добавить их в начало текущего вида без перехода на другую страницу и без потери позиции, с которой пользователь начал просмотр.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Каноническая архитектура этого паттерна использует `,(0,c.jsx)(t.strong,{children:`два независимых экземпляра Pagination`}),`, совместно использующих одно реактивное состояние `,(0,c.jsx)(t.code,{children:`page`}),`: один располагается над списком с активным `,(0,c.jsx)(t.code,{children:`showMorePrev`}),`, другой — под списком с активным `,(0,c.jsx)(t.code,{children:`showMore`}),`. Каждый генерирует собственное событие (`,(0,c.jsx)(t.code,{children:`morePrev`}),` / `,(0,c.jsx)(t.code,{children:`more`}),`) и независимо инициирует соответствующую загрузку данных.`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

// Восстановлено из URL: ?page=5 — записи 1–4 отсутствуют в начальном рендере
const page = ref(Number(route.query.page) || 1)
const items = ref(await fetchPage(page.value))

async function handleMore(event, options) {
// Добавляет следующую порцию записей в конец списка
const next = await fetchPage(options.value)
items.value.push(...next)
}

async function handleMorePrev(event, options) {
// Добавляет предыдущую порцию записей в начало списка
const prev = await fetchPage(options.value)
items.value.unshift(...prev)
}
<\/script>

<template>
<!--
  Верхний экземпляр — отображается только когда список начинается не с 1-й страницы.
  Позволяет пользователю получить записи, предшествующие начальному смещению рендера.
-->
<Pagination
  v-model:value="page"
  :count="500"
  :rows="20"
  show-more-prev
  @morePrev="handleMorePrev"
/>

<ul>
  <li v-for="item in items" :key="item.id">{{ item.title }}</li>
</ul>

<!--
  Нижний экземпляр — стандартная прогрессивная загрузка.
  Добавляет следующую страницу записей при каждом взаимодействии.
-->
<Pagination
  v-model:value="page"
  :count="500"
  :rows="20"
  show-more
  @more="handleMore"
/>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};