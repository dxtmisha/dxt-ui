import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as s}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function o(t){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"@dxtmisha/ru/functional/Functions/computedEternity - Постоянное вычисляемое свойство"}),`
`,n.jsx(e.h1,{id:"computedeternity",children:n.jsx(e.code,{children:"computedEternity"})}),`
`,n.jsx(e.p,{children:"Создаёт вычисляемое свойство, которое вычисляется по требованию и кешируется. Значение обновляется автоматически при изменении зависимостей, но только если к нему был осуществлён доступ хотя бы один раз. Вотчер остаётся активным на протяжении всей работы приложения. Это полезно для свойств, которые должны сохраняться глобально после первого обращения."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getter: () => Promise<T> | T"})," — Функция, которая возвращает вычисляемое значение (может быть синхронной или асинхронной)."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"}),`
`,n.jsx(e.code,{children:"CustomRef<T>"})," — Реактивное вычисляемое свойство с результатом выполнения геттера."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { computedEternity } from '@dxtmisha/functional'

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
`})})]})}function m(t={}){const{wrapper:e}={...r(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(o,{...t})}):o(t)}export{m as default};
