import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional/Composables/useGeoIntlRef - Форматирование данных`}),`
`,(0,c.jsx)(n.h1,{id:`usegeointlref`,children:(0,c.jsx)(n.code,{children:`useGeoIntlRef`})}),`
`,(0,c.jsxs)(n.p,{children:[`Composable, возвращающий экземпляр класса `,(0,c.jsx)(n.code,{children:`GeoIntlRef`}),` для работы с интернационализацией и форматированием данных (чисел, валют, дат и т.д.) на основе текущей локали.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsxs)(n.strong,{children:[`Возвращает (`,(0,c.jsx)(n.code,{children:`GeoIntlRef`}),`):`]})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Объект класса `,(0,c.jsx)(n.code,{children:`GeoIntlRef`}),`, предоставляющий методы для реактивного форматирования.`]}),`
`]}),`
`,(0,c.jsxs)(n.h2,{id:`методы-geointlref`,children:[`Методы `,(0,c.jsx)(n.code,{children:`GeoIntlRef`})]}),`
`,(0,c.jsx)(n.p,{children:`Класс предоставляет реактивные методы для форматирования. Все доступные методы этого класса можно найти в описании GeoIntlRef.`}),`
`,(0,c.jsx)(n.h2,{id:`пример`,children:`Пример`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { useGeoIntlRef } from '@dxtmisha/functional'

const intl = useGeoIntlRef()

// Реактивное форматирование числа
const formattedNumber = intl.number(1234.56) // "1 234,56" (для ru-RU)

// Форматирование валюты
const price = intl.currency(1000, 'RUB') // "1 000 ₽"
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};