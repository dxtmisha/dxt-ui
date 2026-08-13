import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional/Functions/computedEternity - Постоянное вычисляемое свойство`}),`
`,(0,c.jsx)(t.h1,{id:`computedeternity`,children:(0,c.jsx)(t.code,{children:`computedEternity`})}),`
`,(0,c.jsx)(t.p,{children:`Создаёт вычисляемое свойство, которое вычисляется по требованию и кешируется. Значение обновляется автоматически при изменении зависимостей, но только если к нему был осуществлён доступ хотя бы один раз. Вотчер остаётся активным на протяжении всей работы приложения. Это полезно для свойств, которые должны сохраняться глобально после первого обращения.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getter: () => Promise<T> | T`}),` — Функция, которая возвращает вычисляемое значение (может быть синхронной или асинхронной).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`initialState?: T`}),` — Начальное значение результата.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`CustomRef<T>`}),` — Реактивное вычисляемое свойство с результатом выполнения геттера.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { computedEternity } from '@dxtmisha/functional'

// Начальное значение
const status = computedEternity(async () => {
  await new Promise(resolve => setTimeout(resolve, 1000))
  return 'online'
}, 'offline')
// Status.value будет 'offline' до завершения выполнения геттера

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
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};