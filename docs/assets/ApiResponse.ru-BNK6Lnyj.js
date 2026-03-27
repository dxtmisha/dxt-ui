import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-DymlrBn2.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional-basic/Classes/ApiResponse - Эмуляция API запросов`}),`
`,(0,c.jsx)(n.h1,{id:`класс-apiresponse`,children:`Класс ApiResponse`}),`
`,(0,c.jsx)(n.p,{children:`Класс для управления и эмуляции ответов API. Позволяет перехватывать API-запросы и возвращать заранее определенные (заглушки) ответы. Это крайне полезно при разработке клиентской части, тестировании или при отсутствии полностью функционального бэкенда.`}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Перехват запросов`}),` — сопоставляет исходящие запросы на основе пути, HTTP-метода и отправляемых данных.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Динамические заглушки`}),` — ответы могут быть как статическими объектами, так и динамическими функциями, выполняемыми во время запроса.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Симуляция задержки`}),` — реалистичная эмуляция задержки сети для определенных заглушек.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Режим разработчика`}),` — опциональное логирование совпадений эмулятора для отладки.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[`Для инициализации объекта вызовите конструктор `,(0,c.jsx)(n.code,{children:`ApiResponse(requestDefault)`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`requestDefault: ApiDefault`}),` — экземпляр класса для обработки параметров запроса по умолчанию.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { ApiResponse, ApiDefault } from '@dxtmisha/functional'

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
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(path: string = '', method: ApiMethod, request?: ApiFetch['request'], devMode?: boolean): ApiResponseItem | undefined`}),` — Проверяет наличие глобального кэшированного запроса и возвращает его (синхронно).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getList(): (ApiResponseItem & Record<string, any>)[]`}),` — Возвращает список всех зарегистрированных моков эмулятора.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`add(response: ApiResponseItem | ApiResponseItem[]): this`}),` — Регистрирует и добавляет мок-ответ(ы) в эмулятор.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setDevMode(devMode: boolean): this`}),` — Включает или отключает режим разработчика с предупреждениями в консоли при срабатывании заглушек.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`emulator<T>(apiFetch: ApiFetch): Promise<T | undefined>`}),` — Выполняет эмуляцию запроса, если подходящий мок существует, включая обработку задержки.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};