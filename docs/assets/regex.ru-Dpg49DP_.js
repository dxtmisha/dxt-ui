import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional-basic/# Регулярные выражения`}),`
`,(0,c.jsx)(n.h1,{id:`регулярные-выражения`,children:`Регулярные выражения`}),`
`,(0,c.jsx)(n.p,{children:`Набор утилит для упрощения работы с регулярными выражениями. Включает методы для безопасного экранирования пользовательского ввода и генерации сложных паттернов для поиска "по всем словам" или "хотя бы по одному".`}),`
`,(0,c.jsx)(n.h2,{id:`экранирование-и-создание`,children:`Экранирование и создание`}),`
`,(0,c.jsx)(n.p,{children:`Безопасное использование строк внутри регулярных выражений без риска синтаксических ошибок.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { escapeExp, getExp } from '@dxtmisha/functional-basic'

// 1. Экранирование спецсимволов (.*+?^\${}()|[\\]\\)
const safeText = escapeExp('price block ($)') // 'price block \\(\\$\\)'

// 2. Быстрое создание объекта RegExp с флагами
const regex = getExp('search-term', 'ig') 
`})}),`
`,(0,c.jsx)(n.h2,{id:`поисковые-паттерны`,children:`Поисковые паттерны`}),`
`,(0,c.jsx)(n.p,{children:`Специализированные генераторы для реализации функционала поиска и фильтрации.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { 
  getSearchExp, 
  getSeparatingSearchExp, 
  getExactSearchExp 
} from '@dxtmisha/functional-basic'

// 1. Поиск "содержит все слова" (в любом порядке)
// Подойдет для: "купить машину красную" -> найдет "красную машину купить"
const searchAll = getSearchExp('красная машина')

// 2. Поиск "хотя бы одно слово" (через ИЛИ)
const searchAny = getSeparatingSearchExp('apple orange') // (apple|orange)

// 3. Точное совпадение слова целиком
const exact = getExactSearchExp('React') // Найдет 'React', но не 'Reactions'
`})}),`
`,(0,c.jsx)(n.h2,{id:`практический-пример`,children:`Практический пример`}),`
`,(0,c.jsx)(n.p,{children:`Использование в фильтрации массивов данных:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const search = 'Иван Разработчик'
const regex = getSearchExp(search)

const users = [
  { name: 'Иван Сергеев', job: 'Ведущий разработчик' },
  { name: 'Петр Иванов', job: 'Дизайнер' }
]

// Найдет первого пользователя, так как его данные содержат оба слова
const filtered = users.filter(u => \`\${u.name} \${u.job}\`.match(regex))
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};