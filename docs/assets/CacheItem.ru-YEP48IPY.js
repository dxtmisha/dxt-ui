import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Classes/CacheItem - Продвинутое Управление Кэшем`}),`
`,(0,c.jsx)(t.h1,{id:`класс-cacheitem`,children:`Класс CacheItem`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`⚠️ Устарел`}),` — Этот класс устарел и не рекомендуется к использованию.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Внутренний механизм, управляющий отдельными записями кэша. В то время как `,(0,c.jsx)(t.code,{children:`Cache`}),` и `,(0,c.jsx)(t.code,{children:`CacheStatic`}),` предоставляют публичные интерфейсы для работы с глобальным кэшем приложения, именно класс `,(0,c.jsx)(t.code,{children:`CacheItem`}),` отвечает за жизненный цикл, хранение и правила инвалидации каждого конкретного значения.`]}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`CacheItem`}),` является `,(0,c.jsx)(t.strong,{children:`вспомогательным классом`}),`, предназначенным для внутреннего управления отдельными записями кэша. В большинстве случаев рекомендуется взаимодействовать с кэшированием через классы `,(0,c.jsx)(t.code,{children:`Cache`}),` или `,(0,c.jsx)(t.code,{children:`CacheStatic`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Отслеживание зависимостей`}),` — поддерживает массивы сравнения для определения актуальности закэшированного значения.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Ленивые вычисления`}),` — гарантирует, что ресурсоемкая функция (callback) запускается только при изменении зависимостей.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Историческая память`}),` — сохраняет ссылку на предыдущее значение (`,(0,c.jsx)(t.code,{children:`getCacheOld`}),`) даже после обновления кэша.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Асинхронная поддержка`}),` — нативная работа как с синхронными (`,(0,c.jsx)(t.code,{children:`getCache`}),`), так и с асинхронными (`,(0,c.jsx)(t.code,{children:`getCacheAsync`}),`) данными.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Строгая инвалидация`}),` — использует логику глубокого сравнения для минимизации лишних вычислений.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(t.p,{children:[`Как вспомогательный компонент, `,(0,c.jsx)(t.code,{children:`CacheItem`}),` обычно создается менеджерами более высокого уровня. Тем не менее, его можно инициализировать вручную, если требуется кастомная, изолированная логика кэширования.`]}),`
`,(0,c.jsx)(t.h3,{id:`ограничения-дженериков-generic-constraints`,children:`Ограничения дженериков (Generic Constraints)`}),`
`,(0,c.jsx)(t.p,{children:`Для обеспечения строгой типизации закэшированного значения класс поддерживает следующий дженерик:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`T`}),` — Тип данных, хранящихся в кэше.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`callback: () => T`}),` — функция, которая генерирует или загружает данные для кэша.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { CacheItem } from '@dxtmisha/functional-basic'

// 1. Инициализация с функцией получения данных
const userCache = new CacheItem(() => fetchUserData())

// 2. Использование дженериков для строгой типизации
const numberCache = new CacheItem<number>(() => Math.random())
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`доступ-к-кэшу`,children:`Доступ к кэшу`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getCache(comparison?: any[]): T`}),` — Извлекает значение из кэша. Если массив зависимостей `,(0,c.jsx)(t.code,{children:`comparison`}),` изменился, запускает пересчет.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getCacheAsync(comparison?: any[]): Promise<T>`}),` — Асинхронная версия `,(0,c.jsx)(t.code,{children:`getCache`}),`. Возвращает Promise, который разрешается в закэшированные или новые данные.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`история`,children:`История`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getCacheOld(): T | undefined`}),` — Возвращает значение, которое хранилось в кэше непосредственно до последнего обновления.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,c.jsx)(t.h3,{id:`инвалидация-на-основе-зависимостей`,children:`Инвалидация на основе зависимостей`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`let count = 0
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
`,(0,c.jsx)(t.h3,{id:`кэширование-данных-api`,children:`Кэширование данных API`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`const apiCache = new CacheItem(async () => {
  const response = await fetch('/api/data')
  return response.json()
})

// Загружает данные из сети при первом запросе с ключом 'v1'
const data1 = await apiCache.getCacheAsync(['v1'])

// Возвращает данные мгновенно из кэша для последующих запросов 'v1'
const data2 = await apiCache.getCacheAsync(['v1'])
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};