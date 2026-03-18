import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(c){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...c.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"@dxtmisha/ru/functional-basic/Classes/Cache - Базовое кэширование"}),`
`,n.jsx(e.h1,{id:"класс-cache",children:"Класс Cache"}),`
`,n.jsx(e.p,{children:"Легковесный механизм кэширования в памяти. Он предоставляет эффективный способ выполнения ресурсоемких функций получения данных только при необходимости, полагаясь на «массивы сравнения» для запуска инвалидации и пересчета кэша."}),`
`,n.jsx(e.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Выполнение по требованию"})," — функции запускаются только тогда, когда кэшированное значение отсутствует или инвалидировано."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Инвалидация по массиву сравнения"})," — автоматически пересчитывает кэш, если предоставленный массив зависимостей изменяется (подобно массивам зависимостей ",n.jsx(e.code,{children:"useMemo"})," или ",n.jsx(e.code,{children:"useEffect"})," в React)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Асинхронная поддержка"})," — безупречно работает с получением данных на основе ",n.jsx(e.code,{children:"Promise"}),"."]}),`
`]}),`
`,n.jsx(e.h2,{id:"инициализация",children:"Инициализация"}),`
`,n.jsxs(e.p,{children:["Для инициализации объекта вызовите конструктор ",n.jsx(e.code,{children:"Cache()"}),"."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { Cache } from '@dxtmisha/functional'

// 1. Инициализация хранилища
const cache = new Cache()

// 2. Получение или вычисление значения
const user = cache.get('user', () => 'Admin', [1])
`})}),`
`,n.jsx(e.h2,{id:"получение-данных",children:"Получение данных"}),`
`,n.jsx(e.h3,{id:"get",children:n.jsx(e.code,{children:"get"})}),`
`,n.jsxs(e.p,{children:["Используйте метод ",n.jsx(e.code,{children:"get()"})," для получения кэшированного значения или его вычисления, если оно не существует или устарело."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"name: string"})," — уникальный идентификатор записи кэша."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"callback: () => T"})," — функция, которая вычисляет значение."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"comparison?: any[]"})," — опциональный массив зависимостей. Если любое значение в этом массиве изменится с прошлого вызова, кэш очищается и ",n.jsx(e.code,{children:"callback"})," запускается снова."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"T"})," — кэшированное или вычисленное значение."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`let counter = 0

// Вычислит и закэширует "Пользователь 1"
const user1 = cache.get('user', () => \`Пользователь \${++counter}\`, [1])

// НЕ будет вычислять, вернет закэшированное "Пользователь 1"
const unchanged = cache.get('user', () => \`Пользователь \${++counter}\`, [1])

// Массив зависимостей изменился с [1] на [2]
// Вычислит и закэширует "Пользователь 2"
const changed = cache.get('user', () => \`Пользователь \${++counter}\`, [2])
`})}),`
`,n.jsx(e.h3,{id:"getasync",children:n.jsx(e.code,{children:"getAsync"})}),`
`,n.jsxs(e.p,{children:["Работает идентично ",n.jsx(e.code,{children:"get()"}),", но предназначен для асинхронных вызовов."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"name: string"})," — уникальный идентификатор."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"callback: () => Promise<T>"})," — асинхронная функция, генерирующая результат."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"comparison?: any[]"})," — опциональный массив зависимостей."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"Promise<T>"})," — асинхронное кэшированное значение."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`async function fetchUser(id) {
  return cache.getAsync('user_api', async () => {
    const res = await fetch(\`/api/users/\${id}\`)
    return res.json()
  }, [id])
}

// Первый вызов идет в сеть
const u1 = await fetchUser(5)

// Второй вызов возвращает кэш мгновенно (без обращения к сети)
const u1Cached = await fetchUser(5)

// Зависимость \`id\` изменилась (5 !== 6), снова идет в сеть
const u2 = await fetchUser(6)
`})})]})}function x(c={}){const{wrapper:e}={...r(),...c.components};return e?n.jsx(e,{...c,children:n.jsx(s,{...c})}):s(c)}export{x as default};
