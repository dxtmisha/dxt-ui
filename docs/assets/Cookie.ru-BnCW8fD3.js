import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/ru/functional-basic/Classes/Cookie - Управление Cookie"}),`
`,e.jsx(n.h1,{id:"класс-cookie",children:"Класс Cookie"}),`
`,e.jsxs(n.p,{children:["Удобная обертка для управления браузерными куки. Она автоматически синхронизируется между памятью и API DOM ",e.jsx(n.code,{children:"document.cookie"}),", позволяя вам реактивно устанавливать, извлекать и удалять куки, гарантируя при этом согласованные значения по умолчанию."]}),`
`,e.jsx(n.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Синхронизация с памятью"})," — поддерживает запись куки в памяти для предотвращения ненужных обращений к DOM. Автоматически парсит ",e.jsx(n.code,{children:"document.cookie"})," при запуске."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Понимание окружения"})," — определяет, выполняется ли код в среде DOM. В SSR (Server-Side Rendering) или при тестировании (без DOM) она элегантно переходит на хранение только в памяти без выброса ошибок."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Глобальный контроль блокировки"})," — безопасно интегрируется с ",e.jsx(n.code,{children:"CookieBlock"}),". Если запись куки глобально отключена (например, из-за согласия пользователя на конфиденциальность), класс ",e.jsx(n.code,{children:"Cookie"})," уважает это и приостанавливает все исходящие изменения в DOM."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Логика по умолчанию"})," — получение значения может лениво инициализировать его стандартом по умолчанию, если оно еще не существует."]}),`
`]}),`
`,e.jsx(n.h2,{id:"инициализация",children:"Инициализация"}),`
`,e.jsxs(n.p,{children:["Для инициализации объекта вызовите конструктор ",e.jsx(n.code,{children:"Cookie(name)"}),"."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"name: string"})," — имя куки, которым вы хотите управлять."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { Cookie } from '@dxtmisha/functional'

// 1. Инициализация обертки для куки 'theme'
const themeCookie = new Cookie('theme')
`})}),`
`,e.jsx(n.h2,{id:"управление-данными",children:"Управление данными"}),`
`,e.jsx(n.h3,{id:"get",children:e.jsx(n.code,{children:"get"})}),`
`,e.jsxs(n.p,{children:["Используйте ",e.jsx(n.code,{children:"get()"})," для его чтения. Если вы передадите значение по умолчанию в ",e.jsx(n.code,{children:"get()"}),", оно одновременно сохранит это значение по умолчанию, если куки ранее не было установлено."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value?: T | string | (() => T | string)"})," — опциональное значение по умолчанию или функция."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"T | string | undefined"})," — значение из куки или заданное по умолчанию."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Прочитает 'theme', ИЛИ установит и вернет 'dark', если его не существует
const currentTheme = themeCookie.get('dark') 
`})}),`
`,e.jsx(n.h3,{id:"set",children:e.jsx(n.code,{children:"set"})}),`
`,e.jsxs(n.p,{children:["Используйте ",e.jsx(n.code,{children:"set()"})," для переопределения или создания новых данных. Опции позволяют управлять стандартными атрибутами куки, такими как ",e.jsx(n.code,{children:"age"})," (продолжительность кэширования Max-Age в секундах) или политика ",e.jsx(n.code,{children:"sameSite"}),"."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: T | string | (() => T | string)"})," — значение для хранения, или функция, возвращающая значение."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options?: CookieOptions"})," — конфигурация срока жизни и безопасности куки."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const userPrefs = new Cookie('preferences')

// Установка простой строки
userPrefs.set('{"compact": true}')

// Установка с расширенными опциями
userPrefs.set('{"compact": true}', {
  age: 60 * 60 * 24 * 30, // 30 дней
  sameSite: 'lax'
})
`})}),`
`,e.jsx(n.h3,{id:"remove",children:e.jsx(n.code,{children:"remove"})}),`
`,e.jsxs(n.p,{children:["Удаление куки перезаписывает его пустой строкой и устанавливает его Max-Age в ",e.jsx(n.code,{children:"-1"}),", давая браузеру команду немедленно удалить запись."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`userPrefs.remove()
`})}),`
`,e.jsx(n.h2,{id:"синхронизация",children:"Синхронизация"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"updateData(): void"})," (static) — Обновляет данные из ",e.jsx(n.code,{children:"document.cookie"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"параметры-cookieoptions",children:"Параметры CookieOptions"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"CookieOptions"})," — объект конфигурации для методов ",e.jsx(n.code,{children:"get"})," и ",e.jsx(n.code,{children:"set"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"age?: number"})," — время жизни куки в ",e.jsx(n.strong,{children:"секундах"})," (атрибут ",e.jsx(n.code,{children:"Max-Age"}),"). По умолчанию: 7 дней (604800 сек). При удалении (",e.jsx(n.code,{children:"remove()"}),") автоматически становится ",e.jsx(n.code,{children:"-1"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"sameSite?: 'strict' | 'lax'"})," — политика ",e.jsx(n.code,{children:"SameSite"}),". По умолчанию: ",e.jsx(n.code,{children:"'strict'"})," (куки отправляется только при переходах внутри сайта). ",e.jsx(n.code,{children:"'lax'"})," — также разрешает отправку при переходах с внешних ссылок (GET-запросы)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"arguments?: string[]"})," — массив дополнительных директив, которые добавляются в строку куки (например: ",e.jsx(n.code,{children:"'Secure'"}),", ",e.jsx(n.code,{children:"'Path=/'"}),", ",e.jsx(n.code,{children:"'Domain=.myapp.com'"}),")."]}),`
`]})]})}function j(s={}){const{wrapper:n}={...c(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{j as default};
