import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(o){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/ru/functional/Composables/useCookieRef - Работа с Cookie"}),`
`,e.jsx(n.h1,{id:"usecookieref",children:e.jsx(n.code,{children:"useCookieRef"})}),`
`,e.jsxs(n.p,{children:["Composable для работы с браузерными Cookie. Позволяет создавать реактивные переменные, которые автоматически синхронизируются с Cookie. Также поддерживает синхронизацию между вкладками через ",e.jsx(n.code,{children:"BroadcastChannel"}),"."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"name: string"})," — Название cookie."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"defaultValue?: T | string | (() => (T | string))"})," — Значение по умолчанию. Может быть статичным значением или функцией."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options?: CookieOptions"})," — Дополнительные параметры для управления cookie (срок жизни, путь, домен и т.д.)."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsxs(n.strong,{children:["Возвращает (",e.jsx(n.code,{children:"Ref<T | string | undefined>"}),"):"]})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Реактивную ссылку на значение в cookie."}),`
`]}),`
`,e.jsx(n.h2,{id:"пример",children:"Пример"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { useCookieRef } from '@dxtmisha/functional'

// Создание ссылки на cookie 'theme' со значением 'light' по умолчанию
const theme = useCookieRef('theme', 'light', { age: 365 * 24 * 60 * 60 })

// Обновление значения (автоматически сохраняется в cookie)
theme.value = 'dark'

// Значение будет одинаковым во всех вкладках браузера в реальном времени
`})})]})}function a(o={}){const{wrapper:n}={...s(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(i,{...o})}):i(o)}export{a as default};
