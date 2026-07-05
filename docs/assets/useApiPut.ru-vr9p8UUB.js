import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/functional/Composables/useApiPut - Выполнение PUT-запросов`}),`
`,(0,c.jsx)(n.h1,{id:`useapiput`,children:(0,c.jsx)(n.code,{children:`useApiPut`})}),`
`,(0,c.jsxs)(n.p,{children:[`Возвращает объект с состоянием загрузки и методом `,(0,c.jsx)(n.code,{children:`send`}),` для выполнения `,(0,c.jsx)(n.code,{children:`PUT`}),`-запросов к API. Является удобной оберткой над `,(0,c.jsx)(n.code,{children:`useApiRequest`}),` с предустановленным методом `,(0,c.jsx)(n.code,{children:`PUT`}),`. Принимает настройки в виде единого объекта `,(0,c.jsx)(n.code,{children:`UseApiPutSetup`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setup: UseApiPutSetup`}),` — Объект настроек запроса:`,`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path?: RefOrNormal<string | undefined>`}),` — Путь к endpoint API (может быть реактивным).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`action?: (data: Return | undefined) => Promise<void> | void`}),` — Действие (коллбэк), выполняемое после успешного завершения запроса.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`transformation?: (data: T) => Return`}),` — Функция трансформации ответа от сервера перед возвращением или передачей в `,(0,c.jsx)(n.code,{children:`action`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`validateRequestContract?: (data: Request) => ApiDataValidation & Return`}),` — Функция валидации контракта отправляемого запроса.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`validateResponseContract?: (data: T) => ApiDataValidation & Return`}),` — Функция валидации контракта полученного ответа.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`errorContract?: ApiErrorStorageList`}),` — хранилище контрактов ошибок ответа.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toData?: boolean`}),` — Извлекать ли поле `,(0,c.jsx)(n.code,{children:`data`}),` из ответа. По умолчанию `,(0,c.jsx)(n.code,{children:`true`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: ApiOptions`}),` — Дополнительные опции запроса (объект параметров `,(0,c.jsx)(n.code,{children:`ApiFetch`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`apiInstance?: ApiInstance`}),` — Экземпляр API, используемый для выполнения запроса. По умолчанию `,(0,c.jsx)(n.code,{children:`Api.getItem()`}),`.`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
Объект со следующими свойствами:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`loading: Ref<boolean>`}),` — Реактивное состояние загрузки. Принимает значение `,(0,c.jsx)(n.code,{children:`true`}),` во время выполнения запроса и `,(0,c.jsx)(n.code,{children:`false`}),` после его завершения или ошибки.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`send(request?: Request): Promise<Return | undefined>`}),` — Асинхронный метод для отправки `,(0,c.jsx)(n.code,{children:`PUT`}),`-запроса. Он автоматически управляет состоянием `,(0,c.jsx)(n.code,{children:`loading`}),`, проверяет контракты валидации запроса и ответа, применяет функцию трансформации к ответам, вызывает коллбэк `,(0,c.jsx)(n.code,{children:`action`}),` при успехе и безопасно обрабатывает ошибки.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { useApiPut } from '@dxtmisha/functional'

const { loading, send } = useApiPut({
  path: '/api/update',
  action: (data) => console.log('Действие завершено:', data),
  transformation: (raw) => ({ ...raw, processed: true }),
  validateRequestContract: (req) => ({ success: true, ...req }),
  toData: true,
  options: { cache: false }
})

const handleSubmit = async () => {
  const result = await send({ id: 1, name: 'Updated User' })
  console.log('Итоговый результат:', result)
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};