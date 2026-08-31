import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/12. Регулярные выражения`}),`
`,(0,c.jsx)(t.h1,{id:`регулярные-выражения`,children:`Регулярные выражения`}),`
`,(0,c.jsx)(t.p,{children:`Набор утилит для упрощения работы с регулярными выражениями. Включает методы для безопасного экранирования пользовательского ввода и генерации сложных паттернов для поиска "по всем словам" или "хотя бы по одному".`}),`
`,(0,c.jsx)(t.h2,{id:`экранирование-и-создание`,children:`Экранирование и создание`}),`
`,(0,c.jsx)(t.p,{children:`Безопасное использование строк внутри регулярных выражений без риска синтаксических ошибок.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`import { escapeExp, getExp } from '@dxtmisha/functional-basic'

// 1. Экранирование спецсимволов (.*+?^\${}()|[\\]\\)
const safeText = escapeExp('price block ($)') // 'price block \\(\\$\\)'

// 2. Быстрое создание объекта RegExp с флагами
const regex = getExp('search-term', 'ig') 
`})}),`
`,(0,c.jsx)(t.h2,{id:`поисковые-паттерны`,children:`Поисковые паттерны`}),`
`,(0,c.jsx)(t.p,{children:`Специализированные генераторы для реализации функционала поиска и фильтрации.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`import { 
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
`,(0,c.jsx)(t.h2,{id:`практический-пример`,children:`Практический пример`}),`
`,(0,c.jsx)(t.p,{children:`Использование в фильтрации массивов данных:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`const search = 'Иван Разработчик'
const regex = getSearchExp(search)

const users = [
  { name: 'Иван Сергеев', job: 'Ведущий разработчик' },
  { name: 'Петр Иванов', job: 'Дизайнер' }
]

// Найдет первого пользователя, так как его данные содержат оба слова
const filtered = users.filter(u => \`\${u.name} \${u.job}\`.match(regex))
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};