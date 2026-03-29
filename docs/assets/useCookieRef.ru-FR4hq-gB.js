import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional/Composables/useCookieRef - Работа с Cookie`}),`
`,(0,c.jsx)(n.h1,{id:`usecookieref`,children:(0,c.jsx)(n.code,{children:`useCookieRef`})}),`
`,(0,c.jsxs)(n.p,{children:[`Composable для работы с браузерными Cookie. Позволяет создавать реактивные переменные, которые автоматически синхронизируются с Cookie. Также поддерживает синхронизацию между вкладками через `,(0,c.jsx)(n.code,{children:`BroadcastChannel`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — Название cookie.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`defaultValue?: T | string | (() => (T | string))`}),` — Значение по умолчанию. Может быть статичным значением или функцией.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: CookieOptions`}),` — Дополнительные параметры для управления cookie (срок жизни, путь, домен и т.д.).`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsxs)(n.strong,{children:[`Возвращает (`,(0,c.jsx)(n.code,{children:`Ref<T | string | undefined>`}),`):`]})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:`Реактивную ссылку на значение в cookie.`}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`пример`,children:`Пример`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { useCookieRef } from '@dxtmisha/functional'

// Создание ссылки на cookie 'theme' со значением 'light' по умолчанию
const theme = useCookieRef('theme', 'light', { age: 365 * 24 * 60 * 60 })

// Обновление значения (автоматически сохраняется в cookie)
theme.value = 'dark'

// Значение будет одинаковым во всех вкладках браузера в реальном времени
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};