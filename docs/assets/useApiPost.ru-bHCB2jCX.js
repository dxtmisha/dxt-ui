import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional/Composables/useApiPost - Выполнение POST-запросов`}),`
`,(0,c.jsx)(t.h1,{id:`useapipost`,children:(0,c.jsx)(t.code,{children:`useApiPost`})}),`
`,(0,c.jsxs)(t.p,{children:[`Возвращает объект с состоянием загрузки и методом `,(0,c.jsx)(t.code,{children:`send`}),` для выполнения `,(0,c.jsx)(t.code,{children:`POST`}),`-запросов к API. Является удобной оберткой над `,(0,c.jsx)(t.code,{children:`useApiRequest`}),` с предустановленным методом `,(0,c.jsx)(t.code,{children:`POST`}),`. Принимает настройки в виде единого объекта `,(0,c.jsx)(t.code,{children:`UseApiPostSetup`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setup: UseApiPostSetup`}),` — Объект настроек запроса:`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`path?: RefOrNormal<string | undefined>`}),` — Путь к endpoint API (может быть реактивным).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`action?: (data: Return | undefined) => Promise<void> | void`}),` — Колбэк после получения и обработки данных ответа, независимо от успешности.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`actionSuccess?: (data: Return) => Promise<void> | void`}),` — Колбэк для успешного ответа по проверке `,(0,c.jsx)(t.code,{children:`isApiSuccess`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`actionError?: (data: Return | undefined, error?: unknown) => Promise<void> | void`}),` — Колбэк для ошибочного ответа или результата валидации. При ошибке сети передаются `,(0,c.jsx)(t.code,{children:`(undefined, error)`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`transformation?: (data: T) => Return`}),` — Функция трансформации ответа от сервера перед возвращением или передачей в `,(0,c.jsx)(t.code,{children:`action`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`validateRequestContract?: (data: Request) => ApiDataValidation & Return`}),` — Функция валидации контракта отправляемого запроса.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`validateResponseContract?: (data: T) => ApiDataValidation & Return`}),` — Функция валидации контракта полученного ответа.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`errorContract?: ApiErrorStorageList`}),` — хранилище контрактов ошибок ответа.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`toData?: boolean`}),` — Извлекать ли поле `,(0,c.jsx)(t.code,{children:`data`}),` из ответа. По умолчанию `,(0,c.jsx)(t.code,{children:`true`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options?: ApiOptions`}),` — Дополнительные опции запроса (объект параметров `,(0,c.jsx)(t.code,{children:`ApiFetch`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`apiInstance?: ApiInstance`}),` — Экземпляр API, используемый для выполнения запроса. По умолчанию `,(0,c.jsx)(t.code,{children:`Api.getItem()`}),`.`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
Объект со следующими свойствами:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`loading: Ref<boolean>`}),` — `,(0,c.jsx)(t.code,{children:`true`}),`, пока выполняется хотя бы один вызов `,(0,c.jsx)(t.code,{children:`send`}),`, включая валидацию и ожидаемые колбэки. Параллельные вызовы разрешены; `,(0,c.jsx)(t.code,{children:`false`}),` устанавливается после завершения всех вызовов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`send(request?: Request): Promise<Return | undefined>`}),` — Проверяет контракты запроса и ответа, применяет трансформацию и при получении данных ответа ожидает `,(0,c.jsx)(t.code,{children:`action`}),`, затем соответствующий колбэк результата. При ошибке валидации запроса вызывается только `,(0,c.jsx)(t.code,{children:`actionError`}),`; при ошибке сети вызывается `,(0,c.jsx)(t.code,{children:`actionError(undefined, error)`}),`, а метод возвращает `,(0,c.jsx)(t.code,{children:`undefined`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { useApiPost } from '@dxtmisha/functional'

const { loading, send } = useApiPost({
  path: '/api/submit',
  action: (data) => console.log('Действие завершено:', data),
  transformation: (raw) => ({ ...raw, processed: true }),
  validateRequestContract: (req) => ({ success: true, ...req }),
  toData: true,
  options: { cache: false }
})

const handleSubmit = async () => {
  const result = await send({ name: 'User' })
  console.log('Итоговый результат:', result)
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};