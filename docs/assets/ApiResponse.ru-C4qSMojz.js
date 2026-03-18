import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(s){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/ru/functional-basic/Classes/ApiResponse - Эмуляция API запросов"}),`
`,e.jsx(n.h1,{id:"класс-apiresponse",children:"Класс ApiResponse"}),`
`,e.jsx(n.p,{children:"Класс для управления и эмуляции ответов API. Позволяет перехватывать API-запросы и возвращать заранее определенные (заглушки) ответы. Это крайне полезно при разработке клиентской части, тестировании или при отсутствии полностью функционального бэкенда."}),`
`,e.jsx(n.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Перехват запросов"})," — сопоставляет исходящие запросы на основе пути, HTTP-метода и отправляемых данных."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Динамические заглушки"})," — ответы могут быть как статическими объектами, так и динамическими функциями, выполняемыми во время запроса."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Симуляция задержки"})," — реалистичная эмуляция задержки сети для определенных заглушек."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Режим разработчика"})," — опциональное логирование совпадений эмулятора для отладки."]}),`
`]}),`
`,e.jsx(n.h2,{id:"инициализация",children:"Инициализация"}),`
`,e.jsxs(n.p,{children:["Для инициализации объекта вызовите конструктор ",e.jsx(n.code,{children:"ApiResponse(requestDefault)"}),"."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"requestDefault: ApiDefault"})," — экземпляр класса для обработки параметров запроса по умолчанию."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { ApiResponse, ApiDefault } from '@dxtmisha/functional'

// 1. Инициализация зависимостей
const apiDefault = new ApiDefault()

// 2. Создание экземпляра эмулятора
const apiResponse = new ApiResponse(apiDefault)

// 3. Добавление мок-ответа
apiResponse.add({
  path: 'user/get',
  method: 'get',
  response: { id: 1, name: 'Admin' }
})
`})}),`
`,e.jsx(n.h2,{id:"методы",children:"Методы"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"get(path: string = '', method: ApiMethod, request?: ApiFetch['request'], devMode?: boolean): ApiResponseItem | undefined"})," — Проверяет наличие глобального кэшированного запроса и возвращает его (синхронно)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getList(): (ApiResponseItem & Record<string, any>)[]"})," — Возвращает список всех зарегистрированных моков эмулятора."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"add(response: ApiResponseItem | ApiResponseItem[]): this"})," — Регистрирует и добавляет мок-ответ(ы) в эмулятор."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setDevMode(devMode: boolean): this"})," — Включает или отключает режим разработчика с предупреждениями в консоли при срабатывании заглушек."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"emulator<T>(apiFetch: ApiFetch): Promise<T | undefined>"})," — Выполняет эмуляцию запроса, если подходящий мок существует, включая обработку задержки."]}),`
`]})]})}function x(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{x as default};
