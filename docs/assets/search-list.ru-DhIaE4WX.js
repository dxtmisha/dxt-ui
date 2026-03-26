import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional-basic/# Поиск по списку`}),`
`,(0,c.jsx)(n.h1,{id:`поиск-по-списку`,children:`Поиск по списку`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`SearchList`}),` — это мощный инструмент для организации реактивного поиска и фильтрации в массивах объектов. Он инкапсулирует логику сопоставителя (matcher), управление состоянием запроса и форматирование результатов, включая подсветку совпадений.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { SearchList } from '@dxtmisha/functional-basic'

const data = [
  { id: 1, name: 'Apple', Category: 'Fruit' },
  { id: 2, name: 'Banana', Category: 'Fruit' }
]

// 1. Инициализация поиска по полям 'name' и 'Category'
const search = new SearchList(data, ['name', 'Category'])

// 2. Установка значения поиска
search.setValue('app')

// 3. Получение отфильтрованного списка
const results = search.to()
// [{ item: { id: 1, ... }, selected: true, ... }]
`})}),`
`,(0,c.jsx)(n.h2,{id:`управление-данными`,children:`Управление данными`}),`
`,(0,c.jsx)(n.p,{children:`Вы можете динамически изменять как сам список данных, так и набор столбцов, по которым производится поиск, без перезапуска всей логики.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`// Обновление списка данных
search.setList(newData)

// Изменение целевых столбцов
search.setColumns(['Category'])
`})}),`
`,(0,c.jsx)(n.h2,{id:`тонкая-настройка`,children:`Тонкая настройка`}),`
`,(0,c.jsxs)(n.p,{children:[`Через опции можно управлять поведением поиска, например, заставить систему возвращать все элементы, помечая совпавшие через флаг `,(0,c.jsx)(n.code,{children:`selected`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const search = new SearchList(data, ['name'], '', {
  returnEverything: true // Возвращать весь список, а не только совпадения
})

search.setValue('apple')
const list = search.to() 
// list будет содержать все элементы, но у 'Apple' будет selected: true
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};