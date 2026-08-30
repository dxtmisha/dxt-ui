import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`интеграция-компонента`,children:`Интеграция компонента`}),`
`,(0,c.jsx)(t.p,{children:`Компонент обеспечивает гибкую интеграцию с табличными структурами данных, координируя отображение ячеек на основе переданного списка столбцов и объекта строки.`}),`
`,(0,c.jsx)(t.h3,{id:`конфигурация-полей-columns-и-item`,children:`Конфигурация полей columns и item`}),`
`,(0,c.jsx)(t.p,{children:`Связывание данных и структуры осуществляется через два ключевых свойства:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`columns`}),` — массив строк, определяющий последовательность и идентификаторы активных столбцов (например, `,(0,c.jsx)(t.code,{children:`['id', 'name', 'role']`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`item`}),` — объект данных текущей строки, содержащий значения для отображения, где ключи соответствуют идентификаторам из `,(0,c.jsx)(t.code,{children:`columns`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Для каждого идентификатора столбца из массива `,(0,c.jsx)(t.code,{children:`columns`}),` компонент автоматически извлекает соответствующее значение из объекта `,(0,c.jsx)(t.code,{children:`item`}),` (вычисляемое как `,(0,c.jsx)(t.code,{children:`item[index]`}),`) и производит рендеринг ячейки.`]}),`
`,(0,c.jsx)(t.h3,{id:`работа-с-избыточными-данными`,children:`Работа с избыточными данными`}),`
`,(0,c.jsxs)(t.p,{children:[`Объект `,(0,c.jsx)(t.code,{children:`item`}),` может содержать любые дополнительные или служебные поля (например, технические идентификаторы, связанные объекты, сырые ответы от API). Компонент отфильтрует структуру и выведет исключительно те свойства, ключи которых явно объявлены в массиве `,(0,c.jsx)(t.code,{children:`columns`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:`Это избавляет от необходимости осуществлять предварительную трансформацию (reshaping) или фильтрацию исходного объекта данных перед его передачей в компонент.`}),`
`,(0,c.jsx)(i,{code:`
<template>
<table>
  <tbody>
    <!-- Отобразятся только колонки 'name' и 'role' -->
    <TableRecord
      :columns="['name', 'role']"
      :item="{
        id: 12,
        name: 'Алиса',
        role: 'Разработчик',
        email: 'alice@example.com',
        status: 'active'
      }"
    />
  </tbody>
</table>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};