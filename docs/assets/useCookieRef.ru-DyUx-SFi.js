import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional/Composables/useCookieRef - Работа с Cookie`}),`
`,(0,c.jsx)(t.h1,{id:`usecookieref`,children:(0,c.jsx)(t.code,{children:`useCookieRef`})}),`
`,(0,c.jsxs)(t.p,{children:[`Composable для работы с браузерными Cookie. Позволяет создавать реактивные переменные, которые автоматически синхронизируются с Cookie. Также поддерживает синхронизацию между вкладками через `,(0,c.jsx)(t.code,{children:`BroadcastChannel`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string`}),` — Название cookie.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`defaultValue?: T | string | (() => (T | string))`}),` — Значение по умолчанию. Может быть статичным значением или функцией.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options?: CookieOptions`}),` — Дополнительные параметры для управления cookie (срок жизни, путь, домен и т.д.).`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsxs)(t.strong,{children:[`Возвращает (`,(0,c.jsx)(t.code,{children:`Ref<T | string | undefined>`}),`):`]})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Реактивную ссылку на значение в cookie.`}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`пример`,children:`Пример`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { useCookieRef } from '@dxtmisha/functional'

// Создание ссылки на cookie 'theme' со значением 'light' по умолчанию
const theme = useCookieRef('theme', 'light', { age: 365 * 24 * 60 * 60 })

// Обновление значения (автоматически сохраняется в cookie)
theme.value = 'dark'

// Значение будет одинаковым во всех вкладках браузера в реальном времени
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};