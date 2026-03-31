import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional/Functions/computedEternity - Постоянное вычисляемое свойство`}),`
`,(0,c.jsx)(n.h1,{id:`computedeternity`,children:(0,c.jsx)(n.code,{children:`computedEternity`})}),`
`,(0,c.jsx)(n.p,{children:`Создаёт вычисляемое свойство, которое вычисляется по требованию и кешируется. Значение обновляется автоматически при изменении зависимостей, но только если к нему был осуществлён доступ хотя бы один раз. Вотчер остаётся активным на протяжении всей работы приложения. Это полезно для свойств, которые должны сохраняться глобально после первого обращения.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getter: () => Promise<T> | T`}),` — Функция, которая возвращает вычисляемое значение (может быть синхронной или асинхронной).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`CustomRef<T>`}),` — Реактивное вычисляемое свойство с результатом выполнения геттера.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { computedEternity } from '@dxtmisha/functional'

// Асинхронный геттер - будет вызван только при первом обращении к 'data.value'
const data = computedEternity(async () => {
  const response = await fetch('/api/data')
  return response.json()
})

// Синхронный геттер
const i = ref(0)
const double = computedEternity(() => i.value * 2)

console.log(double.value) // 0
i.value = 5
// double.value будет 10 при следующем обращении
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};