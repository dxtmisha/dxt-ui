import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/functional-basic/Classes/CacheItem - Продвинутое Управление Кэшем`}),`
`,(0,c.jsx)(n.h1,{id:`класс-cacheitem`,children:`Класс CacheItem`}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`⚠️ Устарел`}),` — Этот класс устарел и не рекомендуется к использованию.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[`Внутренний механизм, управляющий отдельными записями кэша. В то время как `,(0,c.jsx)(n.code,{children:`Cache`}),` и `,(0,c.jsx)(n.code,{children:`CacheStatic`}),` предоставляют публичные интерфейсы для работы с глобальным кэшем приложения, именно класс `,(0,c.jsx)(n.code,{children:`CacheItem`}),` отвечает за жизненный цикл, хранение и правила инвалидации каждого конкретного значения.`]}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`CacheItem`}),` является `,(0,c.jsx)(n.strong,{children:`вспомогательным классом`}),`, предназначенным для внутреннего управления отдельными записями кэша. В большинстве случаев рекомендуется взаимодействовать с кэшированием через классы `,(0,c.jsx)(n.code,{children:`Cache`}),` или `,(0,c.jsx)(n.code,{children:`CacheStatic`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Отслеживание зависимостей`}),` — поддерживает массивы сравнения для определения актуальности закэшированного значения.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Ленивые вычисления`}),` — гарантирует, что ресурсоемкая функция (callback) запускается только при изменении зависимостей.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Историческая память`}),` — сохраняет ссылку на предыдущее значение (`,(0,c.jsx)(n.code,{children:`getCacheOld`}),`) даже после обновления кэша.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Асинхронная поддержка`}),` — нативная работа как с синхронными (`,(0,c.jsx)(n.code,{children:`getCache`}),`), так и с асинхронными (`,(0,c.jsx)(n.code,{children:`getCacheAsync`}),`) данными.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Строгая инвалидация`}),` — использует логику глубокого сравнения для минимизации лишних вычислений.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[`Как вспомогательный компонент, `,(0,c.jsx)(n.code,{children:`CacheItem`}),` обычно создается менеджерами более высокого уровня. Тем не менее, его можно инициализировать вручную, если требуется кастомная, изолированная логика кэширования.`]}),`
`,(0,c.jsx)(n.h3,{id:`ограничения-дженериков-generic-constraints`,children:`Ограничения дженериков (Generic Constraints)`}),`
`,(0,c.jsx)(n.p,{children:`Для обеспечения строгой типизации закэшированного значения класс поддерживает следующий дженерик:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`T`}),` — Тип данных, хранящихся в кэше.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`callback: () => T`}),` — функция, которая генерирует или загружает данные для кэша.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { CacheItem } from '@dxtmisha/functional-basic'

// 1. Инициализация с функцией получения данных
const userCache = new CacheItem(() => fetchUserData())

// 2. Использование дженериков для строгой типизации
const numberCache = new CacheItem<number>(() => Math.random())
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`доступ-к-кэшу`,children:`Доступ к кэшу`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getCache(comparison?: any[]): T`}),` — Извлекает значение из кэша. Если массив зависимостей `,(0,c.jsx)(n.code,{children:`comparison`}),` изменился, запускает пересчет.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getCacheAsync(comparison?: any[]): Promise<T>`}),` — Асинхронная версия `,(0,c.jsx)(n.code,{children:`getCache`}),`. Возвращает Promise, который разрешается в закэшированные или новые данные.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`история`,children:`История`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getCacheOld(): T | undefined`}),` — Возвращает значение, которое хранилось в кэше непосредственно до последнего обновления.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,c.jsx)(n.h3,{id:`инвалидация-на-основе-зависимостей`,children:`Инвалидация на основе зависимостей`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`let count = 0
const counterCache = new CacheItem(() => ++count)

// Первый вызов: вычисляет и кэширует 1
counterCache.getCache([10]) // возвращает 1

// Второй вызов: зависимости [10] не изменились, возвращает закэшированную 1
counterCache.getCache([10]) // возвращает 1

// Третий вызов: зависимости изменились на [20], вычисляет и кэширует 2
counterCache.getCache([20]) // возвращает 2

// Проверка истории:
console.log(counterCache.getCacheOld()) // возвращает 1
`})}),`
`,(0,c.jsx)(n.h3,{id:`кэширование-данных-api`,children:`Кэширование данных API`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const apiCache = new CacheItem(async () => {
  const response = await fetch('/api/data')
  return response.json()
})

// Загружает данные из сети при первом запросе с ключом 'v1'
const data1 = await apiCache.getCacheAsync(['v1'])

// Возвращает данные мгновенно из кэша для последующих запросов 'v1'
const data2 = await apiCache.getCacheAsync(['v1'])
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};