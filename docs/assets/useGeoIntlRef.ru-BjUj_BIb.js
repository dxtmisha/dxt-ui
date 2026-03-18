import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function o(t){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"@dxtmisha/ru/functional/Composables/useGeoIntlRef - Форматирование данных"}),`
`,n.jsx(e.h1,{id:"usegeointlref",children:n.jsx(e.code,{children:"useGeoIntlRef"})}),`
`,n.jsxs(e.p,{children:["Composable, возвращающий экземпляр класса ",n.jsx(e.code,{children:"GeoIntlRef"})," для работы с интернационализацией и форматированием данных (чисел, валют, дат и т.д.) на основе текущей локали."]}),`
`,n.jsx(e.p,{children:n.jsxs(e.strong,{children:["Возвращает (",n.jsx(e.code,{children:"GeoIntlRef"}),"):"]})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Объект класса ",n.jsx(e.code,{children:"GeoIntlRef"}),", предоставляющий методы для реактивного форматирования."]}),`
`]}),`
`,n.jsxs(e.h2,{id:"методы-geointlref",children:["Методы ",n.jsx(e.code,{children:"GeoIntlRef"})]}),`
`,n.jsx(e.p,{children:"Класс предоставляет реактивные методы для форматирования. Все доступные методы этого класса можно найти в описании GeoIntlRef."}),`
`,n.jsx(e.h2,{id:"пример",children:"Пример"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { useGeoIntlRef } from '@dxtmisha/functional'

const intl = useGeoIntlRef()

// Реактивное форматирование числа
const formattedNumber = intl.number(1234.56) // "1 234,56" (для ru-RU)

// Форматирование валюты
const price = intl.currency(1000, 'RUB') // "1 000 ₽"
`})})]})}function m(t={}){const{wrapper:e}={...s(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(o,{...t})}):o(t)}export{m as default};
