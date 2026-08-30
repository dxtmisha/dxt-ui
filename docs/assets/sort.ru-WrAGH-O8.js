import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`сортировка-данных`,children:`Сортировка данных`}),`
`,(0,c.jsx)(t.p,{children:`Компонент таблицы предоставляет встроенную поддержку сортировки данных. Вы можете использовать автоматическую локальную сортировку "из коробки" или полностью управлять состоянием сортировки вручную (например, для сортировки на стороне сервера).`}),`
`,(0,c.jsx)(t.h3,{id:`включение-сортировки-для-колонок`,children:`Включение сортировки для колонок`}),`
`,(0,c.jsxs)(t.p,{children:[`Чтобы сделать колонку сортируемой, добавьте `,(0,c.jsx)(t.code,{children:`showSort: true`}),` в ее конфигурацию внутри свойства `,(0,c.jsx)(t.code,{children:`header`}),`. Это добавит интерактивную кнопку сортировки в заголовок колонки. Клик по кнопке циклически переключает 3 состояния:`]}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[`По возрастанию (`,(0,c.jsx)(t.code,{children:`'asc'`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[`По убыванию (`,(0,c.jsx)(t.code,{children:`'desc'`}),`)`]}),`
`,(0,c.jsx)(t.li,{children:`Сброс (без сортировки)`}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`автоматическая-локальная-сортировка`,children:`Автоматическая локальная сортировка`}),`
`,(0,c.jsxs)(t.p,{children:[`По умолчанию таблица сортирует данные автоматически. Если вы передали статический массив данных в свойство `,(0,c.jsx)(t.code,{children:`list`}),` и включили `,(0,c.jsx)(t.code,{children:`showSort`}),` в шапке, таблица сама будет перестраивать строки при кликах по заголовкам.`]}),`
`,(0,c.jsx)(i,{code:`
<script setup lang="ts">
const columns = ['name', 'age']
const header = [
{
  name: { label: 'Имя', showSort: true },
  age: { label: 'Возраст', showSort: true }
}
]
const list = [
{ name: 'Алиса', age: 28 },
{ name: 'Боб', age: 34 }
]
<\/script>

<template>
<Table
  :columns="columns"
  :header="header"
  :list="list"
/>
</template>
`,language:`html`}),`
`,(0,c.jsx)(t.h3,{id:`управляемая-серверная-сортировка`,children:`Управляемая (серверная) сортировка`}),`
`,(0,c.jsxs)(t.p,{children:[`При работе с API обычно требуется сортировать данные на бэкенде. Для этого вы можете перехватить управление состоянием, подписавшись на событие `,(0,c.jsx)(t.code,{children:`@sort`}),` и передавая текущее состояние сортировки обратно через свойства `,(0,c.jsx)(t.code,{children:`:sort`}),` и `,(0,c.jsx)(t.code,{children:`:sortDir`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[`При использовании события `,(0,c.jsx)(t.code,{children:`@sort`}),` вы отключаете автоматическую локальную сортировку, и вся ответственность переходит к вашему обработчику.`]}),`
`,(0,c.jsx)(i,{code:`
<script setup lang="ts">
import { ref } from 'vue'

const currentSort = ref<string | undefined>()
const currentDir = ref<'asc' | 'desc' | undefined>()

const handleSort = (item: { column: string | undefined, dir: 'asc' | 'desc' | undefined }) => {
currentSort.value = item.column
currentDir.value = item.dir

// Пример: запрос данных с сервера с новыми параметрами сортировки
// fetchUsers({ sort: item.column, dir: item.dir })
}
<\/script>

<template>
<Table
  :columns="columns"
  :header="header"
  :list="list"
  :sort="currentSort"
  :sortDir="currentDir"
  @sort="handleSort"
/>
</template>
`,language:`html`}),`
`,(0,c.jsx)(t.h3,{id:`продвинутая-сортировка`,children:`Продвинутая сортировка`}),`
`,(0,c.jsxs)(t.p,{children:[`Свойство `,(0,c.jsx)(t.code,{children:`:sort`}),` также поддерживает сложные конфигурации сортировки:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Массив:`}),` Сортировка по нескольким колонкам (например, `,(0,c.jsx)(t.code,{children:`['category', 'name']`}),`). Префикс `,(0,c.jsx)(t.code,{children:`-`}),` означает сортировку по убыванию (например, `,(0,c.jsx)(t.code,{children:`['-category']`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Объект:`}),` Детальная настройка мультисортировки (например, `,(0,c.jsx)(t.code,{children:`{ category: 'asc', age: 'desc' }`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Если вам нужна полностью кастомная логика для автоматической локальной сортировки, вы можете передать свою функцию сравнения через свойство `,(0,c.jsx)(t.code,{children:`:sortFunction`}),`.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};