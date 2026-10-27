import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional/Classes/RouterItemRef - Управление Vue Router`}),`
`,(0,c.jsx)(t.h1,{id:`класс-routeritemref`,children:`Класс RouterItemRef`}),`
`,(0,c.jsxs)(t.p,{children:[`Статический фасад установленного Vue Router, сохранённого через `,(0,c.jsx)(t.code,{children:`ServerStorage`}),`. Разрешает именованные маршруты в свойства href и запускает навигацию.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Именованные ссылки`}),` — сохраняет параметры, query, hash и базу истории.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Регистрация`}),` — `,(0,c.jsx)(t.code,{children:`set()`}),` заменяет, `,(0,c.jsx)(t.code,{children:`setOneTime()`}),` устанавливает только при отсутствии.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Необязательный роутер`}),` — без регистрации возвращает undefined для ссылки либо пустые href-свойства.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`поведение-и-жизненный-цикл`,children:`Поведение и жизненный цикл`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`rawToHref()`}),` обрабатывает только объекты со строковым `,(0,c.jsx)(t.code,{children:`name`}),`; объекты path и URL-строки возвращают `,(0,c.jsx)(t.code,{children:`{}`}),`. Неизвестное имя маршрута может вызвать ошибку Vue Router. `,(0,c.jsx)(t.code,{children:`push()`}),` возвращает `,(0,c.jsx)(t.code,{children:`void`}),`, не предоставляя Promise навигации; для ожидания и обработки ошибок используйте роутер напрямую. Перед SSR инициализируйте хранилище запроса.`]}),`
`,(0,c.jsx)(t.h2,{id:`использование`,children:`Использование`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { RouterItemRef } from '@dxtmisha/functional'
import { createMemoryHistory, createRouter } from 'vue-router'

const router = /*#__PURE__*/ createRouter({
  history: createMemoryHistory('/app/'),
  routes: [{ path: '/users/:id', name: 'user', component: { render: () => null } }]
})
RouterItemRef.set(router)
const href = /*#__PURE__*/ RouterItemRef.getHref('user', { id: 0 }, { page: 1 }, '#details')
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`регистрация`,children:`Регистрация`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`get(): Router`}),` — Возвращает зарегистрированный роутер; фактически он может отсутствовать.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`set(router: Router): void`}),` — Сохраняет или заменяет роутер текущего контекста.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`setOneTime(router: Router): void`}),` — Регистрирует роутер только при отсутствии сохранённого.`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`ссылки-и-навигация`,children:`Ссылки и навигация`}),`
`,(0,c.jsx)(t.h4,{id:`getlink`,children:(0,c.jsx)(t.code,{children:`getLink`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`getLink( name: string, params?: RouteParamsRawGeneric, query?: LocationQueryRaw, hash?: string ): string | undefined`})}),`
`,(0,c.jsxs)(t.p,{children:[`Разрешает именованное местоположение в `,(0,c.jsx)(t.code,{children:`router.resolve(...).href`}),`; без роутера возвращает `,(0,c.jsx)(t.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string`}),` — Имя зарегистрированного маршрута.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`params?: RouteParamsRawGeneric`}),` — Параметры именованного маршрута.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`query?: LocationQueryRaw`}),` — Параметры строки запроса маршрута.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`hash?: string`}),` — Фрагмент маршрута с начальным #.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`string | undefined`}),` — Запрошенная строка либо undefined при отсутствии.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const link = /*#__PURE__*/ RouterItemRef.getLink('user', { id: 0 }, { page: 1 }, '#details')
`})}),`
`,(0,c.jsx)(t.h4,{id:`gethref`,children:(0,c.jsx)(t.code,{children:`getHref`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`getHref( name?: string, params?: RouteParamsRawGeneric, query?: LocationQueryRaw, hash?: string ): ConstrHrefProps`})}),`
`,(0,c.jsxs)(t.p,{children:[`Возвращает `,(0,c.jsx)(t.code,{children:`{ href }`}),` для непустой разрешённой ссылки, иначе `,(0,c.jsx)(t.code,{children:`{}`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name?: string`}),` — Имя зарегистрированного маршрута.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`params?: RouteParamsRawGeneric`}),` — Параметры именованного маршрута.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`query?: LocationQueryRaw`}),` — Параметры строки запроса маршрута.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`hash?: string`}),` — Фрагмент маршрута с начальным #.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`ConstrHrefProps`}),` — Запрошенное значение либо объект согласно сигнатуре.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const props = /*#__PURE__*/ RouterItemRef.getHref('user', { id: 0 })
`})}),`
`,(0,c.jsx)(t.h4,{id:`rawtohref`,children:(0,c.jsx)(t.code,{children:`rawToHref`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`rawToHref( to?: string | RouteLocationRaw ): ConstrHrefProps`})}),`
`,(0,c.jsx)(t.p,{children:`Преобразует именованное местоположение в href-свойства, сохраняя параметры, query и hash.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`to?: string | RouteLocationRaw`}),` — Необработанное местоположение маршрута.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`ConstrHrefProps`}),` — Запрошенное значение либо объект согласно сигнатуре.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const props = /*#__PURE__*/ RouterItemRef.rawToHref({ name: 'user', params: { id: 0 }, hash: '#details' })
`})}),`
`,(0,c.jsx)(t.h4,{id:`push`,children:(0,c.jsx)(t.code,{children:`push`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`push(to: string | RouteLocationRaw): void`})}),`
`,(0,c.jsx)(t.p,{children:`Запускает навигацию при наличии зарегистрированного роутера.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`to: string | RouteLocationRaw`}),` — Необработанное местоположение маршрута.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`void`}),` — Нет возвращаемого значения.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`RouterItemRef.push({ name: 'user', params: { id: 0 } })
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};