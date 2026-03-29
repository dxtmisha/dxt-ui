import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional-basic/Classes/Cache - Базовое кэширование`}),`
`,(0,c.jsx)(n.h1,{id:`класс-cache`,children:`Класс Cache`}),`
`,(0,c.jsx)(n.p,{children:`Легковесный механизм кэширования в памяти. Он предоставляет эффективный способ выполнения ресурсоемких функций получения данных только при необходимости, полагаясь на «массивы сравнения» для запуска инвалидации и пересчета кэша.`}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Выполнение по требованию`}),` — функции запускаются только тогда, когда кэшированное значение отсутствует или инвалидировано.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Инвалидация по массиву сравнения`}),` — автоматически пересчитывает кэш, если предоставленный массив зависимостей изменяется (подобно массивам зависимостей `,(0,c.jsx)(n.code,{children:`useMemo`}),` или `,(0,c.jsx)(n.code,{children:`useEffect`}),` в React).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Асинхронная поддержка`}),` — безупречно работает с получением данных на основе `,(0,c.jsx)(n.code,{children:`Promise`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[`Для инициализации объекта вызовите конструктор `,(0,c.jsx)(n.code,{children:`Cache()`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { Cache } from '@dxtmisha/functional'

// 1. Инициализация хранилища
const cache = new Cache()

// 2. Получение или вычисление значения
const user = cache.get('user', () => 'Admin', [1])
`})}),`
`,(0,c.jsx)(n.h2,{id:`получение-данных`,children:`Получение данных`}),`
`,(0,c.jsx)(n.h3,{id:`get`,children:(0,c.jsx)(n.code,{children:`get`})}),`
`,(0,c.jsxs)(n.p,{children:[`Используйте метод `,(0,c.jsx)(n.code,{children:`get()`}),` для получения кэшированного значения или его вычисления, если оно не существует или устарело.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — уникальный идентификатор записи кэша.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`callback: () => T`}),` — функция, которая вычисляет значение.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`comparison?: any[]`}),` — опциональный массив зависимостей. Если любое значение в этом массиве изменится с прошлого вызова, кэш очищается и `,(0,c.jsx)(n.code,{children:`callback`}),` запускается снова.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`T`}),` — кэшированное или вычисленное значение.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`let counter = 0

// Вычислит и закэширует "Пользователь 1"
const user1 = cache.get('user', () => \`Пользователь \${++counter}\`, [1])

// НЕ будет вычислять, вернет закэшированное "Пользователь 1"
const unchanged = cache.get('user', () => \`Пользователь \${++counter}\`, [1])

// Массив зависимостей изменился с [1] на [2]
// Вычислит и закэширует "Пользователь 2"
const changed = cache.get('user', () => \`Пользователь \${++counter}\`, [2])
`})}),`
`,(0,c.jsx)(n.h3,{id:`getasync`,children:(0,c.jsx)(n.code,{children:`getAsync`})}),`
`,(0,c.jsxs)(n.p,{children:[`Работает идентично `,(0,c.jsx)(n.code,{children:`get()`}),`, но предназначен для асинхронных вызовов.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — уникальный идентификатор.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`callback: () => Promise<T>`}),` — асинхронная функция, генерирующая результат.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`comparison?: any[]`}),` — опциональный массив зависимостей.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`Promise<T>`}),` — асинхронное кэшированное значение.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`async function fetchUser(id) {
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
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};