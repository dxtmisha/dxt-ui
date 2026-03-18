import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function c(o){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"@dxtmisha/ru/functional-basic/Classes/CookieBlock - Глобальный контроль Cookie"}),`
`,e.jsx(n.h1,{id:"класс-cookieblock",children:"Класс CookieBlock"}),`
`,e.jsxs(n.p,{children:['Статический служебный класс, который служит глобальным "аварийным выключателем" для изменений куки в DOM. Он предоставляет простое логическое состояние, которое другие классы, в частности ',e.jsx(n.code,{children:"Cookie"}),", проверяют перед попыткой записи в ",e.jsx(n.code,{children:"document.cookie"}),"."]}),`
`,e.jsx(n.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Глобальная истина"})," — единая точка конфигурации для остановки операций с куки в масштабах всего приложения."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Соответствие конфиденциальности"}),' — крайне полезно для реализации баннеров "Согласие на использование файлов cookie". Просто установите блокировку в ',e.jsx(n.code,{children:"true"}),", пока пользователь явно не примет все куки."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Поддержка DataStorage"})," — внутренне использует абстракцию ",e.jsx(n.code,{children:"DataStorage"})," для надежного поддержания заблокированного состояния."]}),`
`]}),`
`,e.jsxs(n.p,{children:["Поскольку все методы ",e.jsx(n.code,{children:"static"}),", вы взаимодействуете с классом напрямую."]}),`
`,e.jsx(n.h2,{id:"управление-доступом",children:"Управление доступом"}),`
`,e.jsx(n.h3,{id:"get",children:e.jsx(n.code,{children:"get"})}),`
`,e.jsxs(n.p,{children:["Используйте метод ",e.jsx(n.code,{children:"get()"})," для чтения текущего статуса блокировки. Возвращает логическое значение."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"boolean"})," — ",e.jsx(n.code,{children:"true"}),", если запись куки заблокирована."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`if (CookieBlock.get()) {
  console.log('Запись куки в настоящее время заблокирована настройками пользователя.')
}
`})}),`
`,e.jsx(n.h3,{id:"set",children:e.jsx(n.code,{children:"set"})}),`
`,e.jsxs(n.p,{children:["Используйте метод ",e.jsx(n.code,{children:"set()"})," для включения или отключения возможностей записи куки."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: boolean"})," — ",e.jsx(n.code,{children:"true"})," для блокировки записи куки, ",e.jsx(n.code,{children:"false"})," для разрешения."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { CookieBlock } from '@dxtmisha/functional'

// Заблокировать все будущие записи куки в DOM
CookieBlock.set(true)

// Разрешить записи куки в DOM (поведение по умолчанию)
CookieBlock.set(false)
`})}),`
`,e.jsxs(n.h2,{id:"как-это-взаимодействует-с-cookie",children:["Как это взаимодействует с ",e.jsx(n.code,{children:"Cookie"})]}),`
`,e.jsxs(n.p,{children:["Базовый класс ",e.jsx(n.code,{children:"Cookie"})," строго следит за этой блокировкой. Если ",e.jsx(n.code,{children:"CookieBlock.get()"})," возвращает ",e.jsx(n.code,{children:"true"}),":"]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Логика вашего приложения технически все еще может вызывать ",e.jsx(n.code,{children:"cookieInstance.set('value')"}),"."]}),`
`,e.jsxs(n.li,{children:["Экземпляр ",e.jsx(n.code,{children:"Cookie"})," обновит свое ",e.jsx(n.em,{children:"внутреннее хранилище в памяти"})," новым значением."]}),`
`,e.jsxs(n.li,{children:["Экземпляр ",e.jsx(n.code,{children:"Cookie"})," ",e.jsx(n.strong,{children:"молча откажется"})," от фактической записи в DOM ",e.jsx(n.code,{children:"document.cookie = ..."}),"."]}),`
`]}),`
`,e.jsx(n.p,{children:"Это гарантирует, что ваше приложение не сломается от неопределенных чтений в памяти, при этом строго соблюдая настройки браузера по сохранению на диск."})]})}function j(o={}){const{wrapper:n}={...s(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(c,{...o})}):c(o)}export{j as default};
