import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Classes/Cache - Базовое кэширование`}),`
`,(0,c.jsx)(t.h1,{id:`класс-cache`,children:`Класс Cache`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`⚠️ Устарел`}),` — Этот класс устарел и не рекомендуется к использованию.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:`Легковесный механизм кэширования в памяти. Он предоставляет эффективный способ выполнения ресурсоемких функций получения данных только при необходимости, полагаясь на «массивы сравнения» для запуска инвалидации и пересчета кэша.`}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Выполнение по требованию`}),` — функции запускаются только тогда, когда кэшированное значение отсутствует или инвалидировано.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Инвалидация по массиву сравнения`}),` — автоматически пересчитывает кэш, если предоставленный массив зависимостей изменяется (подобно массивам зависимостей `,(0,c.jsx)(t.code,{children:`useMemo`}),` или `,(0,c.jsx)(t.code,{children:`useEffect`}),` в React).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Асинхронная поддержка`}),` — безупречно работает с получением данных на основе `,(0,c.jsx)(t.code,{children:`Promise`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(t.p,{children:[`Для инициализации объекта вызовите конструктор `,(0,c.jsx)(t.code,{children:`Cache()`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { Cache } from '@dxtmisha/functional'

// 1. Инициализация хранилища
const cache = new Cache()

// 2. Получение или вычисление значения
const user = cache.get('user', () => 'Admin', [1])
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`действие`,children:`Действие`}),`
`,(0,c.jsx)(t.h4,{id:`get`,children:(0,c.jsx)(t.code,{children:`get`})}),`
`,(0,c.jsxs)(t.p,{children:[`Используйте метод `,(0,c.jsx)(t.code,{children:`get()`}),` для получения кэшированного значения или его вычисления, если оно не существует или устарело.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string`}),` — уникальный идентификатор записи кэша.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`callback: () => T`}),` — функция, которая вычисляет значение.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`comparison?: any[]`}),` — опциональный массив зависимостей. Если любое значение в этом массиве изменится с прошлого вызова, кэш очищается и `,(0,c.jsx)(t.code,{children:`callback`}),` запускается снова.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`T`}),` — кэшированное или вычисленное значение.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`let counter = 0

// Вычислит и закэширует "Пользователь 1"
const user1 = cache.get('user', () => \`Пользователь \${++counter}\`, [1])

// НЕ будет вычислять, вернет закэшированное "Пользователь 1"
const unchanged = cache.get('user', () => \`Пользователь \${++counter}\`, [1])

// Массив зависимостей изменился с [1] на [2]
// Вычислит и закэширует "Пользователь 2"
const changed = cache.get('user', () => \`Пользователь \${++counter}\`, [2])
`})}),`
`,(0,c.jsx)(t.h4,{id:`getasync`,children:(0,c.jsx)(t.code,{children:`getAsync`})}),`
`,(0,c.jsxs)(t.p,{children:[`Работает идентично `,(0,c.jsx)(t.code,{children:`get()`}),`, но предназначен для асинхронных вызовов.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string`}),` — уникальный идентификатор.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`callback: () => Promise<T>`}),` — асинхронная функция, генерирующая результат.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`comparison?: any[]`}),` — опциональный массив зависимостей.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`Promise<T>`}),` — асинхронное кэшированное значение.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`async function fetchUser(id) {
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
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};