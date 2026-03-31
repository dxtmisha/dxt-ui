import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional/Composables/useApiPost - Выполнение POST-запросов`}),`
`,(0,c.jsx)(n.h1,{id:`useapipost`,children:(0,c.jsx)(n.code,{children:`useApiPost`})}),`
`,(0,c.jsxs)(n.p,{children:[`Возвращает объект с состоянием загрузки и методом `,(0,c.jsx)(n.code,{children:`send`}),` для выполнения `,(0,c.jsx)(n.code,{children:`POST`}),`-запросов к API.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path?: RefOrNormal<string | undefined>`}),` — Путь к endpoint API (может быть реактивным).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`action?: (data: Return | undefined) => Promise<void> | void`}),` — Действие (коллбэк), выполняемое после успешного завершения запроса.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`transformation?: (data: T) => Return`}),` — Функция трансформации ответа от сервера перед возвращением или передачей в `,(0,c.jsx)(n.code,{children:`action`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toData: boolean = true`}),` — Извлекать ли поле `,(0,c.jsx)(n.code,{children:`data`}),` из ответа.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: ApiOptions`}),` — Дополнительные опции запроса (объект параметров `,(0,c.jsx)(n.code,{children:`ApiFetch`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`apiInstance?: ApiInstance`}),` — Экземпляр API, используемый для выполнения запроса. По умолчанию `,(0,c.jsx)(n.code,{children:`Api.getItem()`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
Объект со следующими свойствами:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`loading: Ref<boolean>`}),` — Реактивное состояние загрузки. Принимает значение `,(0,c.jsx)(n.code,{children:`true`}),` во время выполнения запроса и `,(0,c.jsx)(n.code,{children:`false`}),` после его завершения или ошибки.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`send(request?: Request): Promise<Return | undefined>`}),` — Асинхронный метод для отправки `,(0,c.jsx)(n.code,{children:`POST`}),`-запроса. Он автоматически управляет состоянием `,(0,c.jsx)(n.code,{children:`loading`}),`, применяет функцию трансформации к ответу, вызывает коллбэк `,(0,c.jsx)(n.code,{children:`action`}),` при успехе и безопасно обрабатывает ошибки.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { useApiPost } from '@dxtmisha/functional'

const { loading, send } = useApiPost(
  '/api/submit',
  (data) => console.log('Действие завершено:', data),
  (raw) => ({ ...raw, processed: true }),
  true,
  { cache: false }
)

const handleSubmit = async () => {
  const result = await send({ name: 'User' })
  console.log('Итоговый результат:', result)
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};